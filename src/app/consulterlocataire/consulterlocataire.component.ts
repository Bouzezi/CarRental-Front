import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Locataire } from '../modeles/locataire';
import { Louer } from '../modeles/louer';
import { DataService } from '../service/data.service';

@Component({
  selector: 'consulterlocataire',
  templateUrl: './consulterlocataire.component.html',
  styleUrls: ['./consulterlocataire.component.css']
})
export class ConsulterlocataireComponent implements OnInit {
  id:any;
  data:any;
  locataire=new Locataire
  voitures:any= []
  value:any
  page:Number = 1
  noData=false
  rendre=new Louer
  constructor(private dataService: DataService,private toastr: ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getRenterById();
    this.getListCarsOfRenter(); 
  }

  getRenterById(){
    this.dataService.getRenterById(this.id).subscribe(res => {
      if(res != "locataire non trouvée"){
        this.data=res;
        this.locataire=this.data;
      }
    },
    (error:any)=>{
        this.showNotification(error.error,"warning")
    })
  }

  getListCarsOfRenter(){
    this.dataService.getListCarsOfRenter(this.id).subscribe(res=>{
      console.log(res);
      this.voitures.splice(0);
      this.voitures=res;
      if(this.voitures.length == 0){
        this.noData=true
      }else{
        this.noData=false
      }
    })
  }

  updateLocataire(){
    this.dataService.updateRenter(this.id, this.locataire).subscribe(res => {
      console.log(res);
      if(res != "locataire non trouvée"){
        this.showNotification("locataire est modifié","success")
      }else{
        this.showNotification("locataire non trouvée","danger")
      }
    })
  }

  showNotification(message,color){
    this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> '+message, '', {
      timeOut: 8000,
      closeButton: true,
      enableHtml: true, 
      toastClass: "alert alert-"+color+" alert-with-icon",
      positionClass: 'toast-' + 'bottom' + '-' +  'right'
    });
  }

  return_Car(imma:any){
    console.log(imma);
    this.rendre.num_imma=imma;
    this.rendre.id_loc=this.id;
    this.dataService.return_Car(this.rendre).subscribe(res => {
      this.getListCarsOfRenter();
      this.showNotification('la voiture est disponible',"success")
    })
  }

  search(){
    if(this.getListCarsOfRenter.length!=0){
      if (this.value == ""){
        this.voitures.splice(0)
        this.getListCarsOfRenter();
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

}
