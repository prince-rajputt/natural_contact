import type { ChangeEvent, FormEvent, SVGProps } from 'react'
import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { FloatingIconsHero } from '@/components/ui/floating-icons-hero-section'

import './App.css'
import logo from './assets/natural-logo1.png'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    visitDate: '',
    remarks: '',
  })

  const backgroundIcons = useMemo(
    () => [
      { id: 1, icon: LeafIcon, className: 'icon-pos-1' },
      { id: 2, icon: SparkIcon, className: 'icon-pos-2' },
      { id: 3, icon: HouseIcon, className: 'icon-pos-3' },
      { id: 4, icon: SunIcon, className: 'icon-pos-4' },
      { id: 5, icon: WaveIcon, className: 'icon-pos-5' },
      { id: 6, icon: FlowerIcon, className: 'icon-pos-6' },
      { id: 7, icon: LeafIcon, className: 'icon-pos-7' },
      { id: 8, icon: SparkIcon, className: 'icon-pos-8' },
    ],
    [],
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setSubmitted(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="page-shell" data-theme={theme}>
      <FloatingIconsHero icons={backgroundIcons} className="contact-page">
        <section className="contact-layout glass-card">
          <div className="theme-switcher" aria-label="Theme switcher">
            <button
              type="button"
              className={`theme-switcher__button ${theme === 'light' ? 'is-active' : ''}`}
              onClick={() => setTheme('light')}
              aria-label="Use light theme"
              aria-pressed={theme === 'light'}
            >
              <SunModeIcon />
            </button>
            <button
              type="button"
              className={`theme-switcher__button ${theme === 'dark' ? 'is-active' : ''}`}
              onClick={() => setTheme('dark')}
              aria-label="Use dark theme"
              aria-pressed={theme === 'dark'}
            >
              <MoonModeIcon />
            </button>
          </div>

          <div className="brand-panel">
            <div className="brand-panel__glow" />
            <div className="brand-panel__halo" />
            <div className="logo-stage">
              <div className="logo-stage__ring logo-stage__ring--one" />
              <div className="logo-stage__ring logo-stage__ring--two" />
              <div className="logo-stage__spark logo-stage__spark--one" />
              <div className="logo-stage__spark logo-stage__spark--two" />
              <div className="logo-stage__panel">
                <img
                  src={logo}
                  alt="Natural Contact company logo"
                  className="brand-panel__logo"
                />
              </div>
            </div>
          </div>

          <section className="form-panel">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="field">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </label>

              <label className="field">
                <span>Email ID</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                />
              </label>

              <label className="field">
                <span>Mobile No</span>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  required
                />
              </label>

              <label className="field">
                <span>Date of Visit</span>
                <input
                  type="date"
                  name="visitDate"
                  value={formData.visitDate}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="field field--full">
                <span>Remarks</span>
                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement, location, or preferred time slot."
                  rows={5}
                />
              </label>

              <div className="form-actions">
                <Button type="submit" className="submit-button">
                  Submit Request
                </Button>
              </div>

              {submitted ? (
                <div className="success-banner" role="status">
                  Thank you. Your visit request has been captured successfully.
                </div>
              ) : null}
            </form>
          </section>
        </section>
      </FloatingIconsHero>
    </main>
  )
}

export default App

function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M39 9C22 10 10 21 10 34c0 3 1 5.5 3 8 14 0 27-10 27-25 0-3-.5-5.5-1-8Z"
        fill="currentColor"
      />
      <path
        d="M14 34c8-8 14-12 21-17"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="m24 5 4.2 11.8L40 21l-11.8 4.2L24 37l-4.2-11.8L8 21l11.8-4.2L24 5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function HouseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M9 23.5 24 10l15 13.5V39H9V23.5Z" fill="currentColor" />
      <path d="M20 39V27h8v12" stroke="white" strokeWidth="2.5" />
    </svg>
  )
}

function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="9" fill="currentColor" />
      <path
        d="M24 6v6M24 36v6M6 24h6M36 24h6M11.3 11.3l4.2 4.2M32.5 32.5l4.2 4.2M36.7 11.3l-4.2 4.2M15.5 32.5l-4.2 4.2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function WaveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 26c6-6 12-6 19 0s13 6 19 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M5 33c6-6 12-6 19 0s13 6 19 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".55"
      />
    </svg>
  )
}

function FlowerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <circle cx="24" cy="14" r="6" fill="currentColor" opacity=".9" />
      <circle cx="34" cy="24" r="6" fill="currentColor" opacity=".8" />
      <circle cx="24" cy="34" r="6" fill="currentColor" opacity=".7" />
      <circle cx="14" cy="24" r="6" fill="currentColor" opacity=".85" />
    </svg>
  )
}

function SunModeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4.25" fill="currentColor" />
      <path
        d="M12 2.5v2.25M12 19.25v2.25M21.5 12h-2.25M4.75 12H2.5M18.72 5.28l-1.59 1.59M6.87 17.13l-1.59 1.59M18.72 18.72l-1.59-1.59M6.87 6.87 5.28 5.28"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonModeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18.5 14.6A7.7 7.7 0 0 1 9.4 5.5a8.5 8.5 0 1 0 9.1 9.1Z"
        fill="currentColor"
      />
    </svg>
  )
}
