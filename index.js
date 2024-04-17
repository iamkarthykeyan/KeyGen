const express=require('express');
const app=express();
const node_rsa=require('node-rsa');
const cors=require('cors');

app.use(cors());
app.use(express.json());
app.get('/key',async (req,res)=>{
    const key = new node_rsa({ b: 2048 });

    // Export the public and private keys
    const publicKey = key.exportKey('public');
    const privateKey = key.exportKey('private');
    
    // Output the keys
    console.log('Public Key:');
    console.log(publicKey);
    
    console.log('\nPrivate Key:');
    console.log(privateKey);
    res.json({
        public:publicKey,
        private:privateKey
    })

})

app.listen(3000);