import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  @Input() indice

  constructor() {
    console.log("Constructor Item")
  }

  ngOnChanges(cambios: SimpleChanges) {
    console.log("ngOnChanges Item")
    console.log(cambios)
  }

  ngOnInit() {
    console.log("ngOnInit Item")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit Item")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit Item")
  }

  ngDoCheck() {
    console.log("DoCheck ItemComponent")
  }

}
