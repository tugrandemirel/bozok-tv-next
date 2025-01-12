"use client"
import Link from "next/link";
import {useCategories} from "@/hooks/useCategories";

export const MobileMenu = () => {
    const { categories, isLoading, error } = useCategories(); // Hook'u burada kullanıyoruz

    if (isLoading) {
        return <div className="spinner-border d-flex align-items-center justify-content-center" role="status">
            <span className="sr-only">Yükleniyor...</span>
        </div>;
    }

    // Error durumunda hata mesajı göstermek
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <nav id="mobile-menu" className="fw-bold">
                <ul>
                    <li className="mobile-extra py-3 text-center border-bottom d-flex justify-content-evenly">
                        <Link
                            href="https://facebook.com/camlikgazetesi"
                            className="p-1 d-inline-block w-auto bg-navy rounded-pill"
                            target="_blank"
                            title="facebook"
                        >
                            <i className="fab fa-facebook-f text-white"/>
                        </Link>
                        <Link
                            href="https://twitter.com/camlikgazetesi"
                            className="p-1 d-inline-block w-auto bg-black rounded-pill"
                            target="_blank"
                            title="twitter"
                        >
                            <i className="fab fa-x-twitter text-white"/>
                        </Link>
                        <Link
                            href="https://www.instagram.com/camlikmedyagrubuu"
                            className="p-1 d-inline-block w-auto bg-magenta rounded-pill"
                            target="_blank"
                            title="instagram"
                        >
                            <i className="fab fa-instagram text-white"/>
                        </Link>
                        <Link
                            href="https://www.youtube.com/yozgatçamlıktv"
                            className="p-1 d-inline-block w-auto bg-red rounded-pill"
                            target="_blank"
                            title="youtube"
                        >
                            <i className="fab fa-youtube text-white"/>
                        </Link>
                        <Link
                            href="https://api.whatsapp.com/send?phone=05056105829"
                            className="p-1 d-inline-block w-auto bg-success rounded-pill"
                            target="_blank"
                            title="Whatsapp"
                        >
                            <i className="fab fa-whatsapp text-white"/>
                        </Link>
                        <Link
                            href="https://www.tiktok.com/yozgatçamlıktv"
                            className="p-1 d-inline-block w-auto bg-dark rounded-pill"
                            target="_blank"
                            title="tiktok"
                        >
                            <i className="fa-brands fa-tiktok text-white"/>
                        </Link>
                        <Link
                            href="https://www.threads.com/yozgatçamlıktv"
                            className="p-1 d-inline-block w-auto bg-dark rounded-pill"
                            target="_blank"
                            title="threads"
                        >
                            <i className="fa-brands fa-threads text-white"/>
                        </Link>
                    </li>
                    <li className="Selected">
                        <Link href="/" title="Ana Sayfa">
                            <i className="fa fa-home me-2 text-te-color"/>
                            Ana Sayfa
                        </Link>
                    </li>
                    <li>
                        <span>
                            <i className="fa fa-folder me-2 text-te-color"/>
                            Kategoriler
                        </span>
                        <ul>
                            <li>
                                <Link href="/" target="_self" title="Asayiş" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    Asayiş
                                </Link>
                            </li>
                            <li>
                                <Link href="/" target="_self" title="Dünya" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    Dünya
                                </Link>
                            </li>
                            <li>
                                <Link href="/" target="_self" title="Eğitim" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    Eğitim
                                </Link>
                            </li>
                            <li>
                                <Link href="/" target="_self" title="Ekonomi" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    Ekonomi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    target="_self"
                                    title="Genel Gündem"
                                    className=""
                                >
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    Genel Gündem
                                </Link>
                            </li>
                            <li>
                                <Link href="/" target="_self" title="Gündem" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    Gündem
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    target="_self"
                                    title="Haber Reklam"
                                    className=""
                                >
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    Haber Reklam
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    target="_self"
                                    title="İş İlanları"
                                    className=""
                                >
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    İş İlanları
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    target="_self"
                                    title="Kültür-Sanat"
                                    className=""
                                >
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    Kültür-Sanat
                                </Link>
                            </li>
                            <li>
                                <Link href="/" target="_self" title="Magazin" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    Magazin
                                </Link>
                            </li>
                            <li>
                                <Link href="/" target="_self" title="Sağlık" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    Sağlık
                                </Link>
                            </li>
                            <li>
                                <Link href="/" target="_self" title="Siyaset" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    Siyaset
                                </Link>
                            </li>
                            <li>
                                <Link href="/" target="_self" title="Spor" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    Spor
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    target="_self"
                                    title="Teknoloji"
                                    className=""
                                >
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    Teknoloji
                                </Link>
                            </li>
                            <li>
                                <Link href="/" target="_self" title="Yaşam" className="">
                                    <i className="fa fa-angle-right me-2 text-te-color"/>
                                    Yaşam
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/" title="Foto Galeri">
                            <i className="fa fa-camera me-2 text-te-color"/> Foto Galeri
                        </Link>
                    </li>
                    <li>
                        <Link href="/" title="Video">
                            <i className="fa fa-video me-2 text-te-color"/> Video
                        </Link>
                    </li>
                    <li>
                        <Link href="/" title="Yazarlar">
                            <i className="fa fa-pen-nib me-2 text-te-color"/> Yazarlar
                        </Link>
                    </li>
                    <li>
                        <Link href="/" title="Röportaj">
                            <i className="fa fa-microphone me-2 text-te-color"/> Röportaj
                        </Link>
                    </li>
                    <li>
                        <Link href="/" title="Biyografi">
                            <i className="fa fa-users me-2 text-te-color"/> Biyografi
                        </Link>
                    </li>
                    <li>
                        <Link href="/" title="Anketler">
                            <i className="fa fa-chart-bar me-2 text-te-color"/> Anketler
                        </Link>
                    </li>
                    <li>
                        <Link href="/" title="Künye">
                            <i className="fa fa-id-card me-2 text-te-color"/>
                            Künye
                        </Link>
                    </li>
                    <li>
                        <Link href="/" title="İletişim">
                            <i className="fa fa-envelope me-2  text-te-color"/>
                            İletişim
                        </Link>
                    </li>
                    {/*<li>
                        <span>
                            <i className="fa fa-folder me-2 text-te-color"/>
                            Servisler
                        </span>
                        <ul>
                            <li>
                                <Link
                                    href="yozgat-nobetci-eczaneler.html"
                                    title="Yozgat Nöbetçi Eczaneler"
                                    target="_self"
                                >
                                    <i className="fa-solid fa-capsules me-2 text-te-color"/>
                                    Yozgat Nöbetçi Eczaneler
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="yozgat-hava-durumu.html"
                                    title="Yozgat Hava Durumu"
                                    target="_self"
                                >
                                    <i className="fa-solid fa-cloud-sun me-2 text-te-color"/>
                                    Yozgat Hava Durumu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="yozgat-namaz-vakitleri.html"
                                    title="Yozgat Namaz Vakitleri"
                                    target="_self"
                                >
                                    <i className="fa-solid fa-mosque me-2 text-te-color"/>
                                    Yozgat Namaz Vakitleri
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="yozgat-trafik-durumu.html"
                                    title="Yozgat Trafik Yoğunluk Haritası"
                                    target="_self"
                                >
                                    <i className="fa-solid fa-car me-2 text-te-color"/>
                                    Yozgat Trafik Yoğunluk Haritası
                                </Link>
                            </li>
                            <li>
                                <Link href="puan-durumu.html" title="Puan Durumu" target="_self">
                                    <i className="fa-solid fa-chart-bar me-2 text-te-color"/>
                                    Puan Durumu
                                </Link>
                            </li>
                            <li>
                                <Link href="tum-mansetler.html" title="Tüm Manşetler" target="_self">
                                    <i className="fa-solid fa-newspaper me-2 text-te-color"/>
                                    Tüm Manşetler
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="sondakika-haberleri.html"
                                    title="Son Dakika Haberleri"
                                    target="_self"
                                >
                                    <i className="fa-solid fa-bell me-2 text-te-color"/>
                                    Son Dakika Haberleri
                                </Link>
                            </li>
                            <li>
                                <Link href="arsiv.html" title="Haber Arşivi" target="_self">
                                    <i className="fa-solid fa-folder-open me-2 text-te-color"/>
                                    Haber Arşivi
                                </Link>
                            </li>
                        </ul>
                    </li>*/}
                </ul>
                <Link id="menu_close" title="Kapat" className="position-absolute" href="#">
                    <i className="fa fa-times text-secondary"/>
                </Link>
            </nav>

        </>
    );
};
