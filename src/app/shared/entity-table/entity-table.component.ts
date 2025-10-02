import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';


@Component({
    selector: 'app-entity-table',
    standalone: true,
    imports: [NgFor, NgIf, NgTemplateOutlet],
    templateUrl: './entity-table.component.html',
    styleUrl: './entity-table.component.scss'
})
export class EntityTableComponent<T extends Record<string, any>> {
    @Input() columns: { key: keyof T | string; label: string; }[] = [];
    @Input() data: T[] = [];
    @Input() actionsTemplate?: any; // ng-template opcional
}