import { exercicio1, exercicio2, exercicio3, exercicio4} from '../services/uri.service'

export const getexercicio1 = async (req,res) => {
  exercicio1(req.body.x)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(400).send(error.writeErrors[0].errmsg)
    })
}

export const getexercicio2 = async (req,res) => {
  exercicio2(req.body.x,req.body.y)
    .then((response) => {
      res.status(201).send(response)
    })
    .catch((error) => {
      res.status(400).send(error._message)
    })
}

export const getexercicio3 = async (req,res) => {
  exercicio3(req.body.x)
    .then((response) => {
      res.status(201).send(response)
    })
    .catch((error) => {
      res.status(400).send(error._message)
    })
}

export const getexercicio4 = async (req,res) => {
  exercicio4(req.body.x)
    .then((response) => {
      res.status(201).send(response)
    })
    .catch((error) => {
      res.status(400).send(error._message)
    })
}
