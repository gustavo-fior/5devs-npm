"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUtils = void 0;
const uuid_1 = require("uuid");
const random_ipv6_1 = __importDefault(require("random-ipv6"));
const getUtils = () => {
    const ipv4 = generateIpv4();
    const ipv6 = generateIpv6();
    const mac = generateMac();
    const browser = generateBrowser();
    const os = generateOs();
    const device = generateDevice(os ?? "");
    const timezone = generateTimezone();
    const uuidv1 = generateUuidv1();
    const uuidv4 = generateUuidv4();
    return {
        ipv4,
        ipv6,
        mac,
        browser,
        os,
        device,
        timezone,
        uuidv1,
        uuidv4,
    };
};
exports.getUtils = getUtils;
const generateIpv4 = () => {
    const firstOctet = Math.floor(Math.random() * 255);
    const secondOctet = Math.floor(Math.random() * 255);
    const thirdOctet = Math.floor(Math.random() * 255);
    const fourthOctet = Math.floor(Math.random() * 255);
    return `${firstOctet}.${secondOctet}.${thirdOctet}.${fourthOctet}`;
};
const generateIpv6 = () => {
    const ipv6 = (0, random_ipv6_1.default)();
    return ipv6;
};
const generateMac = () => {
    const macAddress = Array.from({ length: 6 }, () => Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0")).join(":");
    // To ensure the MAC address is valid, set the second-least significant bit of the
    // first byte to 1 for locally administered MAC addresses
    const firstByte = macAddress.split(":")[0];
    const firstByteHex = parseInt(firstByte ?? "0", 16);
    const validFirstByteHex = (firstByteHex | 0x02) & 0xfe; // Set the second-least significant bit
    const validFirstByte = validFirstByteHex.toString(16).padStart(2, "0");
    const validMACAddress = `${validFirstByte}:${macAddress.slice(3)}`;
    return validMACAddress;
};
const generateBrowser = () => {
    const browsers = [
        "Chrome",
        "Firefox",
        "Safari",
        "Edge",
        "Opera",
        "Brave",
        "Vivaldi",
        "Arc",
    ];
    const browser = browsers[Math.floor(Math.random() * browsers.length)];
    return browser;
};
const generateOs = () => {
    const oss = [
        "Windows",
        "MacOS",
        "Android",
        "iOS",
        "Ubuntu",
        "Debian",
        "Fedora",
        "CentOS",
        "Arch Linux",
        "Alpine Linux",
    ];
    const os = oss[Math.floor(Math.random() * oss.length)];
    return os;
};
const generateDevice = (os) => {
    if (os === "iOS") {
        const devices = [
            "iPhone 12",
            "iPhone 13",
            "iPhone 14",
            "iPhone 15 Pro",
            "iPhone 15 Pro Max",
            "iPhone SE",
            "iPhone X",
            "iPhone XS",
            "iPhone XS Max",
            "iPhone XR",
            "iPhone 11",
            "iPhone 11 Pro",
            "iPhone 11 Pro Max",
            "iPhone 12 Mini",
            "iPhone 12 Pro",
            "iPhone 12 Pro Max",
            "iPhone 13 Pro",
            "iPhone 13 Pro Max",
            "iPhone 14 Pro",
            "iPhone 14 Pro Max",
        ];
        const device = devices[Math.floor(Math.random() * devices.length)];
        return device;
    }
    if (os === "Android") {
        const devices = [
            "Google Pixel 2",
            "Google Pixel 2 XL",
            "Google Pixel 3",
            "Google Pixel 3 XL",
            "Google Pixel 4",
            "Google Pixel 4 XL",
            "Google Pixel 5",
            "Google Pixel 5 XL",
            "Google Pixel 6",
            "Google Pixel 6 XL",
            "Google Pixel 7",
            "Google Pixel 7 XL",
            "Google Pixel 8",
            "Google Pixel 8 XL",
            "Google Pixel 9",
            "Google Pixel 9 XL",
            "Google Pixel XL",
            "Google Pixel XL",
            "Xiaomi Redmi Note 8",
            "Xiaomi Redmi Note 9",
            "Xiaomi Redmi Note 10",
            "Xiaomi Redmi Note 11",
            "Xiaomi Redmi Note 12",
            "Xiaomi Redmi Note 13",
            "Samsung Galaxy S10",
            "Samsung Galaxy S10+",
            "Samsung Galaxy S20",
            "Samsung Galaxy S20+",
            "Samsung Galaxy S21",
            "Samsung Galaxy S21+",
            "Samsung Galaxy S22",
            "Samsung Galaxy S22+",
            "Samsung Galaxy S23",
            "Samsung Galaxy S23+",
            "Samsung Galaxy S24",
            "Samsung Galaxy S24+",
            "Motorola Moto",
            "Motorola Moto E",
            "Motorola Moto G",
            "Motorola Moto G (4)",
            "Motorola Moto G (5)",
            "Motorola Moto G (6)",
            "Motorola Moto G (7)",
            "Motorola Moto G (8)",
            "Motorola Moto G (9)",
            "Motorola Moto G (Power)",
            "Motorola Edge",
            "Motorola Edge+",
        ];
        const device = devices[Math.floor(Math.random() * devices.length)];
        return device;
    }
    if (os === "MacOS") {
        const devices = [
            "MacBook Pro",
            "MacBook Air",
            "MacBook",
            "Mac Mini",
            "Mac Pro",
            "Mac Studio",
        ];
        const device = devices[Math.floor(Math.random() * devices.length)];
        return device;
    }
    const devices = [
        "Dell XPS",
        "Dell Inspiron",
        "Dell Venue",
        "HP Pavilion",
        "HP Spectre",
        "HP EliteBook",
        "HP ProBook",
        "HP Envy",
        "Lenovo ThinkPad",
        "Lenovo Yoga",
        "Lenovo IdeaPad",
        "Lenovo Legion",
        "Lenovo Z5",
        "Lenovo Z6",
        "Lenovo Z7",
        "Lenovo ThinkPad L14",
        "Lenovo ThinkPad E14",
        "Lenovo ThinkPad T14",
        "Lenovo ThinkPad X1",
        "Lenovo ThinkPad Z16",
        "Lenovo ThinkPad Yoga",
        "Asus Vivobook",
        "Asus Zenbook",
        "Asus Transformer",
        "Asus Zenbook UX",
        "Asus UX305",
        "Alienware m15",
        "Alienware m17",
        "Alienware m18",
        "Razer Blade 15",
        "Razer Blade 17",
        "Razer Blade 18",
        "Acer Aspire 5",
        "Acer Aspire 5 A515-54-57",
        "Acer Aspire 5 A515-54-57",
        "Acer Nitro 5",
        "Acer Nitro 5 A515-54-57",
        "Acer Nitro 5 A515-54-57",
        "MSI GE75",
        "MSI GE75 A75-G75",
        "MSI GE75 A75-G75",
        "Samsung NP900",
        "Samsung Galaxy Book",
    ];
    const device = devices[Math.floor(Math.random() * devices.length)];
    return device;
};
const generateTimezone = () => {
    const timeZones = Intl.supportedValuesOf("timeZone");
    return timeZones[Math.floor(Math.random() * timeZones.length)];
};
const generateUuidv1 = () => {
    const uuidv1 = (0, uuid_1.v1)();
    return uuidv1;
};
const generateUuidv4 = () => {
    const uuidv4 = (0, uuid_1.v4)();
    return uuidv4;
};
