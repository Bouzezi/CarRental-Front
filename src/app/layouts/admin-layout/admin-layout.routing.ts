import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ListelocatairesComponent } from '../../Location/listelocataires/listelocataires.component';
import { ListevoituresComponent } from '../../Voiture/listevoitures/listevoitures.component';
import { AjoutvoitureComponent } from '../../Voiture/ajoutvoiture/ajoutvoiture.component';
import { ModifvoitureComponent } from '../../Voiture/modifvoiture/modifvoiture.component';
import { AjoutlocataireComponent } from '../../Location/ajoutlocataire/ajoutlocataire.component';
import { ConsulterlocataireComponent } from '../../Location/consulterlocataire/consulterlocataire.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'listelocataires',component: ListelocatairesComponent },
    { path: 'listevoitures',component: ListevoituresComponent },
    { path: 'listevoitures/ajoutVoiture',   component: AjoutvoitureComponent },
    { path: 'listelocataires/ajoutLocataire',   component: AjoutlocataireComponent },
    { path: 'listevoitures/modifVoiture/:id',   component: ModifvoitureComponent },
    { path: 'listelocataires/plus/:id',   component: ConsulterlocataireComponent },
];
