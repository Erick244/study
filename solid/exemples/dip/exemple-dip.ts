// Metodo sem DIP

class Database {
    saveData(data: any) {
        console.log(`Saving data: ${data}`);
    }
}

class App {
    private database: Database;

    constructor() {
        this.database = new Database();
    }

    saveData(data: any) {
        this.database.saveData(data);
    }
}

const app = new App();
app.saveData("some data to save");