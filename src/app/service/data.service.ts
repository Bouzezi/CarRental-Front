import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locataire } from '../modeles/locataire';
import { Voiture } from '../modeles/voiture';
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
  addCar(car: Voiture):Observable<any>{
    return this.http.post('http://localhost:8000/voitures/',car);
  }
  getCarByImma(imma:any){
    return this.http.get('http://127.0.0.1:8000/voitures/'+imma);
  }
  updateCar(id:any, data:Voiture){
    return this.http.put('http://127.0.0.1:8000/voitures/'+id,data);
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
