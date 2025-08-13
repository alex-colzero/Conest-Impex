"use client";

import React from "react";
import "./style.css";

export const OurWorks = () => {
  return (
    <div className="our-works">
      <div className="testimonials">
        <div className="title-reviews">
          <div className="title-4">
            <div className="tag-3">
              <div className="text-wrapper-22">Păreri</div>
            </div>

            <div className="text-wrapper-23">
              Aprecierile clienților ne onorează.
            </div>
          </div>

          <div className="reviews">
            <div className="review">
              <p className="text-wrapper-24">
                Oameni prompți și profesioniști, prețuri echitabile
              </p>

              <div className="name-reviews">
                <div className="text-wrapper-25">Vali Enache</div>

                <img
                  className="reviews-2"
                  alt="Reviews"
                  src="/img/reviews.svg"
                />
              </div>
            </div>

            <div className="review">
              <div className="text-wrapper-24">Totul perfect.Multumim</div>

              <div className="name-reviews">
                <div className="text-wrapper-25">Cristina Pavel</div>

                <img
                  className="reviews-2"
                  alt="Reviews"
                  src="/img/reviews-1.svg"
                />
              </div>
            </div>

            <div className="review">
              <div className="text-wrapper-24">Super profi.</div>

              <div className="name-reviews">
                <div className="text-wrapper-25">Otilia Susnea</div>

                <img
                  className="reviews-2"
                  alt="Reviews"
                  src="/img/reviews-2.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="dot-slider">
          <div className="ellipse" />

          <div className="ellipse-2" />

          <div className="ellipse-2" />
        </div>
      </div>

      <div className="projects-slider">
        <div className="title-wrapper">
          <div className="title-5">
            <div className="tag-4">
              <div className="text-wrapper-22">Galerie</div>
            </div>

            <div className="text-wrapper-26">Ultimele noastre lucrări</div>
          </div>
        </div>

        <div className="projects">
          <img
            className="lucrari-noi"
            alt="Lucrari noi"
            src="/img/lucrari-noi-3.png"
          />

          <img
            className="lucrari-noi-2"
            alt="Lucrari noi"
            src="/img/lucrari-noi-2.png"
          />

          <img
            className="lucrari-noi-3"
            alt="Lucrari noi"
            src="/img/lucrari-noi.png"
          />
        </div>

        <div className="dot-slider">
          <div className="ellipse" />

          <div className="ellipse-2" />

          <div className="ellipse-2" />
        </div>
      </div>
    </div>
  );
};
