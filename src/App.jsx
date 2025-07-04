import Nav from "./components/Nav";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import NewArrivals from "./components/NewArrivals";



function App() {
  return (
    <>
      
      <main id="home" className="relative">
          <Nav className="p-4"/>
          <section className="flex justify-center items-center p-8 bg-[#fff2ce] min-h-[100vh] max-sm:flex-col-reverse max-sm:p-4 max-sm:text-center ">
              <Home/>
          </section>
          <section  className="p-8 py-15 min-h-[150vh] max-sm:p-4  max-sm:py-15">
            <ProductPage/>
          </section>
          <section className="p-8 py-15 max-sm:p-4  max-sm:py-15">
            <NewArrivals />
          </section>
      </main>
    </>
  )
}

export default App
