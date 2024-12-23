"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import {MobileCategories} from "@/app/component/Header/MobileMenu/MobileCategories";

const MainMenu = () => {
    const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
    const megaMenuRef = useRef(null); // Referans Mega Menü için

    // Mega Menü dışına tıklamayı algılar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
                setMegaMenuOpen(false); // Menü kapatılır
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const categories = [
        { title: "Asayiş", link: "/" },
        { title: "Dünya", link: "/" },
        { title: "Eğitim", link: "/" },
        { title: "Ekonomi", link: "/" },
        { title: "Gündem", link: "/" },
        { title: "Sağlık", link: "/" },
        { title: "Siyaset", link: "/" },
        { title: "Spor", link: "/" },
        { title: "Teknoloji", link: "/" },
        { title: "Yaşam", link: "/" },
        { title: "Magazin", link: "/" },
        { title: "Kültür-Sanat", link: "/" },
    ];

    return (
        <>
            <div className="main-menu navbar navbar-expand-lg d-none d-lg-block bg-white">
                <div className="container">
                    {/* Ana Menü */}
                    <ul className="nav fw-semibold">
                        {categories && categories.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <Link
                                    href="/"
                                    className="nav-link text-dark"
                                    target="_self"
                                    title={item.title}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mega Menü */}
                    <ul className="navigation-menu nav d-flex align-items-center">
                        <li className="nav-item dropdown" ref={megaMenuRef}>
                            <Link
                                href="#"
                                className={`nav-link pe-0 text-dark ${isMegaMenuOpen ? 'show' : ''}`}
                                onClick={() => setMegaMenuOpen((prev) => !prev)}
                                title="Ana Menü"
                            >
                                <i className="fa fa-bars fa-lg" />
                            </Link>
                            {isMegaMenuOpen && <MegaMenu isOpen={isMegaMenuOpen} />}
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Kategorileri */}
            <MobileCategories categories={categories}/>

        </>
    );
};

export default MainMenu;
