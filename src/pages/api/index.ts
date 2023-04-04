import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      const data = req.body
      console.log('Received data:', data)
      return res.status(200).json(data)
    default:
      res.status(405).end()
      break
  }
}
