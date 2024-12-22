import LastMinuteNews from "@/app/component/News/LastMinuteNews/LastMinuteNews";
import MainHeadlineNews from "@/app/component/News/MainHeadlineNews/MainHeadlineNews";

export default function Home() {
  return (
    <>
        <main className="index">
            <h1 className="d-none">Yozgat Haberleri</h1>
            {/* STORY HABERLER */}
            <section
                id="story-line"
                className="d-md-none bg-white"
                data-widget-unique-key=""
            >
                <div id="stories" className="storiesWrapper p-2" />
            </section>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n.header-7.slideUp {\n    -webkit-transform: translateY(-150px);\n    transform: translateY(-150px);\n}\n@media only screen and (min-width: 1020px) {\n    .five-headline img.mask { height: 295px;}\n    .main-headline img.mask { height: 390px;}\n}\n@media screen and (min-width: 1325px) and (max-width: 1620px) {\n    .container {width: 1020px!important; max-width: 1020px!important;}\n    #ad_36 {margin-right: 500px !important;}\n    #ad_9 {margin-left: 500px !important;}\n    .mega-menu {width: 1000px!important;}\n}\n@media screen and (min-width: 1295px) and (max-width: 1325px) {\n    .container {width: 990px!important; max-width: 990px!important;}\n    #ad_36 {margin-right: 485px !important;}\n    #ad_9 {margin-left: 485px !important;}\n    .mega-menu {width: 960px!important;}\n}\n@media screen and (min-width: 1260px) and (max-width: 1295px) {\n    .container {width: 960px!important; max-width: 960px!important;}\n    #ad_36 {margin-right: 470px !important;}\n    #ad_9 {margin-left: 470px !important;}\n    .mega-menu {width: 940px!important;}\n}\n@media screen and (min-width: 1200px) and (max-width: 1260px) {\n    .container {width: 900px!important; max-width: 900px!important;}\n    #ad_36 {margin-right: 440px !important;}\n    #ad_9 {margin-left: 440px !important;}\n    .mega-menu {width: 880px!important;}\n}\n"
                }}
            />{" "}
            <div
                id="ad_36"
                data-pagespeed="true"
                data-channel={36}
                data-advert="temedya"
                data-affix={1}
                className="pr-3 sticky-ad  d-none d-xl-block"
            />
            <div className="pl-3 sticky-ad  d-none d-xl-block"
            />
            <div className="container mt-3">
                {/* SON DAKİKA */}
                <section
                    className="last-minute bg-red p-2 mb-3"
                >
                    <div
                        className="position-relative overflow-hidden d-flex justify-content-start"
                        style={{ height: 27 }}
                    >
                        <div className="flex-shrink-1">
                            <a
                                href=""
                                className="text-warning d-none d-lg-inline-block text-uppercase"
                                target="_self"
                                title="Son Dakika"
                            >
                                <h2 className="h5 mb-0 text-nowrap">Son Dakika</h2>
                            </a>
                        </div>
                            <LastMinuteNews />

                    </div>
                </section>
                {/* ANA MANŞET */}
                <section
                    className="main-headline-1 mb-3"
                >
                    <div className="row g-2">
                        <div className="col-lg-8">
                            <MainHeadlineNews/>
                        </div>
                        <div
                            data-pagespeed="true"
                            data-advert="temedya"
                            data-channel={70}
                            className="col-12 d-lg-none"
                            id="ad_70"
                        />
                        <div className="col-lg-4">
                            <div className="row g-2">
                                <div className="col-6 col-lg-12">
                                    <div className="card border-0 rounded-0 featured-news bg-white">
                                        <a
                                            href="ankarada-arabasi-etkinliginde-hasret-giderilecek.html"
                                            title="Ankara'da Arabaşı Etkinliğinde hasret giderilecek"
                                            target="_self"
                                        >
                                            <img
                                                src="../yozgatcamlikcom.teimg.com/crop/419x246/yozgatcamlik-com/uploads/2024/12/whatsapp-image-2024-12-19-at-122201.html"
                                                loading="lazy"
                                                width={425}
                                                height={246}
                                                className="img-fluid"
                                                alt="Ankara'da Arabaşı Etkinliğinde hasret giderilecek"
                                            />
                                            <h4 className="mb-0 bg-light text-dark">
                                                Ankara'da Arabaşı Etkinliğinde hasret giderilecek
                                            </h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-12">
                                    <div className="card border-0 rounded-0 featured-news bg-white">
                                        <a
                                            href="yozgatta-gozuyasli-ailesinin-aci-gunu.html"
                                            title="Yozgat’ta Gözüyaşlı ailesinin acı günü"
                                            target="_self"
                                        >
                                            <img
                                                src="../yozgatcamlikcom.teimg.com/crop/419x246/yozgatcamlik-com/uploads/2024/12/gozuyasli-vefat.html"
                                                loading="lazy"
                                                width={425}
                                                height={246}
                                                className="img-fluid"
                                                alt="Yozgat’ta Gözüyaşlı ailesinin acı günü"
                                            />
                                            <h4 className="mb-0 bg-light text-dark">
                                                Yozgat’ta Gözüyaşlı ailesinin acı günü
                                            </h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </>
  );
}
