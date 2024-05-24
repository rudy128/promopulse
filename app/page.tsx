import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Calendly from "./components/Calendly";

export default function Home() {
  return (
    <main className="text-white flex justify-center items-center flex-col">
      <Nav />
      <div className='bg-black h-[5dvh] flex justify-between items-center w-full px-10 p-6'>
        <button className="hover:text-white/80">Home</button>
        <button className="rounded-lg border p-1 px-3 hover:bg-white hover:text-black font-bold border-white">Book a Slot now!</button>
      </div>

      <Hero />
      <div className="bg-[#fff] text-black p-16 w-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">Are you him/ Are you her?</h1>
        <div className="lg:flex lg:space-x-5 space-y-6 justify-around w-full p-6 items-center">
          <div className="border text-2xl rounded-xl shadow-md p-6">
            <h1 className="p-2 text-3xl font-semibold">Let<span>'</span>s get to know each other if:</h1>
            <li>You<span>'</span>re willing to change your income.</li>
            <li>You<span>'</span>re looking for more time away from work</li>
            <li>You have a problem that you want solved (if you know it or not)</li>
          </div>
          <div className="border text-2xl shadow-md rounded-xl p-6">
            <h1 className="p-2 text-3xl font-semibold">Let<span>'</span>s not go down this road if:</h1>
            <li>You aren<span>'</span>t willing to provide data about your business</li>
            <li>You<span>'</span>re looking for temporary solutions</li>
            <li>You<span>'</span>re unwilling to collaborate</li>
          </div>
        </div>
      </div>
      <Calendly />
      <Footer />
    </main>
  );
}
