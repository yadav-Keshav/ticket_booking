import aws from 'aws-sdk';
// import { S3Client } from '@aws-sdk/client-s3';
import multer from 'multer';
import multerS3 from 'multer-s3'
import dotenv from 'dotenv';
dotenv.config();
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const s3 = new aws.S3({
    region, accessKeyId, secretAccessKey,
})

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: bucketName,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: 'Meta_Data' });
        },
        key: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        },
        limits: {
            fileSize: 1024 * 1024 * 5
        }
    })
}).array('post_image', 5);

export const uploadfile = async (req, res, next) => {
    try {
        upload(req, res, (err) => {
            if (err) {
                return next(createError(404, err.message));
            }
            else {
                return next();
            }
        })
    }
    catch (err) {
        return next(createError(404, err.message));
    }
}