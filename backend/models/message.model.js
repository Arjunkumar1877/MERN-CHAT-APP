import mongoose from 'mongoose';
const schema = mongoose.Schema;

const messageSchema = new schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    recieverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;