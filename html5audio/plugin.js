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

                    if ( align ) {
                        this.setData( 'align', align );
                    } else {
                        this.setData( 'align', 'none' );
                    }
                }
            },
            data: function() {
                this.element.getChild( 0 ).setAttribute( 'src', this.data.src );

                this.element.removeStyle( 'float' );
                this.element.removeStyle( 'margin-left' );
                this.element.removeStyle( 'margin-right' );

                if ( this.data.align === 'none' ) {
                    this.element.removeStyle( 'text-align' );
                } else {
                    this.element.setStyle( 'text-align', this.data.align );
                }

                if ( this.data.align === 'left' ) {
                    this.element.setStyle( 'float', this.data.align );
                    this.element.setStyle( 'margin-right', '10px' );
                } else if ( this.data.align === 'right' ) {
                    this.element.setStyle( 'float', this.data.align );
                    this.element.setStyle( 'margin-left', '10px' );
                }
            }
        } );

        if ( editor.contextMenu ) {
            editor.addMenuGroup( 'html5audioGroup' );
            editor.addMenuItem( 'html5audioPropertiesItem', {
                label: editor.lang.html5audio.audioProperties,
                icon: this.path + 'icons/html5audio.png',
                command: 'html5audio',
                group: 'html5audioGroup'
            });

            editor.contextMenu.addListener( function( element ) {
                if ( element &&
                     element.getChild( 0 ) &&
                     element.getChild( 0 ).hasClass &&
                     element.getChild( 0 ).hasClass( 'ckeditor-html5-audio' ) ) {
                    return { html5audioPropertiesItem: CKEDITOR.TRISTATE_OFF };
                }
            });
        }

        CKEDITOR.dialog.add( 'html5audio', this.path + 'dialogs/html5audio.js' );
    }
} );
