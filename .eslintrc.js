module.exports = {
  extends: "airbnb",
  env: {
    browser: true
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/anchor-is-valid': 'off' // temporary solution (while we don't have a router)
  },
  "parser": "babel-eslint"
}
