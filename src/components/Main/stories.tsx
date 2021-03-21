import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
// Basic.args = {
//   title: 'diajsdiasjdas',
//   description: 'asdasuhda'
// }
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}

export const Default: Story = (args) => <Main {...args} />
// Default.args = {
//   title: '1234',
//   description: '34345'
// }
