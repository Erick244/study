// Models
export class User {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly email: string,
        readonly password: string
    ) {}
}

// Repositories
export class UserRepository {
    private users: Map<number, User> = new Map();

    findById(id: number): User | null {
        return this.users.get(id) || null;
    }

    save(user: User): void {
        this.users.set(user.id, user);
    }
}

// Commands
export interface CommandHandler<C> {
    execute(command: C): void;
}

export class CreateUserCommand {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly email: string,
        readonly password: string
    ) {}
}

export class CreateUserCommandHandler
    implements CommandHandler<CreateUserCommand>
{
    constructor(private userRepository: UserRepository) {}

    execute(command: CreateUserCommand): void {
        const newUser = new User(
            command.id,
            command.name,
            command.email,
            command.password
        );

        this.userRepository.save(newUser);
    }
}

// Queries
export interface QueryHandler<Q, R> {
    execute(query: Q): R;
}

export class GetUserByIdQuery {
    constructor(readonly id: number) {}
}

export class FindUserByIdQueryHandler
    implements QueryHandler<GetUserByIdQuery, User | null>
{
    constructor(private userRepository: UserRepository) {}

    execute(query: GetUserByIdQuery): User | null {
        return this.userRepository.findById(query.id);
    }
}

// Use Cases
const userRepo = new UserRepository();

const createUserCommandHandler = new CreateUserCommandHandler(userRepo);
const createUserCommand = new CreateUserCommand(
    1,
    "User",
    "user@email.com",
    "password"
);

createUserCommandHandler.execute(createUserCommand);

const getUserByIdQueryHandler = new FindUserByIdQueryHandler(userRepo);
const user = getUserByIdQueryHandler.execute(new GetUserByIdQuery(1));

console.log(user);
