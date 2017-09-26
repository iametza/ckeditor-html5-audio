# ckeditor-html5-audio

## Introduction

ckeditor-html5-audio is a CKEditor plugin that allows the easy insertion of HTML5 audio players.

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

* **Chinese**: [郑东武](https://github.com/machinelll)
* **Farsi (Persian)**: [Mohammad Hossein Rabiee](https://github.com/mhrabiee)
* **French**: [Simon Georget](https://github.com/simogeo)
* **German**: [Mischa Sameli](https://github.com/jenzener)
* **Greek**: [Dimitris Kritsotakis](https://github.com/dimitriskr)
* **Russian**: [smartcorestudio](https://github.com/smartcorestudio)
* **Ukrainian** [Sensetivity](https://github.com/Sensetivity)
* **Uzbek** [Bahriddin Abdiev](https://github.com/bahriddin)

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
    lang: 'de,el,en,eu,es,fa,fr,ru,uk,uz,zh-cn',
    ```

6. Create a pull request with your changes.

## Version history

### 1.4.1 - 2017-09-26

* Added Farsi (Persian) translation. Thanks [Mohammad Hossein Rabiee](https://github.com/mhrabiee)!

### 1.4.0 - 2017-07-17

* Added an option to disable download. Code contributed by [Nour Akalay](https://github.com/mnakalay). Thanks!

### 1.3.8 - 2017-06-10

* Added Greek translation. Thanks [Dimitris Kritsotakis](https://github.com/dimitriskr)!

### 1.3.7 - 2017-05-31

* Changed Chinese language code from zh to zh-cn. CKEditor Builder doesn't include zh.

### 1.3.6 - 2017-05-31

* Added Chinese translation. Thanks [郑东武](https://github.com/machinelll)!

### 1.3.5 - 2017-01-04

* Added Uzbek translation. Thanks [Bahriddin Abdiev](https://github.com/bahriddin)!

### 1.3.4 - 2016-10-10

* Added French translation. Thanks [Simon Georget](https://github.com/simogeo)!

### 1.3.3 - 2016-08-23

* Added German translation. Thanks [Mischa Sameli](https://github.com/jenzener)!

### 1.3.2 - 2016-07-27

* Fixed [#9](https://github.com/iametza/ckeditor-html5-audio/issues/9): Undefined resource fetched while opening the audio dialog
* Fixed [#10](https://github.com/iametza/ckeditor-html5-audio/issues/10): Missing icon for the context menu in built version

### 1.3.1 - 2016-06-16

* Added Ukrainian translation. Thanks [Sensetivity](https://github.com/Sensetivity)!

### 1.3.0 - 2016-06-14

* Added option to set autoplay attribute

### 1.2.0 - 2016-05-19

* Bug fixes:

    * Didn't work with the Basic Package due to missing translation strings.

        https://github.com/iametza/ckeditor-html5-audio/issues/3

    * Going back and forth to source code edition removed attributes and styles.

        https://github.com/iametza/ckeditor-html5-audio/issues/4

### 1.1.0 - 2016-02-12

* Added context menu
* Fixed the left/right alignment

### 1.0.1 - 2016-02-05

* Added Russian translation. Thanks [smartcorestudio](https://github.com/smartcorestudio)!
* Small bugfixes and improvements

### 1.0.0 - 2016-02-05
* Initial release

## License

ckeditor-html5-audio is free software/open source, and is distributed under the [GNU General Public License v3](http://www.gnu.org/licenses/gpl.html) license.

<a rel="license" href="http://www.gnu.org/licenses/gpl.html"><img alt="GNU General Public License version 3" style="border-width:0" src="http://www.gnu.org/graphics/gplv3-127x51.png" /></a>
