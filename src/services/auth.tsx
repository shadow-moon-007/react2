import { createContext, useContext, type ReactNode } from 'react'
export interface User { name:string; department:string; title:string; initials:string }
const mockUser:User={name:'Alex Morgan',department:'GBS',title:'Department Admin',initials:'AM'}
const AuthContext=createContext<{user:User;isAuthenticated:boolean}>({user:mockUser,isAuthenticated:true})
export function AuthProvider({children}:{children:ReactNode}){return <AuthContext.Provider value={{user:mockUser,isAuthenticated:true}}>{children}</AuthContext.Provider>}
export const useAuth=()=>useContext(AuthContext)
