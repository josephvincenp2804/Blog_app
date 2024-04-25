const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://josephvincenp2804:1234@cluster0.3ifveg6.mongodb.net/NirBlogApp?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connneted")
})
.catch(()=>{
    console.log(error)
})