import Data from '../../model/data'
import connectDB from '../../db';
import multer from 'multer';

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './public/uploads')
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname)
      }
    })
  });
  
async function handler(req, res) {
    upload.single('abbas')(req, res, function (err) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while uploading the image' });
      } else {
        // console.log(req)
        const imagePath = `/uploads/${req.file.filename}`;
        // const {path}=req.file
        const image = new Data({url:imagePath,description:"abbaas"});
        image.save().then(result=>{
            res.status(200).json({ imagePath });
        });
        // res.status(200).json({ message:"happy" });

      }
    });
  }
  export const config = {
    api: {
      bodyParser: false
    }
  }

// router.post('/upload', upload.single('image'), async (req, res) => {
//   console.log(req.file)
//   // const { filename, path, mimetype } = req.file;
//   // const image = new Image({ filename, path, mimetype });
//   // await image.save();
//   // res.json({ message: 'File uploaded successfully' });
// });
export default connectDB(handler)