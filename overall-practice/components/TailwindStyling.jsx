function TailwindStyling() {
  return (
    <div className="bg-green-100 p-4 rounded-lg border border-green-400 m-3">
      <h2 className="text-green-800 text-xl font-bold">
        Styled with Tailwind
      </h2>

      <p className="mt-2 text-gray-700">
        Tailwind uses utility classes.
      </p>

      <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded">
        Click Me
      </button>
    </div>
  );
}

export default TailwindStyling;