import Header from "@/components/header";
import Footer from "@/components/footer";
import Main from "@/components/main";
import React from "react";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#191a23]">
      {/* Header */}
      <Header />

      {/* Main-Section */}
      <Main />

      {/* Footer would go here */}
      <Footer />
    </main>
  );
}
