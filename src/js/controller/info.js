/*let info=angular.module('info',[])
.controller('infoCtrl',function ($scope,$http,$rootScope){
	$scope.infoV=[
		{
			"title":'个人信息',
			"infoList":[
				{ name :"姓名", content:"王妍"},
				{name:'手机号',content:'15652790415'}
			]
		},
		{
			"title":'whatever',
			"infoList":[
				{ name :"姓名", content:"who cares"},
				{name:'手机号',content:'who knows'}
			]
		}
	]
});
 module.exports=info;*/
info.$inject = ['$scope', '$http', '$rootScope'];
export default function info($scope,$http,$rootScope){
	$scope.infoV=[
		{
			"title":'个人信息',
			"infoList":[
				{ name :"姓名", content:"王妍"},
				{name:'手机号',content:'15652790415'}
			]
		},
		{
			"title":'whatever',
			"infoList":[
				{ name :"姓名", content:"who cares"},
				{name:'手机号',content:'who knows'}
			]
		}
	]
}