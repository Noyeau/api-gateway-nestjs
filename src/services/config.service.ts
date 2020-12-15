import { Injectable, HttpService } from '@nestjs/common';
import { environment } from 'src/environment/environment';

@Injectable()
export class ConfigService {

    constructor(private httpService: HttpService) {
        this.init()
    }

 

    public apiList:any[]=[]


    private init(){
        const headersRequest = {
            'Content-Type': 'application/json', // afaik this one is not needed
            'Authorization': environment.apiKeyCode,
        };
        this.httpService.get( environment.apiSystem+"/api",{ headers: headersRequest }).subscribe((res:any)=>{
            this.apiList = res.data
        })
    }




}
