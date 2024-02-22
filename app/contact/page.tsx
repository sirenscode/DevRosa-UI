import Footer from "../components/footer";
import NavBar from "../components/navbar";

const Contact: React.FC = () =>{
    return(
        <main className="w-full">
            <NavBar/>
            <div className="mt-[50px] h-[40vh]">
                <div className="p-[30px] w-full bg-[#252525] border-[#333333] border-t-[2px] border-b-[2px]">
                    <h1 className="font-['Poppins'] text-[2em] font-semibold">Kontakt</h1>
                </div>
            </div>
            <div className="w-full flex flex-row items-center justofy-center p-[30px]">
                <div className="w-1/3 flex flex-col">
                    <div className="flex flex-row gap-[10px]">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 16 16"><path fill="#007ced" d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0a1 1 0 0 0 2 0"/></svg>
                        </div>
                        <div className="flex flex-col font-['Poppins'] gap-[10px]">
                            <h3 className="font-semibold">720 244 551 -2</h3>
                            <p className="text-[.8em] text-[#999]">Fahradit klasický smysluplný text vhodnou bezvýznamovo</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px]">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 32 32"><path fill="#007ced" d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"/><path fill="#007ced" d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395"/></svg>
                        </div>
                        <div className="flex flex-col font-['Poppins'] gap-[10px]">
                            <h3 className="font-semibold">Česká Republika</h3>
                            <p className="text-[.8em] text-[#999]">Fahradit klasický smysluplný text vhodnou bezvýznamovo</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px]">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 20 20"><path fill="#007ced" fill-rule="evenodd" d="M18.333 2.5c.92 0 1.667.746 1.667 1.667v11.666c0 .92-.746 1.667-1.667 1.667H1.667C.747 17.5 0 16.754 0 15.833V4.167C0 3.247.746 2.5 1.667 2.5zM7.168 11.328l-4.91 4.852h15.325l-4.857-4.802L10 13.265zM18.64 7.292l-4.796 3.316l4.796 4.736zm-17.279.061v7.836l4.686-4.631zm16.956-3.532H1.698a.358.358 0 0 0-.25.086a.26.26 0 0 0-.085.222v1.62L10 11.656l8.644-5.965V4.199c.001-.134-.03-.231-.092-.292a.306.306 0 0 0-.234-.086"/></svg>
                        </div>
                        <div className="flex flex-col font-['Poppins'] gap-[10px]">
                            <h3 className="font-semibold">fiktivni@gmail.com</h3>
                            <p className="text-[.8em] text-[#999]">Fahradit klasický smysluplný text vhodnou bezvýznamovo</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-[20px] font-['Poppins'] w-3/4">
                    <h2 className="font-semibold text-[1.2em]">Kontaktuj mě !</h2>
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-row gap-[20px] w-full">
                            <div className="flex flex-col gap-[10px] w-1/3">
                                <input type="text" placeholder="Jméno a přijmení" className="border-[#555] border-[1px] rounded-[6px] bg-[transparent] p-2 text-[.7em]"></input>
                                <input type="text" placeholder="Email" className="border-[#555] border-[1px] rounded-[6px] bg-[transparent] p-2 text-[.7em]"></input>
                                <select className="border-[#555] border-[1px] rounded-[6px] bg-[transparent] p-2 text-[.7em]" value={"Zpráva..."} />
                            </div>
                            <div className="w-1/3">
                                <textarea className="w-full h-full rounded-[6px] border-[#555] border-[1px] bg-[transparent]" placeholder="Zpráva..."/>
                            </div>
                        </div>
                        
                        <button className="w-[100px] rounded-[20px] bg-[#333] text-[.8em] h-[30px] border-[#007CED] border-[2px]">Odeslat</button>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default Contact;