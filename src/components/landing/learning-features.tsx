import Image from "next/image";

const features = [
  {
    icon: "https://www.tareequljannah.com/wp-content/uploads/2025/04/Expert-Native-Arabic-Scholars2.svg",
    title: "Export Quran Arabic Teachers",
    description: "We provide native Arabic teachers for Quran learning.",
  },
  {
    icon: "https://www.tareequljannah.com/wp-content/uploads/2025/04/one-to-one.svg",
    title: "One-to-One Learning Experience",
    description: "One-to-one learning sessions with a personalized approach.",
  },
  {
    icon: "https://www.tareequljannah.com/wp-content/uploads/2025/04/Certified-Tutors.svg",
    title: "Certified Tutors",
    description: "Al-Azhar certified professional Quran teachers.",
  },
  {
    icon: "https://www.tareequljannah.com/wp-content/uploads/2025/04/Live-online-classes2.svg",
    title: "Live Online Classes",
    description: "Live private classes with flexible schedules.",
  },
  {
    icon: "https://www.tareequljannah.com/wp-content/uploads/2025/04/Money-Back-Guarantee2.svg",
    title: "100% Money-Back Guarantee",
    description: "We will refund your money if you are not satisfied.",
  },
  {
    icon: "https://www.tareequljannah.com/wp-content/uploads/2025/04/Support-_-Schedule.svg",
    title: "24/7 Support & Schedule",
    description: "We are available for your convenience at any time.",
  },
];

export default function LearningFeatures() {
  return (
    <section className="px-6 py-12">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-bold text-slate-100">
            We provide different learning
          </h2>

          <h2 className="text-lg font-bold">Why us?</h2>

          <p className="mt-2 text-4xl font-semibold">
            We Provide Different Learning{" "}
            <span className="text-primary">Journey</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-14 gap-y-9 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <Image
                src={Icon}
                alt={title}
                className="mx-auto"
                width={80}
                height={80}
              />

              <h3 className="mt-3 font-semibold text-primary">{title}</h3>

              <p className="mx-auto mt-2 leading-4 text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
