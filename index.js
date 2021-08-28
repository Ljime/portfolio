const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()
const path = require("path")

const app = express()

app.use(express.json())

app.post('/send-email', (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'hermanvuongsender@gmail.com',
                pass: process.env.EMAIL_PASSWORD
            }
        })
    
        const mailOptions = {
            from: 'hermanvuongsender@gmail.com',
            to: 'hermanvuongbusiness@gmail.com',
            subject: req.body.subject,
            text: `From: ${req.body.email}\n
            ${req.body.message}`
        }
    
        transporter.sendMail(mailOptions, (err) => {
            if(err) {
                console.log(err)
                res.send({error: true})
            } else {
                console.log('Success');
            }
        })
        res.send({
            error: false
        })
    } catch (error) {
        res.send({
            error: true
        })
    }
})

if (process.env.NODE_ENV === "production") {
	// set static folder
	app.use(express.static("client/build"))
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
	})
}

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is running on port ' + port);
})