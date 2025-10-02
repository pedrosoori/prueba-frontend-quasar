import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from './employees.service';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-project-form',
    standalone: true,
    imports: [FormsModule, RouterLink],
    templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent {
    route = inject(ActivatedRoute);
    router = inject(Router);
    svc = inject(EmployeesService);


    id = this.route.snapshot.params['id'] as string | undefined;
    model = this.id ? { ...this.svc.getById(this.id)! } : { fullName: '', email: '', role: '' } as any;


    save() {
        if (!this.model.fullName?.trim()) return;
        if (this.id) this.svc.update(this.id, this.model);
        else this.svc.create(this.model);
        this.router.navigateByUrl('/employees');
    }
}