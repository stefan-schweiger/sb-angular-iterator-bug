

import { Meta, moduleMetadata, Story } from '@storybook/angular';
import ToolbarComponent from './toolbar.component';

export default {
  title: 'Inputs/Chips/Toggle',
  component: ToolbarComponent,
  decorators: [
    moduleMetadata({
    }),
  ],
} as Meta;

export const Base: Story = (args) => ({
  props: args,
  template: `
    <app-toolbar></app-toolbar>
  `,
});
