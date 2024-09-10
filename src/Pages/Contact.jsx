import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div
        className="form-container"
        style={{
          border: "1px solid black",
          margin: "15px",
          padding: "15px",
          borderRadius: "10px",
          
        }}
      >
        <h1
          className="form-title"
          style={{
            margin: "20px",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "serif",
            fontSize: "50px",
          }}
        >
          Contact
        </h1>
        <form
          action="contact"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "20px",
            fontFamily: "serif",
            fontSize: "20px",
            fontWeight: "bold",
            color: "black",
            border: "1px solid black",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "2px 2px 5px black",
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            style={{
              margin: "10px",
              border: "1px solid black",
              padding: "10px",
              borderRadius: "5px",
            }}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            style={{
              margin: "10px",
              border: "1px solid black",
              padding: "10px",
              borderRadius: "5px",
            }}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Message"
            style={{
              margin: "10px",
              border: "1px solid black",
              padding: "10px",
              borderRadius: "5px",
            }}
          ></textarea>
          <button className="Aishu" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
