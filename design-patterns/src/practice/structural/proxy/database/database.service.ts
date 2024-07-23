import { Database } from "./database.interface";

export class DatabaseService implements Database {
    connect(): void {
        console.log("Connecting to the database...");
    }

    query(sql: string): any {
        console.log(`Executing query: ${sql}`);
        return { data: "some data" };
    }

    disconnect(): void {
        console.log("Disconnecting from the database...");
    }
}
