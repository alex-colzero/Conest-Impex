import React from 'react';
import Link from 'next/link';

export const BlogsSection = (): React.JSX.Element => {
  const articles = [
    {
      title: 'Cum să pregătești centrale termice pentru iarnă',
      excerpt: 'Ghid complet pentru pregătirea centralei termice înaintea sezonului rece. Verificări esențiale și sfaturi de mentenanță.',
      date: '15 Octombrie 2024',
      category: 'Ghiduri',
      readTime: '5 min',
      image: '/assets/anima-home-v1/modern-autonomous-heating-system-boiler-room@2x.png',
      slug: '/blog/pregatire-centrala-termica-iarna'
    },
    {
      title: 'Avantajele instalațiilor de gaze naturale',
      excerpt: 'De ce să alegi gazele naturale pentru încălzirea locuinței tale. Beneficii economice și de mediu.',
      date: '10 Octombrie 2024',
      category: 'Educațional',
      readTime: '4 min',
      image: '/assets/anima-home-v1/modern-autonomous-heating-system-boiler-room-1@2x.png',
      slug: '/blog/avantajele-gazelor-naturale'
    },
    {
      title: 'Reduceri pentru pensionari - Tot ce trebuie să știi',
      excerpt: 'Programul nostru special pentru pensionari. Reduceri de 25% și condiții preferențiale.',
      date: '5 Octombrie 2024',
      category: 'Oferte',
      readTime: '3 min',
      image: '/assets/anima-home-v1/modern-autonomous-heating-system-boiler-room-2@2x.png',
      slug: '/blog/reduceri-pensionari'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Blog și sfaturi utile
          </h2>
          <p className="text-lg text-text-secondary">
            Află tot ce trebuie să știi despre instalații gaze și centrale termice
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-48 md:h-56">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                  <time>{article.date}</time>
                  <span>•</span>
                  <span>{article.readTime} citire</span>
                </div>
                
                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  <Link href={article.slug}>
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-text-secondary mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Link 
                  href={article.slug}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Citește mai mult
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog" className="btn-outline">
            Vezi toate articolele
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};