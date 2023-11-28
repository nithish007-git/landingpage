import { star } from "../assets/icons"

const PopularProduct = ({imgURL , name ,price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img
        src={imgURL}  alt={name}
        className="w-[290px] h-[280px]"
        >
        </img>

        <div className="mt-10 flex items-start gap-2 justify-start  sm:ml-5">
            <img src={star} alt="rating" width={24} height={24}/>
            <p className="font-montserrat text-xl text-slate-800   text-center">4.5</p>


        </div>
            <h3 className="font-montserrat mt-2.5 justify-start font-semibold  sm:ml-5">{name}</h3>
            <p className="font-montserrat  mt-1.5 justify-start sm:ml-5 text-coral-red">{price}</p>
    </div>
  )
}

export default PopularProduct