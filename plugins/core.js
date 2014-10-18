define([], function() {
    return function(editor) {
        var plugin = editor.Plugin.create('core');
        plugin.addAction('html', function(editor, value) {
            editor.element.exec('insertHTML', value);
        });
    };
});
