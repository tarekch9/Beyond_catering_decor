"use client";  

import Image from "next/image";
import { useState } from "react";
import Modal from "../ui/modal";
import { useForm } from "react-hook-form";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1); // Aktueller Schritt

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Hier die E-Mail-Adresse angeben, an die das Formular gesendet werden soll
      const recipientEmail = "tachaani@protonmail.com";
  
      // Formulardaten vorbereiten
      const emailData = {
        to: recipientEmail,
        subject: "Neue Formularübermittlung",
        text: `Formulardaten:\n${JSON.stringify(data, null, 2)}`,
      };
  
      const onSubmit = async (data) => {
        try {
          // Hier die E-Mail-Adresse angeben, an die das Formular gesendet werden soll
          const recipientEmail = "tachaani@protonmail.com";
      
          // Formulardaten vorbereiten
          const emailData = {
            to: recipientEmail,
            subject: "Neue Formularübermittlung",
            text: `Formulardaten:\n${JSON.stringify(data, null, 2)}`,
          };
      
          // Daten an den Server senden (z. B. per Fetch API)
          const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(emailData),
          });
      
          if (response.ok) {
            alert("Formular erfolgreich gesendet!");
          } else {
            alert("Fehler beim Senden des Formulars.");
          }
        } catch (error) {
          console.error("Fehler:", error);
          alert("Ein Fehler ist aufgetreten.");
        }
      };

      // Daten an den Server senden (z. B. per Fetch API)
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });
  
      if (response.ok) {
        alert("Formular erfolgreich gesendet!");
      } else {
        alert("Fehler beim Senden des Formulars.");
      }
    } catch (error) {
      console.error("Fehler:", error);
      alert("Ein Fehler ist aufgetreten.");
    }
  };


  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="overflow-y-scroll flex flex-col items-center justify-center">
      <button 
        onClick={() => setIsModalOpen(true)}
        className="text-sm font-light bg-[#0a0700] border border-[#cdab6e] text-[#edebeb] px-6 py-3 rounded-md hover:bg-[#cdab6e] transition-colors duration-300"
      >
        Contact Us
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto bg-black p-20 rounded-lg shadow text-[#f2f1f0]/90">
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
                <button type="button" onClick={nextStep} className="bg-black border border-[#cdab6e] rounded-l hover:bg-[#94794a] text-white p-2 rounded mt-4">
                Further
              </button>
              </div>
            </div>
          )}
          {step === 3 && (
           <div className="text-[#f2f1f0]/90">
           <h2 className="text-xl font-serif mb-4 text-[#cdab6e]">Step 3: Catering Information</h2>
           
           {/* Service type */}
           Service type:
           <label className="block mb-2 bg-white text-black border rounded">
             <select id="options" name="options">
               <option value="Breakfast-Buffet">Full service</option>
               <option value="Breakfast Basket">buffet service</option>
             </select>
           </label>
         
           {/* Food selection */}
           Food selection:
           <label className="block mb-2 bg-white text-black border rounded">
             <select id="options" name="options">
               <option value="Breakfast-Buffet">Breakfast Buffet</option>
               <option value="Breakfast Basket">Breakfast Basket</option>
               <option value="Canapés">Canapés</option>
               <option value="Candy bars">Candy bars</option>
               <option value="Charcuterie boards">Charcuterie boards</option>
               <option value="Fine Dining">Fine Dining</option>
               <option value="Fruit Platter">Fruit Platter</option>
               <option value="Salads">Salads</option>
             </select>
           </label>
         
           {/* Bild-Upload */}
           <label className="block mb-2 mt-4 bg-white text-black border rounded">
             Upload Image:
             <input 
               type="file" 
               accept="image/*" 
               onChange={(e) => {
                 const file = e.target.files[0];
                 if (file) {
                   // Hier kannst du die Datei verarbeiten, z.B. in den State setzen oder direkt hochladen
                   console.log("Selected file:", file);
                 }
               }} 
               className="w-full p-2 border rounded" 
             />
           </label>
         
           {/* Note */}
           Note: If your event is outside the London area,<br></br> we do offer travel services, starting at a £5k<br></br> minimum, available upon request
         
           {/* Buttons */}
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

