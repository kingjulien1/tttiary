"use client"

import { useEffect, useState } from "react"

/**
 * determine rendering status of client components
 *
 * @return {bool} true if client side mounted, false else
 */
export default function useMount() {
  const [isMounted, mount] = useState()

  useEffect(() => mount(true), [])

  return isMounted
}
