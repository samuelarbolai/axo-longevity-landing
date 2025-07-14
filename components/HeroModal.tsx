"use client"
import { useState } from "react"

// Country dial codes with flags
const countryDialData = {
  DK: { code: "+45", flag: "🇩🇰" },
  FR: { code: "+33", flag: "🇫🇷" },
  DE: { code: "+49", flag: "🇩🇪" },
  IT: { code: "+39", flag: "🇮🇹" },
  NL: { code: "+31", flag: "🇳🇱" },
  NO: { code: "+47", flag: "🇳🇴" },
  ES: { code: "+34", flag: "🇪🇸" },
  SE: { code: "+46", flag: "🇸🇪" },
  CH: { code: "+41", flag: "🇨🇭" },
  GB: { code: "+44", flag: "🇬🇧" },
}

function HeroModal({ isOpen, onClose }) {
  const [country, setCountry] = useState("")
  const [countryCode, setCountryCode] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [formData, setFormData] = useState({ firstName: "", email: "", phone: "" })
  const [success, setSuccess] = useState(false)

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value
    setCountry(selectedCountry)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const isFormValid = () => {
    const { firstName, email, phone } = formData
    if (!firstName.trim() || !email.trim() || !phone.trim() || !country.trim()) {
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { firstName, email, phone } = formData
    if (!firstName || !email || !phone || !countryCode || !country) {
      setErrorMsg("Please fill out all required fields.")
      return
    }
    if (!isFormValid()) {
      setErrorMsg("Please fill out all required fields correctly.")
      return
    }

    // Simulate form submission
    console.log("Form submission:", {
      name: formData.firstName,
      email: formData.email,
      phone: `${countryCode}${formData.phone}`,
      country,
    })

    setSuccess(true)
    setFormData({ firstName: "", email: "", phone: "" })
    setCountry("")
    setCountryCode("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 z-50">
      <div className="bg-white rounded-3xl py-20 px-20 max-w-lg w-full shadow-lg relative z-50">
        <button className="absolute top-4 right-4 text-3xl text-black hover:opacity-70" onClick={onClose}>
          &times;
        </button>
        {!success && (
          <>
            <h2 className="text-5xl font-semibold text-center mb-7 z-50 text-black">Join Axo Longevity</h2>
            <p className="text-center text-gray-600 mb-6 text-md">It's time to take control of your health.</p>
          </>
        )}
        {success ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black mb-2">Success</h2>
            <p className="text-gray-600">You have successfully joined the waitlist.</p>
            <p className="text-gray-600">We'll let you know of any updates by email.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm placeholder:font-extralight placeholder-gray-400 z-50 text-black"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address*"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm placeholder:font-extralight placeholder-gray-400 z-50 text-black"
            />
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm text-gray-400 placeholder:font-extralight font-extralight bg-white appearance-none z-50 text-black"
                value={country}
                onChange={handleCountryChange}
              >
                <option value="" disabled hidden>
                  Country*
                </option>
                <option>Denmark</option>
                <option>France</option>
                <option>Germany</option>
                <option>Italy</option>
                <option>Netherlands</option>
                <option>Norway</option>
                <option>Spain</option>
                <option>Sweden</option>
                <option>Switzerland</option>
                <option>United Kingdom</option>
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                ▼
              </div>
            </div>
            <div className="flex space-x-2 w-full">
              <div className="relative">
                <select
                  className="w-24 border border-gray-300 rounded-lg px-4 py-3 shadow-sm text-gray-400 placeholder:font-extralight font-extralight bg-white appearance-none z-50 text-black"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="" disabled hidden>
                    +XX
                  </option>
                  {Object.values(countryDialData).map(({ code, flag }) => (
                    <option key={code} value={code}>
                      {flag} {code}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                  ▼
                </div>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                className="flex-1 w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm placeholder:font-extralight placeholder-gray-400 z-50 text-black"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#B8775D] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Join Waitlist
            </button>
            {errorMsg && <p className="text-red-500 text-sm text-center mt-2">{errorMsg}</p>}
          </form>
        )}
        {!success && (
          <p className="text-xs text-center text-gray-600 mt-4">
            By signing up, you're agreeing to our{" "}
            <a href="#" className="underline">
              terms
            </a>
            .
          </p>
        )}
      </div>
    </div>
  )
}

export default HeroModal
