window.addEventListener("load", function() {
  (function() {
    navigator.getBattery().then((battery) => {
      function updateBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischargingInfo();
      }
      battery.addEventListener("chargingchange", updateChargeInfo);
      battery.addEventListener("levelchange", updateLevelInfo);
      battery.addEventListener("chargingtimechange", updateChargingInfo);
      battery.addEventListener("dischargingtimechange", updateDischargingInfo);
      function updateChargeInfo() {
        if(battery.charging) {
          document.querySelector(".status").innerHTML = "Is charging";
          document.querySelector(".battery-level").classList.add("charging");
        }else {
          document.querySelector(".status").innerHTML = "Is discharging";
          document.querySelector(".battery-level").classList.remove("charging");
        }
      }
      function updateLevelInfo() {
        document.querySelector(".battery-persentage").innerHTML = parseInt(battery.level * 100) + '%';
        document.querySelector(".battery-level").style.width = battery.level * 100 + '%';
      }
      function updateChargingInfo() {
        if(isFinite(battery.chargingTime)) {
          document.querySelector(".charging-time").innerHTML = battery.chargingTime;  
        }else {
          document.querySelector(".charging-time").innerHTML = "";
        }
      }
      function updateDischargingInfo() {
        if(isFinite(battery.dischargingTime)) {
          let time = parseInt(battery.dischargingTime / 60);
          document.querySelector(".discharging-time").innerHTML = `${time} minutes left to be empty`;  
        }else {
          document.querySelector(".discharging-time").innerHTML = "";
        }
      }
      updateBatteryInfo();
    });
  })();
});