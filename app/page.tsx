"use client";


import Header from "@/components/header";
import NoteView from "@/components/note-view";
import NotesSidebar from "@/components/notes-sidebar";
import { Note } from "@/lib/types";
import { useState } from "react";


export default function Home() {

  const[notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  

  const createNewNote = () => {
    const newNote:Note = {
      id:Date.now().toString(),
      title:"New Note",
      content:"",
      createdAt:Date.now(),
    };
    setNotes([newNote, ...notes]);
    
  };

  const selectNote = (note: Note) => {
    setActiveNote(note);
  };

  const renderNoteContent=() => {
    if(activeNote){
      return<div><NoteView note={activeNote}/></div>
    }
    return null;
  };





  return (
    <div className="flex flex-col min-h-screen">
      <Header onNewNote={createNewNote}/>
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" md:col-span-1">
          <NotesSidebar notes={notes} onSelectNote={selectNote}/>
        </div>
        <div className="md:col-span-2">{renderNoteContent()}</div>

      </main>
    </div>
  );
}
