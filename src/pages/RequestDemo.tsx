import { FormEvent, useState } from "react";
import { ArrowLeft, CheckCircle2, Linkedin, Mail, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";

const RequestDemo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const countryCode = String(formData.get("countryCode") || "+91");
    const localPhone = String(formData.get("phone") || "").replace(/\D/g, "");
    const fullPhoneNumber = `${countryCode}${localPhone}`;

    try {
      const response = await fetch("/api/demo-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: String(formData.get("firstName") || ""),
          lastName: String(formData.get("lastName") || ""),
          email: String(formData.get("email") || ""),
          phone: fullPhoneNumber,
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      const result = contentType.includes("application/json")
        ? await response.json()
        : null;

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "The demo service is currently unavailable. Please try again shortly.",
        );
      }

      form.reset();
      setSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to submit your details",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-emerald-50 px-4 py-12">
        <section className="w-full max-w-xl rounded-3xl border border-emerald-100 bg-white p-8 text-center shadow-xl sm:p-12">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <CheckCircle2 className="h-9 w-9" />
          </span>

          <h1 className="mt-6 text-3xl font-bold text-slate-950">
            Details submitted
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            Thank you for your interest in Veerify AI. Our team will contact
            you shortly using the details you provided.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Return to home
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-slate-100 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-emerald-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mt-8 overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-2xl lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <section className="bg-emerald-950 p-8 text-white sm:p-12 lg:p-14">
            <img
              src="/logo.png"
              alt="Veerify AI"
              className="h-14 w-14 rounded-xl bg-white object-contain p-1"
            />

            <p className="mt-10 font-semibold text-emerald-300">
              Veerify AI
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight">
              Book a personalized demo
            </h1>

            <p className="mt-5 leading-7 text-emerald-50/80">
              See how Veerify AI helps hospitals organize compliance
              workflows, evidence, corrective actions, dashboards, and audit
              readiness in one platform.
            </p>

            <div className="mt-10 space-y-4 border-t border-white/15 pt-8 text-sm text-emerald-50/90">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@veerifyai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail className="h-5 w-5 text-emerald-300" />
                info@veerifyai.com
              </a>

              <a
                href="tel:+918181016016"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone className="h-5 w-5 text-emerald-300" />
                +91 81810 16016
              </a>

              <a
                href="https://www.linkedin.com/company/veerify-ai/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <Linkedin className="h-5 w-5 text-emerald-300" />
                Follow Veerify AI
              </a>
            </div>
          </section>

          <section className="p-6 sm:p-10 lg:p-14">
            <p className="font-semibold text-emerald-700">Start a conversation</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Tell us how to reach you
            </h2>
            <p className="mt-3 text-slate-600">
              Complete the form and our team will contact you about a demo.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    maxLength={100}
                    pattern="[A-Za-z]+(?:[ '\-][A-Za-z]+)*"
                    title="Enter a valid name using letters, spaces, apostrophes, or hyphens"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                    placeholder="First name"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    maxLength={100}
                    pattern="[A-Za-z]+(?:[ '\-][A-Za-z]+)*"
                    title="Enter a valid name using letters, spaces, apostrophes, or hyphens"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                  placeholder="name@hospital.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                  Contact number
                </label>
                <div className="flex gap-3">
                  <select
                    id="countryCode"
                    name="countryCode"
                    defaultValue="+91"
                    aria-label="Country code"
                    className="mt-2 w-32 rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+65">🇸🇬 +65</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    required
                    minLength={6}
                    maxLength={12}
                    pattern="[0-9]{6,12}"
                    title="Enter a valid phone number using digits only"
                    onChange={(event) => {
                      event.currentTarget.value =
                        event.currentTarget.value.replace(/\D/g, "");
                    }}
                    className="mt-2 min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                    placeholder="9876543210"
                  />
                </div>
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Submit"}
                {!submitting && <Send className="h-4 w-4" />}
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                By submitting this form, you agree that Veerify AI may contact
                you about your demo. Read our{" "}
                <Link to="/privacy" className="font-semibold text-emerald-700 underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default RequestDemo;
