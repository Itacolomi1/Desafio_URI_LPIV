import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {
  getexercicio1,
  getexercicio2,
  getexercicio3,
  getexercicio4
} from '../controllers/uri.controller'
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.post('/exercicio1', (req, res) => {
  getexercicio1(req, res)
})

app.post('/exercicio2', (req, res) => {
  getexercicio2(req, res)
})

app.post('/exercicio3', (req, res) => {
  getexercicio3(req, res)
})
app.post('/exercicio4', (req, res) => {
  getexercicio4(req, res)
})
export default app
