import { AdvancedSupportHandler } from "./handlers/advanced-support.handler";
import { BasicSupportHandler } from "./handlers/basic-support.handler";
import { SpecialSupportHandler } from "./handlers/special-support.handler";
import { Client } from "./main/app";
import { SupportRequest } from "./requests/support.request";

const basicHandler = new BasicSupportHandler();
const advancedHandler = new AdvancedSupportHandler();
const specialHandler = new SpecialSupportHandler();

basicHandler.setNext(advancedHandler).setNext(specialHandler);

const client = new Client(basicHandler);

client.sendRequest(new SupportRequest(1, "Low severity issue"));
client.sendRequest(new SupportRequest(2, "Medium severity issue"));
client.sendRequest(new SupportRequest(3, "High severity issue"));
client.sendRequest(new SupportRequest(0, "Support only"));
