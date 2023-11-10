function celsius_to_fahrenheit(temp){
    return temp * 1.8 + 32;
}

function fahrenheight_to_celsius(temp){
    return (5/9) * (temp - 32);
}

function main(){
    let celsius_temp = 100;
    let fahrenheight_temp = 212;

    console.log(`Celsius: ${celsius_temp}, Fahrenheight: ${celsius_to_fahrenheit(celsius_temp)}.`);
    console.log(`Fahrenheight: ${fahrenheight_temp}, Celsius: ${fahrenheight_to_celsius(fahrenheight_temp)}.`);
    
}
main()