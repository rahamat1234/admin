import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contactForm:FormGroup;
  constructor(private fb: FormBuilder){

  this.contactForm =fb.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
  });
  
 }
 postData(){
  //console.log(val)
//   var data=val.controls;

  var email=this.contactForm.get('email')?.value;
   var password=this.contactForm.get('password')?.value;
 console.log(email+",  "+password);
}
setData(){
  this.contactForm.patchValue({
    "email":'rahamat@gmail.com',
    "password":"se123",

  })
}
resetData(){
  this.contactForm.reset();
}




  ngOnInit(): void {
  }

}
