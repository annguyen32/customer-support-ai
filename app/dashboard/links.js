"use client";
import React, { useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
//import Home from "./home/home";

export function Links() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link
            className={`link ${pathname === "/home" ? "active" : ""}`}
            href="/home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/dashboard" ? "active" : ""}`}
            href="/dashboard"
          >
            Open New Tab
          </Link>
        </li>
      </ul>
    </nav>
  );
}
