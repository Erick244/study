import { ConfigManager } from "../config/config-manager";

export class SingletonApplication {
    public main(): void {
        const config = ConfigManager.getInstance();
        config.setConfig("api_url", "https://api.example.com");

        const config2 = ConfigManager.getInstance();
        const apiUrl = config2.getConfig("api_url");
        console.log(apiUrl);

        const config3 = ConfigManager.getInstance();
        config3.removeConfig("api_url");
        console.log(config3.getConfig("api_url"));
    }
}
