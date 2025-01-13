"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  const [showLoading, setShowLoading] = useState(true);

  const handleTransitionComplete = () => {
    // Remove component after animation completes
    setTimeout(() => {
      setShowLoading(false);
    }, 700); // Match the duration in Loading component
  };

  // Prevent scroll on body while loading is shown
  useEffect(() => {
    if (showLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showLoading]);

  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black`}>
        {showLoading ? (
          <Loading onRenderComplete={handleTransitionComplete} />
        ) : (
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        )}
      </body>
    </html>
  );
}

import { Providers } from "./providers";
