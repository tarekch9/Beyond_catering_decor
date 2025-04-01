"use client";

import { useState } from "react";
import Modal from "../ui/modal";

const ModalCopy4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="overflow-y-scroll flex flex-col items-center justify-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-sm text-[#f2f1f0]/90 hover:text-white transition-colors"
      >
        Refund & Cancellation Policy
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="mx-auto bg-black p-20 rounded-lg shadow text-[#f2f1f0]/90 max-w-2xl h-screen overflow-y-auto">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white text-xl hover:text-gray-400"
          >
            ✕
          </button>
          <h1 className="text-3xl mb-6">Refund & Cancellation Policy</h1>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">1. Introduction</h2>
            <p className="mb-4">
              Our Refund and Cancellation Policy ensures that you understand the
              terms under which refunds and cancellations are processed. By
              purchasing our products or services, you agree to the following
              terms.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl mb-4">3. Cancellations</h2>
            <p className="mb-4">
              Deposit Requirement Customers must provide a 50% deposit at the
              time of purchase to confirm their order. Date Change Policy
              Customers have the right to reschedule their order once at no
              additional cost. The rescheduling request must be made within 72
              hours after purchase. Any further changes may be subject to
              availability and additional fees.
            </p>
            <p className="mb-4">
              Cancellations will only be accepted before the order has been
              processed or shipped. Once the order has been shipped or
              delivered, cancellation is no longer possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or need assistance regarding our Refund
              and Cancellation Policy, please contact us at
              <a
                href="mailto:[info@beyondcateringdecor.co.uk]"
                className="text-blue-500 hover:underline"
              >
                &nbsp;info@beyondcateringdecor.co.uk
              </a>
              .
            </p>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCopy4;
