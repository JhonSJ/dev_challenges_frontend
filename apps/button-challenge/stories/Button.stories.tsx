import type { Meta, StoryObj } from "@storybook/react";

import { Button, Preview } from "@/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "text"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "danger"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  decorators: [
    (Story) => (
      <Preview>
        <Story />
      </Preview>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  parameters: {
    controls: {
      exclude: ["startIcon", "endIcon"],
    }
  },
  args: {
    children: "Button",
  },
};
