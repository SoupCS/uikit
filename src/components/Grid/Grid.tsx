import type { HTMLAttributes } from 'react';
import clsx from 'clsx';
import type { LayoutTag, Space } from '../../types/layout';
import styles from './Grid.module.scss';

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps extends HTMLAttributes<HTMLElement> {
  as?: LayoutTag;
  columns?: GridColumns;
  gap?: Space;
}

export function Grid({
  as: Component = 'div',
  columns = 12,
  gap = 4,
  className,
  ...rest
}: GridProps) {
  return (
    <Component
      className={clsx(styles.root, styles[`cols-${columns}`], styles[`gap-${gap}`], className)}
      {...rest}
    />
  );
}
