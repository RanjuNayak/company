import { Routes,RouterModule } from "@angular/router";
import { companyComponent } from './company/Company.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SvgComponent } from './svg/svg.component';
import { LoginComponent } from './login/login.component';

// import { AuthGuard } from './auth.guard';
// import { HomeComponent } from './home/home.component';


const arr : Routes=[
  { path: "login", component: LoginComponent},
  { path: "aboutus", component: AboutusComponent },
  {path:"Company", component:companyComponent},
  { path: "contactus", component: ContactusComponent },
  {path:"svg",component:SvgComponent},

  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  //   { path: 'login', component: LoginComponent },
  //   { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }


];

export const routing=RouterModule.forRoot(arr);
