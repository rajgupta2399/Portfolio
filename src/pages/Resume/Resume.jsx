import React from "react";
import "./resume.css";
import SectionTitle from "../../components/SectionTitle";

const Resume = ({ refrence }) => {
  return (
    <section className="resume" id="resume" ref={refrence}>
      <div className="container">
        <SectionTitle title="Resume" subtitle="Check My Resume" />
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Raj Kumar</h4>
              <p>
                <em>
                  As a front-end developer proficient bring a passion for
                  crafting intuitive user experiences and pixel-perfect designs
                  to every project.I am dedicated to delivering high-quality,
                  responsive solutions that exceed client expectations and
                  enhance user satisfaction.
                </em>
              </p>
              <ul>
                <li>North West Delhi</li>
                <li>8700066069</li>
                <li>rajkumar2499nice@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title title">Education</h3>
            <div className="resume-item">
              <h4>Central Board Of Education : 10th</h4>
              <h5>2019-2020</h5>
              <p>
                <em>Jeevan Public School</em>
              </p>
              <p>
                I Completed my class 10th from jeevan public school in 2019-2020
                from Central Board of Education and i got 73.4% in class 10th.
              </p>
            </div>

            <div className="resume-item">
              <h4>Central Board Of Education : 12th</h4>
              <h5>2022-2023</h5>
              <p>
                <em>Government Boys Senior Secondary Education</em>
              </p>
              <p>
                I Completed my class 12th from jeevan public school in 2022-2023
                from Central Board of Education and i got 73.4% in class 12th.
              </p>
            </div>

            <div className="resume-item">
              <h4>Bachelors In Computer Application</h4>
              <h5>2023-2026</h5>
              <p>
                <em>Lovely Professional University </em>
              </p>
              <p>
                I Completed my class 12th from jeevan public school in 2022-2023
                from Central Board of Education and i got 73.4% in class 12th.
              </p>
            </div>

            <h3 className="resume-title title">Asp.Net Projects</h3>

            <div className="resume-item">
              <h4>Movie Ticket Booking Application</h4>
              <h5>2024-Present</h5>
              <ul>
                <li>
                  The Movie Ticket Booking Application is a web-based system
                  developed using ASP.NET Core. It allows users to browse
                  movies, view showtimes, and book tickets online. The
                  application also includes an admin panel for managing movies,
                  theaters, and showtimes.
                </li>
                <li>
                  Movie Management: Admins can add, update, or remove movies
                  from the database, including setting up posters, descriptions,
                  and genres. <br />
                  Movie Browsing: Users can browse a list of available movies,
                  view detailed information includingcast, and genres.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>E-Commerce Application</h4>
              <h5>2024-Present</h5>
              <ul>
                <li>
                  The E-Commerce Application is a robust web-based system built
                  using ASP.NET MVC. It features two main roles: Admin and User.
                  The application allows users to browse products, add items to
                  their cart, and make purchases, while admins manage products,
                  categories, and orders.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title title">Personal Front-End Projects</h3>
            <div className="resume-item">
              <h4>Digital Marketing Website</h4>
              <h5>2023-Present</h5>
              <p>
                <em>Webgrowindia.in</em>
              </p>
              <ul>
                <li>
                  WebgrowIndia, the Digital Marketing Website based on HTML, CSS
                  and JavaScript Technology.{" "}
                </li>
                <li>
                  Use Simple Mail Transfer Protocol (SMTP.js) that facilitates
                  sending emails directly from client-side JavaScript
                  applications. It allows to integrate email sending
                  functionality into web applications without relying on
                  server-side code.
                </li>
                <li>
                  {" "}
                  <span>Visit : </span>
                  <a href="https://webgrowindia.netlify.app/" target="_blank">
                    WebgrowIndia
                  </a>
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>ARFLIX</h4>
              <h5>2024-Present</h5>
              <ul>
                <li>
                  ARFLIX (Inspired from Netflix), based on HTML, CSS And
                  JavaScript.
                </li>
                <li>
                  By using TMDB Rest API to fetch the movies and web-series
                  details and enhance user experience.
                </li>
                <li>
                  tegration with the TMDB API to fetch movie details, including
                  titles, descriptions, ratings, and images. Customizable
                  categories or genres for browsing movies. Ability to play
                  movie trailers directly from the website. Search functionality
                  to find specific movies or TV shows.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Food Ordering App</h4>
              <h5>05/2024-Present</h5>
              <ul>
                <li>
                  eveloped a comprehensive food ordering application using React
                  that mimics the functionalities of popular apps like Zomato
                  and Swiggy APIs.
                </li>
                <li>
                  User Authentication: Implemented secure user authentication
                  and authorization using SupaBase. Restaurant Browsing: Users
                  can browse a list of restaurants, view details, and filter
                  based on cuisine, location, ratings, etc. Menu Display:
                  Dynamic fetching and display of restaurant menus with detailed
                  item descriptions and prices. Cart Management: Added
                  functionality to add, remove, and edit items in the cart with
                  real- time updates. Search and Filter: Implemented search
                  functionality to find specific restaurants or dishes, and
                  filters for sorting results.
                </li>
                <li>
                  Frontend: React, shadcn UI, Next UI, Headless UI, Tailwind UI
                  <br /> Styling: Tailwind CSS <br /> APIs: Swiggy API <br />{" "}
                  State Management: Redux <br /> Authentication: Supabase
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Netflix GPT</h4>
              <h5>2024-Present</h5>
              <ul>
                <li>
                  Developed a Netflix-like application using React, leveraging
                  the TMDB API for movie and TV show data.
                </li>
                <li>
                  User Authentication: Implemented secure user authentication
                  and authorization using JWT tokens. Movie/TV Show Browsing:
                  Users can browse a list of movies and TV shows, view details,
                  and filter based on genre, release date, ratings, etc. Search
                  Feature: Implemented a search bar that allows users to search
                  for specific movies or TV shows. Dynamic Data Display: Fetched
                  and displayed real-time data from the TMDB API, ensuring
                  up-to-date information.
                </li>
                <li>
                  Frontend: React, shadcn/ui, Next UI, Headless UI, Tailwind UI
                  <br />
                  Styling: Tailwind CSS <br /> APIs: TMDB API <br />
                  State Management: Redux Toolkit <br />
                  Authentication: JWT
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
