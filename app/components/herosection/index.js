import Container from "  @/components/Container";
import Text from "  @/components/Text";
import { FadeText } from "  @/components/ui/fade-text";
import GradualSpacing from "  @/components/ui/gradual-spacing";
import IconCloud from "  @/components/ui/icon-cloud";
import Meteors from "  @/components/ui/meteors";
import { RainbowButton } from "  @/components/ui/rainbow-button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "firebase",
    "vercel",
    "testinglibrary",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "tailwindcss",
    "mui",
    "reacthookform",
    "bootstrap",
  ];

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden h-[100vh] bg-[#000000] ">
      <Meteors number={30} />
      <Container className="pt-2 pb-20">
        <div className="grid grid-cols-2 items-end">
          <div className="col-span-full md:col-span-1">
            <Text variant="h1">
              <GradualSpacing
                className="text-[35px] md:!text-[50px]  italic text-[#ff9800] "
                text="M . Naga Prasanth"
              />
            </Text>
            <Text variant="h2">
              <GradualSpacing
                className="text-[25px] md:!text-[30px] my-3 italic underline underline-offset-8 mb-5"
                text="Frontend Developer"
              />
            </Text>

            <div className="">
              <FadeText
                className="text-[20px] md:!text-[25px] italic mb-8 text-[#9ca3af]"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.4 } },
                }}
                text="I am the Experienced Frontend Developer with 1 year of experience in
            building responsive and user-centric web applications."
              />

              <span className="block mt-3">
                <FadeText
                  className="text-[20px] md:!text-[25px] italic mb-8 text-[#9ca3af]"
                  direction="up"
                  framerProps={{
                    show: { transition: { delay: 0.6 } },
                  }}
                  text=" Passionate about staying current with emerging technologies and
              applying innovative solutions to complex problems."
                />
              </span>
            </div>
            <Link href="/Resume.pdf" target="blank">
              <RainbowButton
                variant="outline"
                className="w-auto text-[20px] md:text-[25px] h-11 mt-10 bg-[#9ca3af]"
              >
                {" "}
                <FadeText
                  direction="up"
                  framerProps={{
                    show: { transition: { delay: 0.8 } },
                  }}
                  text="Download Resume"
                />{" "}
              </RainbowButton>
            </Link>
          </div>

          <div className="hidden md:flex md:ml-9 md:col-span-1">
            <div className="">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
