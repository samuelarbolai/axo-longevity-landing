"use client"
import { useLanguage } from "../context/LanguageContext"
import translations from "../i18n"

const JoinWaitlistButton = ({
  onClick,
  fullWidth = false,
  bold = true,
  textSize = "text-xl",
  bgColor = "bg-[#B8775D]",
  textColor = "text-white",
}) => {
  const commonStyles = `${bgColor} ${textColor} rounded-md ${bold ? "font-bold" : "font-normal"} ${textSize}`
  const sizeStyles = fullWidth ? "px-6 py-2 w-full text-center" : "px-4 py-2"

  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <button onClick={onClick} className={`${commonStyles} ${sizeStyles}`}>
      {t.join}
    </button>
  )
}

export default JoinWaitlistButton
