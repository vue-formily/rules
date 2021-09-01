<p align="center">
  <a href="https://vue-formily.netlify.app/guide/validation-rules" target="_blank">
    <img width="320" src="./.github/logo.png">
  </a>
</p>
<br>

Validation rules for [**vue-formily**](https://vue-formily.netlify.app).

## Links
- [📚 &nbsp; Documentation](https://vue-formily.netlify.app/guide/validation-rules)

## Installation
### CDN
You can use validation rules with a script tag and a CDN, import the library like this:

```html
<script src="https://unpkg.com/@vue-formily/rules@latest"></script>
```

This will inject a `Rules` global object, which you will use to access the various rules.

If you are using native ES Modules, there is also an ES Modules compatible build:

```html
<script type="module">
  import rules from 'https://unpkg.com/@vue-formily/rules@latest/dist/rules.esm.js'
</script>
```

### NPM
```sh
# install with yarn
yarn add @vue-formily/rules

# install with npm
npm install @vue-formily/rules --save
```

## Basic Usage
```typescript
import { required, email } from '@vue-formily/rules';

const formSchema = {
  formId: 'login',
  fields: [
    {
      formId: 'email',
      rules: [
        required,
        email
      ]
    },
  ]
};

// Use the schema in Vue instance
// ...
```

## Contributing

You are welcome to contribute to this project, but before you do, please make sure you read the [Contributing Guide](https://github.com/vue-formily/formily/blob/main/.github/CONTRIBUTING.md).

## License

[MIT](./LICENSE)
