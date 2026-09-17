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
    {path:"home", component:Home, title:'الرئيسية'},
    {path:"blog", component:Blog, title:'المدونة'},
    {path:"about", component:About, title:'من نحن'},
    {path:'privacy-policy', component:PrivacyPolicy, title:'سياسة الخصوصية'},
    {path: 'terms-of-service', component:TermsOfService, title:'شروط الخدمة'},
    {path: 'card-details', component:CardDetails, title:'المدونة'},
    {path:'not-found', component:NotFound, title:'حدث خطأ'},
    {path:'**', redirectTo:'not-found', pathMatch:'full'},
];
