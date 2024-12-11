'use client';
import Container from '  @/components/Container'
import Text from '  @/components/Text';
import { MagicCard } from '  @/components/ui/magic-card'
import { useTheme } from 'next-themes';
import React from 'react'

const WorkExperience = () => {
    const { theme } = useTheme();
  return (
    <Container className="py-0 md:py-10">
        <Text variant='h2' className="text-[25px] md:!text-[30px] italic my-10 text-center text-[#ff9800]">Here are a few technologies and libraries I've been working with recently</Text>
        <div className='flex items-center justify-between gap-5 mt-10 flex-wrap'>
         <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-lg whitespace-nowrap text-[20px] md:!text-[28px] p-2 md:p-5 w-auto"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Material Ui
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-lg whitespace-nowrap text-[20px] md:!text-[28px] p-2 md:p-5 w-auto"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Firebase
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-lg whitespace-nowrap text-[20px] md:!text-[28px] p-2 md:p-5 w-auto"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Tailwindcss
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-lg whitespace-nowrap text-[20px] md:!text-[28px] p-2 md:p-5 w-auto"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Shadcn ui
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-lg whitespace-nowrap text-[20px] md:!text-[28px] p-2 md:p-5"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
           React.js
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-lg whitespace-nowrap text-[20px] md:!text-[28px] p-2 md:p-5 w-auto"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Javascript
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-lg  whitespace-nowrap text-[20px] md:!text-[28px] p-2 md:p-5 w-auto"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
       React Native
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-[20px] md:!text-[28px] p-2 md:p-5"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
       Next.js
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-[20px] md:!text-[28px] p-2 md:p-5 w-auto"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
       Magic ui
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-[20px] md:!text-[28px] p-2 w-auto"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <span className='text-[15px] block p-0 m-0'>(Latest)</span>
        Loading ...
      </MagicCard>
      </div>
    </Container>
  )
}

export default WorkExperience