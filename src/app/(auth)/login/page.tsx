import Auth from '@/components/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Login',
};

export default function Login() {
	return <Auth type='login' />;
}
