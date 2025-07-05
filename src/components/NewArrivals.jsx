import ProductCard from "./ProductCard";
import { newArrivalsContent, products } from "../websiteContent";
import { useState } from "react";

function NewArrivals() {
    const [details, setDetails] = useState({});

    function detailBox(productName, description) {
        setDetails({ productName, description });
    }

    return (
        <>
            <h1 id="catalogue" className="text-center text-[2rem] font-[600] mt-15 mb-2">
                {newArrivalsContent.title}
            </h1>
            <p className="text-center">{newArrivalsContent.description}</p>

            <div className="products flex justify-center items-center gap-[2rem] flex-wrap my-10 text-center">
                {products.newProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        className="card p-3 rounded-[5px] max-sm:w-[90%]"
                        image={product.productImage}
                        title={product.productTitle}
                        price={product.productPrice}
                        rating={product.productRating}
                        handleDetails={() => detailBox(product.productTitle, product.productDescription)}
                    />
                ))}
            </div>

            {/* Details Modal with Blur */}
            {details.productName && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="bg-white text-black p-6 shadow-xl rounded-lg w-[80%] max-w-lg relative">
                        <button
                            onClick={() => setDetails({})}
                            className="absolute top-2 right-3 text-[#ffbb00] text-[1.5rem] font-bold"
                        >
                                            <i className="fa-solid fa-xmark"></i>

                        </button>
                        <h2 className="text-2xl font-semibold mb-4">{details.productName}</h2>
                        <p className="text-gray-700">{details.description}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default NewArrivals;
