import { Controller, Res, Req, Get } from '@nestjs/common';
import { TransfertService } from 'src/services/transfert.service';
import { ApiTags } from '@nestjs/swagger';
import { environment } from 'src/environment/environment';

@Controller('apiList')
@ApiTags('List')
export class ApiListController {

    constructor(
        private transfertService: TransfertService
    ) { }

    @Get()
    public getAll(@Req() req): any {
        return this.transfertService.sendRequest(req, environment.apiSystem+"/api")
    }

}
