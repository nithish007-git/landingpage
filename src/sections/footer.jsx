import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants/const1"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-center gap-20 flex-wrap 
      max-lg:flex-col
      ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img 
            src={footerLogo}
            width={150}
            height={46}
            ></img>
          </a>
          <p className="mt-6 text-base leading-8 font-palanquin text-white-400 sm:max-w-sm "> 
          Get shoes ready for the new term at
          your nearest Nike store. Find
          Your perfect Size In Store. Get
          </p>
          <div className="flex items-center gap-5 mt-4"> 
          {socialMedia.map((item)=>(
            <div className="flex items-center gap-5 justify-center w-12 h-12 rounded-full">
              <img
              src={item.src}
              alt={item.alt}
              width={25}
              height={25}

              >
              </img>
              </div>
          ))}

          </div>
          <div className="flex flex-1 justify-between lg:gap-8  gap-20 flex-wrap">
            {footerLinks.map((section)=>(
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link)=>(
                  <li className="mt-3 text-white-400 font-montserrat text-base leading-normal
                   cursor-pointer hover:text-slate-grey">
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
              </div>



            ))}

          </div>

        </div>

      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sn:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2.4">
          <img
          src={copyrightSign}
          alt="Nike"
          >
          </img>
          <p className="pl-5"> copyright.All rights reserved </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer