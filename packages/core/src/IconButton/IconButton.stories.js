import React from 'react'
import { action } from '@storybook/addon-actions'
import { Calendar } from 'pcln-icons'

import { Button, IconButton } from '..'
import ForwardRefDemo from '../../storybook/utils/ForwardRefsDemo'

export default {
  title: 'IconButton',
  component: IconButton,
}

export const Default = () => (
  <IconButton
    onClick={action('Clicked IconButton')}
    aria-label={'Click to choose date'}
    icon={<Calendar title='Choose date' />}
  />
)

Default.story = {
  name: 'default',
}

export const WithColor = () => (
  <IconButton
    onClick={action('Clicked IconButton')}
    icon={<Calendar title='Choose date' color='primary' />}
  />
)

WithColor.story = {
  name: 'with color',
}

export const WithSize = () => (
  <IconButton
    onClick={action('Clicked IconButton')}
    icon={<Calendar title='Choose date' size={64} />}
  />
)

WithSize.story = {
  name: 'with size',
}

export const WithDisabled = () => (
  <IconButton
    onClick={action('Clicked IconButton')}
    icon={<Calendar title='Choose date' />}
    disabled
  />
)

WithDisabled.story = {
  name: 'with disabled',
}

export const ForwardRefs = () => (
  <ForwardRefDemo
    refChild={(dsRef) => (
      <>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' size={64} />}
          dsRef={dsRef}
        />
        <br />
        <Button onClick={() => dsRef.current.focus()} mt={4}>
          Click to focus button via ref
        </Button>
      </>
    )}
  />
)

ForwardRefs.story = {
  name: 'Forward refs',
}
