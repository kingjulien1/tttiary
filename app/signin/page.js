import Icon from "@components/icon"

export default function Signin() {
  return (
    <div className="px-4 flex flex-col">
      <div className="pb-6 flex flex-row items-center justify-center space-x-4">
        <h1 className="text-center text-2xl font-medium">Sign in</h1>
        <Icon className="h-7 w-7" shape="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </div>
      <div className="my-8 flex flex-col gap-4">
        <button className="btn btn-outline">Sign in with Instagram</button>
        <p className="pt text-xs text-base-content text-opacity-60">Accounts on Tattiary are closely related to your linked instagram account. We reuse stuff like username, profile picture, etc. and always keep everything up to date. That way you can save yourself time & trouble. </p>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input type="checkbox" checked className="checkbox" />
        </label>
      </div>
    </div>
  )
}
