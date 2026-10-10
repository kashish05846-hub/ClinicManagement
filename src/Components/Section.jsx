import { memo, useEffect, useState } from "react";
import "./Section.css";
import { Link } from "react-router-dom";
import doctor1 from "../assets/homedoctor1.png";
import doctor2 from "../assets/homedoctor2.png";
import homeSection from "../assets/homeSection.png";

const slides = [
  {
    image: doctor1,
    title: "Your Health",
    highlight: "Our Priority",
    text: "We provide best medical care for you and your family.",
  },
  {
    image: homeSection,
    title: "Expert Doctors",
    highlight: "Better Care",
    text: "Meet our experienced doctors and get personalized treatment.",
  },
  {
    image: doctor2,
    title: "Modern Healthcare",
    highlight: "For Everyone",
    text: "Advanced facilities and trusted<br/>medical services under one roof.",
  },
];

const Section = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="section"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
    >
      <div className="section-content">
        <h1>
          {slides[currentSlide].title}
          <br />
          <span>{slides[currentSlide].highlight}</span>
        </h1>

        <p>{slides[currentSlide].text}</p>

        <div className="section-buttons">
          <Link to="/appointment">
            <button className="section-button">Book Appointment</button>
          </Link>

          <Link to="/learn-more">
            <button className="Learn-More section-button">Learn More</button>
          </Link>
        </div>
      </div>

      {/* Previous */}
      <button className="slider-button prev" onClick={previousSlide}>
        ❮
      </button>

      {/* Next */}
      <button className="slider-button next" onClick={nextSlide}>
        ❯
      </button>

      {/* Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={currentSlide === index ? "dot active" : "dot"}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(Section);
