import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TasksService } from './tasks.service';
import { EmployeesService } from '../employees/employees.service';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { BadgeComponent } from '../../shared/badge/badge.component';
import { DatePipe } from '@angular/common';
import { ProjectsService } from '../projects/projects.service';


@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [RouterLink, NgFor, BadgeComponent, NgIf, DatePipe],
    templateUrl: './task-list.component.html'
})
export class TaskListComponent {
    tasks = inject(TasksService);
    projects = inject(ProjectsService);
    employees = inject(EmployeesService);
    rows = computed(() => this.tasks.items());
}