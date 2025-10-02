import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { ProjectsService } from './projects.service';
import { TasksService } from '../tasks/tasks.service';
import { EmployeesService } from '../employees/employees.service';


@Component({
    selector: 'app-project-detail',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor],
    templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent {
    route = inject(ActivatedRoute);
    projects = inject(ProjectsService);
    tasks = inject(TasksService);
    employees = inject(EmployeesService);


    project = this.projects.getById(this.route.snapshot.params['id']);
}