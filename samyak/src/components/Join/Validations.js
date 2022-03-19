const checkUsername = (value) => {
    // check if user is already there in db
}

const checkPassword = (value) => {
    if(value.length < 8) {
        return 'Password must be at least 8 characters long';
    }
    return "proceed";
}











module.export = { checkPassword };