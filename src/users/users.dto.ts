export class UserDTO {
    id: number;
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}