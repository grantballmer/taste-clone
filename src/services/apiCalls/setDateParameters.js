module.exports.setDateParameters = function(lowerLimit, upperLimit) {
    let beginDate = new Date();
    beginDate.setDate(beginDate.getDate() - lowerLimit);
    
    let endDate = new Date();
    endDate.setDate(endDate.getDate() + upperLimit);
    
    function getYearMonthDay(dateObj) {
        const year = dateObj.getUTCFullYear();
        const month = dateObj.getUTCMonth() + 1;
        const day = dateObj.getUTCDate();
        

        
        return `${year}-${month}-${day}`;
    }
    
    endDate = getYearMonthDay(endDate);
    beginDate = getYearMonthDay(beginDate);
    
    return [beginDate, endDate];
};

