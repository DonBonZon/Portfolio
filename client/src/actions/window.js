import { EXTEND_DRAWER, SHRINK_DRAWER } from './windowTypes';

export const extendDrawer = () => ({
  type: EXTEND_DRAWER,
});

export const shrinkDrawer = () => ({
  type: SHRINK_DRAWER,
});
