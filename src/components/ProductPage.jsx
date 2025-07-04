import { offersImages, prductPageContent, prductPageButtons, products } from "../websiteContent.js";
import TabButton from "./TabButtons.jsx";
import ProductCard from "./ProductCard.jsx";
import { useState } from "react";

function ProductPage() {
    const [tab, setTab] = useState("allProducts");
    const [details, setDetails] = useState({});

    function handleClick(btnValue) {
        setTab(btnValue);
        setDetails({}); 
    }

    function detailBox( productName, description) {
        setDetails({ productName, description });
    }

    return (
        <>
            {/* Offer Images */}
            <div className="offers flex justify-center gap-4 flex-wrap">
                {offersImages.map((offer, index) => (
                    <img
                        key={index}
                        src={offer.imageUrl}
                        className="h-[250px] max-sm:h-auto"
                        alt={`Offer ${index + 1}`}
                    />
                ))}
            </div>

            {/* Title and Description */}
            <h1 id="catalogue" className="text-center text-[2rem] font-[600] mt-15 mb-2">
                {prductPageContent.title}
            </h1>
            <p className="text-center">{prductPageContent.description}</p>

            {/* Tab Buttons */}
            <div className="tabButtons flex flex-wrap gap-4 justify-center my-4">
                <TabButton isSelected={tab === "allProducts"} onSelect={() => handleClick("allProducts")}>
                    All Products
                </TabButton>
                <TabButton isSelected={tab === "mensCollection"} onSelect={() => handleClick("mensCollection")}>
                    Men's Collection
                </TabButton>
                <TabButton isSelected={tab === "womensCollection"} onSelect={() => handleClick("womensCollection")}>
                    Women's Collection
                </TabButton>
            </div>

            {/* Product Cards */}
            {tab && (
                <div key={tab} className="products flex justify-center items-center gap-[2rem] flex-wrap my-10 text-center">
                    {products[tab].map((product, index) => (
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
            )}

            {/* Detail Box */}
           {details.productName && (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-white text-black p-8 shadow-xl rounded-lg w-[80%] max-w-lg relative">
            <button
                onClick={() => setDetails({})}
                className="absolute top-2 right-3 text-[#ffbb00] text-[2rem] font-bold cursor-pointer"
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

export default ProductPage;
