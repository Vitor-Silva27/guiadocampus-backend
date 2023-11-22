import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./service/auth.service";
import { ApiTags } from "@nestjs/swagger";
import { LoginData } from "./dto/loginData.dto";

@ApiTags("authentication")
@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("login")
	login(@Body() loginData: LoginData) {
		return this.authService.login(loginData);
	}
}
