"use client"
import React from "react";
import Link from "next/link";

const MegaMenu = ({ isOpen }) => {
    const extraSections = [
        { title: "Yozgat Nöbetçi Eczaneler", icon: "fa-capsules" },
        { title: "Yozgat Hava Durumu", icon: "fa-cloud-sun" },
        { title: "Yozgat Namaz Vakitleri", icon: "fa-mosque" },
        { title: "Yozgat Trafik Yoğunluk Haritası", icon: "fa-car" },
        { title: "Puan Durumu", icon: "fa-chart-bar" },
        { title: "Tüm Manşetler", icon: "fa-newspaper" },
        { title: "Son Dakika Haberleri", icon: "fa-bell" },
    ];

    const socialLinks = [
        { name: "Facebook", icon: "fa-facebook", color: "text-navy" },
        { name: "Twitter", icon: "fa-x-twitter" },
        { name: "Instagram", icon: "fa-instagram", color: "text-magenta" },
        { name: "Youtube", icon: "fa-youtube", color: "text-danger" },
        { name: "Tiktok", icon: "fa-tiktok" },
        { name: "Threads", icon: "fa-threads" },
        { name: "WhatsApp İhbar Hattı", icon: "fa-whatsapp", color: "text-navy" },
    ];

    const categories = [
        { title: "Asayiş", link: "/" },
        { title: "Dünya", link: "/" },
        { title: "Eğitim", link: "/" },
        { title: "Ekonomi", link: "/" },
        { title: "Gündem", link: "/" },
        { title: "Haber", link: "/" },
        { title: "Haber Reklam", link: "/" },
        { title: "İş İlanları", link: "/" },
        { title: "Kültür-Sanat", link: "/" },
        { title: "Magazin", link: "/" },
        { title: "Sağlık", link: "/" },
        { title: "Siyaset", link: "/" },
        { title: "Spor", link: "/" },
        { title: "Teknoloji", link: "/" },
        { title: "Yaşam", link: "/" },
    ];

    const footerLinks = [
        { title: "Künye / İletişim", icon: "fa-id-card" },
        { title: "Bize Ulaşın", icon: "fa-envelope" },
        { title: "RSS Bağlantıları", icon: "fa-rss" },
        { title: "Üyelik Girişi", icon: "fa-user" },
    ];

    const groupedCategories = [];
    for (let i = 0; i < categories.length; i += 7) {
        groupedCategories.push(categories.slice(i, i + 7));
    }

    return (
        <div className={`mega-menu dropdown-menu dropdown-menu-end text-capitalize shadow-lg border-0 rounded-0 mt-0 ${isOpen ? 'show' : ''}`} data-bs-popper="static">
            <div className="row g-3 small p-3">
                {/* Extra Sections */}
                <div className="col">
                    <div className="extra-sections bg-light p-3 border">
                        {extraSections && extraSections.map((item) => (
                            <Link
                                key={item.title}
                                href="/"
                                className="d-block border-bottom pb-2 mb-2"
                                target="_self"
                                title={item.title}
                            >
                                <i className={`fa-solid ${item.icon} me-2`} />
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Grouped Categories */}
                {groupedCategories.map((group, index) => (
                    <div className="col" key={index}>
                        {group.map((item) => (
                            <Link
                                key={item.title}
                                href={item.link}
                                className="d-block border-bottom pb-2 mb-2"
                                target="_self"
                                title={item.title}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            {/* Social Links */}
            <div className="p-3 bg-light">
                {socialLinks && socialLinks.map((item) => (
                    <Link
                        key={item.name}
                        className="me-3"
                        href="/"
                        target="_blank"
                        title={item.name}
                    >
                        <i className={`fab ${item.icon} me-2 ${item.color || ""}`} />
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* Footer Links */}
            <div className="mega-menu-footer p-2 bg-te-color">
                {footerLinks && footerLinks.map((item) => (
                    <Link
                        key={item.title}
                        className="dropdown-item text-white"
                        href="/"
                        title={item.title}
                    >
                        <i className={`fa ${item.icon} me-2`} />
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MegaMenu;
