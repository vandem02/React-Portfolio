import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add("was-validated");
    } else {
      emailjs.send(
        "service_3ksc79b",
        "template_lro30qi",
        {
          from_name: `${fname} ${lname} ${email}`,
          to_name: "Evan Vandenberg",
          message,
        },
        "sp0mXYHyb0i_uo5aV"
      );
      alert("Message sent!");
      setFname("");
      setLname("");
      setEmail("");
      setMessage("");
      form.classList.remove("was-validated");
    }
  };

  return (
    <form id="form" className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">
          First name
        </label>
        <input type="text" className="form-control" id="validationCustom01" value={fname} onChange={(e) => setFname(e.target.value)} required></input>
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">
          Last name
        </label>
        <input type="text" className="form-control" id="validationCustom02" value={lname} onChange={(e) => setLname(e.target.value)} required></input>
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom03" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="validationCustom03" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
        <div className="invalid-feedback">Please enter a valid email.</div>
      </div>
      <div className="col-md-4 form-floating">
        <textarea className="form-control" placeholder="Message" id="floatingTextarea" style={{ height: 150 }} value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        <label htmlFor="floatingTextarea" style={{ color: "black", marginLeft: 8 }}>
          Your message
        </label>
        <div className="invalid-feedback">Please enter a message.</div>
      </div>
      <div className="col-12">
        <button className="btn btn-info" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

export default Contact;
