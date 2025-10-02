import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeesService } from './employees.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-employee-list',
    standalone: true,
    imports: [RouterLink, NgFor, NgIf],
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
    svc = inject(EmployeesService);
    rows = computed(() => this.svc.items());
}