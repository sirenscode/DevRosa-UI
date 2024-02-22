const NavBar: React.FC = () =>{
    return(
    <nav className="w-full flex flex-row p-[30px] fixed top-0">
        <div className="flex flex-row gap-[10px] items-center">
            <div className="w-[30px] h-[30px] bg-[#007CED] rounded-full flex flex-col items-center justify-center">
                <span className="font-['Ribeye'] text-[1.2em]">R</span>
            </div>
            <h1 className=""><span className="font-semibold">Dev</span>Ros</h1>
        </div>

        <div className="ml-[auto] flex flex-row text-[.8em] text-[rgba(255,255,255,0.5)] font-light gap-[50px]">
          <a href="#" className="text-[#FFF]">Demu</a>
          <a href="/frontend">Front-End Skills</a>
          <a href="/backend">Back end skills</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Kontakt</a>
        </div>

      </nav>
    )
}

export default NavBar;