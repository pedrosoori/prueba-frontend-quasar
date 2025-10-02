import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../projects/projects.service';
import { TasksService } from '../tasks/tasks.service';
import { EmployeesService } from '../employees/employees.service';


@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.scss'
})
export class DashboardComponent {
    projects = inject(ProjectsService);
    tasks = inject(TasksService);
    employees = inject(EmployeesService);


    totalProjects = computed(() => this.projects.items().length);
    totalTasks = computed(() => this.tasks.items().length);
    totalEmployees = computed(() => this.employees.items().length);
}