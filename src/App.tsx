import React from 'react';
import { Phone, Mail, MapPin, Clock, ChevronDown, Truck, Hammer, Trash2, ClipboardCheck, Users, Building } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Building className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold text-navy-900">ConstructBG</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-navy-900 hover:text-orange-500 font-medium">Начало</a>
              <a href="#about" className="text-navy-900 hover:text-orange-500 font-medium">За Нас</a>
              <a href="#services" className="text-navy-900 hover:text-orange-500 font-medium">Услуги</a>
              <a href="#pricing" className="text-navy-900 hover:text-orange-500 font-medium">Цени</a>
              <a href="#projects" className="text-navy-900 hover:text-orange-500 font-medium">Проекти</a>
              <a href="#contact" className="text-navy-900 hover:text-orange-500 font-medium">Контакти</a>
            </nav>
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 relative">
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/42/3f/ba/423fba557438587bf43ee85c973e0739.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Професионални <span className="text-orange-500">строителни услуги</span> в София
              </h1>
              <p className="text-lg mb-8 text-gray-300">
                Надеждни решения за вашите строителни проекти. Качество, опит и коректност от 2010 година.
              </p>
              <div className="flex space-x-4">
                <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Безплатен Оглед
                </a>
                <a href="#services" className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-navy-900 transition-colors">
                  Услуги
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
            </div>
          </div>
        </div>
        <div className="bg-white py-8 relative">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Phone className="w-10 h-10 text-orange-500" />
              <div>
                <h3 className="font-semibold">Денонощна връзка</h3>
                <p className="text-gray-600">+359 888 123 456</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-10 h-10 text-orange-500" />
              <div>
                <h3 className="font-semibold">Работим в</h3>
                <p className="text-gray-600">София и областта</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="w-10 h-10 text-orange-500" />
              <div>
                <h3 className="font-semibold">Бързо обслужване</h3>
                <p className="text-gray-600">До 24 часа на място</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Нашите Услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Предлагаме пълен набор от строителни услуги с гарантирано качество и професионално изпълнение
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Hammer, title: 'Събаряне', desc: 'Професионално разрушаване на сгради и конструкции' },
              { icon: Trash2, title: 'Извозване', desc: 'Бързо извозване на строителни отпадъци' },
              { icon: Truck, title: 'Транспорт', desc: 'Транспортни услуги за строителни материали' },
              { icon: ClipboardCheck, title: 'Почистване', desc: 'Цялостно почистване на обекти' },
              { icon: Building, title: 'Ремонти', desc: 'Цялостни и частични ремонти на помещения' },
              { icon: Users, title: 'Консултации', desc: 'Експертни строителни консултации' },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-navy-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Нуждаете се от професионална консултация?
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="tel:+359888123456" className="flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              <Phone className="w-5 h-5" />
              <span>+359 888 123 456</span>
            </a>
            <a href="mailto:contact@constructbg.com" className="flex items-center space-x-2 bg-white text-navy-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              <Mail className="w-5 h-5" />
              <span>contact@constructbg.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;