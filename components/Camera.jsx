"use client";
import { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

export default function Camera({ setInfo }) {
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    // Pide permiso para usar la cámara
    navigator.mediaDevices
      .getUserMedia({ video: {} })
      .then((stream) => (videoRef.current.srcObject = stream));

    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };

    loadModels();
  }, []);

  const handlePlay = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withAgeAndGender()
        .withFaceExpressions();

      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar rectángulos y IDs
      resizedDetections.forEach((d, i) => {
        const { x, y, width, height } = d.detection.box;
        ctx.strokeStyle = "rgba(79, 70, 229, 0.8)";
        ctx.lineWidth = 2;
        ctx.shadowColor = "rgba(0,0,0,0.2)";
        ctx.shadowBlur = 4;
        ctx.strokeRect(x, y, width, height);

        // Escribir ID encima del rectángulo
        ctx.font = "16px Arial";
        ctx.fillStyle = "rgba(79, 70, 229, 1)";
        ctx.fillText(`P${i + 1}`, x + 5, y - 5);
      });

   
      const text = detections
        .map(
          (d, i) =>
            `P${i + 1}: Age: ${Math.round(d.age)}, Gender: ${
              d.gender
            }, Expression: ${
              Object.entries(d.expressions).sort((a, b) => b[1] - a[1])[0][0]
            }`
        )
        .join("\n");

      setInfo(text);
    }, 500);
  };

  return (
    <div className="relative rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-[720px] w-full">
      <video
        ref={videoRef}
        width={720}
        height={560}
        autoPlay
        muted
        onPlay={handlePlay}
        className="w-full h-auto object-cover"
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
