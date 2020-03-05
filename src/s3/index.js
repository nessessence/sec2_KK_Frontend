import S3 from 'react-aws-s3';
import { awsConfig } from '../private/keys';
 
// awsConfig must be imported

export const upload = async (file, newFileName, dirName) => {
    const ReactS3Client = new S3({...awsConfig, dirName: dirName});

    try{
        let data = await ReactS3Client.uploadFile(file, newFileName);
        return data;
    }
    catch(err){
        throw err;
    }
    
} 