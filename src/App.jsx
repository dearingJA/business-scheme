import { useState } from 'react'
import { AlertTriangle, DollarSign, Users, TrendingUp, Star, ChevronRight } from 'lucide-react';

function App() {
  const [hoveredButton, setHoveredButton] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const testimonials = [
    {
      name: "John D.",
      rating: 5,
      comment: "As the founder, this cannot be going any better!",
      verified: "Early Adopter"
    },
    {
      name: "adam_cole11",
      rating: 5,
      comment: "The FBI hasn't caught up with me yet, so it must be legal! Living the dream!",
      verified: "Early Investor"
    },
    {
      name: "Tommy G.",
      rating: 5,
      comment: "I love how it's DEFINITELY not a pyramid, it's more of a triangle! Totally different!",
      verified: "Actual Human"
    },
    {
      name: "Kory S.",
      rating: 5,
      comment: "My upline promised me a Ferrari. I got a toy one, but it's the thought that counts!",
      verified: "Real Success Story"
    },
    {
      name: "Charles V.",
      rating: 5,
      comment: "Math is hard, but losing money is easy! This program makes it effortless!",
      verified: "Mathematician"
    }
  ];
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="pyramid"></div>
            <h1 className="title">Business <s>(Pyramid)</s> Scheme™</h1>
          </div>
          <div className="disclaimer">
            *Legally distinct from actual pyramids
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="main-headline">A TOP DOWN APPROACH TO INVESTING!</h2>
          <p className="sub-headline">
            Double your investment by simply recruiting 3 friends!*
          </p>
          <p className="fineprint">
            *Results are certain. Actually, results impossible for 99.9% of participants. Math doesn't lie.
          </p>

          {/* Pyramid Visual */}
          <div className="pyramid-visual">
            <div>
              <div className="pyramid-structure">
                <div className="top-circle">
                  <DollarSign style={{ width: '32px', height: '32px', color: 'black' }} />
                </div>
                <div className="middle-row">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="middle-circle">
                      <Users style={{ width: '24px', height: '24px', color: 'black' }} />
                    </div>
                  ))}
                </div>
                <div className="bottom-row">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="small-circle"></div>
                  ))}
                </div>
                <div className="tiny-row">
                  {[...Array(27)].map((_, i) => (
                    <div key={i} className="tiny-circle"></div>
                  ))}
                </div>
              </div>
              <div className="not-pyramid-badge">PYRAMID-LIKE IN NATURE!</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It "Works" */}
      <section className="how-section">
        <div className="how-content">
          <h3 className="section-title">How Our "Business Model" Works</h3>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number" style={{ color: '#34D399' }}>Step 1</div>
              <h4 className="step-title">Invest $1,000</h4>
              <p className="step-description">Give us your hard-earned money. We promise to double it quick!</p>
            </div>
            <div className="step-card">
              <div className="step-number" style={{ color: '#FBBF24' }}>Step 2</div>
              <h4 className="step-title">Recruit 3 Friends</h4>
              <p className="step-description">Convince your family and friends to join. Everyone enjoys money!</p>
            </div>
            <div className="step-card">
              <div className="step-number" style={{ color: '#C084FC' }}>Step 3</div>
              <h4 className="step-title">Double Your Money*</h4>
              <p className="step-description">*Only works if everyone below you also recruits 3 people, forever, infinitely. Spots going fast!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-box">
            <div className="cta-inner">
              <AlertTriangle className="cta-icon" />
              <h3 className="cta-headline">Join Today Before Math Catches Up!</h3>
              <p className="cta-subtext">
                Only 8.2 billion people on Earth, so act fast! We'll run out of recruits by level 33!
              </p>
              <button
                className="cta-button"
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
              >
                {hoveredButton ? "THIS IS ILLEGAL" : "START YOUR JOURNEY TODAY"}
                <ChevronRight style={{ width: '24px', height: '24px' }} />
              </button>
              <p className="cta-disclaimer">
                By clicking this button, you acknowledge that you will be double your money when you recruit just three friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-content">
          <h3 className="section-title">"Success" Stories from "Real" People</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card"
                style={{ transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)' }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} style={{ width: '20px', height: '20px', color: '#FBBF24', fill: '#FBBF24' }} />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.comment}"</p>
                <div className="testimonial-footer">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-verified">{testimonial.verified}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonials-disclaimer">
            <p>* All testimonials are 100% fabricated and 100% for comedic effect</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div>
            <TrendingUp className="footer-icon" />
            <p className="footer-headline">Remember: If it kind of looks like a pyramid...</p>
            <p className="footer-subtext">It's probably a pyramid upside down.</p>
          </div>
          <div className="footer-disclaimer">
            <p style={{ marginBottom: '8px' }}>
              This is a real website created for entertainment. Please hire me.
            </p>
            <p>
              Pyramid schemes are illegal and mathematically unsustainable. But, if you get in early you will make money. 
              Please never participate in actual pyramid schemes. Unless they guarantee fast, quick returns.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
