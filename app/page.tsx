"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Heart, Clock, Users, CheckCircle, ArrowRight, ChevronDown, Package } from "lucide-react"
import { useState } from "react"

export default function MagiaGrowLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState("/images/magia-grow-hero-new.png")

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50/30 to-rose-100/50 relative overflow-hidden">
        {/* Floating capsules background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-5 bg-rose-200/40 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-8 sm:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
            <div className="space-y-6 sm:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                <span className="mr-2">✨</span>
                <span className="hidden sm:inline">FÓRMULA EXCLUSIVA APROVADA PELA ANVISA</span>
                <span className="sm:hidden">APROVADO PELA ANVISA</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                  TRANSFORME SEU
                  <span className="block text-transparent bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text">
                    CABELO
                  </span>
                  EM 90 DIAS
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium max-w-2xl">
                  A fórmula mais poderosa do Brasil para <strong className="text-rose-700">combater a queda</strong> e
                  <strong className="text-rose-700"> recuperar o volume perdido</strong> de forma natural e eficaz.
                </p>
              </div>

              {/* Social Proof */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-xl sm:text-2xl">🔥</span>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    Mais de <strong className="text-rose-700">47.000 mulheres</strong> já recuperaram a autoestima
                  </p>
                </div>
              </div>

              {/* Price Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-200 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                  <div>
                    <div className="text-gray-500 line-through text-base sm:text-lg">De R$ 249,90</div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">R$ 139,90</div>
                    <div className="text-rose-600 font-bold text-base sm:text-lg">12x de R$ 11,66 sem juros</div>
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg sm:text-xl font-bold shadow-lg animate-pulse self-start sm:self-auto">
                    44% OFF
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 mb-6">
                  <p className="text-green-700 font-semibold text-center text-sm sm:text-base">
                    💳 PIX com 15% OFF: <span className="text-xl sm:text-2xl font-black">R$ 118,92</span>
                  </p>
                </div>

                <Button
                  size="lg"
                  onClick={() => document.getElementById("ofertas")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient-to-r from-rose-600 to-rose-800 hover:from-rose-700 hover:to-rose-900 text-white px-6 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-black w-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="hidden sm:inline">🚀 QUERO TRANSFORMAR MEU CABELO</span>
                  <span className="sm:hidden">🚀 TRANSFORMAR MEU CABELO</span>
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-green-50 p-3 sm:p-4 rounded-xl border border-green-200 text-center">
                  <div className="text-green-600 font-bold text-xs sm:text-sm mb-1">✓ FRETE GRÁTIS</div>
                  <div className="text-xs text-gray-600">Todo Brasil</div>
                </div>
                <div className="bg-blue-50 p-3 sm:p-4 rounded-xl border border-blue-200 text-center">
                  <div className="text-blue-600 font-bold text-xs sm:text-sm mb-1">✓ GARANTIA 30 DIAS</div>
                  <div className="text-xs text-gray-600">Satisfação total</div>
                </div>
                <div className="bg-purple-50 p-3 sm:p-4 rounded-xl border border-purple-200 text-center">
                  <div className="text-purple-600 font-bold text-xs sm:text-sm mb-1">✓ PAGAMENTO SEGURO</div>
                  <div className="text-xs text-gray-600">SSL Certificado</div>
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative flex justify-center order-first lg:order-last">
              <div className="relative">
                <img
                  src="/images/magia-grow-no-bg.png"
                  alt="Magia Grow - Suplemento Capilar"
                  className="w-full max-w-sm sm:max-w-lg drop-shadow-2xl"
                />
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-rose-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold animate-bounce">
                  <span className="hidden sm:inline">90 Cápsulas</span>
                  <span className="sm:hidden">90</span>
                </div>
                <div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-amber-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="hidden sm:inline">100% Natural</span>
                  <span className="sm:hidden">Natural</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-3 sm:py-4 bg-gradient-to-r from-rose-600 to-rose-700 text-white overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap">
            <div className="flex items-center gap-4 sm:gap-8 px-4 sm:px-8">
              <span className="text-sm sm:text-lg font-bold">PRODUTO VEGANO</span>
              <span className="text-amber-300">•</span>
              <span className="text-sm sm:text-lg font-bold">FERRO E VITAMINA B12</span>
              <span className="text-amber-300">•</span>
              <span className="text-sm sm:text-lg font-bold">MAIS VOLUME</span>
              <span className="text-amber-300">•</span>
              <span className="text-sm sm:text-lg font-bold">MENOS QUEDA</span>
              <span className="text-amber-300">•</span>
              <span className="text-sm sm:text-lg font-bold">PRODUTO VEGANO</span>
              <span className="text-amber-300">•</span>
              <span className="text-sm sm:text-lg font-bold">FERRO E VITAMINA B12</span>
              <span className="text-amber-300">•</span>
              <span className="text-sm sm:text-lg font-bold">MAIS VOLUME</span>
              <span className="text-amber-300">•</span>
              <span className="text-sm sm:text-lg font-bold">MENOS QUEDA</span>
              <span className="text-amber-300">•</span>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-rose-600 to-rose-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-amber-300 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">OFERTA RELÂMPAGO!</h2>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
            Apenas <span className="text-amber-300 font-bold text-xl sm:text-2xl md:text-3xl">23 unidades</span> restantes com 50% OFF
          </p>
          <div className="flex justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-center bg-white/20 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300">08</div>
              <div className="text-xs sm:text-sm font-medium">HORAS</div>
            </div>
            <div className="text-center bg-white/20 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300">47</div>
              <div className="text-xs sm:text-sm font-medium">MINUTOS</div>
            </div>
            <div className="text-center bg-white/20 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300">23</div>
              <div className="text-xs sm:text-sm font-medium">SEGUNDOS</div>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-6 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            <span className="hidden sm:inline">GARANTIR MEU DESCONTO AGORA</span>
            <span className="sm:hidden">GARANTIR DESCONTO</span>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Por Que Escolher <span className="text-rose-600">Magia Grow</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra os 5 pilares fundamentais que fazem do Magia Grow o suplemento capilar mais completo do mercado
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="text-center group">
              <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <img src="/images/benefit-hair.png" alt="Beleza Natural" className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Beleza Natural</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Fórmula 100% natural que nutre seus fios de dentro para fora, proporcionando brilho e vitalidade únicos.
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <img src="/images/benefit-health.png" alt="Saúde Completa" className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Saúde Completa</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Fortalece não apenas o cabelo, mas também pele e unhas, oferecendo uma beleza integral e duradoura.
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <img src="/images/benefit-quality.png" alt="Qualidade Garantida" className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Qualidade Garantida</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Produto certificado e testado, com garantia de satisfação total ou seu dinheiro de volta.
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <img src="/images/benefit-natural.png" alt="Ingredientes Naturais" className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">100% Natural</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Livre de químicos agressivos, nossa fórmula vegana respeita seu corpo e o meio ambiente.
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <img src="/images/benefit-science.png" alt="Base Científica" className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Base Científica</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Desenvolvido com base em pesquisas científicas avançadas para máxima eficácia e resultados comprovados.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => document.getElementById("ofertas")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span className="hidden sm:inline">EXPERIMENTAR MAGIA GROW AGORA</span>
              <span className="sm:hidden">EXPERIMENTAR AGORA</span>
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-20">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-rose-600 to-rose-700 text-white px-4 sm:px-6 py-2 text-xs sm:text-sm">
              RESULTADOS REAIS
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Transformações{" "}
              <span className="bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
                Impressionantes
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Veja os resultados reais de quem já experimentou o poder transformador do Magia Grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="relative group">
              <img
                src="/images/before-after-1.jpeg"
                alt="Antes e Depois - Transformação Capilar 1"
                className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-xl font-bold mb-2">Crescimento Capilar</h4>
                <p className="text-sm">Resultados em 90 dias de uso</p>
              </div>
            </div>

            <div className="relative group">
              <img
                src="/images/before-after-2.jpeg"
                alt="Antes e Depois - Transformação Capilar 2"
                className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-xl font-bold mb-2">Volume e Densidade</h4>
                <p className="text-sm">Transformação completa em 3 meses</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span className="hidden sm:inline">QUERO MINHA TRANSFORMAÇÃO TAMBÉM</span>
              <span className="sm:hidden">QUERO MINHA TRANSFORMAÇÃO</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Ingredients & Usage Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-10 left-10 w-4 h-8 bg-rose-400 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-20 right-20 w-3 h-6 bg-rose-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-40 left-1/4 w-5 h-10 bg-rose-300 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-60 right-1/3 w-4 h-8 bg-rose-600 rounded-full animate-bounce"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-3 h-6 bg-rose-400 rounded-full animate-bounce"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-5 h-10 bg-rose-500 rounded-full animate-bounce"
            style={{ animationDelay: "2.5s" }}
          ></div>
          <div
            className="absolute top-32 left-1/2 w-4 h-8 bg-rose-300 rounded-full animate-bounce"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute bottom-60 right-1/4 w-3 h-6 bg-rose-600 rounded-full animate-bounce"
            style={{ animationDelay: "3.5s" }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-start">
            {/* Ingredients Card */}
            <div>
              <Badge className="mb-4 sm:mb-6 bg-rose-100 text-rose-700 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold">
                COMPOSIÇÃO PREMIUM
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Ingredientes{" "}
                <span className="bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
                  Cientificamente Selecionados
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Cada cápsula contém uma combinação única de vitaminas, minerais e aminoácidos essenciais para a saúde
                capilar, da pele e das unhas.
              </p>

              <Card className="border-rose-200 bg-white shadow-xl">
                <CardContent className="p-4 sm:p-8">
                  <img
                    src="/images/ingredients-table.jpeg"
                    alt="Tabela Nutricional - Magia Grow"
                    className="w-full rounded-lg shadow-lg mb-4 sm:mb-6"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="bg-rose-50 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-bold text-rose-700 mb-1 sm:mb-2 text-sm sm:text-base">Vitaminas Essenciais</h4>
                      <p className="text-gray-600">B2, B6, B12, C, D para nutrição completa</p>
                    </div>
                    <div className="bg-amber-50 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-bold text-amber-700 mb-1 sm:mb-2 text-sm sm:text-base">Minerais Premium</h4>
                      <p className="text-gray-600">Ferro, Zinco, Cobre, Selênio para fortalecimento</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Usage Instructions */}
            <div>
              <Badge className="mb-4 sm:mb-6 bg-amber-100 text-amber-700 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold">MODO DE USO</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Como Usar Para{" "}
                <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                  Máximos Resultados
                </span>
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-rose-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-rose-600 font-bold text-sm sm:text-base">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Tome 3 cápsulas por dia</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Preferencialmente junto com as refeições principais</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-amber-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm sm:text-base">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Use por no mínimo 90 dias</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Para resultados visíveis e duradouros na beleza</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-green-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm sm:text-base">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Mantenha a regularidade</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Consistência é a chave para uma transformação completa</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl border border-rose-200">
                <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />
                  Quando Esperar Resultados
                </h4>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                  <p>
                    <strong>30 dias:</strong> Fortalecimento inicial dos fios
                  </p>
                  <p>
                    <strong>60 dias:</strong> Redução visível da queda
                  </p>
                  <p>
                    <strong>90 dias:</strong> Crescimento acelerado e brilho
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Background com pílulas animadas */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-rose-50">
          <div className="absolute inset-0">
            {/* Pílulas flutuantes */}
            <div
              className="absolute top-10 left-10 w-4 h-8 bg-rose-400 rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "3s" }}
            ></div>
            <div
              className="absolute top-32 right-20 w-3 h-6 bg-rose-500 rounded-full opacity-30 animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "4s" }}
            ></div>
            <div
              className="absolute bottom-40 left-32 w-5 h-10 bg-rose-300 rounded-full opacity-25 animate-bounce"
              style={{ animationDelay: "2s", animationDuration: "3.5s" }}
            ></div>
            <div
              className="absolute top-64 left-1/4 w-4 h-8 bg-rose-600 rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
            ></div>
            <div
              className="absolute bottom-20 right-1/3 w-3 h-6 bg-rose-400 rounded-full opacity-30 animate-bounce"
              style={{ animationDelay: "1.5s", animationDuration: "3s" }}
            ></div>
            <div
              className="absolute top-20 right-1/4 w-5 h-10 bg-rose-500 rounded-full opacity-25 animate-bounce"
              style={{ animationDelay: "2.5s", animationDuration: "4s" }}
            ></div>
            <div
              className="absolute bottom-60 left-1/2 w-4 h-8 bg-rose-300 rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "3s", animationDuration: "3.5s" }}
            ></div>
            <div
              className="absolute top-40 right-10 w-3 h-6 bg-rose-600 rounded-full opacity-30 animate-bounce"
              style={{ animationDelay: "0.8s", animationDuration: "4.2s" }}
            ></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div className="relative order-first lg:order-last">
              <img
                src="/images/magia-grow-single-no-bg.png"
                alt="Magia Grow - Detalhes do Produto"
                className="w-full max-w-sm sm:max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-rose-600 to-rose-700 text-white px-4 sm:px-6 py-2 text-xs sm:text-sm">
                COMPOSIÇÃO PREMIUM
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                90 Cápsulas de{" "}
                <span className="bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
                  Pura Transformação
                </span>
              </h2>
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Fortalece os fios desde a raiz</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Nutrição profunda que chega até o folículo capilar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Melhora a elasticidade da pele</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Colágeno natural para uma pele mais firme e jovem</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Acelera o crescimento das unhas</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Queratina e biotina para unhas mais fortes e saudáveis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Reduz a queda capilar em 85%</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Resultado comprovado em estudos clínicos</p>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                onClick={() => document.getElementById("ofertas")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="hidden sm:inline">EXPERIMENTAR AGORA</span>
                <span className="sm:hidden">EXPERIMENTAR</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 sm:mb-6 bg-rose-100 text-rose-700 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold">AVALIAÇÕES REAIS</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Mais de{" "}
              <span className="bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
                10.000 Clientes
              </span>{" "}
              Satisfeitas
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 sm:h-8 sm:w-8 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-3 sm:ml-4 text-xl sm:text-2xl font-bold text-gray-900">4.9/5</span>
            </div>
            <p className="text-lg sm:text-xl text-gray-600">Baseado em 2.847 avaliações verificadas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-rose-200 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-lg leading-relaxed">
                  "Incrível! Em apenas 2 meses meu cabelo ficou muito mais forte e brilhante. As pessoas notaram a
                  diferença e sempre perguntam o que estou usando. Recomendo demais!"
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center">
                    <span className="font-bold text-white text-sm sm:text-base">MC</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">Maria Clara Santos</div>
                    <div className="text-xs sm:text-sm text-gray-500">São Paulo, SP</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-rose-200 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-lg leading-relaxed">
                  "Minhas unhas sempre foram fracas e quebradiças, mas com Magia Grow elas ficaram fortes e crescem
                  muito mais rápido. Estou impressionada com os resultados!"
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="font-bold text-white text-sm sm:text-base">AS</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">Ana Silva Oliveira</div>
                    <div className="text-xs sm:text-sm text-gray-500">Rio de Janeiro, RJ</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-rose-200 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-lg leading-relaxed">
                  "Produto incrível! Minha pele ficou mais hidratada e luminosa, e o cabelo parou de cair. Já indiquei
                  para todas as minhas amigas. Vale cada centavo!"
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="font-bold text-white text-sm sm:text-base">JF</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">Juliana Ferreira</div>
                    <div className="text-xs sm:text-sm text-gray-500">Belo Horizonte, MG</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span className="hidden sm:inline">JUNTAR-SE ÀS CLIENTES SATISFEITAS</span>
              <span className="sm:hidden">JUNTAR-SE ÀS CLIENTES</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section
        className="py-16 sm:py-24 bg-gradient-to-br from-rose-600 via-rose-700 to-rose-800 relative overflow-hidden"
        id="ofertas"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
              {/* Left Side - Product Gallery */}
              <div className="space-y-4 sm:space-y-6">
                {/* Main Product Image */}
                <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-2xl">
                  <div className="relative">
                    <img
                      src={selectedImage || "/placeholder.svg"}
                      alt="Magia Grow - Suplemento Capilar"
                      className="w-full max-w-sm sm:max-w-md mx-auto object-contain transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-2 sm:gap-3 justify-center">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg p-1 sm:p-2 border-2 cursor-pointer transition-colors ${
                      selectedImage === "/images/magia-grow-hero-new.png"
                        ? "border-rose-500"
                        : "border-gray-200 hover:border-rose-300"
                    }`}
                    onClick={() => setSelectedImage("/images/magia-grow-hero-new.png")}
                  >
                    <img
                      src="/images/magia-grow-hero-new.png"
                      alt="Magia Grow"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg p-1 sm:p-2 border-2 cursor-pointer transition-colors ${
                      selectedImage === "/images/magia-grow-no-bg.png"
                        ? "border-rose-500"
                        : "border-gray-200 hover:border-rose-300"
                    }`}
                    onClick={() => setSelectedImage("/images/magia-grow-no-bg.png")}
                  >
                    <img
                      src="/images/magia-grow-no-bg.png"
                      alt="Magia Grow Duplo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg p-1 sm:p-2 border-2 cursor-pointer transition-colors ${
                      selectedImage === "/images/ingredients-table.jpeg"
                        ? "border-rose-500"
                        : "border-gray-200 hover:border-rose-300"
                    }`}
                    onClick={() => setSelectedImage("/images/ingredients-table.jpeg")}
                  >
                    <img
                      src="/images/ingredients-table.jpeg"
                      alt="Tabela Nutricional"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg p-1 sm:p-2 border-2 cursor-pointer transition-colors ${
                      selectedImage === "/images/before-after-1.jpeg"
                        ? "border-rose-500"
                        : "border-gray-200 hover:border-rose-300"
                    }`}
                    onClick={() => setSelectedImage("/images/before-after-1.jpeg")}
                  >
                    <img
                      src="/images/before-after-1.jpeg"
                      alt="Antes e Depois"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Product Info */}
              <div className="bg-rose-700 rounded-2xl p-6 sm:p-10 text-white">
                <div className="mb-6 sm:mb-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                    SUPLEMENTO DE COMBATE À QUEDA DE CABELO MAGIA GROW - 90 CÁPSULAS
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-current" />
                      ))}
                    </div>
                    <span className="text-white/90 text-sm sm:text-lg font-medium">156 avaliações</span>
                  </div>

                  {/* Price */}
                  <div className="mb-8 sm:mb-10">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">R$ 139,90</div>
                    <div className="text-lg sm:text-2xl text-rose-200 font-semibold">6x de R$ 23,32</div>
                  </div>
                </div>

                {/* Package Options */}
                <div className="mb-8 sm:mb-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Frascos para:</h3>

                  <div className="space-y-3 sm:space-y-4">
                    {/* 1 Month */}
                    <div className="bg-rose-600 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <div className="font-bold text-lg sm:text-xl">1 MÊS</div>
                        <div className="text-rose-200 text-sm sm:text-lg">1 por R$ 139,90 cada</div>
                      </div>
                      <Button className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-lg self-start sm:self-auto">
                        ADICIONAR
                      </Button>
                    </div>

                    {/* 3 Months */}
                    <div className="bg-rose-600 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <div className="font-bold text-lg sm:text-xl">3 MESES COM 7% OFF</div>
                        <div className="text-rose-200 text-sm sm:text-lg">3 por R$ 130,11 cada</div>
                      </div>
                      <Button className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-lg self-start sm:self-auto">
                        ADICIONAR
                      </Button>
                    </div>

                    {/* 6 Months */}
                    <div className="bg-rose-600 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <div className="font-bold text-lg sm:text-xl">6 MESES COM 10% OFF</div>
                        <div className="text-rose-200 text-sm sm:text-lg">6 por R$ 125,91 cada</div>
                      </div>
                      <Button className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-lg self-start sm:self-auto">
                        ADICIONAR
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Buy Button */}
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 sm:py-6 text-xl sm:text-2xl font-bold rounded-full h-16 sm:h-20 mb-6 sm:mb-8">
                  COMPRAR
                </Button>

                {/* Security Icons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-lg text-white/90">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                    <span className="font-medium">Compra Segura</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Package className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                    <span className="font-medium">Frete Grátis</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                    <span className="font-medium">Garantia 30 dias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 sm:mb-6 bg-rose-100 text-rose-700 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold">DÚVIDAS FREQUENTES</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Perguntas{" "}
              <span className="bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
                Mais Comuns
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Esclarecemos todas as suas dúvidas sobre o Magia Grow
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            {[
              {
                question: "Em quanto tempo vou ver os primeiros resultados?",
                answer:
                  "Os primeiros sinais de melhora aparecem entre 15 a 30 dias de uso regular. Resultados mais significativos são visíveis após 60-90 dias de uso contínuo, pois é o tempo necessário para o ciclo completo de renovação capilar.",
              },
              {
                question: "O Magia Grow tem efeitos colaterais?",
                answer:
                  "Não! O Magia Grow é 100% natural e não possui efeitos colaterais. Sua fórmula é livre de glúten, lactose e açúcar. Porém, em caso de gravidez, lactação ou tratamento médico, recomendamos consultar seu médico antes do uso.",
              },
              {
                question: "Como devo tomar o Magia Grow?",
                answer:
                  "Tome 1 cápsula por dia, preferencialmente pela manhã junto com o café da manhã para melhor absorção dos nutrientes. É importante manter o uso regular e contínuo para obter os melhores resultados.",
              },
              {
                question: "O produto é aprovado pela ANVISA?",
                answer:
                  "Sim! O Magia Grow é um suplemento alimentar devidamente registrado e aprovado pela ANVISA, garantindo total segurança e qualidade. Seguimos todos os padrões de fabricação e controle de qualidade exigidos.",
              },
              {
                question: "Posso usar se tiver alguma condição médica?",
                answer:
                  "O Magia Grow é seguro para a maioria das pessoas. No entanto, se você tem alguma condição médica específica, está grávida, amamentando ou fazendo uso de medicamentos, recomendamos consultar seu médico antes de iniciar o uso.",
              },
              {
                question: "Qual a diferença entre os planos de 1, 3 e 6 meses?",
                answer:
                  "A diferença está na duração do tratamento e na economia. O plano de 6 meses oferece a melhor relação custo-benefício e garante resultados mais duradouros. O tratamento de 3 meses é o mais popular, enquanto 1 mês é ideal para quem quer experimentar.",
              },
              {
                question: "Vocês oferecem garantia?",
                answer:
                  "Sim! Oferecemos 30 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeita com os resultados, devolvemos 100% do seu dinheiro, sem perguntas ou burocracias.",
              },
              {
                question: "O frete é grátis para todo o Brasil?",
                answer:
                  "Sim! Oferecemos frete grátis para todo o território nacional. Seu pedido será enviado pelos Correios com código de rastreamento para você acompanhar a entrega em tempo real.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="border-rose-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-rose-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-rose-600 transition-transform duration-200 flex-shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-600 mb-4 sm:mb-6">Ainda tem dúvidas? Entre em contato conosco!</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span className="hidden sm:inline">FALAR COM NOSSA EQUIPE</span>
              <span className="sm:hidden">FALAR CONOSCO</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 sm:py-16 bg-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-amber-300" />
                <span className="text-3xl sm:text-4xl font-bold text-amber-300">10.000+</span>
              </div>
              <p className="text-base sm:text-lg">Clientes Satisfeitas</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-6 w-6 sm:h-8 sm:w-8 text-amber-300" />
                <span className="text-3xl sm:text-4xl font-bold text-amber-300">4.9</span>
              </div>
              <p className="text-base sm:text-lg">Avaliação Média</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-amber-300" />
                <span className="text-3xl sm:text-4xl font-bold text-amber-300">95%</span>
              </div>
              <p className="text-base sm:text-lg">Taxa de Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-rose-600 via-rose-700 to-rose-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Pronta Para Sua <span className="text-amber-300">Transformação</span>?
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto opacity-90">
            Junte-se às milhares de mulheres que já descobriram o segredo para uma beleza radiante e natural.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-10 max-w-md mx-auto mb-8 sm:mb-12 border border-white/20">
            <div className="text-center">
              <div className="text-base sm:text-lg text-amber-300 line-through mb-2">De R$ 197,00</div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">R$ 139,90</div>
              <div className="text-amber-300 font-bold text-lg sm:text-xl mb-3 sm:mb-4">29% OFF por tempo limitado</div>
              <div className="text-white/80 text-sm sm:text-base">ou 12x de R$ 11,66 sem juros</div>
            </div>
          </div>
          <Button
            size="lg"
            onClick={() => document.getElementById("ofertas")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 sm:px-16 py-6 sm:py-8 text-lg sm:text-2xl font-bold mb-6 sm:mb-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            <span className="hidden sm:inline">COMPRAR AGORA COM 29% OFF</span>
            <span className="sm:hidden">COMPRAR COM 29% OFF</span>
            <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-7 sm:w-7" />
          </Button>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/90">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" />
              <span className="font-medium">Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" />
              <span className="font-medium">Garantia de 30 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" />
              <span className="font-medium">Frete Grátis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-rose-50 border-t border-rose-200">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-rose-600 mb-2">Magia Grow</h3>
            <p className="text-gray-600 text-sm sm:text-base">Transformando vidas através da beleza natural</p>
          </div>
          <div className="text-xs sm:text-sm text-gray-500">
            <p>&copy; 2025 Magia Grow. Todos os direitos reservados.</p>
            <p className="mt-2">
              Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
