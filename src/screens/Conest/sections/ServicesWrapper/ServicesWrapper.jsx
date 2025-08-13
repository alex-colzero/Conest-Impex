"use client";

import React from "react";
import { FeatureCardsImage } from "../../../../components/FeatureCardsImage";
import "./style.css";

export const ServicesWrapper = () => {
  return (
    <div className="services-wrapper">
      <FeatureCardsImage
        className="feature-cards-image-instance"
        frameIconClassName="design-component-instance-node"
        modernAutonomous="/img/acoperire-primara-constanta.png"
      />
      <FeatureCardsImage
        className="feature-cards-image-instance"
        frameIconClassName="design-component-instance-node"
        modernAutonomous="/img/regiunea-dobrogea.png"
        text="Regiunea Dobrogea"
        text1="Năvodari "
        text2={
          <>
            - Case și vilet
            <br />
            <br />
          </>
        }
        text3="Medgidia "
        text4="- Service centrale"
        text5="Mangalia "
        text6={
          <>
            - Instalații sezonale
            <br />
            <br />
          </>
        }
        text7="Eforie"
        text8=" - Hoteluri"
      />
      <FeatureCardsImage
        className="feature-cards-image-instance"
        frameIconClassName="design-component-instance-node"
        modernAutonomous="/img/proiecte-nationale.png"
        text="Proiecte Naționale"
        text1="București "
        text2={
          <>
            {" "}
            - Proiecte mari
            <br />
            <br />
          </>
        }
        text3="Cluj-Napoca"
        text4=" - Dezvoltatori"
        text5="Iași"
        text6={
          <>
            {" "}
            - Modernizări
            <br />
            <br />
          </>
        }
        text7="Alte județe "
        text8="- La cerere"
      />
    </div>
  );
};
