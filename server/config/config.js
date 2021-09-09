
//================================
// CHAI + SUPERTEST
//================================
const superTest = require('supertest')('http://localhost:4000');
const expect = require('chai').expect;

//================================
// Port
//================================
process.env.PORT = process.env.PORT || 4000;

module.exports = {
    superTest,
    expect,
}

