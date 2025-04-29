import { Component } from '@angular/core';
import { AddEmployeeComponent } from "../add-employee/add-employee.component";
import { NavComponent } from "../../common/nav/nav.component";
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  imports: [AddEmployeeComponent, NavComponent, HttpClientModule, FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  constructor(private http: HttpClient) { }

  public name = undefined;
  public email = undefined;
  public department = undefined;



  public getorder: any;

  public selectedEmployee = {
    id: undefined,
    name: undefined,
    email: undefined,
    department: undefined,
    createAt: undefined,
    UplordAt: undefined
  };


  FindOrder() {
    this.http.get(`http://localhost:8080/employees/find-by-id/${this.selectedEmployee.id}`).subscribe(res => {
      this.getorder = res;
      console.log(res)

      this.name = this.getorder.name
      this.email = this.getorder.email
      this.department = this.getorder.department
      this.selectedEmployee.createAt=this.getorder.createAt
    })
  }


  saveUpdateEmployee() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.http.put(`http://localhost:8080/employees/${this.selectedEmployee.id}`, this.selectedEmployee)
          .subscribe(res => {
            console.log(res);

          });



        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
}
