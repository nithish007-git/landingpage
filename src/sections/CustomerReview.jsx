import Reviewcard from "../componets/Reviewcard";
import { reviews } from "../constants/const1";


const CustomerReview = () => {
  return (
    <section className="max-container"> 
    <h3 className="font-palanquin text-center text-4xl font-bold">
      What Our <span className="text-coral-red">Customers</span> say?
    </h3>
    <p className="info-text  m-auto mt-3  max-w-lg text-center justify-center">Hear genuine stones trom our satisfied customers abogy
gneir exceptonal expenences With</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col ">
        {reviews.map((review)=>(
          <Reviewcard
          key={review.customerName}
          imgURl={review.imgURL}
          customerName={review.customerName}
          rating ={review.rating}
          feedback={review.feedback}
          />
        )

        )
        }
        
      </div>
    </section>
  )
}

export default CustomerReview