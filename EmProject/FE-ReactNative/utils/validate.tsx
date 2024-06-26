export const validateEmail = (valueToValidate:  string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(valueToValidate);
}



export const validate = (valueToValidate:  string) => {
    const regex = /^[a-zA-Z0-9]+[a-zA-Z]$/;
    return regex.test(valueToValidate);
}