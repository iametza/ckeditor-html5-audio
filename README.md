# ckeditor-html5-audio

## Introduction

ckeditor-html5-audio is a CKEditor plugin that allows to insert HTML5 audio easily.

## Installation

Available on the official CKEditor add-on repository:

http://ckeditor.com/addon/html5audio

If you want to add the plugin manually, you will need to:

1. Extract the html5audio folder into the plugins folder of your CKEditor installation. Example:

    ```
    http://example.com/ckeditor/plugins/html5audio
    ```

2. Enable the plugin by using the extraPlugins configurations setting. Example:

    ```
    config.extraPlugins = 'html5audio';
    ```

3. Download and configure all its dependencies, too.

### Add-on Dependencies

[Widget](http://ckeditor.com/addon/widget)

## Translations

We want to thank all the people who helped translating this plugin:

* **Russian**: smartcorestudio

More translations are welcome and will be included in next releases. If you want to translate this plugin to your language follow these steps:

1. Fork this project

2. Create a new file in the html5/lang/ folder. The name of the file must be the two letter code of your language dot js. For example, fr.js for the French translation.

3. Copy the contents of the English translation (html5audio/lang/en.js) and paste them in your new file.

4. Translate the strings to your language and change the two letter code of the language in the first line of the file:

    ```
    CKEDITOR.plugins.setLang( 'html5audio', 'en', {
    ```

5. Add the two letter code of your language to the string in the third line of the plugin.js file:

    ```
    lang: 'en,eu,es,ru',
    ```

6. Create a pull request with your changes.

## License

ckeditor-html5-audio is free software/open source, and is distributed under the GNU General Public License (GPL) version 3 license.
