import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { AddEmployeeComponent } from "./pages/add-employee/add-employee.component";
import { ViewAllEmpComponent } from './view-all-emp/view-all-emp.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent,ViewAllEmpComponent,AddEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hr-frontend';
}
