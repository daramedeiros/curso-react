function formatName(user) {
    return user.firstName + '' +
user.lastname;
}

const user = {
    firstName:'Dara',
    lastname: 'Perez'
};

const element = (
    <h1>Hello, {formatName(user)}!</h1>
)

ReactDOM.render(
    element. 
    document.getElementById('app')
);