/**
 * group items by a given key
 *
 * @link https://stackoverflow.com/a/46431916 source
 * @example group([{name : 'foo', group : 1}, {name : 'bar', group : 1}], 'group') // [1: [{name : 'foo', group : 1}, {name : 'bar', group : 1}]]
 *
 * @param {array<object>} items
 * @param {string} key common key in items
 * @return {array<string, object>} grouped items
 */
export default function group(items, key) {
  return items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  )
}
