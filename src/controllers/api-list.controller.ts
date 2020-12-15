import { Controller, Res, Req, Get } from '@nestjs/common';
import { TransfertService } from 'src/services/transfert.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('apiList')
@ApiTags('list')
export class ApiListController {

    constructor(
        private transfertService: TransfertService
    ) { }

    @Get()
    public getAll(@Req() req): any {
        return this.transfertService.sendRequest(req, "http://192.168.1.15:1899/api")
    }

}
