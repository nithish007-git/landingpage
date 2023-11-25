import {headerLogo} from "../assets/images";
import {hamburger} from"../assets/icons";
import {navLinks} from "../constants/const1"

const Nav = () => {
  return (
    <header className="padding-x py-10 absolute z-10  w-full">
        <nav className="flex justify-between items-center max-cointainer">
            <a href='/'>
                <img 
                src={headerLogo}
                alt="logo"
                width={130}
                height={29}
                ></img>
            </a>

            <ul className=" flex-1 flex justify-center items-center gap-16 max-lg:hidden">

                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a
                        href={item.href}
                        className="font-monserrat leading-normal text-lg text-slate-grey"
                        >
                            {item.label}

                        </a>
                        
                    </li>

                    
            ))}


            </ul>

            <div className="hidden max-lg:block">
                <img 
                src={hamburger}
                width={30}
                height={20}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav