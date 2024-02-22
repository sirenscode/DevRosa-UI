import Footer from "../components/footer";
import NavBar from "../components/navbar";

const Portfolio: React.FC = () =>{
    return(
        <main>
            <NavBar/>
            <div className="w-full mt-[50px]">
                <div className="p-[30px] w-full bg-[#252525] border-[#333333] border-t-[2px] border-b-[2px]">
                    <h1 className="font-['Poppins'] text-[2em] font-semibold">Portfolio</h1>
                </div>
                <div className="w-full p-[30px] flex flex-col gap-[20px]">
                    <h2 className="font-['Poppins'] font-semibold text-[1.1em]">Klienti</h2>
                    <div className="flex flex-row gap-[30px] text-[.8em] font-['Poppins'] text-[#999]">
                        <p className=""><strong>Dev</strong>Ros</p>
                        <p className="">Cukrárna <strong>Merkur</strong></p>
                        <p className="">Pekárna <strong>Merkur</strong></p>
                        <p className="">Místo pro tvoji firmu</p>

                    </div>
                </div>
                <div className="p-[30px]">
                    <h2 className="font-['Poppins'] font-semibold text-[1.1em]">Galerie</h2>
                    <div className="flex flex-row text-[.8em] font-['Poppins'] gap-[20px] text-[#999]">
                        <a href="#"><strong>All</strong></a>
                        <a href="#">Web</a>
                        <a href="#">Komponenty</a>
                        <a href="#">Animace</a>
                        <a href="#">Mockups</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>

    )
}

export default Portfolio;