const About = () => (
 <section className="about-section">
   <h2>About SouthSpice</h2>
   <p>
     Founded in 2020, SouthSpice is a wholesale masala company dedicated to
     connecting spice farmers with South Indian markets. Our marketing, sales,
     and delivery teams ensure every product reaches customers fresh and fast.
   </p>


   <div className="team-grid">
     {["Marketing Team", "Sales Team", "Delivery Team"].map((team) => (
       <div key={team} className="team-card">
         <h3>{team}</h3>
         <p>
           Dedicated professionals ensuring smooth operations across South India.
         </p>
       </div>
     ))}
   </div>
 </section>
);


export default About;
