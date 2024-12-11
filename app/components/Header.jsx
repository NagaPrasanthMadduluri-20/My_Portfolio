import Container from "  @/components/Container";
import { ModeToggle } from "  @/components/mode-toggle";
import ScrollButton from "  @/components/ScrollButton";
import { RainbowButton } from "  @/components/ui/rainbow-button";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#000] sticky top-0 z-50">   
    <Container className="py-3 ">
        <div className="flex justify-between items-center">
      <div className="text-[30px] font-semibold italic text-[#ff9800]"> <Link href="/">M {" "}N {" "}P</Link> </div>

      <div className="flex items-center gap-x-4">
        <ul className="flex justify-center gap-x-6 items-center text-[18px] font-normal italic text-white">
          <li className="cursor-pointer"><ScrollButton className="text-white bg-transparent hover:bg-transparent text-[18px] hover:text-[#ff9800] hidden md:flex" targetId="About">About</ScrollButton></li>
          <li className="cursor-pointer"><ScrollButton className="text-white bg-transparent hover:bg-transparent text-[18px] hover:text-[#ff9800] hidden md:flex" targetId="Contact">Contact me </ScrollButton></li>
          <li className="cursor-pointer"> <Link href="/Resume.pdf" target="blank" className="hover:text-[#ff9800] hidden md:flex"> Resume </Link></li>
          <li className='flex md:hidden'><Link href="/Resume.pdf" target="blank"><RainbowButton className="bg-[#9ca3af]"> Resume </RainbowButton></Link></li>
        </ul>
        <div><ModeToggle /></div>
      </div>
     
      </div>
    </Container>
    </div>
  );
};

export default Header;
