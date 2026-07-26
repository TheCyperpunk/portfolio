"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check, Mail, AlertCircle } from "lucide-react"
import { SectionWrapper, SectionHeader } from "@/components/sections/section-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { personalInfo, footerSocialLinks } from "@/data/portfolio"
import { socialIconMap } from "@/components/icons/social-icons"

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validateForm(data: { name: string; email: string; message: string }): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) {
    errors.name = "Name is required"
  }
  if (!data.email.trim()) {
    errors.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email"
  }
  if (!data.message.trim()) {
    errors.message = "Message is required"
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters"
  }
  return errors
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validation = validateForm(formData)
    setErrors(validation)

    if (Object.keys(validation).length > 0) return

    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name.trim()}`)
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\n${formData.message.trim()}`
    )
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <SectionHeader subText="Get In Touch" title="Contact" highlight="Me" />

        <div className="grid gap-12 lg:grid-cols-5 max-w-5xl mx-auto">
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neon-red/10 text-neon-red">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-sm text-text-ghost">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-white hover:text-neon-red transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm text-text-ghost mb-3">Connect</p>
              <div className="flex gap-3 flex-wrap">
                {footerSocialLinks
                  .filter((l) => l.label !== "Email")
                  .map(({ href, label, icon }) => {
                    const Icon = socialIconMap[icon]
                    return (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={label}
                        className="w-11 h-11 flex items-center justify-center rounded-lg border border-wire text-text-ghost hover:text-neon-red hover:border-neon-red/40 transition-all duration-200"
                        aria-label={label}
                        style={{ background: "#0A0A0A" }}
                      >
                        {Icon && <Icon className="h-8 w-8 rounded-md overflow-hidden" />}
                      </a>
                    )
                  })}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-xl border border-wire bg-bg-surface p-6 sm:p-8"
            >
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neon-red/20 text-neon-red">
                    <Check size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Email draft opened
                  </h3>
                  <p className="text-sm text-text-ghost text-center">
                    Your email app should now contain the message. You can review it before sending.
                  </p>
                  <Button type="button" variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
                    Write another message
                  </Button>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-text-ghost">Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className="bg-bg-elevated border-wire text-white placeholder:text-text-ghost focus:border-neon-red focus:ring-neon-red/20"
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="flex items-center gap-1 text-xs text-red-400 mt-1">
                          <AlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-text-ghost">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className="bg-bg-elevated border-wire text-white placeholder:text-text-ghost focus:border-neon-red focus:ring-neon-red/20"
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="flex items-center gap-1 text-xs text-red-400 mt-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-text-ghost">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className="bg-bg-elevated border-wire text-white placeholder:text-text-ghost focus:border-neon-red focus:ring-neon-red/20"
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="flex items-center gap-1 text-xs text-red-400 mt-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base bg-neon-red hover:bg-neon-dark text-white"
                    style={{ boxShadow: "0 0 20px rgba(168,85,247,0.35)" }}
                  >
                    <Send size={16} />
                    Open email draft
                  </Button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
