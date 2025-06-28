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
              Hi, I am Unah Onyinyechi Patience, also known as The Tech Savvy Nurse Onyi — a passionate nurse educator, 
              digital innovator, and your go-to guide for making nursing education simpler, smarter, and way more exciting.
              At Tech Savvy Nurse Onyi, we do not just teach, we transform how nurses learn. From colorful flashcards to clinical handbooks, 
              digital diagrams to simplified pharmacology and Med-Surg bundles — we are redefining nursing education with creativity, tech, and heart.
              I have worn many hats, from scrubs in surgery, to the classroom teaching Med-Surg, 
              to designing study tools for nursing students who just want it to make sense.
              If you have ever whispered “this is too hard” while flipping through your notes, 
              trust me — I have been there. That is why I created this space.This is where nursing meets creativity, 
              tech meets education, and your learning struggles meet their final goodbye.
              So, whether you are preparing for an exam, brushing up on clinical knowledge, 
              or just tired of boring PDFs — welcome to your new study bestie.
              Let us simplify. Let us visualize. Let us make learning feel like you've got this.
              I am Onyi  and I am here to help you learn smarter, not harder.
          </h4>
        </div>
         <div className="cta-buttons">
          <button>Browse Products</button>
          <button className="secondary">See Nurse Essentials</button>
        </div>
       </div>
        <div>
          <img className='home-image' src="/images/home_image-removebg-preview.png" alt="" />
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