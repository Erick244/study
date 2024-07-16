// Singleton Class
class Database {
    private static instance: Database;

    private constructor() {}

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    public query(sql: string) {
        // Implement database query logic here
        console.log(`Executing query: ${sql}`);
    }
}

// Cliente Code
export class Application {
    public main() {
        const db1 = Database.getInstance();
        db1.query("SELECT * FROM users");

        const db2 = Database.getInstance();
        db2.query("SELECT * FROM orders");

        console.log(db1 === db2);
    }
}

const app = new Application();
app.main();
