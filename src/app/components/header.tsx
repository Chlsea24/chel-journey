"use client";
import styles from "../styles/header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Solveig Personal Web</div>

      <nav className={styles.nav}>
        <Link href="/#hero">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#timeline">Timeline</Link>
        <Link href="/#skills">Skills</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
