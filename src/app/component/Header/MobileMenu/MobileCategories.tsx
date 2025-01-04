import Link from "next/link";
import React from "react";
import {MobileMenuProps} from "@/types/category";

export const MobileCategories: React.FC<MobileMenuProps> = ({ categories }) => {
    return (
        <>
            <ul className="mobile-categories d-lg-none list-inline bg-white">
                {categories && categories.map((item, index) => (
                    <li className="list-inline-item" key={index}>
                        <Link href="/" className="text-dark" target="_self" title={item.name}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
