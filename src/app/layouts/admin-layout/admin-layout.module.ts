import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ListelocatairesComponent } from '../../Location/listelocataires/listelocataires.component';
import { ListevoituresComponent } from '../../Voiture/listevoitures/listevoitures.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AjoutvoitureComponent } from '../../Voiture/ajoutvoiture/ajoutvoiture.component';
import { ModifvoitureComponent } from '../../Voiture/modifvoiture/modifvoiture.component';
import { AjoutlocataireComponent } from '../../Location/ajoutlocataire/ajoutlocataire.component';
import { ConsulterlocataireComponent } from '../../Location/consulterlocataire/consulterlocataire.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    ListelocatairesComponent,
    ListevoituresComponent,
    AjoutvoitureComponent,
    ModifvoitureComponent,
    AjoutlocataireComponent,
    ConsulterlocataireComponent
  ]
})

export class AdminLayoutModule {}
