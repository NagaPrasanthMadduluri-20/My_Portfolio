"use client";
import Container from "  @/components/Container";
import Text from "  @/components/Text";
import { BorderBeam } from "  @/components/ui/border-beam";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const About = () => {
  const { theme } = useTheme();
  return (
    <div className="relative" id="About">
      <Container>
        <div className="grid grid-cols-2 gap-x-3">
          <div className="col-span-full md:col-span-1">
            <div className="flex justify-between">
              <Text className="!text-[30px] italic mb-8 font-bold text-[#ff9800]">
                About me
              </Text>
              <Image
                src="/image4.jpeg"
                alt="image"
                width={100}
                height={100}
                className="rounded-full flex md:hidden"
              />
            </div>
            <Text className="italic mb-8 leading-6 z-30  dark:text-[#9ca3af]">
              Hey there! I'm Naga Prasanth, a{" "}
              <span className="text-[#6D4BA3] dark:text-white">
                {" "}
                frontend developer{" "}
              </span>
              passionate about creating impactful web solutions across various
              domains, with a special focus on e-learning technologies.
              <span className="mt-4 block  dark:text-[#9ca3af]">
                As an early-career professional, I started my journey at
                Invensis Technologies, My journey began with a fascination for
                how technology can simplify complex learning experiences.
                Through my journey, I discovered the
                <span className="text-[#6D4BA3] dark:text-white">
                  {" "}
                  magic of software development - learning not just code,
                </span>{" "}
                but the art of creating solutions that truly matter. My mentors
                taught me more than programming; they showed me how great
                technology connects with people.
              </span>
              <span className="mt-4 block  dark:text-[#9ca3af]">
                Today, I specialize in building intuitive web applications for
                e-learning platforms.
                <span className="text-[#6D4BA3] dark:text-white">
                  {" "}
                  My sweet spot?{" "}
                </span>
                Creating user interfaces that make learning feel effortless and
                engaging. I believe the best technology doesn't just work - it
                makes users' lives easier. Whether it's designing a sleek
                learning management system or optimizing user journeys,
              </span>
              <span className="mt-4 block  dark:text-text-[#9ca3af]">
                I'm all about turning complex ideas into simple, delightful
                <span className="dark:text-white text-[#6D4BA3]">
                  {" "}
                  digital experiences.
                </span>
              </span>
            </Text>
          </div>
          <div className="relative rounded-3xl col-span-full md:col-span-1 overflow-hidden">
            <BorderBeam size={250} duration={12} delay={9} />
            <div className="relative rounded-[10000px]">
              <Image
                src="/image4.jpeg"
                alt="image"
                width={300}
                height={300}
                className="w-full h-auto rounded-[10000px] p-10 hidden md:flex"
              />
              <BorderBeam size={250} duration={12} delay={9} />
            </div>
          </div>
        </div>
      </Container>
      {/* {theme === "dark" ? ( <RetroGrid />) : null } */}
    </div>
  );
};

export default About;
{
  /* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
  <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
    Border Beam
  </span>
  <BorderBeam size={250} duration={12} delay={9} />
</div>; */
}
