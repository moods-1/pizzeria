export class DateFormatter{
         
    shortMonth = monthNumber =>{
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                     "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[monthNumber];
    }
    fullDay = dayNumber =>{
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday",
                    "Friday","Saturday"];
        return days[dayNumber];
    }

    shortDay = dayNumber =>{
        let days = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
        return days[dayNumber];
    }
    
    fullMonth = monthNumber =>{
        let months = ["January", "February", "March", "April", "May",
                     "June", "July", "August", "September", "October",
                     "November", "December"];
        return months[monthNumber];
    }
    
    currentTime = () =>{
        let d = new Date();
        let shortMonth = this.shortMonth(d.getMonth());
        let fullMonth = this.fullMonth(d.getMonth());
        let fullDay = this.fullDay(d.getDay());
        let dayShort = this.shortDay(d.getDay());
        let year = d.getFullYear();
        let date = d.getDate();
        let hour =  d.getHours();
        let minutes = d.getMinutes();
        let meridiem = '';
        if(hour===12){
            meridiem = "PM"
        }else if (hour === 0) {
            hour = 12;
            meridiem = "AM";
        }else if (hour >= 13) {
            hour = hour - 12;
            meridiem = "PM";
        }else meridiem = "AM";
        
        if(minutes < 10){
            minutes = '0' + minutes;
        }
        
        return {year, shortMonth, fullMonth, dayShort, fullDay, date, hour, minutes, meridiem};
    }
}