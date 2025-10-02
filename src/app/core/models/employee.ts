export interface Employee {
    id: string;
    fullName: string;
    email?: string;
    role?: string;
    projectIds: string[];
    taskIds: string[];
}