import React from "react";
import defaultProfile from "../assets/images/defaultProfile.png";
import richard from "../assets/images/richard.jpg";
import kushalB from "../assets/images/kushalB.jpg";
import kushal from "../assets/images/kalyan.jpg";
import sam from "../assets/images/sam.jpeg";
import alexis from "../assets/images/alexis.jpg";
import nicholas from "../assets/images/nicholas.jpg";
import jordan from "../assets/images/jordan.jpg";
import justin from "../assets/images/justin.jpeg";
import PIImage from "../assets/images/PI_Image.jpg";

import "./Members.scss";

const members = [
  {
    name: "Mr. Richard Kofi Annan",
    qualification: "PhD student at NCAT",
    description: `His research focuses on using deep learning techniques for genetic predictions. 
    He is also a certified Project Management Professional (PMP) with experience in end-to-end management of
     projects both in academia and industry. He recently pushlished the papers at ISBRA'23, BIBE'23 and BICOB'24.`,
    img: richard,
  },
  {
    name: "Mr. Kushal Kalyan",
    qualification: "Master student at NCAT",
    description: `He is currently a Master student at NCAT, starting from Fall 2023. He has 4.5 years of experience 
    as a skilled front-end web develper. He is passionate about full stack development, machine learng and deep learning`,
    img: kushal,
  },
  {
    name: "Mr. Kushal Badal",
    qualification: "Master student at NCAT",
    description: `He is currently a Master student with a strong academic record and a passion for AI and data science. 
    He gained practical experience in data analysis, machine learning, and research, complemented by leadership roles and a 
    commitment to continuous learning. His goal is to leverage his technical skills and enthusiasm for problem-solving to make 
    meaningful contributions in the field of AI.`,
    img: kushalB,
  },
  {
    name: "Mr. Maxwell Sam",
    qualification: "Master student at NCAT",
    description: `He is a dedicated backend engineer with over three years of experience in the dynamic realm of software development. 
    His focus has been on crafting robust backend solutions, ensuring seamless and secure functionality for a wide range of applications. 
    Now, He is pursuing his master's in Computer Science with a specialized focus on Artificial Intelligence and Deep Learning.`,
    img: sam,
  },
  {
    name: "Ms. Alexis Cathcart",
    qualification: "MS student at NCAT",
    description: `Alexis Cathcart is an incoming Master's student from Charlotte, NC. She will complete her Bachelor's in Computer Science 
    at North Carolina A&T State University in May 2023. Her research interests include artificial intelligence, machine learning, data science, and bioinformatics.`,
    img: alexis,
  },
  {
    name: "Mr. Nicholas Rader",
    qualification: "MS student at NCAT",
    description: `Nick Rader is a full-time graduate student at North Carolina A&T. He is also a part-time search ad evaluator at Appen. 
    He is an aspiring Application/Web Developer in Kernersville, NC. He is passionate about UI/UX design, graphics, and creating responsive 
    and interactive apps for all users to enjoy worldwide! He graduated in 2022 from High Point University with a bachelor of science in computer science.`,
    img: nicholas,
  },
  {
    name: "Mr. Jordan Sturtz",
    qualification: "MS student at NCAT, Graduated in May 2023",
    description: `Thesis: Deep Learning Approaches for the Protein Scaffold Filling Problem.`,
    img: jordan,
  },

  {
    name: "Mr. Justin Noland",
    qualification: "MS student at NCAT, graduated in July 2023",
    description: `Thesis: A Privacy Preserving Convolutional Neural Network for Phenotype Prediction.`,
    img: justin,
  },
];

const aboutPI = {
  name: "Dr. Letu Qingge",
  designation: "Assistant Professor",
  department: "Department of Computer Science",
  college: "North Carolina A&T State University",
  education: `Ph.D.
    Computer Science / Montana State University
    M.S.
    Management Science and Engineering / Beijing University of Chemical Technology
    B.S.
    Information and Computer Science / Inner Mongolia University
    `,
  description: `Dr. Letu Qingge, Ph.D, is an assistant professor in the Department of 
                Computer Science at North Carolina A&T State University, NC. He received his Ph.D 
                degree in Computer Science from Montana State University, MT, USA. His research 
                interests include algorithms, machine learning, deep learning, cloud computing, 
                combinatorial optimization, bioinformatics and computational biology, computer vision, 
                transportation network, and neural network control. His research has been funded by NSF and NIH.`,
  img: PIImage,
};

const Members = () => {
  return (
    <div className="members-main">
      <div className="members-main__title">Our Team</div>

      {/* PI Section */}
      <div className="members-main__pi">
        <div className="members-main__pi__content">
          <div className="members-main__pi__imageContainer">
            <img
              alt={aboutPI.name}
              src={aboutPI?.img ? aboutPI?.img : defaultProfile}
              className="members-main__pi__imageContainer__image"
            />
          </div>
          <div className="members-main__pi__textContainer">
            <div className="members-main__pi__textContainer__nameAndDesignationContainer">
              <span className="members-main__pi__textContainer__nameAndDesignationContainer__name">
                {aboutPI.name}
              </span>
              <span className="members-main__pi__textContainer__nameAndDesignationContainer__designation">
                {aboutPI.designation}
              </span>
            </div>
            <div className="members-main__pi__textContainer__commonText">
              {aboutPI.college}
            </div>
            <div className="members-main__pi__textContainer__commonText">
              {aboutPI.department}
            </div>
            <div className="members-main__pi__textContainer__description">
              <span className="members-main__pi__textContainer__description__label">
                About:{" "}
              </span>
              {aboutPI.description}
            </div>
          </div>
        </div>
      </div>

      {/* Members Section */}
      {members.map((item, i) => (
        <div
          key={i}
          className={`members-main__card ${i % 2 === 0 ? "light" : "dark"}`}
        >
          <div className="members-main__card__imageContainer">
            <img
              alt={item.name}
              src={item?.img ? item?.img : defaultProfile}
              className="members-main__card__imageContainer__image"
            />
          </div>
          <div className="members-main__card__textContainer">
            <div className="members-main__card__textContainer__nameAndQualificationContainer">
              <span className="members-main__card__textContainer__nameAndQualificationContainer__name">
                {item.name}
              </span>
              <span className="members-main__card__textContainer__nameAndQualificationContainer__qualification">
                {item.qualification}
              </span>
            </div>
            <div className="members-main__card__textContainer__description">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Members;
