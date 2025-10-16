const Contact = () => (
 <section className="contact-section">
   <h2>Contact Us</h2>


   <div className="contact-container">
     {/* Left: Form */}
     <form className="contact-form">
       <input type="text" placeholder="Your Name" />
       <input type="email" placeholder="Your Email" />
       <textarea placeholder="Message" rows="4"></textarea>
       <button type="submit">Send Message</button>
     </form>


     {/* Right: Map */}
     <div className="contact-map">
       <iframe
         title="SouthSpice Location"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.904446870255!2d76.9419131747201!3d11.016844991724166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a6d12f823d%3A0x4c1b8e05f898b0!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
         width="100%"
         height="100%"
         style={{ border: 0 }}
         allowFullScreen=""
         loading="lazy"
       ></iframe>
     </div>
   </div>


   <p className="contact-info">📍 Address: No. 45, Spice Market Road, Coimbatore, Tamil Nadu</p>
   <p className="contact-info">📞 Phone: +91 98765 43210</p>
 </section>
);


export default Contact;
