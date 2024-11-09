import { Link } from "@inertiajs/react";
import React from "react";

const Layout = ({ children }: React.ReactNode) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <main>{children}</main>
            </header>
        </>
    );
};

export default Layout;
