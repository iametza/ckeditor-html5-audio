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
                var float = this.element.getStyle( 'float' );
                if ( src ) {
                    this.setData( 'src', src );
                }
                if ( align ) {
                    this.setData( 'align', align );
                } else if ( float ) {
                    this.setData( 'align', float );
                }
            },
            data: function() {
                this.element.getChild( 0 ).setAttribute( 'src', this.data.src );

                this.element.removeStyle( 'float' );
                this.element.removeStyle( 'text-align' );
                this.element.removeStyle( 'margin-left' );
                this.element.removeStyle( 'margin-right' );

                if ( this.data.align === 'center' ) {
                    this.element.setStyle( 'text-align', this.data.align );
                } else if ( this.data.align === 'left' ) {
                    this.element.setStyle( 'float', this.data.align );
                    this.element.removeStyle( 'text-align' );
                    this.element.setStyle( 'margin-right', '10px' );
                } else if ( this.data.align === 'right' ) {
                    this.element.setStyle( 'float', this.data.align );
                    this.element.removeStyle( 'text-align' );
                    this.element.setStyle( 'margin-left', '10px' );
                }
            }
        } );
        CKEDITOR.dialog.add( 'html5audio', this.path + 'dialogs/html5audio.js' );
    }
} );
