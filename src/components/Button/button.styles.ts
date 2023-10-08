export const color_varient = (colorVarient: string | undefined) => {
  if (colorVarient === 'primary') {
    return 'bg-blue-500 text-white'
  } else if (colorVarient === 'secondary') {
    return 'bg-green-500 text-white'
  } else if (colorVarient === 'danger') {
    return 'bg-red-500 text-white'
  } else if (colorVarient === 'warning') {
    return 'bg-orange-500 text-white'
  } else {
    return 'bg-purple-500 text-white'
  }
}
