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
    <section className=" xl:pt-10 xl:ml-10">
      <Hero/>
 
    </section>
    <section className=" xl:absolute xl:ml-10 xl:top-96 xl:pt-96 xl:mt-20 sm:top-5 sm:mt-10 sm:ml-10">
      <Popularproduct/>
    
    </section>

    <section className="padding">

      <Superquality/>
    
    </section>
    <section className=" bg-pale-blue padding">
      
      
      <Special/>
    </section>
    <section className="bg-indigo-500/10 padding">
      <CustomerReview/>
    </section>
    <section className="padding-x bg-black pb-8 padding-t ">
    <Footer/>
    </section>

  </main>
  )
}

export default App