1:"$Sreact.fragment"
7:I[7150,[],""]
:HL["/_next/static/css/e987f5815fc0ce21.css","style"]
2:T553,
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
            0:{"P":null,"b":"VEVpjcGYxNTiWw5fUcSkF","p":"","c":["","_not-found"],"i":false,"f":[[["",{"children":["/_not-found",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/e987f5815fc0ce21.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"ro","children":[["$","head",null,{"children":[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"CON EST IMPEX SRL\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Constanța\",\"addressLocality\":\"Constanța\",\"addressRegion\":\"Constanța\",\"addressCountry\":\"RO\"},\"telephone\":\"+40-722-619-097\",\"email\":\"contact@conest-gaze-centrale.ro\",\"url\":\"https://www.conest-gaze-centrale.ro\",\"foundingDate\":\"1996\",\"areaServed\":[\"Constanța\",\"Dobrogea\",\"România\"],\"serviceType\":[\"Instalații gaze naturale\",\"Centrale termice\",\"Service ISCIR\",\"Revizii ANRE\"],\"hasCredential\":[\"Autorizație ANRE\",\"Certificare ISCIR (RVT și RSL)\"],\"openingHours\":\"Mo-Su 00:00-23:59\"}"}}],["$","script",null,{"async":true,"src":"https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"\n              // Core Web Vitals monitoring\n              function sendToAnalytics(metric) {\n                gtag('event', metric.name, {\n                  event_category: 'Web Vitals',\n                  event_label: metric.id,\n                  value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),\n                  non_interaction: true,\n                });\n              }\n              \n              // Load Web Vitals library\n              import('https://unpkg.com/web-vitals@3/dist/web-vitals.js').then(({onCLS, onFID, onFCP, onLCP, onTTFB}) => {\n                onCLS(sendToAnalytics);\n                onFID(sendToAnalytics);\n                onFCP(sendToAnalytics);\n                onLCP(sendToAnalytics);\n                onTTFB(sendToAnalytics);\n              }).catch(console.error);\n            "}}]]}],"$L3"]}]]}],{"children":["/_not-found","$L4",{"children":["__PAGE__","$L5",{},null,false]},null,false]},null,false],"$L6",false]],"m":"$undefined","G":["$7",[]],"s":false,"S":true}
8:I[9810,["177","static/chunks/app/layout-c6f971e4040c4428.js"],"PerformanceMonitor"]
9:I[9766,[],""]
a:I[8924,[],""]
b:I[4431,[],"OutletBoundary"]
d:I[5278,[],"AsyncMetadataOutlet"]
f:I[4431,[],"ViewportBoundary"]
11:I[4431,[],"MetadataBoundary"]
12:"$Sreact.suspense"
3:["$","body",null,{"children":[["$","$L8",null,{}],["$","$L9",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
4:["$","$1","c",{"children":[null,["$","$L9",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
5:["$","$1","c",{"children":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],null,["$","$Lb",null,{"children":["$Lc",["$","$Ld",null,{"promise":"$@e"}]]}]]}]
6:["$","$1","h",{"children":[["$","meta",null,{"name":"robots","content":"noindex"}],[["$","$Lf",null,{"children":"$L10"}],null],["$","$L11",null,{"children":["$","div",null,{"hidden":true,"children":["$","$12",null,{"fallback":null,"children":"$L13"}]}]}]]}]
10:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
c:null
e:{"metadata":[["$","title","0",{"children":"Conest - Instalații gaze și centrale termice"}],["$","meta","1",{"name":"description","content":"Servicii complete pentru instalații gaze și centrale termice cu experiență de peste 27 de ani."}],["$","meta","2",{"name":"google-site-verification","content":"your-google-site-verification-code"}]],"error":null,"digest":"$undefined"}
13:"$e:metadata"
