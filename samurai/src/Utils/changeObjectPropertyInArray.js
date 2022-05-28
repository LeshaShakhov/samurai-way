
export const changeObjectPropertyInArray = (array, propsObject, arrayItemProp, itemId) => {
      return  array.map(item => {
                return (item[arrayItemProp] === itemId)
                    ? {...item, ...propsObject}
                    : item
    })
}