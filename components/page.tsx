"use client";  

import Image from "next/image";
import { useState } from "react";
import Modal from "./ui/modal";
import { useForm } from "react-hook-form";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1); // Aktueller Schritt

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Formulardaten:", data);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="overflow-y-scroll flex flex-col items-center justify-center">
      <button 
        onClick={() => setIsModalOpen(true)}
        className="text-sm font-light px-4 py-2 bg-black border border-[#cdab6e] hover:bg-[#94794a] transition-colors duration-300 text-white rounded-md"
      >
        Contact Us
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto bg-black p-6 rounded-lg shadow text-[#f2f1f0]/90">
          {step === 1 && (
            <div>
              <h2 className="text-xl mb-4 font-serif text-[#cdab6e]">Step 1: Contact Information</h2>
              Name:
              <label className="block mb-2 bg-white text-black border rounded">
                <input 
                  type="text" 
                  {...register("name", { required: "Name ist erforderlich" })} 
                  className="w-full p-2" 
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </label>
              E-Mail:
              <label className="block mb-2 bg-white text-black border rounded">
                <input 
                  type="email" 
                  {...register("email", { 
                    required: "E-Mail ist erforderlich", 
                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Ungültige E-Mail-Adresse" } 
                  })} 
                  className="w-full p-2 border rounded" 
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </label>
              Tel.:
              <label className="block mb-2 bg-white text-black border rounded">
                <input 
                  type="text" 
                  {...register("telnumber", { 
                    required: "Telefonnummer ist erforderlich", 
                    pattern: { value: /^[0-9+-]+$/, message: "Nur Zahlen und + erlaubt" } 
                  })} 
                  className="w-full p-2 border rounded" 
                />
                {errors.telnumber && <p className="text-red-500">{errors.telnumber.message}</p>}
              </label>

              <button type="button" onClick={nextStep} className="bg-black border border-[#cdab6e] rounded-l hover:bg-[#94794a] text-white p-2 rounded mt-4">
                Further
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="text-[#f2f1f0]/90">
              <h2 className="text-xl font-serif mb-4 text-[#cdab6e]">Step 2: Catering Information</h2>
              Location:
              <label className="block mb-2 bg-white text-black border rounded">
                <input 
                  type="text" 
                  {...register("location", { required: "Location is required" })} 
                  className="w-full p-2 border rounded" 
                />
                {errors.location && <p className="text-red-500">{errors.location.message}</p>}
              </label>
              Event-date:
              <label className="block mb-2 bg-white text-black border rounded">
                <input 
                  type="date" 
                  {...register("date", { required: "Date is required" })} 
                  className="w-full p-2 border rounded" 
                />
                {errors.date && <p className="text-red-500">{errors.date.message}</p>}
              </label>
              Budget (approximately):
              <label className="block mb-2 bg-white text-black border rounded">
                <input 
                  type="text" 
                  {...register("budget", { 
                    required: "Please give us your budget", 
                    pattern: { value: /^[0-9]+$/, message: "Only numbers allowed" } 
                  })} 
                  className="w-full p-2 border rounded" 
                />
                {errors.budget && <p className="text-red-500">{errors.budget.message}</p>}
              </label>
              Preferences (Menu, etc.):
              <label className="block mb-2 bg-white text-black rounded">
                <textarea 
                  {...register("preferences", { required: "Please tell us about your preferences" })} 
                  className="w-full p-2 rounded" 
                  rows="3" 
                />
                {errors.preferences && <p className="text-red-500">{errors.preferences.message}</p>}
              </label>

              <div className="flex justify-between mt-4">
                <button type="button" onClick={prevStep} className="bg-black border border-[#cdab6e] rounded-l hover:bg-[#94794a] text-white p-2 rounded mt-4">
                  Back
                </button>
                <button type="submit" className="bg-black border border-[#cdab6e] rounded-l hover:bg-[#94794a] text-white p-2 rounded mt-4">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default Home;

