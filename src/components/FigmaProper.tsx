"use client";

import React from "react";

export const FigmaProper = () => {
  return (
    <div style={{width: '100%', minHeight: '100vh', background: '#FBFBFB', fontFamily: 'Poppins, sans-serif'}}>
      
      {/* Navigation */}
      <nav style={{
        width: '100%', 
        height: '155px', 
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1420px',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <div style={{width: '220px', height: '93px', position: 'relative'}}>
            <div style={{width: '197.52px', height: '35.15px', position: 'absolute', left: '11px', top: '28px', background: '#05213C'}} />
            <div style={{width: '34.19px', height: '33.94px', position: 'absolute', left: '48.35px', top: '28.39px', background: '#05213C'}} />
            <div style={{width: '21.37px', height: '25.51px', position: 'absolute', left: '54.76px', top: '32.64px', background: '#F2B821'}} />
          </div>
          
          {/* Navigation Menu */}
          <div style={{display: 'flex', alignItems: 'center', gap: '30px'}}>
            <div style={{color: '#05213C', fontSize: '22px', fontWeight: '500', cursor: 'pointer'}}>Servicii</div>
            <div style={{color: '#05213C', fontSize: '22px', fontWeight: '500', cursor: 'pointer'}}>Despre Noi</div>
            <div style={{color: '#05213C', fontSize: '22px', fontWeight: '500', cursor: 'pointer'}}>Zone Deservite</div>
            <div style={{color: '#05213C', fontSize: '22px', fontWeight: '500', cursor: 'pointer'}}>Contact</div>
            <div style={{
              padding: '18px 36px',
              background: '#F2B821',
              borderRadius: '20px',
              color: '#05213C',
              fontSize: '16px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1.28px',
              cursor: 'pointer'
            }}>0758 xxx xxx</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        width: '100%',
        height: '766px',
        position: 'relative',
        background: '#05213C',
        overflow: 'hidden'
      }}>
        <img 
          src="https://placehold.co/1920x1025" 
          alt="Heating system" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.82) 100%)'
        }} />
        
        <div style={{
          position: 'absolute',
          left: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          maxWidth: '741px',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: '600',
            lineHeight: '1.3',
            marginBottom: '20px'
          }}>
            Instalații gaze și centrale<br/>termice constanța
          </h1>
          <p style={{
            fontSize: 'clamp(20px, 2vw, 30px)',
            fontWeight: '400',
            letterSpacing: '3px',
            marginBottom: '34px'
          }}>
            Autorizați ANRE & ISCIR din 1996
          </p>
          
          {/* Features */}
          <div style={{
            display: 'flex',
            gap: '40px',
            marginBottom: '61px',
            flexWrap: 'wrap'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <div style={{width: '19px', height: '19px', background: '#F2B821'}} />
              <span style={{fontSize: '16px', fontWeight: '500', letterSpacing: '0.8px'}}>Autorizat ANRE</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <div style={{width: '19px', height: '19px', background: '#F2B821'}} />
              <span style={{fontSize: '16px', fontWeight: '500', letterSpacing: '0.8px'}}>Certificat ISCIR</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <div style={{width: '19px', height: '19px', background: '#F2B821'}} />
              <span style={{fontSize: '16px', fontWeight: '500', letterSpacing: '0.8px'}}>Garanție 2 ani</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap'}}>
            <button style={{
              padding: '18px 36px',
              background: 'transparent',
              border: '1px solid #F2B821',
              borderRadius: '10px',
              color: '#F2B821',
              fontSize: '16px',
              fontWeight: '600',
              letterSpacing: '1.28px',
              cursor: 'pointer'
            }}>Cere Ofertă</button>
            <button style={{
              padding: '18px 36px',
              background: '#F2B821',
              border: 'none',
              borderRadius: '10px',
              color: '#05213C',
              fontSize: '16px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1.28px',
              cursor: 'pointer'
            }}>0758 xxx xxx</button>
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section style={{
        width: '100%',
        padding: '60px 5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '60px'
      }}>
        <div style={{
          maxWidth: '743px',
          height: '60px',
          padding: '10px 13px',
          border: '1px solid rgba(5, 33, 60, 0.20)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            color: '#05213C',
            fontSize: '20px',
            fontWeight: '400',
            letterSpacing: '0.8px',
            textAlign: 'center'
          }}>
            Montaj și service autorizat pentru brandurile de top din domeniu
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        width: '100%',
        maxWidth: '1420px',
        margin: '0 auto',
        padding: '80px 20px'
      }}>
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          marginBottom: '80px'
        }}>
          <div style={{
            padding: '10px 13px',
            border: '1px solid rgba(5, 33, 60, 0.20)',
            borderRadius: '10px',
            color: '#313131',
            fontSize: '18px',
            fontWeight: '500',
            letterSpacing: '1.8px'
          }}>Servicii</div>
          <h2 style={{
            color: '#313131',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: '600',
            textTransform: 'capitalize',
            lineHeight: '1.3',
            textAlign: 'center',
            margin: 0
          }}>Ce oferim</h2>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          maxWidth: '1420px'
        }}>
          {/* Service 1 */}
          <div style={{
            height: '350px',
            padding: '40px',
            background: 'white',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px'
          }}>
            <div style={{width: '80px', height: '80px', borderRadius: '40px', background: '#F2B821'}} />
            <div>
              <h3 style={{
                color: '#05213C',
                fontSize: '26px',
                fontWeight: '600',
                lineHeight: '1.3',
                marginBottom: '10px'
              }}>Instalații Gaze Naturale</h3>
              <p style={{
                color: '#5A5A5A',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}>Montaj complet de instalații interioare și branșamente de gaze naturale, conform standardelor ANRE și cu toate avizele necesare.</p>
            </div>
            <div style={{
              padding: '12px 20px',
              background: '#F2B821',
              borderRadius: '10px',
              color: '#05213C',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1.12px',
              alignSelf: 'flex-start'
            }}>De la 2500 LEI</div>
          </div>

          {/* Service 2 */}
          <div style={{
            height: '350px',
            padding: '40px',
            background: 'white',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px'
          }}>
            <div style={{width: '80px', height: '80px', borderRadius: '40px', background: '#F2B821'}} />
            <div>
              <h3 style={{
                color: '#05213C',
                fontSize: '26px',
                fontWeight: '600',
                lineHeight: '1.3',
                marginBottom: '10px'
              }}>Centrale Termice</h3>
              <p style={{
                color: '#5A5A5A',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}>Montaj, înlocuire și service pentru toate mărcile de centrale termice murale și de pardoseală. Garanție 2 ani pe lucrări.</p>
            </div>
            <div style={{
              padding: '12px 20px',
              background: '#F2B821',
              borderRadius: '10px',
              color: '#05213C',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1.12px',
              alignSelf: 'flex-start'
            }}>De la 1800 LEI</div>
          </div>

          {/* Service 3 */}
          <div style={{
            height: '350px',
            padding: '40px',
            background: 'white',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px'
          }}>
            <div style={{width: '80px', height: '80px', borderRadius: '40px', background: '#F2B821'}} />
            <div>
              <h3 style={{
                color: '#05213C',
                fontSize: '26px',
                fontWeight: '600',
                lineHeight: '1.3',
                marginBottom: '10px'
              }}>Urgențe 24/7</h3>
              <p style={{
                color: '#5A5A5A',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}>Serviciu de urgență non-stop pentru defecțiuni grave la instalații de gaze sau centrale termice. Intervenție rapidă în maxim 2 ore.</p>
            </div>
            <div style={{
              padding: '12px 20px',
              background: '#F2B821',
              borderRadius: '10px',
              color: '#05213C',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1.12px',
              alignSelf: 'flex-start'
            }}>De la 150 LEI</div>
          </div>

          {/* Service 4 */}
          <div style={{
            height: '350px',
            padding: '40px',
            background: 'white',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px'
          }}>
            <div style={{width: '80px', height: '80px', borderRadius: '40px', background: '#F2B821'}} />
            <div>
              <h3 style={{
                color: '#05213C',
                fontSize: '26px',
                fontWeight: '600',
                lineHeight: '1.3',
                marginBottom: '10px'
              }}>Revizii și Verificări</h3>
              <p style={{
                color: '#5A5A5A',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}>Controale tehnice anuale obligatorii ISCIR, verificări de siguranță și eliberarea certificatelor de conformitate.</p>
            </div>
            <div style={{
              padding: '12px 20px',
              background: '#F2B821',
              borderRadius: '10px',
              color: '#05213C',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1.12px',
              alignSelf: 'flex-start'
            }}>De la 120 LEI</div>
          </div>

          {/* Service 5 */}
          <div style={{
            height: '350px',
            padding: '40px',
            background: 'white',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px'
          }}>
            <div style={{width: '80px', height: '80px', borderRadius: '40px', background: '#F2B821'}} />
            <div>
              <h3 style={{
                color: '#05213C',
                fontSize: '26px',
                fontWeight: '600',
                lineHeight: '1.3',
                marginBottom: '10px'
              }}>Senzori și Electrovalve</h3>
              <p style={{
                color: '#5A5A5A',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}>Montaj și înlocuire senzori de gaze, electrovalve de siguranță și sisteme de detectare pentru protecția maximă.</p>
            </div>
            <div style={{
              padding: '12px 20px',
              background: '#F2B821',
              borderRadius: '10px',
              color: '#05213C',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1.12px',
              alignSelf: 'flex-start'
            }}>De la 350 LEI</div>
          </div>

          {/* Service 6 */}
          <div style={{
            height: '350px',
            padding: '40px',
            background: 'white',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px'
          }}>
            <div style={{width: '80px', height: '80px', borderRadius: '40px', background: '#F2B821'}} />
            <div>
              <h3 style={{
                color: '#05213C',
                fontSize: '26px',
                fontWeight: '600',
                lineHeight: '1.3',
                marginBottom: '10px'
              }}>Sisteme Termostate</h3>
              <p style={{
                color: '#5A5A5A',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}>Instalare sisteme de control temperatura inteligente, termostate programabile și soluții de automatizare.</p>
            </div>
            <div style={{
              padding: '12px 20px',
              background: '#F2B821',
              borderRadius: '10px',
              color: '#05213C',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1.12px',
              alignSelf: 'flex-start'
            }}>De la 800 LEI</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{
        width: '100%',
        maxWidth: '1420px',
        margin: '0 auto',
        padding: '80px 20px',
        background: '#F8F9FA',
        borderRadius: '30px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          marginBottom: '80px'
        }}>
          <div style={{
            padding: '10px 13px',
            border: '1px solid rgba(5, 33, 60, 0.20)',
            borderRadius: '10px',
            color: '#05213C',
            fontSize: '18px',
            fontWeight: '500',
            letterSpacing: '1.8px'
          }}>De ce să ne alegi</div>
          <h2 style={{
            color: '#05213C',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: '600',
            textTransform: 'capitalize',
            lineHeight: '1.3',
            textAlign: 'center',
            margin: 0
          }}>despre companie</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
            <div>
              <h3 style={{
                color: '#05213C',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: '600',
                lineHeight: '1.3',
                marginBottom: '20px'
              }}>
                Experiență de peste 25 de ani<br/>în domeniul gazelor naturale
              </h3>
              <p style={{
                color: '#5A5A5A',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '1.8'
              }}>
                De la înființarea companiei în 1996, am devenit unul din cei mai de încredere furnizori de servicii pentru instalații de gaze naturale și centrale termice din județul Constanța. Am realizat peste 5.000 de instalații complete și oferim service pentru toate mărcile principale de centrale termice.
                <br/><br/>
                Echipa noastră de specialiști certificați lucrează conform standardelor europene de siguranță și folosește exclusiv echipamente și piese de înaltă calitate, garantate de producători.
              </p>
            </div>
            
            <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap'}}>
              <button style={{
                padding: '18px 36px',
                background: 'transparent',
                border: '1px solid #F2B821',
                borderRadius: '10px',
                color: '#05213C',
                fontSize: '16px',
                fontWeight: '600',
                letterSpacing: '1.28px',
                cursor: 'pointer'
              }}>Vezi Certificări</button>
              <button style={{
                padding: '18px 36px',
                background: '#05213C',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                letterSpacing: '1.28px',
                cursor: 'pointer'
              }}>Contactează-ne</button>
            </div>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
            <div style={{
              width: '100%',
              height: '320px',
              borderRadius: '20px',
              overflow: 'hidden'
            }}>
              <img 
                src="https://placehold.co/640x320" 
                alt="Company" 
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              textAlign: 'center'
            }}>
              <div>
                <div style={{
                  color: '#F2B821',
                  fontSize: '48px',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>5000+</div>
                <div style={{
                  color: '#05213C',
                  fontSize: '16px',
                  fontWeight: '500',
                  letterSpacing: '0.32px'
                }}>Instalații<br/>Realizate</div>
              </div>
              <div>
                <div style={{
                  color: '#F2B821',
                  fontSize: '48px',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>25+</div>
                <div style={{
                  color: '#05213C',
                  fontSize: '16px',
                  fontWeight: '500',
                  letterSpacing: '0.32px'
                }}>Ani de<br/>Experiență</div>
              </div>
              <div>
                <div style={{
                  color: '#F2B821',
                  fontSize: '48px',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>24/7</div>
                <div style={{
                  color: '#05213C',
                  fontSize: '16px',
                  fontWeight: '500',
                  letterSpacing: '0.32px'
                }}>Serviciu de<br/>Urgență</div>
              </div>
              <div>
                <div style={{
                  color: '#F2B821',
                  fontSize: '48px',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>2 ani</div>
                <div style={{
                  color: '#05213C',
                  fontSize: '16px',
                  fontWeight: '500',
                  letterSpacing: '0.32px'
                }}>Garanție<br/>Completă</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        width: '100%',
        background: '#F2F2F2',
        padding: '60px 5%'
      }}>
        <div style={{
          maxWidth: '1420px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px'
        }}>
          {/* Company Info */}
          <div>
            <div style={{width: '220px', height: '93px', position: 'relative', marginBottom: '20px'}}>
              <div style={{width: '197.52px', height: '35.64px', position: 'absolute', left: '11px', top: '28px', background: '#05213C'}} />
              <div style={{width: '34.22px', height: '34.43px', position: 'absolute', left: '48.19px', top: '28.41px', background: '#05213C'}} />
              <div style={{width: '21.39px', height: '25.88px', position: 'absolute', left: '54.60px', top: '32.67px', background: '#F2B821'}} />
            </div>
            <p style={{
              color: '#05213C',
              fontSize: '16px',
              fontWeight: '500',
              letterSpacing: '0.32px',
              lineHeight: '1.6'
            }}>
              Instalații Gaze & Centrale Termice<br/>
              Est. 1996 | Autorizat ANRE & ISCIR<br/>
              Constanța, România
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 style={{
              color: '#05213C',
              fontSize: '22px',
              fontWeight: '600',
              marginBottom: '20px'
            }}>Servicii</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <div style={{color: '#05213C', fontSize: '16px', fontWeight: '500'}}>Instalații Gaze Naturale</div>
              <div style={{color: '#05213C', fontSize: '16px', fontWeight: '500'}}>Centrale Termice</div>
              <div style={{color: '#05213C', fontSize: '16px', fontWeight: '500'}}>Urgențe 24/7</div>
              <div style={{color: '#05213C', fontSize: '16px', fontWeight: '500'}}>Revizii și Verificări</div>
              <div style={{color: '#05213C', fontSize: '16px', fontWeight: '500'}}>Senzori și Electrovalve</div>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 style={{
              color: '#313131',
              fontSize: '22px',
              fontWeight: '600',
              marginBottom: '20px'
            }}>Contact & Legal</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <div style={{color: '#05213C', fontSize: '16px', fontWeight: '500'}}>Constanța, România</div>
              <div style={{color: '#313131', fontSize: '16px', fontWeight: '500'}}>contact@conest-gaze-centrale.ro</div>
              <div style={{color: '#313131', fontSize: '16px', fontWeight: '500'}}>0xxx-xxx-xxx</div>
              <div style={{color: '#313131', fontSize: '16px', fontWeight: '500'}}>Urgențe: 0xxx-xxx-xxx</div>
              <div style={{color: '#313131', fontSize: '16px', fontWeight: '500'}}>24/7</div>
            </div>
          </div>
        </div>
        
        <div style={{
          maxWidth: '1420px',
          margin: '40px auto 0',
          paddingTop: '30px',
          borderTop: '1px solid #E5E5E5',
          textAlign: 'center',
          color: '#5A5A5A',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '1.8'
        }}>
          © 2024 CON EST IMPEX SRL. Toate drepturile rezervate. | Instalații Gaze & Centrale Termice Constanța din 1996<br/>
          Autorizat ANRE • Certificat ISCIR (RVT și RSL) • Conform standardelor europene
        </div>
      </footer>
    </div>
  );
};