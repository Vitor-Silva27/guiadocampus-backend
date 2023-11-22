import { Injectable } from "@nestjs/common";
import { LoginData } from "../dto/loginData.dto";

@Injectable()
export class AuthService {
	async login(loginData: LoginData) {}
}
