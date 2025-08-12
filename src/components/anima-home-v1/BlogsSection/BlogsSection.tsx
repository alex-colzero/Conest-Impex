import React from "react";

export const BlogsSection = (): React.JSX.Element => {
  const blogPosts = [
    {
      id: 1,
      image: "/assets/anima-home-v1/rectangle-247@2x.png",
      date: "July 20, 2023",
      title: "Best Hvac In Texas",
      excerpt:
        "Elit adipi massa diam in dignissim. Sagittis pulvinar ut dis venenatis nunc nunc vitae aliquam vestibulum...",
    },
    {
      id: 2,
      image: "/assets/anima-home-v1/rectangle-247-1@2x.png",
      date: "July 20, 2023",
      title: "Hvac Maintenance Cost",
      excerpt:
        "Sagittis pulvinar ut dis venenatis nunc nunc vitae aliquam vestibulum. Elit adipi massa diam in dignissim...",
    },
    {
      id: 3,
      image: "/assets/anima-home-v1/rectangle-247-2@2x.png",
      date: "July 20, 2023",
      title: "Why To Clean Ac Of Home",
      excerpt:
        "Pulvinar sagittis ut dis venenatis nunc nunc vitae aliquam vestibulum. Elit adipi massa diam in dignissim...",
    },
    {
      id: 4,
      image: "/assets/anima-home-v1/rectangle-247-3@2x.png",
      date: "July 20, 2023",
      title: "Tips For Cleaning Ac",
      excerpt:
        "Pulvinar sagittis ut dis venenatis nunc nunc vitae aliquam vestibulum. Elit adipi massa diam in dignissim...",
    },
  ];

  return (
    <section className="inline-flex flex-col items-center justify-center gap-10 absolute top-[12842px] left-[250px]">
      <header className="flex w-[1420px] items-center justify-center gap-10 relative flex-[0_0_auto]">
        <div className="flex w-[922px] items-center justify-center gap-10 flex-col relative">
          <div className="w-[140px] flex h-[60px] items-center justify-center gap-2.5 px-[13px] py-2.5 relative rounded-[10px] overflow-hidden border border-solid border-[#05213c33]">
            <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#303030] text-lg tracking-[1.80px] leading-[normal]">
              Bloguri
            </div>
          </div>

          <h2 className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[64px] tracking-[0] leading-[83.2px] whitespace-nowrap">
            Postări Recente
          </h2>
        </div>
      </header>

      <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]"
          >
            <img
              className="w-[340px] h-[210px] relative object-cover"
              alt={post.title}
              src={post.image}
            />

            <div className="items-start gap-2.5 inline-flex flex-col relative flex-[0_0_auto]">
              <div className="items-start gap-1 inline-flex flex-col relative flex-[0_0_auto]">
                <time className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-base tracking-[0] leading-[28.8px] whitespace-nowrap">
                  {post.date}
                </time>

                <div className="items-start gap-1 inline-flex flex-col relative flex-[0_0_auto]">
                  <h3 className="relative w-[340px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[22px] tracking-[0] leading-[28.6px]">
                    {post.title}
                  </h3>

                  <p className="relative w-[340px] [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-base tracking-[0] leading-[28.8px]">
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-base tracking-[0] leading-[28.8px]">
                      {post.excerpt}{" "}
                    </span>

                    <span className="italic underline">Read more</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button className="all-[unset] box-border inline-flex items-center bg-[#05213c] rounded-[10px] justify-center px-9 py-[18px] relative flex-[0_0_auto] overflow-hidden">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-base text-center tracking-[1.28px] leading-[normal]">
          Arata tot ➔
        </div>
      </button>
    </section>
  );
};
