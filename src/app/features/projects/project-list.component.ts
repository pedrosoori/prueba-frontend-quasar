import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from './projects.service';
import { EntityTableComponent } from '../../shared/entity-table/entity-table.component';
import { NgIf, NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';


@Component({
    selector: 'app-project-list',
    standalone: true,
    imports: [RouterLink, EntityTableComponent, NgIf, DatePipe, NgFor],
    templateUrl: './project-list.component.html'
})
export class ProjectListComponent {
    svc = inject(ProjectsService);
    rows = computed(() => this.svc.items());
}