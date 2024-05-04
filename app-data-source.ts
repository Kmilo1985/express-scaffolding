import dotenv from 'dotenv'
dotenv.config()
import { DataSource } from 'typeorm'
import databaseConfig from './config/database'

export const dataSource = new DataSource({
  type: databaseConfig.connections.client,
  host: databaseConfig.connections.connection.host,
  port: databaseConfig.connections.connection.port,
  username: databaseConfig.connections.connection.user,
  password: databaseConfig.connections.connection.password,
  database: databaseConfig.connections.connection.database,
  entities: ['app/models/*.ts'],
  migrations: ['database/migrations/*.ts'],
  logging: databaseConfig.connections.debug,
  synchronize: true,
})
 