"use client"

import useMount from "@hooks/useMount"
import classNames from "@utils/classnames"
import { useTheme } from "next-themes"

/**
 * list of applicable themes
 *
 * @link https://daisyui.com/docs/themes/ docs
 * @param {array<string>} themes
 */
export default function Themes({ themes }) {
  const { setTheme, theme } = useTheme()
  const isMounted = useMount()

  if (!isMounted) return <div className="p-2 text-center text-xs font-sans font-semibold" children="loading themes..." />

  return (
    <ul className="grid grid-cols-1 gap-2">
      {themes.map(name => (
        <li key={name}>
          <a onClick={() => setTheme(name)} className={classNames({ active: name === theme }, "flex flex-row justify-between rounded-md")}>
            <span className="text-xs capitalize font-sans font-semibold" children={name} />
            <div data-theme={name} className="py-1 px-2 flex flex-row gap-1 rounded bg-transparent">
              <div className="bg-base-100 w-2 h-4 rounded" />
              <div className="bg-secondary w-2 h-4 rounded" />
              <div className="bg-accent w-2 h-4 rounded" />
              <div className="bg-neutral w-2 h-4 rounded" />
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
