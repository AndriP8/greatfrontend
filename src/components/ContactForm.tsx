const SUBMIT_URL =
  "https://questions.greatfrontend.com/api/questions/contact-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function submitForm(event: any) {
  event.preventDefault();
  const form = event.target;

  try {
    if (form.action !== SUBMIT_URL) {
      alert("Incorrect form action value");
      return;
    }

    if (form.method.toLowerCase() !== "post") {
      alert("Incorrect form method value");
      return;
    }

    const formData = new FormData(form);
    const response = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const text = await response.text();
    alert(text);
  } catch (error) {
    alert("Error submitting form!" + error);
  }
}

export default function ContactForm() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      action={SUBMIT_URL}
      method="post"
      onSubmit={submitForm}
    >
      <div>
        <label style={{ display: "block" }} htmlFor="name">
          Name
        </label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label style={{ display: "block" }} htmlFor="email">
          Email
        </label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label style={{ display: "block" }} htmlFor="message">
          Message
        </label>
        <textarea name="message" id="message" />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
