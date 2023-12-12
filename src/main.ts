import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const env = app.get(ConfigService);

	const config = new DocumentBuilder()
		.setTitle("Documentação da API - Guia do Campus")
		.setDescription(
			"Bem-vindo à documentação da API do 'Guia do Campus'! Nossa API proporciona acesso fácil a informações essenciais sobre departamentos, salas de aula, serviços, horários e eventos na universidade, simplificando a experiência dos alunos, professores e funcionários. Explore a documentação para obter detalhes sobre como usar a API.",
		)
		.setVersion("0.0.1")
		.addTag("sectors")
		.addTag("authentication")
		.addTag("admin")
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("api", app, document);

	app.enableCors();

	await app.listen(env.get("PORT"));
}
bootstrap();
