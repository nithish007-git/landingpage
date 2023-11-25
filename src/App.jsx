import Nav from './componets/Nav';
import {
  Hero,
  CustomerReview,
  Footer,
  Popularproduct,
  Service,
  Subcribe,
  Superquality,
  Special
} from'./sections/index';


const App = () => {
  return (
    <main className="relative">
    <Nav/>
    <section className=" xl:p-10 xl:ml-10">
      <Hero/>
 
    </section>
    <section className="padding">
      <Popularproduct/>
    
    </section>
    <section className="padding">

      <Superquality/>
    
    </section>
    <section className="padding">
      <Service/>
    
    </section>
    <section className=" bg-pale-blue padding">
      
      <CustomerReview/>
    </section>
    <section className=" bg-pale-blue padding">
      
      <Special/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
     
      <Subcribe/>
  
    </section>
    <section className="padding-x bg-black pb-8 padding-t ">
    <Footer/>
    </section>

  </main>
  )
}

export default App