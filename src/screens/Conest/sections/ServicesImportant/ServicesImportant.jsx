"use client";

import React from "react";
import "./style.css";

export const ServicesImportant = () => {
  return (
    <div className="services-important">
      <div className="image-3" />

      <div className="card-important">
        <div className="feature-cards-2">
          <div className="flame-big-wrapper">
            <div className="icon-wrapper">
              <img className="icon-3" alt="Icon" src="/img/icon-6.png" />
            </div>
          </div>

          <div className="text-8">
            <div className="centrale-termice-nc">Intervenții Urgente 24/7</div>

            <p className="montaj-i-autorizare">
              Service non-stop pentru urgențe gaze și centrale termice. Timp de
              răspuns sub 2 ore în Constanța și împrejurimi.
            </p>
          </div>

          <button className="button">
            <div className="servicii-centrale-2">Urgențe Non-Stop ➔</div>
          </button>
        </div>
      </div>
    </div>
  );
};
