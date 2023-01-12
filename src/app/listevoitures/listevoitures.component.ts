import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Etat } from '../modeles/etat';
import { DataService } from '../service/data.service';

@Component({
  selector: 'listevoitures',
  templateUrl: './listevoitures.component.html',
  styleUrls: ['./listevoitures.component.css']
})
export class ListevoituresComponent implements OnInit {
  voitures:any= []
  value:any
  page:Number = 1
  etat:Etat=new Etat(2,"tous")
  listEtats:any=[new Etat(0,"disponible"),new Etat(1,"louée"),new Etat(2,"tous")]
  constructor(private dataService: DataService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listeVoiture();
  }

  listeVoiture(){
    this.dataService.listeVoiture().subscribe(res => {
    console.log(res);
    this.voitures =res; 
    });
  }

  deleteData(imma:any){
    console.log(imma);
    this.dataService.deleteCar(imma).subscribe(res => {
      //console.log(res);
      this.listeVoiture();
      this.showNotification('la voiture est supprimé avec succès.')
    })
  }

  showNotification(message){
    this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> '+message, '', {
      timeOut: 8000,
      closeButton: true,
      enableHtml: true, 
      toastClass: "alert alert-success alert-with-icon",
      positionClass: 'toast-' + 'bottom' + '-' +  'right'
    });
  }

  filter(){
    console.log(this.etat);
    if (this.etat.id==0){
      this.dataService.getAvailableCars(this.value).subscribe(res=>{
        console.log(res);
        this.voitures.splice(0)
        this.voitures=res
      });
    }else if(this.etat.id==1){
      this.dataService.getNotAvailableCars(this.value).subscribe(res=>{
        console.log(res);
        this.voitures.splice(0)
        this.voitures=res
      });
    }else if(this.etat.id==2){
      this.voitures.splice(0)
      this.listeVoiture();
    }
  }

  search(){
    if (this.value == ""){
      this.voitures.splice(0)
      this.listeVoiture();
    }
    else{
        if (Number(this.value)){
          this.dataService.getCarByImma(this.value).subscribe(res=>{
            console.log(res);
            this.voitures.splice(0)
            this.voitures.push(res)
          });
        } else{ 
            this.dataService.getCarByBrand(this.value).subscribe(res=>{
              console.log(res);
              this.voitures =res;
          });
        } 
      } 
  }

}
