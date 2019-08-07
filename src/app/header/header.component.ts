import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private logoPath:string = "/assets/images/logos/mlogo.jpg";
  
  constructor() { }

  ngOnInit() {
  }

}
