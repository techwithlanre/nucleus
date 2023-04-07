import nodemailer from 'nodemailer';

const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
    host: config.MAILHOST,
    port: config.MAILPORT,
    auth: {
        user: config.MAILUSER,
        password: config.MAILPASSWORD,
    }
});

export default defineEventHandler(async (event)  => {
    try {
        const body  =await readBody(event);

        const mail  = transporter.sendMail({
            form: `"${body.email}"`,
            to: config.CONTACTMAIL,
            subject: `Contact Email`,
            text: body.message,
            html: body.message
        });

        console.log('Message Sent: ', mail.messageId);
        console.log('Message Sent: ', nodemailer.getTestMessageUrl(mail));
        return Promise.resolve();

        
    } catch (error) {
        sendError(event, createError({
            statusCode: 400,
            statusMessage: error
        }))
    }
});