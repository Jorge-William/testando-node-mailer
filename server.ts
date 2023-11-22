// const email = require( "./email" );
// const Notificacao = require( './franco/email-franco' )
// const express = require( 'express' );
// const app = express();
// const port = 3333;
// const nodemailer = require( 'nodemailer' );

// app.get( '/', async ( req, res ) => {
//     'use strict';

//     const transporter = nodemailer.createTransport( {
//         service: 'gmail',
//         auth: {
//             // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//             user: 'jorge.furtado@sinergiaeducacao.com.br',
//             pass: 'JW2019dan132',
//         },
//     } );


//     const Email = new Notificacao( 'Jorge William', [ 'Natação', 'Corrida' ] )

//     const mailOptions = {
//         from: 'jorge.furtado@sinergiaeducacao.com.br', // sender address
//         to: 'ojorgewilliamfurtado@gmail.com', // list of receivers
//         subject: 'Atividade extra Liceu', // Subject line
//         text: '', // plain text body
//         html: Email.
//     }

//     transporter.sendMail(
//         mailOptions, function ( err, data ) {
//             if ( err ) {
//                 console.log( 'Error' );
//             } else {
//                 console.log( 'Email sent!!!' );
//             }
//         }
//     );





//     res.send( 'Email enviado' );
// } );

// app.listen( port, () => {
//     console.log( 'Server running' );
// } );



import * as nodemailer from 'nodemailer';
import Notificacao from './franco/email-franco';
import express, { Request, Response } from 'express';

const app = express();
const port = 3333;

app.get( '/', async ( req: Request, res: Response ) => {
    'use strict';

    const transporter = nodemailer.createTransport( {
        service: 'gmail',
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: 'jorge.furtado@sinergiaeducacao.com.br',
            pass: 'JW2019dan132',
        },
    } );

    const Email = new Notificacao( 'Jorge William', [ 'Natação', 'Corrida' ] );

    const mailOptions: nodemailer.SendMailOptions = {
        from: 'jorge.furtado@sinergiaeducacao.com.br', // sender address
        to: 'ojorgewilliamfurtado@gmail.com', // list of receivers
        subject: 'Atividade extra Liceu', // Subject line
        text: '', // plain text body
        html: Email.expirar().toString()// assuming `Email` has a `toString` method
    };

    transporter.sendMail( mailOptions, function ( err, data ) {
        if ( err ) {
            console.log( 'Error' );
        } else {
            console.log( 'Email sent!!!' );
        }
    } );

    res.send( 'Email enviado' );
} );

app.listen( port, () => {
    console.log( 'Server running' );
} );
