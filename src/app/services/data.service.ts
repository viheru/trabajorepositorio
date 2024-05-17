import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataSouthPark} from '../common/data-south-park';
import { Personaje } from '../common/data-south-park';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient){
    
  }

  loadSouthPark(): Observable<DataSouthPark> {
   return this.http.get<DataSouthPark>("https://spapi.dev/api/characters");
 }

 loadChar(id: string): Observable<Personaje> {
   return this.http.get<Personaje>("https://spapi.dev/api/characters/" + id);
 }  
 
 loadPag(pag: string): Observable<Personaje> {
  return this.http.get<Personaje>(pag);

} 
}
