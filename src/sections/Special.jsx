import Button1 from "../componets/Button";
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images";
const Special = () => {
  return (
    <section className='relative top-24  flex justify-wrap  max-xl:flex-col-reverse  gap-10 max-container'>
        <img  src={offer} width={773} height={687}></img>
      <div className="flex-1 flex flex-col">
        <h2 className='text-4xl font-palanquin font-semibold lg:max-w-lg'><span  className='text-coral-red text'>Special </span>Offer.</h2>
        <p className='font-montserrat leading-5 mt-4 info-text'>Embark on a shopping Journey that redefines your experience with unbeatable deals<br></br> From premier selections to incredible
          savings, we offer unparalleled value that sets us apart.</p>
          <p className='font-montserrat leading-6 mt-6 lg:max-w-lg info-text' >Navigate a realm of possibilities desggned to fulfill your unvque desires. surpassing the<br/> loftiest expectations. your journey with
          us is nothing short of exceptional.</p>
      <div className="pt-6">

    <Button1 label="Shop more"  iconRel={arrowRight} className="pt-6"/>
      </div>
      </div>
    </section>
  )
}

export default Special