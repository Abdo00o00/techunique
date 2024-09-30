import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutModule } from './views/layout/layout.module';
import { FormsModule } from '@angular/forms';
// import { SwiperModule } from '../../node_modules/swiper/*/angular'; // استيراد SwiperModule


// import { DraggableDirective } from './draggable.directive'; // تأكد من استيراد FormsModule
// import { BrowserModule } from '@angular/platform-browser';

// import { PriceSelectorComponent } from 'price-selector/price-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    // DraggableDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    // SwiperModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
