import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Feed2jsonService {

  constructor( private http: HttpClient ) {
    this.getRss();
  }

  getRss(){
    console.log('Hola mundo');
    
    return this.http.get('http://despertardelamontana.com/c-destacados?format=feed');
  }



}
