class TimeHelper {
    static getFormattedTime(timeInMs) {
        return `${timeInMs / 1000} seconds`;
    }

    static getFormattedDateTimeFromTimestamps() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const dateOfMonth = date.getDate();
        const hour = date.getHours();
        // const hour = ((date.getHours() + 24) % 12 || 12);
        const minute = date.getMinutes();
        const sec = date.getSeconds();
        const dateString = `${dateOfMonth}-${month}-${year}_${hour}-${minute}-${sec}`;
        
        return dateString;
    }
    
} 
module.exports = TimeHelper;

