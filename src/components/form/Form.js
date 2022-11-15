import React, { useState } from "react";
import SingUpInfo from "./SingUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import './/styly.css';

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    emial: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Sing Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SingUpInfo formData={formData} setFormData={setFormData}/>;
    } else if (page === 1 ) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData}/>;
    }
  };
  return (
    <div className="form">
      <div className="progressbar">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            disabled={page == FormTitles.length - 1}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default Form;
