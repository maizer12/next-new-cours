export interface IAuthProps {
	type: 'login' | 'registration';
}
export interface IAuthFormState {
	email: string;
	password: string;
}
