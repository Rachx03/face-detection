export default function InfoPanel({ info }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xs flex flex-col justify-between">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 border-gray-200">
        Information
      </h2>

      {info ? (
        <pre className="whitespace-pre-wrap text-gray-700 text-sm leading-relaxed">
          {info}
        </pre>
      ) : (
        <p className="text-gray-400 italic text-sm">
          Waiting for detection...
        </p>
      )}
    </div>
  );
}
