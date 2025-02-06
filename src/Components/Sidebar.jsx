import React ,{useState, createContext} from 'react'
export const SidebarContext= createContext()
const SidebarProvider = ({children}) => {
  return (
    <SidebarContext.Provider>{children}</SidebarContext.Provider>
  )
}
 
export default SidebarProvider