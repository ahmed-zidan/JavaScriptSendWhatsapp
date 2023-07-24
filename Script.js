const qrcode = require('qrcode-terminal');
//var Parallel = require('paralleljs');


const { Client } = require('whatsapp-web.js');
const client = new Client();


//store each contact
var contacts = []

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');

    setInterval(()=>{
        //remove the first element from arrays
        try{
            console.log('remove the first element from arrays')
            contacts = contacts.filter(x=>x.time >= new Date());
            console.log(contacts)
        }catch(e){
            console.log(e)
        }

    }, 100000);


});






      
var
persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
fixNumbers = function (str)
{
  if(typeof str === 'string')
  {
    for(var i=0; i<10; i++)
    {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
};






async function handleMessage(contact , message){

    try{
        
        
        message.body = fixNumbers(message.body);
        console.log(message.body);
        if(message.body === '1' ){
            contact.state = 1
            let msg = 'برجاء كتابة الرقم القومي المكون من 11 رقم بشكل صحيح';
            
            await client.sendMessage(message.from, msg);
        }else if(message.body === '2'){
            contact.state = 1
            let msg = 'لعمل تصريح سفر برجاء الضغط هنا';
            await client.sendMessage(message.from, msg);
        }else if(message.body === '3'){
            contact.state = 1
            let msg = 'احنا هنا حربية ادخل علي داخلية';
            await client.sendMessage(message.from, msg);
        }else if(message.body === '4'){
            contact.state = 0
            let msg = 'ثواني';
            await client.sendMessage(message.from, msg);
        }
        else if(contact.state != 0){
            
                let msg = 'لاستلام تصريح السفر اكتب 1 \n'+
                'لعمل تصريح سفر جديد اكتب 2 \n'+
                'سلاح داخلية اضغط 3 \n';
                
                await  client.sendMessage(message.from, msg);
           
        }
      
    }catch(e){
        console.log(message);
    }


}



client.on('message', async message => {
    
    if((/^\d*$/.test(message.body)) && message.body.length == 14 ) {
        return;
        
    }
    let contact = contacts.find(x=>x.phone == message.from);
    
    if(message.from !== '201118010153@c.us'){
        return;
    }
    
    //contact exists
    if(contact){
        console.log('contact exists')
        handleMessage(contact,message);
    }else{
        console.log('new')
        contacts.push({
            phone : message.from,
            time : new Date(),
            state : '-1'

        })

        //console.log('added new contact')

       
            let msg = 'لاستلام تصريح السفر اكتب 1 \n'+
            'لعمل تصريح سفر جديد اكتب 2 \n'+
            'سلاح داخلية اضغط 3 \n' +
            'استفسار جديد 4 \n';
            
            await client.sendMessage(message.from, msg);
      
    }


	
});
 
 

client.initialize();
 