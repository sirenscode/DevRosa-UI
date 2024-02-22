const Footer: React.FC = () =>{
    return(
        <div className="w-full mt-[auto] flex flex-row p-3 border-t-[2px] border-[#333]">
          <div className="flex flex-row text-[#999] gap-[10px] text-[.8em]">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
          </div>
          <div className="text-[#999] text-[.8em] ml-[auto]">
            <span className="text-[rgba(255,255,255,0.8)]">© 2022 Všechna práva vyhrazena.</span>
          </div>
      </div>
    )
}

export default Footer;