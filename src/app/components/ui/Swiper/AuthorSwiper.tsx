"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ROUTES, { createAuthorPath } from "@/constants/routes";

interface Author {
    id: number;
    name: string;
    slug: string;
    image: string;
    latest_post?: {
        title: string;
        slug: string;
    };
}

interface AuthorSwiperProps {
    authors: Author[];
}

const AuthorsSwiper: React.FC<AuthorSwiperProps> = ({ authors }) => {
    if (!authors || authors.length === 0) {
        return <div>Yazar bulunamadı</div>;
    }

    return (
        <div className="swiper authors-swiper">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    765: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 }
                }}
            >
                {authors.map((author) => (
                    <SwiperSlide key={author.id}>
                        <div className="card border-0 text-center p-3">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 align-self-center">
                                    <Link href={createAuthorPath(author.slug)} title={author.name} prefetch={false}>
                                        <Image
                                            src={author.image || '/test/default-author.jpg'}
                                            width={100}
                                            height={100}
                                            alt={author.name}
                                            className="img-fluid rounded-circle border"
                                            loading="lazy"
                                            quality={75}
                                            sizes="100px"
                                        />
                                    </Link>
                                </div>
                                <div className="flex-grow-1 ms-3 text-start">
                                    <Link
                                        href={createAuthorPath(author.slug)}
                                        title={author.name}
                                        className="author-name pb-1 mb-1 d-block"
                                        prefetch={false}
                                    >
                                        <span className="line-clamp-1">{author.name}</span>
                                    </Link>
                                    {author.latest_post && (
                                        <Link
                                            href={createAuthorPath(`${author.slug}/${author.latest_post.slug}`)}
                                            title={author.latest_post.title}
                                            className="h4 title-2-line"
                                            prefetch={false}
                                        >
                                            <span className="line-clamp-2">{author.latest_post.title}</span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AuthorsSwiper;
