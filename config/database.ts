import Env from '../helpers/env'

const databaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get('DB_CONNECTION') as 'mysql',
  /*
    |--------------------------------------------------------------------------
    | MySQL config
    |--------------------------------------------------------------------------
    |
    | Configuration for MySQL database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i mysql2
    |
    */
  connections: {
    client: 'mysql' as 'mysql',
    connection: {
      host: Env.get('MYSQL_HOST') as string,
      port: Env.get('MYSQL_PORT') as number,
      user: Env.get('MYSQL_USER') as string,
      password: Env.get('MYSQL_PASSWORD') as string,
      database: Env.get('MYSQL_DB_NAME') as string,
    },
    debug: false,
  },
}

export default databaseConfig
