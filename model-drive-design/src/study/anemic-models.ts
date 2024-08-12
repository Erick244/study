// Anemic Model
export interface User {
    id: number;
    name: string;
    email: string;
}

export class UserService {
    private users: User[] = [];

    create(user: User): void {
        this.users.push(user);
    }

    update(id: number, data: User): void {
        this.users.forEach((user) => {
            if (user.id === id) {
                Object.assign(user, data);
                return;
            }
        });
    }

    find(id: number): User | null {
        return this.users.find((user) => user.id === id) ?? null;
    }
}

// Client Code
const service = new UserService();
const user1 = { id: 1, name: "John", email: "test@example.com" };

service.create(user1);
service.update(1, { ...user1, name: "Richard" });

console.log(service.find(1));
