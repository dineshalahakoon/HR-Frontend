import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from '../common/nav/nav.component';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, NavComponent],
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private http: HttpClient) {}

  public employee = {
    name: '',
    email: '',
    department: '',
    createAt: '',
    UplordAt: ''
  };

  // Validate name
  isValidName(name: string): boolean {
    const nameRegex = /^[A-Za-z\s]+$/;
    return name.trim().length > 0 && name.trim().length <= 100 && nameRegex.test(name);
  }

  // Validate email
  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
    return emailRegex.test(email);
  }

  // Validate department
  isValidDepartment(department: string): boolean {
    const validDepartments = ['HR', 'IT', 'Finance', 'Operations'];
    return validDepartments.includes(department);
  }

  onSubmit() {
    const { name, email, department } = this.employee;

    if (!this.isValidName(name)) {
      Swal.fire('Error', 'Invalid name. Please enter alphabetic characters only (max 100 characters).', 'error');
      return;
    }

    if (!this.isValidEmail(email)) {
      Swal.fire('Error', 'Invalid email format.', 'error');
      return;
    }

    if (!this.isValidDepartment(department)) {
      Swal.fire('Error', 'Invalid department. Please select from HR, IT, Finance, or Operations.', 'error');
      return;
    }

    // Set timestamps before sending
    const now = new Date().toISOString();
    this.employee.createAt = now;
    this.employee.UplordAt = now;

    // Send data to backend
    this.http.post("http://localhost:8080/employees", this.employee).subscribe(
      (data) => {
        Swal.fire('Success!', 'Employee added successfully!', 'success');
        this.resetForm();
      },
      (error) => {
        Swal.fire('Error', 'Something went wrong while saving employee.', 'error');
      }
    );
  }

  resetForm() {
    this.employee = {
      name: '',
      email: '',
      department: '',
      createAt: '',
      UplordAt: ''
    };
  }
}
