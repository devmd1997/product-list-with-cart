import type { Preview } from "@storybook/react-vite";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import "../src/index.css";

export const CUSTOM_VIEW_PORTS = {
  desktop: {
    name: "Desktop",
    styles: {
      width: '1440px',
      height: '1361px',
    },
    type: 'desktop'
  }
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: {
        ...INITIAL_VIEWPORTS,
        ...CUSTOM_VIEW_PORTS,
      }
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
