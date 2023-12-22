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
import { InfoModule } from "./info/info.module";
import { ClassesScheduleModule } from "./classes-schedule/classes-schedule.module";
import { MapModule } from "./map/map.module";
@Module({
	imports: [
		ConfigModule.forRoot(),
		SectorsModule,
		AuthModule,
		AdminModule,
		ContactModule,
		FilesModule,
		ProceduresModule,
		InfoModule,
		ClassesScheduleModule,
		MapModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
