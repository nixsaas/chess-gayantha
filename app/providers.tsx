"use client"

import type React from "react"
import SmoothScroll from "@/components/smooth-scroll"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScroll />
      {children}
    </>
  )
}

