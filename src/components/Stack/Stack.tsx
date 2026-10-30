import type { HTMLAttributes } from 'react';
import clsx from 'clsx';
import type { LayoutTag, Space } from '../../types/layout';
import styles from './Stack.module.scss';

export type StackDirection = 'row' | 'column';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch';
export type StackJustify = 'start' | 'center' | 'end' | 'between';

export interface StackProps extends HTMLAttributes<HTMLElement> {
  as?: LayoutTag;
  direction?: StackDirection;
  gap?: Space;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
}

export function Stack({
  as: Component = 'div',
  direction = 'column',
  gap = 3,
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className,
  ...rest
}: StackProps) {
  return (
    <Component
      className={clsx(
        styles.root,
        styles[direction],
        styles[`gap-${gap}`],
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        wrap && styles.wrap,
        className,
      )}
      {...rest}
    />
  );
}
