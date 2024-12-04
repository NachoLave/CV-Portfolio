'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AddSkillForm() {
  const [skill, setSkill] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ skill }),
      })
      if (response.ok) {
        setSkill('')
        alert('Skill added successfully!')
      } else {
        const data = await response.json()
        alert(data.message || 'Failed to add skill')
      }
    } catch (error) {
      console.error('Error adding skill:', error)
      alert('Error adding skill')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="New Skill"
        value={skill}
        onChange={handleChange}
        required
        className="bg-black bg-opacity-80 border-red-500 text-red-500"
      />
      <Button type="submit" className="w-full bg-red-700 text-black hover:bg-red-600">
        Add Skill
      </Button>
    </form>
  )
}

