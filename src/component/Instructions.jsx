function Instructions({ instructions }) {
  return (
    <section className="max-w-6xl mx-auto bg-white rounded-xl shadow my-6">
      <h3 className="text-xl font-bold bg-orange-500 p-4 text-white mb-4">
        Cooking Instructions
      </h3>
      <ul className="space-y-4 mx-6 text-gray-700">
        {instructions.map((text, i) => (
          <li key={i} className="flex items-center gap-2">
            <div className="rounded-full w-8 h-8 bg-orange-500 flex items-center justify-center">
              <p className="font-bold p-4 flex items-center justify-center text-white">{i + 1}</p>
            </div>
            <div>{text}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Instructions;
