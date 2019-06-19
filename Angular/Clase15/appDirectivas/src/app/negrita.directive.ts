import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: "[negrita]"
})
export class NegritaDirective {
  @Input("negrita") colorPorDefecto: string
  @Input() colorHover: string = "green"

  constructor(private el: ElementRef) {
  }

  @HostListener("mouseenter") cambiarColor() {
    this.el.nativeElement.style.color = this.colorHover
  }

  @HostListener("mouseleave") cambiarAOriginal() {
    this.el.nativeElement.style.color = this.colorPorDefecto
  }

  ngOnInit() {
    this.el.nativeElement.style.fontWeight = "bold"
    this.el.nativeElement.style.fontSize = "40px"
    this.el.nativeElement.style.color = this.colorPorDefecto
  }
}
