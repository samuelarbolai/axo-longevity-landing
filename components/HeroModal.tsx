"use client"
import { useState } from "react"
import type React from "react"

import { X } from "lucide-react"

interface HeroModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function HeroModal({ isOpen, onClose }: HeroModalProps) {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState("")
  const [sport, setSport] = useState("")
  const [level, setLevel] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClose = () => {
    setEmail("")
    setFirstName("")
    setLastName("")
    setAge("")
    setSport("")
    setLevel("")
    setIsSubmitted(false)
    setIsLoading(false)
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
        </button>

        <div className="p-4 sm:p-6">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Join the Waitlist</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Be the first to experience the future of performance optimization
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      min="13"
                      max="100"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                      Level
                    </label>
                    <select
                      id="level"
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      required
                    >
                      <option value="">Select level</option>
                      <option value="recreational">Recreational</option>
                      <option value="competitive">Competitive</option>
                      <option value="elite">Elite</option>
                      <option value="professional">Professional</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="sport" className="block text-sm font-medium text-gray-700 mb-1">
                    Primary Sport
                  </label>
                  <select
                    id="sport"
                    value={sport}
                    onChange={(e) => setSport(e.target.value)}
                    className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    required
                  >
                    <option value="">Select sport</option>
                    <option value="running">Running</option>
                    <option value="cycling">Cycling</option>
                    <option value="swimming">Swimming</option>
                    <option value="triathlon">Triathlon</option>
                    <option value="crossfit">CrossFit</option>
                    <option value="weightlifting">Weightlifting</option>
                    <option value="soccer">Soccer</option>
                    <option value="basketball">Basketball</option>
                    <option value="tennis">Tennis</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 sm:py-4 px-4 rounded-lg transition-colors text-sm sm:text-base"
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4 sm:py-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Welcome to the Future!</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                You're now on the waitlist. We'll notify you when AXO Elite is ready to transform your performance.
              </p>
              <button
                onClick={handleClose}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base"
              >
                Continue Exploring
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
