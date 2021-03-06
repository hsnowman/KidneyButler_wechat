angular.module('kidney.filters', [])
//毫秒数 to '10:32 AM' or '4/1/17 4:55 PM'（不是当天的话） XJZ
.filter('msgdate',['$filter',function($filter){
    return function(milliseconds){
        var curTime = new Date();
        var msgTime = new Date(milliseconds);
        if(curTime.toDateString()==msgTime.toDateString()) return $filter('date')(msgTime, 'h:mm a');
        return $filter('date')(msgTime, 'M/d/yy h:mm a');
    }
}])
.filter('dateFormat',['$filter',function($filter){
    return function(date,format){
        var d=new Date(date)
        var ret=""
        if(date==null)
            return "-"
        switch(format)
        {
            case "YYYY-MM-DD":
                ret=$filter('date')(d,'yyyy-MM-dd');
                break;
            case "MM-DD-YYYY":
                ret=$filter('date')(d,'MM-dd-yyyy');
                break;
            case "YYYY-MM-DD h:m":
                ret=$filter('date')(d,'yyyy-MM-dd HH:mm');
                
                break;
        }
        return ret;
    }
}])