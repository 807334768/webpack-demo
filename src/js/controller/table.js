/*let table=angular.module('table',[])
.controller('tableCtrl',function ($scope,$http,$rootScope){
	$scope.formView={
		cla:"form-inline",
		name:'formName',
		sonC:[
                
                 {
                    title: "编号",
                    type:"text",
                    name:'id',
                    value:''
                },{
                	title:'日期',
                	type:'timepicker',
                	name:'timpicker',
                    value:''
                },
                 {
                    title: "类型",
                    type:"select",
                    name:'type',
                    value:'',
                    content:[
                                {value:"op1",text:"下拉一"},
                                {value:"op2",text:"下拉二"},
                                {value:"op2",text:"下拉三"}
                        ]
                },{
                	title:'名称',
                	type:'text',
                	name:'name',
                    value:''
                }

        ]};
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
	  $scope.paginationConf = {
	        currentPage:'1',
	        totalItems:'',
	        itemsPerPage:''
	}
	
	$scope.paginationConf.totalItems =10;//总条数
	$scope.paginationConf.currentPage = 2;//当前页码
	$scope.paginationConf.itemsPerPage =2;//每页条数
	var dataList=function (){
	   
		  $scope.tableV.body=[
			[
			Math.round(Math.random()*9+1),Math.round(Math.random()*9+1),Math.round(Math.random()*9+1),
			],
			[
			Math.round(Math.random()*9+1),Math.round(Math.random()*9+1),Math.round(Math.random()*9+1),

			],[
			Math.round(Math.random()*9+1),Math.round(Math.random()*9+1),Math.round(Math.random()*9+1),
			],
		]
	        
	}
	  $scope.$watch('paginationConf.currentPage',dataList);
});
 module.exports=table;*/

table.$inject = ['$scope', '$http', '$rootScope'];
export default function table($scope,$http,$rootScope){
	$scope.formView={
		cla:"form-inline",
		name:'formName',
		sonC:[
                
                 {
                    title: "编号",
                    type:"text",
                    name:'id',
                    value:''
                },{
                	title:'日期',
                	type:'timepicker',
                	name:'timpicker',
                    value:''
                },
                 {
                    title: "类型",
                    type:"select",
                    name:'type',
                    value:'',
                    content:[
                                {value:"op1",text:"下拉一"},
                                {value:"op2",text:"下拉二"},
                                {value:"op2",text:"下拉三"}
                        ]
                },{
                	title:'名称',
                	type:'text',
                	name:'name',
                    value:''
                }

        ]};
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
	  $scope.paginationConf = {
	        currentPage:'1',
	        totalItems:'',
	        itemsPerPage:''
	}
	
	$scope.paginationConf.totalItems =10;//总条数
	$scope.paginationConf.currentPage = 2;//当前页码
	$scope.paginationConf.itemsPerPage =2;//每页条数
	var dataList=function (){
	   
		  $scope.tableV.body=[
			[
			Math.round(Math.random()*9+1),Math.round(Math.random()*9+1),Math.round(Math.random()*9+1),
			],
			[
			Math.round(Math.random()*9+1),Math.round(Math.random()*9+1),Math.round(Math.random()*9+1),

			],[
			Math.round(Math.random()*9+1),Math.round(Math.random()*9+1),Math.round(Math.random()*9+1),
			],
		]
	        
	}
	  $scope.$watch('paginationConf.currentPage',dataList);
}