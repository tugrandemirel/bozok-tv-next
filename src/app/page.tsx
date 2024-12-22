import LastMinuteNews from "@/app/component/News/LastMinuteNews/LastMinuteNews";
import MainHeadlineNews from "@/app/component/News/MainHeadlineNews/MainHeadlineNews";
import {FeaturedNews} from "@/app/component/News/FeaturedNews/FeaturedNews";

export default function Home() {
    return (
        <>
            <main className="index">
                <h1 className="d-none">Yozgat Haberleri</h1>

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
                            style={{height: 27}}
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
                            <LastMinuteNews/>

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
                                className="col-12 d-lg-none"
                            />
                            <div className="col-lg-4">
                                <div className="row g-2">
                                    <FeaturedNews/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
