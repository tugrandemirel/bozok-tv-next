export const MobileMenu = () => {
    return (
        <>
            <nav id="mobile-menu" className="fw-bold">
                <ul>
                    <li className="mobile-extra py-3 text-center border-bottom d-flex justify-content-evenly">
                        <a
                            href="https://facebook.com/camlikgazetesi"
                            className="p-1 d-inline-block w-auto bg-navy rounded-pill"
                            target="_blank"
                            title="facebook"
                        >
                            <i className="fab fa-facebook-f text-white" />
                        </a>{" "}
                        <a
                            href="https://twitter.com/camlikgazetesi"
                            className="p-1 d-inline-block w-auto bg-black rounded-pill"
                            target="_blank"
                            title="twitter"
                        >
                            <i className="fab fa-x-twitter text-white" />
                        </a>{" "}
                        <a
                            href="https://www.instagram.com/camlikmedyagrubuu"
                            className="p-1 d-inline-block w-auto bg-magenta rounded-pill"
                            target="_blank"
                            title="instagram"
                        >
                            <i className="fab fa-instagram text-white" />
                        </a>{" "}
                        <a
                            href="https://www.youtube.com/yozgatçamlıktv"
                            className="p-1 d-inline-block w-auto bg-red rounded-pill"
                            target="_blank"
                            title="youtube"
                        >
                            <i className="fab fa-youtube text-white" />
                        </a>{" "}
                        <a
                            href="https://api.whatsapp.com/send?phone=05056105829"
                            className="p-1 d-inline-block w-auto bg-success rounded-pill"
                            target="_blank"
                            title="Whatsapp"
                        >
                            <i className="fab fa-whatsapp text-white" />
                        </a>{" "}
                        <a
                            href="https://www.tiktok.com/yozgatçamlıktv"
                            className="p-1 d-inline-block w-auto bg-dark rounded-pill"
                            target="_blank"
                            title="tiktok"
                        >
                            <i className="fa-brands fa-tiktok text-white" />
                        </a>{" "}
                        <a
                            href="https://www.threads.com/yozgatçamlıktv"
                            className="p-1 d-inline-block w-auto bg-dark rounded-pill"
                            target="_blank"
                            title="threads"
                        >
                            <i className="fa-brands fa-threads text-white" />
                        </a>{" "}
                    </li>
                    <li className="Selected">
                        <a href="index.html" title="Ana Sayfa">
                            <i className="fa fa-home me-2 text-te-color" />
                            Ana Sayfa
                        </a>
                    </li>
                    <li>
      <span>
        <i className="fa fa-folder me-2 text-te-color" />
        Kategoriler
      </span>
                        <ul>
                            <li>
                                <a href="asayis.html" target="_self" title="Asayiş" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    Asayiş
                                </a>
                            </li>
                            <li>
                                <a href="dunya.html" target="_self" title="Dünya" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    Dünya
                                </a>
                            </li>
                            <li>
                                <a href="egitim.html" target="_self" title="Eğitim" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    Eğitim
                                </a>
                            </li>
                            <li>
                                <a href="ekonomi.html" target="_self" title="Ekonomi" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    Ekonomi
                                </a>
                            </li>
                            <li>
                                <a
                                    href="genel-gundem.html"
                                    target="_self"
                                    title="Genel Gündem"
                                    className=""
                                >
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    Genel Gündem
                                </a>
                            </li>
                            <li>
                                <a href="gundem.html" target="_self" title="Gündem" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    Gündem
                                </a>
                            </li>
                            <li>
                                <a
                                    href="haber-reklam.html"
                                    target="_self"
                                    title="Haber Reklam"
                                    className=""
                                >
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    Haber Reklam
                                </a>
                            </li>
                            <li>
                                <a
                                    href="is-ilanlari.html"
                                    target="_self"
                                    title="İş İlanları"
                                    className=""
                                >
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    İş İlanları
                                </a>
                            </li>
                            <li>
                                <a
                                    href="kultur-sanat.html"
                                    target="_self"
                                    title="Kültür-Sanat"
                                    className=""
                                >
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    Kültür-Sanat
                                </a>
                            </li>
                            <li>
                                <a href="magazin.html" target="_self" title="Magazin" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    Magazin
                                </a>
                            </li>
                            <li>
                                <a href="saglik.html" target="_self" title="Sağlık" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    Sağlık
                                </a>
                            </li>
                            <li>
                                <a href="siyaset.html" target="_self" title="Siyaset" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    Siyaset
                                </a>
                            </li>
                            <li>
                                <a href="spor.html" target="_self" title="Spor" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    Spor
                                </a>
                            </li>
                            <li>
                                <a
                                    href="teknoloji.html"
                                    target="_self"
                                    title="Teknoloji"
                                    className=""
                                >
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    Teknoloji
                                </a>
                            </li>
                            <li>
                                <a href="yasam.html" target="_self" title="Yaşam" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color" />
                                    Yaşam
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="foto-galeri.html" title="Foto Galeri">
                            <i className="fa fa-camera me-2 text-te-color" /> Foto Galeri
                        </a>
                    </li>
                    <li>
                        <a href="video.html" title="Video">
                            <i className="fa fa-video me-2 text-te-color" /> Video
                        </a>
                    </li>
                    <li>
                        <a href="yazarlar.html" title="Yazarlar">
                            <i className="fa fa-pen-nib me-2 text-te-color" /> Yazarlar
                        </a>
                    </li>
                    <li>
                        <a href="roportaj.html" title="Röportaj">
                            <i className="fa fa-microphone me-2 text-te-color" /> Röportaj
                        </a>
                    </li>
                    <li>
                        <a href="biyografi.html" title="Biyografi">
                            <i className="fa fa-users me-2 text-te-color" /> Biyografi
                        </a>
                    </li>
                    <li>
                        <a href="anketler.html" title="Anketler">
                            <i className="fa fa-chart-bar me-2 text-te-color" /> Anketler
                        </a>
                    </li>
                    <li>
                        <a href="kunye.html" title="Künye">
                            <i className="fa fa-id-card me-2 text-te-color" />
                            Künye
                        </a>
                    </li>
                    <li>
                        <a href="iletisim.html" title="İletişim">
                            <i className="fa fa-envelope me-2  text-te-color" />
                            İletişim
                        </a>
                    </li>
                    <li>
      <span>
        <i className="fa fa-folder me-2 text-te-color" />
        Servisler
      </span>
                        <ul>
                            <li>
                                <a
                                    href="yozgat-nobetci-eczaneler.html"
                                    title="Yozgat Nöbetçi Eczaneler"
                                    target="_self"
                                >
                                    <i className="fa-solid fa-capsules me-2 text-te-color" />
                                    Yozgat Nöbetçi Eczaneler
                                </a>
                            </li>
                            <li>
                                <a
                                    href="yozgat-hava-durumu.html"
                                    title="Yozgat Hava Durumu"
                                    target="_self"
                                >
                                    <i className="fa-solid fa-cloud-sun me-2 text-te-color" />
                                    Yozgat Hava Durumu
                                </a>
                            </li>
                            <li>
                                <a
                                    href="yozgat-namaz-vakitleri.html"
                                    title="Yozgat Namaz Vakitleri"
                                    target="_self"
                                >
                                    <i className="fa-solid fa-mosque me-2 text-te-color" />
                                    Yozgat Namaz Vakitleri
                                </a>
                            </li>
                            <li>
                                <a
                                    href="yozgat-trafik-durumu.html"
                                    title="Yozgat Trafik Yoğunluk Haritası"
                                    target="_self"
                                >
                                    <i className="fa-solid fa-car me-2 text-te-color" />
                                    Yozgat Trafik Yoğunluk Haritası
                                </a>
                            </li>
                            <li>
                                <a href="puan-durumu.html" title="Puan Durumu" target="_self">
                                    <i className="fa-solid fa-chart-bar me-2 text-te-color" />
                                    Puan Durumu
                                </a>
                            </li>
                            <li>
                                <a href="tum-mansetler.html" title="Tüm Manşetler" target="_self">
                                    <i className="fa-solid fa-newspaper me-2 text-te-color" />
                                    Tüm Manşetler
                                </a>
                            </li>
                            <li>
                                <a
                                    href="sondakika-haberleri.html"
                                    title="Son Dakika Haberleri"
                                    target="_self"
                                >
                                    <i className="fa-solid fa-bell me-2 text-te-color" />
                                    Son Dakika Haberleri
                                </a>
                            </li>
                            <li>
                                <a href="arsiv.html" title="Haber Arşivi" target="_self">
                                    <i className="fa-solid fa-folder-open me-2 text-te-color" />
                                    Haber Arşivi
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <a id="menu_close" title="Kapat" className="position-absolute" href="#">
                    <i className="fa fa-times text-secondary" />
                </a>
            </nav>
        </>
    );
};
