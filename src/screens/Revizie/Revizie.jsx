"use client";

import React from "react";
import Link from "next/link";
import { useWindowWidth } from "../../breakpoints";
import { ConestLogoFull } from "../../components/ConestLogoFull";
import { Check9 } from "../../icons/Check9";
import { TopBar } from "../FrameScreen/sections/TopBar";
import "./style.css";

export const Revizie = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="frame-screen"
      style={{
        height:
          screenWidth < 1600
            ? "auto"
            : screenWidth >= 1600
              ? "auto"
              : undefined,
        minWidth:
          screenWidth < 1600
            ? "440px"
            : screenWidth >= 1600
              ? "1600px"
              : undefined,
      }}
    >
      {screenWidth < 1600 && (
        <>
          <TopBar />
        </>
      )}

      {screenWidth >= 1600 && (
        <>
          <div className="top-bar-2">
            <div className="conest-logo-full-instance-wrapper">
              <ConestLogoFull
                className="instance-node"
                flamedrop="/img/flamedrop-1.svg"
                overlapGroupClassName="conest-logo-full-6"
              />
            </div>

            <div className="navigation-2">
              <Link href="/" className="text-wrapper-75">Acasă</Link>
              <Link href="/servicii" className="text-wrapper-75">Servicii</Link>
              <div className="text-wrapper-75">Revizii</div>

              <div className="button-3">
                <div className="copy-2">COMENZI</div>
                <img
                  className="phoneicon-2"
                  alt="Phoneicon"
                  src="/img/phoneicon-1.svg"
                />
                <div className="copy-2">0722 619 097</div>
              </div>
            </div>
          </div>

          <div className="frame-35">
            <div className="frame-36">
              <p className="text-wrapper-76">
                Revizii și verificări ANRE pentru centrale termice
              </p>

              <p className="autoriza-i-ANRE-2">
                Autorizați ANRE &amp; ISCIR din 1996
              </p>

              <div className="text-13">
                <div className="why-choose-4">
                  <div className="element-21">
                    <Check9 className="check-instance" color="#F2B821" />
                    <div className="text-wrapper-77">Revizii Obligatorii</div>
                  </div>

                  <div className="element-21">
                    <Check9 className="check-instance" color="#F2B821" />
                    <div className="text-wrapper-77">Certificate Oficiale</div>
                  </div>

                  <div className="element-21">
                    <Check9 className="check-instance" color="#F2B821" />
                    <div className="text-wrapper-77">Experiență 27+ Ani</div>
                  </div>
                </div>
              </div>

              <div className="text-14">
                <div className="CTA-buttons-2">
                  <button className="btn-8">
                    <div className="icon-10" />
                    <div className="text-wrapper-78">Programează Revizie</div>
                  </button>

                  <button className="button-4">
                    <img
                      className="phoneicon-2"
                      alt="Phoneicon"
                      src="/img/phoneicon-2.svg"
                    />
                    <div className="copy-2">0722 619 097</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div
        className="frame-37"
        style={{
          gap:
            screenWidth >= 1600
              ? "30px"
              : screenWidth < 1600
                ? "50px"
                : undefined,
          padding:
            screenWidth >= 1600
              ? "160px 100px 250px"
              : screenWidth < 1600
                ? "0px 50px 180px"
                : undefined,
        }}
      >
        <div className="tag-9">
          <div
            className="montaj-i-service"
            style={{
              color:
                screenWidth < 1600
                  ? "#05213c"
                  : screenWidth >= 1600
                    ? "#303030"
                    : undefined,
              fontSize:
                screenWidth < 1600
                  ? "20px"
                  : screenWidth >= 1600
                    ? "18px"
                    : undefined,
              fontWeight:
                screenWidth < 1600
                  ? "400"
                  : screenWidth >= 1600
                    ? "500"
                    : undefined,
              letterSpacing:
                screenWidth < 1600
                  ? "0.80px"
                  : screenWidth >= 1600
                    ? "1.80px"
                    : undefined,
            }}
          >
            {screenWidth < 1600 && <>Revizii și verificări ANRE</>}
            {screenWidth >= 1600 && <>ANRE și ISCIR</>}
          </div>
        </div>

        {screenWidth >= 1600 && (
          <>
            <p className="div-12">
              Servicii complete de revizii și verificări pentru instalații gaze
            </p>

            <p className="text-wrapper-79">
              Cu o experiență de peste 27 de ani, oferim servicii complete
              autorizate ANRE și ISCIR pentru revizii periodice obligatorii la centrale termice și instalații gaze.
            </p>

            <div className="frame-38">
              <div className="frame-39">
                <div className="feature-cards-5">
                  <div className="frame-40">
                    <div className="frame-41">
                      <div className="frame-icon-3">
                        <img
                          className="icon-11"
                          alt="Icon"
                          src="/img/icon-11.png"
                        />
                      </div>

                      <div className="frame-42">
                        <div className="text-wrapper-80">
                          Instalații gaze naturale
                        </div>

                        <p className="text-wrapper-81">
                          Proiectare și execuție instalații gaze naturale
                          conforme ANRE. Branșamente, conducte de distribuție și
                          aparate consumatoare cu garanție completă.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="frame-43">
                    <Link href="/servicii" className="frame-44">
                      <button className="btn-9">
                        <div className="text-wrapper-82">
                          Detalii Instalații Gaze ➔
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="frame-39">
                <div className="feature-cards-5">
                  <div className="frame-40">
                    <div className="frame-41">
                      <div className="frame-icon-3">
                        <img
                          className="icon-12"
                          alt="Icon"
                          src="/img/icon-12.png"
                        />
                      </div>

                      <div className="frame-42">
                        <div className="text-wrapper-80">
                          Centrale termice și încălzire
                        </div>

                        <p className="text-wrapper-81">
                          Montaj și autorizare centrale termice cu tiraj forțat
                          sau natural. Service autorizat ISCIR pentru toate
                          mărcile de centrale.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="frame-43">
                    <div className="frame-44">
                      <button className="btn-9">
                        <div className="text-wrapper-82">
                          Servicii Centrale ➔
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-45">
                <div className="feature-cards-5">
                  <div className="frame-40">
                    <div className="frame-41">
                      <div className="frame-icon-3">
                        <img
                          className="service-icon-2"
                          alt="Service icon"
                          src="/img/service-icon-1.png"
                        />
                      </div>

                      <div className="frame-42">
                        <div className="text-wrapper-80">
                          Revizii și verificări ANRE
                        </div>

                        <p className="text-wrapper-81">
                          Verificări tehnice periodice obligatorii la 2 ani.
                          Revizii complete și eliberare certificate de
                          conformitate.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="frame-43">
                    <div className="frame-44">
                      <button className="btn-9 active">
                        <div className="text-wrapper-82">
                          Programează Revizie ➔
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {screenWidth < 1600 && (
          <>
            <p className="mobile-title">
              Programează revizia centrală termică
            </p>
            <p className="mobile-subtitle">
              Verificări tehnice periodice obligatorii la 2 ani. Revizii complete și eliberare certificate de conformitate.
            </p>
            
            <div className="mobile-contact">
              <h3>Programează acum</h3>
              <a href="tel:+40722619097" className="mobile-phone">0722 619 097</a>
              <p>Program: Luni - Vineri 08:00 - 18:00</p>
              <p>Intervenții urgente: 24/7</p>
            </div>
          </>
        )}
      </div>

      {screenWidth >= 1600 && (
        <>
          <div className="frame-46">
            <div className="tag-9">
              <div className="text-wrapper-83">Servicii complete autorizate</div>
            </div>

            <img className="logos" alt="Logos" src="/img/logos-1.svg" />
          </div>
        </>
      )}

      <div className="footer-section">
        <p>
          © 2024 CON EST IMPEX SRL. Toate drepturile rezervate. | Instalații Gaze & Centrale Termice Constanța din 1996<br/>
          Autorizat ANRE • Certificat ISCIR (RVT și RSL) • Conform standardelor europene
        </p>
      </div>
    </div>
  );
};