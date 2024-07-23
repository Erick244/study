import { Database } from "./database.interface";
import { DatabaseService } from "./database.service";

export class DatabaseProxy implements Database {
    private service: DatabaseService;

    private queryCache: Map<string, any> = new Map();

    public enableQueryCache: boolean = false;

    public enableLogging: boolean = false;

    constructor(service: DatabaseService) {
        this.service = service;
    }

    connect(): void {
        if (this.enableLogging) {
            this.log("DATABASE CONNECTION");
        }

        this.service.connect();
    }

    log(info: string): void {
        console.log(`[${new Date().toISOString()}] - ${info}\n`);
    }

    query(sql: string) {
        if (this.enableLogging) {
            this.log(
                `DATABASE QUERY - IN CACHE: ${!!this.queryCache.get(sql)}`
            );
        }

        if (!this.enableQueryCache) {
            return this.service.query(sql);
        }

        let query = this.queryCache.get(sql);

        if (!query) {
            query = this.service.query(sql);
            this.queryCache.set(sql, query);

            return query;
        }

        return query;
    }

    disconnect(): void {
        if (this.enableLogging) {
            this.log("DATABASE DISCONNECT");
        }

        this.service.disconnect();
    }
}
