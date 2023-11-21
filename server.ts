const email = require( "./email" );

const express = require( 'express' );
const app = express();
const port = 3000;
const nodemailer = require( 'nodemailer' );

app.get( '/', async ( req, res ) => {
    'use strict';

    const transporter = nodemailer.createTransport( {
        service: 'gmail',
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: 'jorge.furtado@sinergiaeducacao.com.br',
            pass: 'SENHA',
        },
    } );


    const mailOptions = {
        from: 'jorge.furtado@sinergiaeducacao.com.br', // sender address
        to: 'ojorgewilliamfurtado@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: email( 'Jorge William Cardoso' )
    }

    transporter.sendMail(
        mailOptions, function ( err, data ) {
            if ( err ) {
                console.log( 'Error' );
            } else {
                console.log( 'Email sent!!!' );
            }
        }
    );





    res.send( 'Email enviado' );
} );

app.listen( port, () => {
    console.log( 'Server running' );
} );
