import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientJsonpModule, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  constructor(private http:HttpClient){}




  public employee={
    id:undefined,
    name:undefined,
    email:undefined,
    department:undefined,
    createAt:undefined,
    UplordAt:undefined
    }

  AddEmployee(){


console.log(this.employee);

this.http.post("http://localhost:8080/employees" ,this.employee,).subscribe()
  }
}
