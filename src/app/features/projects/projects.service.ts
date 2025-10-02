import { Injectable, signal } from '@angular/core';
import { Project } from '../../core/models/project';


const KEY = 'pt-projects';


@Injectable({ providedIn: 'root' })
export class ProjectsService {
    private _items = signal<Project[]>(this.load());
    items = this._items.asReadonly();


    private load(): Project[] {
        const raw = localStorage.getItem(KEY);
        if (raw) return JSON.parse(raw);
        // seed inicial
        return [];
    }
    private persist() { localStorage.setItem(KEY, JSON.stringify(this._items())); }


    create(data: Partial<Project>) {
        const item: Project = {
            id: crypto.randomUUID(),
            name: data.name?.trim() || 'Sin título',
            description: data.description || '',
            startDate: data.startDate || '',
            endDate: data.endDate || '',
            employeeIds: data.employeeIds || [],
            taskIds: data.taskIds || []
        };
        this._items.update(list => [...list, item]);
        this.persist();
        return item;
    }


    update(id: string, patch: Partial<Project>) {
        this._items.update(list => list.map(p => p.id === id ? { ...p, ...patch } : p));
        this.persist();
    }


    remove(id: string) {
        this._items.update(list => list.filter(p => p.id !== id));
        this.persist();
    }


    getById(id: string) { return this._items().find(p => p.id === id); }
}