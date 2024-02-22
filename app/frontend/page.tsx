import Footer from "../components/footer";
import NavBar from "../components/navbar";

const FrontEnd: React.FC = () =>{
    return(
        <main className="w-full h-[100vh] flex flex-col justify-center">
            <NavBar/>
            <div className="mt-[50px] flex flex-col items-center justify-center">
                <div className="p-[30px] w-full bg-[#252525] border-[#333333] border-t-[2px] border-b-[2px]">
                    <h1 className="font-['Poppins'] text-[2em] font-semibold">Front-End Skills</h1>
                </div>
                <div className="flex flex-row w-full p-[50px] gap-[20px]">
                    <div className="flex flex-col gap-[20px] w-1/2">
                        <h2 className="font-['Poppins']">Co dělám ?</h2>
                        <div className="flex flex-row gap-[20px]">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 256 256"><path fill="#007ced" d="m230.14 70.54l-44.68-44.69a20 20 0 0 0-28.29 0L33.86 149.17A19.85 19.85 0 0 0 28 163.31V208a20 20 0 0 0 20 20h44.69a19.86 19.86 0 0 0 14.14-5.86L230.14 98.82a20 20 0 0 0 0-28.28M93 180l71-71l11 11l-71 71Zm-17-17l-11-11l71-71l11 11Zm-24 10l15.51 15.51L83 204H52Zm140-70l-39-39l18.34-18.34l39 39Z"/></svg>
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <h2 className="font-semibold font-['Poppins'] text-[.8em]">UI / UX Design</h2>
                                <p className="text-[#FFF] opacity-70 text-[.9em] font-light w-3/4">Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou</p>
                            </div>

                        </div>
                        <div className="flex flex-row gap-[20px]">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 14 14"><path fill="none" stroke="#007ced" stroke-linecap="round" stroke-linejoin="round" d="M12.93 11.34a42.073 42.073 0 0 0-11.86 0a.5.5 0 0 1-.57-.49V2.49A.49.49 0 0 1 1.07 2c3.934.55 7.926.55 11.86 0a.49.49 0 0 1 .57.48v8.36a.501.501 0 0 1-.57.5M7 10.92v2.5m-2.5 0h5"/></svg>
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <h2 className="font-semibold font-['Poppins'] text-[.8em]">HTML, CSS, JavaScript</h2>
                                <p className="text-[#FFF] opacity-70 text-[.9em] font-light w-3/4">Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou</p>
                            </div>

                        </div>
                        <div className="flex flex-row gap-[20px]">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><g fill="none" stroke="#007ced" stroke-width="1.5"><path d="M3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9"/><path stroke-miterlimit="16" d="M14.833 21v-6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6"/><path d="m21.818 9.364l-1.694-5.929A.6.6 0 0 0 19.547 3H15.5l.475 5.704a.578.578 0 0 0 .278.45c.39.233 1.152.663 1.747.846c1.016.313 2.5.2 3.346.096a.57.57 0 0 0 .472-.732Z"/><path d="M14 10c.568-.175 1.288-.574 1.69-.812a.578.578 0 0 0 .28-.549L15.5 3h-7l-.47 5.639a.578.578 0 0 0 .28.55c.402.237 1.122.636 1.69.811c1.493.46 2.507.46 4 0Z"/><path d="m3.876 3.435l-1.694 5.93a.57.57 0 0 0 .472.73c.845.105 2.33.217 3.346-.095c.595-.183 1.358-.613 1.747-.845a.578.578 0 0 0 .278-.451L8.5 3H4.453a.6.6 0 0 0-.577.435Z"/></g></svg>
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <h2 className="font-semibold font-['Poppins'] text-[.8em]">Sass,  Green Sock, React</h2>
                                <p className="text-[#FFF] opacity-70 text-[.7em] font-light w-3/4">Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 gap-[20px]">
                        <h2 className="font-['Poppins']">Coding skills</h2>
                        <div className="flex flex-col w-full gap-[5px]">
                            <div className="flex flex-row w-full text-[.8em] font-semibold">
                                <h3 className="">HTML</h3>
                                <p className="ml-[auto]">100%</p>
                            </div>
                            <div className="w-full h-[4px] bg-[#444]  flex flex-col justify-center">
                                <div className="w-full h-[3px] bg-[#007CED]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-[5px]">
                            <div className="flex flex-row w-full text-[.8em] font-semibold">
                                <h3 className="">CSS</h3>
                                <p className="ml-[auto]">80%</p>
                            </div>
                            <div className="w-full h-[4px] bg-[#444]  flex flex-col justify-center rounded-lg">
                                <div className="w-[80%] h-[3px] bg-[#007CED] rounded-lg"></div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-[5px]">
                            <div className="flex flex-row w-full text-[.8em] font-semibold">
                                <h3 className="">JavaScript</h3>
                                <p className="ml-[auto]">60%</p>
                            </div>
                            <div className="w-full h-[4px] bg-[#444]  flex flex-col justify-center rounded-lg">
                                <div className="w-[60%] h-[3px] bg-[#007CED] rounded-lg"></div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-[5px]">
                            <div className="flex flex-row w-full text-[.8em] font-semibold">
                                <h3 className="">React</h3>
                                <p className="ml-[auto]">35%</p>
                            </div>
                            <div className="w-full h-[4px] bg-[#444]  flex flex-col justify-center rounded-lg">
                                <div className="w-[35%] h-[3px] bg-[#007CED] rounded-lg"></div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-[5px]">
                            <div className="flex flex-row w-full text-[.8em] font-semibold">
                                <h3 className="">Sass</h3>
                                <p className="ml-[auto]">30%</p>
                            </div>
                            <div className="w-full h-[4px] bg-[#444]  flex flex-col justify-center rounded-lg">
                                <div className="w-[30%] h-[3px] bg-[#007CED] rounded-lg"></div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-[5px]">
                            <div className="flex flex-row w-full text-[.8em] font-semibold">
                                <h3 className="">GreenShock</h3>
                                <p className="ml-[auto]">20%</p>
                            </div>
                            <div className="w-full h-[4px] bg-[#444]  flex flex-col justify-center rounded-lg">
                                <div className="w-[20%] h-[3px] bg-[#007CED] rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default FrontEnd;