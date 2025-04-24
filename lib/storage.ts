import { Note } from "./types"

const STORAGE_KEY = 'quicknote'

export function loadNotes():Note[]{
    if(typeof window === 'undefined') return []
    const savedNotes = localStorage.getItem(STORAGE_KEY)
    if(savedNotes) { 
    try{
        return JSON.parse(savedNotes) 
    }catch(e){
        console.error("Failed to parse notes from localStorage", e)
        return []
    }
}return[ ]
}




export function saveNotes(notes:Note[]):void{
    if(typeof window === 'undefined') return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
}



export function formatDate(timestamp:number):string{
    return new Date(timestamp).toLocaleDateString('en-US', {
        year:"numeric",
        month:"short",
        day:"numeric"
    })
}