
export const changeObjectPropertyInArray = (array: Array<any>, propsObject: Object, arrayItemProp:string, itemId: number) => {
      return  array.map(item => {
                return (item[arrayItemProp] === itemId)
                    ? {...item, ...propsObject}
                    : item
    })
}