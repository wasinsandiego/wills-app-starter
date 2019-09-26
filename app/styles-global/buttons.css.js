/* istanbul ignore file */
import { injectGlobal } from 'emotion'

injectGlobal`
  /**
   * Commented out since button styles are handled by component. If we ever have button elements
   * we dont control (ex. remot html content) we might want to use some styles here.
   */

  /*
  .button, button,
  input[type="submit"], input[type="reset"], input[type="button"] {
    display: inline-block;
    text-align: center;
    letter-spacing: .1rem;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #bbb;
    cursor: pointer;
  }

  .button:hover, button:hover,
  input[type="submit"]:hover, input[type="reset"]:hover, input[type="button"]:hover,
  .button:focus, button:focus, input[type="submit"]:focus, input[type="reset"]:focus, input[type="button"]:focus {
    outline: 0;
  }
  */
`
