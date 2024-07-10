import Button from "./ReuseableComp/Button";
import CompHeading from "./ReuseableComp/CompHeading";

const Contact = () => {
  return (
    <div className="contact-container">
      <CompHeading firstText={"Contact"} secondText={"Me!"} />
      <form className="form">
        <input type="text" name="fullname" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="number"
          name="mobilenumber"
          placeholder="Mobile Number"
          required
        />
        <input
          type="text"
          name="emailsubject"
          placeholder="Email Subject"
          required
        />
        <textarea
          placeholder="Your Message"
          style={{
            // position: "relative",
            width: "99%",
            height: "250px",
            color: "var(--color)",
            border: "1px solid var(--color2)",
            padding: "10px 7px",
            fontFamily: "Quicksand",
            background: "transparent",
            borderRadius: "5px",
          }}
        ></textarea>
        <Button btnTitle={"Submit"} className="form-button" />
      </form>
    </div>
  );
};

export default Contact;
