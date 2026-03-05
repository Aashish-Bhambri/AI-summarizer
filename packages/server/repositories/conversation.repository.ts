
const conversations = new Map<string,string>();

export const conversationRepository= {
    getLastResponseId(conversationID:string){
    return conversations.get(conversationID);
    },
    setlastResponseId(conversationID:string,responseId:string){
        return conversations.set(conversationID,responseId)
    }
}

