import React from "react";
import "./AppDownload.css";

function AppDownload() {
  return (
    <section id="app-download" className="  mt-14 mb-14 py-16 ">
      <div className="about  bg-white rounded-2xl shadow-xl px-8 py-10 fadeInUp">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#ff4c24] mb-6">About Us</h1>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to{" "}
          <span className="font-semibold text-[#ff4c24]">Tomato</span> — your
          trusted food delivery partner. We bring your favorite meals from the
          best restaurants straight to your doorstep, fresh and fast.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Launched in 2026, our mission is simple: make food ordering
          effortless, enjoyable, and reliable. From street food cravings to
          premium dining, Tomato delivers it all.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          We value your trust and work hard to ensure every order is packed with
          quality, care, and on-time delivery. Your satisfaction is our top
          priority.
        </p>

        {/* Why Choose Us */}
        <h2 className="text-2xl font-semibold text-[#ff4c24] mb-4">
          Why Choose Tomato?
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
          <li>Fresh & hygienic food from trusted restaurants</li>
          <li>Fast and reliable delivery</li>
          <li>Easy ordering with real-time tracking</li>
          <li>Customer-first support, always</li>
        </ul>

        {/* Contact */}
        <h2 className="text-2xl font-semibold text-[#ff4c24] mb-3">
          Get in Touch
        </h2>

        <p className="text-gray-700 mb-2">
          Got questions or feedback? We’d love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-700">
          <span>
            📞 <strong>+91 93226 05251</strong>
          </span>
          <span>
            📧{" "}
            <a
              href="mailto:channusinnur22072002@gmail.com"
              className="text-blue-600 underline"
            >
              channusinnur22072002@gmail.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
export default AppDownload;
