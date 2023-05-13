/**
 * combine multiple class strings
 
 * @link https://medium.datadriveninvestor.com/classnames-the-ngclass-of-react-244f81e5dc5d source
 * @example classNames('foo', ['bar', ''], { baz: false, bob: true }) // 'foo bar bob'
 *
 * @param string[] arg class name
 * @param array<string> arg class names grouped in array
 * @param object arg key value pair: boolean conditional decides application of class name string
 * @returns joined class names as single string
 */
export default function classNames(...args) {
  const classes = []
  for (const arg of args) {
    if (typeof arg === "string") {
      classes.push(arg)
    } else if (Array.isArray(arg)) {
      classes.push(classNames(...arg))
    } else if (typeof arg === "object" && arg !== null) {
      classes.push(classNames(...Object.keys(arg).filter((k) => arg[k])))
    }
  }
  return classes.join(" ")
}
