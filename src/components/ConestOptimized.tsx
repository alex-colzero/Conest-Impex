"use client";

import React from "react";
import Image from "next/image";
import { NavigationOptimized } from "./NavigationOptimized";
import { FooterSection } from "./anima-home-v1/FooterSection/FooterSection";

export const ConestOptimized = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavigationOptimized />
      
      {/* Hero Section - Fixed with proper layout */}
      <section className="relative bg-[#05213c] min-h-[600px] overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="text-white z-10 max-w-2xl lg:pr-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Instalații gaze și<br />
                centrale termice<br />
                Constanța
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300">
                Autorizați ANRE & ISCIR din 1996
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/assets/anima-home-v1/check-10.svg" alt="" className="w-5 h-5" />
                  <span className="text-sm md:text-base">Autorizat ANRE</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/assets/anima-home-v1/check-10.svg" alt="" className="w-5 h-5" />
                  <span className="text-sm md:text-base">Certificat ISCIR</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/assets/anima-home-v1/check-10.svg" alt="" className="w-5 h-5" />
                  <span className="text-sm md:text-base">Garanție 2 Ani</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-[#f2b721] text-[#05213c] font-semibold rounded-lg hover:bg-[#e6a61e] transition-colors">
                  <span className="flex items-center justify-center gap-2">
                    <img src="/assets/anima-home-v1/phoneicon.svg" alt="" className="w-5 h-5" />
                    0758 XXX XXX
                  </span>
                </button>
                <button className="px-6 py-3 border-2 border-[#f2b721] text-[#f2b721] font-semibold rounded-lg hover:bg-[#f2b721] hover:text-[#05213c] transition-colors">
                  Cere Ofertă
                </button>
              </div>
            </div>
            
            {/* Right Image - Van */}
            <div className="relative w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] mt-8 lg:mt-0">
              <img 
                src="/assets/anima-home-v1/gazelle-next-mockup.png" 
                alt="CONEST Service Van" 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full max-w-[600px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-[#f2b721] rounded-full"></div>
          <div className="absolute bottom-20 right-40 w-24 h-24 bg-white rounded-full"></div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-xl text-[#05213c]">
              Montaj și service autorizat pentru brandurile de top din domeniu
            </p>
          </div>
          <img src="/assets/anima-home-v1/logos.svg" alt="Partner brands" className="w-full max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#05213c]">
            Servicii profesionale pentru casa ta
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/assets/anima-home-v1/flame-big-6.svg" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#05213c]">Instalații gaze naturale</h3>
              <p className="text-gray-600 mb-6">
                Proiectare și execuție instalații gaze naturale conforme ANRE. Branșamente și conducte de distribuție.
              </p>
              <a href="#" className="text-[#f2b721] font-semibold hover:text-[#05213c] transition-colors">
                Află mai multe →
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/assets/anima-home-v1/streamline-travel-hotel-air-conditioner-heating-ac-air-hvac-cool.svg" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#05213c]">Centrale termice</h3>
              <p className="text-gray-600 mb-6">
                Montaj și autorizare centrale termice. Service autorizat ISCIR pentru toate mărcile.
              </p>
              <a href="#" className="text-[#f2b721] font-semibold hover:text-[#05213c] transition-colors">
                Află mai multe →
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/assets/anima-home-v1/check-10.svg" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#05213c]">Revizii și verificări</h3>
              <p className="text-gray-600 mb-6">
                Verificări tehnice periodice obligatorii la 2 ani. Certificate de conformitate.
              </p>
              <a href="#" className="text-[#f2b721] font-semibold hover:text-[#05213c] transition-colors">
                Află mai multe →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#05213c] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experți în instalații gaze din 1996
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#f2b721] mb-4">27+</div>
              <p className="text-xl">Ani experiență</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#f2b721] mb-4">24/7</div>
              <p className="text-xl">Service urgențe</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#f2b721] mb-4">500%</div>
              <p className="text-xl">Satisfacție clienți</p>
            </div>
          </div>
        </div>
      </section>

      {/* Works Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#05213c]">
            Lucrările noastre recente
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/assets/anima-home-v1/modern-autonomous-heating-system-boiler-room@2x.png" 
                alt="Instalație gaze" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#05213c]">Instalație gaze apartament</h3>
                <p className="text-gray-600">Instalație completă pentru apartament 3 camere</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/assets/anima-home-v1/modern-autonomous-heating-system-boiler-room-1@2x.png" 
                alt="Centrală termică" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#05213c]">Montaj centrală Vaillant</h3>
                <p className="text-gray-600">Centrală cu condensare pentru casă</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/assets/anima-home-v1/modern-autonomous-heating-system-boiler-room-2@2x.png" 
                alt="Modernizare" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#05213c]">Modernizare sistem</h3>
                <p className="text-gray-600">Upgrade complet sistem încălzire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f2b721]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#05213c]">
            Urgențe gaze și centrale termice 24/7
          </h2>
          <p className="text-xl mb-8 text-[#05213c]">
            Intervenții rapide în maxim 30-60 minute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0758XXXXXX" 
              className="px-8 py-4 bg-[#05213c] text-white font-bold rounded-lg hover:bg-[#0a3a63] transition-colors inline-flex items-center justify-center gap-2"
            >
              <img src="/assets/anima-home-v1/phoneicon.svg" alt="" className="w-5 h-5 invert" />
              Sună Acum: 0758 XXX XXX
            </a>
            <a 
              href="#" 
              className="px-8 py-4 bg-white text-[#05213c] font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Programează Vizită
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#05213c]">
              Solicită ofertă personalizată
            </h2>
            
            <form className="bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input 
                  type="text" 
                  placeholder="Nume complet"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f2b721] focus:outline-none"
                />
                <input 
                  type="tel" 
                  placeholder="Telefon"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f2b721] focus:outline-none"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f2b721] focus:outline-none mb-6"
              />
              <textarea 
                placeholder="Descrie problema sau serviciul dorit"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f2b721] focus:outline-none mb-6"
              />
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-[#f2b721] text-[#05213c] font-bold rounded-lg hover:bg-[#e6a61e] transition-colors"
              >
                Trimite Cerere
              </button>
            </form>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};