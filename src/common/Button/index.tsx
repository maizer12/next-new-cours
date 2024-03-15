import { FC } from 'react';
import { IButtonProps } from './Button.types';
import styles from './Button.module.scss';
import Loader from '../Loader';

const Button: FC<IButtonProps> = ({ children, isLoading }) => {
	return (
		<button className={styles.btn}>
			{isLoading? <Loader /> : children}
		</button>
	);
};

export default Button;
