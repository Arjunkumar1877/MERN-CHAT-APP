import { create } from 'zustand';

const useConversation = create((set)=> ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    mesages: [],
    setMessages: (mesages) => set({ mesages }),
}))

export default useConversation;