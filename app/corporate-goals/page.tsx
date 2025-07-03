"use client";

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CorporateGoalsHero } from "@/components/corporate-goals/hero"
import { VisionMissionSection } from "@/components/corporate-goals/vision-mission"
import { CoreValuesSection } from "@/components/corporate-goals/core-values"
import { StrategicObjectivesSection } from "@/components/corporate-goals/strategic-objectives"
import { SustainabilitySection } from "@/components/corporate-goals/sustainability"
import { GoalsTimelineSection } from "@/components/corporate-goals/goals-timeline"

export default function CorporateGoalsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <CorporateGoalsHero />
        <VisionMissionSection />
        <CoreValuesSection />
        <StrategicObjectivesSection />
        <SustainabilitySection />
        <GoalsTimelineSection />
      </main>
      <Footer />
    </div>
  )
}
