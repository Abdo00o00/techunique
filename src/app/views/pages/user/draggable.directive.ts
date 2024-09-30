import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDraggable]'  // هذا هو المحدد الذي سنستخدمه في HTML
})
export class DraggableDirective {
  private pos1: number = 0;
  private pos2: number = 0;
  private pos3: number = 0;
  private pos4: number = 0;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.position = 'absolute'; // لضمان أن العنصر يمكن تحريكه
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    // الحصول على الموضع الأولي للفأرة
    this.pos3 = event.clientX;
    this.pos4 = event.clientY;
    document.onmouseup = this.closeDragElement.bind(this);
    document.onmousemove = this.elementDrag.bind(this);
  }

  elementDrag(event: MouseEvent) {
    event.preventDefault();
    // حساب المسافة التي تحركت بها الفأرة
    this.pos1 = this.pos3 - event.clientX;
    this.pos2 = this.pos4 - event.clientY;
    this.pos3 = event.clientX;
    this.pos4 = event.clientY;
    // ضبط موضع العنصر
    this.el.nativeElement.style.top = (this.el.nativeElement.offsetTop - this.pos2) + "px";
    this.el.nativeElement.style.left = (this.el.nativeElement.offsetLeft - this.pos1) + "px";
  }

  closeDragElement() {
    // إيقاف السحب عند الإفلات
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

