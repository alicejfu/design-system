import React from 'react'
import PropTypes from 'prop-types'
import { render } from '@testing-library/react'

// Temporary workaround until we figure out what's wrong with the CJS index.js file
import { ThemeProvider } from 'pcln-design-system/dist/cjs/ThemeProvider'

const WithThemeProvider = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
)
WithThemeProvider.propTypes = {
  children: PropTypes.node,
}

const customRender = (ui, options) =>
  render(ui, { wrapper: WithThemeProvider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
