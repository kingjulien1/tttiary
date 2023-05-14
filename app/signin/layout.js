export const metadata = {
  title: "sign in",
  description: "Sign into your account by linking your Instagram Account.",
}

export default function Layout({ children }) {
  return (
    <div className="pt-10 md:pt-0 px-4 h-full flex-1 grid grid-cols-1 items-center justify-items-center md:bg-gradient-to-br from-secondary to-accent">
      <div className="px-2 py-10 flex flex-col md:justify-center w-full max-w-sm md:bg-base-200 rounded-box md:shadow-2xl">{children}</div>
    </div>
  )
}
