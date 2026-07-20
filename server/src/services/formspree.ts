interface DemoRequestNotification {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const sendDemoRequestNotification = async (
  details: DemoRequestNotification,
) => {
  const formId = process.env.FORMSPREE_FORM_ID || "xaqrjoop";
  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...details,
      subject: `New demo request from ${details.firstName} ${details.lastName}`,
    }),
  });

  if (!response.ok) {
    const responseBody = await response.text();
    throw new Error(
      `Formspree notification failed (${response.status}): ${responseBody}`,
    );
  }
};
