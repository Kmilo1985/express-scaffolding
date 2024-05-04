import Env from "../helpers/env";

/*
|--------------------------------------------------------------------------
| Application port
|--------------------------------------------------------------------------
*/
export const port: number = Env.get<number>('PORT');

