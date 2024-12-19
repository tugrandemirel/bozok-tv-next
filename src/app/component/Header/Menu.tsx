import Link from "next/link";

export const Menu = () => {
    return (
        <>
            <div className="main-menu navbar navbar-expand-lg d-none d-lg-block bg-white">
                <div className="container">
                    <ul  className="nav fw-semibold">
                        <li className="nav-item   ">
                            <Link href="asayis.html" className="nav-link nav-link text-dark" target="_self" title="Asayiş">Asayiş</Link>

                        </li>
                        <li className="nav-item   ">
                            <Link href="dunya.html" className="nav-link nav-link text-dark" target="_self" title="Dünya">Dünya</Link>

                        </li>
                        <li className="nav-item   ">
                            <Link href="egitim.html" className="nav-link nav-link text-dark" target="_self" title="Eğitim">Eğitim</Link>

                        </li>
                        <li className="nav-item   ">
                            <Link href="ekonomi.html" className="nav-link nav-link text-dark" target="_self" title="Ekonomi">Ekonomi</Link>

                        </li>
                        <li className="nav-item   ">
                            <Link href="gundem.html" className="nav-link nav-link text-dark" target="_self" title="Gündem">Gündem</Link>

                        </li>
                        <li className="nav-item   ">
                            <Link href="resmi-ilanlar.html" className="nav-link nav-link text-dark" target="_self" title="Resmi İlanlar">Resmi İlanlar</Link>

                        </li>
                        <li className="nav-item   ">
                            <Link href="saglik.html" className="nav-link nav-link text-dark" target="_self" title="Sağlık">Sağlık</Link>

                        </li>
                        <li className="nav-item   ">
                            <Link href="siyaset.html" className="nav-link nav-link text-dark" target="_self" title="Siyaset">Siyaset</Link>

                        </li>
                        <li className="nav-item   ">
                            <Link href="spor.html" className="nav-link nav-link text-dark" target="_self" title="Spor">Spor</Link>

                        </li>
                        <li className="nav-item   ">
                            <Link href="teknoloji.html" className="nav-link nav-link text-dark" target="_self" title="Teknoloji">Teknoloji</Link>

                        </li>
                        <li className="nav-item   ">
                            <Link href="yasam.html" className="nav-link nav-link text-dark" target="_self" title="Yaşam">Yaşam</Link>

                        </li>
                    </ul>

                    <ul className="navigation-menu nav d-flex align-items-center">

                        <li className="nav-item dropdown">
                            <Link className="nav-link pe-0 text-dark" data-bs-toggle="dropdown" href="#" aria-haspopup="true"
                                  aria-expanded="false" title="Ana Menü">
                                <i className="fa fa-bars fa-lg"></i>
                            </Link>
                            <div className="mega-menu dropdown-menu dropdown-menu-end text-capitalize shadow-lg border-0 rounded-0">

                                <div className="row g-3 small p-3">

                                    <div className="col">
                                        <div className="extra-sections bg-light p-3 border">
                                            <Link href="yozgat-nobetci-eczaneler.html" title="Yozgat Nöbetçi Eczaneler" className="d-block border-bottom pb-2 mb-2" target="_self"><i className="fa-solid fa-capsules me-2"></i>Yozgat Nöbetçi Eczaneler</Link>
                                            <Link href="yozgat-hava-durumu.html" title="Yozgat Hava Durumu" className="d-block border-bottom pb-2 mb-2" target="_self"><i className="fa-solid fa-cloud-sun me-2"></i>Yozgat Hava Durumu</Link>
                                            <Link href="yozgat-namaz-vakitleri.html" title="Yozgat Namaz Vakitleri" className="d-block border-bottom pb-2 mb-2" target="_self"><i className="fa-solid fa-mosque me-2"></i>Yozgat Namaz Vakitleri</Link>
                                            <Link href="yozgat-trafik-durumu.html" title="Yozgat Trafik Yoğunluk Haritası" className="d-block border-bottom pb-2 mb-2" target="_self"><i className="fa-solid fa-car me-2"></i>Yozgat Trafik Yoğunluk Haritası</Link>
                                            <Link href="puan-durumu.html" title="Puan Durumu" className="d-block border-bottom pb-2 mb-2" target="_self"><i className="fa-solid fa-chart-bar me-2"></i>Puan Durumu</Link>
                                            <Link href="tum-mansetler.html" title="Tüm Manşetler" className="d-block border-bottom pb-2 mb-2" target="_self"><i className="fa-solid fa-newspaper me-2"></i>Tüm Manşetler</Link>
                                            <Link href="sondakika-haberleri.html" title="Son Dakika Haberleri" className="d-block pb-2 me-2" target="_self"><i className="fa-solid fa-bell me-2"></i>Son Dakika Haberleri</Link>

                                        </div>
                                    </div>

                                    <div className="col">
                                        <Link href="asayis.html" className="d-block border-bottom  pb-2 mb-2" target="_self" title="Asayiş">Asayiş</Link>
                                        <Link href="dunya.html" className="d-block border-bottom  pb-2 mb-2" target="_self" title="Dünya">Dünya</Link>
                                        <Link href="egitim.html" className="d-block border-bottom  pb-2 mb-2" target="_self" title="Eğitim">Eğitim</Link>
                                        <Link href="ekonomi.html" className="d-block border-bottom  pb-2 mb-2" target="_self" title="Ekonomi">Ekonomi</Link>
                                        <Link href="gundem.html" className="d-block border-bottom  pb-2 mb-2" target="_self" title="Gündem">Gündem</Link>
                                        <Link href="haber.html" className="d-block border-bottom  pb-2 mb-2" target="_self" title="Haber">Haber</Link>
                                        <Link href="haber-reklam.html" className="d-block  pb-2 mb-2" target="_self" title="Haber Reklam">Haber Reklam</Link>
                                    </div><div className="col">
                                    <Link href="is-ilanlari.html" className="d-block border-bottom  pb-2 mb-2" target="_self" title="İş İlanları">İş İlanları</Link>
                                    <Link href="kultur-sanat.html" className="d-block border-bottom  pb-2 mb-2" target="_self" title="Kültür-Sanat">Kültür-Sanat</Link>
                                    <Link href="magazin.html" className="d-block border-bottom  pb-2 mb-2" target="_self" title="Magazin">Magazin</Link>
                                    <Link href="saglik.html" className="d-block border-bottom  pb-2 mb-2" target="_self" title="Sağlık">Sağlık</Link>
                                    <Link href="siyaset.html" className="d-block border-bottom  pb-2 mb-2" target="_self" title="Siyaset">Siyaset</Link>
                                    <Link href="spor.html" className="d-block border-bottom  pb-2 mb-2" target="_self" title="Spor">Spor</Link>
                                    <Link href="teknoloji.html" className="d-block  pb-2 mb-2" target="_self" title="Teknoloji">Teknoloji</Link>
                                </div><div className="col">
                                    <Link href="yasam.html" className="d-block border-bottom  pb-2 mb-2" target="_self" title="Yaşam">Yaşam</Link>
                                </div>


                                </div>

                                <div className="p-3 bg-light">
                                    <Link className="me-3"
                                          href="https://www.facebook.com/camlikgazetesi" target="_blank"><i className="fab fa-facebook me-2 text-navy"></i> Facebook</Link>
                                    <Link className="me-3"
                                          href="https://www.twitter.com/camlikgazetesi" target="_blank"><i className="fab fa-x-twitter "></i> Twitter</Link>
                                    <Link className="me-3"
                                          href="https://www.instagram.com/camlikmedyagrubuu" target="_blank"><i className="fab fa-instagram me-2 text-magenta"></i> Instagram</Link>
                                    <Link className="me-3"
                                          href="https://www.youtube.com/yozgatçamlıktv" target="_blank"><i className="fab fa-youtube me-2 text-danger"></i> Youtube</Link>
                                    <Link className="me-3"
                                          href="https://www.tiktok.com/yozgatçamlıktv" target="_blank"><i className="fa-brands fa-tiktok me-1 text-dark"></i> Tiktok</Link>
                                    <Link className="me-3"
                                          href="https://www.threads.com/yozgatçamlıktv" target="_blank"><i className="fa-brands fa-threads me-1 text-dark"></i> Threads</Link>
                                    <Link className="" href="https://api.whatsapp.com/send?phone=05056105829" title="Whatsapp"><i
                                        className="fab fa-whatsapp me-2 text-navy"></i> WhatsApp İhbar Hattı</Link>    </div>

                                <div className="mega-menu-footer p-2 bg-te-color">
                                    <Link className="dropdown-item text-white" href="kunye.html" title="Künye / İletişim"><i className="fa fa-id-card me-2"></i> Künye / İletişim</Link>
                                    <Link className="dropdown-item text-white" href="iletisim.html" title="Bize Ulaşın"><i className="fa fa-envelope me-2"></i> Bize Ulaşın</Link>
                                    <Link className="dropdown-item text-white" href="rss-baglantilari.html" title="RSS Bağlantıları"><i className="fa fa-rss me-2"></i> RSS Bağlantıları</Link>
                                    <Link className="dropdown-item text-white" href="member/login.html" title="Üyelik Girişi"><i className="fa fa-user me-2"></i> Üyelik Girişi</Link>
                                </div>


                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
