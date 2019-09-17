/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-17 11:46:15
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-17 12:48:56
 */
tinymce.PluginManager.add('indent2em', function (editor, url) {
    var pluginName = '首行缩进';
    var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');
    var indent2em_val = editor.getParam('indent2em_val', '2em');
    var doAct = function () {
        var dom = editor.dom;
        var blocks = editor.selection.getSelectedBlocks();
        var act = '';
        global$1.each(blocks, function (block) {
            if (act == '') {
                act = dom.getStyle(block, 'text-indent') == indent2em_val ? 'remove' : 'add';
            }
            if (act == 'add') {
                dom.setStyle(block, 'text-indent', indent2em_val);
            } else {
                var style = dom.getAttrib(block, 'style');
                style = style.replace(/text-indent:[\s]*2em;/ig, '');
                dom.setAttrib(block, 'style', style);
            }

        });
    };

    editor.ui.registry.addButton('indent2em', {
        text: '<svg t="1568695694928" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2703" width="24" height="24"><path d="M1024 226.461538c0-15.753846-13.784615-29.538462-29.538462-29.538461h-334.76923c-15.753846 0-29.538462 13.784615-29.538462 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538462 29.538461h334.76923c15.753846 0 29.538462-13.784615 29.538462-29.538461v-59.076924z m-78.769231 472.615385c0-15.753846-13.784615-29.538462-29.538461-29.538461h-256c-15.753846 0-29.538462 13.784615-29.538462 29.538461v59.076923c0 15.753846 13.784615 29.538462 29.538462 29.538462h256c15.753846 0 29.538462-13.784615 29.538461-29.538462v-59.076923z m78.769231-236.307692c0-15.753846-13.784615-29.538462-29.538462-29.538462h-334.76923c-15.753846 0-29.538462 13.784615-29.538462 29.538462v59.076923c0 15.753846 13.784615 29.538462 29.538462 29.538461h334.76923c15.753846 0 29.538462-13.784615 29.538462-29.538461v-59.076923z m-472.615385-354.461539c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076923c-15.753846 0-29.538462 13.784615-29.538462 29.538461v807.384616c0 15.753846 13.784615 29.538462 29.538462 29.538461h59.076923c15.753846 0 29.538462-13.784615 29.538461-29.538461v-807.384616zM185.107692 301.292308c-11.815385-11.815385-27.569231-1.969231-27.56923 17.723077V433.230769H29.538462c-15.753846 0-29.538462 13.784615-29.538462 29.538462v59.076923c0 15.753846 13.784615 29.538462 29.538462 29.538461H157.538462v116.184616c0 19.692308 17.723077 29.538462 27.56923 17.723077l163.446154-177.23077c5.907692-7.876923 5.907692-19.692308 0-27.56923l-163.446154-179.2z" p-id="2704" fill="#222f3e"></path></svg>',
        tooltip: pluginName,
        onAction: function () {
            doAct();
        }
    });

    editor.ui.registry.addMenuItem('indent2em', {
        text: pluginName,
        onAction: function () {
            doAct();
        }
    });

    return {
        getMetadata: function () {
            return {
                name: pluginName,
                url: "http://tinymce.ax-z.cn/more-plugins/indent2em.php",
            };
        }
    };
});