import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from './projects.service';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
    selector: 'app-project-form',
    standalone: true,
    imports: [FormsModule, RouterLink, NgIf],
    templateUrl: './project-form.component.html'
})
export class ProjectFormComponent {
    route = inject(ActivatedRoute);
    router = inject(Router);
    svc = inject(ProjectsService);


    id = this.route.snapshot.params['id'] as string | undefined;
    model = this.id ? { ...this.svc.getById(this.id)! } : { name: '', description: '', startDate: '', endDate: '' } as any;


    save() {
        if (!this.model.name?.trim()) return;
        if (this.id) this.svc.update(this.id, this.model);
        else this.svc.create(this.model);
        this.router.navigateByUrl('/projects');
    }

    remove() {
        if (!this.id) return;
        this.svc.remove(this.id);
        this.router.navigateByUrl('/projects');
    }
}