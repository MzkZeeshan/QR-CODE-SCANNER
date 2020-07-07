

// import Constants from "./constant"
// import AsyncStorage from '@react-native-community/async-storage';
// import I18n from 'react-native-i18n'
// import translations from './i18n.json';
import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;



class Global {
    static STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;


    // static saveDataInPhone(key, data) {
    //     let data1 = JSON.stringify(data);
    //     AsyncStorage.setItem(key, data1)
    //         .then(() => {
    //             console.log('data saved', data1)
    //         })
    // }
    // static getDataFromPhone(key) {
    //     return new Promise(resolve => {
    //         AsyncStorage.getItem(key)
    //             .then((res) => {
    //                 let data = JSON.parse(res);
    //                 console.log(res, 'res')
    //                 resolve(data)
    //                 // return data
    //             })
    //     })
    // }
    // static removeStorage(key) {
    //     AsyncStorage.removeItem(key)
    //         .then(() => {
    //             console.log('removed')
    //         })
    // }
}
export default Global