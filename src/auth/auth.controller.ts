import { Controller } from "@nestjs/common";
import { AuthService } from "./service/auth.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("authentication")
@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}
}
