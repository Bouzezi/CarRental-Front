import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locataire } from '../modeles/locataire';
import { Louer } from '../modeles/louer';
import { Voiture } from '../modeles/voiture';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  listeLocataires():Observable<Object>{
    return this.http.get('http://127.0.0.1:8000/locataires/');
  }
  addRenter(renter: Locataire):Observable<any>{
    return this.http.post('http://localhost:8000/locataires/',renter);
  }
  deleteRenter(id:any){
    return this.http.delete('http://127.0.0.1:8000/locataires/'+id);
  }
  updateRenter(id:any, data:Locataire){
    return this.http.put('http://127.0.0.1:8000/locataires/'+id,data);
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
  all_cars_not_rented():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/voitures/disponible');
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

  getAvailableCars(){
    return this.http.get('http://127.0.0.1:8000/voitures/disponible');
  }
  getNotAvailableCars(){
    return this.http.get('http://127.0.0.1:8000/voitures/louee');
  }

  getListCarsOfRenter(id:any){
    return this.http.get('http://127.0.0.1:8000/location/listeVoitures/'+id);
  }
  return_Car(rendre:Louer){
    return this.http.put('http://127.0.0.1:8000/location/rendre/',rendre);
  }
  louerVoiture(louer:Louer):Observable<any>{
    return this.http.post('http://localhost:8000/location/louer',louer);
  }
}
