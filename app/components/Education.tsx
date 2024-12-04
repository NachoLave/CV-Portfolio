'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'

export default function Education() {
  const education = [
    {
      degree: "Licenciatura en Sistemas",
      institution: "Universidad Argentina de la Empresa (UADE)",
      status: "En curso"
    }
  ]

  const courses = [
    // Aquí puedes agregar los cursos que planeas hacer
    // Ejemplo: { name: "Curso de Ciberseguridad Avanzada", platform: "Coursera" }
  ]

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Formación Académica</h2>
      <div className="grid gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-gray-900 border-green-400 border-opacity-50">
              <CardHeader>
                <CardTitle className="text-green-400">{edu.degree}</CardTitle>
                <CardDescription className="text-gray-400">
                  {edu.institution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="border-green-400">
                  {edu.status}
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {courses.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Cursos Planificados</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {courses.map((course, index) => (
              <li key={index}>{course.name} - {course.platform}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

