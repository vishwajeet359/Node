var nodeMailer =require('nodemailer')
var transport =nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'viskumar133@gmail.com',
        pass:'9335818095'
    }
});
var mailOption={
    from:'viskumar133@gmail.com',//sending user
    to:'venktesh.tools@gmail.com',//recieving user
    text:'Hi this venky'
}
transport.sendMail(mailOption,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log("email send",info.response);
    }
})