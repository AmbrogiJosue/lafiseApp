import { Dimensions } from "react-native";

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('screen')

export const hp = (percentage:number) => {
    return (percentage*deviceHeight) / 100;
}

export const wp = (percentage:number) => {
    return (percentage*deviceWidth) / 100;
}

export const capitalize = (str: string) =>{
    return str. replace(/\b\w/g, l => l.toUpperCase())
}