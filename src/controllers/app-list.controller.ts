import { Controller, Req, Res, Get } from '@nestjs/common';
import { TransfertService } from 'src/services/transfert.service';
import { ApiTags } from '@nestjs/swagger';
import { environment } from 'src/environment/environment';

@Controller('appList')
@ApiTags('List')
export class AppListController {

    constructor(
        private transfertService: TransfertService
    ) { }

    @Get()
    public getAll(@Req() req, @Res() res): any {
        return this.transfertService.sendRequest(req, res, environment.apiSystem + "/app")
    }


}
