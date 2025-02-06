import React ,{useState, createContext} from 'react'
export const SidebarContext= createContext()
const [Isopen,setIsopen]=useState(false)
const SidebarProvider = ({children}) => {
  return (
    <SidebarContext.Provider>{children}</SidebarContext.Provider>
  )
}
 
export default SidebarProvider