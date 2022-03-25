import { createContext, ReactNode, useContext, useState } from 'react'

interface UseIsActiveContextProps {
  currentItem: string
  setCurrentItem: ({}: string) => void
}

interface UseIsActiveProviderProps {
  children: ReactNode
}

const UseIsActiveContext = createContext({} as UseIsActiveContextProps)

export function UseIsActiveProvider({ children }: UseIsActiveProviderProps) {
  const [currentItem, setCurrentItem] = useState('')

  return (
    <UseIsActiveContext.Provider value={{ currentItem, setCurrentItem }}>
      {children}
    </UseIsActiveContext.Provider>
  )
}

export const useIsActive = () => useContext(UseIsActiveContext)
