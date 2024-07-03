import Hero from "@/components/Hero";
import GlitcheLayout from "@/layouts/GlitcheLayout";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import ContactsInfo from "@/components/ContactsInfo";
import dynamic from "next/dynamic";

const Clients = dynamic(() => import("@/components/Clients"), {
    ssr: false,
});
const RecentWorks = dynamic(() => import("@/components/RecentWorks"), {
    ssr: false,
});
const Blog = dynamic(() => import("@/components/Blog"), {
    ssr: false,
});

const page = () => {
  return (
    <GlitcheLayout onepage={true}>
        <Hero mouse={true} />
        <About />
        <Resume />
        <Skills />
        {/*<Services />*/}
        {/*<Clients />*/}
        {/*<RecentWorks />*/}
        <Blog />
        <ContactsInfo />
    </GlitcheLayout>
  );
};
export default page;
