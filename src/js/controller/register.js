/*let register=angular.module('register',[])
.controller('registerCtrl',function ($scope,$http,$rootScope){
	$scope.name="wangyan";
	$scope.formView={
		cla:"form-horizontal",
		name:'formName',
		sonC:[
               
                 {
                    title: "邮箱",
                    type:"text",
                    name:'id',
                    value:''
                },{
                	title:'密码',
                	type:'text',
                	name:'pwd',
                	value:''
                },{
                	title:'复选框',
                	type:'checkbox',
                	name:'hobby',
                	value:'',
                	content:[
                		{text:'选项一',checked:true,value:'a'},
                		{text:'选项二',checked:false,value:'b'},
                		{text:'选项二',checked:true,value:'c'}
                	]
                },{
                	title:'单选按钮',
                	type:'radio',
                	name:'sex',
                	value:'',
                	content:[
                		{text:'选项一',checked:true,value:'111'},
                		{text:'选项二',checked:false,value:'222'}
                	]
                }

        ]
	}

	$scope.tableV={
		 "head":[
		    "Alfreds Futterkiste",
		     "Germany",
		    "Berlin"
		  ],
		"body":[
			[
			"1","1","1",
			],
			[
			"2","2","2",

			],[
			"3","3","3",
			],
		]}
	$scope.searchId=function (){
		console.log($scope.formView)
	}
});
 module.exports=register;*/
register.$inject = ['$scope', '$http', '$rootScope'];
export default function register($scope,$http,$rootScope){
	$scope.name="wangyan";
	$scope.formView={
		cla:"form-horizontal",
		name:'formName',
		action:'www.baodu.com',
		sonC:[
               
                 {
                    title: "邮箱",
                    type:"text",
                    name:'email',
                    value:''
                },{
                	title:'密码',
                	type:'password',
                	name:'password',
                	value:''
                },{
                	title:'确认密码',
                	type:'password',
                	name:'repassword',
                	value:''
                },{
                	title:'复选框',
                	type:'checkbox',
                	name:'checkbox[]',
                	value:'',
                	content:[
                		{text:'选项一',checked:true,value:'a'},
                		{text:'选项二',checked:false,value:'b'},
                		{text:'选项二',checked:true,value:'c'}
                	]
                },{
                	title:'单选按钮',
                	type:'radio',
                	name:'radio[]',
                	value:'',
                	content:[
                		{text:'选项一',checked:true,value:'111'},
                		{text:'选项二',checked:false,value:'222'}
                	]
                }

        ]
	}

	$scope.tableV={
		 "head":[
		    "Alfreds Futterkiste",
		     "Germany",
		    "Berlin"
		  ],
		"body":[
			[
			"1","1","1",
			],
			[
			"2","2","2",

			],[
			"3","3","3",
			],
		]}
	$scope.searchId=function (){
		console.log($scope.formView)
	}
}