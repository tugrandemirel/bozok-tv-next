"use client"
import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import apiClient from "@/utils/apiClient";
import API_URLS from "@/constants/apiUrls";
import ROUTES, { createNewsPath } from "@/constants/routes";

export const TabNews = ({ slug }) => {
    const [newsletters, setNewsletters] =  useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getNewsletters = async () => {
            try {
                setIsLoading(true)
                const response = await apiClient.get(API_URLS.CATEGORY_NEWSLETTERS + '/' + slug)
                setNewsletters(response.data.data.data)
            } catch (error) {
                console.error('Haberler yüklenirken hata oluştu:', error)
            } finally {
                setIsLoading(false)
            }
        }
        getNewsletters()
    }, [slug])

    if (isLoading) {
        return (
            <div className="row g-3 result overflow-hidden justify-content-center align-items-center" style={{ minHeight: 500 }}>
                <div className="col-12 spinner-border d-flex align-items-center justify-content-center" role="status">
                    <span className="visually-hidden">Yükleniyor...</span>
                </div>
            </div>
        )
    }

    if (newsletters.length === 0) {
        return (
            <div className="row g-3 result overflow-hidden justify-content-center align-items-center" style={{ minHeight: 500 }}>
                <div className="col-12 text-center">Haber bulunamadı</div>
            </div>
        )
    }

    const { singleNewsletter, otherNewsletters } = parseNewsletters(newsletters)
    const apiUrl = process.env.NEXT_PUBLIC_URL

    return (
        <>
            <div className="row g-3 result overflow-hidden" style={{ minHeight: 500 }}>
                <div className="col-lg-6">
                    <Link
                        href={createNewsPath(singleNewsletter[0]?.slug)}
                        title={singleNewsletter[0]?.title}
                        className="top-mask position-relative d-block overflow-hidden"
                        prefetch={false}
                    >
                        <Image
                            src={singleNewsletter[0]?.image ? `${apiUrl}${singleNewsletter[0]?.image?.path}` : '/test/default.jpg'}
                            width={620}
                            height={455}
                            loading="lazy"
                            className="img-fluid"
                            alt={singleNewsletter[0]?.title || 'Haber görseli'}
                            quality={75}
                            sizes="(max-width: 768px) 100vw, 620px"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR"
                        />
                        <div className="title-bg-area">
                            <h3 className="text-white mb-0 mt-1 line-clamp-2">{singleNewsletter[0]?.title}</h3>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <div className="row g-3">
                        {otherNewsletters.map((newsletter, index) => (
                            <div className="col-6" key={newsletter?.id || index}>
                                <Link
                                    href={createNewsPath(newsletter?.slug)}
                                    title={newsletter?.title}
                                    prefetch={false}
                                >
                                    <Image
                                        src={newsletter?.image ? `${apiUrl}${newsletter?.image?.path}` : '/test/default.jpg'}
                                        width={300}
                                        height={175}
                                        loading="lazy"
                                        className="img-fluid"
                                        alt={newsletter?.title || 'Haber görseli'}
                                        quality={75}
                                        sizes="(max-width: 768px) 100vw, 300px"
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR"
                                    />
                                    <h5 className="title-2-line mt-1 mb-0 line-clamp-2">{newsletter?.title}</h5>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const parseNewsletters = (newsletters) => {
    const singleNewsletter = newsletters.slice(0, 1)
    const otherNewsletters = newsletters.slice(1, 5)
    return {
        singleNewsletter,
        otherNewsletters
    }
}