import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Voiture } from '../modeles/voiture';
import { DataService } from '../service/data.service';

@Component({
  selector: 'modifvoiture',
  templateUrl: './modifvoiture.component.html',
  styleUrls: ['./modifvoiture.component.css']
})
export class ModifvoitureComponent implements OnInit {
  id:any;
  data:any;
  voiture=new Voiture
  constructor(private dataService: DataService,private toastr: ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCarByImmatricule();
  }

  getCarByImmatricule(){
    this.dataService.getCarByImma(this.id).subscribe(res => {
      if(res != "voiture non trouvée"){
        this.data=res;
        this.voiture=this.data;
      }
    })
  }

  updateCar(){
    this.dataService.updateCar(this.id, this.voiture).subscribe(res => {
      console.log(res);
      if(res != "voiture non trouvée"){
        this.showNotification("voiture est modifié","success")
      }else{
        this.showNotification("voiture non trouvée","danger")
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
}
