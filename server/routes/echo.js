const express = require('express');
const app = express();

/**
 * API to reverse text && verify if the string is palindrome
 * @param req QueryString called text to transform
 * @param res Response OK, palindrome(boolean) & message(String) if the QueryString exist and Response KO if text is null or undefined
 */
app.get('/iecho', (req, res) => {
    let text = req.query.text;
    let palindrome,
        textReverse;

    if (!text) {
        return res.status(400).json({
            error: 'no text'
        })
    }
    textReverse = text.split('').reverse().join('');
    palindrome = text.toLowerCase() === textReverse.toLowerCase();

    res.json({
        palindrome,
        message: textReverse
    })
})

module.exports = app;