import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import EmptyState from './empty-state';
import { Note } from '@/lib/types';
import { Button } from './ui/button';


interface NotesSidebarProps {
    notes: Note[];
}

  
function NotesSidebar({ notes }: NotesSidebarProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Notes</CardTitle>
      </CardHeader>
      <CardContent>
        {notes.length === 0 ? (
          <EmptyState message="No Notes Yet" buttonText="Create your first note" />
        ) : (
          <div>
            {notes.map((note) => (
              <div
                key={note.id}
                className="p-3 rounded-md cursor-pointer hover:bg-accent transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">
                      {note.title.substring(0, 30)}
                      {note.title.length > 30 ? '...' : ''}
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      {note.content.substring(0, 40)}
                      {note.content.length > 40 ? '...' : ''}
                    </p>
                    <p className='text-sm text-muted-foreground'>
                     {note.createdAt}
                     </p>
                  </div>
                  <Button>remove</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default NotesSidebar;
