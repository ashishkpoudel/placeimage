import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GenerateImageComponent } from './components/modals/generate-image/generate-image.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
	{ path: '', component: HomeComponent }
];

const components =  [
  AppComponent,
  HomeComponent,
  HeaderComponent,
  SidebarComponent,
  GenerateImageComponent,
];

const vendor_modules = [
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  ColorPickerModule,
];


@NgModule({
  declarations: [
    components,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),

    vendor_modules
  ],
  entryComponents: [GenerateImageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
