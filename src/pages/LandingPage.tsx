import { useNavigate } from "react-router-dom";
import {
  Activity,
  ClipboardCheck,
  FileCheck2,
  LayoutDashboard,
  ListChecks,
  Mail,
  Phone,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

const modules = [
  "Infection Prevention and Control",
  "Quality, Patient Safety, and Risk Management",
  "Biomedical Equipment Compliance",
  "Facility Management and Safety",
  "Human Resource and Staff Compliance",
  "Medication and Pharmacy Compliance",
  "Patient Rights, Consent, and Education",
  "Clinical Care and Nursing Compliance",
  "Internal Audits",
  "RCA and CAPA",
  "Document and Evidence Management",
  "Hospital Clause Mapping",
  "Dashboards and Audit Readiness",
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
            className="flex min-w-0 items-center gap-3"
          >
            <span className="flex shrink-0 flex-col items-center">
              <img
                src="/logo.png"
                alt="Veerify AI logo"
                className="h-10 w-10 rounded-xl object-contain sm:h-12 sm:w-12"
              />
              <span className="mt-1 whitespace-nowrap text-center text-[7px] font-semibold leading-none tracking-tight text-emerald-700 sm:text-[8px]">
                Aritakula Innovations
              </span>
            </span>

            <span className="min-w-0">
              <span className="block text-base font-bold leading-none text-slate-900 sm:text-lg">
                Veerify AI
              </span>

              <span className="mt-1 hidden text-xs text-slate-500 sm:block">
                Hospital Compliance Execution
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

          <button
            type="button"
            onClick={() => navigate("/request-demo")}
            className="shrink-0 rounded-lg bg-emerald-600 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-700 sm:px-4 sm:text-sm"
          >
            Start Demo
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="about"
        className="relative isolate min-h-[680px] scroll-mt-20 overflow-hidden bg-slate-50"
      >
        <img
          src="/audit-hero.png"
          alt="Hospital compliance team reviewing an audit dashboard"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] sm:object-center"
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10 lg:via-white/80" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
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
              Veerify AI helps hospitals execute, track, review, and prove
              compliance across departments through structured workflows,
              evidence records, dashboards, and audit trails.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Move from scattered registers and last-minute audit preparation
              to continuous hospital readiness.
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
            Veerify AI converts compliance requirements into daily workflows,
            evidence records, reviews, corrective actions, dashboards, and
            audit trails. Hospitals can see what is completed, what is pending,
            what evidence is available, and which departments need attention.
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

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => (
              <article
                key={module}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 font-bold text-emerald-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-semibold leading-snug text-slate-800 group-hover:text-emerald-800">
                  {module}
                </h3>
              </article>
            ))}
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
          <p>© {new Date().getFullYear()} Veerify AI</p>

          <p>
            Hospital Audit Readiness and Hospital Compliance Execution System
          </p>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
