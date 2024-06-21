const nodemailer = require('nodemailer');

const mailSupportHelpers =async (email  , text)=>{

        try {
            const transporter = nodemailer.createTransport({ // details of transporting the email
                service:'gmail',
                port:587, //SMTPS port
                secure:true,
                auth:{
                    user: 'baraamohamed2311@gmail.com',
                    pass:"wimn hcfn qzsq ieym" 
                }
            })
            const email_info = await transporter.sendMail({
                from: "Support Team",
                to:'baraamohamed2311@gmail.com',
                replyTo: email, 
                subject:email,
                text:text
            })
            return true;
        }
        catch(e){
            console.log("Error inside mailSupportHelpers",e);
            return false;
        }
        
 }

 module.exports = {mailSupportHelpers}