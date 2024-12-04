import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'data', 'cv-data.json')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const jsonData = await fs.promises.readFile(dataFilePath, 'utf8')
    const data = JSON.parse(jsonData)
    res.status(200).json(data.contact)
  } else if (req.method === 'PUT') {
    const jsonData = await fs.promises.readFile(dataFilePath, 'utf8')
    const data = JSON.parse(jsonData)
    data.contact = { ...data.contact, ...req.body }
    await fs.promises.writeFile(dataFilePath, JSON.stringify(data, null, 2))
    res.status(200).json(data.contact)
  } else {
    res.setHeader('Allow', ['GET', 'PUT'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

