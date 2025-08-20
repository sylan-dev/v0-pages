"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Wrench, Calendar, Zap, Shield } from "lucide-react"

// GTM Event tracking functions
const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", eventName, {
      event_category: "engagement",
      event_label: "user_interaction",
      ...parameters,
    })
  }
}

const trackConversion = (conversionType: string, value?: number) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", "conversion", {
      send_to: "AW-CONVERSION_ID/CONVERSION_LABEL", // Replace with your conversion ID
      event_category: "conversion",
      event_label: conversionType,
      value: value || 0,
      currency: "BRL",
    })
  }
}

export default function LavaSecaOnline() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    servico: "",
    observacoes: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    trackEvent("form_interaction", { field, action: "input" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackConversion("lead_form_submission", 100)
    trackEvent("form_submit", {
      form_type: "agendar_visita",
      service: formData.servico,
    })

    // Criar mensagem para WhatsApp
    const message = `Olá! Gostaria de agendar uma visita técnica:
    
*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
*Equipamento:* ${formData.servico}
*Problema:* ${formData.observacoes}`

    const whatsappUrl = `https://wa.me/5511966424414?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleWhatsAppClick = (preMessage?: string) => {
    trackConversion("whatsapp_contact", 50)
    trackEvent("contact_click", { method: "whatsapp" })
    const defaultMessage = preMessage || "Olá! Gostaria de solicitar um orçamento para assistência técnica."
    const whatsappUrl = `https://wa.me/5511966424414?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const handlePhoneClick = () => {
    trackEvent("contact_click", { method: "phone" })
    window.open("tel:+5511966424414", "_blank")
  }

  const handleServiceClick = (service: string) => {
    trackEvent("service_interest", { service_name: service })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-blue-600">Lava&Seca</span>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">Online</span>
            </div>
            <nav className="hidden lg:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </a>
            </nav>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden sm:flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-1" />
                <span className="hidden md:inline">(11) 96642-4414</span>
                <span className="md:hidden">96642-4414</span>
              </div>
              <Button
                onClick={() => handleWhatsAppClick("Olá! Vi o site e gostaria de solicitar um orçamento.")}
                className="bg-green-600 hover:bg-green-700 text-white cursor-pointer text-sm px-3 py-2"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm">5 anos no mercado</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Assistência Técnica
                <br />
                <span className="text-yellow-400">Lava e Seca</span>
              </h1>

              <p className="text-lg sm:text-xl mb-8 text-blue-100">
                Conserto de Máquinas de Lavar, Lava e Seca e Secadoras em Osasco e São Paulo. Orçamento transparente e
                serviço de qualidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    trackEvent("cta_click", { button: "orcamento_gratis" })
                    document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Orçamento Grátis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent cursor-pointer"
                  onClick={() => handleWhatsAppClick("Olá! Gostaria de solicitar um orçamento grátis.")}
                >
                  WhatsApp
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div className="flex flex-col items-center">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mb-2" />
                  <span className="text-sm">Visita no Local</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mb-2" />
                  <span className="text-sm">Orçamento Transparente</span>
                </div>
                <div className="flex flex-col items-center">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mb-2" />
                  <span className="text-sm">Garantia nos Serviços</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="order-1 lg:order-2 bg-blue-600/80 backdrop-blur-md rounded-lg p-6 sm:p-8 shadow-xl border border-blue-400/30">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Agendar Visita Técnica</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                  className="w-full bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900"
                  required
                />
                <Input
                  placeholder="Seu telefone"
                  value={formData.telefone}
                  onChange={(e) => handleInputChange("telefone", e.target.value)}
                  className="w-full bg-white/90 border-white/20 placeholder:text-gray-500 text-gray-900"
                  required
                />
                <select
                  className="w-full p-3 border border-white/20 rounded-md focus:ring-2 focus:ring-white/50 focus:border-transparent cursor-pointer bg-white/90 text-gray-900"
                  value={formData.servico}
                  onChange={(e) => handleInputChange("servico", e.target.value)}
                  required
                >
                  <option value="">Selecione o equipamento</option>
                  <option value="maquina-lavar">Máquina de Lavar</option>
                  <option value="lava-seca">Lava e Seca</option>
                  <option value="secadora">Secadora</option>
                  <option value="microondas">Microondas</option>
                </select>
                <textarea
                  placeholder="Qual o problema? (ex: não liga, faz barulho)"
                  value={formData.observacoes}
                  onChange={(e) => handleInputChange("observacoes", e.target.value)}
                  className="w-full p-3 border border-white/20 rounded-md focus:ring-2 focus:ring-white/50 focus:border-transparent h-24 resize-none bg-white/90 placeholder:text-gray-500 text-gray-900"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 cursor-pointer"
                >
                  📱 Agendar via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-blue-600">Serviços</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Prestamos serviços de instalação, manutenção, reparo de peças eletrônicas e peças.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Conserto de Máquina de Lavar",
                description: "Reparo completo em máquinas de lavar de todas as marcas",
                features: ["Não liga de todas as marcas", "Samsung", "Electrolux", "Brastemp", "Todas as marcas"],
                icon: <Wrench className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />,
                message: "Olá! Preciso de conserto para máquina de lavar. Gostaria de agendar uma visita técnica.",
              },
              {
                title: "Conserto de Lava e Seca",
                description: "Assistência técnica especializada para equipamentos lava e seca",
                features: ["Troca de peças", "Manutenção preventiva", "Instalação", "Garantia"],
                icon: <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />,
                message: "Olá! Meu lava e seca está com problema. Preciso de assistência técnica.",
              },
              {
                title: "Conserto de Secadora",
                description: "Manutenção técnica completa para secadoras de roupas",
                features: ["Diagnóstico rápido", "Peças originais", "Garantia no serviço", "Atendimento domiciliar"],
                icon: <Calendar className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />,
                message: "Olá! Minha secadora não está funcionando bem. Gostaria de solicitar um orçamento.",
              },
              {
                title: "Manutenção de Microondas",
                description: "Assistência técnica especializada para microondas de todas as marcas",
                features: ["Reparo de magnetron", "Troca de componentes", "Conserto de display", "Limpeza interna"],
                icon: <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />,
                message: "Olá! Preciso de assistência técnica para microondas. Pode me ajudar?",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleServiceClick(service.title)}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{service.description}</p>
                  <ul className="space-y-2 text-sm text-gray-500 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-4 w-full bg-transparent cursor-pointer"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation()
                      trackEvent("service_quote_request", { service: service.title })
                      handleWhatsAppClick(service.message)
                    }}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Marcas que Atendemos
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-8 items-center justify-items-center">
            {["LG", "Samsung", "Electrolux", "Brastemp", "Consul", "Whirlpool"].map((brand) => (
              <div key={brand} className="bg-gray-100 rounded-lg p-4 sm:p-6 w-full text-center">
                <span className="text-lg sm:text-2xl font-bold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Como funciona o processo</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "1",
                title: "Agende Online Grátis",
                description: "Entre em contato e agende uma visita técnica gratuita no seu domicílio",
                icon: <Calendar className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />,
              },
              {
                step: "2",
                title: "Diagnóstico em Instantes",
                description: "Diagnóstico técnico em poucos minutos para identificar o problema",
                icon: <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />,
              },
              {
                step: "3",
                title: "Conserto Rápido e Eficiente",
                description: "Reparo no momento ou agendamento para troca de peças com maior prazo",
                icon: <Wrench className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />,
              },
              {
                step: "4",
                title: "Sua Máquina Feita Nova",
                description: "Após o serviço sua máquina estará funcionando perfeitamente com garantia",
                icon: <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg mb-4">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
              onClick={() => {
                trackEvent("cta_click", { button: "agendar_visita_processo" })
                handleWhatsAppClick("Olá! Vi o processo de vocês e gostaria de agendar uma visita técnica.")
              }}
            >
              Agendar Visita Técnica
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-blue-600">Trabalhos</span>
            </h2>
            <p className="text-xl text-gray-600">Confira alguns dos nossos serviços realizados em Osasco e região</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Conserto Máquina Brastemp",
                description: "Reparo completo realizado em Osasco",
                image: "/technician-repairing-washing-machine.png",
              },
              {
                title: "Troca de Peça Eletrônica",
                description: "Manutenção preventiva Samsung",
                image: "/tecnico-trocando-peca-eletronica-samsung.png",
              },
              {
                title: "Instalação Secadora",
                description: "Instalação completa Electrolux",
                image: "/tecnico-instalando-secadora.png",
              },
            ].map((work, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img src={work.image || "/placeholder.svg"} alt={work.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{work.title}</h3>
                  <p className="text-gray-600">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Reparos Microondas</h4>
              <p className="text-gray-600">Serviços de magnetron e display</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Manutenção Consul</h4>
              <p className="text-gray-600">Serviços de qualidade em Osasco</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Limpeza Interna</h4>
              <p className="text-gray-600">Higienização completa do equipamento</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Quer ver seu equipamento funcionando em Barueri?</p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
              onClick={() => {
                trackEvent("cta_click", { button: "conversar_whatsapp_portfolio" })
                handleWhatsAppClick()
              }}
            >
              Conversar Pelo WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Por que escolher a <span className="text-blue-600">Lava & Seca Online?</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                A Assistência Técnica Lava e Seca Online é uma Assistência Especializada. Oferecemos serviços de
                manutenção, higienização e instalação de equipamentos para sua casa ou nossos clientes.
              </p>
              <p className="text-gray-600 mb-6 sm:mb-8">
                Há mais de 5 anos no mercado, prezamos pela satisfação do nosso serviço de qualidade. Nosso atendimento
                é personalizado para ajudar a necessidade de cada um de nossos clientes.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Anos no Mercado</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">80%</div>
                  <div className="text-sm text-gray-600">Serviços no Local</div>
                </div>
              </div>

              <div className="space-y-4 mb-6 sm:mb-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Orçamento Transparente</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center text-green-700">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Valor da Peça
                      </div>
                      <div className="text-green-600">R$ 50,00</div>
                    </div>
                    <div>
                      <div className="flex items-center text-green-700">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Valor da Mão de Obra
                      </div>
                      <div className="text-green-600">R$ 80,00</div>
                    </div>
                  </div>
                  <div className="text-xs text-green-600 mt-2">Custo do serviço total: R$ 130,00. Peça Exemplo.</div>
                </div>

                <div className="flex items-center text-green-700">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  <span className="text-sm sm:text-base">Orçamento transparente e participativo</span>
                </div>
                <div className="flex items-center text-green-700">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  <span className="text-sm sm:text-base">Sempre explicar equipamento de R$ e garantia</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-blue-800 text-sm sm:text-base">Rápido</div>
                  <div className="text-xs sm:text-sm text-blue-600">Serviço</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-blue-800 text-sm sm:text-base">100%</div>
                  <div className="text-xs sm:text-sm text-blue-600">Garantia</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-lg">
              <div className="text-center mb-6">
                <Phone className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Traga Seu Orçamento</h3>
                <p className="text-blue-100 text-sm sm:text-base">
                  Contrate a assistência técnica em Osasco e São Paulo. Ligue agora e agende sua visita.
                </p>
              </div>
              <Button
                size="lg"
                className="w-full bg-white text-blue-600 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  trackConversion("phone_call_cta", 75)
                  trackEvent("cta_click", { button: "traga_orcamento" })
                  handlePhoneClick()
                }}
              >
                (11) 96642-4414
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <span className="text-xl sm:text-2xl font-bold text-blue-400">Lava&Seca</span>
                <span className="text-xl sm:text-2xl font-bold">Online</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Assistência técnica especializada em Osasco e São Paulo.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 cursor-pointer"
                  onClick={() =>
                    handleWhatsAppClick("Olá! Vi o site de vocês e gostaria de mais informações sobre os serviços.")
                  }
                >
                  WhatsApp
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>Máquinas de Lavar</li>
                <li>Lava e Seca</li>
                <li>Secadoras</li>
                <li>Microondas</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(11) 96642-4414</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Osasco e São Paulo</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Seg-Sáb: 8h às 18h</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Áreas de Atendimento</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Osasco</li>
                <li>São Paulo</li>
                <li>Barueri</li>
                <li>Carapicuíba</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Lava&Seca Online. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
