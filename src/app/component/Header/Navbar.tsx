import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    return (
        <>
            <nav className="top-header navbar navbar-expand-lg navbar-dark bg-te-color py-1">
                <div className="container">
                    <Link className="navbar-brand me-0" href="/" title="Yozgat Haber, Yozgat&#039;ın Güvenilir Haber Kaynağı - Yozgat Çamlık Gazetesi">
                        <Image src="https://yozgatcamlikcom.teimg.com/yozgat-habertest-com/uploads/2024/10/camlik-logo-light.svg" alt="Yozgat Haber, Yozgat&#039;ın Güvenilir Haber Kaynağı - Yozgat Çamlık Gazetesi" width="214" height="40" className="light-mode img-fluid flow-logo"/>
                        <Image src="https://yozgatcamlikcom.teimg.com/yozgat-habertest-com/uploads/2024/10/camlik-logo-light.svg" alt="Yozgat Haber, Yozgat&#039;ın Güvenilir Haber Kaynağı - Yozgat Çamlık Gazetesi" width="214" height="40" className="dark-mode img-fluid flow-logo d-none"/>
                    </Link>
                    <div className="header-widgets d-lg-flex justify-content-end align-items-center d-none">
                        {/*HAVA DURUMU */}
                        <input type="hidden" name="widget_setting_weathercity" value="296562" />
                        <div className="prayer-top d-none d-lg-flex justify-content-between flex-column">
                            <select className="form-select bg-transparent border-0 text-white" name="city" defaultValue="yozgat">
                                <option value="adana" >Adana</option>
                                <option value="adiyaman" >Adıyaman</option>
                                <option value="afyonkarahisar" >Afyonkarahisar</option>
                                <option value="agri" >Ağrı</option>
                                <option value="aksaray" >Aksaray</option>
                                <option value="amasya" >Amasya</option>
                                <option value="ankara" >Ankara</option>
                                <option value="antalya" >Antalya</option>
                                <option value="ardahan" >Ardahan</option>
                                <option value="artvin" >Artvin</option>
                                <option value="aydin" >Aydın</option>
                                <option value="balikesir" >Balıkesir</option>
                                <option value="bartin" >Bartın</option>
                                <option value="batman" >Batman</option>
                                <option value="bayburt" >Bayburt</option>
                                <option value="bilecik" >Bilecik</option>
                                <option value="bingol" >Bingöl</option>
                                <option value="bitlis" >Bitlis</option>
                                <option value="bolu" >Bolu</option>
                                <option value="burdur" >Burdur</option>
                                <option value="bursa" >Bursa</option>
                                <option value="canakkale" >Çanakkale</option>
                                <option value="cankiri" >Çankırı</option>
                                <option value="corum" >Çorum</option>
                                <option value="denizli" >Denizli</option>
                                <option value="diyarbakir" >Diyarbakır</option>
                                <option value="duzce" >Düzce</option>
                                <option value="edirne" >Edirne</option>
                                <option value="elazig" >Elazığ</option>
                                <option value="erzincan" >Erzincan</option>
                                <option value="erzurum" >Erzurum</option>
                                <option value="eskisehir" >Eskişehir</option>
                                <option value="gaziantep" >Gaziantep</option>
                                <option value="giresun" >Giresun</option>
                                <option value="gumushane" >Gümüşhane</option>
                                <option value="hakkari" >Hakkâri</option>
                                <option value="hatay" >Hatay</option>
                                <option value="igdir" >Iğdır</option>
                                <option value="isparta" >Isparta</option>
                                <option value="istanbul" >İstanbul</option>
                                <option value="izmir" >İzmir</option>
                                <option value="kahramanmaras" >Kahramanmaraş</option>
                                <option value="karabuk" >Karabük</option>
                                <option value="karaman" >Karaman</option>
                                <option value="kars" >Kars</option>
                                <option value="kastamonu" >Kastamonu</option>
                                <option value="kayseri" >Kayseri</option>
                                <option value="kilis" >Kilis</option>
                                <option value="kirikkale" >Kırıkkale</option>
                                <option value="kirklareli" >Kırklareli</option>
                                <option value="kirsehir" >Kırşehir</option>
                                <option value="kocaeli" >Kocaeli</option>
                                <option value="konya" >Konya</option>
                                <option value="kutahya" >Kütahya</option>
                                <option value="malatya" >Malatya</option>
                                <option value="manisa" >Manisa</option>
                                <option value="mardin" >Mardin</option>
                                <option value="mersin" >Mersin</option>
                                <option value="mugla" >Muğla</option>
                                <option value="mus" >Muş</option>
                                <option value="nevsehir" >Nevşehir</option>
                                <option value="nigde" >Niğde</option>
                                <option value="ordu" >Ordu</option>
                                <option value="osmaniye" >Osmaniye</option>
                                <option value="rize" >Rize</option>
                                <option value="sakarya" >Sakarya</option>
                                <option value="samsun" >Samsun</option>
                                <option value="sanliurfa" >Şanlıurfa</option>
                                <option value="siirt" >Siirt</option>
                                <option value="sinop" >Sinop</option>
                                <option value="sivas" >Sivas</option>
                                <option value="sirnak" >Şırnak</option>
                                <option value="tekirdag" >Tekirdağ</option>
                                <option value="tokat" >Tokat</option>
                                <option value="trabzon" >Trabzon</option>
                                <option value="tunceli" >Tunceli</option>
                                <option value="usak" >Uşak</option>
                                <option value="van" >Van</option>
                                <option value="yalova" >Yalova</option>
                                <option value="yozgat"   >Yozgat</option>
                                <option value="zonguldak" >Zonguldak</option>
                            </select>
                            <div className="text-white text-end"> <span className="text-cyan">İmsak</span> 20:57
                            </div>
                        </div>
                        <div className="weather-top weather-widget d-none d-lg-flex justify-content-between flex-column">
                            <div className="weather">
                                <select className="form-select bg-transparent border-0 text-white" name="city" defaultValue="296562">
                                    <option value="325361" >
                                        Adana</option>
                                    <option value="325329" >
                                        Adıyaman</option>
                                    <option value="325303" >
                                        Afyonkarahisar</option>
                                    <option value="325163" >
                                        Ağrı</option>
                                    <option value="324496" >
                                        Aksaray</option>
                                    <option value="752014" >
                                        Amasya</option>
                                    <option value="323786" >
                                        Ankara</option>
                                    <option value="323776" >
                                        Antalya</option>
                                    <option value="751952" >
                                        Ardahan</option>
                                    <option value="751816" >
                                        Artvin</option>
                                    <option value="322819" >
                                        Aydın</option>
                                    <option value="322164" >
                                        Balıkesir</option>
                                    <option value="862467" >
                                        Bartın</option>
                                    <option value="321836" >
                                        Batman</option>
                                    <option value="750938" >
                                        Bayburt</option>
                                    <option value="750598" >
                                        Bilecik</option>
                                    <option value="321082" >
                                        Bingöl</option>
                                    <option value="321025" >
                                        Bitlis</option>
                                    <option value="750516" >
                                        Bolu</option>
                                    <option value="320390" >
                                        Burdur</option>
                                    <option value="750269" >
                                        Bursa</option>
                                    <option value="749780" >
                                        Çanakkale</option>
                                    <option value="749747" >
                                        Çankırı</option>
                                    <option value="748879" >
                                        Çorum</option>
                                    <option value="317109" >
                                        Denizli</option>
                                    <option value="316541" >
                                        Diyarbakır</option>
                                    <option value="747764" >
                                        Düzce</option>
                                    <option value="747711" >
                                        Edirne</option>
                                    <option value="315807" >
                                        Elazığ</option>
                                    <option value="315373" >
                                        Erzincan</option>
                                    <option value="315367" >
                                        Erzurum</option>
                                    <option value="315202" >
                                        Eskişehir</option>
                                    <option value="314830" >
                                        Gaziantep</option>
                                    <option value="746881" >
                                        Giresun</option>
                                    <option value="746425" >
                                        Gümüşhane</option>
                                    <option value="312888" >
                                        Hakkâri</option>
                                    <option value="312394" >
                                        Hatay</option>
                                    <option value="443184" >
                                        Iğdır</option>
                                    <option value="311073" >
                                        Isparta</option>
                                    <option value="745044" >
                                        İstanbul</option>
                                    <option value="311044" >
                                        İzmir</option>
                                    <option value="310859" >
                                        Kahramanmaraş</option>
                                    <option value="744562" >
                                        Karabük</option>
                                    <option value="309527" >
                                        Karaman</option>
                                    <option value="743952" >
                                        Kars</option>
                                    <option value="743882" >
                                        Kastamonu</option>
                                    <option value="308464" >
                                        Kayseri</option>
                                    <option value="307864" >
                                        Kilis</option>
                                    <option value="307654" >
                                        Kırıkkale</option>
                                    <option value="743166" >
                                        Kırklareli</option>
                                    <option value="307515" >
                                        Kırşehir</option>
                                    <option value="742865" >
                                        Kocaeli</option>
                                    <option value="306571" >
                                        Konya</option>
                                    <option value="305268" >
                                        Kütahya</option>
                                    <option value="304922" >
                                        Malatya</option>
                                    <option value="304827" >
                                        Manisa</option>
                                    <option value="304797" >
                                        Mardin</option>
                                    <option value="311728" >
                                        Mersin</option>
                                    <option value="304184" >
                                        Muğla</option>
                                    <option value="304081" >
                                        Muş</option>
                                    <option value="303831" >
                                        Nevşehir</option>
                                    <option value="303827" >
                                        Niğde</option>
                                    <option value="741100" >
                                        Ordu</option>
                                    <option value="303195" >
                                        Osmaniye</option>
                                    <option value="740483" >
                                        Rize</option>
                                    <option value="740352" >
                                        Sakarya</option>
                                    <option value="740264" >
                                        Samsun</option>
                                    <option value="298333" >
                                        Şanlıurfa</option>
                                    <option value="300822" >
                                        Siirt</option>
                                    <option value="739600" >
                                        Sinop</option>
                                    <option value="300619" >
                                        Sivas</option>
                                    <option value="300640" >
                                        Şırnak</option>
                                    <option value="738926" >
                                        Tekirdağ</option>
                                    <option value="738743" >
                                        Tokat</option>
                                    <option value="738648" >
                                        Trabzon</option>
                                    <option value="298846" >
                                        Tunceli</option>
                                    <option value="298299" >
                                        Uşak</option>
                                    <option value="298113" >
                                        Van</option>
                                    <option value="738025" >
                                        Yalova</option>
                                    <option value="296562" >
                                        Yozgat</option>
                                    <option value="737022" >
                                        Zonguldak</option>
                                </select>
                            </div>
                            <div className="weather-degree text-light text-end">
                                <i className="icon wi wi-cloudy text-warning me-2"></i>
                                <span className="degree text-white">10<sup>°</sup>C</span>
                            </div>
                        </div>
                        <div data-location='{" city":"TUXX0014"}' className="d-none"></div>
                        {/*PİYASALAR */}
                        <div className="parite-top position-relative overflow-hidden" style={{ "height": "40px"}}>
                            <div className="newsticker">
                                <ul className="newsticker__h4 list-unstyled text-white small" data-header="8">
                                    <li className="newsticker__item dollar">
                                        <div>DOLAR <i className="fa fa-caret-up text-cyan ms-1"></i> </div>
                                        <div className="fw-bold d-inline-block">35,11</div><span
                                        className="text-cyan d-inline-block ms-1">0.18</span>
                                    </li>
                                    <li className="newsticker__item euro">
                                        <div>EURO <i className="fa fa-caret-up text-cyan ms-1"></i> </div>
                                        <div className="fw-bold d-inline-block">36,55</div><span
                                        className="text-cyan d-inline-block ms-1">0.39</span>
                                    </li>
                                    <li className="newsticker__item euro">
                                        <div>STERLIN <i className="fa fa-caret-up text-cyan ms-1"></i> </div>
                                        <div className="fw-bold d-inline-block">44,21</div><span
                                        className="text-cyan d-inline-block ms-1">0.05</span>
                                    </li>
                                    <li className="newsticker__item sterlin">
                                        <div>ALTIN <i className="fa fa-caret-up text-cyan ms-1"></i> </div>
                                        <div className="fw-bold d-inline-block">2.924,42</div><span
                                        className="text-cyan d-inline-block ms-1">0.14</span>
                                    </li>
                                    <li className="newsticker__item bist">
                                        <div>BİST100 <i className="fa fa-caret-down text-danger ms-1"></i></div>
                                        <div className="fw-bold d-inline-block">9.765</div><span className="text-danger d-inline-block ms-1">-1.52</span>
                                    </li>
                                    <li className="newsticker__item btc">
                                        <div>BITCOIN <i className="fa fa-caret-down text-danger ms-1"></i> </div>
                                        <div className="fw-bold d-inline-block">99.900</div><span className="text-danger d-inline-block ms-1">-4.4</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*PİYASALAR */}
                        <div className="0">
                            <Link href="foto-galeri.html" className="text-center d-block mt-1 " target="_self" title="Foto Galeri">
                                <div className="small text-white lh-1">Foto Galeri</div>
                                <i className="fa fa-camera me-1 text-warning"></i>    </Link>
                        </div>
                        <div className="1">
                            <Link href="video.html" className="text-center d-block mt-1 " target="_self" title="Çamlık TV">
                                <div className="small text-white lh-1">Çamlık TV</div>
                                <i className="fa fa-video me-1 text-warning"></i>    </Link>
                        </div>
                        <div className="2">
                            <Link href="yazarlar.html" className="text-center d-block mt-1 " target="_self" title="Yazarlar">
                                <div className="small text-white lh-1">Yazarlar</div>
                                <i className="fa fa-pen-nib me-1 text-warning"></i>    </Link>
                        </div>
                        <div className="top-social-media">
                            <Link href="https://www.facebook.com/camlikgazetesi" className="ms-2" target="_blank"><i className="fab fa-facebook-f text-white"></i></Link>
                            <Link href="https://www.twitter.com/camlikgazetesi" className="ms-2" target="_blank"><i className="fab fa-x-twitter text-white"></i></Link>
                            <Link href="https://www.instagram.com/camlikmedyagrubuu" className="ms-2" target="_blank"><i className="fab fa-instagram text-white"></i></Link>
                            <Link href="https://www.youtube.com/yozgatçamlıktv" className="ms-2" target="_blank"><i className="fab fa-youtube text-white"></i></Link>
                        </div>
                        <div className="search-top">
                            <Link href="arama.html" className="d-block" title="Ara">
                                <i className="fa fa-search text-white"></i>
                            </Link>
                        </div>
                    </div>
                    <ul className="nav d-lg-none px-2">
                        <li className="nav-item"><Link href="arama.html" className="me-2 text-white" title="Ara"><i className="fa fa-search fa-lg"></i></Link></li>
                        <li className="nav-item"><Link href="#menu" title="Ana Menü" className="text-white"><i className="fa fa-bars fa-lg"></i></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
