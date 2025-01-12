"use client"
import Link from "next/link";
import React, { useState } from "react";
import { TabNews } from "./TabNews";

interface TabNewsClientProps {
    tabs: Array<{
        id: number;
        title: string;
        slug: string;
    }>;
    initialSlug: string;
}

export const TabNewsClient: React.FC<TabNewsClientProps> = ({ tabs, initialSlug }) => {
    const [activeTab, setActiveTab] = useState(initialSlug);

    return (
        <>
            <ul
                className="nav nav-pills nav-justified mb-2 tabMenu1"
                id="pills-tab-news"
            >
                {tabs.map((tab) => (
                    <li className={`nav-item ${activeTab === tab.slug ? "active" : ""}`}
                        key={tab.id}
                        onClick={() => setActiveTab(tab.slug)}
                    >
                        <Link
                            className={`nav-link text-uppercase ${activeTab === tab.slug ? "active" : ""}`}
                            href="javascript:void(0)"
                            title={tab.title}
                        >
                            {tab.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="tab-content" id="pills-news-tabContent">
                <TabNews slug={tabs.find((tab) => tab.slug === activeTab)?.slug} />
            </div>
        </>
    );
};