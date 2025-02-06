import React ,{useState, createContext} from 'react'
export const SidebarContext= createContext()
const SidebarProvider = () => {
  return (
    <div>SidebarContext</div>
  )
}
 
export default SidebarProvider