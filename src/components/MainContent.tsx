import { AboutSection } from "@/sections/About";
// import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";


export default function MainContent(){
    return(
         <div>
            <Header />
            <section id="home">
            <HeroSection /> 
            </section>
            <section id="projects">
            <ProjectsSection />
            </section>
            <TapeSection />
            <section id="about">
            <AboutSection />
            </section>
            {/* <ContactSection /> */}
            <Footer />
         </div>
    )
}
