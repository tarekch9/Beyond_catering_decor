"use client";

import { useState } from "react";
import Modal from "../ui/modal";

const ModalCopy5 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="overflow-y-scroll flex flex-col items-center justify-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-sm text-[#f2f1f0]/90 hover:text-white transition-colors"
      >
        Food Hygiene & Safety Compliance
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="mx-auto bg-black p-20 rounded-lg shadow text-[#f2f1f0]/90 max-w-2xl h-screen overflow-y-auto">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white text-xl hover:text-gray-400"
          >
            ✕
          </button>
          <section id="mb-8">
            <h1 className="text-3xl mb-6">Food Hygiene & Safety Compliance</h1>

            <p className="mb-4">
              At Beyond Catering & Decor, we take food hygiene and safety
              seriously. Our commitment to maintaining the highest standards
              ensures that every dish we prepare is not only delicious but also
              safe for consumption.
            </p>

            <h2 className="text-2xl mb-4">Our Commitment to Safety</h2>
            <p className="mb-4">
              <ul>
                <li>
                  Strict Hygiene Standards – We adhere to all Food Standards
                  Agency (FSA) regulations and industry best practices to ensure
                  cleanliness at every stage of food preparation.
                </li>
                <li>
                  Certified Staff – Our team is fully trained and certified in
                  food hygiene and safety, regularly updating their knowledge to
                  meet the latest requirements.
                </li>
                <li>
                  Temperature Control & Storage – We follow strict guidelines
                  for storing, preparing, and transporting food at optimal
                  temperatures to prevent contamination.
                </li>
                <li>
                  Allergen Awareness – We provide clear allergen information and
                  take extra precautions to prevent cross-contamination.
                </li>
              </ul>
            </p>
            <h2 className="text-2xl bold mb-4">Fully Compliant & Licensed</h2>
            <p className="mb-4">
              We are proud to hold all necessary health and safety
              certifications, regularly undergoing inspections to maintain our
              high standards. Whether catering for a small gathering or a large
              event, you can trust us to serve food that is prepared with care,
              safety, and compliance in mind.
            </p>

            <h2 className="text-2xl bold mb-4">Your Safety, Our Priority</h2>
            <p className="mb-4">
              We are committed to delivering fresh, high-quality, and safe food
              to every customer. If you have any specific dietary requirements
              or concerns, feel free to reach out – your well-being is our top
              priority!
            </p>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCopy5;
