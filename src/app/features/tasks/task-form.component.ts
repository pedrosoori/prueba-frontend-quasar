import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from './tasks.service';
import { EmployeesService } from '../employees/employees.service';
import { ProjectsService } from '../projects/projects.service';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';


@Component({
    selector: 'app-task-form',
    standalone: true,
    imports: [FormsModule, RouterLink, NgFor, NgIf],
    templateUrl: './task-form.component.html'
})
export class TaskFormComponent {
    route = inject(ActivatedRoute);
    router = inject(Router);
    tasks = inject(TasksService);
    employees = inject(EmployeesService);
    projects = inject(ProjectsService);


    id = this.route.snapshot.params['id'] as string | undefined;
    model = this.id ? { ...this.tasks.getById(this.id)! } : { title: '', description: '', status: 'Pendiente', dueDate: '', employeeId: '', projectId: '' } as any;


    save() {
    if (!this.model.title?.trim()) return;

    let taskId = this.id;
    if (this.id) {
        this.tasks.update(this.id, this.model);
    } else {
        taskId = this.tasks.create(this.model).id; 
    }

    if (this.model.employeeId) {
        const empId = this.model.employeeId;
        const emp = this.employees.getById(empId);
        if (emp) {
        const currentTaskIds = emp.taskIds ?? [];
        const currentProjectIds = emp.projectIds ?? [];

        const nextTaskIds = taskId
            ? Array.from(new Set([...currentTaskIds, taskId]))
            : currentTaskIds;

        const nextProjectIds = this.model.projectId
            ? Array.from(new Set([...currentProjectIds, this.model.projectId]))
            : currentProjectIds;

        this.employees.update(empId, {
            taskIds: nextTaskIds,
            projectIds: nextProjectIds,
        });
        }
    }

    this.router.navigateByUrl('/tasks');
    }

    remove() {
        if (!this.id) return;
        this.tasks.remove(this.id);
        this.router.navigateByUrl('/tasks');
    }
}