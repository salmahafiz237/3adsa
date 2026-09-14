import { Routes } from '@angular/router';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';
import { TermsOfService } from './components/terms-of-service/terms-of-service';
import { Home } from './components/home/home';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:"home", component:Home},
    {path:'privacy-policy', component:PrivacyPolicy},
    {path: 'terms-of-service', component:TermsOfService},

];
