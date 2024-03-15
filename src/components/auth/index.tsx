'use client';

import InputField from '@/common/InputField';
import { IAuthProps } from './Auth.types';
import { Lock, LockKeyholeIcon, Mail } from 'lucide-react';
import Button from '@/common/Button';
import styles from './Auth.module.scss';

export default function Auth({ type }: IAuthProps) {
	return (
		<div className={styles.page}>
			<form>
				<h1 className={styles.title}>{type === 'login' ? 'Sing In' : ''}</h1>
				<InputField placeholder='Enter email' className='mb-6' type='email' Icon={Mail} />
				<InputField placeholder='Enter password' type='password' Icon={Lock} />
				<Button isLoading={false}>Login</Button>
			</form>
		</div>
	);
}
