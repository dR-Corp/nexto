"use client"

import Link from "next/link"
import Image from 'next/image'

export function Sidebar() {
    return (
        <aside className="main-sidebar sidebar-light-success elevation-4">
            
            <Link href="./" className="brand-link bg-white">
                <Image
                    src="/Assets/dist/img/log2.png"
                    alt="Logo"
                    className="brand-image img-circle elevation-1"
                    width="50"
                    height="50"
                />
                <span className="brand-text font-weight-bold">EnviStats</span>
            </Link>

            <div className="sidebar">
                
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        
                        <li className="nav-item menu-open">
                            <Link href="." className="nav-link active">
                                <i className="nav-icon fas fas fa-chart-pie"></i>
                                <p className="font-weight-bold">
                                    Dashboard
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="./categorie" className="nav-link">
                                <i className="nav-icon fas fa-th"></i>
                                <p className="font-weight-bold">
                                    Catégories
                                    <span className="badge badge-success right">0</span>
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="./scategorie" className="nav-link">
                                <i className="nav-icon fas fa-code-branch"></i>
                                <p className="font-weight-bold">
                                    Sous catégories
                                    <span className="badge badge-success right">0</span>
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="./indicateur" className="nav-link">
                                <i className="nav-icon fas fa-chart-line"></i>
                                <p className="font-weight-bold">
                                    Indicateurs
                                    <span className="badge badge-success right">0</span>
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="./collecte" className="nav-link">
                                <i className="nav-icon fas fa-database"></i>
                                <p className="font-weight-bold">
                                    Collectes
                                    <span className="badge badge-success right">0</span>
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                
            </div>
            
        </aside>
    )
}