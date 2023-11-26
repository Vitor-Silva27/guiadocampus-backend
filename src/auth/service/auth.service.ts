import {
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from "@nestjs/common";
import { LoginData } from "../dto/loginData.dto";
import { JwtService } from "@nestjs/jwt";
import { AdminService } from "src/admin/service/admin.service";
import bcrypt from "bcrypt";

@Injectable()
export class AuthService {
	constructor(
		private jwtService: JwtService,
		private adminService: AdminService,
	) {}

	async login(loginData: LoginData) {
		const user = await this.validate(loginData);

		const payload = {
			sub: user.id,
			name: user.name,
			email: user.email,
		};
		return this.jwtService.sign(payload);
	}

	private async validate({ email, password }: LoginData) {
		try {
			const user = await this.adminService.findOneByEmail(email);

			if (!user) {
				throw new UnauthorizedException("Email or password is incorrect!");
			}

			const isPasswordValid = await bcrypt.compareSync(password, user.password);

			if (!isPasswordValid) {
				throw new UnauthorizedException("Email or password is incorrect!");
			}

			return user;
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw new UnauthorizedException("Email or password is incorrect!");
			}
			throw error;
		}
	}
}
