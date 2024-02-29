import React from 'react'

export const UniversalContext = React.createContext()

const UniversalContextProvider = (props) => {
  return (
    <UniversalContext.Provider value={{"isDarkTheme":false}}>
      {props.children}
    </UniversalContext.Provider>
  )
}


export default UniversalContextProvider
