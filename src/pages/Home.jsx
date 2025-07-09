import React from 'react'; 
import '../styles/homepage.css';
import Footer from '../components/footer';

function Home() {
  return (
    <div className="homepage">
      <div className=" mobile-only">
        <input type="text" placeholder="What are you looking for today?" />
        <button>Search</button>
      </div>
      <section className="hero">
       <div>
         <div>
          <h1>Welcome to Onyi’s Tech-Savvy Store</h1>
        </div>
        <div>
          <h4>
             Hi, I’m Unah Onyinyechi Patience — The Tech Savvy Nurse Onyi.
              I’m a nurse educator and digital innovator passionate about making nursing education simpler,
               smarter, and more engaging. Through creative tools like flashcards, diagrams, handbooks, and Med-Surg bundles, I help nursing students learn with ease and confidence.
              With experience from the OR to the classroom, 
              I understand the struggles of complex topics — and that’s why I created this platform: 
              where tech meets nursing, and boring notes become exciting learning tools.
              Whether you’re studying for exams or brushing up on clinical skills, 
              I’m here to help you learn smarter, not harder.
          </h4>
        </div>
         <div className="cta-buttons">
          <button>Browse Products</button>
          <button className="secondary">See Nurse Essentials</button>
        </div>
       </div>
        <div>
          <img className='home-image' src="/images/HomeImg.png" alt="Home" />
        </div>
      </section>

      <section className="categories">
        <div className="category">Nurse Must-Haves</div>
        <div className="category">Digital Diagrams</div>
        <div className="category">Flash Cards</div>
        <div className="category">Med-Surge Bundles</div>
        <div className="category">Onyi’s Picks</div>
      </section>
      <Footer />

    </div>
    

  );
}

export default Home;