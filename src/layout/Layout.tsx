import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';

interface IProps {
	children: ReactNode;
}

const isLoading = false;

export default function LayoutClient({ children }: IProps) {
	if (!isLoading) return <main>{children}</main>;

	return (
		<main className={styles.main}>
			<Sidebar />
			{children}
		</main>
	);
}
