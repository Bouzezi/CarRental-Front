import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Locataire } from '../modeles/locataire';
import { DataService } from '../service/data.service';
declare var $: any;
@Component({
  selector: 'ajoutlocataire',
  templateUrl: './ajoutlocataire.component.html',
  styleUrls: ['./ajoutlocataire.component.css']
})
export class AjoutlocataireComponent implements OnInit {
locataire=new Locataire
  constructor(private dataService: DataService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  insertData(){
    console.log(this.locataire);
    
    this.dataService.addRenter(this.locataire).subscribe(res => {
      console.log(res);
      this.showNotification('le locataire est ajouté avec succès.',"success")
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

/*   onSeachDropdownValue($event) {
    const value = $event.target.value;
    this.searchedOptions = this.options.filter(option => option.includes(value));
    }
  
    onSelectDropdownValue(option) {
      // Do something with selected value
    } */
}
