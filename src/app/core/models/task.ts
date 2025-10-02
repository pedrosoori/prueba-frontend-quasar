export type TaskStatus = 'Pendiente' | 'En progreso' | 'Completada';


export interface Task {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    createdAt: string;
    dueDate?: string;
    employeeId?: string;
    projectId?: string;
}