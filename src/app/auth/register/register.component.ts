import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RegisterService } from './register.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public inputFilter={};
  public disabled = false
  @ViewChild('first_name') input: ElementRef;

  constructor(private registerService: RegisterService,private elementRef: ElementRef) {}
 
  ngOnInit() {
  }
  limpa(t){
    $(t).removeClass('has-error').addClass('has-success')
  }
  register (frm: FormControl){
   this.disabled = true
    
    this.registerService.register(frm).subscribe((response) => {      
      if(response.result.zf_validate){
          this.inputFilter = response.result.zf_validate
          for (let Filter in this.inputFilter) {
           $(document.getElementsByName(Filter)).parent('div').addClass('has-error');
          }
         // this.disabled = false
          
      }
    })
  }
}
