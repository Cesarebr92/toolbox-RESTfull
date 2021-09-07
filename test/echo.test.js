const {superTest, expect} = require('../server/config/config');

describe('GET /iecho', () => {
    context('Non-Palindrome QueryString ', ()=> {
        it('returns palindrome false & reverse message',  async () => {
            const res = await superTest.get('/iecho')
                .query({text: 'test'});

            expect(res.status, 'Status OK').to.equals(200);
            expect(res.body, 'Getting keys').to.include.keys('message', 'palindrome');
            expect(res.body.palindrome).to.eql(false);
        });
    });

    context('Palindrome QueryString', () => {
        it('returns palindrome true & reverse message', async () => {
            const res = await superTest.get('/iecho')
                .query({ text: 'acurruca' });

            expect(res.status, 'Status OK').to.eql(200);
            expect(res.body, 'Getting keys').to.include.keys('message', 'palindrome');
            expect(res.body.palindrome).to.eql(true);
        })
    });

    context('With non-QueryString', () => {
        it('return StatusCode 400 & error "no text" ',  async () => {
            const res = await superTest.get('/iecho')

            expect(res.status, 'Status KO').to.eql(400);
            expect(res.body.error).to.eql('no text');
        })
    });
})