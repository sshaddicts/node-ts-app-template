import 'reflect-metadata';
import "./di/loggerRegistry";
import "./di/configRegistry";
import "./di/templateRegistry";
import {Storage} from "./services/sequelize";
import {container} from "tsyringe";
import {Application} from "./application";

const storage = container.resolve(Storage);
const app = container.resolve(Application);

(async () => { await storage.sync(); })()

app.run();
