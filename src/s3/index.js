import S3 from 'react-aws-s3';
 
const config = {
    bucketName: 'courtcatch',
    // dirName: 'media', /* optional */
    region: 'ap-southeast-1',
    accessKeyId: 'AKIAI7O4CHFK6GCKUN7Q',
    secretAccessKey: 'N3mnCNMep5f8iar7KeA8FxdMa5Gl66Fz6w9Bv1hL',
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