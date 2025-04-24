import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import EmptyState from './empty-state';
  
function NotesSidebar() {
    const notes = [];
  return (
    <Card>
    <CardHeader>
      <CardTitle>My Notes</CardTitle>
    </CardHeader>
    <CardContent>
    {notes.length === 0 ? (
        <EmptyState/>
    ):(
        <h1>list of the notes</h1>
    )}
    </CardContent>
  </Card>
  
  )
}

export default NotesSidebar