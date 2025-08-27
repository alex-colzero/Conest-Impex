"use client";

import React from "react";

export const RecentPostsSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/img/image.png",
      date: "July 20, 2025",
      title: "Titlu",
      description:
        "Text scurt decriere articol. Acest text urmeaza sa fie rescris in baza unui nou articol de blog pe acre urmeaza sa-l lansam in acest spatiu.",
    },
    {
      id: 2,
      image: "/img/image-1.png",
      date: "July 20, 2025",
      title: "Titlu",
      description:
        "Text scurt decriere articol. Acest text urmeaza sa fie rescris in baza unui nou articol de blog pe acre urmeaza sa-l lansam in acest spatiu.",
    },
    {
      id: 3,
      image: "/img/image-2.png",
      date: "July 20, 2025",
      title: "Titlu",
      description:
        "Text scurt decriere articol. Acest text urmeaza sa fie rescris in baza unui nou articol de blog pe acre urmeaza sa-l lansam in acest spatiu.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-10 pt-0 pb-[200px] px-[60px] relative self-stretch w-full flex-[0_0_auto]">
      <header className="flex items-center justify-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center justify-center gap-10 pt-[100px] pb-0 px-0 relative flex-1 grow">
          <div className="w-[140px] flex h-[60px] items-center justify-center gap-2.5 px-[13px] py-2.5 relative rounded-[10px] overflow-hidden border border-solid border-[#05213c33]">
            <span className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#303030] text-lg tracking-[1.80px] leading-[normal]">
              Bloguri
            </span>
          </div>

          <h1 className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[64px] text-center tracking-[0] leading-[83.2px]">
            Postări Recente
          </h1>
        </div>
      </header>

      <div className="flex items-start justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col items-start gap-2.5 relative flex-1 grow"
          >
            <img
              className="relative self-stretch w-full h-[210px] object-cover"
              alt={`Blog post image for ${post.title}`}
              src={post.image}
            />

            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <time className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-base tracking-[0] leading-[28.8px]">
                {post.date}
              </time>

              <h2 className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[22px] tracking-[0] leading-[28.6px]">
                {post.title}
              </h2>

              <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-base tracking-[0] leading-[28.8px]">
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-base tracking-[0] leading-[28.8px]">
                  {post.description}
                  <br />
                </span>

                <a
                  href="#"
                  className="italic underline hover:no-underline transition-all duration-200"
                >
                  Citeste tot...
                </a>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
