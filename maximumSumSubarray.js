//Kadanes algorithms

a=[1,2,-3,4,5,-6]
function maximumSumSubarray(arr){

var flag=false;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
        flag=true;
        }
    }
    if(flag)
    {
         var maxSum = 0
         var currentSum = 0
        for(var i=0;i<arr.length;i++){
             currentSum+=arr[i];
             if(currentSum>maxSum){
                 maxSum = currentSum;
             }
             if(currentSum<0){
                currentSum =0
            }
        } 

    console.log(maxSum);
    }
    else{
        var temp=arr[0];
        for(var i=0;i<arr.length;i++){
                if(arr[i]>temp)
                        temp=arr[i];

        }
        console.log(temp)
    }
   
}
maximumSumSubarray(a)
