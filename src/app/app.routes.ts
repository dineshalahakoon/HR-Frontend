import { Routes } from '@angular/router';

import { ViewAllEmpComponent } from './pages/view-all-emp/view-all-emp.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';

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
