import Image from 'next/image';
import styles from './Sidebar.module.scss';
import { MessageCircleIcon, Phone, Settings, SunIcon, Users2Icon } from 'lucide-react';

export default function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<Image src='logo.svg' alt='logo' priority width={45} height={45} />
			<div>
				<Users2Icon />
				<Phone />
				<MessageCircleIcon />
				<Settings />
			</div>
			<SunIcon />
		</aside>
	);
}
