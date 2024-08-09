import React from "react";
import "./about.css";
import SectionTitle from "../../components/SectionTitle";
import profileImg from "../../images/10.jpg";
import Skill from "../../components/Skill";

const About = ({ refrence, aboutActive }) => {
  return (
    <section className="about" id="about" ref={refrence}>
      <div className="container about-me">
        <SectionTitle title="About" subtitle="Learn More About Me" />
        <div className="row">
          <div className="col-lg-4">
            <img src="https://images.unsplash.com/photo-1721112796760-fe228d1e22a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-8 content">
            <h3>Front-End Developer</h3>
            <p className="fst-italic">
              As a front-end developer proficient bring a passion for crafting
              intuitive user experiences and pixel-perfect designs to every
              project.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Name : </strong> <span>Raj Kumar</span>
                  </li>

                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone : </strong> <span>8700066069</span>
                  </li>

                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Location : </strong>{" "}
                    <span>North West Delhi, Delhi, India</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Mail : </strong>{" "}
                    <span>rajkumar2499nice@gmail.com</span>
                  </li>

                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree : </strong> <span>BCA (2023-2026)</span>
                  </li>

                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance : </strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="fst-italic">
              With a keen eye for detail and a commitment to staying updated
              with the latest industry trends, I thrive in collaborative
              environments where I can leverage my skills to transform concepts
              into engaging web applications. I am dedicated to delivering
              high-quality, responsive solutions that exceed client expectations
              and enhance user satisfaction.
            </p>
          </div>
        </div>
      </div>
      <Skill active={aboutActive} />
    </section>
  );
};

export default About;
