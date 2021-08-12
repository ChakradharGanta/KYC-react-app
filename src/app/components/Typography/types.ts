import React from 'react';

export type TypographyVariants =
  | 'body-short-01'
  | 'body-short-02'
  | 'body-short-03'
  | 'display-xl'
  | 'display-l'
  | 'display-m'
  | 'display-s';

export type TypographyComponentAs = 'span' | 'p';

export interface TypographyProps {
  variant?: TypographyVariants;
  as?: TypographyComponentAs;
  className?: string;
  children?: React.ReactNode;
}
