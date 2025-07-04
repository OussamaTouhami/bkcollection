import { homeContent } from "../websiteContent";

function Home(){
    return(
        <>
            <div className="homeDescription">
                <h1 className="text-[3rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-[600] ">{homeContent.title}</h1>
                <p className="w-full max-w-[70%] max-sm:mx-auto max-sm:my-0 max-sm:max-w-[90%]">{homeContent.description}</p>
                <button className="border-4 py-2 px-5 my-8 border-black cursor-pointer transtion ease duration-300 hover:bg-black hover:text-white">{homeContent.button}</button>
            </div>
            <div className="homeImage">
                <img src={homeContent.homeImg} alt={homeContent.imgAlt} className="w-[400px] max-sm:w-[250px]"/>
            </div>
        </>
    )
}
export default Home;