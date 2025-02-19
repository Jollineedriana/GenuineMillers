import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(""); // For displaying feedback to the user

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_08ldy0n",  
        "template_dj2ye39", 
        form.current,
        "gPaNBsC9jDML648OM" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageStatus("Message sent successfully!");

          // Automatically hide the message after 5 seconds
          setTimeout(() => {
            setMessageStatus("");
          }, 5000); // 5 seconds
        },
        (error) => {
          console.log(error.text);
          setMessageStatus("Failed to send message. Please try again.");

          // Automatically hide the message after 5 seconds
          setTimeout(() => {
            setMessageStatus("");
          }, 5000); // 5 seconds
        }
      );

    
    e.target.reset();
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <button type="submit">Submit</button>
      </form>
      {/* Display message feedback */}
      {messageStatus && <p>{messageStatus}</p>}
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  margin: auto;
  padding: 2rem;
  background: #282c34;
  border-radius: 8px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input, textarea {
      width: 100%;
      padding: 10px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      margin-bottom: 1rem;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
      color: #fff;
    }

    button {
      margin-top: 2rem;
      cursor: pointer;
      background: #0056b3;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #2ce949;
    }
  }

  p {
    margin-top: 1rem;
    color: white;
    font-weight: bold;
  }
`;
