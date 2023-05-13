import Dropdown from "@components/dropdown"
import Icon from "@components/icon"
import group from "@utils/group"
import Link from "next/link"
import "./globals.css"
import links from "./links.json"
import Providers from "./providers"
import Routes from "./routing"
import Themes from "./theming"

const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]

export const metadata = {
  title: "tattiary",
  description: "Platform for tattoo artists & shops to announce residencies & guestspots",
}

export default function Root({ children }) {
  return (
    <html lang="en" className="m-0">
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
    <footer className="p-10 footer bg-base-200">
      <div>
        <Icon shape="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
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
