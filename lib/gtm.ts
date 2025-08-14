declare global {
  interface Window {
    dataLayer: any[]
  }
}

// Função para enviar eventos para o GTM
export const gtmEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    })
  }
}

// Eventos específicos para conversão
export const trackButtonClick = (buttonName: string, location: string) => {
  gtmEvent("button_click", {
    button_name: buttonName,
    button_location: location,
    event_category: "engagement",
    event_label: `${buttonName} - ${location}`,
  })
}

export const trackFormSubmission = (formName: string) => {
  gtmEvent("form_submit", {
    form_name: formName,
    event_category: "conversion",
    event_label: formName,
  })
}

export const trackPageScroll = (scrollPercentage: number) => {
  gtmEvent("scroll", {
    scroll_percentage: scrollPercentage,
    event_category: "engagement",
    event_label: `${scrollPercentage}% scroll`,
  })
}

export const trackSectionView = (sectionName: string) => {
  gtmEvent("section_view", {
    section_name: sectionName,
    event_category: "engagement",
    event_label: `Viewed ${sectionName}`,
  })
}

export const trackConversion = (conversionType: string, value?: number) => {
  gtmEvent("conversion", {
    conversion_type: conversionType,
    conversion_value: value || 9.9,
    currency: "BRL",
    event_category: "conversion",
    event_label: conversionType,
  })
}
