"use server";


export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const packageName = formData.get("package") as string;
  const message = formData.get("message") as string;

  // Basic Input Sanitization & Validation
  if (!name || !email || !message) {
    return { success: false, error: 'Missing required fields' };
  }

  if (name.length > 100 || email.length > 100 || message.length > 5000) {
    return { success: false, error: 'Input too long' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Invalid email address' };
  }

  console.log("Attempting to send form to Formspree:", { name, email });

  try {
    const formId = process.env.FORMSPREE_FORM_ID;

    if (!formId) {
      console.error("Missing FORMSPREE_FORM_ID");
      return { success: false, error: 'Configuration error' };
    }

    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        package: packageName,
        message,
        _subject: `New submission from ${name}` // Optional: Custom subject for Formspree
      })
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      console.error("Formspree error:", errorData);
      return { success: false, error: 'Failed to submit form' };
    }

  } catch (error) {
    console.error("Action fatal error:", error);
    return { success: false, error: 'Network error' };
  }
}
