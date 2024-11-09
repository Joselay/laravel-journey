/// <reference types="vite/client" />
import "./bootstrap";
import "../css/app.css";
import { createInertiaApp } from "@inertiajs/react";
import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layouts/Layout";

createInertiaApp({
    resolve: (name) => {
        const pages: Record<string, { default: React.FC }> = import.meta.glob(
            "./Pages/**/*.tsx",
            {
                eager: true,
            }
        );

        let page = pages[`./Pages/${name}.tsx`];
        page.default.layout =
            page.default.layout ||
            ((page: React.ReactNode) => <Layout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
