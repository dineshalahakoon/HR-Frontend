import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { ViewAllEmpComponent } from './view-all-emp/view-all-emp.component';

export const routes: Routes = [
    {
        path:"add-employee",
        component:AddEmployeeComponent
       },
       {
        path:"view-all",
        component:ViewAllEmpComponent
        
       },

];
