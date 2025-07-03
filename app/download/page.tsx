"use client";
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProposalDownloadSection } from "@/components/download/proposal-download"

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <ProposalDownloadSection />
      </main>
      <Footer />
    </div>
  )
}
