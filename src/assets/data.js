const data = [
  {
    id: 0,
    gps: "Bring your own GPS",
    mileage: "Mileage reporting to be done by you",
    key: "Mileage reporting to be done by you",
    price: 0,
    title: "Just mates",
    addone: ["BYO secondary GPS - $5/month"],
 
    
  },
  {
    id: 1,
    gps: "Primary GPS included",
    mileage: "Automated mileage calculations",
    key: "In-person key handover to guests",
    price: 10,
    title: "Good mates",
    addone: ["BYO secondary GPS - $5/month", "BYO lockbox - $10/month"],

  },
  {
    id: 2,
    gps: "Keyless access technology",
    mileage: "Automated mileage calculations",
    key: "Remote handover to guests",
    price: 30,
    title: "Best mates",
    addone: [
      "BYO secondary GPS - $5/month",
      "Between trip insurance (Coming soon)",
    ],

  },
];

export const deviceData = [
  {
    id: 0,
    device: "Device 1",

    image: null,
    devicetype: "Primary GPS",
    serial: "",
    checked: false,
  },
  {
    id: 1,
    device: "Device 2",

    image: null,
    devicetype: "Secondary GPS",
    serial: "",
    checked: false,
  },
  {
    id: 2,
    device: "Device 3",

    image: null,
    devicetype: "Drive mate Go",
    serial: "",
    checked: false,
  },
  {
    id: 3,
    device: "Device 4",

    image: null,
    devicetype: "Lockbox",
    serial: "",
    checked: false,
  },
];
export const sidebar=["Location","About","Features","Rules","Pricing","Promotion","Pictures","Insurance","Subscription","Device","Early Access"]
export default data;
