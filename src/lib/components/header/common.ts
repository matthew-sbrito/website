export const menuHeaderClassName =
  'z-30 border rounded-lg p-2 flex flex-col w-32 gap-3 absolute bg-card/75 backdrop-blur-sm';

export type MenuProps = {
  opened: boolean;
  toggle: (opened: boolean) => void;
};

export type HeaderMenuProps = MenuProps & {
  x?: number;
  scrollY?: number;
};
