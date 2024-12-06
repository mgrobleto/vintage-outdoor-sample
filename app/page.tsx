import ScrollObserver from "@/utils/scroll-observer";
import Image from "next/image";
import Intro from "./home/page";
import About from "./about-us/page";

export default function Home() {
  return (
    <main>
      <ScrollObserver>
        <Intro />
        <About />
      </ScrollObserver>
    </main>
  );
}
