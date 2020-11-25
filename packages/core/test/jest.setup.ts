import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { rendererCreateWithTheme } from './rendererCreateWithTheme'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.rendererCreateWithTheme = rendererCreateWithTheme

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function _raf(cb) {
    return setTimeout(cb, 0)
  }
