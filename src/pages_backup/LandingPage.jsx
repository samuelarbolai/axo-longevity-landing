import Hero1 from "../components/Hero1";
import Landing2 from "../components/Landing2";
import Landing3 from "../components/Landing3";
import Landing4 from "../components/Landing4";
import Landing5 from "../components/Landing5";
import Landing6 from "../components/Landing6";
import Landing7 from "../components/Landing7";
import Landing8 from "../components/Landing8";
import Manifesto from "../components/Manifesto";
import Hero1B from "../components/Hero1B";

export default function LandingPage({ variant }) {
  return (
    <main>
      {variant === 'a' ? <Hero1 /> : <Hero1B />}
      <Landing2 variant={variant} />
      <Landing3 />
      <Landing4 />
      <Landing5 />
      <Landing6 />
      <Manifesto />
      <Landing7 />
      <Landing8 />

    </main>
  );
}
