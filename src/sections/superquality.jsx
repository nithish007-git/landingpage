import { shoe8 } from "../assets/images";
import Button1 from "../componets/Button";



const Superquality = () => {
  return (
   <section>
    <div className="">
       <div className=" flex-1  justify-center items-center absolute ">
          <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain xl:relative xl:left-96 xl:ml-80 hidden md:block sm:hidden "
          ></img>

</div>
      <h2 className="text-4xl font-bold justify-center gap-4.5 font-palanquin"> We Provide You <span className="text-coral-red">Super <br></br>Quality</span> Shoes </h2>
       <p className="mt-8 font-montserrat ">Ensuring premium comfort and style , our meticulusly crafted footwear is<br/> designed to elavate your experience . 
       Our dedication to detail and<br/> excellenece ensure your satisfaction . </p>
       <div className="pt-8">
    <Button1 label="view details"/>
  
       
      </div>
    </div>


   </section>
  )
}

export default Superquality