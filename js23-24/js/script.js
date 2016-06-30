
requirejs.config({
	paths: {
		'jquery': 'http://code.jquery.com/jquery-1.12.4.min',
		'template': 'lib/tmpl',
		'model': 'app/model',
		'view': 'app/view',
		'controller': 'app/controller'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'template': {
			exports: 'template'
		}
	}
});

require(
	['jquery', 'template', 'model', 'view', 'controller'],
	function ($, template, model, view, controller) {
		var iniToDoList = ['It works!', 'It works!', 'It works!'];
		var model = new model(iniToDoList);
		var view = new view(model);
		var controller = new controller(model, view);
	}
);
