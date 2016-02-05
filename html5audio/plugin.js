CKEDITOR.plugins.add( 'html5audio', {
    requires: 'widget',
    lang: 'en,eu,es,ru',
    icons: 'html5audio',
    init: function( editor ) {
        editor.widgets.add( 'html5audio', {
            button: editor.lang.html5audio.button,
            template: '<div class="ckeditor-html5-audio"><audio src="" controls="controls"></audio></div>',
            editables: {},
            allowedContent: 'div(!ckeditor-html5-audio); audio;',
            requiredContent: 'div(ckeditor-html5-audio); audio',
            upcast: function( element ) {
                return element.name === 'div' && element.hasClass( 'ckeditor-html5-audio' );
            },
            dialog: 'html5audio',
            init: function() {
                var src = this.element.getChild( 0 ).getAttribute( 'src' );
                var align = this.element.getStyle( 'text-align' );
                if ( src ) {
                    this.setData( 'src', src );
                }
                if ( align ) {
                    this.setData( 'align', align );
                }
            },
            data: function() {
                this.element.getChild( 0 ).setAttribute( 'src', this.data.src );
                
                if ( this.data.align !== 'none' ) {
                    this.element.setStyle( 'text-align', this.data.align );
                } else {
                    this.element.removeStyle( 'text-align' );
                }
            }
        } );
        CKEDITOR.dialog.add( 'html5audio', this.path + 'dialogs/html5audio.js' );
    }
} );
