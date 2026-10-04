import React from "react";
import Image from "next/image";

interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/siyabahmad13",
    ariaLabel: "GitHub profile",
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/siab-ahmad-khan/",
    ariaLabel: "LinkedIn profile",
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/923435022880",
    ariaLabel: "WhatsApp contact",
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@the-pakhtoons",
    ariaLabel: "YouTube channel",
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export function HeroPortraitVisual() {
  return (
    <div className="flex flex-col items-center">

      {/* Portrait Frame */}
      <div
        className="
          relative
          w-[240px] sm:w-[265px] md:w-[285px]
          aspect-[4/5]
          rounded-[6px]
          overflow-hidden
          border-2
          border-[var(--accent)]
          bg-white
          shadow-[0_4px_16px_rgba(0,0,0,0.05)]
          transition-all
          duration-500
          ease-out
          hover:scale-[1.03]
          hover:border-[var(--accent-hover)]
          hover:shadow-[0_10px_30px_rgba(220,38,38,0.20)]
          select-none
        "
      >
        <Image
          src="/images/hero-image.jpeg"
          alt="Siyab Ahmad Khan — Software Engineer"
          fill
          priority
          sizes="(max-width: 768px) 70vw, 285px"
          className="
            object-cover
            transition-transform
            duration-500
            ease-out
            hover:scale-105
          "
        />
      </div>

      {/* Compact Clean Social Row */}
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            title={item.name}
            className="
              flex items-center gap-1.5
              px-2 py-1
              rounded-[4px]
              border border-[var(--border)]
              bg-white
              text-[var(--text-secondary)]
              hover:text-[var(--accent)]
              hover:border-[var(--accent)]
              hover:bg-[var(--accent-subtle)]
              hover:-translate-y-0.5
              active:translate-y-0
              transition-all
              duration-200
              ease-[cubic-bezier(0.16,1,0.3,1)]
              text-[11px]
              font-medium
              shadow-2xs
            "
          >
            {item.icon}

            <span className="font-mono-meta text-[10.5px] tracking-tight">
              {item.name}
            </span>
          </a>
        ))}
      </div>

    </div>
  );
}