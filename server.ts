import 'reflect-metadata'
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import corsConfig from './config/cors'
import cors from 'cors'
import router from './start/routes'
import { port } from './config/app'
import { dataSource } from './app-data-source'

dataSource
  .initialize()
  .then(() => {})
  .catch((e) => {
    console.log(e)
  })

const app = express()

app.use(cors(corsConfig))

app.use(express.json({ limit: '50mb' }))

app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.listen(port)
