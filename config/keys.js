// module.exports = {
//     mongoURI: 'mongodb+srv://echen831:FlHo0KVQ4EGMHhPT@cluster0-ddxpu.mongodb.net/test?retryWrites=true&w=majority',
//     secretOrKey: 'jnpp1U5Lhs'
// }

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
} else {
    module.exports = require('./keys_dev');
}