import {Sequelize} from 'sequelize-typescript'
import {UserModel} from "../models/user";
import {Options} from "sequelize";
import {inject, singleton} from "tsyringe";
import {Logger} from "winston";

@singleton()
export class Storage {
  public readonly instance: Sequelize;

  constructor(
      @inject("db-config") options: Options,
      @inject("logger-database") logger: Logger,
  ) {
    this.instance = new Sequelize({
      ...options,
      models: [UserModel],
      logging: (msg) => logger.info(msg),
    });
  }

  public async sync() {
    return this.instance.sync();
  }
}
