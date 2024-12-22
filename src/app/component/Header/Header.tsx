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
                        <a
                            className="navbar-brand me-0"
                            href="index.html"
                            title="Yozgat Haber, Yozgat'ın Güvenilir Haber Kaynağı - Yozgat Çamlık Gazetesi"
                        >
                            <img
                                src="https://yozgatcamlikcom.teimg.com/yozgat-habertest-com/uploads/2024/10/camlik-logo-light.svg"
                                alt="Yozgat Haber, Yozgat'ın Güvenilir Haber Kaynağı - Yozgat Çamlık Gazetesi"
                                width={214}
                                height={40}
                                className="light-mode img-fluid flow-logo"
                            />
                            <img
                                src="https://yozgatcamlikcom.teimg.com/yozgat-habertest-com/uploads/2024/10/camlik-logo-light.svg"
                                alt="Yozgat Haber, Yozgat'ın Güvenilir Haber Kaynağı - Yozgat Çamlık Gazetesi"
                                width={214}
                                height={40}
                                className="dark-mode img-fluid flow-logo d-none"
                            />
                        </a>
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
                                    <option value="adana">Adana</option>
                                    <option value="adiyaman">Adıyaman</option>
                                    <option value="afyonkarahisar">Afyonkarahisar</option>
                                    <option value="agri">Ağrı</option>
                                    <option value="aksaray">Aksaray</option>
                                    <option value="amasya">Amasya</option>
                                    <option value="ankara">Ankara</option>
                                    <option value="antalya">Antalya</option>
                                    <option value="ardahan">Ardahan</option>
                                    <option value="artvin">Artvin</option>
                                    <option value="aydin">Aydın</option>
                                    <option value="balikesir">Balıkesir</option>
                                    <option value="bartin">Bartın</option>
                                    <option value="batman">Batman</option>
                                    <option value="bayburt">Bayburt</option>
                                    <option value="bilecik">Bilecik</option>
                                    <option value="bingol">Bingöl</option>
                                    <option value="bitlis">Bitlis</option>
                                    <option value="bolu">Bolu</option>
                                    <option value="burdur">Burdur</option>
                                    <option value="bursa">Bursa</option>
                                    <option value="canakkale">Çanakkale</option>
                                    <option value="cankiri">Çankırı</option>
                                    <option value="corum">Çorum</option>
                                    <option value="denizli">Denizli</option>
                                    <option value="diyarbakir">Diyarbakır</option>
                                    <option value="duzce">Düzce</option>
                                    <option value="edirne">Edirne</option>
                                    <option value="elazig">Elazığ</option>
                                    <option value="erzincan">Erzincan</option>
                                    <option value="erzurum">Erzurum</option>
                                    <option value="eskisehir">Eskişehir</option>
                                    <option value="gaziantep">Gaziantep</option>
                                    <option value="giresun">Giresun</option>
                                    <option value="gumushane">Gümüşhane</option>
                                    <option value="hakkari">Hakkâri</option>
                                    <option value="hatay">Hatay</option>
                                    <option value="igdir">Iğdır</option>
                                    <option value="isparta">Isparta</option>
                                    <option value="istanbul">İstanbul</option>
                                    <option value="izmir">İzmir</option>
                                    <option value="kahramanmaras">Kahramanmaraş</option>
                                    <option value="karabuk">Karabük</option>
                                    <option value="karaman">Karaman</option>
                                    <option value="kars">Kars</option>
                                    <option value="kastamonu">Kastamonu</option>
                                    <option value="kayseri">Kayseri</option>
                                    <option value="kilis">Kilis</option>
                                    <option value="kirikkale">Kırıkkale</option>
                                    <option value="kirklareli">Kırklareli</option>
                                    <option value="kirsehir">Kırşehir</option>
                                    <option value="kocaeli">Kocaeli</option>
                                    <option value="konya">Konya</option>
                                    <option value="kutahya">Kütahya</option>
                                    <option value="malatya">Malatya</option>
                                    <option value="manisa">Manisa</option>
                                    <option value="mardin">Mardin</option>
                                    <option value="mersin">Mersin</option>
                                    <option value="mugla">Muğla</option>
                                    <option value="mus">Muş</option>
                                    <option value="nevsehir">Nevşehir</option>
                                    <option value="nigde">Niğde</option>
                                    <option value="ordu">Ordu</option>
                                    <option value="osmaniye">Osmaniye</option>
                                    <option value="rize">Rize</option>
                                    <option value="sakarya">Sakarya</option>
                                    <option value="samsun">Samsun</option>
                                    <option value="sanliurfa">Şanlıurfa</option>
                                    <option value="siirt">Siirt</option>
                                    <option value="sinop">Sinop</option>
                                    <option value="sivas">Sivas</option>
                                    <option value="sirnak">Şırnak</option>
                                    <option value="tekirdag">Tekirdağ</option>
                                    <option value="tokat">Tokat</option>
                                    <option value="trabzon">Trabzon</option>
                                    <option value="tunceli">Tunceli</option>
                                    <option value="usak">Uşak</option>
                                    <option value="van">Van</option>
                                    <option value="yalova">Yalova</option>
                                    <option value="yozgat">
                                        Yozgat
                                    </option>
                                    <option value="zonguldak">Zonguldak</option>
                                </select>
                                <div className="text-white text-end">
                                    {" "}
                                    <span className="text-cyan">İmsak</span> 06:20
                                </div>
                            </div>
                            <div className="weather-top weather-widget d-none d-lg-flex justify-content-between flex-column">
                                <div className="weather">
                                    <select
                                        className="form-select bg-transparent border-0 text-white" defaultValue="325361"
                                        name="city"
                                    >
                                        <option value={325361}>Adana</option>
                                        <option value={325329}>Adıyaman</option>
                                        <option value={325303}>Afyonkarahisar</option>
                                        <option value={325163}>Ağrı</option>
                                        <option value={324496}>Aksaray</option>
                                        <option value={752014}>Amasya</option>
                                        <option value={323786}>Ankara</option>
                                        <option value={323776}>Antalya</option>
                                        <option value={751952}>Ardahan</option>
                                        <option value={751816}>Artvin</option>
                                        <option value={322819}>Aydın</option>
                                        <option value={322164}>Balıkesir</option>
                                        <option value={862467}>Bartın</option>
                                        <option value={321836}>Batman</option>
                                        <option value={750938}>Bayburt</option>
                                        <option value={750598}>Bilecik</option>
                                        <option value={321082}>Bingöl</option>
                                        <option value={321025}>Bitlis</option>
                                        <option value={750516}>Bolu</option>
                                        <option value={320390}>Burdur</option>
                                        <option value={750269}>Bursa</option>
                                        <option value={749780}>Çanakkale</option>
                                        <option value={749747}>Çankırı</option>
                                        <option value={748879}>Çorum</option>
                                        <option value={317109}>Denizli</option>
                                        <option value={316541}>Diyarbakır</option>
                                        <option value={747764}>Düzce</option>
                                        <option value={747711}>Edirne</option>
                                        <option value={315807}>Elazığ</option>
                                        <option value={315373}>Erzincan</option>
                                        <option value={315367}>Erzurum</option>
                                        <option value={315202}>Eskişehir</option>
                                        <option value={314830}>Gaziantep</option>
                                        <option value={746881}>Giresun</option>
                                        <option value={746425}>Gümüşhane</option>
                                        <option value={312888}>Hakkâri</option>
                                        <option value={312394}>Hatay</option>
                                        <option value={443184}>Iğdır</option>
                                        <option value={311073}>Isparta</option>
                                        <option value={745044}>İstanbul</option>
                                        <option value={311044}>İzmir</option>
                                        <option value={310859}>Kahramanmaraş</option>
                                        <option value={744562}>Karabük</option>
                                        <option value={309527}>Karaman</option>
                                        <option value={743952}>Kars</option>
                                        <option value={743882}>Kastamonu</option>
                                        <option value={308464}>Kayseri</option>
                                        <option value={307864}>Kilis</option>
                                        <option value={307654}>Kırıkkale</option>
                                        <option value={743166}>Kırklareli</option>
                                        <option value={307515}>Kırşehir</option>
                                        <option value={742865}>Kocaeli</option>
                                        <option value={306571}>Konya</option>
                                        <option value={305268}>Kütahya</option>
                                        <option value={304922}>Malatya</option>
                                        <option value={304827}>Manisa</option>
                                        <option value={304797}>Mardin</option>
                                        <option value={311728}>Mersin</option>
                                        <option value={304184}>Muğla</option>
                                        <option value={304081}>Muş</option>
                                        <option value={303831}>Nevşehir</option>
                                        <option value={303827}>Niğde</option>
                                        <option value={741100}>Ordu</option>
                                        <option value={303195}>Osmaniye</option>
                                        <option value={740483}>Rize</option>
                                        <option value={740352}>Sakarya</option>
                                        <option value={740264}>Samsun</option>
                                        <option value={298333}>Şanlıurfa</option>
                                        <option value={300822}>Siirt</option>
                                        <option value={739600}>Sinop</option>
                                        <option value={300619}>Sivas</option>
                                        <option value={300640}>Şırnak</option>
                                        <option value={738926}>Tekirdağ</option>
                                        <option value={738743}>Tokat</option>
                                        <option value={738648}>Trabzon</option>
                                        <option value={298846}>Tunceli</option>
                                        <option value={298299}>Uşak</option>
                                        <option value={298113}>Van</option>
                                        <option value={738025}>Yalova</option>
                                        <option value={296562}>
                                            Yozgat
                                        </option>
                                        <option value={737022}>Zonguldak</option>
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
                            <div className={0}>
                                <a
                                    href="foto-galeri.html"
                                    className="text-center d-block mt-1 "
                                    target="_self"
                                    title="Foto Galeri"
                                >
                                    <div className="small text-white lh-1">Foto Galeri</div>
                                    <i className="fa fa-camera me-1 text-warning" />{" "}
                                </a>
                            </div>
                            <div className={1}>
                                <a
                                    href="video.html"
                                    className="text-center d-block mt-1 "
                                    target="_self"
                                    title="Çamlık TV"
                                >
                                    <div className="small text-white lh-1">Çamlık TV</div>
                                    <i className="fa fa-video me-1 text-warning" />{" "}
                                </a>
                            </div>
                            <div className={2}>
                                <a
                                    href="yazarlar.html"
                                    className="text-center d-block mt-1 "
                                    target="_self"
                                    title="Yazarlar"
                                >
                                    <div className="small text-white lh-1">Yazarlar</div>
                                    <i className="fa fa-pen-nib me-1 text-warning" />{" "}
                                </a>
                            </div>
                            <div className="top-social-media">
                                <a
                                    href="https://www.facebook.com/camlikgazetesi"
                                    className="ms-2"
                                    target="_blank"
                                >
                                    <i className="fab fa-facebook-f text-white" />
                                </a>
                                <a
                                    href="https://www.twitter.com/camlikgazetesi"
                                    className="ms-2"
                                    target="_blank"
                                >
                                    <i className="fab fa-x-twitter text-white" />
                                </a>
                                <a
                                    href="https://www.instagram.com/camlikmedyagrubuu"
                                    className="ms-2"
                                    target="_blank"
                                >
                                    <i className="fab fa-instagram text-white" />
                                </a>
                                <a
                                    href="https://www.youtube.com/yozgatçamlıktv"
                                    className="ms-2"
                                    target="_blank"
                                >
                                    <i className="fab fa-youtube text-white" />
                                </a>
                            </div>
                            <div className="search-top">
                                <a href="arama.html" className="d-block" title="Ara">
                                    <i className="fa fa-search text-white" />
                                </a>
                            </div>
                        </div>
                        <ul className="nav d-lg-none px-2">
                            <li className="nav-item">
                                <a href="arama.html" className="me-2 text-white" title="Ara">
                                    <i className="fa fa-search fa-lg" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#menu" title="Ana Menü" className="text-white">
                                    <i className="fa fa-bars fa-lg" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="main-menu navbar navbar-expand-lg d-none d-lg-block bg-white">
                    <div className="container">
                        <ul className="nav fw-semibold">
                            <li className="nav-item   ">
                                <a
                                    href="asayis.html"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Asayiş"
                                >
                                    Asayiş
                                </a>
                            </li>
                            <li className="nav-item   ">
                                <a
                                    href="dunya.html"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Dünya"
                                >
                                    Dünya
                                </a>
                            </li>
                            <li className="nav-item   ">
                                <a
                                    href="egitim.html"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Eğitim"
                                >
                                    Eğitim
                                </a>
                            </li>
                            <li className="nav-item   ">
                                <a
                                    href="ekonomi.html"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Ekonomi"
                                >
                                    Ekonomi
                                </a>
                            </li>
                            <li className="nav-item   ">
                                <a
                                    href="gundem.html"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Gündem"
                                >
                                    Gündem
                                </a>
                            </li>
                            <li className="nav-item   ">
                                <a
                                    href="resmi-ilanlar.html"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Resmi İlanlar"
                                >
                                    Resmi İlanlar
                                </a>
                            </li>
                            <li className="nav-item   ">
                                <a
                                    href="saglik.html"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Sağlık"
                                >
                                    Sağlık
                                </a>
                            </li>
                            <li className="nav-item   ">
                                <a
                                    href="siyaset.html"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Siyaset"
                                >
                                    Siyaset
                                </a>
                            </li>
                            <li className="nav-item   ">
                                <a
                                    href="spor.html"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Spor"
                                >
                                    Spor
                                </a>
                            </li>
                            <li className="nav-item   ">
                                <a
                                    href="teknoloji.html"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Teknoloji"
                                >
                                    Teknoloji
                                </a>
                            </li>
                            <li className="nav-item   ">
                                <a
                                    href="yasam.html"
                                    className="nav-link nav-link text-dark"
                                    target="_self"
                                    title="Yaşam"
                                >
                                    Yaşam
                                </a>
                            </li>
                        </ul>
                        <ul className="navigation-menu nav d-flex align-items-center">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link pe-0 text-dark"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    title="Ana Menü"
                                >
                                    <i className="fa fa-bars fa-lg" />
                                </a>
                                <div className="mega-menu dropdown-menu dropdown-menu-end text-capitalize shadow-lg border-0 rounded-0">
                                    <div className="row g-3 small p-3">
                                        <div className="col">
                                            <div className="extra-sections bg-light p-3 border">
                                                <a
                                                    href="yozgat-nobetci-eczaneler.html"
                                                    title="Yozgat Nöbetçi Eczaneler"
                                                    className="d-block border-bottom pb-2 mb-2"
                                                    target="_self"
                                                >
                                                    <i className="fa-solid fa-capsules me-2" />
                                                    Yozgat Nöbetçi Eczaneler
                                                </a>
                                                <a
                                                    href="yozgat-hava-durumu.html"
                                                    title="Yozgat Hava Durumu"
                                                    className="d-block border-bottom pb-2 mb-2"
                                                    target="_self"
                                                >
                                                    <i className="fa-solid fa-cloud-sun me-2" />
                                                    Yozgat Hava Durumu
                                                </a>
                                                <a
                                                    href="yozgat-namaz-vakitleri.html"
                                                    title="Yozgat Namaz Vakitleri"
                                                    className="d-block border-bottom pb-2 mb-2"
                                                    target="_self"
                                                >
                                                    <i className="fa-solid fa-mosque me-2" />
                                                    Yozgat Namaz Vakitleri
                                                </a>
                                                <a
                                                    href="yozgat-trafik-durumu.html"
                                                    title="Yozgat Trafik Yoğunluk Haritası"
                                                    className="d-block border-bottom pb-2 mb-2"
                                                    target="_self"
                                                >
                                                    <i className="fa-solid fa-car me-2" />
                                                    Yozgat Trafik Yoğunluk Haritası
                                                </a>
                                                <a
                                                    href="puan-durumu.html"
                                                    title="Puan Durumu"
                                                    className="d-block border-bottom pb-2 mb-2"
                                                    target="_self"
                                                >
                                                    <i className="fa-solid fa-chart-bar me-2" />
                                                    Puan Durumu
                                                </a>
                                                <a
                                                    href="tum-mansetler.html"
                                                    title="Tüm Manşetler"
                                                    className="d-block border-bottom pb-2 mb-2"
                                                    target="_self"
                                                >
                                                    <i className="fa-solid fa-newspaper me-2" />
                                                    Tüm Manşetler
                                                </a>
                                                <a
                                                    href="sondakika-haberleri.html"
                                                    title="Son Dakika Haberleri"
                                                    className="d-block pb-2 me-2"
                                                    target="_self"
                                                >
                                                    <i className="fa-solid fa-bell me-2" />
                                                    Son Dakika Haberleri
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <a
                                                href="asayis.html"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Asayiş"
                                            >
                                                Asayiş
                                            </a>
                                            <a
                                                href="dunya.html"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Dünya"
                                            >
                                                Dünya
                                            </a>
                                            <a
                                                href="egitim.html"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Eğitim"
                                            >
                                                Eğitim
                                            </a>
                                            <a
                                                href="ekonomi.html"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Ekonomi"
                                            >
                                                Ekonomi
                                            </a>
                                            <a
                                                href="gundem.html"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Gündem"
                                            >
                                                Gündem
                                            </a>
                                            <a
                                                href="haber.html"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Haber"
                                            >
                                                Haber
                                            </a>
                                            <a
                                                href="haber-reklam.html"
                                                className="d-block  pb-2 mb-2"
                                                target="_self"
                                                title="Haber Reklam"
                                            >
                                                Haber Reklam
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a
                                                href="is-ilanlari.html"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="İş İlanları"
                                            >
                                                İş İlanları
                                            </a>
                                            <a
                                                href="kultur-sanat.html"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Kültür-Sanat"
                                            >
                                                Kültür-Sanat
                                            </a>
                                            <a
                                                href="magazin.html"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Magazin"
                                            >
                                                Magazin
                                            </a>
                                            <a
                                                href="saglik.html"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Sağlık"
                                            >
                                                Sağlık
                                            </a>
                                            <a
                                                href="siyaset.html"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Siyaset"
                                            >
                                                Siyaset
                                            </a>
                                            <a
                                                href="spor.html"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Spor"
                                            >
                                                Spor
                                            </a>
                                            <a
                                                href="teknoloji.html"
                                                className="d-block  pb-2 mb-2"
                                                target="_self"
                                                title="Teknoloji"
                                            >
                                                Teknoloji
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a
                                                href="yasam.html"
                                                className="d-block border-bottom  pb-2 mb-2"
                                                target="_self"
                                                title="Yaşam"
                                            >
                                                Yaşam
                                            </a>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                        <a
                                            className="me-3"
                                            href="https://www.facebook.com/camlikgazetesi"
                                            target="_blank"
                                        >
                                            <i className="fab fa-facebook me-2 text-navy" /> Facebook
                                        </a>
                                        <a
                                            className="me-3"
                                            href="https://www.twitter.com/camlikgazetesi"
                                            target="_blank"
                                        >
                                            <i className="fab fa-x-twitter " /> Twitter
                                        </a>
                                        <a
                                            className="me-3"
                                            href="https://www.instagram.com/camlikmedyagrubuu"
                                            target="_blank"
                                        >
                                            <i className="fab fa-instagram me-2 text-magenta" /> Instagram
                                        </a>
                                        <a
                                            className="me-3"
                                            href="https://www.youtube.com/yozgatçamlıktv"
                                            target="_blank"
                                        >
                                            <i className="fab fa-youtube me-2 text-danger" /> Youtube
                                        </a>
                                        <a
                                            className="me-3"
                                            href="https://www.tiktok.com/yozgatçamlıktv"
                                            target="_blank"
                                        >
                                            <i className="fa-brands fa-tiktok me-1 text-dark" /> Tiktok
                                        </a>
                                        <a
                                            className="me-3"
                                            href="https://www.threads.com/yozgatçamlıktv"
                                            target="_blank"
                                        >
                                            <i className="fa-brands fa-threads me-1 text-dark" /> Threads
                                        </a>
                                        <a
                                            className=""
                                            href="https://api.whatsapp.com/send?phone=05056105829"
                                            title="Whatsapp"
                                        >
                                            <i className="fab fa-whatsapp me-2 text-navy" /> WhatsApp İhbar
                                            Hattı
                                        </a>{" "}
                                    </div>
                                    <div className="mega-menu-footer p-2 bg-te-color">
                                        <a
                                            className="dropdown-item text-white"
                                            href="kunye.html"
                                            title="Künye / İletişim"
                                        >
                                            <i className="fa fa-id-card me-2" /> Künye / İletişim
                                        </a>
                                        <a
                                            className="dropdown-item text-white"
                                            href="iletisim.html"
                                            title="Bize Ulaşın"
                                        >
                                            <i className="fa fa-envelope me-2" /> Bize Ulaşın
                                        </a>
                                        <a
                                            className="dropdown-item text-white"
                                            href="rss-baglantilari.html"
                                            title="RSS Bağlantıları"
                                        >
                                            <i className="fa fa-rss me-2" /> RSS Bağlantıları
                                        </a>
                                        <a
                                            className="dropdown-item text-white"
                                            href="member/login.html"
                                            title="Üyelik Girişi"
                                        >
                                            <i className="fa fa-user me-2" /> Üyelik Girişi
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className="mobile-categories d-lg-none list-inline bg-white">
                    <li className="list-inline-item">
                        <a href="asayis.html" className="text-dark" target="_self" title="Asayiş">
                            Asayiş
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="dunya.html" className="text-dark" target="_self" title="Dünya">
                            Dünya
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="egitim.html" className="text-dark" target="_self" title="Eğitim">
                            Eğitim
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                            href="ekonomi.html"
                            className="text-dark"
                            target="_self"
                            title="Ekonomi"
                        >
                            Ekonomi
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="gundem.html" className="text-dark" target="_self" title="Gündem">
                            Gündem
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                            href="resmi-ilanlar.html"
                            className="text-dark"
                            target="_self"
                            title="Resmi İlanlar"
                        >
                            Resmi İlanlar
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="saglik.html" className="text-dark" target="_self" title="Sağlık">
                            Sağlık
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                            href="siyaset.html"
                            className="text-dark"
                            target="_self"
                            title="Siyaset"
                        >
                            Siyaset
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="spor.html" className="text-dark" target="_self" title="Spor">
                            Spor
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                            href="teknoloji.html"
                            className="text-dark"
                            target="_self"
                            title="Teknoloji"
                        >
                            Teknoloji
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="yasam.html" className="text-dark" target="_self" title="Yaşam">
                            Yaşam
                        </a>
                    </li>
                </ul>
            </header>

        </>
    );
};
