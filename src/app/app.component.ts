import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { ViewAllEmpComponent } from './pages/view-all-emp/view-all-emp.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './pages/update-employee/update-employee.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent,ViewAllEmpComponent,AppComponent,UpdateEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hr-frontend';
}
