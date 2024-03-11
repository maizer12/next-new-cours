'use client';

import InputField from '@/common/InputField';
import { IAuthProps } from './Auth.types';
import { AtSign } from 'lucide-react';

export default function Auth({ type }: IAuthProps) {
	return (
		<form>
			<InputField placeholder='email' type='email' Icon={AtSign} />
			<InputField placeholder='email' type='email' Icon={AtSign} />
		</form>
	);
}
