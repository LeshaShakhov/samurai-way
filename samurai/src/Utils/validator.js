

export const validate = (elementName, validator) => (values) => {
    const errors = {};
    validator(errors,values ,elementName)
    return errors;
}

export const maxLength = (limit) => (errors,values, elementName) => {
    if(limit && (values[elementName].length > limit)) {
        errors[elementName] = `Max limit ${limit} symbols`
    }
}

export const validEmail = (value) => {
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {

    }
}

