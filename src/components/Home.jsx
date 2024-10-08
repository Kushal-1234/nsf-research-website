// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./Home.scss";

// const Home = () => {
//   return (
//     <div className="home-container">
//       {/* Description Section */}
//       <div className="description-section">
//         <h1>Welcome to NSF Research Projects</h1>
//         <p>
//           The National Science Foundation (NSF) is dedicated to advancing the
//           frontiers of science and engineering. Our research projects explore
//           innovative solutions, push technological boundaries, and aim to have a
//           global impact across various scientific disciplines.
//         </p>
//       </div>

//       {/* Carousel Section */}
// <div className="carousel-container">
//   <Carousel
//     infiniteLoop
//     autoPlay
//     transitionTime={1500}
//     interval={3000}
//     showThumbs={false}
//   >
//     <div className="gradient-slide gradient-slide-1">
//       <p className="legend">Innovative Research</p>
//     </div>
//     <div className="gradient-slide gradient-slide-2">
//       <p className="legend">Cutting-Edge Technology</p>
//     </div>
//     <div className="gradient-slide gradient-slide-3">
//       <p className="legend">Global Impact</p>
//     </div>
//   </Carousel>
// </div>

//       {/* Parallax Section 1 */}
//       <div className="parallax-section gradient-parallax-1">
//         <div className="parallax-content">
//           <h2>Our Mission</h2>
//           <p>
//             At NSF, we drive innovation and excellence in scientific research.
//             Our projects span across multiple disciplines, pushing the
//             boundaries of technology, science, and engineering.
//           </p>
//         </div>
//       </div>
//       <div className="content-section">
//         <h2>Our Focus Areas</h2>
//         <p>
//           We are dedicated to advancing knowledge in the following key areas:
//         </p>
//         <div className="scrollable-cards">
//           <div className="card">
//             <h3>Algorithms and Combinatorial Optimization</h3>
//             <p>
//               Exploring advanced algorithms to solve complex optimization
//               problems efficiently.
//             </p>
//           </div>
//           <div className="card">
//             <h3>Machine Learning and Deep Learning</h3>
//             <p>
//               Developing intelligent systems that learn and adapt through
//               data-driven methods.
//             </p>
//           </div>
//           <div className="card">
//             <h3>Bioinformatics and Computational Biology</h3>
//             <p>
//               Integrating biology with computational tools to analyze biological
//               data.
//             </p>
//           </div>
//           <div className="card">
//             <h3>Image Processing and Computer Vision</h3>
//             <p>
//               Enhancing visual data analysis through advanced image processing
//               techniques.
//             </p>
//           </div>
//           <div className="card">
//             <h3>Cloud Computing and Parallel Computing</h3>
//             <p>
//               Leveraging the power of distributed systems for high-performance
//               computing.
//             </p>
//           </div>
//           <div className="card">
//             <h3>Neural Network Control and Renewable Energy</h3>
//             <p>
//               Applying neural networks to optimize control systems in renewable
//               energy sources.
//             </p>
//           </div>
//           <div className="card">
//             <h3>Transportation Network and Smart Transportation</h3>
//             <p>
//               Innovating smarter transportation systems for efficient and
//               sustainable networks.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Parallax Section 2 */}
//       <div className="parallax-section gradient-parallax-2">
//         <div className="parallax-content">
//           <h2>Join Our Mission</h2>
//           <p>
//             We invite researchers, students, and professionals to collaborate
//             with us in shaping the future of science and technology.
//           </p>
//         </div>
//       </div>
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
        <h1>
          CAP: Expanding AI at North Carolina A&T State University Through
          Interdisciplinary Research, Education and Workforce Development
        </h1>
        <p>Award Abstract #2434487</p>
      </div>

      {/* Carousel Section */}
      {/* <div className="carousel-container">
        <Carousel
          infiniteLoop
          autoPlay
          transitionTime={1500}
          interval={3000}
          showThumbs={false}
        >
          <div className="gradient-slide gradient-slide-1">
            <p className="legend">Expanding AI Capacity</p>
          </div>
          <div className="gradient-slide gradient-slide-2">
            <p className="legend">Interdisciplinary Research</p>
          </div>
          <div className="gradient-slide gradient-slide-3">
            <p className="legend">AI-Powered Education</p>
          </div>
        </Carousel>
      </div> */}

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
      <div className="parallax-section1 gradient-parallax-1">
        <div className="parallax-content">
          <h2>Project Overview</h2>
          <p>
            {/* This NSF-funded project focuses on AI models for COVID-19 detection,
            explainable AI, privacy-preserving techniques, and fairness
            regularization. It promotes AI education and expands AI research
            capabilities at NCAT, fostering innovation across multiple
            disciplines. */}
            This project is an ExpandAI Capacity building pilot (CAP), which
            focuses on establishment of a robust Artificial Intelligence (AI)
            infrastructure at North Carolina Agricultural and Technical State
            University (NCAT) thereby enhancing the research capacity of the
            institution and facilitating AI-focused educational curriculum
            development and training. Towards this goal, the project will
            address the challenges in AI in the development of robust,
            explainable, fair, and privacy-preserving models for sensitive
            COVID-19 data. Five research programs are pursued to develop new AI
            models and tools. The research activities aim to broaden the
            participation of faculty members at NCAT and especially graduate and
            undergraduate students from underrepresented groups to enroll and
            explore degrees in different departments at NCAT, completing AI
            related thesis or dissertation through ExpandAI team collaboration.
            The project will also build community and new centers of excellence
            in AI where such activities were not previously well developed. This
            includes faculty participation in training and workshops will
            increase the number of faculty members using AI in research,
            development of more AI student researchers, and hosting of AI
            workshops featuring hands-on experiments to teach AI models based on
            experiments derived from this project?s research. This project
            expands the AI capacity at NCAT through interdisciplinary AI
            research, education, and workforce development. The
            interdisciplinary collaboration and cross-disciplinary AI research
            spans five use-inspired research thrusts centered on pandemic
            response patterned after the lessons learned in COVID-19 detection.
            Specifically, the project will (1) develop robust AI models based on
            federated knowledge distillation for COVID-19 detection with great
            generalization ability on new emergent dataset; (2) apply
            explainable AI (XAI) techniques based on SHAP and LIME to identify
            and visualize the important features of COVID-19 images that play a
            significant role in AI models for COVID-19 detection; (3) use the
            identified features of COVID-19 images from XAI techniques as an
            input to the proposed generative multi-modal language model to
            generate COVID-19 images to (4) address biased and fairness issues
            of AI models based on fairness regularization techniques for
            COVID-19 detection; and (5) apply differential privacy in federated
            learning frameworks to build secure AI models to protect the private
            information of individuals and local clients? data. The proposed AI
            models are targeted for application in a broader range of biomedical
            image analysis research. The project?s educational capacity building
            focuses on new curricular materials and course modules, including
            undergraduate/graduate AI senior design classes to increase
            students? understanding and use of AI, private AI, fairness of AI,
            explainable AI, and general interest in this important, emerging
            field. Faculty members will conduct and participate in training and
            workshops will increase the number of faculty members using AI in
            research, leading to more AI student researchers and increasing
            integration of AI research and education capacity at NCAT. The
            ExpandAI Program supports AI-powered education and workforce
            development, infrastructure and research at Minority Serving
            Institutions to strengthen and diversify U.S. research and education
            pathways and provide historically marginalized communities with new
            opportunities in STEM careers. This award reflects NSF's statutory
            mission and has been deemed worthy of support through evaluation
            using the Foundation's intellectual merit and broader impacts review
            criteria.
          </p>
        </div>
      </div>

      {/* Focus Areas Section */}
      <div className="content-section">
        {/* <h2>Research Thrusts</h2>
        <p>The project explores the following research thrusts:</p> */}
        <h2>Our Focus Areas</h2>
        <p>
          We are dedicated to advancing knowledge in the following key areas:
        </p>
        <div className="scrollable-cards">
          <div className="card">
            <h3>Federated Knowledge Distillation</h3>
            <p>
              Developing AI models for COVID-19 detection with better
              generalization on new datasets.
            </p>
          </div>
          <div className="card">
            <h3>Explainable AI (XAI)</h3>
            <p>
              Using SHAP and LIME techniques to identify and visualize important
              features in COVID-19 images.
            </p>
          </div>
          <div className="card">
            <h3>Fairness Regularization</h3>
            <p>
              Addressing bias and fairness issues in AI models for COVID-19
              detection.
            </p>
          </div>
          <div className="card">
            <h3>Generative Multi-Modal Language Model</h3>
            <p>
              Generating COVID-19 images to improve AI model performance and
              fairness.
            </p>
          </div>
          <div className="card">
            <h3>Privacy-Preserving AI</h3>
            <p>
              Applying differential privacy in federated learning frameworks to
              secure sensitive data.
            </p>
          </div>
        </div>
      </div>

      {/* Parallax Section 2 */}
      <div className="parallax-section gradient-parallax-2">
        <div className="parallax-content">
          <h2>Join Our Mission</h2>
          <p>
            We invite researchers, students, and professionals to collaborate
            with us in shaping the future of AI through interdisciplinary
            research and education at NCAT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
