import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Survey} from './survey.model';
import { JwtHelperService } from '@auth0/angular-jwt';

const PROTOCOL = 'http';
const PORT = 3000;


@Injectable()
export class RestDataSource
{
    baseUrl: string;
    authToken: string;

    private httpOptions = 
    {
        headers: new  HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        })
    };   

    
    constructor(private http: HttpClient, private jwtService: JwtHelperService)
    {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getSurveys(): Observable<Survey[]>
    {
        return this.http.get<Survey[]>(this.baseUrl + 'survey/list');
    }
    getSurvey(id: number): Observable<Survey>
    {
        return this.http.get<Survey>(this.baseUrl + 'suvey/edit/'+id);
    }
    addSurvey(survey: Survey): Observable<Survey>
    {
        console.log(JSON.stringify(survey));
        return this.http.post<Survey>(this.baseUrl+ 'survey/add', survey);
    }
    editSurvey(id: number): Observable<Survey>
    {
        return this.http.get<Survey[]>(this.baseUrl + 'survey/edit/'+id);
    } 
    deleteSurvey(id: number): Observable<void>
    {
        console.log(this.baseUrl+ 'survey/del/'+id);
        return this.http.get<void>(this.baseUrl+ 'survey/del/'+id);
    }
    private loadToken(): void
    {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    }
    
}