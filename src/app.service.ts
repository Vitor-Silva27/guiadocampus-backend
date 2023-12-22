import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
	getHello(): string {
		return "Bem vindo(a) ao guia do campus, para acessar a documentação da Api use a rota /api";
	}
}
