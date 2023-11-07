import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { SectorsModule } from './sectors/sectors.module';
@Module({
	imports: [ConfigModule.forRoot(), SectorsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
