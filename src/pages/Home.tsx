
import Hero from "../components/hero/Hero";
import Tools from "../components/sections/Tools";
import AboutPreview from "../components/sections/AboutPreview";
import ServicesSection from "../components/sections/ServicesSection";
import WorkShowcase from "../components/sections/WorkShowcase";
import Process from "../components/sections/Process";
import Metrics from "../components/sections/Metrics";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";



export default function Home() {
  return (
    <>
      <Hero
  slides={[
    {
      eyebrow: "NEXTRONIX GLOBAL",
      title: (
        <>
          Empowering Your Business with NextGen{" "}
          <em className="not-italic text-indigo-400">
            IT & BPO Solutions
          </em>
        </>
      ),
      description:
        "Seamless technology and expert support driving growth worldwide.",
      primary: {
        label: "GET STARTED",
        to: "/contact",
      },
      secondary: {
        label: "EXPLORE OUR SERVICES",
        to: "/services",
      },
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
    },

    {
      eyebrow: "DIGITAL TRANSFORMATION",
      title: (
        <>
          Smart IT Services{" "}
          <em className="not-italic text-indigo-400">
             Tailored for Your Success
          </em>
        </>
      ),
      description:
        "Innovative infrastructure, cloud solutions, and managed services that scale with you.",
      primary: {
        label: "OUR SOLUTIONS",
        to: "/services",
      },
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85",
    },

    {
      eyebrow: "BUSINESS PROCESS OUTSOURCING",
      title: (
        <>
          Global BPO Services with{" "}
          <em className="not-italic text-indigo-400">
           a Personal Touch.
          </em>
        </>
      ),
      description:
        "Efficient, reliable, and cost-effective outsourcing — so you focus on what matters.",
      primary: {
        label: "EXPLORE BPO",
        to: "/services",
      },
      secondary: {
        label: "GET STARTED",
        to: "/contact",
      },
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85",
    },
  ]}
/>
     <Tools/>
    
      <AboutPreview />
      <ServicesSection />
      <WorkShowcase />
      <Process />
      <Metrics />
      <Testimonials />
      <CTA />
    </>
  );
}
