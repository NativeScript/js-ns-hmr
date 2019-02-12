# Important!

The HMR feature is still in beta.
The API may change.

For detailed information, please refer to:
- HMR tracking [issue](https://github.com/NativeScript/NativeScript/issues/6398)
- HMR design [document](https://goo.gl/NkYXga)

## Enable HMR

1. Install the NativeScript CLI.

```
npm install -g nativescript
```

2. Install the node dependencies.
```
npm install
```

3. Run with the `hmr` flag:
```
tns run --hmr
```

or, if you don't have local setup, use:
```
tns preview --hmr
```

