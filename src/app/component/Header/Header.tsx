import Image from "next/image";
import Link from "next/link";
import MainMenu from "@/app/component/Header/Menu/MainMenu";
export const Header = () => {
    return (
        <>
            <header className="header-8">
                <nav className="top-header navbar navbar-expand-lg navbar-dark bg-te-color py-1">
                    <div className="container">
                        <Link
                            className="navbar-brand me-0"
                            href="/"
                            title="Yozgat Haber, Yozgat'ın Güvenilir Haber Kaynağı - Bozok TV"
                        >
                            <Image
                                src="/test/logo.png"
                                alt="Yozgat Haber, Yozgat'ın Güvenilir Haber Kaynağı - Bozok TV"
                                width={214}
                                height={40}
                                className="light-mode img-fluid flow-logo"
                            />
                        </Link>
                        <div className="header-widgets d-lg-flex justify-content-end align-items-center d-none">
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
                                    title="Bozok TV"
                                >
                                    <div className="small text-white lh-1">Video Galeri</div>
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
                                <button id="menu" title="Ana Menü" className="text-white btn btn-link btn-sm btn-icon">
                                    <i className="fa fa-bars fa-lg" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
                
                <MainMenu />
            </header>

        </>
    );
};
