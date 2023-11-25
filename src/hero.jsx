import { useState } from "react"
import { arrowRight } from "./assets/icons"
import { bigShoe1 } from "./assets/images"
import Button11 from "./componets/Button"
import Shoe from "./componets/Shoe"
import { shoes, statistics } from "./constants/const1"

const Hero = () => {
  const [bigShoeimg,setbigshoe]=useState(bigShoe1);
  const handleme=()=>{
    console.log("print");
  }
  return (
    <section
    id="home"
    className="w-full  p-2 xl:flex-row flex-col justify-center min-h-screen max-cointainer">
   <div className="relative xl:w-2/5 flex flex-col justify-center
    items-start w-full max-xl:padding-x pt-28">
      <p className="text-coral-red text-xl font-montserrat"> Our summer Collection
      </p>
      <h1 className="mt-5 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[85] font-bold py-2">
        <span className="xl:bg-white xl:whitespace-nowrap
        relative z-10 pr-10">The New Arrival </span>
        <br/>
        <span className="text-coral-red  inline-block mt-3" >Nike </span> Shoes
      </h1>

      <p className="font-montserrat text-slate-500 text-lg mt-6 mb-6 sm:max-w-sm leading-8"> Discover the Nike quality shoes for your Life. comfort and innvoation for your active lifes</p>
      <Button11 label="shop" iconRel={arrowRight}/>

     
   </div>
  
  <div className="flex justify-start items-start 
   w-full gap-16 mt-14 px-14 flex-wrap-reverse">
    {statistics.map((item,index)=>(
      <div>
        <p className="text-4xl text-slate-600 font-bold"> {item.value}</p>
        <p className="text-xl pl-2 leading-10 text-slate-600 font-montserrat">{item.label}</p>
        </div>
    ))}

  </div>

  <div className="absoulte flex-1 flex justify-center items-center xl:min-h-screen
  ">
    {/* <img
    src={bigShoe1}
    alt="shoecollection"
    width={610}
    height={500}
    className="object-position: top;"
    ></img> */}
    <img
    src={bigShoeimg}
    width={510}
    height={500}
    className=" xl:absolute  xl:top-24  xl:right-52     xl:z-10 sm:relative sm:pt-10"
    >

    </img>

  </div>

  <div className=" xl:absolute xl:top-48 xl:pt-48  xl:mt-48
   xl:right-16  flex gap-3 sm:gap-6 sm:pt-8 sm:pl-10 ">
    {
      shoes.map((shoe)=>(
        <div key={shoe}>
          <Shoe 
          imgURL={shoe}
          changeBigShoeImage={(shoe)=>{setbigshoe(shoe)}}
          bigShoeimg={bigShoeimg}
          Onclick={handleme}
          />

          </div>
      ))
    }
  </div>

    </section>

    
    // <div> hero</div>
  )
}

export default Hero