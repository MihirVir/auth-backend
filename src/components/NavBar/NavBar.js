import React from 'react'
import "./navbar.css"
const NavBar = () => {
  return (
    <>
        <header className = "bg-slate-900">
            <nav className = "">
                <h2 className = "ml-10 mt-1 text-white font-black text-xl">
                    Cyber Application
                </h2>
                <input type="text" name = "search" className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline search-inp' placeholder='type here to search a topic'/>
                <ul className='flex justify-around w-12/12 custom-ul'>
                    <li className=''>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                        Github
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default NavBar