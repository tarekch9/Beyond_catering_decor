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
    <div>
      <button onClick={() => setIsModalOpen(true)}>Contact Us</button>
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
            Would you like to get in touch and book us for your event? Just send
            us an email with the number of <b>guests</b>, <b>location</b>,{" "}
            <b>event date</b>, <b>budget</b>, your <b>food selection</b>, and
            whether you prefer a <b>full service</b> or <b>buffet service</b>.
            Feel free to also send us photos of the venue so we can prepare your
            unique and personalized event even better.
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
