/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-17 11:46:15
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-17 11:46:15
 */
tinymce.PluginManager.add('bdmap', function (editor, url) {
	var pluginName = '插入百度地图';
	var baseURL = tinymce.baseURL;
	var iframe1 = baseURL + '/plugins/bdmap/map.html';
	var bdmap_width = function (editor) {
		return editor.getParam('bdmap_width', 560);
	};
	var bdmap_height = function (editor) {
		return editor.getParam('bdmap_height', 362);
	};
	window.tinymceLng = '';
	window.tinymceLat = '';
	var openDialog = function () {
		return editor.windowManager.openUrl({
			title: pluginName,
			size: 'large',
			//width: 800,
			//height: 500,
			url: iframe1,
			buttons: [{
					type: 'cancel',
					text: 'Close'
				},
				{
					type: 'custom',
					text: 'Save',
					name: 'save',
					primary: true
				},
			],
			onAction: function (api, details) {
				switch (details.name) {
					case 'save':
						html = '<iframe src="' + baseURL + '/plugins/bdmap/bd.html?center=' + tinymceLng + '%2C' + tinymceLat + '&zoom=14&width=' + (bdmap_width(editor) - 2) + '&height=' + (bdmap_height(editor) - 2) + '" frameborder="0" style="width:' + bdmap_width(editor) + 'px;height:' + bdmap_height(editor) + 'px;">';
						editor.insertContent(html);
						api.close();
						break;
					default:
						break;
				}

			}
		});
	};

	editor.ui.registry.addButton('bdmap', {
		//icon: 'preferences',
		text: '<svg t="1568696110412" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10227" width="24" height="24"><path d="M307.2 640a25.6 25.6 0 0 1-25.6 25.6H238.5664L128.8448 921.6h766.3104L785.408 665.6H742.4a25.6 25.6 0 0 1 0-51.2h43.0336a51.2 51.2 0 0 1 47.0528 31.0272l109.7216 256A51.2 51.2 0 0 1 895.1552 972.8H128.8448a51.2 51.2 0 0 1-47.0528-71.3728l109.7216-256A51.2 51.2 0 0 1 238.5664 614.4H281.6a25.6 25.6 0 0 1 25.6 25.6zM204.8 303.6928C204.8 135.9616 342.3488 0 512 0s307.2 135.9616 307.2 303.6928c0 74.7264-27.2896 143.1296-72.5504 196.0448l-212.5312 284.416a25.6 25.6 0 0 1-40.96 0.0768L289.4592 513.024A300.8512 300.8512 0 0 1 204.8 303.6928z m500.8128 165.376l2.1248-2.6112A249.1904 249.1904 0 0 0 768 303.6928C768 164.3776 653.5168 51.2 512 51.2s-256 113.1776-256 252.4928a249.6 249.6 0 0 0 70.3488 173.8496l2.176 2.2528 185.0368 246.3488 192.0512-257.0496zM512 435.2a128 128 0 1 1 0-256 128 128 0 0 1 0 256z m0-51.2a76.8 76.8 0 1 0 0-153.6 76.8 76.8 0 0 0 0 153.6z" p-id="10228" fill="#222f3e"></path></svg>',
		tooltip: pluginName,
		onAction: function () {
			openDialog();
		}
	});
	editor.ui.registry.addMenuItem('bdmap', {
		text: pluginName,
		onAction: function () {
			openDialog();
		}
	});
	return {
		getMetadata: function () {
			return {
				name: pluginName,
				url: "http://tinymce.ax-z.cn/more-plugins/bdmap.php",
			};
		}
	};
});