"use client";

import React from "react";
import { ConestLogoFull } from "../../../../components/ConestLogoFull";
import "./style.css";

export const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="conest-logo-full-wrapper">
        <ConestLogoFull
          className="conest-logo-full-instance"
          flamedrop="/img/flamedrop.svg"
          overlapGroupClassName="design-component-instance-node"
        />
      </div>

      <div className="navigation">
        <div className="text-wrapper">Servicii</div>

        <div className="text-wrapper">Despre Noi</div>

        <div className="text-wrapper">Despre Noi</div>

        <div className="button">
          <div className="copy">COMENZI</div>

          <img
            className="phoneicon"
            alt="Phoneicon"
            src="/img/phoneicon-1.svg"
          />

          <div className="copy">0722 619 097</div>
        </div>
      </div>
    </div>
  );
};
