import { useState, useEffect } from "react";
import style from "./style.module.css";
import mainStyle from "@/style/index.module.css";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    Name: "",
    LastName: "",
    Email: "",
    Message: "",
  });

  useEffect(() => {
    const savedValues = {
      Name: localStorage.getItem("Name") || "",
      LastName: localStorage.getItem("LastName") || "",
      Email: localStorage.getItem("Email") || "",
      Message: localStorage.getItem("Message") || "",
    };
    setFormValues(savedValues);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleBlur = (e: { target: { name: string; value: string } }) => {
    localStorage.setItem(e.target.name, e.target.value);
  };

  const handleSubmit = (e: { preventDefault?: () => void }) => {
    e.preventDefault?.();
    console.log("Form submitted:", formValues);

    localStorage.removeItem("Name");
    localStorage.removeItem("LastName");
    localStorage.removeItem("Email");
    localStorage.removeItem("Message");

    setFormValues({
      Name: "",
      LastName: "",
      Email: "",
      Message: "",
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <section>
      <div className={mainStyle["container"]}>
        <div className={style["contact-body"]}>
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
          >
            <label>
              Name
              <input
                type="text"
                placeholder="Your Name"
                name="Name"
                value={formValues.Name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={style["contact-input"]}
              />
            </label>
            <label>
              Last Name
              <input
                type="text"
                placeholder="Your Last Name"
                name="LastName"
                value={formValues.LastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={style["contact-input"]}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                placeholder="Your Email"
                name="Email"
                value={formValues.Email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={style["contact-input"]}
              />
            </label>
            <label>
              Message
              <textarea
                name="Message"
                placeholder="Message"
                value={formValues.Message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={style["contact-input"]}
              ></textarea>
            </label>
            <button type="submit">Contact Us</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
