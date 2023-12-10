import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { SectorsModule } from "./sectors/sectors.module";
import { AuthModule } from "./auth/auth.module";
import { AdminModule } from "./admin/admin.module";
import { ContactModule } from "./contact/contact.module";
import { FilesModule } from "./files/files.module";
import { ProceduresModule } from "./procedures/procedures.module";
@Module({
	imports: [
		ConfigModule.forRoot(),
		SectorsModule,
		AuthModule,
		AdminModule,
		ContactModule,
		FilesModule,
		ProceduresModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
