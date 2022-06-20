import { Request, Response } from 'express'

export interface User {
  name: string
  id: number
}

export interface Locals {
  user: User
}

export function auth(req: Request, res: Response, next: () => void): void {
  res.locals.user = {
    name: 'Example user',
    id: 0
  }

  next()
}