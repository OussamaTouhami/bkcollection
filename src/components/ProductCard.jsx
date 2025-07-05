function ProductCard({handleDetails, image, title, price, rating, ...props}) {
    return (
        <div
            {...props}
            className={`card p-3 rounded-[20px] w-full max-w-[300px] max-sm:w-[100%] overflow-hidden text-center ${props.className || ""}`} 
        >
            <div className="overflow-hidden ">
                <img
                    src={image}
                    alt={title}
                    className="w-[250px] mx-auto transition-transform duration-300 ease-in-out hover:scale-110 active:scale-105"

                />
            </div>
            <h1 className="text-[1.5rem] font-[700] mt-3">{title}</h1>
            <p className="text-[1.2rem] text-red-500 font-extrabold">{price}</p>
            <p className="">{rating}</p>
            <button onClick={handleDetails} className="detailsBtn">More Details</button>
        </div>
    );
}

export default ProductCard;
