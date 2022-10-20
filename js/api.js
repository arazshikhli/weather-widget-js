// //124a7739c2014e0dfc7f19a9c07fa3d2
// //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// //api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
export const getWeatherData=async (city)=>{
try{
    // 501f0822ab639797091ce0885a6ddb58
    // 124a7739c2014e0dfc7f19a9c07fa3d2
    const response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=49c9532416e7538ad2649c8362c1b14d`);
        return await response.json();
}
catch(error){
    console.log(error);
}
}



// // const getWeatherData= (city)=>{
// //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=108e26c67abcd4b48808f637110343f0`)
// //     .then(response=>response.json())
// //     .then(console.log(response))
// // }