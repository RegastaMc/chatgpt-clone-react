import Chat from "@/components/Chat"
import ChatInput from "@/components/ChatInput"

type Props={
  params:{
    id:string
  }
}

const ChatPage = ({params:{id}}:Props) => {
  console.log()
  return (
    <div className="flex flex-col h-screen overflow-scroll">
      <Chat chatId={id} />
      <ChatInput chatId={id}/>
    </div>
  )
}

export default ChatPage