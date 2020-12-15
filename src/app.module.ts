import { Module, HttpModule } from '@nestjs/common';
import { TransfertController } from './controllers/transfert.controller';
import { ConfigService } from './services/config.service';
import { TransfertService } from './services/transfert.service';
import { ApiListController } from './controllers/api-list.controller';
import { AppListController } from './controllers/app-list.controller';


@Module({
  imports: [HttpModule],
  controllers: [TransfertController, ApiListController, AppListController],
  providers: [ ConfigService, TransfertService],
})
export class AppModule {}
