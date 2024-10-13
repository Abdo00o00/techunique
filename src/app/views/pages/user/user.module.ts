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
import { CarouselModule } from 'primeng/carousel'; // استيراد p-carousel
import { ButtonModule } from 'primeng/button';    // استيراد أزرار PrimeNG
import { TagModule } from 'primeng/tag';          // استيراد مكون tag
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // مهم لتفعيل الحركات في PrimeNG
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';

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
    ButtonModule,
    CarouselModule,
    TagModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    CommonModule,

  ]
})
export class UserModule { }
