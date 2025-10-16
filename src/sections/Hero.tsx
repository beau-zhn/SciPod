import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  // items-center aligning vertically, justify-center alugning horizontally 
  return <section className="relative flex items-center h-[492px] md:h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
    style={{
      backgroundImage: `url(${starsBg.src})`,
    }}>
    
    <div className="absolute inset-0 bg-[radial-gradient(50%_70%_at_center_center,rgba(69,255,109,0.5)_15%,rgba(0,36,25,0.5)_78%,transparent)]"></div>



    <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-green-500 rounded-full border border-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(69,255,109)_37.7%,rgb(0,66,42))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(69,255,128)]"></div>
    <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] rounded-full border opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 ">
    <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute h-5 w-5 left-full  border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
      <div className=" h-2 w-2 bg-white rounded-full"></div>
    </div>
    </div>
    <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed "></div>
    <div className="absolute h-[555px] w-[555px] md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
       <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
     <div className="absolute h-2 w-2 left-full bg-white rounded-full top-1/2 -translate-x-1 -translate-y-1/2"></div>
    </div>
      
    <div className="container relative z-10 mt-16">
      <h1
        className="text-8xl md:text-[150px] md:leading-none font-semibold tracking-tighter text-transparent bg-clip-text text-center"
        style={{
          backgroundImage:
            "radial-gradient(100% 100% at top left, white, white, rgba(32,138,94,0.9))",
        }}
      >
        SCI POD
      </h1>


      <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center">
        Science isn’t just facts — it’s curiosity, passion, and the thrill of discovery. Tune in to explore it all

      </p>
      <div className="mt-5  flex justify-center">

        <Button> Let's get started </Button>
      </div>

    </div>
  </section>;
};
