"use client";

import { useState } from "react";
import Modal from "../ui/modal";
import { useForm } from "react-hook-form";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleClose = () => {
    reset();
    setFile(null);
    setStep(1);
    setIsModalOpen(false);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify(data));

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Fehler beim Senden des Formulars.");

      alert("Formular erfolgreich gesendet!");
      handleClose();
    } catch (error) {
      console.error("Fehler:", error);
      alert(error.message);
    }
  };

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto bg-black p-20 rounded-lg shadow text-[#f2f1f0]/90"
        >
          {step === 1 && (
            <div>
              <h2 className="text-xl mb-4 font-serif text-[#cdab6e]">
                Step 1: Contact Information
              </h2>

              <div className="mb-4">
                <label className="block mb-1 text-white">Name:</label>
                <div className="bg-white text-black border rounded">
                  <input
                    type="text"
                    {...register("name", { required: "Name ist erforderlich" })}
                    className="w-full p-2 border-none"
                  />
                </div>
                {errors.name?.message && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-white">E-Mail:</label>
                <div className="bg-white text-black border rounded">
                  <input
                    type="email"
                    {...register("email", {
                      required: "E-Mail ist erforderlich",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Ungültige E-Mail-Adresse",
                      },
                    })}
                    className="w-full p-2 border-none"
                  />
                </div>
                {errors.email?.message && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-white">Tel.:</label>
                <div className="bg-white text-black border rounded">
                  <input
                    type="text"
                    {...register("telnumber", {
                      required: "Telefonnummer ist erforderlich",
                      pattern: {
                        value: /^[0-9+-]+$/,
                        message: "Nur Zahlen und + erlaubt",
                      },
                    })}
                    className="w-full p-2 border-none"
                  />
                </div>
                {errors.telnumber?.message && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.telnumber.message}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="bg-black border border-[#cdab6e] hover:bg-[#94794a] text-white p-2 rounded mt-4"
              >
                Weiter
              </button>
            </div>
          )}
          {step === 2 && (
            <div className="text-[#f2f1f0]/90">
              <h2 className="text-xl font-serif mb-4 text-[#cdab6e]">
                Step 2: Catering Information
              </h2>
              Location:
              <label className="block mb-2 bg-white text-black border rounded">
                <input
                  type="text"
                  {...register("location", {
                    required: "Location is required",
                  })}
                  className="w-full p-2 border rounded"
                />
                {errors.location?.message && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.location.message}
                  </p>
                )}
              </label>
              Event-date:
              <label className="block mb-2 bg-white text-black border rounded">
                <input
                  type="date"
                  {...register("date", { required: "Date is required" })}
                  className="w-full p-2 border rounded"
                />
                 {errors.date?.message && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.date.message}
                  </p>
                )}
              </label>
              Budget (approximately):
              <label className="block mb-2 bg-white text-black border rounded">
                <input
                  type="text"
                  {...register("budget", {
                    required: "Please give us your budget",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers allowed",
                    },
                  })}
                  className="w-full p-2 border rounded"
                />
                 {errors.budget?.message && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.budget.message}
                  </p>
                )}
              </label>
              Preferences (Menu, etc.):
              <label className="block mb-2 bg-white text-black rounded">
                <textarea
                  {...register("preferences", {
                    required: "Please tell us about your preferences",
                  })}
                  className="w-full p-2 rounded"
                  rows="3"
                />
                 {errors.preferences?.message && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.preferences.message}
                  </p>
                )}
              </label>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-black border border-[#cdab6e] rounded-l hover:bg-[#94794a] text-white p-2 rounded mt-4"
                >
                  Zurück
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-black border border-[#cdab6e] rounded-l hover:bg-[#94794a] text-white p-2 rounded mt-4"
                >
                  Weiter
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-[#f2f1f0]/90">
              <h2 className="text-xl font-serif mb-4 text-[#cdab6e]">
                Step 3: Catering Information
              </h2>
              {/* Service type */}
              Service type:
              <label className="block mb-2 bg-white text-black border rounded">
                <select
                  {...register("serviceType", {
                    required: "Service type is required",
                  })}
                >
                  <option value="Full service">Full service</option>
                  <option value="Buffet service">Buffet service</option>
                </select>
                {errors.serviceType?.message && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.serviceType.message}
                  </p>
                )}
              </label>
              {/* Food selection */}
              Food selection:
              <label className="block mb-2 bg-white text-black border rounded">
                <select
                  {...register("foodSelection", {
                    required: "Food selection is required",
                  })}
                >
                  <option value="Breakfast Buffet">Breakfast Buffet</option>
                  <option value="Breakfast Basket">Breakfast Basket</option>
                  <option value="Canapés">Canapés</option>
                  <option value="Candy bars">Candy bars</option>
                  <option value="Charcuterie boards">Charcuterie boards</option>
                  <option value="Fine Dining">Fine Dining</option>
                  <option value="Fruit Platter">Fruit Platter</option>
                  <option value="Salads">Salads</option>
                </select>
                {errors.foodSelection && (
                  <p className="text-red-500">{errors.foodSelection.message}</p>
                )}
              </label>
              {/* Bild-Upload */}
              <label className="block mb-2 mt-4 bg-white text-black border rounded">
                Upload Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="w-full p-2 border rounded"
                />
              </label>
              {/* Note */}
              Note: If your event is outside the London area,<br></br> we do
              offer travel services, starting at a £5k<br></br> minimum,
              available upon request
              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-black border border-[#cdab6e] rounded-l hover:bg-[#94794a] text-white p-2 rounded mt-4"
                >
                  Zurück
                </button>
                <button
                  type="submit"
                  className="bg-black border border-[#cdab6e] rounded-l hover:bg-[#94794a] text-white p-2 rounded mt-4"
                >
                  Absenden
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
