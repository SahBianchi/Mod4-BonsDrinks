import React from 'react'
import styles from './Header.module.css'
import {BrowserRouter as Router, Link, NavLink} from "react-router-dom"

export default function Header(){
    return (
        <div className={styles.containerHeader}>
                <nav className={styles.navHeader}>
                    <NavLink to="/drinks" activeStyle={{color: 'var(--creme)'}} className={styles.linkHeader}>
                        <li>Drinks</li>
                    </NavLink>

                    <NavLink to="/sobreNos" activeStyle={{color: 'var(--creme)'}} className={styles.linkHeader}>
                        <li>Sobre Nós</li>
                    </NavLink>

                    <NavLink to="/" activeStyle={{color: 'var(--creme)'}} className={styles.linkHeader}>
                        <li>Bons Drinks</li>
                    </NavLink>

                    <NavLink to="/nossoTime" activeStyle={{color: 'var(--creme)'}} className={styles.linkHeader}>
                        <li>Nosso Time</li>
                    </NavLink>

                    <NavLink to="/contato" activeStyle={{color: 'var(--creme)'}} className={styles.linkHeader}>
                        <li>Contato</li>
                    </NavLink>

                </nav>
        </div>
    )
}
