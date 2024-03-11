'use client';
import Image from 'next/image';
import styles from './Sidebar.module.scss';
import Link from 'next/link';
import { SunIcon } from 'lucide-react';
import { menuData } from './sidebar.data';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className={styles.sidebar}>
			<Link href='/'>
				<Image src='logo.svg' alt='logo' priority width={45} height={45} />
			</Link>
			<div>
				{menuData.map(e => (
					<Link href={e.link} key={e.link} className={pathname === e.link ? styles.active : ''}>
						<e.icon size={30} />
					</Link>
				))}
			</div>
			<SunIcon size={30} />
		</aside>
	);
}
