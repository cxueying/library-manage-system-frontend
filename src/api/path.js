const base = {
    baseUrl: "http://localhost:3596",

    // auth
    login: '/api/auth/login',
    register: '/api/auth/register',

    // book
    book: '/api/book',
    books: '/api/books',
    borrow: '/api/book/borrow',
    return: '/api/book/return',

    // user
    user: '/api/user',
    userInfo: '/api/user/info',
    userupdate: '/api/user/update',
    lendHistory: '/api/user/lend-history',

    // other
}

export default base;