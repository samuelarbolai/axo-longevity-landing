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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black border border-electric-blue/30 rounded-3xl p-8 max-w-lg w-full relative performance-glow">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl transition-colors"
          onClick={onClose}
        >
          ×
        </button>

        {!success ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-inter font-black mb-4">
                <span className="text-white">JOIN THE</span>
                <br />
                <span className="gradient-text">ELITE</span>
              </h2>
              <p className="text-gray-300 font-source">
                Take your performance to the next level with elite biomarker analysis.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-electric-blue focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address*"
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-electric-blue focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:outline-none transition-colors"
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
                  <option value="mma">MMA/Combat Sports</option>
                  <option value="other">Other</option>
                </select>

                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:outline-none transition-colors"
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
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:outline-none transition-colors"
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
                  className="w-24 bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-3 text-white focus:border-electric-blue focus:outline-none transition-colors"
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
                  className="flex-1 bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-electric-blue focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-electric-blue to-neon-green text-black font-inter font-bold py-4 rounded-lg hover:scale-105 transition-all duration-300 performance-glow"
              >
                UNLOCK YOUR POTENTIAL
              </button>

              {errorMsg && <p className="text-red-400 text-sm text-center">{errorMsg}</p>}
            </form>

            <p className="text-xs text-center text-gray-500 mt-6">
              By signing up, you're joining elite athletes worldwide.
              <br />
              <a href="#" className="text-electric-blue hover:underline">
                Privacy Policy
              </a>{" "}
              •
              <a href="#" className="text-electric-blue hover:underline">
                {" "}
                Terms of Service
              </a>
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-6xl mb-6">🏆</div>
            <h2 className="text-3xl font-inter font-black gradient-text mb-4">WELCOME TO THE ELITE</h2>
            <p className="text-gray-300 font-source mb-2">
              You've successfully joined the waitlist for elite performance analysis.
            </p>
            <p className="text-gray-400 font-source text-sm">
              Our performance team will contact you within 24 hours to discuss your athletic goals.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
