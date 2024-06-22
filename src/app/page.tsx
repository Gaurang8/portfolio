import { Dot, Github, Instagram, Linkedin, Menu, User } from "lucide-react";
import bgImage from "../assete/oQ65CY9Qk1W3v2c4ykiPXXB3og.png";
import personImg from "../assete/person.jpg";


export default function Home() {
  return (
    <div className=" bg-black h-full w-full relative p-6">
      <div className=" absolute top-0 left-0 h-[550px] w-full">
        <img src={bgImage.src} alt="" className=" h-full w-full object-cover" />
      </div>
      <div className=" h-12 w-full rounded-lg bg-[#1b163c78] brightness-75 flex justify-between items-center p-3 ">
        <div className=" ml-4">
          <Dot className=" h-6 w-6 scale-[2] text-white" />
        </div>
        <div className=" px-1 flex gap-4">
          <Github className=" h-4 w-4 text-white font-light" />
          <Instagram className=" h-4 w-4 text-white" />
          <Linkedin className=" h-4 w-4 text-white" />
          <Menu className=" h-4 w-4 text-white" />
        </div>
      </div>
      <div className=" flex flex-col gap-5 mt-16">
        <div className=" flex gap-4 items-center">
          <div className=" h-20 w-20 rounded-full shrink-0 relative">
            <div className=" absolute h-[84px] w-[1px] left-1/2 -top-[84px] -translate-x-1/2 bg-white "></div>
            <img src={personImg.src} alt="" className=" h-full w-full rounded-full contrast-125" />
          </div>
          <div className=" flex flex-col">
            <div className=" font-semibold text-white text-lg">Gaurang Khambhaliya</div>
            <div className=" text-[15px] text-gray-700 font-semibold">Full stack web devloper</div>
          </div>
        </div>
        <div className=" text-white font-light">
          Hardworking and reliable web devloper with strong ability in Front-end devlopment.
          Highly organized, proactive and punctual with team-oriented mentality.
        </div>
        <div className=" text-gray-700 text-sm font-medium">
          Full stack web devloper <span className=" bg-gradient-to-r from-[#00b4ff] via-[#d319ff] to-[#ff0000cf] bg-clip-text"
          style={{
            WebkitTextFillColor: "transparent",
          }}
          >@trakkyservices</span>
        </div>
      </div>
    </div>
  );
}
