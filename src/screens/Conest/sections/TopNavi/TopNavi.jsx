"use client";

import React from "react";
import { ConestLogoFull } from "../../../../components/ConestLogoFull";
import "./style.css";

export const TopNavi = () => {
  return (
    <div className="top-navi">
      <div className="top-2">
        <div className="logo">
          <ConestLogoFull
            className="conest-logo-full-2"
            conest="/img/conest2-2.svg"
            conest1="/img/conest4-2.svg"
            img="/img/conest3-2.svg"
          />
        </div>

        <div className="menu">
          <div className="nav-right">
            <div className="right">
              <div className="div-wrapper-2">
                <div className="text-wrapper-40">Servicii</div>
              </div>

              <div className="div-wrapper-2">
                <div className="text-wrapper-40">Despre Noi</div>
              </div>

              <div className="div-wrapper-2">
                <div className="text-wrapper-40">Zone Deservite</div>
              </div>

              <div className="div-wrapper-2">
                <div className="text-wrapper-40">Contact</div>
              </div>

              <button className="btn-wrapper">
                <button className="btn-5">
                  <img
                    className="streamline-travel"
                    alt="Streamline travel"
                    src="/img/streamline-travel-hotel-air-conditioner-heating-ac-air-hvac-cool.svg"
                  />

                  <div className="element-xxx-xxx-2">0758 XXX XXX</div>
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
