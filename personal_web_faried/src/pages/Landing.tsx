import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import React from "react";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import faried from "../assets/faried.png";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { Button } from "@nextui-org/react";
import uiux from "../assets/uiux2.jpg";
import frontend from "../assets/frontend.jpg";
import sb from "../assets/Redesign Landing Starbucks.png";
import { Link } from "@nextui-org/react";
import bca from "../assets/Porto Mbanking.png";
import { Accordion, AccordionItem } from "@nextui-org/react";
import webdev from "../assets/pkl.png";
import { MdFileDownload } from "react-icons/md";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Skills", "Project", "Certification", "Dribbble.com", "LinkedIn", "Github", "Hire Me"];

  return (
    <div className="body-landing text-white bg-[#151515]">
      {/*navbar*/}
      <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className="text-white bg-[#151515] md:py-[20px]" maxWidth="full">
        <NavbarContent>
          <NavbarBrand>
            <p className="font-bold text-[30px] text-[#00E0FF]">M.Faried</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex sm:gap-[20px] md:gap-[60px] lg:gap-[120px] " justify="center">
          <NavbarItem>
            <Link href="#" className="text-white text-[16px] sm:text-[20px]">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" className="text-white text-[16px] sm:text-[20px]">
              Project
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-white text-[16px] sm:text-[20px]">
              Certification
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="hidden md:flex gap-[30px]">
          <NavbarItem>
            <Link href="#" className="text-white text-[20px] md:text-[30px]">
              <FaDribbble />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-white text-[20px] md:text-[30px]">
              <FaLinkedin />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-white text-[20px] md:text-[30px]">
              <FaGithub />
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        <NavbarMenu className="bg-transparent">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full text-white text-[20px] hover:text-sky-600 font-bold" href="#">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {/*close navbar*/}
      {/*content*/}
      <div className="content-landing px-[35px] md:px-[65px] pt-[55px] min-h-screen md:min-h-[500px] bg-[#151515]">
        <div className="content-landing-container flex justify-center items-center flex-col md:flex-row-reverse md:justify-between">
          <div className="right flex justify-center">
            <img src={faried} className="w-[250px] md:w-[350px] lg:w-[460px] rounded-b-[100px]" alt="" />
          </div>
          <div className="left flex flex-col items-center mt-[20px] md:items-start md:w-[550px] lg:-mt-[120px]">
            <h2 className="text-[20px] font-semibold lg:text-[40px] lg:font-light">Halo I'm</h2>
            <h2 className="text-[35px] font-bold lg:text-[70px] bg-gradient-to-r from-[#00E0FF] via-[#4CFFC9] to-[#C8009C] bg-clip-text text-transparent animate-gradient-x">Faried Gunawan</h2>
            <h2 className="text-[15px] font-medium text-center md:text-justify lg:text-[20px]">
              Active student of telkom university informatics study program, has interest and expertise in frontend developer & UI/UX designer, learns independently and continues to develop skills.
            </h2>
            <div className="left-img flex text-[35px] gap-[20px] mt-[20px] md:text-[40px] md:gap-[60px]">
              <FaFigma />
              <IoLogoJavascript />
              <FaHtml5 />
              <FaReact />
              <FaWordpress />
              <IoLogoCss3 />
            </div>
            <Button className=" px-[30px] py-[20px] md:px-[40px] md:py-[25px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 rounded-lg mt-[30px] animate-gradient-x hover:bg-indigo-600 text-white mb-[40px]">Hire me</Button>
          </div>
        </div>
      </div>
      {/*close content*/}

      {/*skills*/}
      <div className="skills bg-[#100F0F] min-h-[300px] px-[35px] pb-[30px]">
        <h2 className="text-[20px] sm:text-[25px] lg:text-[35px] pt-[20px] mb-[40px]">Skills</h2>
        <div className="skills-container flex flex-col items-center md:flex-row md:justify-center gap-[40px]">
          <Card isFooterBlurred className="w-[300px] h-[200px] md:w-[400px] md:h-[300px] lg:w-[490px] lg:h-[350px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h4 className="text-white/90 font-medium text-xl lg:text-2xl">UI/UX Designer</h4>
            </CardHeader>
            <Image removeWrapper alt="Relaxing app background" className="z-0 w-full h-full object-cover" src={uiux} />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <FaFigma className="text-white text-[25px]" />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Figma</p>
                  <p className="text-tiny text-white/60">Get my project design</p>
                </div>
              </div>
              <Button radius="full" size="sm">
                Visit
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="w-[300px] h-[200px] md:w-[400px] md:h-[300px] lg:w-[490px] lg:h-[350px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h4 className="text-white/90 font-medium text-xl lg:text-2xl">Front-End Dev</h4>
            </CardHeader>
            <Image removeWrapper alt="Relaxing app background" className="z-0 w-full h-full object-cover" src={frontend} />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <FaReact className="text-white text-[25px]" />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">React</p>
                  <p className="text-tiny text-white/60">Get my project code</p>
                </div>
              </div>
              <Button radius="full" size="sm">
                Visit
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      {/*end of skills*/}

      {/*project*/}
      <div className="project-body px-[35px]">
        <h2 className="flex justify-end text-[20px] sm:text-[25px] lg:text-[35px] pt-[20px] mb-[40px]">Project</h2>
        <div className="project-container">
          {/*card 1*/}
          <div className="project-card-1 flex flex-col items-center md:flex-row md:items-center md:justify-between md:gap-[30px]">
            <div className="project-card-1-left">
              <img src={sb} className="w-[300px] md:w-[450px] lg:w-[700px]" alt="" />
            </div>
            <div className="project-card-1-right">
              <h2 className="mt-[20px] md:mt-0 font-semibold md:text-[20px] lg:text-[25px]">Redesign Starbucks Web</h2>
              <h2 className="w-[300px] text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[30px] text-justify font-light mt-[20px] lg:mt-[50px] md:w-[400px] lg:w-[650px]">
                I redesigned Starbucks Coffee's landing page, starting with Figma for UI design inspired by Dribbble.com. Using React Vite, Tailwind CSS, and pure CSS, I created a responsive and appealing layout, resulting in an interactive
                landing page that maintains Starbucks Coffee's identity while offering a modern user experience.
              </h2>
              <h2 className="text-[12px] md:text-[20px] font-semibold mt-[20px] lg:mt-[70px]">Visit Design and Code</h2>
              <div className="git-code mt-[20px]">
                <Button className="bg-transparent text-[12px] md:text-[18px] border-2 border-white text-white mr-[20px]">Dribbble.com</Button>
                <Button className="bg-transparent text-[12px] md:text-[18px] border-2 border-white text-white">Github</Button>
              </div>
              <Link isExternal href="#" showAnchorIcon className="text-white text-[14px] md:text-[20px] md:hidden mt-[40px] md:mt-[40px] flex ">
                See More About FrontEnd Projects
              </Link>
            </div>
          </div>
          <Link isExternal href="#" showAnchorIcon className="text-white text-[14px] hidden  md:text-[20px] mt-[20px] md:mt-[40px] md:flex justify-center md:justify-start">
            See More About FrontEnd Projects
          </Link>

          {/*end of card 1*/}

          {/*card 2*/}
          <div className="project-card-1 flex flex-col-reverse items-center md:flex-row md:items-center md:justify-between md:gap-[30px] mt-[70px]">
            <div className="project-card-1-right">
              <h2 className="mt-[20px] md:mt-0 font-semibold md:text-[20px] lg:text-[25px]">Redesign BCA Mobile Banking</h2>
              <h2 className="w-[300px] text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[30px] text-justify font-light mt-[20px] lg:mt-[50px] md:w-[400px] lg:w-[650px]">
                I have successfully undertaken a UI redesign for the BCA Mobile application in response to prevalent feedback that its interface appeared dated and unengaging. Through a meticulous process, I have revitalized the UI, imbuing
                it with a captivating and contemporary aesthetic, addressing the perceived shortcomings and ensuring a more alluring and modern user experience.
              </h2>
              <h2 className="text-[12px] md:text-[20px] font-semibold mt-[20px] lg:mt-[70px]">Visit Design</h2>
              <div className="git-code mt-[20px]">
                <Button className="bg-transparent text-[12px] md:text-[18px] border-2 border-white text-white mr-[20px]">Dribbble.com</Button>
              </div>
              <Link isExternal href="#" showAnchorIcon className="text-white text-[14px] mb-[40px] md:text-[20px] md:hidden mt-[40px] md:mt-[40px] flex ">
                See More About UI/UX Projects
              </Link>
            </div>
            <div className="project-card-1-left">
              <img src={bca} className="w-[300px] md:w-[450px] lg:w-[700px]" alt="" />
            </div>
          </div>
          <Link isExternal href="#" showAnchorIcon className="text-white text-[14px] hidden  md:text-[20px] mt-[20px] md:mt-[40px] md:flex justify-center md:justify-end pb-[35px]">
            See More About UI/UX Projects
          </Link>

          {/*end of card 2*/}
        </div>
      </div>
      {/*end of project*/}

      {/*accordion certif*/}
      <div className="accordion bg-[#100F0F] px-[35px]">
        <h2 className="text-[20px] sm:text-[25px] lg:text-[35px] pt-[20px] mb-[30px]">Certification</h2>
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" subtitle="May 2021 - June 2021 " title="Web Developer (Internship)" classNames={{ title: "text-white" }}>
            {/*certif 1*/}
            <div className="project-card-1 flex flex-col items-center md:flex-row md:items-center md:justify-between md:gap-[30px]">
              <div className="project-card-1-left">
                <img src={webdev} className="w-[300px] md:w-[450px] lg:w-[700px]" alt="" />
              </div>
              <div className="project-card-1-right">
                <h2 className="w-[300px] text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[30px] text-justify font-light md:w-[400px] mt-[20px] lg:mt-0 lg:w-[650px]">
                  I had the opportunity to intern as a web developer specializing in WordPress at the Mathematics Department of As-Syafi'iyah Islamic University in Jakarta. During this internship, I diligently worked on various projects,
                  ensuring timely and accurate completion of all tasks assigned to me. My commitment to excellence and punctuality was reflected in the quality of my work and my ability to meet deadlines consistently.
                </h2>
                <h2 className="text-[12px] md:text-[20px] font-semibold mt-[20px] lg:mt-[30px]">Department of As-Syafi'iyah Islamic University</h2>
                <h2 className="text-[12px] text-[#17F020] md:text-[20px] font-semibold mt-[20px] lg:mt-[50px]">Online [Remote]</h2>
                <div className="git-code mt-[20px]">
                  <Button className="bg-transparent text-[12px] md:text-[18px] border-2 border-white text-white mr-[20px] lg:mt-[100px]">
                    Download{" "}
                    <span>
                      <MdFileDownload className="text-white text-[16px]" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            {/*end of certif 1*/}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 1" subtitle="May 2021 - June 2021 " title="Web Developer (Internship)" classNames={{ title: "text-white" }}>
            {/*certif 2*/}
            <div className="project-card-1 flex flex-col items-center md:flex-row md:items-center md:justify-between md:gap-[30px]">
              <div className="project-card-1-left">
                <img src={webdev} className="w-[300px] md:w-[450px] lg:w-[700px]" alt="" />
              </div>
              <div className="project-card-1-right">
                <h2 className="w-[300px] text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[30px] text-justify font-light md:w-[400px] mt-[20px] lg:mt-0 lg:w-[650px]">
                  I had the opportunity to intern as a web developer specializing in WordPress at the Mathematics Department of As-Syafi'iyah Islamic University in Jakarta. During this internship, I diligently worked on various projects,
                  ensuring timely and accurate completion of all tasks assigned to me. My commitment to excellence and punctuality was reflected in the quality of my work and my ability to meet deadlines consistently.
                </h2>
                <h2 className="text-[12px] md:text-[20px] font-semibold mt-[20px] lg:mt-[30px]">Department of As-Syafi'iyah Islamic University</h2>
                <h2 className="text-[12px] text-[#17F020] md:text-[20px] font-semibold mt-[20px] lg:mt-[50px]">Online [Remote]</h2>
                <div className="git-code mt-[20px]">
                  <Button className="bg-transparent text-[12px] md:text-[18px] border-2 border-white text-white mr-[20px] lg:mt-[100px]">
                    Download{" "}
                    <span>
                      <MdFileDownload className="text-white text-[16px]" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            {/*end of certif 2*/}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 1" subtitle="May 2021 - June 2021 " title="Web Developer (Internship)" classNames={{ title: "text-white" }}>
            {/*certif 3*/}
            <div className="project-card-1 flex flex-col items-center md:flex-row md:items-center md:justify-between md:gap-[30px]">
              <div className="project-card-1-left">
                <img src={webdev} className="w-[300px] md:w-[450px] lg:w-[700px]" alt="" />
              </div>
              <div className="project-card-1-right">
                <h2 className="w-[300px] text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[30px] text-justify font-light md:w-[400px] mt-[20px] lg:mt-0 lg:w-[650px]">
                  I had the opportunity to intern as a web developer specializing in WordPress at the Mathematics Department of As-Syafi'iyah Islamic University in Jakarta. During this internship, I diligently worked on various projects,
                  ensuring timely and accurate completion of all tasks assigned to me. My commitment to excellence and punctuality was reflected in the quality of my work and my ability to meet deadlines consistently.
                </h2>
                <h2 className="text-[12px] md:text-[20px] font-semibold mt-[20px] lg:mt-[30px]">Department of As-Syafi'iyah Islamic University</h2>
                <h2 className="text-[12px] text-[#17F020] md:text-[20px] font-semibold mt-[20px] lg:mt-[50px]">Online [Remote]</h2>
                <div className="git-code mt-[20px]">
                  <Button className="bg-transparent text-[12px] md:text-[18px] border-2 border-white text-white mr-[20px] lg:mt-[100px]">
                    Download{" "}
                    <span>
                      <MdFileDownload className="text-white text-[16px]" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            {/*end of certif 3*/}
          </AccordionItem>
        </Accordion>
      </div>

      {/*end of accordion courses*/}
    </div>
  );
};

export default Landing;
