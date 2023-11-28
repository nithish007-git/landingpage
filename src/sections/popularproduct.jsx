import PopularProduct from "../componets/PopularProduct";
import { products } from "../constants/const1";


const Popularproduct = () => {
  return (
    <section className="relative top-0 max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
      <h1 className="text-coral-red text-4xl font-palanquin  font-bold leading-9"> Our Popular product</h1>
      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-800"> Experience top-notch quality and style with our sought-after selections Discover the new World</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 xl:gap-18"> 
      { products.map((product)=>(
        <PopularProduct 
        key={product.id}{...product}
        ></PopularProduct>
      ))

      }

      </div>
    </section>
  )
}

export default Popularproduct