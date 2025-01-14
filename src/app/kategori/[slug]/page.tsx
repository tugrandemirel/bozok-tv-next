import MainHeadlineSwiper from "@/app/components/ui/Swiper/News/MainHeadlineSwiper";
import Link from "next/link";

interface getCategoryNewsProps {
  params: {
    slug: string;
  };
}

export default  function getCategoryNews() {
  return (
    <>
      <main className="single">
        <div className="category-page">
          <div
            className="page-header py-2  bg-gradient-purple"
            style={{ backgroundColor: "#000" }}
          >
            <div className="container d-flex justify-content-between align-items-center">
              <h1 className="text-white h3 m-0 text-truncate">Eğitim</h1>
              <div className="d-flex flex-nowrap">
                <a href="rss/egitim" className="btn btn-warning btn-sm">
                  <i className="fa fa-rss" />
                </a>
              </div>
            </div>
          </div>
          <div className="container">
 
            <div
              className="pr-3 sticky-ad  d-none d-xl-block"
            />
            <div
              className="pl-3 sticky-ad  d-none d-xl-block"
            />
            <div className="category-section mt-3">
              <div className="row g-3">
                <div className="col-lg-8 mb-3">
                    <MainHeadlineSwiper newsletters={[]} />
                  <div className="row g-2">

                    <div className="col-6">
                      <div className="card border-0 h-100">
                        <a
                          href="yarin-16-aralik-2024-yozgatta-okullar-tatil-mi-son-dakika-valilik-aciklamasi-ne.html"
                          title="Yarın 16 Aralık 2024 Yozgat'ta Okullar Tatil mi? Son Dakika Valilik Açıklaması Ne?"
                        >
                          <img
                            className="img-fluid"
                            src="../yozgatcamlikcom.teimg.com/crop/640x375/yozgatcamlik-com/uploads/2024/12/yozgat-valiligi-uyardi.html"
                            loading="lazy"
                            alt="Yarın 16 Aralık 2024 Yozgat'ta Okullar Tatil mi? Son Dakika Valilik Açıklaması Ne?"
                            width={426}
                            height={245}
                          />
                        </a>
                        <div className="card-body p-3">
                          <h4 className="mb-0">
                            <a
                              href="yarin-16-aralik-2024-yozgatta-okullar-tatil-mi-son-dakika-valilik-aciklamasi-ne.html"
                              title="Yarın 16 Aralık 2024 Yozgat'ta Okullar Tatil mi? Son Dakika Valilik Açıklaması Ne?"
                              target="_self"
                            >
                              Yarın 16 Aralık 2024 Yozgat'ta Okullar Tatil mi?
                              Son Dakika Valilik Açıklaması Ne?
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
