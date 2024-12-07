import ScrollObserver from "@/utils/scroll-observer";
import Intro from "./home/page";
import About from "./about-us/page";
import Services from "./services/page";
import Gallery from "./gallery/page";
import Testimonials from "./testimonials/page";
import Blogs from "./blog/page";
import ContactUs from "./contact-us/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollObserver>
        <Intro />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Blogs />
        <ContactUs />
      </ScrollObserver>
    </main>
  );
}
