define([], function() {
    function Editable(element) {
        if (element) {
            element = document.createElement('div');
        }

        this.element = element;

        this.element.contentEditable = true;

        this.exec = function(command, value) {
            return this.element.execCommand(command, true, value);
        };
    };

    function PluginModel() {
        var actions = {};

        this.do = function(editor, action, value) {
            return actions[action](editor, value);
        };

        this.addAction = function(name, action) {
            if (actions[name]) {
                console.warning('Redefinig action ' + name);
            }

            this.actions[name] = action;
        };
    };

    function PluginManager () {
        var plugins = {};

        this.plugins = function(name) {
            return name ? plugins[name] : plugins;
        };

        this.create = function(name) {
            if (instanceof plugins[name] === 'PluginModel') {
                console.warning('Redefining plugin ' + name);
            }

            var plugin = new PluginModel();
            plugins[name] = plugin;
        };

    };

    function Editor(element) {
        this.Plugin = new PluginManager();
        this.element = new Editable(element);
        this.$element = this.element.element;

        this.do = function(plugin, action, value) {
            this.plugins(plugin).do(this, action, value);
        };
    }

    return Editor;
});
