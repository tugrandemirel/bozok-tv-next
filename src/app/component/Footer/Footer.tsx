import {MobileMenu} from "@/app/component/Header/MobileMenu";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
    return (
        <>
            <footer className="mt-auto">
                <footer className="mt-auto">
                    <div className="footer-4 bg-gradient-te text-light mt-3 small">
                        <div className="container">
                            <div className="row g-3">
                                <div className="col-lg-4">
                                    <div className="logo-area text-center text-lg-start my-3">
                                        <Link
                                            href="/"
                                            title="Yozgat Haber, Yozgat'ın Güvenilir Haber Kaynağı - Bozok Tv"
                                            className="d-block mb-3"
                                        >
                                            <img
                                                src="/test/logo.png"
                                                alt="Yozgat Haber, Yozgat'ın Güvenilir Haber Kaynağı - Bozok Tv"
                                                width={261}
                                                height={40}
                                                className="light-mode img-fluid flow-logo"
                                            />
                                        </Link>
                                        <p className="text-white">
                                           Yozgat'tan dünyaya açılan pencere:
                                            Bozok.TV
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="firm-infos my-3 text-center text-lg-start">
                                        <div className="te-address mb-3">
                                            <i className="fa fa-map me-2 text-warning" />
                                            <span className="text-white">
                                                Adress
                                            </span>
                                        </div>
                                        <div className="te-phone mb-3">
                                            <i className="fa fa-phone me-2 text-warning" />
                                            <Link href={`tel:+905443380633`} className="text-white">
                                                0544 338 0633
                                            </Link>
                                        </div>
                                        <div className="te-email">
                                            <i className="fa fa-envelope me-2 text-warning" />
                                            <Link
                                                href=""
                                                className="text-white"
                                            >
                                                <span>
                                                    demireltugran66@gmail.com
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 align-self-center text-center">
                                    <div className="social-buttons my-3">
                                        <Link
                                            className="btn-outline-light text-center px-0 btn rounded-circle "
                                            rel="nofollow"
                                            href="/"
                                            target="_blank"
                                            title="Facebook"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link
                                            className="btn-outline-light text-center px-0 btn rounded-circle"
                                            rel="nofollow"
                                            href="/"
                                            target="_blank"
                                            title="X"
                                        >
                                            <i className="fab fa-x-twitter" />
                                        </Link>
                                        <Link
                                            className="btn-outline-light text-center px-0 btn rounded-circle"
                                            rel="nofollow"
                                            href="/"
                                            target="_blank"
                                            title="Instagram"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link
                                            className="btn-outline-light text-center px-0 btn rounded-circle"
                                            rel="nofollow"
                                            href="/"
                                            target="_blank"
                                            title="Pinterest"
                                        >
                                            <i className="fab fa-pinterest" />
                                        </Link>
                                        <Link
                                            className="btn-outline-light text-center px-0 btn rounded-circle"
                                            rel="nofollow"
                                            href="/"
                                            target="_blank"
                                            title="Youtube"
                                        >
                                            <i className="fab fa-youtube" />
                                        </Link>
                                        <Link
                                            className="btn-outline-light text-center px-0 btn rounded-circle"
                                            rel="nofollow"
                                            href="/"
                                            target="_blank"
                                            title="Tiktok"
                                        >
                                            <i className="fa-brands fa-tiktok" />
                                        </Link>
                                        <Link
                                            className="btn-outline-light text-center px-0 btn rounded-circle"
                                            rel="nofollow"
                                            href="/"
                                            target="_blank"
                                            title="Threads"
                                        >
                                            <i className="fa-brands fa-threads" />
                                        </Link>
                                        <Link
                                            className="btn-outline-light text-center px-0 btn rounded-circle"
                                            rel="nofollow"
                                            href="/"
                                            title="Whatsapp"
                                        >
                                            <i className="fab fa-whatsapp" />
                                        </Link>
                                        <a
                                            className="btn btn-outline-light px-0"
                                            rel="nofollow"
                                            href="rss"
                                            target="_blank"
                                            title="RSS"
                                        >
                                            {" "}
                                            <i className="fa fa-rss" />
                                        </a>
                                    </div>
                                    <div className="mobile-apps d-flex g-1 my-3 justify-content-center"></div>
                                </div>
                            </div>
                            <div className="footer-extra-links my-3 p-3 bg-transparent-50">
                                <nav className="row g-3">
                                    <div className="col-6 col-lg-3">
                                        <Link
                                            href="/"
                                            title="Yozgat Nöbetçi Eczaneler"
                                            className="text-white d-block"
                                            target="_self"
                                        >
                                            <i className="fa-solid fa-capsules me-2 text-warning" />
                                            Yozgat Nöbetçi Eczaneler
                                        </Link>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <Link
                                            href="/"
                                            title="Yozgat Hava Durumu"
                                            className="text-white d-block"
                                            target="_self"
                                        >
                                            <i className="fa-solid fa-cloud-sun me-2 text-warning" />
                                            Yozgat Hava Durumu
                                        </Link>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <Link
                                            href="/"
                                            title="Yozgat Namaz Vakitleri"
                                            className="text-white d-block"
                                            target="_self"
                                        >
                                            <i className="fa-solid fa-mosque me-2 text-warning" />
                                            Yozgat Namaz Vakitleri
                                        </Link>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <Link
                                            href="/"
                                            title="Yozgat Trafik Yoğunluk Haritası"
                                            className="text-white d-block"
                                            target="_self"
                                        >
                                            <i className="fa-solid fa-car me-2 text-warning" />
                                            Yozgat Trafik Yoğunluk Haritası
                                        </Link>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <Link
                                            href="/"
                                            title="Puan Durumu"
                                            className="text-white d-block"
                                            target="_self"
                                        >
                                            <i className="fa-solid fa-chart-bar me-2 text-warning" />
                                            Puan Durumu
                                        </Link>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <Link
                                            href="/"
                                            title="Tüm Manşetler"
                                            className="text-white d-block"
                                            target="_self"
                                        >
                                            <i className="fa-solid fa-newspaper me-2 text-warning" />
                                            Tüm Manşetler
                                        </Link>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <Link
                                            href="/"
                                            title="Son Dakika Haberleri"
                                            className="text-white d-block"
                                            target="_self"
                                        >
                                            <i className="fa-solid fa-bell me-2 text-warning" />
                                            Son Dakika Haberleri
                                        </Link>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <Link
                                            href="/"
                                            title="Haber Arşivi"
                                            className="text-white d-block"
                                            target="_self"
                                        >
                                            <i className="fa-solid fa-folder-open me-2 text-warning" />
                                            Haber Arşivi
                                        </Link>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copyright py-3 bg-gradient-te">
                    <div className="container">
                        <div className="row small align-items-center">
                            <div className="col-lg-8">
                                <ul className="footer list-inline text-center text-lg-start">
                                    <li className="list-inline-item  ">
                                        <Link
                                            href="/"
                                            className="text-white list-inline-item"
                                            target="_self"
                                            title="Gizlilik Sözleşmesi"
                                        >
                                            Gizlilik Sözleşmesi
                                        </Link>
                                    </li>
                                    <li className="list-inline-item  ">
                                        <Link
                                            href="/"
                                            className="text-white list-inline-item"
                                            target="_self"
                                            title="İletişim"
                                        >
                                            İletişim
                                        </Link>
                                    </li>
                                    <li className="list-inline-item  ">
                                        <a
                                            href="kunye.html"
                                            className="text-white list-inline-item"
                                            target="_self"
                                            title="Künye"
                                        >
                                            Künye
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <div className="text-white-50 text-center text-lg-end">
                                    Haber Yazılımı:{" "}
                                    <Link
                                        href={`tel:+905443380633`}
                                        target="_blank"
                                        className="text-white"
                                        title="haber yazılımı, haber sistemi, haber scripti"
                                    >
                                        Tuğran Demirel
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
};
