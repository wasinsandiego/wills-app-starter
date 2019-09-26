/* istanbul ignore file */
import { injectGlobal } from 'emotion'

injectGlobal`
  code {
    padding: .2rem .5rem;
    margin: 0 .2rem;
    font-size: 90%;
    white-space: nowrap;
    color: #333;
    background: #F1F1F1;
    border: 1px solid #E1E1E1;
    border-radius: 4px;
  }

  pre > code {
    display: block;
    padding: 1rem 1.5rem;
    white-space: pre;
  }
`
