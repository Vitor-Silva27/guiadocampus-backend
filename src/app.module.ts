import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { SectorsModule } from "./sectors/sectors.module";
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { SectorServicesModule } from './sector-services/sector-services.module';
import { ContactModule } from './contact/contact.module';
import { FilesModule } from './files/files.module';
@Module({
	imports: [ConfigModule.forRoot(), SectorsModule, AuthModule, AdminModule, SectorServicesModule, ContactModule, FilesModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
