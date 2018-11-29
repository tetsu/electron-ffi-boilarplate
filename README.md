# electron-ffi-boilarplate
electron-ffi-boilarplate

1. Install node in your Windows computer.
1. Initialize npm project.
```
npm ini
```
1. Import electron packages to your npm project
```
npm i electron
npm i electron-rebuild
```
1. Import Windows Build Tools and create path.
```
npm --add-python-to-path install --global windows-build-tools
```
1. Import ffi package by addking following line under "dependencies" section in package.json
```
"ffi": "git+https://github.com/node-ffi/node-ffi.git"
```
1. Run npm i to compile ffi package.
```
npm i
```
