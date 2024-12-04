'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AddExperienceForm() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    period: '',
    responsibilities: '',
    skills: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/experience', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          responsibilities: formData.responsibilities.split('\n'),
          skills: formData.skills.split(',').map(skill => skill.trim())
        }),
      })
      if (response.ok) {
        setFormData({
          title: '',
          company: '',
          period: '',
          responsibilities: '',
          skills: ''
        })
        alert('Experience added successfully!')
      } else {
        alert('Failed to add experience')
      }
    } catch (error) {
      console.error('Error adding experience:', error)
      alert('Error adding experience')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Job Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        className="bg-black bg-opacity-80 border-red-500 text-red-500"
      />
      <Input
        placeholder="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        required
        className="bg-black bg-opacity-80 border-red-500 text-red-500"
      />
      <Input
        placeholder="Period"
        name="period"
        value={formData.period}
        onChange={handleChange}
        required
        className="bg-black bg-opacity-80 border-red-500 text-red-500"
      />
      <Textarea
        placeholder="Responsibilities (one per line)"
        name="responsibilities"
        value={formData.responsibilities}
        onChange={handleChange}
        required
        className="bg-black bg-opacity-80 border-red-500 text-red-500"
      />
      <Input
        placeholder="Skills (comma-separated)"
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        required
        className="bg-black bg-opacity-80 border-red-500 text-red-500"
      />
      <Button type="submit" className="w-full bg-red-700 text-black hover:bg-red-600">
        Add Experience
      </Button>
    </form>
  )
}

