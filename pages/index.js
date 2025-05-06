
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">nullbus</h1>
      <ul className="space-x-4">
        <li className="inline-block">
          <a href="https://github.com/nullbus" className="text-blue-600 hover:underline">GitHub</a>
        </li>
        <li className="inline-block">
          <a href="https://blog.nullbus.net" className="text-blue-600 hover:underline">Blog</a>
        </li>
      </ul>
    </main>
  );
}
