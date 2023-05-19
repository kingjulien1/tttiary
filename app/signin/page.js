export default function Signin() {
  return (
    <div className="px-4 flex flex-col">
      <div className="divider text-center text-xl md:text-2xl font-medium">Join the Network</div>
      <div className="py-6 flex flex-col gap-4">
        <button className="btn btn-outline">Sign in with Instagram</button>
        <p className="pt text-xs text-base-content text-opacity-50">Accounts on Tattiary are closely related to your linked instagram account. We reuse stuff like username, profile picture, etc. and always keep everything up to date. That way you can save yourself time & trouble. </p>
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
