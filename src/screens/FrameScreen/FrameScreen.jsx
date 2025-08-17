"use client";

import React from "react";
import Link from "next/link";
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
                overlapGroupClassName="conest-logo-full-6"
              />
            </div>

            <div className="navigation-2">
              <div className="text-wrapper-75">Servicii</div>

              <div className="text-wrapper-75">Despre Noi</div>

              <div className="text-wrapper-75">Despre Noi</div>

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
                Instalații gaze și centrale termice constanța
              </p>

              <p className="autoriza-i-ANRE-2">
                Autorizați ANRE &amp; ISCIR din 1996
              </p>

              <div className="text-13">
                <div className="why-choose-4">
                  <div className="element-21">
                    <Check9 className="check-instance" color="#F2B821" />
                    <div className="text-wrapper-77">Autorizat Anre</div>
                  </div>

                  <div className="element-21">
                    <Check9 className="check-instance" color="#F2B821" />
                    <div className="text-wrapper-77">Certificat Iscir</div>
                  </div>

                  <div className="element-21">
                    <Check9 className="check-instance" color="#F2B821" />
                    <div className="text-wrapper-77">Garanție 2 Ani</div>
                  </div>
                </div>
              </div>

              <div className="text-14">
                <div className="CTA-buttons-2">
                  <button className="btn-8">
                    <div className="icon-10" />

                    <div className="text-wrapper-78">Cere Ofertă</div>
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
            {screenWidth < 1600 && <>Montaj și service autorizat</>}

            {screenWidth >= 1600 && <>ANRE și ISCIR</>}
          </div>
        </div>

        {screenWidth >= 1600 && (
          <>
            <p className="div-12">
              Soluții complete pentru instalații gaze și centrale termice
            </p>

            <p className="text-wrapper-79">
              Cu o experiență de peste 27 de ani, oferim servicii complete
              autorizate ANRE și ISCIR pentru toate nevoile dvs. de încălzire și
              instalații gaze.
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
                    <Link href="/revizie" className="frame-44">
                      <button className="btn-9">
                        <div className="text-wrapper-82">
                          Programează Revizie ➔
                        </div>
                      </button>
                    </Link>
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
          <div className="frame-46">
            <div className="tag-9">
              <div className="text-wrapper-83">Montaj și service autorizat</div>
            </div>

            <img className="logos" alt="Logos" src="/img/logos-1.svg" />
          </div>

          <div className="frame-47">
            <div className="frame-48">
              <div className="feature-cards-6">
                <div className="frame-40">
                  <div className="frame-41">
                    <div className="frame-icon-4">
                      <img
                        className="icon-13"
                        alt="Icon"
                        src="/img/icon-18.png"
                      />
                    </div>

                    <div className="frame-42">
                      <div className="text-wrapper-80">
                        Intervenții Urgente 24/7
                      </div>

                      <p className="text-wrapper-81">
                        Service non-stop pentru urgențe gaze și centrale
                        termice. Timp de răspuns rapid în Constanța și
                        împrejurimi.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="frame-49">
                  <div className="frame-50">
                    <button className="btn-10">
                      <div className="text-wrapper-84">Urgențe Non-Stop ➔</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-51">
            <div className="tag-10">
              <div className="text-wrapper-85">ANRE și ISCIR</div>
            </div>

            <p className="div-12">Siguranță și eficiență pentru casa ta</p>

            <p className="text-wrapper-79">
              Integram cele mai noi tehnologii pentru a vă transforma locuința
              într-un spațiu mai sigur și mai eficient energetic, cu sisteme
              smart home și protecție automată împotriva gazelor.
            </p>

            <div className="frame-52">
              <div className="feature-cards-7">
                <div className="frame-icon-3">
                  <img
                    className="image-3"
                    alt="Image"
                    src="/img/image-8-1.png"
                  />
                </div>

                <div className="frame-53">
                  <div className="text-15">
                    <div className="text-wrapper-86">
                      Senzori gaze și electrovalve
                    </div>

                    <p className="text-wrapper-87">
                      Montaj detectoare gaze naturale cu electrovalvă automată.
                      Siguranță completă pentru familia dvs.
                    </p>
                  </div>

                  <button className="btn-11">
                    <div className="text-wrapper-78">Sisteme Siguranță ➔</div>
                  </button>
                </div>
              </div>

              <div className="feature-cards-7">
                <div className="frame-icon-3">
                  <img
                    className="image-4"
                    alt="Image"
                    src="/img/image-9-1.png"
                  />
                </div>

                <div className="frame-53">
                  <div className="text-15">
                    <div className="text-wrapper-86">
                      Modernizare și Smart-Home
                    </div>

                    <p className="text-wrapper-87">
                      Modernizarea instalațiilor existente și integrarea cu
                      sisteme smart home. Eficiență energetică maximă.
                    </p>
                  </div>

                  <button className="btn-11">
                    <div className="text-wrapper-78">Modernizare ➔</div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-54">
            <div className="frame-55">
              <p className="exper-i-n-instala-ii-3">
                Experți în instalații
                <br />
                gaze din 1996
              </p>

              <p className="SC-CON-EST-IMPEX-SRL-3">
                SC CON EST IMPEX SRL este o companie cu tradiție în domeniul
                instalațiilor de gaze naturale și centrale termice, activând din
                1996 în Constanța și regiunea Dobrogea.
                <br />
                <br />
                Suntem autorizați ANRE pentru instalații gaze și certificați
                ISCIR (RVT și RSL) pentru centrale termice, garantând
                conformitatea completă cu reglementările naționale și europene.
              </p>

              <div className="text-13">
                <div className="frame-56">
                  <div className="element-21">
                    <Check9 className="check-instance" color="#F2B821" />
                    <p className="autoriza-ii-complete-3">
                      <span className="text-wrapper-88">
                        Autorizații complete
                        <br />
                      </span>

                      <span className="text-wrapper-89">
                        ANRE și ISCIR (RVT și RSL)
                        <br />
                      </span>
                    </p>
                  </div>

                  <div className="element-21">
                    <Check9 className="check-instance" color="#F2B821" />
                    <p className="div-13">
                      <span className="text-wrapper-88">
                        Experiență vastă
                        <br />
                      </span>

                      <span className="text-wrapper-89">
                        Peste 27 de ani pe piață
                      </span>
                    </p>
                  </div>
                </div>

                <div className="frame-56">
                  <div className="element-22">
                    <Check9 className="check-instance" color="#F2B821" />
                    <p className="div-13">
                      <span className="text-wrapper-88">
                        Siguranță garantată
                        <br />
                      </span>

                      <span className="text-wrapper-89">
                        Standarde europene
                      </span>
                    </p>
                  </div>

                  <div className="element-21">
                    <Check9 className="check-instance" color="#F2B821" />
                    <p className="div-13">
                      <span className="text-wrapper-88">
                        Reduceri speciale
                        <br />
                      </span>

                      <span className="text-wrapper-89">-25% pensionari</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <FeatureCardsYellow
              divClassName="feature-cards-yellow-4"
              text="Ani de experiență"
              text1="3400+"
              text2="Conformitate ANRE / ISCIR"
            />
          </div>

          <div className="frame-57">
            <div className="tag-9">
              <div className="text-wrapper-83">Aria operationala</div>
            </div>

            <p className="div-12">
              Servicii complete în Constanța și la nivel național
            </p>

            <p className="text-wrapper-79">
              Echipa CON EST deservește Constanța și regiunea Dobrogea cu
              intervenții rapide, precum și proiecte naționale de amploare.
            </p>
          </div>

          <div className="frame-58">
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
                  <span className="text-wrapper-90">
                    Constanța
                    <br />
                  </span>

                  <span className="text-wrapper-91">Acoperire Primară</span>
                </p>

                <div className="rectangle-4" />

                <div className="mamaia-propriet-i-wrapper">
                  <p className="mamaia-propriet-i-2">
                    <span className="text-wrapper-92">
                      Mamaia
                      <br />
                    </span>

                    <span className="text-wrapper-93">
                      Proprietăți premium
                      <br />
                    </span>

                    <span className="text-wrapper-92">
                      <br />
                      Centrul Vechi
                      <br />
                    </span>

                    <span className="text-wrapper-93">
                      Modernizări
                      <br />
                    </span>

                    <span className="text-wrapper-92">
                      <br />
                      Km 4-5
                      <br />
                    </span>

                    <span className="text-wrapper-93">
                      Zone rezidențiale
                      <br />
                    </span>

                    <span className="text-wrapper-92">
                      <br />
                      Tomis
                      <br />
                    </span>

                    <span className="text-wrapper-93">Apartamente noi</span>
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

                <div className="rectangle-4" />

                <div className="mamaia-propriet-i-wrapper">
                  <p className="mamaia-propriet-i-2">
                    <span className="text-wrapper-92">
                      București
                      <br />
                    </span>

                    <span className="text-wrapper-93">
                      Proiecte mari
                      <br />
                      <br />
                    </span>

                    <span className="text-wrapper-92">
                      Cluj-Napoca
                      <br />
                    </span>

                    <span className="text-wrapper-93">
                      Dezvoltatori
                      <br />
                      <br />
                    </span>

                    <span className="text-wrapper-92">
                      Iași
                      <br />
                    </span>

                    <span className="text-wrapper-93">
                      Modernizări
                      <br />
                      <br />
                    </span>

                    <span className="text-wrapper-92">
                      Alte județe
                      <br />
                    </span>

                    <span className="text-wrapper-93">
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

                <div className="rectangle-4" />

                <div className="mamaia-propriet-i-wrapper">
                  <p className="mamaia-propriet-i-2">
                    <span className="text-wrapper-92">
                      Năvodari
                      <br />
                    </span>

                    <span className="text-wrapper-93">
                      Case și vilet
                      <br />
                    </span>

                    <span className="text-wrapper-92">
                      <br />
                      Medgidia
                      <br />
                    </span>

                    <span className="text-wrapper-93">
                      Service centrale
                      <br />
                      <br />
                    </span>

                    <span className="text-wrapper-92">
                      Mangalia
                      <br />
                    </span>

                    <span className="text-wrapper-93">
                      Instalații sezonale
                      <br />
                      <br />
                    </span>

                    <span className="text-wrapper-92">
                      Eforie
                      <br />
                    </span>

                    <span className="text-wrapper-93">
                      Hoteluri
                      <br />
                      <br />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-59">
            <div className="tag-9">
              <div className="text-wrapper-83">URGENȚE</div>
            </div>

            <p className="div-12">
              <span className="text-wrapper-94">
                Urgențe gaze și centrale termice{" "}
              </span>

              <span className="text-wrapper-94">INTERVENȚII RAPIDE</span>

              <span className="text-wrapper-94"> 24/7</span>
            </p>

            <p className="text-wrapper-95">
              Când aveți o urgență cu gazele sau centrala termică, fiecare minut
              contează. Echipa CON EST IMPEX SRL este disponibilă NON-STOP
              pentru intervenții urgente în Constanța.
            </p>

            <div className="cards-3">
              <div className="feature-cards-small-3">
                <div className="div-14">
                  <div className="frame-icon-6">
                    <div className="icon-14">
                      <img
                        className="icon-15"
                        alt="Icon"
                        src="/img/icon-18.png"
                      />
                    </div>
                  </div>

                  <div className="div-15">
                    <div className="modernizare-smart-3">Scăpări De Gaze</div>

                    <div className="text-wrapper-96">Intervenție imediată</div>
                  </div>
                </div>
              </div>

              <div className="feature-cards-small-3">
                <div className="div-14">
                  <div className="frame-icon-6">
                    <div className="icon-14">
                      <img
                        className="icon-15"
                        alt="Icon"
                        src="/img/icon-17.png"
                      />
                    </div>
                  </div>

                  <div className="div-15">
                    <div className="modernizare-smart-3">Centrale Oprite</div>

                    <div className="text-wrapper-96">Remediere rapidă</div>
                  </div>
                </div>
              </div>

              <div className="feature-cards-small-3">
                <div className="div-14">
                  <div className="frame-icon-6">
                    <div className="icon-14">
                      <img
                        className="icon-15"
                        alt="Icon"
                        src="/img/icon-18.png"
                      />
                    </div>
                  </div>

                  <div className="div-15">
                    <div className="modernizare-smart-3">Presiune Scăzută</div>

                    <div className="text-wrapper-96">Diagnosticare sistem</div>
                  </div>
                </div>
              </div>

              <div className="feature-cards-small-3">
                <div className="div-14">
                  <div className="frame-icon-6">
                    <div className="icon-14">
                      <img
                        className="icon-15"
                        alt="Icon"
                        src="/img/icon-17.png"
                      />
                    </div>
                  </div>

                  <div className="div-15">
                    <div className="modernizare-smart-3">Detecție Probleme</div>

                    <div className="text-wrapper-96">Verificări siguranță</div>
                  </div>
                </div>
              </div>

              <div className="feature-cards-small-3">
                <div className="div-14">
                  <div className="frame-icon-6">
                    <div className="icon-14">
                      <img
                        className="icon-15"
                        alt="Icon"
                        src="/img/icon-18.png"
                      />
                    </div>
                  </div>

                  <div className="div-15">
                    <div className="modernizare-smart-3">Remediere Avarii</div>

                    <div className="text-wrapper-96">Piese originale</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="title-8">
              <div className="text-wrapper-97">URGENȚE 24/7: 0744-579-715</div>

              <div className="apela-i-acum-pentru-wrapper">
                <p className="span-wrapper">
                  <span className="text-wrapper-98">
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
              <div className="element-23">
                <ConestLogoFull
                  className="instance-node"
                  flamedrop="/img/flamedrop-2.svg"
                  overlapGroupClassName="conest-logo-full-7"
                />
                <div className="frame-60">
                  <div className="element-24">
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

              <div className="element-25">
                <div className="text-wrapper-99">Servicii</div>

                <div className="frame-60">
                  <div className="element-24">
                    <div className="la-chevron-circle-3">
                      <img
                        className="vector-29"
                        alt="Vector"
                        src="/img/vector-6.svg"
                      />
                    </div>

                    <a
                      className="text-wrapper-100"
                      href="instalatii-gaze-naturale.html"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Instalații Gaze Naturale
                    </a>
                  </div>

                  <div className="element-24">
                    <div className="la-chevron-circle-3">
                      <img
                        className="vector-29"
                        alt="Vector"
                        src="/img/vector-6.svg"
                      />
                    </div>

                    <div className="text-wrapper-100">Centrale Termice</div>
                  </div>

                  <div className="element-24">
                    <div className="la-chevron-circle-3">
                      <img
                        className="vector-29"
                        alt="Vector"
                        src="/img/vector-6.svg"
                      />
                    </div>

                    <div className="text-wrapper-100">Urgențe 24/7</div>
                  </div>

                  <div className="element-24">
                    <div className="la-chevron-circle-3">
                      <img
                        className="vector-29"
                        alt="Vector"
                        src="/img/vector-6.svg"
                      />
                    </div>

                    <div className="text-wrapper-100">
                      Revizii Și Verificări
                    </div>
                  </div>

                  <div className="element-24">
                    <div className="la-chevron-circle-3">
                      <img
                        className="vector-29"
                        alt="Vector"
                        src="/img/vector-6.svg"
                      />
                    </div>

                    <div className="text-wrapper-100">
                      Revizii Și Verificări
                    </div>
                  </div>

                  <div className="element-24">
                    <div className="la-chevron-circle-3">
                      <img
                        className="vector-29"
                        alt="Vector"
                        src="/img/vector-6.svg"
                      />
                    </div>

                    <div className="text-wrapper-100">
                      Senzori Și Electrovalve
                    </div>
                  </div>
                </div>
              </div>

              <div className="element-26">
                <div className="text-wrapper-101">Zone Deservite</div>

                <div className="frame-61">
                  <div className="element-27">
                    <div className="la-chevron-circle-3">
                      <img
                        className="vector-29"
                        alt="Vector"
                        src="/img/vector-10-2.svg"
                      />
                    </div>

                    <div className="text-wrapper-102">Constanța Și Mamaia</div>
                  </div>

                  <div className="element-27">
                    <div className="la-chevron-circle-3">
                      <img
                        className="vector-29"
                        alt="Vector"
                        src="/img/vector-10-2.svg"
                      />
                    </div>

                    <div className="text-wrapper-102">Năvodari Și Medgidia</div>
                  </div>

                  <div className="element-27">
                    <div className="la-chevron-circle-3">
                      <img
                        className="vector-29"
                        alt="Vector"
                        src="/img/vector-10-2.svg"
                      />
                    </div>

                    <div className="text-wrapper-102">Mangalia Și Eforie</div>
                  </div>

                  <div className="element-27">
                    <div className="la-chevron-circle-3">
                      <img
                        className="vector-29"
                        alt="Vector"
                        src="/img/vector-10-2.svg"
                      />
                    </div>

                    <div className="text-wrapper-102">Lucrări Naționale</div>
                  </div>
                </div>
              </div>

              <div className="element-28">
                <div className="text-wrapper-101">Contact &amp; Legal</div>

                <div className="frame-60">
                  <div className="element-24">
                    <div className="div-16">
                      <img
                        className="vector-30"
                        alt="Vector"
                        src="/img/vector-11.svg"
                      />
                    </div>

                    <div className="text-wrapper-100">Constanța, România</div>
                  </div>

                  <div className="element-24">
                    <div className="div-16">
                      <img
                        className="vector-31"
                        alt="Vector"
                        src="/img/vector-12.svg"
                      />
                    </div>

                    <div className="text-wrapper-103">
                      contact@conest-gaze-centrale.ro
                    </div>
                  </div>

                  <div className="element-24">
                    <div className="div-16">
                      <div className="group-6">
                        <div className="overlap-group-5">
                          <img
                            className="vector-32"
                            alt="Vector"
                            src="/img/vector-16-2.svg"
                          />

                          <img
                            className="vector-33"
                            alt="Vector"
                            src="/img/vector-17-2.svg"
                          />

                          <img
                            className="vector-34"
                            alt="Vector"
                            src="/img/vector-18-2.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-wrapper-103">0xxx-xxx-xxx</div>
                  </div>

                  <div className="element-24">
                    <div className="div-16">
                      <div className="group-6">
                        <div className="overlap-group-5">
                          <img
                            className="vector-32"
                            alt="Vector"
                            src="/img/vector-16-2.svg"
                          />

                          <img
                            className="vector-33"
                            alt="Vector"
                            src="/img/vector-17-2.svg"
                          />

                          <img
                            className="vector-34"
                            alt="Vector"
                            src="/img/vector-18-2.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-wrapper-103">
                      Urgențe: 0xxx-xxx-xxx
                    </div>
                  </div>

                  <div className="element-24">
                    <div className="div-16">
                      <img
                        className="vector-35"
                        alt="Vector"
                        src="/img/vector-19-2.svg"
                      />
                    </div>

                    <div className="text-wrapper-103">24/7</div>
                  </div>

                  <div className="element-24">
                    <div className="la-chevron-circle-3">
                      <img
                        className="vector-29"
                        alt="Vector"
                        src="/img/vector-22.svg"
                      />
                    </div>

                    <div className="text-wrapper-100">
                      Politica De Confidențialitate
                    </div>
                  </div>

                  <div className="element-24">
                    <div className="la-chevron-circle-3">
                      <img
                        className="vector-29"
                        alt="Vector"
                        src="/img/vector-22.svg"
                      />
                    </div>

                    <div className="text-wrapper-100">Termeni Și Condiții</div>
                  </div>

                  <div className="element-24">
                    <div className="la-chevron-circle-3">
                      <img
                        className="vector-29"
                        alt="Vector"
                        src="/img/vector-22.svg"
                      />
                    </div>

                    <div className="text-wrapper-100">
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
