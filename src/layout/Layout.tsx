import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';

interface IProps {
	children: ReactNode;
}

const isLoading = false;

export default function LayoutClient({ children }: IProps) {
	return (
		<main className={styles.main}>
			{isLoading && <Sidebar />}
			{children}
		</main>
	);
}
