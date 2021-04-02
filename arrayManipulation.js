function arrayManipulation(n,queries){
    var arr=new Array(n+1).fill(0);
    for(var i=0;i<queries.length;i++){
        var l=queries[i].length
        var k=queries[i][l-1]
        var b=queries[i][l-2]
        var a=queries[i][l-3];
        arr[a]=arr[a]+k;
        arr[b+1]=arr[b+1]-k;
    }

    var temp=0;
    for(var i=1;i<=n;i++) {
        arr[i]=arr[i]+arr[i-1]
        if(arr[i]>temp) temp=arr[i]
    }
  console.log( temp)

}

q=[[1,2,100],[2,5,100],[3,4,100]]
arrayManipulation(5,q)
