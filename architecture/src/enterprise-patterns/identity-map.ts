export type Id = string | number;

export type ObjectId = {
    id: Id;
};

export class IdentityMap<T extends ObjectId> {
    private map: Map<Id, T> = new Map();

    add(object: T): void {
        this.map.set(object.id, object);
    }

    get(id: Id): T | undefined {
        return this.map.get(id);
    }

    remove(id: Id): void {
        this.map.delete(id);
    }

    clear(): void {
        this.map.clear();
    }
}

export class User {
    constructor(public id: number, public name: string) {}
}

export class UserRepository {
    private identityMap: IdentityMap<User> = new IdentityMap();

    findById(id: number): User | undefined {
        try {
            const user = this.identityMap.get(id);

            if (user) {
                return user;
            }

            const userFromDb = this.fetchById(id);

            if (!userFromDb) {
                throw new Error(`User ${id} not found`);
            }

            this.identityMap.add(userFromDb);
            return userFromDb;
        } catch (e: any) {
            console.error("Error fetching user:", e.message);
        }
    }

    private fetchById(id: number): User | undefined {
        console.log("Fetching user in database...");

        return new User(id, `User ${id}`);
    }
}

// Usage
const repository = new UserRepository();

repository.findById(1); // Fetching user in database...
const cachedUser = repository.findById(1);

console.log(cachedUser);
