import Image from "next/image";
import Link from "next/link";
import {MobileCategories} from "@/app/component/Header/MobileCategories";
import {Menu} from "@/app/component/Header/Menu";
import {Navbar} from "@/app/component/Header/Navbar";
export const Header = () => {
    return (
        <>
            <header className="header-8">
                <nav className="top-header navbar navbar-expand-lg navbar-dark bg-te-color py-1">
                    <div className="container">
                        <Link
                            className="navbar-brand me-0"
                            href="/"
                            title="Yozgat Haber, Yozgat'ın Güvenilir Haber Kaynağı - Yozgat Çamlık Gazetesi"
                        >
                            <img
                                src="/test/logo.png"
                                alt="Yozgat Haber, Yozgat'ın Güvenilir Haber Kaynağı - Yozgat Çamlık Gazetesi"
                                width={214}
                                height={40}
                                className="light-mode img-fluid flow-logo"
                            />
                        </Link>
                        <div className="header-widgets d-lg-flex justify-content-end align-items-center d-none">
                            {/* HAVA DURUMU */}
                            <input
                                type="hidden"
                                name="widget_setting_weathercity"
                                defaultValue={296562}
                            />
                            <div className="prayer-top d-none d-lg-flex justify-content-between flex-column">
                                <select
                                    className="form-select bg-transparent border-0 text-white" defaultValue="yozgat"
                                    name="city"
                                >
                                    <option value="yozgat">
                                        Yozgat
                                    </option>
                                </select>
                                <div className="text-white text-end">
                                    {" "}
                                    <span className="text-cyan">İmsak</span> 06:20
                                </div>
                            </div>
                            <div className="weather-top weather-widget d-none d-lg-flex justify-content-between flex-column">
                                <div className="weather">
                                    <select
                                        className="form-select bg-transparent border-0 text-white" defaultValue="296562"
                                        name="city"
                                    >

                                        <option value={296562}>
                                            Yozgat
                                        </option>
                                    </select>
                                </div>
                                <div className="weather-degree text-light text-end">
                                    <i className="icon wi wi-cloudy text-warning me-2" />
                                    <span className="degree text-white">
              10<sup>°</sup>C
            </span>
                                </div>
                            </div>
                            <div data-location='{" city":"TUXX0014"}' className="d-none" />
                            {/* PİYASALAR */}
                            <div
                                className="parite-top position-relative overflow-hidden"
                                style={{ height: 40 }}
                            >
                                <div className="newsticker">
                                    <ul
                                        className="newsticker__h4 list-unstyled text-white small"
                                        data-header={8}
                                    >
                                        <li className="newsticker__item dollar">
                                            <div>
                                                DOLAR <i className="fa fa-caret-up text-cyan ms-1" />{" "}
                                            </div>
                                            <div className="fw-bold d-inline-block">35,10</div>
                                            <span className="text-cyan d-inline-block ms-1">0.17</span>
                                        </li>
                                        <li className="newsticker__item euro">
                                            <div>
                                                EURO <i className="fa fa-caret-up text-cyan ms-1" />{" "}
                                            </div>
                                            <div className="fw-bold d-inline-block">36,47</div>
                                            <span className="text-cyan d-inline-block ms-1">0.28</span>
                                        </li>
                                        <li className="newsticker__item euro">
                                            <div>
                                                STERLIN <i className="fa fa-caret-down text-danger ms-1" />{" "}
                                            </div>
                                            <div className="fw-bold d-inline-block">44,08</div>
                                            <span className="text-danger d-inline-block ms-1">-0.07</span>
                                        </li>
                                        <li className="newsticker__item sterlin">
                                            <div>
                                                ALTIN <i className="fa fa-caret-up text-cyan ms-1" />{" "}
                                            </div>
                                            <div className="fw-bold d-inline-block">2.927,43</div>
                                            <span className="text-cyan d-inline-block ms-1">0.25</span>
                                        </li>
                                        <li className="newsticker__item bist">
                                            <div>
                                                BİST100 <i className="fa fa-caret-down text-danger ms-1" />
                                            </div>
                                            <div className="fw-bold d-inline-block">9.765</div>
                                            <span className="text-danger d-inline-block ms-1">-1.52</span>
                                        </li>
                                        <li className="newsticker__item btc">
                                            <div>
                                                BITCOIN <i className="fa fa-caret-down text-danger ms-1" />{" "}
                                            </div>
                                            <div className="fw-bold d-inline-block">100.450</div>
                                            <span className="text-danger d-inline-block ms-1">-3.87</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* PİYASALAR */}
                            <div>
                                <Link
                                    href="/"
                                    className="text-center d-block mt-1 "
                                    target="_self"
                                    title="Foto Galeri"
                                >
                                    <div className="small text-white lh-1">Foto Galeri</div>
                                    <i className="fa fa-camera me-1 text-warning" />{" "}
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href="/"
                                    className="text-center d-block mt-1 "
                                    target="_self"
                                    title="Çamlık TV"
                                >
                                    <div className="small text-white lh-1">Çamlık TV</div>
                                    <i className="fa fa-video me-1 text-warning" />{" "}
                                </Link>
                            </div>
                            <div >
                                <Link
                                    href="/"
                                    className="text-center d-block mt-1 "
                                    target="_self"
                                    title="Yazarlar"
                                >
                                    <div className="small text-white lh-1">Yazarlar</div>
                                    <i className="fa fa-pen-nib me-1 text-warning" />{" "}
                                </Link>
                            </div>
                            <div className="top-social-media">
                                <Link
                                    href="/"
                                    className="ms-2"
                                    target="_blank"
                                >
                                    <i className="fab fa-facebook-f text-white" />
                                </Link>
                                <Link
                                    href="/"
                                    className="ms-2"
                                    target="_blank"
                                >
                                    <i className="fab fa-x-twitter text-white" />
                                </Link>
                                <Link
                                    href="/"
                                    className="ms-2"
                                    target="_blank"
                                >
                                    <i className="fab fa-instagram text-white" />
                                </Link>
                                <Link
                                    href="/"
                                    className="ms-2"
                                    target="_blank"
                                >
                                    <i className="fab fa-youtube text-white" />
                                </Link>
                            </div>
                            <div className="search-top">
                                <Link href="/" className="d-block" title="Ara">
                                    <i className="fa fa-search text-white" />
                                </Link>
                            </div>
                        </div>
                        <ul className="nav d-lg-none px-2">
                            <li className="nav-item">
                                <Link href="/" className="me-2 text-white" title="Ara">
                                    <i className="fa fa-search fa-lg" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#menu" title="Ana Menü" className="text-white">
                                    <i className="fa fa-bars fa-lg" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="main-menu navbar navbar-expand-lg d-none d-lg-block bg-white">
                    <div className="container">
                        <ul className="nav fw-semibold">
                            <li className="nav-item   ">
                                <Link
                                    href="/"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Asayiş"
                                >
                                    Asayiş
                                </Link>
                            </li>
                            <li className="nav-item   ">
                                <Link
                                    href="/"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Dünya"
                                >
                                    Dünya
                                </Link>
                            </li>
                            <li className="nav-item   ">
                                <Link
                                    href="/"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Eğitim"
                                >
                                    Eğitim
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Ekonomi"
                                >
                                    Ekonomi
                                </Link>
                            </li>
                            <li className="nav-item   ">
                                <Link
                                    href="/"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Gündem"
                                >
                                    Gündem
                                </Link>
                            </li>
                            <li className="nav-item   ">
                                <Link
                                    href="/"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Resmi İlanlar"
                                >
                                    Resmi İlanlar
                                </Link>
                            </li>
                            <li className="nav-item   ">
                                <Link
                                    href="/"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Sağlık"
                                >
                                    Sağlık
                                </Link>
                            </li>
                            <li className="nav-item   ">
                                <Link
                                    href="/"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Siyaset"
                                >
                                    Siyaset
                                </Link>
                            </li>
                            <li className="nav-item   ">
                                <Link
                                    href="/"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Spor"
                                >
                                    Spor
                                </Link>
                            </li>
                            <li className="nav-item   ">
                                <Link
                                    href="/"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Teknoloji"
                                >
                                    Teknoloji
                                </Link>
                            </li>
                            <li className="nav-item   ">
                                <Link
                                    href="/"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Yaşam"
                                >
                                    Yaşam
                                </Link>
                            </li>
                        </ul>
                        <ul className="navigation-menu nav d-flex align-items-center">
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link pe-0 text-dark"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    title="Ana Menü"
                                >
                                    <i className="fa fa-bars fa-lg" />
                                </Link>
                                <div className="mega-menu dropdown-menu dropdown-menu-end text-capitalize shadow-lg border-0 rounded-0">
                                    <div className="row g-3 small p-3">
                                        <div className="col">
                                            <div className="extra-sections bg-light p-3 border">
                                                <Link
                                                    href="/"
                                                    title="Yozgat Nöbetçi Eczaneler"
                                                    className="d-block border-bottom pb-2 mb-2"
                                                    target="_self"
                                                >
                                                    <i className="fa-solid fa-capsules me-2" />
                                                    Yozgat Nöbetçi Eczaneler
                                                </Link>
                                                <Link
                                                    href="/"
                                                    title="Yozgat Hava Durumu"
                                                    className="d-block border-bottom pb-2 mb-2"
                                                    target="_self"
                                                >
                                                    <i className="fa-solid fa-cloud-sun me-2" />
                                                    Yozgat Hava Durumu
                                                </Link>
                                                <Link
                                                    href="/"
                                                    title="Yozgat Namaz Vakitleri"
                                                    className="d-block border-bottom pb-2 mb-2"
                                                    target="_self"
                                                >
                                                    <i className="fa-solid fa-mosque me-2" />
                                                    Yozgat Namaz Vakitleri
                                                </Link>
                                                <Link
                                                    href="/"
                                                    title="Yozgat Trafik Yoğunluk Haritası"
                                                    className="d-block border-bottom pb-2 mb-2"
                                                    target="_self"
                                                >
                                                    <i className="fa-solid fa-car me-2" />
                                                    Yozgat Trafik Yoğunluk Haritası
                                                </Link>
                                                <Link
                                                    href="/"
                                                    title="Puan Durumu"
                                                    className="d-block border-bottom pb-2 mb-2"
                                                    target="_self"
                                                >
                                                    <i className="fa-solid fa-chart-bar me-2" />
                                                    Puan Durumu
                                                </Link>
                                                <Link
                                                    href="/"
                                                    title="Tüm Manşetler"
                                                    className="d-block border-bottom pb-2 mb-2"
                                                    target="_self"
                                                >
                                                    <i className="fa-solid fa-newspaper me-2" />
                                                    Tüm Manşetler
                                                </Link>
                                                <Link
                                                    href="/"
                                                    title="Son Dakika Haberleri"
                                                    className="d-block pb-2 me-2"
                                                    target="_self"
                                                >
                                                    <i className="fa-solid fa-bell me-2" />
                                                    Son Dakika Haberleri
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <Link
                                                href="/"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Asayiş"
                                            >
                                                Asayiş
                                            </Link>
                                            <Link
                                                href="/"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Dünya"
                                            >
                                                Dünya
                                            </Link>
                                            <Link
                                                href="/"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Eğitim"
                                            >
                                                Eğitim
                                            </Link>
                                            <Link
                                                href="/"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Ekonomi"
                                            >
                                                Ekonomi
                                            </Link>
                                            <Link
                                                href="/"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Gündem"
                                            >
                                                Gündem
                                            </Link>
                                            <Link
                                                href="/"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Haber"
                                            >
                                                Haber
                                            </Link>
                                            <Link
                                                href="/"
                                                className="d-block  pb-2 mb-2"
                                                target="_self"
                                                title="Haber Reklam"
                                            >
                                                Haber Reklam
                                            </Link>
                                        </div>
                                        <div className="col">
                                            <Link
                                                href="/"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="İş İlanları"
                                            >
                                                İş İlanları
                                            </Link>
                                            <Link
                                                href="/"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Kültür-Sanat"
                                            >
                                                Kültür-Sanat
                                            </Link>
                                            <Link
                                                href="/"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Magazin"
                                            >
                                                Magazin
                                            </Link>
                                            <Link
                                                href="/"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Sağlık"
                                            >
                                                Sağlık
                                            </Link>
                                            <Link
                                                href="/"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Siyaset"
                                            >
                                                Siyaset
                                            </Link>
                                            <Link
                                                href="/"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Spor"
                                            >
                                                Spor
                                            </Link>
                                            <Link
                                                href="/"
                                                className="d-block  pb-2 mb-2"
                                                target="_self"
                                                title="Teknoloji"
                                            >
                                                Teknoloji
                                            </Link>
                                        </div>
                                        <div className="col">
                                            <Link
                                                href="/"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Yaşam"
                                            >
                                                Yaşam
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                        <Link
                                            className="me-3"
                                            href="/"
                                            target="_blank"
                                        >
                                            <i className="fab fa-facebook me-2 text-navy" /> Facebook
                                        </Link>
                                        <Link
                                            className="me-3"
                                            href="/"
                                            target="_blank"
                                        >
                                            <i className="fab fa-x-twitter " /> Twitter
                                        </Link>
                                        <Link
                                            className="me-3"
                                            href="/"
                                            target="_blank"
                                        >
                                            <i className="fab fa-instagram me-2 text-magenta" /> Instagram
                                        </Link>
                                        <Link
                                            className="me-3"
                                            href="/"
                                            target="_blank"
                                        >
                                            <i className="fab fa-youtube me-2 text-danger" /> Youtube
                                        </Link>
                                        <Link
                                            className="me-3"
                                            href="/"
                                            target="_blank"
                                        >
                                            <i className="fa-brands fa-tiktok me-1 text-dark" /> Tiktok
                                        </Link>
                                        <Link
                                            className="me-3"
                                            href="/"
                                            target="_blank"
                                        >
                                            <i className="fa-brands fa-threads me-1 text-dark" /> Threads
                                        </Link>
                                        <Link
                                            className=""
                                            href="/"
                                            title="Whatsapp"
                                        >
                                            <i className="fab fa-whatsapp me-2 text-navy" /> WhatsApp İhbar
                                            Hattı
                                        </Link>{" "}
                                    </div>
                                    <div className="mega-menu-footer p-2 bg-te-color">
                                        <Link
                                            className="dropdown-item text-white"
                                            href="/"
                                            title="Künye / İletişim"
                                        >
                                            <i className="fa fa-id-card me-2" /> Künye / İletişim
                                        </Link>
                                        <Link
                                            className="dropdown-item text-white"
                                            href="/"
                                            title="Bize Ulaşın"
                                        >
                                            <i className="fa fa-envelope me-2" /> Bize Ulaşın
                                        </Link>
                                        <Link
                                            className="dropdown-item text-white"
                                            href="/"
                                            title="RSS Bağlantıları"
                                        >
                                            <i className="fa fa-rss me-2" /> RSS Bağlantıları
                                        </Link>
                                        <Link
                                            className="dropdown-item text-white"
                                            href="/"
                                            title="Üyelik Girişi"
                                        >
                                            <i className="fa fa-user me-2" /> Üyelik Girişi
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className="mobile-categories d-lg-none list-inline bg-white">
                    <li className="list-inline-item">
                        <Link href="/" className="text-dark" target="_self" title="Asayiş">
                            Asayiş
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link href="/" className="text-dark" target="_self" title="Dünya">
                            Dünya
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link href="/" className="text-dark" target="_self" title="Eğitim">
                            Eğitim
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link
                            href="/"
                            className="text-dark"
                            target="_self"
                            title="Ekonomi"
                        >
                            Ekonomi
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link href="/" className="text-dark" target="_self" title="Gündem">
                            Gündem
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link
                            href="/"
                            className="text-dark"
                            target="_self"
                            title="Resmi İlanlar"
                        >
                            Resmi İlanlar
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link href="/" className="text-dark" target="_self" title="Sağlık">
                            Sağlık
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link
                            href="/"
                            className="text-dark"
                            target="_self"
                            title="Siyaset"
                        >
                            Siyaset
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link href="/" className="text-dark" target="_self" title="Spor">
                            Spor
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link
                            href="/"
                            className="text-dark"
                            target="_self"
                            title="Teknoloji"
                        >
                            Teknoloji
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link href="/" className="text-dark" target="_self" title="Yaşam">
                            Yaşam
                        </Link>
                    </li>
                </ul>
            </header>

        </>
    );
};
