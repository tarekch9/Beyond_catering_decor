import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Last updated: March 19, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to our Privacy Policy. Your privacy is critically important to us. This policy
          explains what information we collect, how we use it, and your rights regarding your data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc pl-6">
          <li>Personal Information (e.g., name, email address)</li>
          <li>Usage Data (e.g., pages visited, time spent on site)</li>
          <li>Cookies and Tracking Technologies</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6">
          <li>To provide and maintain our services</li>
          <li>To improve our website and user experience</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information. If you wish
          to exercise these rights, please contact us at support@example.com.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <br /> Email: support@example.com
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
