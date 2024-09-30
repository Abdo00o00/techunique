import { Component , OnInit } from '@angular/core';
// import { SwiperModule } from 'swiper/angular'; // التأكد من استيراد SwiperModule

 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedPlan: string = 'monthly';
  selectedPlanPro: string = 'MonthlyPro'; 
  price: string = '2000';
  pricePro: string = '5000';

  ngOnInit(): void {
    // Call these methods when the component initializes
    this.changePrice(); 
    this.changePricePro();
  }

  changePrice(): void {
    this.price = this.selectedPlan === 'monthly' ? '2000' : '1800';
  }

  changePricePro(): void {
    this.pricePro = this.selectedPlanPro === 'MonthlyPro' ? '5000' : '4800';
  }
}
  




