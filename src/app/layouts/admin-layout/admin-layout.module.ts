import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ListelocatairesComponent } from '../../listelocataires/listelocataires.component';
import { ListevoituresComponent } from '../../listevoitures/listevoitures.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AjoutvoitureComponent } from '../../ajoutvoiture/ajoutvoiture.component';
import { ModifvoitureComponent } from '../../modifvoiture/modifvoiture.component';
import { AjoutlocataireComponent } from '../../ajoutlocataire/ajoutlocataire.component';
import { ConsulterlocataireComponent } from '../../consulterlocataire/consulterlocataire.component';
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
    UserProfileComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    ListelocatairesComponent,
    ListevoituresComponent,
    AjoutvoitureComponent,
    NotificationsComponent,
    ModifvoitureComponent,
    AjoutlocataireComponent,
    ConsulterlocataireComponent
  ]
})

export class AdminLayoutModule {}
