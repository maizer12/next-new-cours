import { forwardRef } from 'react';
import cn from 'clsx';
import { TypeInputProps } from './InputField.types';
import styles from './InputField.module.scss';

const InputField = forwardRef<HTMLInputElement, TypeInputProps>(({ error, style, Icon, className, ...reset }, ref) => {
	return (
		<label className={cn(className, styles.label)} style={style}>
			<div className={styles['label-inner']}>
				{Icon && (
					<div>
						<Icon size={20} />
					</div>
				)}
				<input ref={ref} {...reset} />
			</div>
			{error && <div className={styles.err}>{error.message}</div>}
		</label>
	);
});

export default InputField;
