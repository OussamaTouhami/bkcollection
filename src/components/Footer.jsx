function Footer() {
  return (
    <footer className="bg-gray-900 text-white pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            
            <div className="ml-4">
              <h2 className="text-xl font-bold"><span className="text-[#ffbb00]">BK</span>collection</h2>
              <p className="text-gray-400 text-sm">Perfums</p>
            </div>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
                <div className="socials flex gap-4 text-[1.5rem]">
                    <a href="#instagram.com"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#facebook.com"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
          </div>
          
          <p className="text-gray-400 text-sm ">
            &copy; {new Date().getFullYear()} BKcollection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;