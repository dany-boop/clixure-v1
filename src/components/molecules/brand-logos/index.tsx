import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const InfinityLogoCarousel = () => {
  const [offset, setOffset] = useState(0);

  // Real company logos with image URLs
  const logos = [
    {
      name: 'Airbnb',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
    },
    {
      name: 'Stripe',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
    },
    {
      name: 'Netflix',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    },
    {
      name: 'Spotify',
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    },
    {
      name: 'Discord',
      url: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/62594fddd654fc29fcc07359_cb48d2a8d4991281d7a6a95d2f58195e.svg',
    },
    {
      name: 'Figma',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    },
    {
      name: 'Notion',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    },
    {
      name: 'Slack',
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    },
    {
      name: 'Vercel',
      url: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
    },
    {
      name: 'GitHub',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    },
    {
      name: 'Twitter',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg',
    },
    {
      name: 'Adobe',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg',
    },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev - 1);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (offset <= -116 * logos.length) {
      setOffset(0);
    }
  }, [offset, logos.length]);

  return (
    <div className="w-full flex items-center justify-center overflow-hidden relative ">
      {/* Semi-transparent background with fade on both sides */}
      <div
        className="absolute inset-0 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-[2px] border-y"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      />

      <div className="relative w-full h-20 md:h-32 z-10">
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            WebkitMaskImage: `
      linear-gradient(
        to right,
        transparent 0%,
        transparent 12%,
        black 30%,
        black 70%,
        transparent 88%,
        transparent 100%
      )
    `,
            maskImage: `
      linear-gradient(
        to right,
        transparent 0%,
        transparent 12%,
        black 30%,
        black 70%,
        transparent 88%,
        transparent 100%
      )
    `,
          }}
        >
          <motion.div
            className="flex absolute left-0 top-0 h-full items-center"
            style={{
              x: offset,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ width: '100px' }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="w-20 md:w-24 h-20 md:h-24 flex items-center gap-10 md:gap-20 p-4">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfinityLogoCarousel;
