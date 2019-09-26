export const countEachKey = keys => keys.reduce((result, key) => ({
  ...result, [key]: (result[key] || 0) + 1
}), {})

export const getMashedKeys = (...objects) => objects.reduce((res, obj) => [ ...res, ...Object.keys(obj) ], [])

export const checkDupes = keys => keys.filter((key, idx, ary) => ary.lastIndexOf(key) !== idx)

export const centsToDollars = (num) => {
  const dollars = num / 100
  return dollars.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
}
