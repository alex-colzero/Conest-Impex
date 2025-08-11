import React from "react";

export const OurWorksSection = (): JSX.Element => {
  // Data for testimonials
  const testimonials = [
    {
      id: 1,
      text: "Foarte mulțumită de promptitudine și profesionalism. Mulțumesc pentru lucrarea efectuată. Recomand cu încredere, problema a fost remediată cu succes.",
      name: "Mihaela Ungureanu",
      reviewsImage: "/assets/anima-home-v1/reviews.svg",
    },
    {
      id: 2,
      text: "Foarte punctual și profesionist. Prețul lucrării a fost mai mult decat OK. Recomand!",
      name: "Victor Anghelescu",
      reviewsImage: "/assets/anima-home-v1/reviews-1.svg",
    },
    {
      id: 3,
      text: "Cunoștiinte solide despre materiale noi și inovații în domeniul instalațiilor. Cea mai bună echipă!",
      name: "Sorin Ioneac",
      reviewsImage: "/assets/anima-home-v1/reviews-2.svg",
    },
  ];

  // Data for gallery images
  const galleryImages = [
    {
      id: 1,
      src: "/assets/anima-home-v1/rectangle-382.png",
      width: "w-[376px]",
      alt: "Rectangle",
    },
    {
      id: 2,
      src: "/assets/anima-home-v1/rectangle-381.png",
      width: "w-[662px]",
      alt: "Rectangle",
    },
    {
      id: 3,
      src: "/assets/anima-home-v1/rectangle-383.png",
      width: "w-[500px]",
      alt: "Rectangle",
    },
    {
      id: 4,
      src: "/assets/anima-home-v1/rectangle-384.png",
      width: "w-[322px]",
      alt: "Rectangle",
    },
  ];

  // Data for pagination dots
  const paginationDots = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
  ];

  return (
    <section className="inline-flex flex-col h-[1579px] items-center gap-[200px] absolute top-[7256px] left-0">
      <div className="flex flex-col w-[1420px] items-center gap-20 relative flex-[0_0_auto]">
        <div className="flex items-center justify-center gap-20 self-stretch w-full flex-[0_0_auto] flex-col relative">
          <header className="inline-flex items-center justify-center gap-10 flex-[0_0_auto] flex-col relative">
            <div className="w-[130px] flex h-[60px] items-center justify-center gap-2.5 px-[13px] py-2.5 relative rounded-[10px] overflow-hidden border border-solid border-[#05213c33]">
              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#303030] text-lg tracking-[1.80px] leading-[normal]">
                Păreri
              </div>
            </div>

            <h2 className="relative w-[1420px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[64px] text-center tracking-[0] leading-[83.2px]">
              Aprecierile clienților ne onorează.
            </h2>
          </header>

          <div className="flex items-start gap-5 self-stretch w-full relative flex-[0_0_auto]">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="flex flex-col items-start gap-5 relative flex-1 grow"
              >
                <blockquote className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-base tracking-[0] leading-[28.8px]">
                  {testimonial.text}
                </blockquote>

                <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                  <cite className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[26px] tracking-[0] leading-[33.8px] whitespace-nowrap not-italic">
                    {testimonial.name}
                  </cite>

                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Reviews"
                    src={testimonial.reviewsImage}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <nav
          className="inline-flex items-start justify-center gap-5 relative flex-[0_0_auto]"
          aria-label="Testimonials pagination"
        >
          {paginationDots.map((dot) => (
            <button
              key={dot.id}
              className={`relative w-3.5 h-3.5 bg-[#05213c] rounded-[7px] ${!dot.active ? "opacity-30" : ""}`}
              aria-label={`Go to testimonial ${dot.id}`}
              aria-current={dot.active ? "true" : "false"}
            />
          ))}
        </nav>
      </div>

      <div className="inline-flex flex-col gap-20 flex-[0_0_auto] mb-[-459.00px] items-center justify-center relative">
        <div className="flex w-[1420px] items-center justify-around gap-[809px] relative flex-[0_0_auto]">
          <header className="inline-flex items-center justify-center gap-[18px] flex-[0_0_auto] flex-col relative">
            <div className="w-[146px] flex h-[60px] items-center justify-center gap-2.5 px-[13px] py-2.5 relative rounded-[10px] overflow-hidden border border-solid border-[#05213c33]">
              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#303030] text-lg tracking-[1.80px] leading-[normal]">
                Galerie
              </div>
            </div>

            <h2 className="relative w-[1420px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[64px] text-center tracking-[0] leading-[83.2px]">
              Ultimele noastre lucrări
            </h2>
          </header>
        </div>

        <div className="flex w-[1920px] h-[980px] gap-5 items-center justify-center relative">
          {galleryImages.map((image) => (
            <img
              key={image.id}
              className={`${image.width} h-[980px] relative object-cover`}
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>

        <nav
          className="inline-flex items-start justify-center gap-5 relative flex-[0_0_auto]"
          aria-label="Gallery pagination"
        >
          {paginationDots.map((dot) => (
            <button
              key={dot.id}
              className={`relative w-3.5 h-3.5 bg-[#05213c] rounded-[7px] ${!dot.active ? "opacity-30" : ""}`}
              aria-label={`Go to gallery page ${dot.id}`}
              aria-current={dot.active ? "true" : "false"}
            />
          ))}
        </nav>
      </div>
    </section>
  );
};
