import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#3c3d42] text-white text-sm px-6 md:px-24 pt-20 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="font-extralight mb-10 md:mb-0"></div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 w-full text-white font-extralight">
          <ul className="space-y-2 col-span-2">
            <li>
              <Image src="/placeholder.svg?height=40&width=100" alt="Logo" width={100} height={40} className="h-10" />
            </li>
          </ul>
          <ul className="space-y-2 text-base">
            <li>How it works</li>
            <li>What's included</li>
            <li>FAQs</li>
            <li>About us</li>
            <li>Long Live Journal</li>
          </ul>
          <ul className="space-y-2 text-base">
            <li>Testimonials</li>
            <li>Share your story</li>
            <li>List of tests</li>
            <li>Help</li>
            <li>Pricing</li>
          </ul>
          <ul className="space-y-2 text-base">
            <li>Gift Axo Longevity</li>
            <li>For Employers</li>
            <li>For Practitioners</li>
            <li>For Creators</li>
          </ul>
          <ul className="space-y-2 text-base">
            <li>Member login</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Partnerships</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white border-[1.5px] my-10"></div>

      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/80">
        <div className="flex gap-4 text-white text-lg mb-6 md:mb-0">
          <span>📘</span>
          <span>📷</span>
          <span>❌</span>
          <span>🔗</span>
          <span>▶️</span>
        </div>
        <p>© 2025 Axo Longevity Health. All rights reserved. 100 Healthy Years.</p>
      </div>

      <div className="flex flex-wrap justify-end gap-6 text-xs text-white/80 mt-6 underline">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Refund Policy</a>
        <a href="#">Consumer Health Data Privacy Policy</a>
        <a href="#">Do Not Sell or Share My Personal Data</a>
      </div>

      <div className="mt-10 text-[10px] text-white/50 leading-5 space-y-4">
        <p>
          * AXO LONGEVITY'S $499 MEMBERSHIP INCLUDES FULLY PREPAID ACCESS TO 100+ LAB TESTS, WITH A LEADING NATIONWIDE
          PROVIDER, IN ALL STATES EXCEPT NEW YORK AND NEW JERSEY.
        </p>
        <p>LONG LIVE HUMANS.</p>
      </div>
    </footer>
  )
}
