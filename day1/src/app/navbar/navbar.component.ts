import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  imgSrc? :string
  constructor() { }

  ngOnInit(): void {
    this.imgSrc = '../../assets/angular-logo.png';
  }

}
