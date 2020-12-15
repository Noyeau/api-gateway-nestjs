import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class ConfigService {

    constructor(private httpService: HttpService) {
        this.init()
    }

 

    public apiList:any[]=[]


    private init(){
        this.httpService.get("http://192.168.1.15:1899/api").subscribe((res:any)=>{
            this.apiList = res.data
        })
    }




}
