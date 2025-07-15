"use client"
import AthleteNavbar from "../components/AthleteNavbar"
import AthleteHero from "../components/AthleteHero"
import PerformanceLab from "../components/PerformanceLab"
import BiomarkerDashboard from "../components/BiomarkerDashboard"
import EliteTestimonials from "../components/EliteTestimonials"
import AthleteManifesto from "../components/AthleteManifesto"
import ElitePricing from "../components/ElitePricing"
import EliteFooter from "../components/EliteFooter"

export default function HomePage() {
  return (
    <main className="font-source">
      <AthleteNavbar />
      <AthleteHero />
      <PerformanceLab />
      <BiomarkerDashboard />
      <EliteTestimonials />
      <AthleteManifesto />
      <ElitePricing />
      <EliteFooter />
    </main>
  )
}
