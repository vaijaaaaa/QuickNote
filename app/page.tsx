"use client";


import Header from "@/components/header";
import NotesSidebar from "@/components/notes-sidebar";
import { Note } from "@/lib/types";
import { useState } from "react";


export default function Home() {

  const[notes, setNotes] = useState<Note[]>([]);
  console.log(notes);
  

  const createNewNote = () => {
    const newNote:Note = {
      id:Date.now().toString(),
      title:"New Note",
      content:"",
      createdAt:Date.now(),
    };
    setNotes([newNote, ...notes]);
    
  };





  return (
    <div className="flex flex-col min-h-screen">
      <Header onNewNote={createNewNote}/>
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" md:col-span-1">
          <NotesSidebar notes={notes}/>
        </div>
        <div className="bg-red-500 md:col-span-2">right</div>

      </main>
    </div>
  );
}
