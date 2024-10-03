import React from "react";
import "./Datasets.scss";

const datasets = [
  {
    title: "Solar Energy Dataset",
    description:
      "A dataset containing solar energy readings and system performance data collected over the span of 5 years.",
    link: "#",
  },
  {
    title: "Bioinformatics Dataset",
    description:
      "A collection of biological sequence data used for computational biology and bioinformatics research.",
    link: "#",
  },
  {
    title: "AI Neural Network Dataset",
    description:
      "This dataset includes data used for training various neural networks for deep learning research.",
    link: "#",
  },
  {
    title: "Transportation Network Dataset",
    description:
      "Real-time traffic data and vehicle dynamics used for transportation and smart city research.",
    link: "#",
  },
  {
    title: "Transportation Network Dataset",
    description:
      "Real-time traffic data and vehicle dynamics used for transportation and smart city research.",
    link: "#",
  },
  {
    title: "Transportation Network Dataset",
    description:
      "Real-time traffic data and vehicle dynamics used for transportation and smart city research.",
    link: "#",
  },
  {
    title: "Transportation Network Dataset",
    description:
      "Real-time traffic data and vehicle dynamics used for transportation and smart city research.",
    link: "#",
  },
  {
    title: "Transportation Network Dataset",
    description:
      "Real-time traffic data and vehicle dynamics used for transportation and smart city research.",
    link: "#",
  },
];

const Datasets = () => {
  return (
    <div className="datasets">
      <div className="datasets__title">Available Datasets</div>
      <div className="datasets__list">
        {datasets.map((dataset, index) => (
          <div key={index} className="datasets__card">
            <div className="datasets__card__title">{dataset.title}</div>
            <p className="datasets__card__description">{dataset.description}</p>
            <a href={dataset.link} className="datasets__card__link">
              Access Dataset
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Datasets;
