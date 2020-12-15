import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpRequest = require('request');

@Injectable()
export class TransfertService {

    constructor(private httpService: HttpService) {

    }


    public sendRequest(request, response:any, url: string, body: any = null): Promise<any> {

        // return this.httpService.request({
        //     method: request.method,
        //     url: url,
        //     headers: request.headers,
        //     data: body
        // }).pipe(map((x:any) => {
        //     console.log(x.headers)
        //     response.set(x.headers)
        //     response.status(x.status).send(x.data)
        //     return
        // }),err=>{
        //     response.status(404).send(err)
        // })



        return new Promise((resolve, reject) => {

            // delete context.request.headers['host']
            // delete context.request.headers['user-agent']
            // delete context.request.headers['postman-token']
            delete request.headers['content-length']

            let options = {
                method: request.method,
                url: url,
                headers: request.headers,
                json: body
            };
            console.log('request =>', request.method, "=>", url)

            // function callback(error: any, response: any, bodyResp: any) {
            //     if (error) {
            //          reject('erreur -> ' + error);
            //          return
            //     }
            //     // if (typeof body == 'string' && body.split('')[0]=='{') {
            //     //     body = JSON.parse(body);
            //     // }
            //     response.set(response.headers)
            //      resolve(response.body);
            //      return
            // }
            httpRequest(options, (error: any, res: any, bodyResp: any) => {
                if (error) {
                    reject(response.status(500).send(error));
                    return
                }
                // if (typeof body == 'string' && body.split('')[0]=='{') {
                //     body = JSON.parse(body);
                // }
                response.set(res.headers)
                response.status(res.statusCode).send(res.body)
                resolve(true);

            });
        });

    }


}
