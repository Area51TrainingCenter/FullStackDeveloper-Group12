import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dato',
  templateUrl: './dato.component.html',
  styleUrls: ['./dato.component.css']
})
export class DatoComponent implements OnInit {
  @Input() indice

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("DoCheck DatoComponent")
  }

}
