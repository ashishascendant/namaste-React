import React from "react";

const Contactus = () => {
  return (
    <div className="contactcont" style={{ padding: "40px" }}>
      <h1>Contact Us</h1>
      <p>We would love to hear from you!</p>

      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Message</label>
          <br />
          <textarea
            placeholder="Write your message"
            name="message"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contactus;