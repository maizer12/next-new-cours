import { LoaderIcon } from 'lucide-react';
import { FC } from 'react';
import styles from './Loader.module.scss';

const Loader: FC = () => {
	return (
		<div className={styles.loader}>
			<LoaderIcon />
		</div>
	);
};

export default Loader;
