define([
    'editor',
    'plugins/index'
], function(editor, plugins) {

    return function(element) {
        var editor = new editor(element);

        plugins.forEach(function(plugin) {
            plugin(editor);
        });

        return editor;
    };

});
