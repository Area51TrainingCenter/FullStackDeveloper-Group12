import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
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

}
