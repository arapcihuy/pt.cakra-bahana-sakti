"use client";
import React, { useEffect, useState, useRef, useContext } from "react";
import { CartSidebarOpenContext } from "@/components/CartSidebarOpenContext";
import { usePathname } from "next/navigation";

export function ScrollToTopButton() {
  // console.log("ScrollToTopButton rendered");
  const [show, setShow] = useState(false);
  const [hideForCheckout, setHideForCheckout] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { open: cartOpen } = useContext(CartSidebarOpenContext) || { open: false };
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setShow(false); // Sembunyikan tombol saat scroll
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        if (window.scrollY > 100) setShow(true); // Tampilkan jika sudah scroll ke bawah
      }, 2000); // 2 detik diam
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Hide if checkout modal/dialog is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkDialog = () => {
      const isOpen = !!(
        document.querySelector('.DialogContent[data-state="open"]') ||
        document.querySelector('.sheet[data-state="open"]') ||
        document.querySelector('[role="dialog"][data-state="open"]')
      );
      setHideForCheckout(isOpen);
    };
    const observer = new MutationObserver(checkDialog);
    observer.observe(document.body, { childList: true, subtree: true });
    checkDialog();
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Hanya render tombol jika show true dan cart sidebar tidak terbuka
  if (!show || cartOpen || hideForCheckout) return null;

  // Responsive bottom position: higher on mobile and even higher on desktop to avoid overlap with cart icon
  let bottomPx = 120; // desktop: 120px from bottom
  if (typeof window !== 'undefined' && window.innerWidth <= 640) {
    bottomPx = 100; // mobile: 100px from bottom
  }

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: bottomPx,
        right: 32,
        zIndex: 1050,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#2563eb",
        color: "#fff",
        border: "none",
        boxShadow: "0 4px 16px rgba(37,99,235,0.25)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 32,
        transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
      }}
      aria-label="Scroll to top"
      onMouseOver={e => (e.currentTarget.style.background = '#1d4ed8')}
      onMouseOut={e => (e.currentTarget.style.background = '#2563eb')}
      onFocus={e => (e.currentTarget.style.background = '#1d4ed8')}
      onBlur={e => (e.currentTarget.style.background = '#2563eb')}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    </button>
  );
} 