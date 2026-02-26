"use client";
import { useState } from "react";
import styles from "../styles/header.module.css";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Chelsea Personal Journey</div>

      {/* Hamburger */}
      <div
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
        <Link href="/#hero" onClick={handleClick}>Home</Link>
        <Link href="/#about" onClick={handleClick}>About</Link>
        <Link href="/#timeline" onClick={handleClick}>Timeline</Link>
        <Link href="/#skills" onClick={handleClick}>Skills</Link>
        <Link href="/#contact" onClick={handleClick}>Contact</Link>
      </nav>
    </header>
  );
}