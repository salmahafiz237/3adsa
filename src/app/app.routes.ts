import { Routes } from '@angular/router';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';
import { TermsOfService } from './components/terms-of-service/terms-of-service';
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';
import { About } from './components/about/about';
import { NotFound } from './components/not-found/not-found';
import { CardDetails } from './components/card-details/card-details';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:"home", component:Home},
    {path:"blog", component:Blog},
    {path:"about", component:About},
    {path:'privacy-policy', component:PrivacyPolicy},
    {path: 'terms-of-service', component:TermsOfService},
    {path: 'card-details', component:CardDetails},
    {path:'**', component:NotFound},
];
