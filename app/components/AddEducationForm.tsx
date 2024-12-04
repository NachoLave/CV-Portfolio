'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddEducationForm() {
  const [formData, setFormData] = useState({
    degree: '',
    institution: '',
    status: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleStatusChange = (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      status: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/education', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setFormData({
          degree: '',
          institution: '',
          status: ''
        })
        alert('Education added successfully!')
      } else {
        alert('Failed to add education')
      }
    } catch (error) {
      console.error('Error adding education:', error)
      alert('Error adding education')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Degree"
        name="degree"
        value={formData.degree}
        onChange={handleChange}
        required
        className="bg-black bg-opacity-80 border-red-500 text-red-500"
      />
      <Input
        placeholder="Institution"
        name="institution"
        value={formData.institution}
        onChange={handleChange}
        required
        className="bg-black bg-opacity-80 border-red-500 text-red-500"
      />
      <Select onValueChange={handleStatusChange} value={formData.status}>
        <SelectTrigger className="bg-black bg-opacity-80 border-red-500 text-red-500">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="En curso">En curso</SelectItem>
          <SelectItem value="Completado">Completado</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" className="w-full bg-red-700 text-black hover:bg-red-600">
        Add Education
      </Button>
    </form>
  )
}

