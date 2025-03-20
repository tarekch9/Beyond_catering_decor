"use client";  

import Image from "next/image";
import { useState } from "react";
import Modal from "../ui/modal";
import { useForm } from "react-hook-form";

const ModalCopy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1); // Aktueller Schritt

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="overflow-y-scroll flex flex-col items-center justify-center">
      <button 
        onClick={() => setIsModalOpen(true)}
        className="text-sm text-[#f2f1f0]/90 hover:text-white transition-colors"
      >
        Terms & Conditions
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>

<div className="mx-auto bg-black p-20 rounded-lg shadow text-[#f2f1f0]/90 max-w-2xl h-screen overflow-y-auto">
<h1 className="text-3xl mb-6">Terms & Conditions</h1>

<section className="mb-8">
  <h2 className="text-2xl mb-4">1. Acceptance of Terms</h2>
  <p className="mb-4">
    By accessing or using our services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl mb-4">2. Use of Services</h2>
  <p className="mb-4">
    You agree to use our services only for lawful purposes and in accordance with these Terms & Conditions. You must not use our services in any way that could damage, disable, or impair our services.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl mb-4">3. Intellectual Property</h2>
  <p className="mb-4">
    All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, and logos, are the property of our company and are protected by intellectual property laws.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl mb-4">4. User Responsibilities</h2>
  <p className="mb-4">
    You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl mb-4">5. Limitation of Liability</h2>
  <p className="mb-4">
    We shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services, even if we have been advised of the possibility of such damages.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl mb-4">6. Termination</h2>
  <p className="mb-4">
    We reserve the right to terminate or suspend your access to our services at any time, without prior notice or liability, for any reason, including but not limited to a breach of these Terms & Conditions.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl mb-4">7. Governing Law</h2>
  <p className="mb-4">
    These Terms & Conditions shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of [Your Country/State].
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl mb-4">8. Changes to Terms</h2>
  <p className="mb-4">
    We reserve the right to modify or replace these Terms & Conditions at any time. Your continued use of our services after any changes constitutes your acceptance of the new terms.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl mb-4">9. Contact Us</h2>
  <p className="mb-4">
    If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:terms@example.com" className="text-blue-500 hover:underline">terms@example.com</a>.
  </p>
</section></div>
      </Modal>
    </div>
  );
};

export default ModalCopy;

