import { InputHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	isLoading: Boolean;
}
