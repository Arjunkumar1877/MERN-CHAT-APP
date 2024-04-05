import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async(req,res)=>{
try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    console.log(recieverId + "👌😒👏👩‍💻😉🎶😎");
    const senderId = req.user._id

    let conversation =   await Conversation.findOne({
    participants: { $all: [senderId, recieverId]}
  })
    // console.log(req.params.id);
if(!conversation){
    conversation = await Conversation.create({
        participants: [senderId, recieverId],
    })
}

const newMessage = new Message({
    senderId,
    recieverId,
    message
})
if(newMessage){
    conversation.messages.push(newMessage._id);
}

await Promise.all([conversation.save(), newMessage.save()]);

res.status(201).json(newMessage);

} catch (error) {
    console.log("Error message inside sendMessage controller", error.message);
    res.status(500).json({error: "Internal server error"});
}
}