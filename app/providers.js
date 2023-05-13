"use client"

import { ThemeProvider } from "next-themes"

/**
 * provide context
 */
export default function Providers({ children }) {
  return <ThemeProvider children={children} />
}
