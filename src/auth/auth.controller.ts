import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./service/auth.service";
import { ApiTags } from "@nestjs/swagger";
import { LoginData } from "./dto/loginData.dto";

@ApiTags("authentication")
@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("login")
	async login(@Body() loginData: LoginData) {
		const token = await this.authService.login(loginData);
		return {
			token,
		};
	}
}
