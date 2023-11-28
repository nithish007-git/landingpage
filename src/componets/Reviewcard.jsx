import { star } from "../assets/icons"

const Reviewcard = ({imgURl,customerName,rating,feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
    <img
    src={imgURl}
    alt="customer"
    className="rounded-full object-cover w-[120px] h-[120px] mt-2.4" 
    />    
    <p className="p-5 justify-center text-center max-w-sm info-text">{ feedback}</p>

    <div className=" flex justify-center items-center gap-4 -mt-2" >
        <img
         src={star}
         width={24}
         height={24}
         className="object-contain m-0"
        >
        </img>
        <p className="text-xl font-montserrat  text-slate-gray">({rating})</p>
    </div>
    <h2 className="font-montserrat  font-semibold text-center ">{customerName}</h2>
    </div>
  )
}

export default Reviewcard