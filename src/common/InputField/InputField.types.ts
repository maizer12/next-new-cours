import { LucideIcon } from 'lucide-react';
import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface InputFieldProps {
	placeholder: string;
	error?: FieldError;
	Icon?: LucideIcon;
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & InputFieldProps;
