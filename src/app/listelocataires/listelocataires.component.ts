import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../service/data.service';

@Component({
  selector: 'listelocataires',
  templateUrl: './listelocataires.component.html',
  styleUrls: ['./listelocataires.component.css']
})
export class ListelocatairesComponent implements OnInit {
  locataires:any= []
  value:any
  page:Number = 1
  constructor(private dataService: DataService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listeLocataires();
  }

  listeLocataires(){
    this.dataService.listeLocataires().subscribe(res => {
    console.log(res);
    this.locataires =res; 
    });
  }

  deleteData(id:any){
    console.log(id);
    this.dataService.deleteRenter(id).subscribe(res => {
      //console.log(res);
      this.listeLocataires();
      this.showNotification('le locataire est supprimé avec succès.')
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

  search(){
    if (this.value == "")
        this.listeLocataires();
    else{
        if (Number(this.value)){
          this.dataService.getRenterById(this.value).subscribe(res=>{
            console.log(res);
            this.locataires.splice(0)
            this.locataires.push(res)
          });
        } else{ 
            this.dataService.getRenterByName(this.value).subscribe(res=>{
              console.log(res);
              this.locataires =res;
          });
        } 
      } 
  }

}
