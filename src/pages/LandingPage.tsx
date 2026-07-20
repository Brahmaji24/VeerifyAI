import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  ClipboardCheck,
  FileCheck2,
  LayoutDashboard,
  ListChecks,
  Mail,
  Menu,
  Phone,
  SearchCheck,
  ShieldCheck,
  X,
} from "lucide-react";

const moduleGroups = [
  {
    title: "Clinical quality and safety",
    description: "Coordinate patient-facing compliance across clinical teams.",
    modules: [
      "Infection Prevention and Control",
      "Quality, Patient Safety, and Risk Management",
      "Medication and Pharmacy Compliance",
      "Patient Rights, Consent, and Education",
      "Clinical Care and Nursing Compliance",
    ],
  },
  {
    title: "Facilities and workforce",
    description: "Keep operational, equipment, and staff obligations visible.",
    modules: [
      "Biomedical Equipment Compliance",
      "Facility Management and Safety",
      "Human Resource and Staff Compliance",
    ],
  },
  {
    title: "Audit and improvement",
    description: "Move findings through investigation, action, and closure.",
    modules: ["Internal Audits", "RCA and CAPA"],
  },
  {
    title: "Evidence and oversight",
    description: "Bring documentation, clause mapping, and readiness into view.",
    modules: [
      "Document and Evidence Management",
      "Hospital Clause Mapping",
      "Dashboards and Audit Readiness",
    ],
  },
];

const features = [
  {
    icon: ListChecks,
    title: "Daily Compliance Workflows",
    description:
      "Assign, complete, review, and close hospital compliance activities.",
  },
  {
    icon: FileCheck2,
    title: "Evidence Management",
    description:
      "Attach reports, forms, photos, registers, certificates, and documents to the relevant activity.",
  },
  {
    icon: SearchCheck,
    title: "Internal Audit Support",
    description:
      "Record observations, track non-conformities, assign corrective actions, and verify closure.",
  },
  {
    icon: ClipboardCheck,
    title: "RCA and CAPA Tracking",
    description:
      "Manage root cause analysis, corrective actions, preventive actions, and final closure.",
  },
  {
    icon: LayoutDashboard,
    title: "Department Dashboards",
    description:
      "See pending tasks, overdue actions, evidence gaps, and review delays by department.",
  },
  {
    icon: ShieldCheck,
    title: "Audit Trail",
    description:
      "Track who created, reviewed, corrected, approved, or closed each compliance record.",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllModules, setShowAllModules] = useState(false);

  const scrollToModules = () => {
    document.getElementById("modules")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo and brand name */}
          <a
            href="#about"
            aria-label="Veerify AI home"
            className="flex min-w-0 items-center"
          >
            <span className="flex w-28 shrink-0 flex-col items-center justify-center">
              <img
                src="/logo.png"
                alt="Veerify AI logo"
                className="h-[4.5rem] w-[4.5rem] object-contain sm:h-20 sm:w-20"
              />
              <span className="-mt-1 whitespace-nowrap text-center text-[9px] font-semibold leading-none tracking-[-0.02em] text-emerald-700 sm:text-[10px]">
                Aritakula Innovations
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 md:flex">
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-emerald-700"
            >
              About
            </a>

            <a
              href="#modules"
              className="text-sm font-medium text-slate-600 transition hover:text-emerald-700"
            >
              Modules
            </a>

            <a
              href="#features"
              className="text-sm font-medium text-slate-600 transition hover:text-emerald-700"
            >
              Features
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 transition hover:text-emerald-700"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => navigate("/request-demo")}
              className="hidden shrink-0 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:inline-flex"
            >
              Start Demo
            </button>

            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-emerald-100 bg-white px-4 py-4 shadow-lg md:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1">
              {[
                ["About", "#about"],
                ["Modules", "#modules"],
                ["Features", "#features"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  {label}
                </a>
              ))}

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/request-demo");
                }}
                className="mt-2 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Start Demo
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="about"
        className="relative isolate min-h-[620px] scroll-mt-20 overflow-hidden bg-slate-50"
      >
        <img
          src="/audit-hero.png"
          alt="Hospital compliance team reviewing an audit dashboard"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] sm:object-center"
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:via-white/70" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              <Activity className="h-4 w-4" />
              Hospital compliance execution system
            </div>

            <p className="mb-3 font-semibold text-emerald-700">
              Veerify AI
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Hospital Audit Readiness, Every Day
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
              Turn daily requirements into clear workflows, evidence,
              corrective actions, and accountable reviews across departments.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Replace scattered registers and last-minute preparation with a
              continuous view of readiness.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate("/request-demo")}
                className="rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                Start Demo
              </button>

              <button
                type="button"
                onClick={scrollToModules}
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-emerald-600 hover:text-emerald-700"
              >
                Explore Modules
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-emerald-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
              Hospital readiness platform
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Compliance that becomes part of daily hospital operations
            </h2>
          </div>

          <p className="text-lg leading-8 text-emerald-50/80">
            Give every department a shared view of completed work, pending
            actions, available evidence, and items that need attention—without
            waiting for the next audit cycle.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section
        id="modules"
        className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-emerald-700">
              Compliance modules
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              One Platform for Hospital Compliance Execution
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Veerify AI supports audit readiness across key hospital
              compliance areas.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {moduleGroups.map((group, index) => (
              <article
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 font-bold text-emerald-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {group.title}
                    </h3>
                    <p className="mt-1 leading-6 text-slate-600">
                      {group.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                  {(showAllModules ? group.modules : group.modules.slice(0, 2)).map(
                    (module) => (
                      <li key={module} className="flex gap-2.5 text-sm text-slate-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        <span>{module}</span>
                      </li>
                    ),
                  )}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              aria-expanded={showAllModules}
              onClick={() => setShowAllModules((visible) => !visible)}
              className="rounded-xl border border-emerald-600 bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              {showAllModules ? "Show fewer modules" : "View all modules"}
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-semibold text-emerald-700">
              Audit readiness features
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything Needed for Audit Readiness
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 p-6 transition hover:border-emerald-300 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="mt-5 text-xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust and data handling */}
      <section className="border-y border-emerald-100 bg-emerald-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-emerald-700">Responsible follow-up</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              A clear path from interest to conversation
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Demo submissions collect only the contact details needed for the
              Veerify AI team to respond.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Minimal contact details",
                description: "Name, business email, and phone number are collected for follow-up.",
              },
              {
                icon: FileCheck2,
                title: "Structured handling",
                description: "Submissions are recorded through the application backend for consistent review.",
              },
              {
                icon: ClipboardCheck,
                title: "Human response",
                description: "Submitted details are used by the team to arrange and personalize the demo.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-emerald-100 bg-white p-6">
                <Icon className="h-7 w-7 text-emerald-700" />
                <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-emerald-700 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-bold">
            Make hospital readiness continuous
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-emerald-50">
            Track hospital compliance, evidence, corrective actions, and audit
            preparation from one structured platform.
          </p>

          <button
            type="button"
            onClick={() => navigate("/request-demo")}
            className="mt-7 rounded-xl bg-white px-6 py-3.5 font-semibold text-emerald-800 transition hover:bg-emerald-50"
          >
            Start Demo
          </button>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-emerald-700">Contact us</p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Talk to the Veerify AI Team
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Contact us to learn how Veerify AI can support your hospital's
              compliance and audit-readiness workflows.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
            <a
              href="mailto:info@veerifyai.com"
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Mail className="h-6 w-6" />
              </span>

              <span className="min-w-0">
                <span className="block text-sm font-medium text-slate-500">
                  Email
                </span>
                <span className="block break-all font-semibold text-slate-900 group-hover:text-emerald-700">
                  info@veerifyai.com
                </span>
              </span>
            </a>

            <a
              href="tel:+918181016016"
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Phone className="h-6 w-6" />
              </span>

              <span>
                <span className="block text-sm font-medium text-slate-500">
                  Phone
                </span>
                <span className="block font-semibold text-slate-900 group-hover:text-emerald-700">
                  +91 81810 16016
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{"\u00A9"} {new Date().getFullYear()} Veerify AI</p>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <a href="/privacy" className="hover:text-emerald-700">
              Privacy Policy
            </a>
            <p>Hospital Audit Readiness and Compliance Execution</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
