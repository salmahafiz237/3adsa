import { Routes } from '@angular/router';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';
import { TermsOfService } from './components/terms-of-service/terms-of-service';
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';
import { About } from './components/about/about';
import { NotFound } from './components/not-found/not-found';
import { CardDetails } from './components/card-details/card-details';
import { Equipments } from './components/blog/equipments/equipments';
import { Light } from './components/blog/light/light';
import { Portrait } from './components/blog/portrait/portrait';
import { Natural } from './components/blog/natural/natural';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:"home", component:Home, title:'الرئيسية'},
    {path: 'blog',
        children: [
            { path: '', component: Blog, title: 'المدونة' },
            { path: ':slug', component: CardDetails },
            { path:'light', component:Light},
            { path:'portrait', component:Portrait},
            { path:'natural', component:Natural},
            { path: 'equipments', component:Equipments},
        ]
    },
    {path:"about", component:About, title:'من نحن'},
    {path:'privacy-policy', component:PrivacyPolicy, title:'سياسة الخصوصية'},
    {path: 'terms-of-service', component:TermsOfService, title:'شروط الخدمة'},
    {path:'not-found', component:NotFound, title:'حدث خطأ'},
    {path:'**', redirectTo:'not-found'},
];
