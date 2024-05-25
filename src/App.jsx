import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <section className="hero_section">
        <nav className="nav">
          <span>cowe.org</span>
          <div className="nav_items">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#solutions">Solutions</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#awards">Awards</a>
              </li>
            </ul>
          </div>
          <a>Contact</a>
        </nav>
        <div className="hero_section_desc">
          <div>
            <h2>Renowned Architectural</h2>
            <p>
              At <b>Jcloudwork</b>, we blend innovation with artistry to create
              buildings that stand the test of time. Discover our commitment to
              eco-friendly architecture that shapes a better, greener future.
            </p>
            <button>Learn More &nbsp;&rarr;</button>
          </div>
          <img src="../Frame.svg" alt="" />
        </div>
      </section>
      <section className="services" id="services">
        <img src="../Fictional_company_logo_1.svg" alt="" />
        <img src="../Fictional_company_logo_2.svg" alt="" />
        <img src="../Fictional_company_logo_3.svg" alt="" />
        <img src="../Fictional_company_logo_4.svg" alt="" />
        <img src="../Fictional_company_logo_5.svg" alt="" />
      </section>
      <section className="projects" id="projects">
        <div className="projects_heading">
          <p>Residential Development</p>
          <hr />
          <p>
            At Jcloudwork, we specialize in designing residential spaces that
            are as unique as you. Our homes blend aesthetic elegance with
            practical functionality, ensuring every space is tailored to fit
            your lifestyle. Whether it's a cozy apartment or a sprawling estate,
            our focus on quality and detail brings your vision of the perfect
            home to life. Experience the blend of comfort, style, and
            sustainability with us.
          </p>
        </div>
        <div className="project">
          <div className="project1">
            <img src="../jcloudwork homepage/Mask group-2.svg" alt="" />
            <p>Shiva Stuthi Residence Before</p>
            <p>Jcloudwork</p>
          </div>
          <div className="project1">
            <img src="../jcloudwork homepage/Mask group-3.svg" alt="" />
            <p>Shiva Stuthi Residence After</p>
            <p>Jcloudwork</p>
          </div>
          <div className="project1">
            <img src="../jcloudwork homepage/Mask group-1.svg" alt="" />
            <p>Artificial Lighting Before</p>
            <p>Jcloudwork</p>
          </div>
          <div className="project1">
            <img src="../jcloudwork homepage/Mask group-4.svg" alt="" />
            <p>Artificial Lighting After</p>
            <p>Jcloudwork</p>
          </div>
        </div>
      </section>
      <section className="solutions" id="solutions">
        <div className="solutions_heading">
          <h2>We Are World’s Leading Home Designers</h2>
          <p>
            It's for great minutes, minor achievements, and in the middle
            between.It's for great minutes,{" "}
          </p>
        </div>
        <div className="solution">
          <div className="solution_card">
            <div>
              <img src="../homeDesign/Group-3.svg" alt="" />
            </div>
            <h4>Modern Designs</h4>
            <p>
              At Jcloudwork, we specialize in modern design that combines sleek
              minimalism with functional innovation. Our approach sets the stage
              for architecture that's not just contemporary but timeless.
            </p>
          </div>
          <div className="solution_card">
            <div>
              <img src="../homeDesign/Group-1.svg" alt="" />
            </div>
            <h4>Quality Work</h4>
            <p>
              Our commitment at Jcloudwork is to deliver unparalleled quality,
              ensuring excellence and precision in every design and build.
            </p>
          </div>
          <div className="solution_card">
            <div>
              <img src="../homeDesign/Group-2.svg" alt="" />
            </div>
            <h4>Affordable Prices</h4>
            <p>
              At Jcloudwork, we believe exceptional architecture should be
              accessible. Our pricing is competitive, ensuring top-notch design
              is affordable.
            </p>
          </div>
        </div>
        <button>Learn More &nbsp;&rarr;</button>
      </section>
      <section className="about" id="about">
        <div className="about_heading">
          <p>Why Should Choose Our</p>
          <hr />
          <p>
            Choosing Jcloudwork means partnering with a team that values your
            vision and brings it to life with expertise, innovation, and a
            commitment to sustainability. We offer personalized solutions,
            ensuring each project is not just built but crafted to meet your
            specific needs and aspirations. With us, your architectural dreams
            are in skilled hands.
          </p>
        </div>
        <div className="about_description">
          <div>
            <div className="about_description_1">
              <div>
                <p>2D Drafting</p>
                <p>Blueprints of Precision</p>
              </div>
              <hr />
            </div>
            <div className="about_description_1">
              <div>
                <p>3D Elevation</p>
                <p>Bringing Designs to Life</p>
              </div>
              <hr />
            </div>
            <div className="about_description_1">
              <div>
                <p>Virtual Reality</p>
                <p>Immersive Design Experience</p>
              </div>
              <hr />
            </div>
            <div className="about_description_1">
              <div>
                <p>Vastu Services</p>
                <p>Harmony in Design</p>
              </div>
            </div>
          </div>
          <div id="about_img">
            <img src="../Rectangle 37.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="awards" id="awards">
        <div className="awards_heading">
          <h2>Our Best Projects</h2>
          <p>
            Explore our portfolio of standout projects, where each design
            narrates a story of innovation, functionality, and aesthetic
            brilliance.
          </p>
        </div>
        <img src="../Testimonial.svg" alt="" />
        <div className="awards_bottom">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section className="footer">
        <div className="footer_1">
          <img src="../logo 1.svg" alt="" />
          <p>Learning & Training Redefined</p>
          <div className="social_media">
            <div className="social_media_logo">
              <img src="../socialmedia_logos/twitter.svg" alt="" />
            </div>
            <div className="social_media_logo">
              <img src="../socialmedia_logos/facebook.svg" alt="" />
            </div>
            <div className="social_media_logo">
              <img src="../socialmedia_logos/instagram.svg" alt="" />
            </div>
            <div className="social_media_logo">
              <img src="../socialmedia_logos/github.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="footer_2">
          <h6>Stores & Services</h6>
          <ul>
            <li>Services</li>
            <li>Plan</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="footer_3">
          <h6>Help</h6>
          <ul>
            <li>Blogs</li>
            <li>Certificate Verification</li>
            <li>Login</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer_4">
          <h6>Resources</h6>
          <ul>
            <li>Courses</li>
            <li>T & C</li>
            <li>Privacy Policy</li>
            <li>Library</li>
          </ul>
        </div>
      </section>
      <hr style={{margin: "0rem 4rem"}} />
      <p id="copyright">© Copyright 2022, All Rights Reserved by jcloudwork.com</p>
    </>
  );
}

export default App;
