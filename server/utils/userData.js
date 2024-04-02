const get_user_data = (user) => {
    const id = user.id;
    const name = user.name;
    const username = user.username;

    const data = {id,name,username};
    return data;
}

module.exports = {
    get_user_data
}