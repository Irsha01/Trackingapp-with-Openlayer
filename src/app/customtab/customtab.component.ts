import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customtab',
  templateUrl: './customtab.component.html',
  styleUrls: ['./customtab.component.scss'],
})
export class CustomtabComponent  implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {}
  // navigate(page:string){
  //   const url ='/'+page;
  //   this.route.navigate([url])
  // }
}
