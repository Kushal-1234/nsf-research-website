// import React, { useState } from "react";
// import { TextField, Button, Typography, Box } from "@mui/material";
// import UploadFileIcon from "@mui/icons-material/UploadFile";
// import SendIcon from "@mui/icons-material/Send";
// import "./WorkshopPage.scss";

// const WorkshopPage = () => {
//   const [fileName, setFileName] = useState("");
//   const [registrationForm, setRegistrationForm] = useState({
//     bannerId: "",
//     name: "",
//     email: "",
//     department: "",
//     phoneNumber: "",
//   });

//   // Replace with your Google Apps Script URL
//   const scriptURL =
//     "https://script.google.com/macros/s/AKfycbwhOxTd-hpnBJsTly_kC-T4rj8K6vw20fir_-K6wWSaApffOKkmQ--kr4dEMkjZh8ds/exec";

//   const handleFileChange = (event) => {
//     if (event.target.files[0]) {
//       setFileName(event.target.files[0].name);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setRegistrationForm({ ...registrationForm, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("registrationForm", registrationForm);

//     // Send form data to Google Apps Script
//     fetch(scriptURL, {
//       method: "POST",
//       mode: "no-cors",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(registrationForm),
//     })
//       .then(() => {
//         alert("Registration successful!");
//         setRegistrationForm({
//           bannerId: "",
//           name: "",
//           email: "",
//           department: "",
//           phoneNumber: "",
//         });
//         setFileName("");
//       })
//       .catch((error) => alert("Error in submitting the form: " + error));
//   };

//   return (
//     <div className="workshop-page">
//       <Box className="workshop-header">
//         <Typography variant="h4">Upcoming Workshop</Typography>
//         <Typography variant="body1">
//           Join us for an insightful workshop!
//         </Typography>
//       </Box>

//       {/* Upload Agenda PDF */}
//       {/* <div className="upload-section">
//         <Typography variant="h6">Upload Workshop Agenda</Typography>
//         <label htmlFor="upload-file">
//           <input
//             style={{ display: "none" }}
//             id="upload-file"
//             type="file"
//             onChange={handleFileChange}
//           />
//           <Button
//             variant="contained"
//             component="span"
//             startIcon={<UploadFileIcon />}
//           >
//             Upload PDF
//           </Button>
//         </label>
//         {fileName && <p>Uploaded File: {fileName}</p>}
//       </div> */}

//       {/* Registration Form */}
//       <form onSubmit={handleSubmit} className="registration-form">
//         <Typography variant="h6">Register for the Workshop</Typography>
//         <TextField
//           fullWidth
//           label="Banner ID"
//           name="bannerId"
//           variant="outlined"
//           value={registrationForm.bannerId}
//           onChange={handleChange}
//           className="registration-input"
//           required
//           type="number"
//         />
//         <TextField
//           fullWidth
//           label="Name"
//           name="name"
//           variant="outlined"
//           value={registrationForm.name}
//           onChange={handleChange}
//           className="registration-input"
//           required
//         />
//         <TextField
//           fullWidth
//           label="Email"
//           name="email"
//           variant="outlined"
//           value={registrationForm.email}
//           onChange={handleChange}
//           className="registration-input"
//           required
//         />
//         <TextField
//           fullWidth
//           label="Department"
//           name="department"
//           variant="outlined"
//           value={registrationForm.department}
//           onChange={handleChange}
//           className="registration-input"
//           required
//         />
//         <TextField
//           fullWidth
//           type="Number"
//           label="Phone Number"
//           name="phoneNumber"
//           variant="outlined"
//           value={registrationForm.phoneNumber}
//           onChange={handleChange}
//           className="registration-input"
//           required
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           endIcon={<SendIcon />}
//           className="submit-button"
//         >
//           Register
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default WorkshopPage;

import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./WorkshopPage.scss";

const WorkshopPage = () => {
  const [registrationForm, setRegistrationForm] = useState({
    bannerId: "",
    name: "",
    email: "",
    department: "",
    phoneNumber: "",
  });

  // Replace with your Google Apps Script URL
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwhOxTd-hpnBJsTly_kC-T4rj8K6vw20fir_-K6wWSaApffOKkmQ--kr4dEMkjZh8ds/exec";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistrationForm({ ...registrationForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to Google Apps Script
    fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationForm),
    })
      .then(() => {
        alert("Registration successful!");
        setRegistrationForm({
          bannerId: "",
          name: "",
          email: "",
          department: "",
          phoneNumber: "",
        });
      })
      .catch((error) => alert("Error in submitting the form: " + error));
  };

  const agendaItems = [
    { time: "9:00 AM", topic: "Opening Remarks & Introductions" },
    { time: "9:30 AM", topic: "Keynote: AI in Modern Science" },
    { time: "10:30 AM", topic: "Break" },
    { time: "10:45 AM", topic: "Session 1: Neural Networks and Deep Learning" },
    { time: "12:00 PM", topic: "Lunch" },
    { time: "1:00 PM", topic: "Session 2: Innovations in Renewable Energy" },
    { time: "2:30 PM", topic: "Panel Discussion: Future of AI and ML" },
    { time: "5:00 PM", topic: "Closing Remarks" },
  ];

  return (
    <div className="workshop-page">
      <Box className="workshop-header">
        <Typography variant="h4">Upcoming Workshop</Typography>
        <Typography variant="body1">
          Join us for an insightful workshop!
        </Typography>
      </Box>

      <div className="workshop-content">
        {/* Agenda Section */}
        <div className="agenda-section">
          <Typography variant="h6" className="agenda-title">
            Workshop Agenda
          </Typography>
          <ul className="agenda-list">
            {agendaItems.map((item, index) => (
              <li
                key={index}
                className="agenda-item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <strong>{item.time}</strong> - {item.topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="registration-form">
          <Typography variant="h6">Register for the Workshop</Typography>
          <TextField
            fullWidth
            label="Banner ID"
            name="bannerId"
            variant="outlined"
            value={registrationForm.bannerId}
            onChange={handleChange}
            required
            type="number"
          />
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            value={registrationForm.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            value={registrationForm.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Department"
            name="department"
            variant="outlined"
            value={registrationForm.department}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            type="number"
            label="Phone Number"
            name="phoneNumber"
            variant="outlined"
            value={registrationForm.phoneNumber}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            className="submit-button"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default WorkshopPage;
