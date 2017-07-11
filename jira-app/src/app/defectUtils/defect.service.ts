import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import $ from 'jquery';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/toPromise';

import { Defect } from './defect.model';
import { DEFECTS } from './mock-defects';

@Injectable()
export class DefectService {

    private getDefectsUrl = 'http://localhost:9090/getDefects';  // URL to web api
    private addDefectUrl = 'http://localhost:9090/addDefect';

    constructor(private http: Http) { }

    getDefects(): Observable<Defect[]> {
        /*return this.http.get(this.getDefectsUrl)
               .map(response => response.json() as Defect[])
               .catch(this.handleError);*/
        return Observable.of(DEFECTS); //Promise.resolve(DEFECTS);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }

    getDefectsSlowly(): Promise<Defect[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getDefects()), 2000);
        });
    }

    addDefect(defect: Defect): Observable<Defect> {

        /*$.ajax({
            method: "POST",
            url: this.addDefectUrl,
            data: defect,
            success: function(data) {
                console.log(data);
            }
        });*/

        return this.http.post(this.addDefectUrl, defect)
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }

}
