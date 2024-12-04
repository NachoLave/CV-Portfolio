import React from 'react'

interface SectionTitleProps {
  children: React.ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold mb-6 text-center relative">
      <span className="bg-black px-4 relative z-10">{children}</span>
      <div className="absolute w-full h-0.5 bg-red-500 top-1/2 left-0 transform -translate-y-1/2"></div>
    </h2>
  )
}

