"use client";
import { useEffect } from "react";
import Typed from "typed.js";

const Hero = ({ mouse }) => {
  useEffect(() => {
    new Typed(".typed-subtitle", {
      strings: ["مصمم UX / UI والمدير الأمامي.", "مقرها في كييف."],
      loop: true,
      typeSpeed: 80,
    });
  }, []);
  return (
    <div className="section started" style={{ height: "96vh" }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <div className="h-title glitch-effect" data-text="أنا جون دو">
              أنا جون دو
            </div>
            <span className="typed-subtitle"></span>
          </div>
        </div>
      </div>
      {mouse && (
        <a href="#" className="mouse_btn">
          <span className="ion ion-mouse"></span>
        </a>
      )}
    </div>
  );
};
export default Hero;
