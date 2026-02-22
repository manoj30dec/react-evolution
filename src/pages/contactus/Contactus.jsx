import React from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

// import { useFormAction } from "react-router-dom";

async function submitContact(prevState, formData) {
  await new Promise((res) => setTimeout(res, 1500));
  const name = formData.get("fullname");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  if (!name || !email || !subject || !message) {
    return { error: "Please fill all required fields!" };
  }
  if (!email.includes("@")) {
    return { error: "Invalid email address!" };
  }
  return { success: "Form submitted successfully!" };
}

const Contactus = () => {
  const [state, formAction] = useActionState(submitContact, {
    error: null,
    success: null,
  });

  function SubmitButton() {
    const { pending, data, method, action } = useFormStatus(); //since it works only in form child component
    console.log("Pending:", pending);
    console.log("FormData:", data ? Object.fromEntries(data) : null);
    console.log("Method:", method);
    console.log("Action:", action);

    return (
      <button type="submit" disabled={pending} className="btn btn-primary">
        {pending ? "Submitting..." : "Submit"}
      </button>
    );
  }

  return (
    <>
      <h1>Demo of React 19 use useActionState</h1>
      {state.error && <p className="text-danger mt-2">{state.error}</p>}

      {state.success && <p className="text-success mt-2">{state.success}</p>}
      <form
        className="mt-5"
        action={formAction}
        style={{ maxWidth: "600px" }}
        noValidate
      >
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              placeholder="Enter your name"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            placeholder="Enter subject"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* <button type="submit" className="btn btn-primary">
          Submit
        </button> */}
        <SubmitButton />
      </form>
    </>
  );
};

export default Contactus;
