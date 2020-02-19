import S3 from 'react-aws-s3';
 
const config = {
    bucketName: 'courtcatch101',
    // dirName: 'media', /* optional */
    region: 'ap-southeast-1',
    accessKeyId: 'AKIAICZ43OQ6YU67753Q',
    secretAccessKey: 'EFb+0byF7c8xJkP7M0NfOAbDqlgAkllkMSfuUkQX',
    // s3Url: 'https:/your-custom-s3-url.com/', /* optional */
}

export const upload = async (file, newFileName, dirName) => {
    const ReactS3Client = new S3({...config, dirName: dirName});

    try{
        let data = await ReactS3Client.uploadFile(file, newFileName);
        return data;
    }
    catch(err){
        throw err;
    }
    
} 