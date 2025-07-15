"use client"

import type React from "react"

interface JoinWaitlistButtonProps {
  onClick: () => void
  children: React.ReactNode
  className?: string
}

export default function JoinWaitlistButton({ onClick, children, className = "" }: JoinWaitlistButtonProps) {
  const defaultClasses =
    "bg-gradient-to-r from-electric-blue to-neon-green text-black font-inter font-bold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 performance-glow"

  return (
    <button onClick={onClick} className={className || defaultClasses}>
      {children}
    </button>
  )
}
