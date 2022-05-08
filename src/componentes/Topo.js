/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Topo.css';
import { GiAtomicSlashes } from "react-icons/gi";
import { CgHomeAlt, CgProfile, CgBookmark, CgSearch } from "react-icons/cg";

export default function Topo(){
    return(
        <>
        <header className="header">
            <div className="menu-principal"/>
                {/* <div className="logo"/>
                <div/>  */}
                <div className="title-logo"> 
                    <a href=''><GiAtomicSlashes/></a>
                    <a href=''>namelessproject</a>
                     
                </div>

        
        <main className="menu-urls">
            <div className="header2">
                <div className="menu">
                    <ul>
                        <li>
                            <a href=""><CgHomeAlt/></a>
                        </li>
    
                        <li>
                            <a href=""><CgProfile/></a>
                        </li>
    
                        <li>
                            <a href=""><CgBookmark/></a>
                        </li>

                        <li>
                            <a href=""></a>
                        </li>
                    </ul>
                    <form action="/" method="get">
                        <label htmlFor="header-search">
                            <span className="busca">Pesquisar</span>
                        </label>
                        <input
                            type="text"
                            id="header-search"
                            placeholder="Pesquisar"
                            name="s" 
                        />
                        <button type="submit"><CgSearch/></button>
                    </form>
                </div>
            </div>
        </main>
        
        </header>
        </>

        

        
    )
}