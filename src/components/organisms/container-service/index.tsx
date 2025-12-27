import { motion } from 'framer-motion';
import CardFlip from '@/components/atoms/custom/card-flip';
import { Code, Megaphone, Palette } from 'lucide-react';
import { useState } from 'react';
import {
  ExpandableScreen,
  ExpandableScreenContent,
} from '@/components/atoms/common/expandable-screen';

export const ContainerService = () => {
  const [expandedService, setExpandedService] = useState<any>(null);
  const services = [
    {
      title: 'Digital Ads',
      subtitle: 'Meta Ads & Campaign',
      description:
        'Tingkatkan jangkauan bisnis Anda dengan strategi digital advertising yang tepat sasaran di platform Meta',
      features: [
        'Facebook Ads',
        'Instagram Ads',
        'Campaign Strategy',
        'Analytics & Report',
      ],
      icon: 'streamline:announcement-megaphone',
      gradient: 'from-orange-500 to-amber-600',
    },
    {
      title: 'Web Development',
      subtitle: 'UI/UX Design & Development',
      description:
        'Ciptakan pengalaman digital yang memukau dengan desain modern dan fungsional untuk website Anda',
      features: [
        'Responsive Design',
        'Modern UI/UX',
        'Fast Performance',
        'SEO Optimized',
      ],
      icon: 'solar:chat-square-code-bold-duotone',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Brand Designssss',
      subtitle: 'Graphic & Identity',
      description:
        'Bangun identitas brand yang kuat dan memorable untuk membedakan bisnis Anda dari kompetitor',
      features: [
        'Logo Design',
        'Brand Identity',
        'Marketing Materials',
        'Social Media Kit',
      ],
      icon: 'solar:pallete-2-bold-duotone',
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <ExpandableScreen
      layoutId="service-expand"
      onExpandChange={(open) => {
        if (!open) setExpandedService(null);
      }}
    >
      <div className="relative mx-3">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 relative uppercase text-5xl md:text-6xl lg:text-[7em] -mb-14 md:-mb-20 lg:-mb-14 font-bold"
        >
          Apa Yang Kami Sediakan
        </motion.h1>

        <div className="flex justify-center items-center rounded-t-lg mx-5 h-full pt-40 bg-white shadow-xl">
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-auto lg:gap-8 w-full">
              <CardFlip
                {...services[0]}
                onExpand={() => setExpandedService(services[0])}
              />
              <CardFlip
                {...services[1]}
                onExpand={() => setExpandedService(services[1])}
              />
            </div>

            <CardFlip
              {...services[2]}
              onExpand={() => setExpandedService(services[2])}
            />
          </div>
        </div>
      </div>

      <ExpandableScreenContent className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md">
        {expandedService && (
          <div className="max-w-5xl mx-auto p-10">
            <h1 className="text-4xl font-bold">{expandedService.title}</h1>

            <p className="mt-4 text-lg">{expandedService.description}</p>

            <ul className="mt-6 grid grid-cols-2 gap-4">
              {expandedService.features.map((f: string) => (
                <li key={f} className="rounded-lg border p-4 text-sm">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
};
