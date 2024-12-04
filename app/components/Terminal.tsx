'use client'

import { useState, useEffect } from 'react'

export default function Terminal() {
  const [text, setText] = useState('')
  const fullText = `> Iniciando análisis de seguridad...
> Escaneando puertos...
> Verificando vulnerabilidades...
> Analizando tráfico de red...
> Generando informe de seguridad...
> Análisis completado. Sistema seguro.`

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(timer)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-black border border-green-400 p-4 rounded-lg mb-8 font-mono text-sm">
      <div className="flex mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="whitespace-pre-wrap">{text}</pre>
      <div className="animate-pulse">_</div>
    </div>
  )
}

