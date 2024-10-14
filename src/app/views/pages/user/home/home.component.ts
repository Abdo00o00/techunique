import { Component, HostListener, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer2   } from '@angular/core';
// import { ButtonModule } from 'primeng/button';
import { CarouselResponsiveOptions } from 'primeng/carousel';

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

  products: any[] = [];
  responsiveOptions: CarouselResponsiveOptions[] | undefined;


  ngOnInit(): void {
    this.changePrice();
    this.changePricePro();

    this.products = [
      { image: 'meta.png', name :'meta logo'},
      { image: 'apple-logo.png', name :'apple logo'},
      { image: 'youtube.png', name :'youtube logo'},
      { image: 'twitter.png', name :'twitter logo'},
      { image: 'icons8-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-24.png', name :'framer logo'},
      { image: 'icons8-github-24.png', name :'github logo'},
      
      { image: 'meta.png', name :'meta logo'},
      { image: 'apple-logo.png', name :'apple logo'},
      { image: 'youtube.png', name :'youtube logo'},
      { image: 'twitter.png', name :'twitter logo'},
      { image: 'icons8-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-24.png', name :'framer logo'},
      { image: 'icons8-github-24.png', name :'github logo'},
      
      { image: 'meta.png', name :'meta logo'},
      { image: 'apple-logo.png', name :'apple logo'},
      { image: 'youtube.png', name :'youtube logo'},
      { image: 'twitter.png', name :'twitter logo'},
      { image: 'icons8-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-24.png', name :'framer logo'},
      { image: 'icons8-github-24.png', name :'github logo'},
      
      { image: 'meta.png', name :'meta logo'},
      { image: 'apple-logo.png', name :'apple logo'},
      { image: 'youtube.png', name :'youtube logo'},
      { image: 'twitter.png', name :'twitter logo'},
      { image: 'icons8-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-24.png', name :'framer logo'},
      { image: 'icons8-github-24.png', name :'github logo'},
      
      { image: 'meta.png', name :'meta logo'},
      { image: 'apple-logo.png', name :'apple logo'},
      { image: 'youtube.png', name :'youtube logo'},
      { image: 'twitter.png', name :'twitter logo'},
      { image: 'icons8-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-24.png', name :'framer logo'},
      { image: 'icons8-github-24.png', name :'github logo'},

      // أضف المزيد من المنتجات حسب الحاجة
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1224px',
        numVisible: 7,
        numScroll: 1
      },
      {
        breakpoint: '1024px',
        numVisible: 6,
        numScroll: 1
      },
      {
        breakpoint: '868px',
        numVisible: 5,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '668px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 1
      }
    ];
  }

  getSeverity(inventoryStatus: string): "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined {
    switch (inventoryStatus) {
      case 'in-stock':
        return 'success';
      case 'out-of-stock':
        return 'danger';
      case 'low-stock':
        return 'warning';
      case 'pre-order':
        return 'info';
      default:
        return undefined; // قيمة افتراضية
    }
  }
  //
  //
  //
  // start funcs for change price
  changePrice(): void {
    this.price = this.selectedPlan === 'monthly' ? '2000' : '1800';
  }

  changePricePro(): void {
    this.pricePro = this.selectedPlanPro === 'MonthlyPro' ? '5000' : '4800';
  }
  // end funcs for change price
  //
  // start funcs for big div skewing animation
  mouseX: number = 0;
  mouseY: number = 0;
  skewX: number = 0;
  skewY: number = 0;
  scale: number = 1;

  // لتخزين زوايا التدوير
  rotateX: number = 0; // الزاوية على المحور X
  rotateY: number = 0; // الزاوية على المحور Y
  isMouseInside: boolean = false; // لتتبع حالة الماوس

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('bigdiv')) {
      this.isMouseInside = true; // الماوس داخل الـ div
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('bigdiv')) {
      this.isMouseInside = false; // الماوس خارج الـ div
      this.rotateX = 0; // إعادة الزوايا إلى الصفر
      this.rotateY = 0; // إعادة الزوايا إلى الصفر
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isMouseInside) return; // إذا كان الماوس خارج الـ div، لا تفعل أي شيء

    const target = event.target as HTMLElement;
    const { left, top, width, height } = target.getBoundingClientRect();

    const mouseX = event.clientX - left; // إحداثيات الماوس بالنسبة للـ div
    const mouseY = event.clientY - top;

    // عكس الزوايا لجعل التأثير في الناحية المعاكسة
    this.rotateX = ((mouseY / height) - 0.5) * -12; // استخدم الزاوية بشكل موجب
    this.rotateY = ((mouseX / width) - 0.5) * 12; // استخدم الزاوية بشكل سالب
  }

  // دالة للحصول على تحويلات CSS
  getTransform(): string {
    return this.isMouseInside
      ? `perspective(1000px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  }

  //start funcs for scrolling divs
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.handleCardScroll(); // Call function to check the position of each card
  }

  handleCardScroll(): void {
    const cards = document.querySelectorAll('.cardd');
    const windowHeight = window.innerHeight; // Get the height of the viewport (browser window)

    cards.forEach((card: any, index: number) => {
      const cardRect = card.getBoundingClientRect();
      const cardTop = cardRect.top; // Top position of the card relative to the viewport

      // Calculate the percentage of the card's top position relative to the viewport height
      const topPercentage = (cardTop / windowHeight) * 100;

      // Check if the card has reached the top of the viewport (0% or less)
      if (topPercentage <= 0) {
        // console.log(`Card ${index + 1} is at the top of the screen.`);
        card.style.position = 'sticky';
        card.style.top = '0px'; // Stick the card at the top
      } else {
        // console.log(`Card ${index + 1}: Top percentage from viewport = ${topPercentage.toFixed(2)}%`);
        card.style.position = 'relative'; // Reset the position when it's not at the top
      }
    });
  }
  //
  //
  //
  /////////////////////////////////////////////////////////////////////////////////

  @ViewChild('FAQ') faqSection!: ElementRef;    // مرجع للـ section
  @ViewChild('heaDsec') headSec!: ElementRef;   // مرجع للـ div المتحرك
  isSectionVisible = false;  // حالة لتتبع ما إذا كان الـ section مرئيًا



  // isHeadImagesVisible = false; // حالة لتتبع رؤية العنصر headImages
  
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  ngAfterViewInit() {
    //start QAF
    // تعريف المراقب
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // إذا كان الـ section مرئيًا
        if (entry.isIntersecting) {
          this.isSectionVisible = true;
          this.updateDivCoordinates(); // تحديث الإحداثيات مباشرة عند ظهوره
          // console.log('The section is visible on the screen withqaf!');
        } else {
          this.isSectionVisible = false;
          // console.log('The section is not visible on the screen withqaf!');
        }
      });
    }, { threshold: 0.1 }); // يتم استدعاء المراقب إذا ظهر 10% من الـ section

    // المراقب يراقب الـ section
    observer.observe(this.faqSection.nativeElement);
    //end QAF
    //
    //
    //strat images

    
    //end images

  }

  @HostListener('window:scroll', [])
  whenScrolltranslatediv() {
    // تحديث الإحداثيات فقط إذا كان الـ section مرئيًا
    if (this.isSectionVisible) {
      this.updateDivCoordinates();
    }
  }

  updateDivCoordinates() {
    // الحصول على إحداثيات الـ div
    const headSecElement = this.headSec.nativeElement;
    const rect = headSecElement.getBoundingClientRect();
    
    // الحصول على إحداثيات الـ section
    const faqElement = this.faqSection.nativeElement;
    const sectionRect = faqElement.getBoundingClientRect();

    // تحقق من عرض الشاشة
    if (window.innerWidth >= 993) {

      // حساب المسافة التي تم التمرير بها من أعلى الـ section
      let scrollDistance = window.scrollY - (faqElement.offsetTop - window.innerHeight + sectionRect.height)  ;
      // console.log("akoko1");
      // console.log(scrollDistance );
      
      
      // check if the div is in hit the bottom of the section
      if (scrollDistance < 485 && scrollDistance > 0) {
        
        // طباعة إحداثيات الـ div بالنسبة للشاشة
        // console.log(`إحداثيات الـ div بالنسبة للنافذة: Top: ${rect.top}, Left: ${rect.left}`);
        
        let fortranslate: number = 0;
        // console.log("akoko2");
        
        // تحقق من scrollDistance وضبط fortranslate بناءً على المسافة المقطوعة
        if (scrollDistance > 0) {
          // console.log(`تم التمرير مسافة ${scrollDistance}px من بداية الـ section`);
          fortranslate = scrollDistance + 20; // حساب قيمة fortranslate إذا كان scrollDistance أكبر من 0
          // console.log("akoko3");
        }
        
        // تطبيق translateY على الـ div باستخدام Renderer2
        this.renderer.setStyle(headSecElement, 'transform', `translateY(${fortranslate}px)`);
      }
    } else {
      // إذا كان عرض الشاشة أقل من 995px، قم بإزالة أي تحرك سابق
      this.renderer.setStyle(headSecElement, 'transform', `translateY(0)`);
      // console.log("akoko4");
    }
    
  }
  //
  //
  //
  // end funcs for moving faq head
  //
  //
  //
  // start funcs for moving a head of images section
  @ViewChild('headImages') headImages!: ElementRef; // مرجع للـ div
  @ViewChild('imagesSection') imagesSection!: ElementRef; // مرجع للـ div





  // end funcs for moving a head of images section
  //
  //
  //
}
