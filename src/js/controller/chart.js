chart.$inject = ['$scope', '$http', '$rootScope'];
export default function chart($scope,$http,$rootScope){
	 var vm = this;
     vm.charts = {
          options: {
              chart: {
                   type: 'line',
                   zoomType: 'x'
              },
              tooltip: {
                  xDateFormat: '%Y-%m-%d %H:%M:%S',
                  valueDecimals: 2
              },
              xAxis: {
              	categories: ['2016-01-01', '2016-01-02', '2016-01-03', '2016-01-04', '2016-01-05', '2016-01-06','2016-01-07', '2016-01-08', '2016-01-09', '2016-01-10', '2016-01-11', '2016-01-12'] 
              },
              yAxis: { 
              	title: { 
              		text: '金额（元）' 
              	},
                plotLines: [
                	{
                		value: 0,
                		width: 1,
                		color: '#808080' 
                	}
                	]
              },
          
          series: [
            { 
           	name: '金额',
           	data: [1,2,3,4,5,6,7,8,9,10,11,12] 
            }
            ],
　　　　　 title: {
              text: '单日交易总额'
        	},
          credits:{
              enabled:false 
          }
          
          }
     } 
}
