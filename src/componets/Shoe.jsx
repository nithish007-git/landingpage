
const handleclick=()=>{
    if(bigShoeImg!==imgURL.bigShoe){
        changeBigShoeImage(imgURL.bigShoe)
    }
}
const Shoe = ({imgURL,changeBigShoeImage,bigShoeimg}) => {
  return (
    <div className={`border-2 rounded-xl
    ${bigShoeimg ===imgURL ?'border-coral-red' : 'border-transparent'} 
    cursor-pointer max-sm:flex-1`}
        onClick={handleclick} >
            <div className="flex justify-center bg-card  sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                src={imgURL.thumbnail} 
                width={124}
                height={105}
                className="object-contain"
                ></img>
            </div>
    </div>
  )
}

export default Shoe