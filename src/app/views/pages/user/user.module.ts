import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { HostingComponent } from './hosting/hosting.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FormsModule } from '@angular/forms';
import { DraggableDirective } from './draggable.directive'; // تأكد من استيراد FormsModule
// import { SwiperModule } from 'swiper/angular'; // استيراد SwiperModule


// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { PriceSelectorComponent } from './home/home.component';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    HostingComponent,
    BlogsComponent,
    DraggableDirective,
    
    // PriceSelectorComponent
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    // SwiperModule

    // BrowserModule

  ]
})
export class UserModule { }
