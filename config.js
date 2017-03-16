exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://me:pass@ds117889.mlab.com:17889/guesses';
exports.PORT = process.env.PORT || 8081;
