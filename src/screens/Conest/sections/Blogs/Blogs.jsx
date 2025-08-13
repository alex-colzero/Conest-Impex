"use client";

import React from "react";
import "./style.css";

export const Blogs = () => {
  return (
    <div className="blogs">
      <div className="top">
        <div className="title">
          <div className="tag">
            <div className="text-wrapper-6">Bloguri</div>
          </div>

          <div className="post-ri-recente">Postări Recente</div>
        </div>
      </div>

      <div className="latest-blogs">
        <div className="div-3">
          <img
            className="img-2"
            alt="Costul de mentenanta"
            src="/img/costul-de-mentenanta.png"
          />

          <div className="div-3">
            <div className="text">
              <div className="text-wrapper-7">July 20, 2025</div>

              <div className="text">
                <p className="p">Costul real al mentenanței unei centrale</p>

                <p className="div-4">
                  <span className="span">
                    O centrală întreținută corect consumă mai puțin și durează
                    mai mult. Vezi ce verificări anuale sunt esențiale și cum
                    poți economisi bani pe termen lung...{" "}
                  </span>

                  <span className="text-wrapper-8">Read more</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="div-3">
          <img
            className="img-3"
            alt="Revizia centrale"
            src="/img/revizia-centrale.png"
          />

          <div className="text-btn">
            <div className="text">
              <div className="text-wrapper-7">July 20, 2025</div>

              <div className="text">
                <p className="p">De ce să faci revizia instalației de gaze</p>

                <p className="div-4">
                  <span className="span">
                    Siguranța casei tale depinde de verificări periodice. Află
                    ce riscuri previi și de ce legea impune aceste controale...{" "}
                  </span>

                  <span className="text-wrapper-8">Read more</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="div-3">
          <img
            className="img-2"
            alt="Centrale bune"
            src="/img/centrale-bune.png"
          />

          <div className="text-btn">
            <div className="text">
              <div className="text-wrapper-7">July 20, 2025</div>

              <div className="text">
                <p className="p">
                  Cele mai bune centrale termice pentru ierni grele
                </p>

                <p className="div-4">
                  <span className="span">
                    Alegerea corectă a unei centrale poate face diferența între
                    confort și facturi mari. Descoperă modelele recomandate
                    pentru eficiență maximă și durată lungă de viață…{" "}
                  </span>

                  <span className="text-wrapper-8">Read more</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="div-3">
          <img
            className="img-3"
            alt="Sfaturi economisire"
            src="/img/sfaturi-economisire.png"
          />

          <div className="text-btn">
            <div className="text">
              <div className="text-wrapper-7">July 20, 2025</div>

              <div className="text">
                <p className="p">Sfaturi pentru economisirea gazului acasă</p>

                <p className="div-4">
                  <span className="span">
                    Micile schimbări în modul de utilizare a centralei pot
                    reduce semnificativ costurile. Descoperă câteva trucuri
                    simple și eficiente...{" "}
                  </span>

                  <span className="text-wrapper-8">Read more</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="btn">
        <div className="text-wrapper-9">Arata tot ➔</div>
      </button>
    </div>
  );
};
