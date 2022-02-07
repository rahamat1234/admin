import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users={
    name:"",
    email:"",
    mobile:'',
    password:"",
    conform_password:""
  }
  contactForm:FormGroup;
  constructor(private fb: FormBuilder){

  this.contactForm =fb.group({
    yourname: ['', [Validators.required, Validators.minLength(3)]],
    mobile : ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    conform_password: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
  });
 }
  
 postData(){
    //console.log(val)
  //   var data=val.controls;
   var name= this.contactForm.get('yourname')?.value;
    var email=this.contactForm.get('email')?.value;
    var mobile=this.contactForm.get('mobile')?.value;
     var password=this.contactForm.get('password')?.value;
    var conform_password=this.contactForm.get('conform_password')?.value;
   console.log(name+", "+email+", "+mobile+", "+password+", "+conform_password);
  }
  setData(){
    this.contactForm.patchValue({
      "yourname":'Rahamat',
      "mobile":'7050847244',
      "email":'rahamat@gmail.com',
      "password":"se123",
      "conform_password":"se123"
    })
  }
  resetData(){
    this.contactForm.reset();
  }
  
  




  ngOnInit(): void {}
  uname:string=" ";
  mobile:string=" ";
  email:string=" ";
  password:string="";
  Conform_Password:string="";

  isValid:boolean=false;
onCreateBlock(){
  this.isValid=true;
}



  
  

}
