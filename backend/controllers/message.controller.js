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



export const getMessages = async(req,res)=>{
    try {
       const { id: userToChat } = req.params;
       const senderId = req.user._id;
       const conversation = await Conversation.findOne({
        participants: { $all: [senderId, userToChat]},
       }).populate("messages");

       if(!conversation) return res.status(404).json("")
       console.log(conversation)
       res.status(200).json(conversation.messages)
    
    } catch (error) {
        console.log("Error message inside getMessage controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
    }
    