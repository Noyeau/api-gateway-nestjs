import { Controller, Get, Req, Param, Res, Post, Body, Put, Delete } from '@nestjs/common';
import { ConfigService } from 'src/services/config.service';
import { TransfertService } from 'src/services/transfert.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('gateway')
@ApiTags('Gateway')
export class TransfertController {

    constructor(
        private configService:ConfigService,
        private transfertService: TransfertService
        ){}

    genereApiUrl(apiCode,urlOrigine) {
        
        let api = this.configService.apiList.find((ap) => ap.code == apiCode && ap.open == true)
         console.log(api)
     
        let url = null
        if (api) {
            let apiUrl = api.serveur + ':' + api.port
            url = apiUrl + urlOrigine.replace('/gateway/' + apiCode, '')
        }
        return url
    }

    @Get(':apiCode/**')
    public get(@Req() req, @Param('apiCode') apiCode: string): any {
        console.log(apiCode, req.url)
        let url = this.genereApiUrl(apiCode, req.url)
        if (url) {
            return this.transfertService.sendRequest(req, url);
        }
        return { err: 'api inexisante' }
    }

    @Post(':apiCode/**')
    public post(@Req() req, @Param('apiCode') apiCode: string, @Body() body:any): any {
        console.log(apiCode, req.url)
        let url = this.genereApiUrl(apiCode, req.url)
        if (url) {
            return this.transfertService.sendRequest(req, url, body);
        }
        return { err: 'api inexisante' }
    }

    @Put(':apiCode/**')
    public put(@Req() req, @Param('apiCode') apiCode: string, @Body() body:any): any {
        console.log(apiCode, req.url)
        let url = this.genereApiUrl(apiCode, req.url)
        if (url) {
            return this.transfertService.sendRequest(req, url, body);
        }
        return { err: 'api inexisante' }
    }

    @Delete(':apiCode/**')
    public del(@Req() req, @Param('apiCode') apiCode: string): any {
        console.log(apiCode, req.url)
        let url = this.genereApiUrl(apiCode, req.url)
        if (url) {
            return this.transfertService.sendRequest(req, url);
        }
        return { err: 'api inexisante' }
    }



}
