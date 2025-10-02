import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { EmployeesService } from './employees.service';
import { ProjectsService } from '../projects/projects.service';
import { TasksService } from '../tasks/tasks.service';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-employee-detail',
    standalone: true,
    imports: [NgFor, NgIf, RouterLink],
    templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent {
    route = inject(ActivatedRoute);
    employees = inject(EmployeesService);
    projects = inject(ProjectsService);
    tasks = inject(TasksService);


    emp = this.employees.getById(this.route.snapshot.params['id']);

    remove() {
        if (!this.emp) return;
        this.employees.remove(this.emp.id);
    }
}