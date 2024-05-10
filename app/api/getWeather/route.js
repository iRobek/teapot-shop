import { CropLandscapeOutlined } from "@mui/icons-material";

export async function  GET(reqmres) {

    const res2 = await fetch('http://api.weatherapi.com/v1/current.json?key=ff123911a82e4de5877213321241005&q=Dublin&aqi=no')
    const data = await res2.json();

    console.log(data.current.temp_c)

    let currTemp= data.current.temp_c;
    return Response.json({"temp": currTemp});
}