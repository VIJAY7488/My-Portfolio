import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import RestApiIcon from "@/assets/icons/restapi.svg";
import NodejsIcon from "@/assets/icons/nodejs-icon.svg";
import ExpressIcon from "@/assets/icons/Express.svg";
import JwtIcon from "@/assets/icons/jwtio-json-web-token.svg";
import MongodbIcon from "@/assets/icons/mongodb-svgrepo-com.svg"
import { TechIcon } from "@/components/TechIcon";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import CodeforceRating from "@/components/CodeforceRating";

const toolboxItems = [
  { title: 'JavaScript', iconType: JavaScriptIcon },
  { title: 'Github', iconType: GithubIcon },
  { title: 'RestApi', iconType: RestApiIcon },
  { title: 'Node.Js', iconType: NodejsIcon },
  { title: 'Express.Js', iconType: ExpressIcon },
  { title: 'JWT', iconType: JwtIcon },
  { title: 'MongoDB', iconType: MongodbIcon },
];

const frontenTools = [
  { title: 'HTML5', emoji: HtmlIcon, left: '5%', top: '5%' },
  { title: 'CSS3', emoji: '', left: '50%', top: '5%' },
  { title: 'Tailwind CSS', emoji: '', left: '10%', top: '35%' },
  { title: 'Bootsrap', emoji: '', left: '35%', top: '40%' },
  { title: 'JavaScript', emoji: '', left: '70%', top: '45%' },
  { title: 'TypeScript', emoji: '', left: '5%', top: '65%' },
  { title: 'React', emoji: '', left: '55%', top: '55%' },
  { title: 'ShadCN', emoji: '', left: '75%', top: '5%' },
  { title: 'GSAP', emoji: '', left: '25%', top: '5%' },
  { title: 'Framer Motion', emoji: '', left: '50%', top: '30%' },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader 
          eyebrow="My Skills" 
          title="A Glimpse Into My World" 
          description="" 
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] col-span-2">
              <CardHeader 
                title="Codeforces Ratings" 
                description="This is my live codeforces contest rating." 
              />
              <div className="w-full mx-auto">
                {/* <Image src={bookImage} alt="Book Cover" /> */}
                <CodeforceRating />
              </div>
            </Card>
            
            <Card className="h-[320px] p-6 md:col-span-3">
              <CardHeader 
                title="Backend Tools"
                description=""
                className="px-6 pt-6" 
            />
                <ToolboxItems items={toolboxItems} className="w-full"
                itemsWrapperClassName="animate-move-left [animation-duration:25s]"
                />
                <ToolboxItems items={toolboxItems} 
                className="w-full mt-6" 
                itemsWrapperClassName="animate-move-right [animation-duration:20s]"
                />
            </Card>

          
            <Card 
              className="h-[320px] lg:w-[961px] md:w-[705px] max-w-screen-lg p-0 flex flex-col">
              <CardHeader 
                title="Frontend Tools" 
                description=""
                className="px-6 py-6" 
              />
              <div className="relative flex-1" ref={constraintRef}>
                {frontenTools.map((ft, index) => (
                  <motion.div key={index} 
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: ft.left,
                    top: ft.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                  >
                    <span>{ft.emoji}</span>
                    <span 
                      className="font-medium text-gray-950">{ft.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
