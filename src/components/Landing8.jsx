"use client"
import React, { useState } from 'react'
import HeroModal from './HeroModal'
import JoinWaitlistButton from './JoinWaitlistButton'

export default function Landing8() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="bg-[#b4735a] text-white text-center py-40 px-6">
      <h2 className="text-5xl md:text-6xl font-extralight font-serif4  leading-tight">
        Health is what lets you<br />keep what matters.
      </h2>
      <p className="text-lg font-extralight mt-6">
        Be here to experience more moments that count.
      </p>
      <div className="mt-10">
        <JoinWaitlistButton
          onClick={() => setShowModal(true)}
          bgColor="bg-[#fef9f1]"
          textColor="text-[#b4735a]"
          bold={true}
        />
      </div>
      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
