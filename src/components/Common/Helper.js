
const mode = "production";
//production 

let helper = {
    ApiUrl: 'http://localhost:8080/api',
    ProductImgPath: 'http://localhost:8080/product/resize/',
    mainProductImgPath: 'http://localhost:8080/product/',
    settingHeaderLogoImg: 'http://localhost:8080/setting/headerLogo.jpg',
    settingPath: 'http://localhost:8080/setting/',
    settingFooterLogoImg: 'http://localhost:8080/setting/footerLogo.jpg',
    noImgPath: 'http://localhost:8080/noImg.png',
    BASE_URL: "http://localhost:3000"
}

if (mode == "production") {

    helper = {
        ApiUrl: 'https://one2furniture-api.onrender.com/api',
        ProductImgPath: 'https://one2furniture-api.onrender.com/product/resize/',
        mainProductImgPath: 'https://one2furniture-api.onrender.com/product/',
        settingPath: 'https://one2furniture-api.onrender.com/setting/',
        settingHeaderLogoImg: 'https://one2furniture-api.onrender.com/setting/headerLogo.jpg',
        settingFooterLogoImg: 'https://one2furniture-api.onrender.com/setting/footerLogo.jpg',
        noImgPath: 'https://one2furniture-api.onrender.com/noImg.png',
        BASE_URL: "https://12furniture.netlify.app"
    }
}
export function ImageExist(url) {
    var img = new Image();
    img.src = url;
    return img.height != 0 ? true : false;
}
export function uniqueDeviceId() {

    const uniq = localStorage.getItem("uniqueID");
    if (uniq != '' && uniq != null) {
        return uniq;
    } else {
        var navigator_info = window.navigator;
        var screen_info = window.screen;
        var uid = navigator_info.mimeTypes.length;
        uid += navigator_info.userAgent.replace(/\D+/g, '');
        uid += navigator_info.plugins.length;
        uid += screen_info.height || '';
        uid += screen_info.width || '';
        uid += screen_info.pixelDepth || '';
        uid = uid.substr(uid.length - 10)
        localStorage.setItem("uniqueID", uid);
        return uid
    }


}
export function priceFormat(m) {
    let price = parseInt(m)
    let nf = new Intl.NumberFormat('en-US');
    return nf.format(price)
}

export function getSettingValuebyName(name) {
    let settingNameValueData = localStorage.getItem("settingNameValueData");
    settingNameValueData = JSON.parse(settingNameValueData);
    let valueOfName = '';
    if (Array.isArray(settingNameValueData) && settingNameValueData?.length > 0) {
        let valObj = settingNameValueData.find(o => o.name == name)
        if (valObj != undefined) {
            valueOfName = valObj?.value
        }
    }
    return valueOfName;
}


export default helper;
