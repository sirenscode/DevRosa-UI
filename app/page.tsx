import Image from "next/image";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

const Home: React.FC = () =>{
  return(
    <main className="w-full h-full flex flex-col items-center">
      <NavBar/>
      <div className="w-3/4 h-[93vh] flex flex-row items-center justify-center gap-[50px]">
        <div className="flex flex-col items-center">
          <Image alt="profile" src={"/images/port.webp"} height={300} width={300} className="rounded-full border-[10px] border-[#444444] shadow-2xl shadow-[#000]"/>
        </div>
        <div className="w-1/2 flex flex-col items-left gap-[10px]">
          <p className="text-[#999]">Full Stack Developer</p>
          <h1 className="text-[2.5em] font-semibold font-['Poppins']">DevRos</h1>
          <p className="text-[#EEE] text-[.8em] font-['Poppins']">Potřebujete vytvořit webové stránky ? Při tvorbě webových stránek zajišťuji celkový design od návrhu až po realizaci. Perfektní technickou stránku zajistišťuji též, aby všechno běželo přesně jak má. Kdyby by Vás mé portofilo přípradně zkušenosti zaujaly - napište mi !</p>
          <div className="flex flex-row gap-[20px] text-[15px]">
            <button className="p-1 w-[100px] rounded-[20px] border-[#007CED] border-[2px] bg-[#333] ">Portfolio</button>
            <button className="bg-[#333] border-[2px] w-[100px] rounded-[20px]">Kontakt</button>
          </div>
        </div>        
      </div>
      <Footer/>
      

    </main>
  )
}

export default Home;