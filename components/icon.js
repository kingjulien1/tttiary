/**
 * create icon by wrapping a given { @param {string} shape } path
 */
const Icon = ({ shape }) => <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" children={<path d={shape} />} />

export default Icon
