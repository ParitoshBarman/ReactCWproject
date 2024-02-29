import React from 'react'
import headerLinks from "../../headerLinks.json"

function LinkText(props){
    return(<div>
    <a href={props.link}>{props.text}</a>
    <hr />
    </div>)
}

const NavSecndRow = () => {
    const [anchList, setanchList] = React.useState(headerLinks)

  return (
    <div className='NavSecndRow'>
      {anchList.map((itm)=>{
        return <LinkText link={itm.link} text={itm.text}/>
      })}
    </div>
  )
}

export default NavSecndRow
