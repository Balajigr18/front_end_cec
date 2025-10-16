const services = [
 { title: "Wholesale Supply", desc: "We provide bulk orders for retailers, restaurants, and distributors." },
 { title: "Pan-South Delivery", desc: "Efficient logistics team ensuring timely deliveries." },
 { title: "Marketing & Branding", desc: "Support for promoting local and regional spice brands." },
];


const Services = () => (
 <section className="services-section">
   <h2>Our Services</h2>
   <div className="services-grid">
     {services.map((s) => (
       <div key={s.title} className="service-card">
         <h3>{s.title}</h3>
         <p>{s.desc}</p>
       </div>
     ))}
   </div>
 </section>
);


export default Services;
