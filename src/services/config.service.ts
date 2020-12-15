import { Injectable, HttpService } from '@nestjs/common';
import { environment } from 'src/environment/environment';

@Injectable()
export class ConfigService {

    constructor(private httpService: HttpService) {
        this.init()
    }

 

    public apiList:any[]=[]


    private init(){
        this.httpService.get( environment.apiSystem+"/api").subscribe((res:any)=>{
            this.apiList = res.data
        })
    }




}
