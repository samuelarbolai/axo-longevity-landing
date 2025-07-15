"use client"
import { useState } from "react"
import type React from "react"

const countryDialData = {
  US: { code: "+1", flag: "🇺🇸" },
  CA: { code: "+1", flag: "🇨🇦" },
  GB: { code: "+44", flag: "🇬🇧" },
  DE: { code: "+49", flag: "🇩🇪" },
  FR: { code: "+33", flag: "🇫🇷" },
  IT: { code: "+39", flag: "🇮🇹" },
  ES: { code: "+34", flag: "🇪🇸" },
  AU: { code: "+61", flag: "🇦🇺" },
  JP: { code: "+81", flag: "🇯🇵" },
  KR: { code: "+82", flag: "🇰🇷" },
}

interface HeroModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function HeroModal({ isOpen, onClose }: HeroModalProps) {
  const [country, setCountry] = useState("")
  const [countryCode, setCountryCode] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    sport: "",
    level: "",
  })
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const isFormValid = () => {
    const { firstName, email, phone, sport, level } = formData
    if (!firstName.trim() || !email.trim() || !phone.trim() || !sport.trim() || !level.trim() || !country.trim()) {
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid()) {
      setErrorMsg("Please fill out all required fields correctly.")
      return
    }

    console.log("Elite athlete signup:", {
      ...formData,
      phone: `${countryCode}${formData.phone}`,
      country,
    })

    setSuccess(true)
    setFormData({ firstName: "", email: "", phone: "", sport: "", level: "" })
    setCountry("")
    setCountryCode("")
  }

  const handleClose = () => {
    setSuccess(false)
    setErrorMsg("")
    setFormData({ firstName: "", email: "", phone: "", sport: "", level: "" })
    setCountry("")
    setCountryCode("")
    onClose()
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="glass-effect rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto relative elegant-glow soft-border">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-charcoal/60 hover:text-charcoal text-2xl transition-colors z-10"
          onClick={handleClose}
          type="button"
        >
          ×
        </button>

        {!success ? (
          <>
            <div className="text-center mb-8 pr-8">
              <h2 className="text-3xl font-inter font-light mb-4">
                <span className="text-charcoal">Begin Your</span>
                <br />
                <span className="gradient-text font-medium">Elite Journey</span>
              </h2>
              <p className="text-charcoal/70 font-source leading-relaxed text-sm">
                Elevate your performance with sophisticated biomarker analysis trusted by Olympic athletes.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  className="w-full bg-white/60 border border-charcoal/20 rounded-xl px-4 py-3 text-charcoal placeholder-charcoal/50 focus:border-soft-blue focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address*"
                  className="w-full bg-white/60 border border-charcoal/20 rounded-xl px-4 py-3 text-charcoal placeholder-charcoal/50 focus:border-soft-blue focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <select
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  className="w-full bg-white/60 border border-charcoal/20 rounded-xl px-4 py-3 text-charcoal focus:border-soft-blue focus:outline-none transition-colors"
                >
                  <option value="" disabled>
                    Select Sport*
                  </option>
                  <option value="cycling">Cycling</option>
                  <option value="running">Running</option>
                  <option value="triathlon">Triathlon</option>
                  <option value="swimming">Swimming</option>
                  <option value="crossfit">CrossFit</option>
                  <option value="powerlifting">Powerlifting</option>
                  <option value="football">Football</option>
                  <option value="basketball">Basketball</option>
                  <option value="soccer">Soccer</option>
                  <option value="tennis">Tennis</option>
                  <option value="golf">Golf</option>
                  <option value="other">Other</option>
                </select>

                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="w-full bg-white/60 border border-charcoal/20 rounded-xl px-4 py-3 text-charcoal focus:border-soft-blue focus:outline-none transition-colors"
                >
                  <option value="" disabled>
                    Competition Level*
                  </option>
                  <option value="recreational">Recreational</option>
                  <option value="competitive">Competitive</option>
                  <option value="elite">Elite/Professional</option>
                  <option value="olympic">Olympic/National Team</option>
                </select>
              </div>

              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-white/60 border border-charcoal/20 rounded-xl px-4 py-3 text-charcoal focus:border-soft-blue focus:outline-none transition-colors"
              >
                <option value="" disabled>
                  Country*
                </option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="Australia">Australia</option>
                <option value="Japan">Japan</option>
                <option value="South Korea">South Korea</option>
              </select>

              <div className="flex gap-3">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-20 bg-white/60 border border-charcoal/20 rounded-xl px-2 py-3 text-charcoal focus:border-soft-blue focus:outline-none transition-colors text-sm"
                >
                  <option value="" disabled>
                    +XX
                  </option>
                  {Object.values(countryDialData).map(({ code, flag }) => (
                    <option key={code} value={code}>
                      {flag} {code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*"
                  className="flex-1 bg-white/60 border border-charcoal/20 rounded-xl px-4 py-3 text-charcoal placeholder-charcoal/50 focus:border-soft-blue focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-soft-blue to-sage-green text-white font-inter font-medium py-4 rounded-xl hover:scale-105 transition-all duration-300 elegant-glow shadow-lg"
              >
                Begin Your Elite Journey
              </button>

              {errorMsg && <p className="text-warm-coral text-sm text-center">{errorMsg}</p>}
            </form>

            <p className="text-xs text-center text-charcoal/50 mt-6 leading-relaxed">
              By joining, you're entering a community of elite athletes worldwide.
              <br />
              <a href="#" className="text-soft-blue hover:underline">
                Privacy Policy
              </a>{" "}
              •{" "}
              <a href="#" className="text-soft-blue hover:underline">
                Terms of Service
              </a>
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-2xl font-inter font-medium gradient-text mb-4">Welcome to Elite Performance</h2>
            <p className="text-charcoal/70 font-source mb-3 leading-relaxed">
              You've successfully joined our exclusive community of elite athletes.
            </p>
            <p className="text-charcoal/60 font-source text-sm mb-6">
              Our performance team will contact you within 24 hours to discuss your personalized optimization journey.
            </p>
            <button
              onClick={handleClose}
              className="bg-gradient-to-r from-soft-blue to-sage-green text-white font-inter font-medium px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
