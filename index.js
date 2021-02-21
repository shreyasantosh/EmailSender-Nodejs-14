const EmailSetup = require('./src/EmailSetup')


async function emailMain(){

    const emailObject = {
        emailId: 'adityamallah006@gmail.com',
        name: 'bahubali'
    }

    await EmailSetup(emailObject)

}

emailMain()