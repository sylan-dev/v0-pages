"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Clock, Target, TrendingUp, MessageCircle } from "lucide-react"
import { trackButtonClick, trackConversion } from "@/lib/gtm"
import { useGTMTracking } from "@/hooks/use-gtm-tracking"

export default function SalesPage() {
  useGTMTracking()

  const handleCTAClick = (buttonText: string, location: string) => {
    trackButtonClick(buttonText, location)
    trackConversion("cta_click")
    // Aqui você pode adicionar a lógica de redirecionamento ou abertura de modal
    console.log("CTA clicked:", buttonText, "at", location)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-xl">ContentDoc</span>
          </div>
          <Button variant="outline" size="sm" onClick={() => trackButtonClick("Login", "Header")}>
            Fazer Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20"
        data-section="hero"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 hover:bg-blue-700">Comunidade Exclusiva para Médicos</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Médico: Cansado de Lutar por Pacientes e Tempo?{" "}
              <span className="text-blue-400">Transforme Seu Consultório</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Descubra a Comunidade ContentDoc: O Hub Estratégico e Colaborativo para Médicos que Buscam Gestão
              Inteligente, Previsibilidade de Pacientes e Remuneração Justa, Sem Abrir Mão da Qualidade de Vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                onClick={() => handleCTAClick("Transformar Consultório", "Hero Principal")}
              >
                SIM! QUERO TRANSFORMAR MEU CONSULTÓRIO
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                onClick={() => trackButtonClick("Saiba Mais", "Hero Secundário")}
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-gray-50" data-section="pain-points">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Você se Identifica com Algum Destes Desafios?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Sente que seu consultório não cresce como você gostaria, apesar de todo o seu esforço e dedicação?",
                "Está sobrecarregado(a) com a rotina, sem tempo para o marketing ou para a sua vida pessoal?",
                "Não sabe como atrair pacientes qualificados que valorizem seu trabalho e paguem o preço justo?",
                "Sente-se isolado(a) na gestão do seu negócio, sem um grupo de apoio para trocar experiências?",
                "Acha que marketing digital é complicado ou 'não é para médicos'?",
                "Gostaria de ter mais previsibilidade financeira, mas não sabe por onde começar?",
              ].map((pain, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-red-500">
                  <CardContent className="p-0">
                    <p className="text-gray-700">{pain}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Se você respondeu <strong>"SIM"</strong> a qualquer uma dessas perguntas, você não está sozinho(a).
                Milhares de médicos enfrentam esses mesmos desafios diariamente. A medicina evoluiu, mas a forma de
                gerir um consultório particular muitas vezes não acompanhou.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Bridge */}
      <section className="py-16 bg-blue-600 text-white" data-section="solution">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Chega de Lutar Sozinho(a)!</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Imagine ter acesso a estratégias comprovadas, ferramentas práticas e o apoio de uma comunidade de colegas
            que enfrentam os mesmos desafios e estão comprometidos com o sucesso.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16" data-section="benefits">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              O Que Você Vai Conquistar ao Fazer Parte da Comunidade ContentDoc
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8 text-blue-600" />,
                  title: "Clareza e Direção",
                  description:
                    "Entenda de uma vez por todas como aplicar o marketing e a gestão estratégica no seu consultório.",
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-600" />,
                  title: "Previsibilidade de Pacientes",
                  description: "Aprenda a atrair pacientes qualificados de forma consistente, enchendo sua agenda.",
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
                  title: "Remuneração Justa",
                  description: "Descubra como posicionar seu serviço para cobrar o preço que você merece.",
                },
                {
                  icon: <Clock className="w-8 h-8 text-blue-600" />,
                  title: "Mais Tempo e Qualidade de Vida",
                  description: "Otimize seus processos e delegue o que for preciso para ter mais liberdade.",
                },
                {
                  icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
                  title: "Networking de Valor",
                  description: "Conecte-se com uma rede exclusiva de médicos empreendedores.",
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
                  title: "Suporte Contínuo",
                  description: "Tenha acesso direto a especialistas para tirar suas dúvidas em tempo real.",
                },
              ].map((benefit, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="mb-4 flex justify-center">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50" data-section="features">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Dentro da Comunidade ContentDoc, Você Terá Acesso a:
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Mini-Cursos Práticos e Diretos ao Ponto",
                  description:
                    "Aulas focadas em marketing digital, gestão de consultório, finanças e posicionamento médico, para você aplicar imediatamente.",
                },
                {
                  title: "Templates Exclusivos e Ferramentas",
                  description:
                    "Materiais prontos para usar, como checklists, planilhas e modelos para otimizar seu dia a dia e avaliar oportunidades.",
                },
                {
                  title: "Encontros Quinzenais AO VIVO",
                  description:
                    "Hotseats: Tenha seu caso analisado e receba um plano de ação personalizado. Q&A: Tire todas as suas dúvidas em tempo real. Aulas Temáticas: Aprofunde-se em temas cruciais.",
                },
                {
                  title: "Grupo Exclusivo de Interação no WhatsApp",
                  description:
                    "Um ambiente seguro e ativo para networking, troca de experiências e suporte mútuo com outros médicos.",
                },
                {
                  title: "Curadoria de Conteúdo",
                  description:
                    "Receba as melhores referências e insights do mercado, sem precisar perder tempo pesquisando.",
                },
              ].map((feature, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0 flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-16" data-section="authority">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quem Está Por Trás da Comunidade ContentDoc?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos a ContentDoc, uma equipe de especialistas com anos de experiência em ajudar profissionais da saúde a
              transformarem seus consultórios em negócios prósperos e sustentáveis. Nossa metodologia é baseada em
              resultados e na realidade do médico brasileiro. Estamos aqui para te guiar nessa jornada.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white" data-section="pricing">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-500 text-yellow-900">Oferta de Lançamento - Limitada!</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sua Oportunidade Única de Fazer Parte da Maior Comunidade de Médicos do Brasil!
            </h2>
            <p className="text-xl mb-8">
              Para celebrar o lançamento da Comunidade ContentDoc, estamos abrindo as portas para os primeiros 100
              membros por um valor simbólico e exclusivo:
            </p>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
              <div className="text-6xl font-bold mb-4">R$ 9,90</div>
              <div className="text-2xl mb-4">/mês</div>
              <p className="text-lg opacity-90">
                Por menos de um café por dia, você terá acesso a um universo de conhecimento, estratégias e apoio que
                podem transformar a realidade do seu consultório e da sua vida.
              </p>
            </div>

            <div className="bg-red-500/20 border border-red-400 rounded-lg p-4 mb-8">
              <p className="text-lg font-semibold">
                ⚠️ Essa oferta é LIMITADA aos primeiros 100 inscritos. Após atingirmos essa marca, o valor da mensalidade
                será ajustado.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 text-xl px-12 py-6 font-bold"
              onClick={() => handleCTAClick("Garantir Vaga R$ 9,90", "Pricing Principal")}
            >
              SIM! QUERO TRANSFORMAR MEU CONSULTÓRIO E FAZER PARTE DA COMUNIDADE CONTENTDOC!
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" data-section="faq">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
            <div className="space-y-6">
              {[
                {
                  question: "Para quem é a Comunidade ContentDoc?",
                  answer:
                    "Para médicos que atendem ou desejam atender em consultório particular e buscam estratégias de gestão, marketing e previsibilidade de pacientes, sem abrir mão da qualidade de vida.",
                },
                {
                  question: "Como funciona a assinatura?",
                  answer:
                    "A assinatura é mensal e recorrente. Você pode cancelar a qualquer momento, sem buros e sem fidelidade.",
                },
                {
                  question: "Qual a diferença entre a Comunidade e a Mentoria M11?",
                  answer:
                    "A Comunidade ContentDoc é a base, com conteúdo prático e suporte em grupo. A Mentoria M11 é um programa de acompanhamento individualizado e aprofundado para resultados ainda mais acelerados e personalizados.",
                },
                {
                  question: "Preciso ter conhecimento prévio em marketing?",
                  answer:
                    "Não! A comunidade é perfeita para iniciantes e para quem já tem alguma experiência e quer aprimorar. Nosso conteúdo é prático e didático.",
                },
                {
                  question: "Como são os encontros quinzenais?",
                  answer:
                    "São ao vivo, via plataforma de videoconferência, com aulas, sessões de hotseat (análise de casos de membros) e perguntas e respostas. As gravações ficam disponíveis na área de membros.",
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-slate-900 text-white" data-section="final-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Não Perca Tempo! Garante Sua Vaga Agora</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Comece a construir o consultório que você sempre sonhou. Junte-se aos primeiros 100 membros da Comunidade
            ContentDoc.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-xl px-12 py-6 font-bold"
            onClick={() => handleCTAClick("Garantir Vaga Final", "CTA Final")}
          >
            GARANTIR MINHA VAGA POR R$ 9,90/MÊS
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-xl">ContentDoc</span>
            </div>
            <div className="text-sm text-gray-400">ContentDoc - Transformando Consultórios em Negócios de Sucesso</div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-800 text-center text-sm text-gray-400">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="hover:text-white">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
