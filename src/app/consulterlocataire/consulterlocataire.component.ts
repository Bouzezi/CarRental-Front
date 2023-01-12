import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Locataire } from '../modeles/locataire';
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
  constructor(private dataService: DataService,private toastr: ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getRenterById();
  }

  getRenterById(){
    this.dataService.getRenterById(this.id).subscribe(res => {
      if(res != "locataire non trouvée"){
        this.data=res;
        this.locataire=this.data;
      }
      (error) =>{
        this.showNotification(error,"warning")
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

  deleteData(imma:any){
    console.log(imma);
    /* this.dataService.deleteCar(imma).subscribe(res => {
      //console.log(res);
      this.listeVoiture();
      this.showNotification('la voiture est disponible',"success")
    }) */
  }
  search(){
    
  }

}
