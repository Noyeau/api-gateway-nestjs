import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class TransfertService {

    constructor(private httpService: HttpService) {
     
    }


    public sendRequest(request,  url: string, body: any = null): Observable<any> {

        return this.httpService.request({
            method: request.method,
            url: url,
            headers: request.headers,
            data:body
        }).pipe(map(x=>{
            console.log(x)
            return x.data
        }))



        // return new Promise((resolve, reject) => {

        //     // delete context.request.headers['host']
        //     // delete context.request.headers['user-agent']
        //     // delete context.request.headers['postman-token']
        //     delete request.headers['content-length']

        //     let options = {
        //         method: request.method,
        //         url: url,
        //         headers: request.headers,
        //         json: body
        //     };
        //     console.log('request =>', request.method, "=>", url)

        //     // function callback(error: any, response: any, bodyResp: any) {
        //     //     if (error) {
        //     //          reject('erreur -> ' + error);
        //     //          return
        //     //     }
        //     //     // if (typeof body == 'string' && body.split('')[0]=='{') {
        //     //     //     body = JSON.parse(body);
        //     //     // }
        //     //     response.set(response.headers)
        //     //      resolve(response.body);
        //     //      return
        //     // }
        //     request(options, (error: any, response: any, bodyResp: any) => {
        //         if (error) {
        //             reject(response.status(500).send(error));
        //             return
        //         }
        //         // if (typeof body == 'string' && body.split('')[0]=='{') {
        //         //     body = JSON.parse(body);
        //         // }
        //         response.set(response.headers)
        //         response.status(response.statusCode).send(response.body)
        //         resolve(true);
                
        //     });
        // });

    }


}
