import app from "./app";


import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
try {
      await mongoose.connect('mongodb+srv://beckend_level_2_2026:AEtRrsTiWYPWJcmv@cluster0.qm82exp.mongodb.net/level2?appName=Cluster0');

   app.listen(7000, ()=>{
    console.log('practise port 7000');
   })
} catch (error) {
    
}
}