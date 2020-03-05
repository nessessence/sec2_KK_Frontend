import S3 from 'react-aws-s3';
 
const config = {
    bucketName: 'xxxxxxxxxxxx',
    // dirName: 'media', /* optional */
    region: 'xxxxxxxxxxx',
    accessKeyId: 'xxxxxxxxxxxxxxxxxxxxxx',
    secretAccessKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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