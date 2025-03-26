"use client";

import { useState } from "react";
import Modal from "../ui/modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(1, prev - 1));

  return (
    <div className="overflow-y-scroll flex flex-col items-center justify-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-sm font-light bg-[#0a0700] border border-[#cdab6e] text-[#edebeb] px-6 py-3 rounded-md hover:bg-[#cdab6e] transition-colors duration-300"
      >
        Contact Us
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="mx-auto bg-black p-16 rounded-lg shadow text-[#f2f1f0]/90 max-w-2xl overflow-y-auto">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white text-xl hover:text-gray-400"
          >
            ✕
          </button>
          <h1 className="text-4xl flex justify-center font-serif text-[#cdab6e] pb-4">
            Contact Us
          </h1>
          <p className="font-sans font-extralight text-center">
            Want to get in touch with us and book us for one of your events?
            Just write us an E-Mail with the
            <strong> "Number of Guests"</strong>, <strong> "Location"</strong>,
            <strong> "Event-Date"</strong>,<strong> "Budget"</strong> and you{" "}
            <strong> "Food Selection"</strong> and if you want as service type a
            <strong> "Full Service"</strong> or a{" "}
            <strong> "Buffet Service"</strong>. Feel also free to send us Photos
            of the venue, so that we can better prepare your personal, unique
            Event :)
          </p>
          <section className="mb-8">
            <div className="flex flex-wrap gap-3 py-4 place-content-center">
              <a
                href="mailto:Beyondcateringdecor.co.uk"
                className="text-sm font-light bg-black border border-[#cdab6e] text-white px-6 py-3 rounded-md hover:bg-[#cdab6e] hover:text-black transition-colors duration-300"
              >
                E-Mail
              </a>
              <a
                href="tel:+447903618868"
                className="text-sm font-light bg-[#94794a] border border-[#cdab6e] text-white px-6 py-3 rounded-md hover:bg-[#cdab6e] hover:text-black transition-colors duration-300"
              >
                Telephone
              </a>
            </div>
            <p className="font-sans font-extralight text-center">
              Note: If your event is outside the London area, we do offer travel
              services, starting at a £5k minimum, available upon request.
            </p>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
