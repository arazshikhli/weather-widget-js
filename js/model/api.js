// //124a7739c2014e0dfc7f19a9c07fa3d2
// //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// //api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
export const getWeatherData=async (city)=>{
try{

    const response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=49c9532416e7538ad2649c8362c1b14d`);

        return await response.json();
}
catch(error){
    console.log(error);
}
}

export class Weather{
    cityName;
    day;
    temperature;
    feelsLikeTemp;
    humidity;
    pressure;
    cloudIcon;
    cloudDescription;
    windSpeed;
    constructor (cityName,day,temperature,feelsLikeTemp,humidity,pressure,
        cloudIcon,cloudDescription,windSpeed){
            this.cityName=cityName;
            this.day=day;
            this.temperature=temperature;
            this.feelsLikeTemp=feelsLikeTemp;
            this.humidity=humidity;
            this.pressure=pressure;
            this.cloudIcon=cloudIcon;
            this.cloudDescription=cloudDescription;
            this.windSpeed=windSpeed;
        }
        // constructor(){

        // }

    getDay(){
        
    }
}

