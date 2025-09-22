"use client";
import Camera from "@/components/Camera";
import InfoPanel from "@/components/InfoPanel";
import { useState } from "react";

export default function Home() {
  const [info, setInfo] = useState("");
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-center p-6 gap-8">
      {/* Contenedor del panel de información */}
      <div className="w-full md:w-1/3 flex justify-center">
        <InfoPanel info={info} />
      </div>

      {/* Contenedor de la cámara */}
      <div className="w-full md:w-2/3 flex justify-center">
        <Camera setInfo={setInfo} />
      </div>
    </div>
  );
}
