// # Domain Layer

// Entities
export class User {
    constructor(
        readonly id: number,
        readonly username: string,
        readonly password: string
    ) {}

    // Others operations...
}

// Interfaces
export interface Repository<T> {
    find(id: number): T | null;
}

// # Infrastructure Layer

// Repositories
export class UserRepository implements Repository<User> {
    private users: User[] = [];

    find(id: number): User | null {
        return this.users.find((user) => user.id === id) ?? null;
    }
}

// # Application Layer

// Services
export class UserService {
    constructor(private userRepository: UserRepository) {}

    getUser(id: number): User {
        const user = this.userRepository.find(id);

        if (!user) {
            throw new Error(`User not found with id: ${id}`);
        }

        return user;
    }
}

// Controller in Application Layer
export class ApplicationUserController {
    constructor(private userService: UserService) {}

    getUser(id: number): User {
        return this.userService.getUser(id);
    }
}

// # Presentation Layer
// Controller in Presentation Layer
export class PresentationUserController {
    constructor(private userService: UserService) {}

    getUser(req: Request, res: Response): Response {
        const id = new URLSearchParams(req.url).get("id");

        if (!id) {
            return new Response("Invalid Request Parameters", {
                status: 404,
            });
        }

        const user = this.userService.getUser(+id);

        return new Response(JSON.stringify(user), {
            status: 200,
        });
    }
}

// Frontend...
