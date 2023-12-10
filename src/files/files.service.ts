import {
	Inject,
	Injectable,
	InternalServerErrorException,
} from "@nestjs/common";
import { CreateFileDto } from "./dto/create-file.dto";
import {
	S3Client,
	PutObjectCommand,
	PutObjectCommandInput,
} from "@aws-sdk/client-s3";
import { env } from "process";
import { IFileRepository } from "./repositories/IFileRepository";
@Injectable()
export class FilesService {
	private region: string;
	private s3: S3Client;

	constructor(
		@Inject("RepositoryGateway")
		private repository: IFileRepository,
	) {
		this.region = env.S3_REGION;
		this.s3 = new S3Client({
			region: this.region,
			credentials: {
				accessKeyId: env.S3_ACCESS_KEY,
				secretAccessKey: env.S3_SECRET,
			},
		});
	}

	async uploadFile(file: Express.Multer.File, createFileDto: CreateFileDto) {
		const key = `${file.fieldname}${Date.now()}`;

		const bucket = env.S3_BUCKET;

		const input: PutObjectCommandInput = {
			Body: file.buffer,
			Bucket: bucket,
			Key: key,
			ContentType: file.mimetype,
			ACL: "public-read",
		};

		const res = await this.s3.send(new PutObjectCommand(input));

		if (res.$metadata.httpStatusCode === 200) {
			createFileDto.link = `https://${bucket}.s3.amazonaws.com/${key}`;

			return await this.repository.create(createFileDto);
		} else {
			throw new InternalServerErrorException("File upload failed");
		}
	}
}
