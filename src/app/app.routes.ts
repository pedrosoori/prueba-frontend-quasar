import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login';
import { DashboardComponent } from './features/dashboard/dashboard';
import { AuthGuard } from './core/auth/auth.guard';
import { ProjectListComponent } from './features/projects/project-list.component';
import { ProjectDetailComponent } from './features/projects/project-detail.component';
import { ProjectFormComponent } from './features/projects/project-form.component';
import { TaskListComponent } from './features/tasks/task-list.component';
import { TaskFormComponent } from './features/tasks/task-form.component';
import { EmployeeListComponent } from './features/employees/employee-list.component';
import { EmployeeDetailComponent } from './features/employees/employee-detail.component';
import { EmployeeFormComponent } from './features/employees/employee-form.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'projects', component: ProjectListComponent },
            { path: 'projects/new', component: ProjectFormComponent },
            { path: 'projects/:id', component: ProjectDetailComponent },
            { path: 'projects/:id/edit', component: ProjectFormComponent },


            { path: 'tasks', component: TaskListComponent },
            { path: 'tasks/new', component: TaskFormComponent },
            { path: 'tasks/:id/edit', component: TaskFormComponent },


            { path: 'employees', component: EmployeeListComponent },
            { path: 'employees/new', component: EmployeeFormComponent },
            { path: 'employees/:id', component: EmployeeDetailComponent },
        ]
    },
    { path: '**', redirectTo: '' }
];