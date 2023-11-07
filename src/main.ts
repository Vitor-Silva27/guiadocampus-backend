import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const env = app.get(ConfigService);
	await app.listen(env.get("PORT"));
}
bootstrap();
