// @flow
import { injectGlobal } from 'styled-components'
import { fontSize } from './config'
import palette from './palette'

// eslint-disable-next-line
injectGlobal`

  {/* Body */}
  div, p, a, li, button, input, textarea, select {
    font-family: "Roboto", "Noto Sans", sans-serif;
    font-size: ${fontSize.body};
    color: ${palette.text};
  }

  {/* Headings */}
  h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto", "Noto Sans", sans-serif;
    color: ${palette.text};
  }

  h1 {
    font-size: ${fontSize.heading1};
  }
  h2 {
    font-size: ${fontSize.heading2};
  }
  h3 {
    font-size: ${fontSize.heading3};
  }
  h4, h5, h6 {
    font-size: ${fontSize.heading4};
  }

  {/* Spacing */}
  h1, h2, h3, h4, h5, h6,
  ul, ol, dl,
  blockquote, p, address,
  hr,
  table,
  fieldset, figure,
  pre,
  ul, ol,
  dd {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  i {
    text-decoration: none;
  }

`
