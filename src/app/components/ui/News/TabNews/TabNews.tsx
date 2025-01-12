"use client"
import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import apiClient from "@/utils/apiClient";
import API_URLS from "@/constants/apiUrls";

export const TabNews = ({ slug }) => {
    const [newsletters, setNewsletters] =  useState<any[]>([])
    useEffect(() => {
        const getNewsletters = async () => {
            const response = await apiClient.get(API_URLS.CATEGORY_NEWSLETTERS + '/' + slug)
            setNewsletters(response.data.data.data)
        }
        getNewsletters()
    }, [slug])

    if (newsletters.length === 0) {
        return  <div className="row g-3 result overflow-hidden justify-content-center align-items-center" style={{ minHeight: 500 }}><div className="col-12 spinner-border d-flex align-items-center justify-content-center" role="status">
            <span className="sr-only">Yükleniyor...</span>
        </div></div>;
    }
    const { singleNewsletter, otherNewsletters } = parseNewsletters(newsletters)
    const apiUrl = process.env.NEXT_PUBLIC_URL
    return (
        <>
            <div className="row g-3 result overflow-hidden" style={{ minHeight: 500 }}>
                <div className="col-lg-6">
                    <Link
                        href="/"
                        title={singleNewsletter[0]?.title}
                        target="_self"
                        className="top-mask position-relative d-block overflow-hidden"
                    >
                        <Image
                            src={singleNewsletter[0]?.image ? `${apiUrl}${singleNewsletter[0]?.image?.path}` : '/test/yozgat-20.jpg'}
                            width={620}
                            height={455}
                            loading="lazy"
                            className="img-fluid"
                            alt={singleNewsletter[0]?.title}
                        />
                        <div className="title-bg-area">
                            <h3 className="text-white mb-0 mt-1">{singleNewsletter[0]?.title}</h3>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <div className="row g-3">
                        {otherNewsletters.map((newsletter, index) => {
                            return (
                                    <div className="col-6" key={index}>
                                        <Link
                                            href="/"
                                            title={newsletter?.title}
                                        >
                                            <Image
                                                src={newsletter?.image ? `${apiUrl}${newsletter?.image?.path}` : '/test/yozgat-20.jpg'}
                                                width={300}
                                                height={175}
                                                loading="lazy"
                                                className="img-fluid"
                                                alt={newsletter?.title}
                                            />
                                            <h5 className="title-2-line mt-1 mb-0">{newsletter?.title}</h5>
                                        </Link>
                                    </div>
                            )
                        })}
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