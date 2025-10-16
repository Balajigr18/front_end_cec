import React from "react";


const Hero = () => {
 return (
   <div className="relative bg-yellow-50">
     {/* Background image */}
     <div
       className="absolute inset-0 bg-cover bg-center opacity-30"
       style={{ backgroundImage: "url('/src/assets/spices-hero.jpg')" }}
     ></div>


     {/* Content */}
     <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
       {/* <h1 className="text-4xl md:text-6xl font-extrabold text-red-800 mb-4">
         SouthSpice Wholesale
</h1>
       <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mb-6">
         Premium masalas and spices delivered across South India for retailers
         and distributors.
       </p>
       <button className="bg-red-800 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition duration-300">
         Explore Products
       </button> */}
     </div>
   </div>
 );
};


export default Hero;