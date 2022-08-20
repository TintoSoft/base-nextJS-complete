import './storybook.css';

const BREAKPOINTS_INT = {
  'Iphone SE': 375,
  'Galaxy S8 +': 380,
  'Galaxy A51/71': 412,
  'Surface Duo': 540,
  'IPad Air': 820,
  Desktop: 1200,
  'Desktop xl': 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(
    ([breakpointKey, breakpointValue], idx) => {
      return [
        breakpointKey,
        {
          name: breakpointKey,
          styles: {
            width: `${breakpointValue}px`,
            height: `100%`,
          },
        },
      ];
    }
  )
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};
