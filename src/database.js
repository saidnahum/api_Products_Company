import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/api-companydb")
   .then(db => console.log('DB is connected'))
   .catch(error => console.log(error));