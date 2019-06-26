import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
    console.log("Constructor Home")
  }

  ngOnInit() {
    console.log("ngOnInit Home")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit Home")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit Home")
  }

}
