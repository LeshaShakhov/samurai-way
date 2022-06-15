
export const transformDate = (dateString:string) => {
    let d: Date | string[] = new Date(dateString)
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2))

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}
