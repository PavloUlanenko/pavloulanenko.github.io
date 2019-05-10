window.addEventListener("load", function() {
  (function() {
    navigator.getBattery().then((battery) => {
      function updateBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischargingInfo();
      }
      updateBatteryInfo();
      battery.addEventListener("chargingchange", updateChargeInfo);
      battery.addEventListener("levelchange", updateLevelInfo);
      battery.addEventListener("chargingtimechange", updateChargingInfo);
      battery.addEventListener("dischargingtimechange", updateDischargingInfo);
      function updateChargeInfo() {
        if(battery.charging) {
          document.querySelector(".status").innerHTML = "Is charging";
          document.querySelector(".battery-level").classList.add("charging");
        }else {
          document.querySelector(".status").innerHTML = "Is already charged";
          document.querySelector(".battery-level").classList.remove("charging");
        }
      }
      function updateLevelInfo() {
        document.querySelector(".battery-persentage").innerHTML = battery.level * 100 + '%';
        document.querySelector(".battery-level").style.width = battery.level * 100 + '%';
      }
      function updateChargingInfo() {
        if(!isFinite(battery.chargingTime)) {
          document.querySelector(".charging-time").innerHTML = battery.chargingTime;  
        }
      }
      function updateDischargingInfo() {
        if(!isFinite(battery.chargingTime)) {
          document.querySelector(".discharging-time").innerHTML = battery.dischargingTime;  
        }
      }
    });
  })();
});