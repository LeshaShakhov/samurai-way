export const validate = (elementName:any, validator:Function) => (values :any) => {
    const errors = {};
    validator(errors,values ,elementName)
    return errors;
}

export const maxLength = (limit:number) => (errors: any,values: any, elementName:any) => {
    if(limit && (values[elementName].length > limit)) {
        errors[elementName] = `Max limit ${limit} symbols`
    }
}

export const validEmail = (value:string) => {
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {

    }
}


export const parseServerResponse = (messages:Array<string>, actions?:any) => {
    const errors : any = {
    };

    messages.map( message => {
        if(message.includes('Invalid url format')) {
            const fieldName = message.toLowerCase().slice(message.indexOf('->') + 2, -1) ;
            errors[fieldName] = 'Valid url format https://site.com';
        } else {
            actions.setStatus(message);
        }
    });

    return errors
}



