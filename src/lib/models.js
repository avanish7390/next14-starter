const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50
    },
    password:{
        type:String,
        required:true,
        unique:true,
        min:6,
    },
    img:{
        type:String,

    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},
{timestamps: true}
);

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
        unique:true,
        max:50
    },
    img:{
        type:String,

    },
    userId: {
        type: String,
       require: true,
    },
    slug: {
    type: String,
   require: true,
   unique: true,
},
},
 {timestamps: true}
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
