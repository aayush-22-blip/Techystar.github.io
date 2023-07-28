import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
          Today's children generation is growing up in a rapidly changing and technologically advanced world. They are exposed to vast amounts of information through digital media and have access to various educational resources. However, they also face challenges such as increased screen time, cyberbullying, and mental health issues. 
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          For today's children generation, we are their guides, mentors, and guardians. As parents, educators, and society, our responsibility is to nurture their potential, provide a safe environment, and instill values that promote empathy, creativity, and resilience. We must embrace technology's benefits while safeguarding them from its pitfalls. By fostering a supportive and inclusive environment, we empower them to thrive, shaping them into compassionate and capable individuals ready to lead tomorrow's world.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />                  
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;






              //<AiFillInstagram />                  
              //<p>linkedin</p>