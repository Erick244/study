type Config = {
    [key: string]: any;
};

export class ConfigManager {
    private static instance: ConfigManager;

    private static config: Config = {};

    private constructor() {}

    public static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }

        return ConfigManager.instance;
    }

    public setConfig(key: string, value: any): void {
        ConfigManager.config[key] = value;
    }

    public getConfig(key: string): any {
        return ConfigManager.config[key];
    }

    public removeConfig(key: string): void {
        delete ConfigManager.config[key];
    }
}
