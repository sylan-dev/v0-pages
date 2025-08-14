"use client"

import { useEffect } from "react"
import { trackPageScroll, trackSectionView } from "@/lib/gtm"

export const useGTMTracking = () => {
  useEffect(() => {
    // Track scroll percentage
    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100)

        // Track milestone scrolls
        if (scrollPercentage === 25 || scrollPercentage === 50 || scrollPercentage === 75 || scrollPercentage === 100) {
          trackPageScroll(scrollPercentage)
        }
      }, 100)
    }

    // Track section views with Intersection Observer
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute("data-section") || "unknown"
          trackSectionView(sectionName)
        }
      })
    }, observerOptions)

    // Observe sections
    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => observer.observe(section))

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
      clearTimeout(scrollTimeout)
    }
  }, [])
}
