import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()

export class ApiService {

  public response: Observable<any>;
  base: string = "https://rickandmortyapi.com/api/";
  // base: string = "https://www.breakingbadapi.com/api";

  constructor(private http: Http){
    console.log("API SERVICE INICIADO");
  }

  getData(){
    return this.http.get(`${this.base}/character`)
      .pipe(
        map(res => res.json())
      );
  }

}