"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../ui/modal";
import { useForm } from "react-hook-form";

const ModalCopy3 = () => {
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
        Imprint
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="mx-auto bg-black p-20 rounded-lg shadow text-[#f2f1f0]/90 max-w-2xl h-screen overflow-y-auto">
          <h1 className="text-3xl mb-6">Imprint</h1>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">1. Business Information</h2>
            <p className="mb-4">
              <strong>Business Name:</strong> [Your Business Name]
            </p>
            <p className="mb-4">
              <strong>Legal Form:</strong> [e.g., LLC, Corporation]
            </p>
            <p className="mb-4">
              <strong>Registered Address:</strong> [Street Address], [City,
              Postal Code], [Country]
            </p>
            <p className="mb-4">
              <strong>Phone Number:</strong> [Your Phone Number]
            </p>
            <p className="mb-4">
              <strong>Email Address:</strong> <a>Beyondcateringdecor.co.uk</a>
            </p>
            <p className="mb-4">
              <strong>Website:</strong>{" "}
              <a
                href="[Your Website URL]"
                className="text-blue-500 hover:underline"
              >
                [Your Website URL]
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">2. Additional Information</h2>
            <p className="mb-4">
              <strong>VAT Identification Number:</strong> [VAT ID, if
              applicable]
            </p>
            <p className="mb-4">
              <strong>Commercial Register Number:</strong> [If applicable]
            </p>
            <p className="mb-4">
              <strong>Tax ID Number:</strong> [Your Tax ID Number, if
              applicable]
            </p>
            <p className="mb-4">
              <strong>Managing Director / CEO / Owner:</strong> [Full Name]
            </p>
            <p className="mb-4">
              <strong>Company Register Court:</strong> [If applicable]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              The information contained on this website is for general
              information purposes only. While we strive to ensure that the
              information is accurate and up to date, we make no representations
              or warranties of any kind regarding the completeness, accuracy,
              reliability, or availability with respect to the website or the
              information, products, services, or related graphics contained on
              the website for any purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">4. Liability for Content</h2>
            <p className="mb-4">
              As a service provider, we are responsible for our own content on
              these pages according to general laws. However, we are not
              obligated to monitor third-party information provided or stored on
              our website or to investigate circumstances that indicate illegal
              activity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">5. Liability for Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. We have no
              influence on the content of these websites and are not responsible
              for the information provided there. The respective provider or
              operator of the linked website is always responsible for its
              content.
            </p>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCopy3;
