import Form from "@/components/ui/form";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          🎯 Content Idea Assistant
        </h1>
        <Form />
      </div>
    </main>
  );
}
