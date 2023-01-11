import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locataire } from '../modeles/locataire';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  listeLocataires():Observable<Object>{
    return this.http.get('http://127.0.0.1:8000/locataires/');
  }
  deleteRenter(id:any){
    return this.http.delete('http://127.0.0.1:8000/locataires/'+id);
  }
  getRenterByName(nom:any){
    return this.http.get('http://127.0.0.1:8000/locataires/nom/'+nom);
  }
  getRenterById(id:any){
    return this.http.get('http://127.0.0.1:8000/locataires/'+id);
  }

  listeVoiture():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/voitures/');
  }

  getCarByImma(imma:any){
    return this.http.get('http://127.0.0.1:8000/voitures/'+imma);
  }

  deleteCar(imma:any){
    return this.http.delete('http://127.0.0.1:8000/voitures/'+imma);
  }

  getCarByBrand(brand:any){
    return this.http.get('http://127.0.0.1:8000/voitures/marque/'+brand);
  }

  getAvailableCars(etat:any){
    return this.http.get('http://127.0.0.1:8000/voitures/disponible');
  }
  getNotAvailableCars(etat:any){
    return this.http.get('http://127.0.0.1:8000/voitures/louee');
  }

}
