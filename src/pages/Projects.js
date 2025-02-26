export default function Projects() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold">My Projects</h2>
      <p className="mt-4 text-gray-400">Check out some of my interactive projects.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-800 rounded-lg">Placeholder App 1</div>
        <div className="p-4 bg-gray-800 rounded-lg">Placeholder App 2</div>
      </div>
    </div>
  );
}
