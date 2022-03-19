import {Logger} from "winston";
import {inject, singleton} from "tsyringe";


@singleton()
export class Application {

    constructor(
        @inject("logger-app") private log: Logger,
    ) {
    }

    public run() {
        this.log.info('App is running!');
    }
}
