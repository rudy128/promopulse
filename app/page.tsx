import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Calendly from "./components/Calendly";
import StaticNav from "./components/StaticNav";

export default function Home() {
  return (
    <main className="text-white bg-[url('./bg.png')] bg-no-repeat bg-cover bg-left-bottom bg-origin-padding flex justify-center items-center flex-col">
      <Nav />
      <StaticNav />

      <Hero />
      <div className=" relative text-black p-16 w-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl md:text-5xl">We don<span>'</span>t want you to make a mistake now!</h1>
        <div className="lg:flex lg:space-x-5 space-y-6 justify-start h-[40dvh] w-full p-6 items-start">
          <div className="lg:inset-[150px_52.5dvw_auto_auto] hover:translate-x-2 hover:transition-transform sm:w-[65%] lg:w-1/2 lg:pr-32 lg:pl-40 lg:pb-28 ribbon-left bg-[#000000e7] backdrop-blur-sm text-white lg:text-lg p-6 sm:text-[0.7em] sm:pb-16 sm:pl-20 sm:inset-[18dvh_41dvw_auto_auto] text-[0.6em] pr-12 w-[80%] pl-8 pb-12 pt-2 inset-[25dvh_25dvw_auto_auto]">
            <h1 className="p-2 lg:text-3xl font-semibold">Let<span>'</span>s get to know each other if:</h1>
            <li>You<span>'</span>re willing to change your income.</li>
            <li>You<span>'</span>re looking for more time away from work</li>
            <li>You have a problem that you want solved (if you know it or not)</li>
          </div>
          <div className="lg:inset-[300px_-7dvw_auto_auto] hover:-translate-x-2 hover:transition-transform md:inset-[30dvh_-3dvw_auto_auto] lg:w-1/2 lg:pt-6 lg:pl-52 lg:pb-28 md:pl-16 md:pb-20 backdrop-blur-sm ribbon-right sm:pb-16 sm:pl-16 sm:inset-[50dvw_-1.5dvw_auto_auto] sm:w-[55%] sm:text-[0.7em] md:text-sm lg:text-lg p-6 bg-[#000000e7] text-white text-[0.5em] w-[75%] pb-12 pl-9 pt-3 sm:pt-0 inset-[45dvh_-4dvw_auto_auto]">
            <h1 className="p-2 lg:text-3xl font-semibold">Let<span>'</span>s not go down this road if:</h1>
            <li>You aren<span>'</span>t willing to provide data about your business</li>
            <li>You<span>'</span>re looking for temporary solutions</li>
            <li>You<span>'</span>re unwilling to collaborate</li>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="text-black font-bold text-[1.4rem]">Qualified? Great!</div>

      </div>
      <Calendly />
      <Footer />
    </main>
  );
}
