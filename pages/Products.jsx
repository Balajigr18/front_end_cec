const spices = [
 { name: "Turmeric", img: "https://t3.ftcdn.net/jpg/01/82/27/42/360_F_182274289_RvpPTYZmC3n98ZXuH85d31XBfyEhk6b1.jpg" },
 { name: "Red Chilli", img: "https://images.pexels.com/photos/9185580/pexels-photo-9185580.jpeg" },
 { name: "Cumin Seeds", img: "https://t3.ftcdn.net/jpg/07/11/82/16/360_F_711821694_gIzpYDAE246N9Bh6DaWDsK7xOOKg9Rfv.jpg" },
];


const Products = () => {
 return (
   <section className="products-section">
     <h2>Our Wholesale Products</h2>
     <div className="products-grid">
       {spices.map((spice) => (
         <div key={spice.name} className="product-card">
           <img src={spice.img} alt={spice.name} />
           <h3>{spice.name}</h3>
           <p>Pure and fresh spices directly from the source.</p>
         </div>
       ))}
     </div>
   </section>
 );
};


export default Products;
