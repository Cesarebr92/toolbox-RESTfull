
//================================
// CHAI + SUPERTEST
//================================
const superTest = require('supertest')('http://localhost:3000');
const expect = require('chai').expect;

//================================
// Port
//================================
process.env.PORT = process.env.PORT || 3000;

module.exports = {
    superTest,
    expect,
}

