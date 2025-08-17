"use client";

import React from "react";
import Link from "next/link";
import { ConestLogoFull } from "../../../../components/ConestLogoFull";
import "./style.css";

export const TopNaviRevizie = () => {
  return (
    <div className="top-navi">
      <div className="top-2">
        <div className="logo-2">
          <div className="frame-26">
            <ConestLogoFull
              className="conest-logo-full-4"
              flamedrop="/img/flamedrop-3.svg"
              overlapGroupClassName="conest-logo-full-5"
            />
          </div>
        </div>

        <div className="nav-right-wrapper">
          <div className="nav-right">
            <div className="right">
              <div className="div-wrapper-2">
                <Link href="/" className="text-wrapper-63">Acasă</Link>
              </div>

              <div className="div-wrapper-2">
                <Link href="/servicii" className="text-wrapper-63">Servicii</Link>
              </div>

              <div className="div-wrapper-2">
                <div className="text-wrapper-63 active">Revizii</div>
              </div>

              <div className="div-wrapper-2">
                <div className="text-wrapper-63">Contact</div>
              </div>

              <button className="button-2">
                <button className="btn-6">
                  <img
                    className="streamline-travel"
                    alt="Streamline travel"
                    src="/img/streamline-travel-hotel-air-conditioner-heating-ac-air-hvac-cool.svg"
                  />

                  <div className="element-xxx-xxx">0722 619 097</div>
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};