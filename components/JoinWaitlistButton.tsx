"use client"

import type React from "react"

interface JoinWaitlistButtonProps {
  onClick: () => void
  children: React.ReactNode
  className?: string
}

export default function JoinWaitlistButton({ onClick, children, className = "" }: JoinWaitlistButtonProps) {
  const defaultClasses =
    "bg-gradient-to-r from-soft-blue to-sage-green text-white font-inter font-medium px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-md"

  return (
    <button onClick={onClick} className={className || defaultClasses}>
      {children}
    </button>
  )
}
