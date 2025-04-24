import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import EmptyState from './empty-state';
import { Note } from '@/lib/types';


interface NotesSidebarProps {
    notes: Note[];
}

  
function NotesSidebar({notes}: NotesSidebarProps) {
  
  return (
    <Card>
    <CardHeader>
      <CardTitle>My Notes</CardTitle>
    </CardHeader>
    <CardContent>
    {notes.length === 0 ? (
        <EmptyState message='No Notes Yet ' buttonText='Create your first note'/>
    ):(
        <h1>list of the notes</h1>
    )}
    </CardContent>
  </Card>
  
  )
}

export default NotesSidebar