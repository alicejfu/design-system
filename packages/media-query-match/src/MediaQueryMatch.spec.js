import React from 'react'
import { fireEvent } from '@testing-library/react'

import MediaQueryMatch from '.'

describe('MediaQueryMatch', () => {
  it('should render correctly', () => {
    const { asFragment } = renderWithTheme(<MediaQueryMatch />)

    expect(asFragment()).toMatchSnapshot()
  })
})
