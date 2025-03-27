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
            <h2 className="text-2xl mb-4">2. Refunds</h2>
            <p className="mb-4">
              We offer refunds under specific conditions. If you are not
              satisfied with your purchase, you may request a refund within [X]
              days of receiving the product or service.
            </p>
            <p className="mb-4">
              Refunds will only be processed if the product is returned in its
              original condition, unused, and with all packaging intact. We do
              not offer refunds for products that have been used or damaged
              after delivery.
            </p>
            <p className="mb-4">
              To request a refund, please contact us at&nbsp;
              <a
                href="mailto:Beyondcateringdecor.co.uk"
                className="text-blue-500 hover:underline"
              >
                Beyondcateringdecor.co.uk
              </a>{" "}
              with your order details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">3. Cancellations</h2>
            <p className="mb-4">
              If you wish to cancel your order, you may do so within [X] hours
              of placing the order. To cancel your order, please contact us as
              soon as possible at{" "}
              <a
                href="mailto:[Beyondcateringdecor.co.uk]"
                className="text-blue-500 hover:underline"
              >
                Beyondcateringdecor.co.uk
              </a>
              .
            </p>
            <p className="mb-4">
              Cancellations will only be accepted before the order has been
              processed or shipped. Once the order has been shipped or
              delivered, cancellation is no longer possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">4. Non-Refundable Items</h2>
            <p className="mb-4">
              Certain products or services may not be eligible for refunds or
              cancellations, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Digital products or downloadable content</li>
              <li>Customized or personalized items</li>
              <li>Gift cards or vouchers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">5. Processing Time</h2>
            <p className="mb-4">
              Refunds and cancellations will be processed within [X] business
              days after we have received the return or cancellation request.
              The processing time may vary depending on the payment method and
              the complexity of the request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or need assistance regarding our Refund
              and Cancellation Policy, please contact us at{" "}
              <a
                href="mailto:[Beyondcateringdecor.co.uk]"
                className="text-blue-500 hover:underline"
              >
                Beyondcateringdecor.co.uk
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
