const isValidEmail = (email: string) => {

    /** Regular expression for a basic email format validation */

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);

}

const required = (data: string) => {

    let inputData = data?.trim();

    if(inputData?.length > 0)
    {
        return true;
    }
    else
    {
        return false;
    }

}
  

export { isValidEmail, required }