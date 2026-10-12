'use client';

import { useEffect, useState } from 'react';

const services = [
  {
    number: '01',
    title: 'Branding',
    description:
      'Distinctive identities built around your values, vision, and personality.',
    icon: '◈',
    tag: 'Identity & Strategy',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description:
      'Intuitive digital experiences designed to feel effortless and engaging.',
    icon: '✳',
    tag: 'Digital Experiences',
  },
  {
    number: '03',
    title: 'Web Design',
    description:
      'Modern websites that unite striking visuals with purposeful functionality.',
    icon: '⌘',
    tag: 'Web & Development',
  },
];

const Hero = () => {
  const [showTop, setShowTop] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const elements = document.querySelectorAll('.reveal');
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let observer;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('visible'));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      elements.forEach((element) => observer.observe(element));
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer?.disconnect();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero section-container" id="home">
        <div className="hero-copy">
          <div className="eyebrow reveal">
            <span className="status-dot" />
            INDEPENDENT CREATIVE STUDIO · LONDON, UK
          </div>

          <h1 className="hero-title reveal">
            We turn ideas into
            <span className="gradient-text"> visual identities.</span>
          </h1>

          <p className="hero-description reveal">
            An independent creative studio building thoughtful brands
            and digital experiences through clarity, simplicity, and
            imagination.
          </p>

          <div className="hero-actions reveal">
            <a className="button-primary" href="#services">
              Explore our services <span>↗</span>
            </a>
            <a className="button-secondary" href="#about">
              Discover Aura
            </a>
          </div>

          <div className="hero-note reveal">
            <span className="note-line" />
            Thoughtfully designed. Purposefully different.
          </div>
        </div>

        {/* ABSTRACT GLASS ARTWORK */}
        <div className="hero-art" aria-label="Abstract glass artwork">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-glow" />

          <div className="glass-orb">
            <div className="orb-highlight" />
            <div className="orb-core" />
          </div>

          <div className="floating-glass glass-label">
            <span className="label-dot" />
            <span>
              <strong>Creative direction</strong>
              <small>Ideas into impact</small>
            </span>
          </div>

          <div className="floating-glass glass-index">
            <span>01</span>
            <div>
              <small>DESIGN WITH</small>
              <strong>INTENTION.</strong>
            </div>
          </div>

          <div className="art-caption">FIG. 001 — A STUDY IN FORM</div>
        </div>

        <a className="scroll-cue" href="#about">
          <span className="scroll-line" />
          SCROLL TO EXPLORE
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section className="about section-container" id="about">
        <div className="section-heading reveal">
          <span className="section-kicker">01 / THE STUDIO</span>
          <span className="small-coordinate">DESIGN WITH PURPOSE</span>
        </div>

        <div className="about-grid">
          <h2 className="about-title reveal">
            Good design
            <br />
            makes you <span className="muted-text">feel</span> something.
          </h2>

          <div className="about-copy reveal">
            <p>
              Aura Studio is a London-based creative agency helping brands
              express who they are through modern, minimalist design.
            </p>
            <p>
              We bring strategy, storytelling, and visual craft together
              to create identities and digital experiences that feel
              distinctive, purposeful, and timeless.
            </p>
            <a className="text-link" href="#contact">
              A little about what we do <span>↗</span>
            </a>
          </div>
        </div>

        <div className="principles reveal">
          <div>
            <span className="principle-number">01</span>
            <span>Clarity over clutter</span>
          </div>
          <div>
            <span className="principle-number">02</span>
            <span>Meaningful by design</span>
          </div>
          <div>
            <span className="principle-number">03</span>
            <span>Made to be remembered</span>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services section-container" id="services">
        <div className="section-heading reveal">
          <span className="section-kicker">02 / WHAT WE DO</span>
          <span className="small-coordinate">
            THREE DISCIPLINES. ONE VISION.
          </span>
        </div>

        <div className="services-intro reveal">
          <h2>
            What we bring
            <br />
            <span className="gradient-text">to life.</span>
          </h2>
          <p>
            Creative thinking, refined into meaningful experiences.
            Every detail serves a purpose.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-icon" aria-hidden="true">
                  {service.icon}
                </span>
              </div>

              <div className="service-visual" aria-hidden="true">
                <span className="visual-ring ring-one" />
                <span className="visual-ring ring-two" />
                <span className="visual-center">{service.icon}</span>
              </div>

              <div className="service-card-bottom">
                <span className="service-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a
                  className="service-arrow"
                  href="#contact"
                  aria-label={`Discuss ${service.title}`}
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact section-container" id="contact">
        <div className="section-heading reveal">
          <span className="section-kicker">03 / LET'S CONNECT</span>
          <span className="small-coordinate">
            YOUR NEXT CHAPTER STARTS HERE
          </span>
        </div>

        <div className="contact-grid">
          <div className="contact-copy reveal">
            <h2>
              Have something
              <br />
              <span className="gradient-text">in mind?</span>
            </h2>

            <p>
              Great things start with a conversation. Tell us what
              you're imagining, and let's explore what we could create
              together.
            </p>

            <div className="contact-email-label">PREFER EMAIL?</div>
            <a className="contact-email" href="mailto:hello@aurastudio.co">
              hello@aurastudio.co <span>↗</span>
            </a>

            <div className="contact-location">
              <span className="status-dot" />
              LONDON, UNITED KINGDOM
            </div>
          </div>

          <form
            className="contact-form glass-panel reveal"
            onSubmit={handleSubmit}
          >
            <div className="form-heading">
              <span>PROJECT INQUIRY</span>
              <span className="form-index">A / 001</span>
            </div>

            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Smith"
              autoComplete="name"
              required
            />

            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              autoComplete="email"
              required
            />

            <label htmlFor="message">Tell us about your idea</label>
            <textarea
              id="message"
              name="message"
              placeholder="A little about your project..."
              rows="4"
              required
            />

            <button className="button-primary form-submit" type="submit">
              Send inquiry <span>↗</span>
            </button>

            {submitted && (
              <p className="form-notice" role="status">
                Demo submitted successfully. This form isn't connected
                to an email service, so your message hasn't been sent.
              </p>
            )}

            <p className="form-footnote">
              Front-end demo · No information is stored or emailed.
            </p>
          </form>
        </div>
      </section>


      {showTop && (
        <button
          className="back-to-top"
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}
    </main>
  );
};

export default Hero;
