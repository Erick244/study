import { Database } from "../database/database.interface";

export class Application {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    run() {
        this.db.connect();
        this.db.query("SELECT * FROM users");
        this.db.disconnect();
    }
}
