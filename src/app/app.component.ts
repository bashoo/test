import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit { 

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      immat: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onSubmit(){
    console.log('submitted');
    this.submitted = true;
    if (this.messageForm.invalid){
      return;
    }
    this.success = true;
    
  }
  ngOnInit() {
  }

}
