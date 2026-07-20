import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Information we collect",
    content:
      "When you submit the demo form, we collect the name, email address, and phone number you provide. We also receive standard technical information needed to operate and protect the website and its services.",
  },
  {
    title: "How we use it",
    content:
      "We use demo-form details to respond to your enquiry, arrange a demonstration, understand your organisation's needs, and maintain a record of the submission.",
  },
  {
    title: "Where it is processed",
    content:
      "Demo submissions are handled by the Veerify AI backend, stored in MongoDB, and sent to Formspree for email-notification delivery. These providers process information on our behalf to operate this workflow.",
  },
  {
    title: "Sharing and retention",
    content:
      "We do not sell demo-form details. We share them only with service providers required to operate the submission workflow or when required by law. We retain information only for as long as reasonably necessary for these purposes.",
  },
  {
    title: "Your choices",
    content:
      "You may ask us to correct or delete the contact information submitted through the demo form, subject to applicable legal and operational requirements.",
  },
];

const PrivacyPolicy = () => (
  <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 sm:py-16">
    <div className="mx-auto max-w-3xl">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <article className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
        <p className="font-semibold text-emerald-700">Veerify AI</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: 20 July 2026</p>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          This policy explains how Veerify AI handles information submitted
          through the demo form on this website.
        </p>

        <div className="mt-10 space-y-9">
          {sections.map(({ title, content }) => (
            <section key={title}>
              <h2 className="text-xl font-bold text-slate-900">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{content}</p>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-bold text-slate-900">Contact us</h2>
            <p className="mt-3 leading-7 text-slate-600">
              For privacy questions or data enquiries, email{" "}
              <a
                href="mailto:info@veerifyai.com"
                className="font-semibold text-emerald-700 hover:underline"
              >
                info@veerifyai.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  </main>
);

export default PrivacyPolicy;
