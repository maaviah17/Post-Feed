const {ImageKit} = require("@imagekit/nodejs")

const client = new ImageKit({
    publicKey :"public_btFxdg+X+3KyhTJ4NMQFvRl91fs=",
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY, 
    urlEndpoint : "https://ik.imagekit.io/mmk17"

});

async function uploadFile(buffer){
    // change client to imagekit
    const response = await client.files.upload({
        file: buffer.toString("base64"),
        fileName: 'image.jpg',
    })
    return response  
}

module.exports = uploadFile;