import classNames from "@utils/classnames"

/**
 * @link https://daisyui.com/components/dropdown/ docs
 * @uses Dropdown.Button
 * @uses Dropdown.Menu
 */
const Dropdown = ({ children, className }) => <div className={classNames("dropdown dropdown-hover group", className)} children={children} />

/**
 * dropdown toggle
 * @see Dropdown.Menu opens / closes on press
 */
const Button = ({ children, className }) => <label tabIndex={0} className={classNames("group-hover:bg-base-200", className)} children={children} />

/**
 * dropdown menu
 * @link https://daisyui.com/components/menu/ docs
 */
const Menu = ({ children, className }) => <ul tabIndex={0} className={classNames(className, "dropdown-content")} children={[children, <li className="hidden" key="last" />]} />

/**
 * menu section header
 */
Menu.Title = ({ children, className }) => <li className={classNames("menu-title", className)} children={<span children={children} />} />

Dropdown.Button = Button
Dropdown.Menu = Menu

export default Dropdown
