import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class QuestionService {
    API: string = "http://localhost:8080";

    constructor(public http: HttpClient) {}

    getQuestion(): Observable<any> {
        return this.http.get(this.API);
    }
}