// Q: Why does the below not get any types?
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/ping', (req, res) => {
//   res.send('PONG')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

import express, { Request, Response } from 'express'
import { auth, User } from './middleware'

const app = express()
const port = 3000

// Q: According to https://basarat.gitbook.io/typescript/type-system/interfaces, 
// interfaces are open ended and I can add to existing declarations of interfaces.
// So why can't I here?
interface Response {
  locals: {
    user: User
  }
}

app.get('/ping', auth, (req: Request, res: Response) => {
  res.send('PONG')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})