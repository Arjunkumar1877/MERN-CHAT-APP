import mongoose from 'mongoose';
const schema = mongoose.Schema;


const conversationSchema  = new schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: []
        }
    ]
}, {timestamps: true});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;