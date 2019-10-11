import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
// import { MenuComponent } from './menu/menu.component';
import { companyComponent } from './company/Company.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material';
import { INRCurrencyPipe, MultiplierPipe } from './custom.pipe';
import { SvgComponent } from './svg/svg.component';
import {TableModule} from 'primeng/table';
import {ContextMenuModule} from 'primeng/contextmenu';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import {DragDropModule} from 'primeng/dragdrop';
import {DragDropModule} from '@angular/cdk/drag-drop';




// import { appendCurrencyPipe } from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // MenuComponent,
    companyComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    // SidebarComponent,
    MainNavComponent,
    // LoginComponent,
    // RegisterComponent,
    // AlertComponent,
    // Login1Component,
    // appendCurrencyPipe,
    INRCurrencyPipe,
    MultiplierPipe,
    SvgComponent,

    RegisterComponent,

    LoginComponent,




    // ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    routing,HttpClientModule,BrowserAnimationsModule,FormsModule,ToastModule,NgxPaginationModule, LayoutModule, MatToolbarModule,
    MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatInputModule, ReactiveFormsModule,TableModule,ContextMenuModule,
    DragDropModule,
  ],
  providers: [MessageService

  ],

    entryComponents: [SvgComponent],
    bootstrap: [AppComponent, ],


})
export class AppModule { }
