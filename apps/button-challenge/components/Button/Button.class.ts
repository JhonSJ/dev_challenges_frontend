import { ButtonColors, ButtonVariants, ButtonSizes } from './Button.types';

type ButtonVariantsColors = {
  [key in ButtonVariants]: {
    [key in ButtonColors]: string;
  };
};

export const BUTTON_VARIANTS_COLORS: ButtonVariantsColors = {
  default: {
    default: "bg-neutral-200 enabled:hover:bg-zinc-400 enabled:focus:bg-zinc-400 enabled:text-neutral-700 disabled:text-neutral-400",
    primary: "bg-blue-600 enabled:hover:bg-blue-700 enabled:focus:bg-blue-700 enabled:text-white disabled:text-neutral-400",
    secondary: "bg-slate-600 enabled:hover:bg-slate-800 enabled:focus:bg-slate-800 enabled:text-white disabled:text-neutral-400",
    danger: "bg-red-600 enabled:hover:bg-red-800 enabled:focus:bg-red-800 enabled:text-white disabled:text-neutral-400",
  },
  outlined: {
    default: "border border-neutral-200 enabled:hover:bg-zinc-400/10 enabled:focus:bg-zinc-400/10 disabled:text-zinc-400",
    primary: "border border-blue-600 enabled:hover:bg-blue-700/10 enabled:focus:bg-blue-700/10 enabled:text-blue-600 disabled:text-blue-400",
    secondary: "border border-slate-600 enabled:hover:bg-slate-800/10 enabled:focus:bg-slate-800/10 enabled:text-slate-600 disabled:text-slate-400",
    danger: "border border-red-600 enabled:hover:bg-red-800/10 enabled:focus:bg-red-800/10 enabled:text-red-600 disabled:text-red-400",
  },
  text: {
    default: "enabled:hover:bg-zinc-400/10 enabled:focus:bg-zinc-400/10 disabled:text-zinc-400",
    primary: "enabled:hover:bg-blue-700/10 enabled:focus:bg-blue-700/10 text-blue-600 disabled:text-blue-400",
    secondary: "enabled:hover:bg-slate-800/10 enabled:focus:bg-slate-800/10 text-slate-600 disabled:text-slate-400",
    danger: "enabled:hover:bg-red-800/10 enabled:focus:bg-red-800/10 text-red-600 disabled:text-red-400",
  },
};

type ButtonSizesPadding = {
    [key in ButtonSizes]: string
}

export const BUTTON_SIZES_PADDING: ButtonSizesPadding = {
    small: 'px-3 py-1.5',
    medium: 'px-4 py-2',
    large: 'px-5 py-3',
};

export const BUTTON_DEFAULT_THEME = `flex items-center gap-x-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2`;