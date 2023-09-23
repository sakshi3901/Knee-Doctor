import { useState } from "react";
import axios from "axios";

export default function Help() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("http://localhost:4000/enquiry", {
        name,
        email,
        phone,
        desc,
      });
      alert("success");
      setName("");
      setEmail("");
      setPhone("");
      setDesc("");
    } catch (error) {
      alert("Failed");
    }
  }

  return (
    <div className="help">
      <h3 style={{ color: "#41b3ff" }}>
        <em>Need Help?</em>
      </h3>
      <div style={{ margin: "1rem 0" }}>
        <span>Just let us know. We will happy to help you.</span>
      </div>
      <form className="help-form" onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(ev) => {
            setName(ev.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Phone no"
          value={phone}
          onChange={(ev) => {
            setPhone(ev.target.value);
          }}
        />
        <textarea
          placeholder="Describe Your Treatment Requirement"
          value={desc}
          onChange={(ev) => {
            setDesc(ev.target.value);
          }}
        />
        <button className="primary">Register</button>
      </form>
    </div>
  );
}
