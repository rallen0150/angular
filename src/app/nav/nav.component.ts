import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  apptitle: string = "myapp";
  // or apptitle = "my app" works as well

  constructor() { }

  ngOnInit() {
  }

}
