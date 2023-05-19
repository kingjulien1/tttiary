import Dropdown from "@components/dropdown"
import Icon from "@components/icon"
import group from "@utils/group"
import Link from "next/link"
import "./globals.css"
import links from "./links.json"
import Providers from "./providers"
import Routes from "./routing"
import Themes from "./theming"
import Image from "next/image"

const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]

export const metadata = {
  title: "tattiary",
  description: "Platform for tattoo artists & shops to announce residencies & guestspots",
}

export default function Root({ children }) {
  return (
    <html lang="en" className="m-0 scrollbar-hide">
      <body>
        <Providers>
          <main className="min-h-screen flex flex-col">
            <Navbar links={group(links.navbar, "group")} />
            {children}
          </main>
          <Footer links={group(links.footer, "group")} />
        </Providers>
      </body>
    </html>
  )
}

/**
 * navigation bar on very top of layout
 * @uses Themes client component waiting for theme context provided by {@see Providers }
 * @uses Routes client component waiting for routing system to highlight active links
 */
function Navbar({ links }) {
  return (
    <div className="absolute top-0 z-30 py-2 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100">
      <nav className="py-2 md:px-4 navbar">
        <div className="navbar-start">
          <Dropdown className="dropdown-bottom dropdown-start">
            <Dropdown.Button children={<Icon shape="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />} />
            <Dropdown.Menu children={<Routes routes={links} />} />
          </Dropdown>
        </div>
        <div className="navbar-end">
          <Dropdown className="dropdown-bottom dropdown-end">
            <Dropdown.Button children={<Icon shape="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />} />
            <Dropdown.Menu className="max-h-64 overflow-y-auto dropdown-content scrollbar-hide" children={<Themes themes={themes} />} />
          </Dropdown>
        </div>
      </nav>
    </div>
  )
}

/**
 * navigation & resource section on very end of layout
 */
function Footer({ links }) {
  return (
    <footer className="px-10 py-20 footer bg-base-200">
      <div>
        <Image height={50} width={50} src="/skull.png" alt="logo" />
        <div className="pt-4">
          <p className="mb-1 italic" children={`"My body is my journal, and my tattoos are my story."`} />
          <p className="text-xs" children="- Johnny Depp" />
        </div>
      </div>
      {Object.keys(links).map(topic => (
        <div key={topic}>
          <span className="footer-title" children={topic} />
          {links[topic].map(({ name, location }) => (
            <Link key={location} href={location} className="link link-hover" children={name} />
          ))}
        </div>
      ))}
    </footer>
  )
}
