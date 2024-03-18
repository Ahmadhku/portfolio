import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done animation.json";
import contactUsAnimation from "../../../public/animation/contact usanimation.json";
import "./contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("mleqlzrw");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} action="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors} />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="email">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors} />
          </div>

          <button disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <h3
              className="flex"
              style={{ color: "#a1a1aa", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 44 }}
                animationData={doneAnimation} />
              Your message has been sent successfuly...
            </h3>
          )}
        </form>
        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 375, marginBottom: 2 }}
            animationData={contactUsAnimation} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
