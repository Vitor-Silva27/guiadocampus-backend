import { Module } from "@nestjs/common";
import { AuthService } from "./service/auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";

import { AdminModule } from "src/admin/admin.module";
import { env } from "process";
import { JwtService } from "./jwt/jwt.service";

@Module({
	imports: [
		JwtModule.register({
			secret: env.TOKEN_KEY,
			signOptions: {
				expiresIn: "1d",
			},
		}),
		AdminModule,
	],
	controllers: [AuthController],
	providers: [AuthService, JwtService],
})
export class AuthModule {}
