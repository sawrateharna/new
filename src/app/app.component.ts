import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-basic';
  modalRef?: BsModalRef;
  constructor(private dialogRef: MatDialog, private modalService: BsModalService,private http: HttpClient, private formBuilder: FormBuilder) { }
  minVal = 8;
  maxVal = 20;
  myForm$: Observable<FormGroup> | undefined;
  orderForm2: any;







items:any=[]
personinformation1:any=[]

createItem(): FormGroup {
  return this.formBuilder.group({
   
  });
}
ngOnInit(): void {

  this.orderForm2 = this.formBuilder.group({
    Name: [''],
    Domain: [''],
    Gender: [''],
    Gender1:[''],
    DateofBirth:[''],
    PhoneNumber:[''],
    Location:[''],
 
  })


///////////////////first time show value in page set value/////////////////
  this.orderForm2.setValue({
    Name:"Harna sarwate",
    Domain:	"www.mjhattorneys.com",
    Gender:	"",
    DateofBirth:	"8th June 1979",
    PhoneNumber:	"+91954321234",
    Location:"pune",
    Gender1:	"",


  })
  ///////////////////////push  form values in array this array bind in html page //////////////////
this.personinformation1.push(this.orderForm2.value)




}


 
/////////////////////////////this method use for open ngxbootsrapmodal////////////////
  openSearchModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  /////////////////////////////this method use for close modal////////////////
  closeModel() {
    this.modalRef?.hide();
  }
////////////////////////this method use for Update values////////////////
  onSubmit(){

// console.log(this.orderForm2);

this.personinformation1.splice(0)///////////////////////splice first data///////////////
this.personinformation1.push(this.orderForm2.value)



this.closeModel()

  }
}
