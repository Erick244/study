import { InStoreProcessor } from "./processors/in-store.processor";
import { OnlineProcessor } from "./processors/online.processor";

const onlineProcessor = new OnlineProcessor();
onlineProcessor.processOrder();

const inStoreProcessor = new InStoreProcessor();
inStoreProcessor.processOrder();
