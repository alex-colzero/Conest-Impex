"use client";

import React from "react";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="frame-10">
        <div className="feature-cards-2">
          <div className="frame-11">
            <div className="frame-12">
              <div className="icon-wrapper">
                <img className="icon-3" alt="Icon" src="/img/icon-4.png" />
              </div>

              <div className="frame-13">
                <div className="text-wrapper-10">Intervenții Urgente 24/7</div>

                <p className="text-wrapper-11">
                  Service non-stop pentru urgențe gaze și centrale termice. Timp
                  de răspuns rapid în Constanța și împrejurimi.
                </p>
              </div>
            </div>
          </div>

          <div className="frame-14">
            <div className="frame-15">
              <button className="btn-3">
                <div className="text-wrapper-12">Urgențe Non-Stop ➔</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
