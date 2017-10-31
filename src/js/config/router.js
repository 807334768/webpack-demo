routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
		    $stateProvider
		        .state('index',{
		            url:'/index',
		            views:{
		               '':{
		                 templateUrl:'page/console.html'
		               }
		            }
		        }).state('search',{
		            url:'/search',
		            views:{
		               '':{
		                 templateUrl:'page/console.html'
		               },
		               'rightDiv@search':{
		                    templateUrl:'page/search.html'
		               },
		                'formView@search':{
		                	templateUrl:'page/components/formView.html'
		                },
		                'tableView@search':{
		                	templateUrl:'page/components/tableView.html'
		                },
		            }
		        }).state('table',{
		            url:'/t.table',
		            views:{
		               '':{
		                 templateUrl:'page/console.html'
		               },
		               'rightDiv@table':{
		                    templateUrl:'page/table.html'
		               },
		                'formView@table':{
		                	templateUrl:'page/components/formView.html'
		                },
		                'tableView@table':{
		                	templateUrl:'page/components/tableView.html'
		                },
		            }
		        }).state('chart',{
		            url:'/chart',
		            views:{
		               '':{
		                 templateUrl:'page/console.html'
		               },
		               'rightDiv@chart':{
		                    templateUrl:'page/chart.html'
		               },
		               'chartView@chart':{
		                    templateUrl:'page/components/chartView.html'
		               }
		            }
		        })
		        .state('register',{
		            url:'/f.register',
		            views:{
		               '':{
		                 templateUrl:'page/console.html'
		               },
		               'rightDiv@register':{
		                    templateUrl:'page/register.html'
		               },
		                'formView@register':{
		                	templateUrl:'page/components/formView.html'
		                }
		            }
		        }).state('info',{
		            url:'/info',
		            views:{
		               '':{
		                 templateUrl:'page/console.html'
		               },
		               'rightDiv@info':{
		                    templateUrl:'page/info.html'
		               },
		                'infoView@info':{
		                	templateUrl:'page/components/infoView.html'
		                }
		            }
		        })
}