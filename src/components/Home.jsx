// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./Home.scss";
// import Bg1 from "../assets/images/bg1.jpg";
// import Bg2 from "../assets/images/bg2.jpg";
// import Bg3 from "../assets/images/bg3.jpeg";
// import Bg4 from "../assets/images/Bg1.png";

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="carousel-container">
//         {/* <Carousel
//           autoPlay
//           infiniteLoop
//           showThumbs={false}
//           showArrows={false}
//           interval={4000}
//           transitionTime={1000}
//         >
//           <div>
//             <img src={Bg1} alt="Slide 1" />
//           </div>
//         </Carousel> */}
//       </div>
//       <div className="carousel-container__content">
//         <h1>Welcome to the NSF Research Portal</h1>
//         <p>Explore the latest research projects, tools, and datasets.</p>
//       </div>
//       {/* <div className="parallax-section" style={{ backgroundColor: "red" }}>
//         <h2>Parallax Section 1</h2>
//         <p>This section has a parallax effect when scrolling.</p>
//       </div>

//       <div className="content-section">
//         <h2>Content Section</h2>
//         <p>This is a static content section with some mock data below.</p>
//         <div className="mock-data">
//           <div className="mock-item">
//             <h3>Data Item 1</h3>
//             <p>Description of data item 1.</p>
//           </div>
//           <div className="mock-item">
//             <h3>Data Item 2</h3>
//             <p>Description of data item 2.</p>
//           </div>
//           <div className="mock-item">
//             <h3>Data Item 3</h3>
//             <p>Description of data item 3.</p>
//           </div>
//         </div>
//       </div>

//       <div
//         className="parallax-section"
//         style={{ backgroundImage: "url(https://via.placeholder.com/1200x800)" }}
//       >
//         <h2>Parallax Section 2</h2>
//         <p>
//           This is another parallax section with a different background image.
//         </p>
//       </div> */}
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      {/* Description Section */}
      <div className="description-section">
        <h1>Welcome to NSF Research Projects</h1>
        <p>
          The National Science Foundation (NSF) is dedicated to advancing the
          frontiers of science and engineering. Our research projects explore
          innovative solutions, push technological boundaries, and aim to have a
          global impact across various scientific disciplines.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="carousel-container">
        <Carousel
          infiniteLoop
          autoPlay
          transitionTime={1500}
          interval={3000}
          showThumbs={false}
        >
          <div className="gradient-slide gradient-slide-1">
            <p className="legend">Innovative Research</p>
          </div>
          <div className="gradient-slide gradient-slide-2">
            <p className="legend">Cutting-Edge Technology</p>
          </div>
          <div className="gradient-slide gradient-slide-3">
            <p className="legend">Global Impact</p>
          </div>
        </Carousel>
      </div>

      {/* Parallax Section 1 */}
      <div className="parallax-section gradient-parallax-1">
        <div className="parallax-content">
          <h2>Our Mission</h2>
          <p>
            At NSF, we drive innovation and excellence in scientific research.
            Our projects span across multiple disciplines, pushing the
            boundaries of technology, science, and engineering.
          </p>
        </div>
      </div>

      {/* Content Section
      <div className="content-section">
        <h2>Our Focus Areas</h2>
        <p>
          We are dedicated to advancing knowledge in the following key areas:
        </p>
        <div className="mock-data">
          <div className="mock-item">
            <h3>Artificial Intelligence</h3>
            <p>
              Exploring the frontiers of AI, machine learning, and deep learning
              to create intelligent systems that improve lives.
            </p>
          </div>
          <div className="mock-item">
            <h3>Data Science</h3>
            <p>
              Leveraging big data and advanced analytics to drive discoveries
              and inform decision-making processes.
            </p>
          </div>
          <div className="mock-item">
            <h3>Environmental Science</h3>
            <p>
              Investigating environmental challenges and developing sustainable
              solutions for a better future.
            </p>
          </div>
        </div>
      </div> */}
      {/* Content Section with Auto-Scrollable Cards */}
      <div className="content-section">
        <h2>Our Focus Areas</h2>
        <p>
          We are dedicated to advancing knowledge in the following key areas:
        </p>
        <div className="scrollable-cards">
          <div className="card">
            <h3>Algorithms and Combinatorial Optimization</h3>
            <p>
              Exploring advanced algorithms to solve complex optimization
              problems efficiently.
            </p>
          </div>
          <div className="card">
            <h3>Machine Learning and Deep Learning</h3>
            <p>
              Developing intelligent systems that learn and adapt through
              data-driven methods.
            </p>
          </div>
          <div className="card">
            <h3>Bioinformatics and Computational Biology</h3>
            <p>
              Integrating biology with computational tools to analyze biological
              data.
            </p>
          </div>
          <div className="card">
            <h3>Image Processing and Computer Vision</h3>
            <p>
              Enhancing visual data analysis through advanced image processing
              techniques.
            </p>
          </div>
          <div className="card">
            <h3>Cloud Computing and Parallel Computing</h3>
            <p>
              Leveraging the power of distributed systems for high-performance
              computing.
            </p>
          </div>
          <div className="card">
            <h3>Neural Network Control and Renewable Energy</h3>
            <p>
              Applying neural networks to optimize control systems in renewable
              energy sources.
            </p>
          </div>
          <div className="card">
            <h3>Transportation Network and Smart Transportation</h3>
            <p>
              Innovating smarter transportation systems for efficient and
              sustainable networks.
            </p>
          </div>
        </div>
        {/* <div className="scrollable-banner">
          <div className="scrollable-cards">
            {[1, 2].map((i) => (
              <>
                <div className="card" key={i}>
                  <h3>Algorithms and Combinatorial Optimization</h3>
                  <p>
                    Exploring advanced algorithms to solve complex optimization
                    problems efficiently.
                  </p>
                </div>
                <div className="card">
                  <h3>Machine Learning and Deep Learning</h3>
                  <p>
                    Developing intelligent systems that learn and adapt through
                    data-driven methods.
                  </p>
                </div>
                <div className="card">
                  <h3>Bioinformatics and Computational Biology</h3>
                  <p>
                    Integrating biology with computational tools to analyze
                    biological data.
                  </p>
                </div>
                <div className="card">
                  <h3>Image Processing and Computer Vision</h3>
                  <p>
                    Enhancing visual data analysis through advanced image
                    processing techniques.
                  </p>
                </div>
                <div className="card">
                  <h3>Cloud Computing and Parallel Computing</h3>
                  <p>
                    Leveraging the power of distributed systems for
                    high-performance computing.
                  </p>
                </div>
                <div className="card">
                  <h3>Neural Network Control and Renewable Energy</h3>
                  <p>
                    Applying neural networks to optimize control systems in
                    renewable energy sources.
                  </p>
                </div>
                <div className="card">
                  <h3>Transportation Network and Smart Transportation</h3>
                  <p>
                    Innovating smarter transportation systems for efficient and
                    sustainable networks.
                  </p>
                </div>
              </>
            ))}
          </div>
        </div> */}
      </div>

      {/* Parallax Section 2 */}
      <div className="parallax-section gradient-parallax-2">
        <div className="parallax-content">
          <h2>Join Our Mission</h2>
          <p>
            We invite researchers, students, and professionals to collaborate
            with us in shaping the future of science and technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
