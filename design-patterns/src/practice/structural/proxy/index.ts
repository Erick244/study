import { DatabaseProxy } from "./database/database.proxy";
import { DatabaseService } from "./database/database.service";
import { Application } from "./main/app";

const dbService = new DatabaseService();
const dbProxy = new DatabaseProxy(dbService);
dbProxy.enableLogging = true;
dbProxy.enableQueryCache = true;

const app = new Application(dbProxy);

app.run();
