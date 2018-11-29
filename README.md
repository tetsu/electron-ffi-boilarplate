# electron-ffi-boilerplate
A boilerplate to run Windows DLL in Electron apps.

1. Install node in your Windows computer.
1. Clone this project in your prefered folder.

    ```
    git clone git@github.com:tetsu/electron-ffi-boilarplate.git
    ```

1. Move to electron-ffi-boilarplate folder.

    ```
    cd electron-ffi-boilarplate
    ```

1. Install Windows Build Tools and create path.

    ```
    npm --add-python-to-path install --global windows-build-tools
    ```

1. Import other packages for this project.

    ```
    npm i
    ```

1. Rebuild Electron to use ffi.

    ```
    .\node_modules\.bin\electron-rebuild
    ```

1. Download "sqlite3.dll" from [SQLITE download page](https://www.sqlite.org/download.html), and copy "sqlite3.dll" in the root folder of this project.

1. Run this program.

```
npm start
```
