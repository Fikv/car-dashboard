import CarShema from "@/model/car"

export function createCarLog():CarShema{
    return {
        id:Math.round((Math.random() * (5 - 1) + 1)),
        batteryStatus:Math.random() * 100,
        motorRight:Math.random() * (200) - 100,
        motorLeft:Math.random() * (200) - 100,
        logDate: new Date().toISOString()
    };
}