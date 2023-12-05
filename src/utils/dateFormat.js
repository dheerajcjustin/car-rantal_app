export const dateFormat = (date = new Date()) => {
  let dd = date.getDate();
  let mm = date.getMonth() + 1; //January is 0!
  let yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  date = yyyy + "-" + mm + "-" + dd;
  return date;
};

export const minPickupDate = () => {
  let pickupDate = new Date();
  const time = pickupDate.getHours();
  if (time > 16) {
    // pickupDate = pickupDate.setDate(1);
    pickupDate = new Date(pickupDate.setDate(pickupDate.getDate() + 1))
  }
  return pickupDate;
};

export const MinDropOffDate = (pickupDate, pickupTime) => {
  console.log("wwwowwowowowowwowoowwowowo is tme indide mindropodddate");
  if (pickupDate && pickupTime) {
    const timeArray = [
      "10.00 AM",
      "11.00 AM",
      "12.00 PM",
      "01.00 PM",
      "02.00 PM",
      "03.00 PM",
      "04.00 PM",
      "05.00 PM ",
    ];
    pickupDate = new Date(pickupDate);
    console.log(pickupDate, pickupTime);
    if (timeArray.indexOf(pickupTime) > 6) {
      const wowoww = new Date(pickupDate.setDate(pickupDate.getDate() + 1));
      console.log(
        "@@@@@@@@@@@@@@@@@@@@@@@@@@@22222222@@@@@@222inside if wowow index ",
        wowoww
      );

      return wowoww;
    }

    console.log(
      "@@@@@@@@@@@@@@@@@@@@@@@@@@@22222222@@@@@@222inside if wowow index ",
      pickupDate
    );
    return pickupDate;
  } else {
    console.log("retrning nothing");
    return;
  }
};

export const pickupTimeList = (pickupDate) => {
  const timeArray = [
    "10.00 AM",
    "11.00 AM",
    "12.00 PM",
    "01.00 PM",
    "02.00 PM",
    "03.00 PM",
    "04.00 PM",
    "05.00 PM ",
  ];
  let skip = 0;
  const today = new Date();
  pickupDate = new Date(pickupDate);

  const time = pickupDate.getHours();
  if (
    today.getDate() === pickupDate.getDate() &&
    today.getMonth() === pickupDate.getMonth() &&
    today.getFullYear() === pickupDate.getFullYear() &&
    time > 10
  ) {
    skip = time - 10 + 1;
  }
  timeArray.splice(0, skip);
  console.log(timeArray);
  return timeArray;
};

export const dropOffTimeList = (pickupDate, pickupTime, dropOffDate) => {
  pickupDate = new Date(pickupDate);
  dropOffDate = new Date(dropOffDate);
  const timeArray = [
    "10.00 AM",
    "11.00 AM",
    "12.00 PM",
    "01.00 PM",
    "02.00 PM",
    "03.00 PM",
    "04.00 PM",
    "05.00 PM ",
  ];
  if (
    dropOffDate.getDate() === pickupDate.getDate() &&
    dropOffDate.getMonth() === pickupDate.getMonth() &&
    dropOffDate.getFullYear() === pickupDate.getFullYear()
  ) {
    timeArray.splice(0, timeArray.indexOf(pickupTime) + 1);
    return timeArray;
  }
  return timeArray;
};
