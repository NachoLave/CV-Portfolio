import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'data', 'cv-data.json')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const jsonData = await fs.promises.readFile(dataFilePath, 'utf8')
    const data = JSON.parse(jsonData)
    res.status(200).json(data.education)
  } else if (req.method === 'POST') {
    const jsonData = await fs.promises.readFile(dataFilePath, 'utf8')
    const data = JSON.parse(jsonData)
    const newEducation = {
      id: Date.now(),
      ...req.body
    }
    data.education.push(newEducation)
    await fs.promises.writeFile(dataFilePath, JSON.stringify(data, null, 2))
    res.status(201).json(newEducation)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

