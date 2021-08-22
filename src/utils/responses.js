const RESPONSE = {
    products:{},
    categories:{}
};

const queryPromise = (connection, sql, values ) => {
 return new Promise(( resolve, reject ) => {
    connection.query(sql, values, ( err, rows) => {
        if ( err ) {
        reject( err )
        } else {
        resolve( rows )
        }
    })
 })
}

module.exports = {RESPONSE,queryPromise};