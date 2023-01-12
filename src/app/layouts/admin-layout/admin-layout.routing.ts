import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ListelocatairesComponent } from '../../listelocataires/listelocataires.component';
import { ListevoituresComponent } from '../../listevoitures/listevoitures.component';
import { AjoutvoitureComponent } from '../../ajoutvoiture/ajoutvoiture.component';
import { ModifvoitureComponent } from '../../modifvoiture/modifvoiture.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'listelocataires',component: ListelocatairesComponent },
    { path: 'listevoitures',component: ListevoituresComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'listevoitures/ajoutVoiture',   component: AjoutvoitureComponent },
    { path: 'listevoitures/modifVoiture/:id',   component: ModifvoitureComponent },
    { path: 'notifications',  component: NotificationsComponent }
];
