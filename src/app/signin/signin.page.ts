import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  verifymobile =true
  mobilenumber:any =''
  allowotp=false
  allowlogin =false
  constructor(private route:Router) { }

  ngOnInit() {
  }
  sendotp(){
    this.verifymobile =false
  }

  ionViewWillEnter(){
    this.verifymobile =true
    this.allowotp =false
    this.allowlogin =false
  }

  goback(){
    
    this.route.navigate(['/login']);
  }


  validateInput(event: any) {
    const input = event.target.value;
    if(input.length ==10){
      this.allowotp =true
    }
    event.target.value = input.replace(/[^0-9]/g, ''); // Only allow numbers
  }



  Otpcount(event: any) {
    const input = event.target.value;
    if(input.length ==6){
      this.allowlogin =true
    }
    event.target.value = input.replace(/[^0-9]/g, ''); // Only allow numbers
  }


  Login(){
  localStorage.setItem('usermobile',this.mobilenumber);

  this.route.navigate(['/attendance']);
  }
  

}
