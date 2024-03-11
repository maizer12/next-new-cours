import { forwardRef } from 'react';
import cn from 'clsx';
import { TypeInputProps } from './InputField.types';

const InputField = forwardRef<HTMLInputElement, TypeInputProps>(({ error, style, Icon, className, ...reset }, ref) => {
	return (
		<div className={cn(className)} style={style}>
			{Icon && (
				<div>
					<Icon />
				</div>
			)}
			<input ref={ref} {...reset} />
			{error && <div>{error.message}</div>}
		</div>
	);
});

export default InputField;
