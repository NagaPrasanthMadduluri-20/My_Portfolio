import Container from "  @/components/Container";
import Text from "  @/components/Text";
import Iphone15Pro from "  @/components/ui/iphone-15-pro";
import { GitBranch, Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="bg-[#0f0f0f]">
      <Container>
        <Text className="!text-[30px] italic mb-16 text-[#ff9800]">
          Hey! Here is Something I have Built{" "}
        </Text>
        <div className="group flex flex-col md:grid md:grid-cols-2 items-center relative mb-5">
        <Text className="!text-[16px] italic font-normal text-[#ff9800] mr-auto block md:hidden">
              Featured Project
            </Text>
            <Text className="!text-[25px] italic mr-auto block md:hidden">Portfolio Website</Text>
          <div className="opacity-65 group-hover:opacity-100 order-2 md:order-1">
            <Image
              src="/og-image.jpg"
              alt=""
              width={600}
              height={600}
              className=""
            />
          </div>
         
          <div className="ml-5 order-1 md:order-2">
            <Text className="!text-[16px] italic font-normal text-[#ff9800] hidden md:flex">
              Featured Project
            </Text>
            <Text className="!text-[25px] italic mt-3 hidden md:flex">Portfolio Website</Text>
            <div className="bg-[#0f0f0f] p-2 mr-10 rounded-lg mt-3">
              <Text className="text-[#9ca3af] md:relative md:opacity-100 md:line-clamp-none absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 group-hover:slide-in-from-bottom-24 bg-[rgb(15,15,15)] tranisition-all line-clamp-5 text-[16px] font-medium duration-500 w-full">
                My Personal Portfolio is a strategic digital showcase designed
                to highlight my professional skills, development expertise, and
                unique UX-centric approach. Crafted to demonstrate technical
                prowess and creative problem-solving, the portfolio serves as a
                comprehensive visual narrative of my professional journey,
                presenting my projects, technological proficiencies, and design
                philosophy to potential employers and collaborators.
              </Text>
            </div>
            <div className="items-center gap-x-6 mt-3 hidden md:flex">
              <Link href="https://github.com/NagaPrasanthMadduluri-20/My_Portfolio"><Github className="hover:stroke-[#000]/10 hover:fill-[#fff] cursor-pointer" /></Link>
              <span className="hover:rotate-180 cursor-pointer">
                {" "}
               <Link href="https://9d50fea7.myportfolio-46x.pages.dev/"> <Link2 /> </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="flex md:hidden items-center gap-x-6 mt-3">
        <Link href="https://github.com/NagaPrasanthMadduluri-20/My_Portfolio"><Github className="hover:stroke-[#000]/10 hover:fill-[#fff] cursor-pointer" /></Link>
              <span className="hover:rotate-180 cursor-pointer">
                {" "}
                <Link2 />
              </span>
            </div>

        <div className="group flex flex-col md:grid md:grid-cols-2 mt-5  mb-5 md:my-20 relative">
          <div>
            <Text className="!text-[16px] italic font-normal text-left text-[#ff9800] block mr-auto">
              Featured Project
            </Text>
            <Text className="!text-[25px] italic block mr-auto">University Website</Text>
            <div className="bg-[#0f0f0f] p-2 mr-10 rounded-lg mt-3">
            <Text className="text-[#9ca3af] md:relative md:opacity-100 md:line-clamp-none absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 group-hover:slide-in-from-bottom-24 bg-[rgb(15,15,15)] tranisition-all line-clamp-5 text-[16px] font-medium duration-500 w-full">
                CapstoneNav is a comprehensive university assignment submission
                platform that leverages modern web technologies to streamline
                the submission process. The application features secure,
                role-based authentication and a responsive design, allowing
                students to submit assignments and professors to review them
                efficiently. By implementing advanced form validation and
                utilizing Firebase's real-time data management, the platform
                significantly reduces submission errors and enhances the overall
                user experience for academic project tracking.
              </Text>
            </div>
            <div className="items-center gap-x-6 mt-3 hidden md:flex">
            <Link href="https://github.com/NagaPrasanthMadduluri-20/capstonenav"><Github className="hover:stroke-[#000]/10 hover:fill-[#fff] cursor-pointer" /></Link>
              <span className="hover:rotate-180 cursor-pointer">
                {" "}
                <Link2 />
              </span>
            </div>
          </div>
          <div className="opacity-65 group-hover:opacity-100">
            <Image
              src="/Capstone.webp"
              alt=""
              width={600}
              height={600}
              className=""
            />
          </div>
        </div>
        <div className="flex md:hidden items-center gap-x-6">
        <Link href="https://github.com/NagaPrasanthMadduluri-20/capstonenav"><Github className="hover:stroke-[#000]/10 hover:fill-[#fff] cursor-pointer" /></Link>
              <span className="hover:rotate-180 cursor-pointer">
                {" "}
                <Link2 />
              </span>
            </div>

        <div className="group flex flex-col md:grid md:grid-cols-2 items-center mt-5">
        <Text className="!text-[16px] italic font-normal text-[#ff9800] mr-auto block md:hidden">
              Featured Project
            </Text>
            <Text className="!text-[25px] italic mr-auto block md:hidden">University App</Text>
          <div className="relative h-[400px] opacity-65 group-hover:opacity-100">
            <Iphone15Pro className="size-full" src="/classtrackr.jpeg" />
          </div>

          <div className="ml-5">
            <Text className="!text-[16px] italic font-normal text-[#ff9800] hidden md:block">
              Featured Project
            </Text>
            <Text className="!text-[25px] italic mt-3 hidden md:block">University App</Text>
            <div className="bg-[#0f0f0f] p-2 mr-10 rounded-lg mt-3">
              <Text className="text-[#9ca3af] line-clamp-5 md:line-clamp-none w-full">
                ClassTrackr is an innovative mobile application designed to
                assess and optimize efficiency across university life by
                tracking task completion and assignment progress. Utilizing
                React Native and Firebase, the app provides a comprehensive
                tracking system that visualizes performance metrics through
                interactive pie charts, helping students and administrators
                understand productivity and task management. The role-based
                authentication and Redux state management enable personalized
                insights and streamlined academic workflow monitoring.
              </Text>
            </div>
            <div className="flex items-center gap-x-6 mt-3">
             <Link href="https://github.com/NagaPrasanthMadduluri-20/classtrackr"><Github className="hover:stroke-[#000]/10 hover:fill-[#fff] cursor-pointer" /></Link> 
              <span className="hover:rotate-180 cursor-pointer">
                {" "}
                <Link2 />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
