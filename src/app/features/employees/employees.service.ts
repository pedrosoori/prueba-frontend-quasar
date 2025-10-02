import { Injectable, signal } from '@angular/core';
import { Employee } from '../../core/models/employee';


const KEY = 'pt-employees';


@Injectable({ providedIn: 'root' })
export class EmployeesService {
    private _items = signal<Employee[]>(this.load());
    items = this._items.asReadonly();


    private load(): Employee[] {
        const raw = localStorage.getItem(KEY);
        if (raw) return JSON.parse(raw);
        // seed
        return [];
    }
    private persist() { localStorage.setItem(KEY, JSON.stringify(this._items())); }


    create(data: Partial<Employee>) {
        const item: Employee = {
            id: crypto.randomUUID(),
            fullName: data.fullName?.trim() || 'Empleado',
            email: data.email || '',
            role: data.role || '',
            projectIds: data.projectIds || [],
            taskIds: data.taskIds || []
        };
        this._items.update(list => [...list, item]);
        this.persist();
        return item;
    }


    update(id: string, patch: Partial<Employee>) {
        this._items.update(list => list.map(e => e.id === id ? { ...e, ...patch } : e));
        this.persist();
    }


    remove(id: string) {
        this._items.update(list => list.filter(e => e.id !== id));
        this.persist();
    }


    getById(id: string) { return this._items().find(e => e.id === id); }
}