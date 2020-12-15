import { Controller, Req, Res, Get } from '@nestjs/common';
import { TransfertService } from 'src/services/transfert.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('appList')
@ApiTags('List')
export class AppListController {

    constructor(
        private transfertService: TransfertService
        ){}

        @Get()
        public getAll(@Req() req): any {
            return this.transfertService.sendRequest(req,  "http://192.168.1.15:1899/app")
        }

        
}
