/* istanbul ignore file */
import { injectGlobal } from 'emotion'

injectGlobal`
  input[type="email"], input[type="number"], input[type="search"], input[type="text"], input[type="tel"], input[type="url"], input[type="password"],
  textarea, select {
    padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid #ddd;
    box-shadow: none;
    box-sizing: border-box;
  }

  /* Removes awkward default styles on some inputs for iOS */
  input[type="email"], input[type="number"], input[type="search"], input[type="text"], input[type="tel"], input[type="url"], input[type="password"],
  textarea {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
  }

  textarea {
    min-height: 65px;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  input[type="email"]:focus, input[type="number"]:focus, input[type="search"]:focus, input[type="text"]:focus, input[type="tel"]:focus, input[type="url"]:focus, input[type="password"]:focus,
  textarea:focus, select:focus {
    border: 1px solid #07A1BF;
    outline: 0;
  }

  label, legend {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
  }

  fieldset {
    padding: 0;
    border-width: 0;
  }

  input[type="checkbox"], input[type="radio"] {
    display: inline;
  }

  label > .label-body {
    display: inline-block;
    margin-left: .5rem;
    font-weight: normal;
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  /* react-jsonschema-form */
  fieldset {
    margin-top: 0 !important;
    padding: 10px 20px 20px;
  }

  form.form-group > fieldset {
    margin-top: 0;
  }

  .form-group {
    display: inline-block;
    width: 100%;
    margin: 10px 0 10px;
  }

  .field-description {
    font-size: 14px;
    color: #666;
    margin: 0 0 8px 0;
  }

  .control-label ~ .field-description {
    margin-top: -7px;
  }

  /* Hide any p tags in form groups that are empty */
  .form-group p:empty {
    display: none;
  }

  .text-danger {
    padding: 6px 10px;
    color: #E7372D;
    font-size: 14px;
  }

  .error-detail .text-danger:before {
    content: '× ';
  }

  .panel-danger .panel-heading {
    color: #E7372D;
    font-size: 18px;
  }

  /* rjf */
  .form-control {
    width: 100%;
    height: 36px;
    border-color: #ddd;
    border-radius: 2px;
  }
`
