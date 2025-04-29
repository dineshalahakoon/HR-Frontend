import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-emp',
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-all-emp.component.html',
  styleUrl: './view-all-emp.component.css'
})
export class ViewAllEmpComponent {

  constructor(private http:HttpClient){
    this.loadEmployeTable()
  }

  public employeeList:any;


  public selectedEmployee={
    id:undefined,
    name:undefined,
    email:undefined,
    department:undefined,
    createAt:undefined,
    UplordAt:undefined
  };



  getDepartmentNames(departmentList:any[]):string{
    return departmentList.map(dept=>dept.name).join('  , ');
    
  }

  loadEmployeTable(){


    this.http.get("http://localhost:8080/employees").subscribe(res=>{
        this.employeeList=res;
        console.log(res)

      })
  

  }
  deleteEmployee(employee:any){

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/employees/${employee.id}`,{responseType:'text'}).subscribe(res=>{
          this.loadEmployeTable()
             Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
                console.log(res);
          
              })
              console.log(employee)
      }
    });
  }

  updateEmployee(employee:any){



if(employee!=null){
  this.selectedEmployee=employee;
}
console.log(employee);

  }

  saveUpdateEmployee(){
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
    this.loadEmployeTable();
  });



        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });




  }
}
