import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from '../../core/models/task';


const KEY = 'pt-tasks';


@Injectable({ providedIn: 'root' })
export class TasksService {
    private _items = signal<Task[]>(this.load());
    items = this._items.asReadonly();


    private load(): Task[] {
        const raw = localStorage.getItem(KEY);
        if (raw) return JSON.parse(raw);
        return [];
    }
    private persist() { localStorage.setItem(KEY, JSON.stringify(this._items())); }


    create(data: Partial<Task>) {
        const item: Task = {
            id: crypto.randomUUID(),
            title: data.title?.trim() || 'Nueva tarea',
            description: data.description || '',
            status: (data.status as TaskStatus) || 'Pendiente',
            createdAt: new Date().toISOString(),
            dueDate: data.dueDate,
            employeeId: data.employeeId,
            projectId: data.projectId
        };
        this._items.update(list => [...list, item]);
        this.persist();
        return item;
    }


    update(id: string, patch: Partial<Task>) {
        this._items.update(list => list.map(t => t.id === id ? { ...t, ...patch } : t));
        this.persist();
    }


    remove(id: string) {
        this._items.update(list => list.filter(t => t.id !== id));
        this.persist();
    }


    getById(id: string) { return this._items().find(t => t.id === id); }
}