import './globals.css'
import { PerformanceMonitor } from '../src/components/PerformanceMonitor'

export const metadata = {
  title: 'Conest - Instalații gaze și centrale termice',
  description: 'Servicii complete pentru instalații gaze și centrale termice cu experiență de peste 27 de ani.',
  verification: {
    google: 'your-google-site-verification-code', // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CON EST IMPEX SRL",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Constanța",
      "addressLocality": "Constanța",
      "addressRegion": "Constanța",
      "addressCountry": "RO"
    },
    "telephone": "+40-722-619-097",
    "email": "contact@conest-gaze-centrale.ro",
    "url": "https://www.conest-gaze-centrale.ro",
    "foundingDate": "1996",
    "areaServed": ["Constanța", "Dobrogea", "România"],
    "serviceType": ["Instalații gaze naturale", "Centrale termice", "Service ISCIR", "Revizii ANRE"],
    "hasCredential": [
      "Autorizație ANRE",
      "Certificare ISCIR (RVT și RSL)"
    ],
    "openingHours": "Mo-Su 00:00-23:59"
  };

  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
                custom_map: {
                  'dimension1': 'service_type',
                  'dimension2': 'location'
                }
              });
              
              // Track phone clicks
              document.addEventListener('click', function(e) {
                if (e.target.href && e.target.href.startsWith('tel:')) {
                  gtag('event', 'phone_click', {
                    event_category: 'engagement',
                    event_label: e.target.href.replace('tel:', ''),
                    value: 1
                  });
                }
              });
              
              // Track email clicks  
              document.addEventListener('click', function(e) {
                if (e.target.href && e.target.href.startsWith('mailto:')) {
                  gtag('event', 'email_click', {
                    event_category: 'engagement', 
                    event_label: e.target.href.replace('mailto:', ''),
                    value: 1
                  });
                }
              });
            `
          }}
        />
        
        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Core Web Vitals monitoring
              function sendToAnalytics(metric) {
                gtag('event', metric.name, {
                  event_category: 'Web Vitals',
                  event_label: metric.id,
                  value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                  non_interaction: true,
                });
              }
              
              // Load Web Vitals library
              import('https://unpkg.com/web-vitals@3/dist/web-vitals.js').then(({onCLS, onFID, onFCP, onLCP, onTTFB}) => {
                onCLS(sendToAnalytics);
                onFID(sendToAnalytics);
                onFCP(sendToAnalytics);
                onLCP(sendToAnalytics);
                onTTFB(sendToAnalytics);
              }).catch(console.error);
            `
          }}
        />
      </head>
      <body>
        <PerformanceMonitor />
        {children}
      </body>
    </html>
  )
}