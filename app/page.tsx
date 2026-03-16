"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Inicio } from "@/components/sections/inicio"
import { NIS2 } from "@/components/sections/nis2"
import { Auditor } from "@/components/sections/auditor"
import { Formacion } from "@/components/sections/formacion"
import { Concienciacion } from "@/components/sections/concienciacion"
import { Tutorizacion } from "@/components/sections/tutorizacion"

export default function Home() {
  const [activeTab, setActiveTab] = useState("inicio")

  const renderContent = () => {
    switch (activeTab) {
      case "inicio":
        return <Inicio setActiveTab={setActiveTab} />
      case "nis2":
        return <NIS2 />
      case "auditor":
        return <Auditor />
      case "formacion":
        return <Formacion />
      case "concienciacion":
        return <Concienciacion />
      case "tutorizacion":
        return <Tutorizacion />
      default:
        return <Inicio setActiveTab={setActiveTab} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer setActiveTab={setActiveTab} />
    </div>
  )
}
