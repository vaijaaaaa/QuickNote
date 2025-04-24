import NotesSidebar from "@/components/notes-sidebar";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" md:col-span-1">
          <NotesSidebar/>
        </div>
        <div className="bg-red-500 md:col-span-2">right</div>

      </main>
    </div>
  );
}
