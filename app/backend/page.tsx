import Footer from "../components/footer";
import NavBar from "../components/navbar";

const Backend: React.FC = () =>{
    return(
        <main className="w-full h-[100vh] flex flex-col justify-center">
            <NavBar/>
            <div className="mt-[50px] flex flex-col items-center justify-center">
                <div className="p-[30px] w-full bg-[#252525] border-[#333333] border-t-[2px] border-b-[2px]">
                    <h1 className="font-['Poppins'] text-[2em] font-semibold">Back-End Skills</h1>
                </div>
                <div className="flex flex-row w-full p-[50px] gap-[20px]">
                    <div className="flex flex-col gap-[20px] w-1/2">
                        <div className="">
                            <h2 className="font-['Poppins'] font-semibold">Co dělám ?</h2>
                            
                        </div>
                        
                        <div className="flex flex-row gap-[20px]">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 256 256"><path fill="#007ced" d="m230.14 70.54l-44.68-44.69a20 20 0 0 0-28.29 0L33.86 149.17A19.85 19.85 0 0 0 28 163.31V208a20 20 0 0 0 20 20h44.69a19.86 19.86 0 0 0 14.14-5.86L230.14 98.82a20 20 0 0 0 0-28.28M93 180l71-71l11 11l-71 71Zm-17-17l-11-11l71-71l11 11Zm-24 10l15.51 15.51L83 204H52Zm140-70l-39-39l18.34-18.34l39 39Z"/></svg>
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <h2 className="font-semibold font-['Poppins'] text-[.8em]">PHP</h2>
                                <p className="text-[#FFF] opacity-70 text-[.7em] w-3/4 font-light">Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou</p>
                            </div>

                        </div>
                        <div className="flex flex-row gap-[20px]">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="#007ced" d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4v-4.026c.502.617 1.215 1.129 2.008 1.525C7.58 16.285 9.7 16.75 12 16.75s4.42-.465 5.992-1.25c.793-.397 1.506-.91 2.008-1.526z"/><path fill="#007ced" d="M12 10.75c2.3 0 4.42-.465 5.992-1.25c.793-.397 1.506-.91 2.008-1.526V12c0 .5-1.786 1.591-2.679 2.158c-1.323.661-3.203 1.092-5.321 1.092s-3.998-.43-5.321-1.092C5.5 13.568 4 12.5 4 12V7.974c.502.617 1.215 1.129 2.008 1.525C7.58 10.285 9.7 10.75 12 10.75"/><path fill="#007ced" d="M17.321 8.158C15.998 8.819 14.118 9.25 12 9.25s-3.998-.43-5.321-1.092c-.515-.202-1.673-.843-2.477-1.879a.81.81 0 0 1-.162-.621c.023-.148.055-.301.096-.396C4.828 3.406 8.086 2 12 2c3.914 0 7.172 1.406 7.864 3.262c.041.095.073.248.096.396a.81.81 0 0 1-.162.621c-.804 1.036-1.962 1.677-2.477 1.879"/></svg>
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <h2 className="font-semibold font-['Poppins'] text-[.8em]">Database</h2>
                                <p className="text-[#FFF] opacity-70 text-[.7em] w-3/4 font-light">Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 gap-[20px]">
                        <h2 className="font-['Poppins'] font-semibold">Coding skills</h2>
                        <div className="flex flex-col w-full gap-[5px]">
                            <div className="flex flex-row w-full text-[.8em] font-semibold">
                                <h3 className="">PHP</h3>
                                <p className="ml-[auto]">10%</p>
                            </div>
                            <div className="w-full h-[4px] bg-[#444]  flex flex-col justify-center">
                                <div className="w-[10%] h-[3px] bg-[#007CED]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-[5px]">
                            <div className="flex flex-row w-full text-[.8em] font-semibold">
                                <h3 className="">MySQL</h3>
                                <p className="ml-[auto]">10%</p>
                            </div>
                            <div className="w-full h-[4px] bg-[#444]  flex flex-col justify-center rounded-lg">
                                <div className="w-[10%] h-[3px] bg-[#007CED] rounded-lg"></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default Backend;