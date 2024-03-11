import Chat from '@/components/chats/Chat';
import ChatList from '@/components/chats/ChatList';
import ChatUser from '@/components/chats/ChatUser';

export default function ChatPage() {
	return (
		<main className='grid p-layout h-full' style={{ gridTemplateColumns: '.7fr 3fr' }}>
			<div className='border-r border-border'>
				<ChatUser />
				<ChatList />
			</div>
			<Chat />
		</main>
	);
}
