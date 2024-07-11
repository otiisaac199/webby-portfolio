import Button from "./ReuseableComp/Button";
import CompHeading from "./ReuseableComp/CompHeading";

const Contact = () => {
  return (
    <div className="contact-container">
      <CompHeading firstText={"Contact"} secondText={"Me!"} />
      <form className="form">
        <div className="input">
          <div>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              required
            />
            <input
              type="number"
              name="mobilenumber"
              placeholder="Mobile Number"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              name="emailsubject"
              placeholder="Email Subject"
              required
            />
          </div>
        </div>

        <textarea
          placeholder="Your Message"
          style={{
            // position: "relative",
            width: "99%",
            height: "250px",
            color: "var(--color)",
            border: "1px solid var(--color2)",
            marginTop: "6px",
            padding: "10px 7px",
            fontFamily: "Quicksand",
            background: "transparent",
            borderRadius: "5px",
          }}
        ></textarea>
        <Button btnTitle={"Submit"} />
      </form>
    </div>
  );
};

export default Contact;
