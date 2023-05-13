"use client"

import Dropdown from "@components/dropdown"
import Icon from "@components/icon"
import useMount from "@hooks/useMount"
import classNames from "@utils/classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment } from "react"

/**
 * list of links to navigate
 *
 * @uses useMount render fallback before client side routing is available
 * @param {array<object>} routes links
 */
export default function Routes({ routes }) {
  const isMounted = useMount()
  const path = usePathname()

  if (!isMounted) return <div className="p-2 text-center text-xs font-sans font-semibold" children="loading links..." />

  return Object.keys(routes).map(topic => (
    <Fragment key={topic}>
      <Dropdown.Menu.Title children={topic} />
      {routes[topic].map(({ name, location, icon, isPublic }) => (
        <li key={name} className={classNames({ hidden: !isPublic })}>
          <Link href={location} className={classNames({ active: path === location })} children={[<Icon shape={icon} key="icon" />, name]} />
        </li>
      ))}
    </Fragment>
  ))
}
