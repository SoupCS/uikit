import type { HTMLAttributes } from 'react';
import clsx from 'clsx';
import type { LayoutTag } from '../../types/layout';
import styles from './Container.module.scss';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'full';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: LayoutTag;
  size?: ContainerSize;
}

export function Container({
  as: Component = 'div',
  size = 'lg',
  className,
  ...rest
}: ContainerProps) {
  return <Component className={clsx(styles.root, styles[size], className)} {...rest} />;
}
