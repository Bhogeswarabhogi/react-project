import React from "react";

function About() {
  return (
    <>
      <div
        className="container-fluid p-5 m-10"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/toy-shopping-cart-with-boxes-credit-card-with-copy-space_339191-197.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-center mt-8 fw-bold">About Us</h2>
        <div className="row">
          <div className="col-md-7" style={{ marginLeft: "50px"}}>
            <p className="text-center mt-3 fw-bold">
              Welcome to our e-commerce website! We are thrilled to have you
              here and hope that you find what you are looking for. Our mission
              is to provide you with the best possible shopping experience. We
              offer a wide range of products from various categories, including
              electronics, clothing, and groceries. Our team of experts is
              always on hand to assist you with any queries or concerns you may
              have. We value your feedback and suggestions, and we are always
              looking for ways to improve our services. If you have any
              questions, comments, or suggestions, please don't hesitate to
              contact us. We look forward to serving you and helping you find
              what you are looking for.
            </p>
            <p className="text-center mt-3 fw-bold">
              Thank you for choosing our e-commerce website. We appreciate your
              trust and support. We look forward to serving you and helping you
              find what you are looking for.
            </p>
            <p className="text-center mt-3 fw-bold">
              Best regards,
              <br />
              <br />
              Team E-Commerce
            </p>
            <br /><br />
            <div className="w-100">
              <hr />
              <br /><br />
              <address>
                <strong>Ishop</strong>
                <br />
                <strong>123 Main Street</strong>
                <br />
                <strong>Anytown, USA</strong>
                <br />
                <strong>
                <abbr title="Phone">P:</abbr> (123) 456-7890
                </strong>
                <br />
                <a href="mailto:#">g6sC4@example.com</a>
                <br />
                <a href="https://www.Ishop.com">www.example.com</a>
                <br />
              </address>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
