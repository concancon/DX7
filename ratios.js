var ratio = [0.5,0.71,0.78,0.87,1.0,1.41,1.57,1.73,2.0,2.82,3.0,3.14,3.46,4.0,4.24,4.71,5.,5.19,5.65,6., 6.28, 6.92, 7., 7.07, 7.85, 8., 8.48, 8.65, 9., 9.42, 9.89, 10., 10.38, 10.99, 11., 11.3, 12., 12.11, 12.56, 12.72, 13., 13.84, 14., 14.1, 14.13, 15., 15.55, 15.57, 15.7, 16.96, 17.27, 17.3, 18.37, 18.84, 19.03, 19.78, 20.41, 20.76, 21.2, 21.98, 22.49, 23.55, 24.22, 25.95];
var range = 10;


var randFunc = 	function(){
	
			return Math.ceil(Math.random() * range); 

		}
function setRange(i){
		range = i;

}

function bang(){
		
	
	//var output = [ratio[randFunc()], ratio[randFunc()], ratio[randFunc()], ratio[randFunc()], ratio[randFunc()], ratio[randFunc()]];
	var output = [randFunc(), randFunc(), randFunc(), randFunc(), randFunc(), randFunc()]
	outlet(0, output);
} 