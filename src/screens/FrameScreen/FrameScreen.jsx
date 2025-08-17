"use client";

import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { ConestLogoFull } from "../../components/ConestLogoFull";
import { FeatureCardsYellow } from "../../components/FeatureCardsYellow";
import { Check9 } from "../../icons/Check9";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { Frame1 } from "./sections/Frame1";
import { Frame2 } from "./sections/Frame2";
import { Frame3 } from "./sections/Frame3";
import { FrameWrapper } from "./sections/FrameWrapper";
import { SectionComponentNode } from "./sections/SectionComponentNode";
import { TopBar } from "./sections/TopBar";
import "./style.css";

export const FrameScreen = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="frame-screen"
      style={{
        height:
          screenWidth < 1600
            ? "9753px"
            : screenWidth >= 1600
              ? "9751px"
              : undefined,
        minWidth:
          screenWidth < 1600
            ? "440px"
            : screenWidth >= 1600
              ? "1600px"
              : undefined,
      }}
      data-model-id="215:4035"
    >
      {screenWidth < 1600 && (
        <>
          <TopBar />
          <Frame />
          <FrameWrapper />
        </>
      )}

      {screenWidth >= 1600 && (
        <>
          <div className="top-bar-2">
            <div className="conest-logo-full-instance-wrapper">
              <ConestLogoFull
                className="instance-node"
                flamedrop="/img/flamedrop-1.svg"
                overlapGroupClassName="conest-logo-full-4"
              />
            </div>

            <div className="navigation-2">
              <div className="text-wrapper-41">Servicii</div>

              <div className="text-wrapper-41">Despre Noi</div>

              <div className="text-wrapper-41">Despre Noi</div>

              <div className="button-2">
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

          <div className="frame-24">
            <div className="frame-25">
              <p className="text-wrapper-42">
                Instalații gaze și centrale termice constanța
              </p>

              <p className="autoriza-i-ANRE-2">
                Autorizați ANRE &amp; ISCIR din 1996
              </p>

              <div className="text-4">
                <div className="why-choose-2">
                  <div className="element-11">
                    <Check9 className="check-5" color="#F2B821" />
                    <div className="text-wrapper-43">Autorizat Anre</div>
                  </div>

                  <div className="element-11">
                    <Check9 className="check-5" color="#F2B821" />
                    <div className="text-wrapper-43">Certificat Iscir</div>
                  </div>

                  <div className="element-11">
                    <Check9 className="check-5" color="#F2B821" />
                    <div className="text-wrapper-43">Garanție 2 Ani</div>
                  </div>
                </div>
              </div>

              <div className="text-5">
                <div className="CTA-buttons-2">
                  <button className="btn-5">
                    <div className="icon-10" />

                    <div className="text-wrapper-44">Cere Ofertă</div>
                  </button>

                  <button className="button-3">
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
        className="frame-26"
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
        <div className="tag-4">
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
            {screenWidth < 1600 && <>Montaj și service autorizat</>}

            {screenWidth >= 1600 && <>ANRE și ISCIR</>}
          </div>
        </div>

        {screenWidth >= 1600 && (
          <>
            <p className="div-6">
              Soluții complete pentru instalații gaze și centrale termice
            </p>

            <p className="text-wrapper-45">
              Cu o experiență de peste 27 de ani, oferim servicii complete
              autorizate ANRE și ISCIR pentru toate nevoile dvs. de încălzire și
              instalații gaze.
            </p>

            <div className="frame-27">
              <div className="frame-28">
                <div className="feature-cards-4">
                  <div className="frame-29">
                    <div className="frame-30">
                      <div className="frame-icon-3">
                        <img
                          className="icon-11"
                          alt="Icon"
                          src="/img/icon-11.png"
                        />
                      </div>

                      <div className="frame-31">
                        <div className="text-wrapper-46">
                          Instalații gaze naturale
                        </div>

                        <p className="text-wrapper-47">
                          Proiectare și execuție instalații gaze naturale
                          conforme ANRE. Branșamente, conducte de distribuție și
                          aparate consumatoare cu garanție completă.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="frame-32">
                    <div className="frame-33">
                      <button className="btn-6">
                        <div className="text-wrapper-48">
                          Detalii Instalații Gaze ➔
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-28">
                <div className="feature-cards-4">
                  <div className="frame-29">
                    <div className="frame-30">
                      <div className="frame-icon-3">
                        <img
                          className="icon-12"
                          alt="Icon"
                          src="/img/icon-12.png"
                        />
                      </div>

                      <div className="frame-31">
                        <div className="text-wrapper-46">
                          Centrale termice și încălzire
                        </div>

                        <p className="text-wrapper-47">
                          Montaj și autorizare centrale termice cu tiraj forțat
                          sau natural. Service autorizat ISCIR pentru toate
                          mărcile de centrale.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="frame-32">
                    <div className="frame-33">
                      <button className="btn-6">
                        <div className="text-wrapper-48">
                          Servicii Centrale ➔
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-34">
                <div className="feature-cards-4">
                  <div className="frame-29">
                    <div className="frame-30">
                      <div className="frame-icon-3">
                        <img
                          className="service-icon-2"
                          alt="Service icon"
                          src="/img/service-icon-1.png"
                        />
                      </div>

                      <div className="frame-31">
                        <div className="text-wrapper-46">
                          Revizii și verificări ANRE
                        </div>

                        <p className="text-wrapper-47">
                          Verificări tehnice periodice obligatorii la 2 ani.
                          Revizii complete și eliberare certificate de
                          conformitate.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="frame-32">
                    <div className="frame-33">
                      <button className="btn-6">
                        <div className="text-wrapper-48">
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
          <img className="logos" alt="Logos" src="/img/logos.svg" />
        )}
      </div>

      {screenWidth >= 1600 && (
        <>
          <div className="frame-35">
            <div className="tag-4">
              <div className="text-wrapper-49">Montaj și service autorizat</div>
            </div>

            <img className="logos" alt="Logos" src="/img/logos-1.svg" />
          </div>

          <div className="frame-36">
            <div className="frame-37">
              <div className="feature-cards-5">
                <div className="frame-29">
                  <div className="frame-30">
                    <div className="frame-icon-4">
                      <img
                        className="icon-13"
                        alt="Icon"
                        src="/img/icon-18.png"
                      />
                    </div>

                    <div className="frame-31">
                      <div className="text-wrapper-46">
                        Intervenții Urgente 24/7
                      </div>

                      <p className="text-wrapper-47">
                        Service non-stop pentru urgențe gaze și centrale
                        termice. Timp de răspuns rapid în Constanța și
                        împrejurimi.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="frame-38">
                  <div className="frame-39">
                    <button className="btn-7">
                      <div className="text-wrapper-50">Urgențe Non-Stop ➔</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-40">
            <div className="tag-5">
              <div className="text-wrapper-51">ANRE și ISCIR</div>
            </div>

            <p className="div-6">Siguranță și eficiență pentru casa ta</p>

            <p className="text-wrapper-45">
              Integram cele mai noi tehnologii pentru a vă transforma locuința
              într-un spațiu mai sigur și mai eficient energetic, cu sisteme
              smart home și protecție automată împotriva gazelor.
            </p>

            <div className="frame-41">
              <div className="feature-cards-6">
                <div className="frame-icon-3">
                  <img
                    className="image-3"
                    alt="Image"
                    src="/img/image-8-1.png"
                  />
                </div>

                <div className="frame-42">
                  <div className="text-6">
                    <div className="text-wrapper-52">
                      Senzori gaze și electrovalve
                    </div>

                    <p className="text-wrapper-53">
                      Montaj detectoare gaze naturale cu electrovalvă automată.
                      Siguranță completă pentru familia dvs.
                    </p>
                  </div>

                  <button className="btn-8">
                    <div className="text-wrapper-44">Sisteme Siguranță ➔</div>
                  </button>
                </div>
              </div>

              <div className="feature-cards-6">
                <div className="frame-icon-3">
                  <img
                    className="image-4"
                    alt="Image"
                    src="/img/image-9-1.png"
                  />
                </div>

                <div className="frame-42">
                  <div className="text-6">
                    <div className="text-wrapper-52">
                      Modernizare și Smart-Home
                    </div>

                    <p className="text-wrapper-53">
                      Modernizarea instalațiilor existente și integrarea cu
                      sisteme smart home. Eficiență energetică maximă.
                    </p>
                  </div>

                  <button className="btn-8">
                    <div className="text-wrapper-44">Modernizare ➔</div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-43">
            <div className="frame-44">
              <p className="exper-i-n-instala-ii-2">
                Experți în instalații
                <br />
                gaze din 1996
              </p>

              <p className="SC-CON-EST-IMPEX-SRL-2">
                SC CON EST IMPEX SRL este o companie cu tradiție în domeniul
                instalațiilor de gaze naturale și centrale termice, activând din
                1996 în Constanța și regiunea Dobrogea.
                <br />
                <br />
                Suntem autorizați ANRE pentru instalații gaze și certificați
                ISCIR (RVT și RSL) pentru centrale termice, garantând
                conformitatea completă cu reglementările naționale și europene.
              </p>

              <div className="text-4">
                <div className="frame-45">
                  <div className="element-11">
                    <Check9 className="check-5" color="#F2B821" />
                    <p className="autoriza-ii-complete-2">
                      <span className="text-wrapper-54">
                        Autorizații complete
                        <br />
                      </span>

                      <span className="text-wrapper-55">
                        ANRE și ISCIR (RVT și RSL)
                        <br />
                      </span>
                    </p>
                  </div>

                  <div className="element-11">
                    <Check9 className="check-5" color="#F2B821" />
                    <p className="div-7">
                      <span className="text-wrapper-54">
                        Experiență vastă
                        <br />
                      </span>

                      <span className="text-wrapper-55">
                        Peste 27 de ani pe piață
                      </span>
                    </p>
                  </div>
                </div>

                <div className="frame-45">
                  <div className="element-12">
                    <Check9 className="check-5" color="#F2B821" />
                    <p className="div-7">
                      <span className="text-wrapper-54">
                        Siguranță garantată
                        <br />
                      </span>

                      <span className="text-wrapper-55">
                        Standarde europene
                      </span>
                    </p>
                  </div>

                  <div className="element-11">
                    <Check9 className="check-5" color="#F2B821" />
                    <p className="div-7">
                      <span className="text-wrapper-54">
                        Reduceri speciale
                        <br />
                      </span>

                      <span className="text-wrapper-55">-25% pensionari</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <FeatureCardsYellow
              divClassName="feature-cards-yellow-3"
              text="Ani de experiență"
              text1="3400+"
              text2="Conformitate ANRE / ISCIR"
            />
          </div>

          <div className="frame-46">
            <div className="tag-4">
              <div className="text-wrapper-49">Aria operationala</div>
            </div>

            <p className="div-6">
              Servicii complete în Constanța și la nivel național
            </p>

            <p className="text-wrapper-45">
              Echipa CON EST deservește Constanța și regiunea Dobrogea cu
              intervenții rapide, precum și proiecte naționale de amploare.
            </p>
          </div>

          <div className="frame-47">
            <div className="feature-cards-image-2">
              <div className="frame-icon-5">
                <img
                  className="img-2"
                  alt="Acoperire primara"
                  src="/img/acoperire-primara-constanta-1.png"
                />
              </div>

              <div className="text-box-2">
                <p className="constan-a-acoperire-3">
                  <span className="text-wrapper-56">
                    Constanța
                    <br />
                  </span>

                  <span className="text-wrapper-57">Acoperire Primară</span>
                </p>

                <div className="rectangle-2" />

                <div className="mamaia-propriet-i-wrapper">
                  <p className="mamaia-propriet-i-2">
                    <span className="text-wrapper-58">
                      Mamaia
                      <br />
                    </span>

                    <span className="text-wrapper-59">
                      Proprietăți premium
                      <br />
                    </span>

                    <span className="text-wrapper-58">
                      <br />
                      Centrul Vechi
                      <br />
                    </span>

                    <span className="text-wrapper-59">
                      Modernizări
                      <br />
                    </span>

                    <span className="text-wrapper-58">
                      <br />
                      Km 4-5
                      <br />
                    </span>

                    <span className="text-wrapper-59">
                      Zone rezidențiale
                      <br />
                    </span>

                    <span className="text-wrapper-58">
                      <br />
                      Tomis
                      <br />
                    </span>

                    <span className="text-wrapper-59">Apartamente noi</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-cards-image-2">
              <div className="frame-icon-5">
                <img
                  className="img-2"
                  alt="Proiecte nationale"
                  src="/img/proiecte-nationale-1.png"
                />
              </div>

              <div className="text-box-2">
                <div className="constan-a-acoperire-4">Proiecte Naționale</div>

                <div className="rectangle-2" />

                <div className="mamaia-propriet-i-wrapper">
                  <p className="mamaia-propriet-i-2">
                    <span className="text-wrapper-58">
                      București
                      <br />
                    </span>

                    <span className="text-wrapper-59">
                      Proiecte mari
                      <br />
                      <br />
                    </span>

                    <span className="text-wrapper-58">
                      Cluj-Napoca
                      <br />
                    </span>

                    <span className="text-wrapper-59">
                      Dezvoltatori
                      <br />
                      <br />
                    </span>

                    <span className="text-wrapper-58">
                      Iași
                      <br />
                    </span>

                    <span className="text-wrapper-59">
                      Modernizări
                      <br />
                      <br />
                    </span>

                    <span className="text-wrapper-58">
                      Alte județe
                      <br />
                    </span>

                    <span className="text-wrapper-59">
                      La cerere
                      <br />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-cards-image-2">
              <div className="frame-icon-5">
                <img
                  className="img-2"
                  alt="Regiunea dobrogea"
                  src="/img/regiunea-dobrogea-1.png"
                />
              </div>

              <div className="text-box-2">
                <div className="constan-a-acoperire-4">Regiunea Dobrogea</div>

                <div className="rectangle-2" />

                <div className="mamaia-propriet-i-wrapper">
                  <p className="mamaia-propriet-i-2">
                    <span className="text-wrapper-58">
                      Năvodari
                      <br />
                    </span>

                    <span className="text-wrapper-59">
                      Case și vilet
                      <br />
                    </span>

                    <span className="text-wrapper-58">
                      <br />
                      Medgidia
                      <br />
                    </span>

                    <span className="text-wrapper-59">
                      Service centrale
                      <br />
                      <br />
                    </span>

                    <span className="text-wrapper-58">
                      Mangalia
                      <br />
                    </span>

                    <span className="text-wrapper-59">
                      Instalații sezonale
                      <br />
                      <br />
                    </span>

                    <span className="text-wrapper-58">
                      Eforie
                      <br />
                    </span>

                    <span className="text-wrapper-59">
                      Hoteluri
                      <br />
                      <br />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-48">
            <div className="tag-4">
              <div className="text-wrapper-49">URGENȚE</div>
            </div>

            <p className="div-6">
              <span className="text-wrapper-60">
                Urgențe gaze și centrale termice{" "}
              </span>

              <span className="text-wrapper-60">INTERVENȚII RAPIDE</span>

              <span className="text-wrapper-60"> 24/7</span>
            </p>

            <p className="text-wrapper-61">
              Când aveți o urgență cu gazele sau centrala termică, fiecare minut
              contează. Echipa CON EST IMPEX SRL este disponibilă NON-STOP
              pentru intervenții urgente în Constanța.
            </p>

            <div className="cards-2">
              <div className="feature-cards-small-2">
                <div className="div-8">
                  <div className="frame-icon-6">
                    <div className="icon-14">
                      <img
                        className="icon-15"
                        alt="Icon"
                        src="/img/icon-18.png"
                      />
                    </div>
                  </div>

                  <div className="div-9">
                    <div className="modernizare-smart-2">Scăpări De Gaze</div>

                    <div className="text-wrapper-62">Intervenție imediată</div>
                  </div>
                </div>
              </div>

              <div className="feature-cards-small-2">
                <div className="div-8">
                  <div className="frame-icon-6">
                    <div className="icon-14">
                      <img
                        className="icon-15"
                        alt="Icon"
                        src="/img/icon-17.png"
                      />
                    </div>
                  </div>

                  <div className="div-9">
                    <div className="modernizare-smart-2">Centrale Oprite</div>

                    <div className="text-wrapper-62">Remediere rapidă</div>
                  </div>
                </div>
              </div>

              <div className="feature-cards-small-2">
                <div className="div-8">
                  <div className="frame-icon-6">
                    <div className="icon-14">
                      <img
                        className="icon-15"
                        alt="Icon"
                        src="/img/icon-18.png"
                      />
                    </div>
                  </div>

                  <div className="div-9">
                    <div className="modernizare-smart-2">Presiune Scăzută</div>

                    <div className="text-wrapper-62">Diagnosticare sistem</div>
                  </div>
                </div>
              </div>

              <div className="feature-cards-small-2">
                <div className="div-8">
                  <div className="frame-icon-6">
                    <div className="icon-14">
                      <img
                        className="icon-15"
                        alt="Icon"
                        src="/img/icon-17.png"
                      />
                    </div>
                  </div>

                  <div className="div-9">
                    <div className="modernizare-smart-2">Detecție Probleme</div>

                    <div className="text-wrapper-62">Verificări siguranță</div>
                  </div>
                </div>
              </div>

              <div className="feature-cards-small-2">
                <div className="div-8">
                  <div className="frame-icon-6">
                    <div className="icon-14">
                      <img
                        className="icon-15"
                        alt="Icon"
                        src="/img/icon-18.png"
                      />
                    </div>
                  </div>

                  <div className="div-9">
                    <div className="modernizare-smart-2">Remediere Avarii</div>

                    <div className="text-wrapper-62">Piese originale</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="title-2">
              <div className="text-wrapper-63">URGENȚE 24/7: 0744-579-715</div>

              <div className="apela-i-acum-pentru-wrapper">
                <p className="span-wrapper">
                  <span className="text-wrapper-64">
                    Apelați acum pentru urgențe.
                    <br />
                    Timp de răspuns rapid ore în Constanța
                    <br />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <footer className="footer-2">
            <div className="links-2">
              <div className="element-13">
                <ConestLogoFull
                  className="instance-node"
                  flamedrop="/img/flamedrop-2.svg"
                  overlapGroupClassName="conest-logo-full-5"
                />
                <div className="frame-49">
                  <div className="element-14">
                    <p className="instala-ii-gaze-i-2">
                      Instalații gaze și centrale termice
                      <br />
                      Fondat 1996 | Autorizat ANRE și ISCIR
                      <br />
                      Constanța, România
                    </p>
                  </div>
                </div>
              </div>

              <div className="element-15">
                <div className="text-wrapper-65">Servicii</div>

                <div className="frame-49">
                  <div className="element-14">
                    <div className="la-chevron-circle-2">
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="/img/vector-5.svg"
                      />
                    </div>

                    <a
                      className="text-wrapper-66"
                      href="instalatii-gaze-naturale.html"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Instalații Gaze Naturale
                    </a>
                  </div>

                  <div className="element-14">
                    <div className="la-chevron-circle-2">
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="/img/vector-5.svg"
                      />
                    </div>

                    <div className="text-wrapper-66">Centrale Termice</div>
                  </div>

                  <div className="element-14">
                    <div className="la-chevron-circle-2">
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="/img/vector-5.svg"
                      />
                    </div>

                    <div className="text-wrapper-66">Urgențe 24/7</div>
                  </div>

                  <div className="element-14">
                    <div className="la-chevron-circle-2">
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="/img/vector-5.svg"
                      />
                    </div>

                    <div className="text-wrapper-66">Revizii Și Verificări</div>
                  </div>

                  <div className="element-14">
                    <div className="la-chevron-circle-2">
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="/img/vector-5.svg"
                      />
                    </div>

                    <div className="text-wrapper-66">Revizii Și Verificări</div>
                  </div>

                  <div className="element-14">
                    <div className="la-chevron-circle-2">
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="/img/vector-5.svg"
                      />
                    </div>

                    <div className="text-wrapper-66">
                      Senzori Și Electrovalve
                    </div>
                  </div>
                </div>
              </div>

              <div className="element-16">
                <div className="text-wrapper-67">Zone Deservite</div>

                <div className="frame-50">
                  <div className="element-17">
                    <div className="la-chevron-circle-2">
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="/img/vector-9-2.svg"
                      />
                    </div>

                    <div className="text-wrapper-68">Constanța Și Mamaia</div>
                  </div>

                  <div className="element-17">
                    <div className="la-chevron-circle-2">
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="/img/vector-9-2.svg"
                      />
                    </div>

                    <div className="text-wrapper-68">Năvodari Și Medgidia</div>
                  </div>

                  <div className="element-17">
                    <div className="la-chevron-circle-2">
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="/img/vector-9-2.svg"
                      />
                    </div>

                    <div className="text-wrapper-68">Mangalia Și Eforie</div>
                  </div>

                  <div className="element-17">
                    <div className="la-chevron-circle-2">
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="/img/vector-9-2.svg"
                      />
                    </div>

                    <div className="text-wrapper-68">Lucrări Naționale</div>
                  </div>
                </div>
              </div>

              <div className="element-18">
                <div className="text-wrapper-67">Contact &amp; Legal</div>

                <div className="frame-49">
                  <div className="element-14">
                    <div className="div-10">
                      <img
                        className="vector-21"
                        alt="Vector"
                        src="/img/vector-10.svg"
                      />
                    </div>

                    <div className="text-wrapper-66">Constanța, România</div>
                  </div>

                  <div className="element-14">
                    <div className="div-10">
                      <img
                        className="vector-22"
                        alt="Vector"
                        src="/img/vector-11-2.svg"
                      />
                    </div>

                    <div className="text-wrapper-69">
                      contact@conest-gaze-centrale.ro
                    </div>
                  </div>

                  <div className="element-14">
                    <div className="div-10">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-3">
                          <img
                            className="vector-23"
                            alt="Vector"
                            src="/img/vector-15-2.svg"
                          />

                          <img
                            className="vector-24"
                            alt="Vector"
                            src="/img/vector-16-2.svg"
                          />

                          <img
                            className="vector-25"
                            alt="Vector"
                            src="/img/vector-17-2.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-wrapper-69">0xxx-xxx-xxx</div>
                  </div>

                  <div className="element-14">
                    <div className="div-10">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-3">
                          <img
                            className="vector-23"
                            alt="Vector"
                            src="/img/vector-15-2.svg"
                          />

                          <img
                            className="vector-24"
                            alt="Vector"
                            src="/img/vector-16-2.svg"
                          />

                          <img
                            className="vector-25"
                            alt="Vector"
                            src="/img/vector-17-2.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-wrapper-69">Urgențe: 0xxx-xxx-xxx</div>
                  </div>

                  <div className="element-14">
                    <div className="div-10">
                      <img
                        className="vector-26"
                        alt="Vector"
                        src="/img/vector-18-2.svg"
                      />
                    </div>

                    <div className="text-wrapper-69">24/7</div>
                  </div>

                  <div className="element-14">
                    <div className="la-chevron-circle-2">
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="/img/vector-21-2.svg"
                      />
                    </div>

                    <div className="text-wrapper-66">
                      Politica De Confidențialitate
                    </div>
                  </div>

                  <div className="element-14">
                    <div className="la-chevron-circle-2">
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="/img/vector-21-2.svg"
                      />
                    </div>

                    <div className="text-wrapper-66">Termeni Și Condiții</div>
                  </div>

                  <div className="element-14">
                    <div className="la-chevron-circle-2">
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="/img/vector-21-2.svg"
                      />
                    </div>

                    <div className="text-wrapper-66">
                      Certificări Anre &amp; Iscir
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="element-CON-EST-IMPEX-2">
              © 2025 CON EST IMPEX SRL. Toate drepturile rezervate. | Instalații
              gaze și centrale termice Constanța din 1996
              <br />
              Autorizat ANRE • Certificat ISCIR (RVT și RSL) • Conform
              standardelor europene
            </p>
          </footer>
        </>
      )}

      {screenWidth < 1600 && (
        <>
          <DivWrapper />
          <Div />
          <SectionComponentNode />
          <Frame1 />
          <Frame2 />
          <Frame3 />
          <Footer />
        </>
      )}
    </div>
  );
};
