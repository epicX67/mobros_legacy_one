function set_visibility(id) {
  localStorage.setItem(id, JSON.stringify(document.getElementById(id).checked));
}
window.set_visibility = set_visibility;

function updateColor(str, colorStr) {
  const colorID = ["red", "blue", "cyan", "yellow", "orange", "lime"];
  colorID.forEach((color) => {
    const node = document.getElementById(`${str}_color_${color}`);
    if (node.classList.contains("active")) {
      node.classList.remove("active");
    }
    if (colorStr === color) {
      node.classList.add("active");
      localStorage.setItem(`${str}_color`, color);
    }
  });
}
window.updateColor = updateColor;

function showhideHeader() {
  const checked = document.getElementById("show_header").checked;
  if (checked) {
    document.getElementById("header").classList.remove("hide");
  } else {
    document.getElementById("header").classList.add("hide");
  }
  localStorage.setItem("show_header", JSON.stringify(checked));
}
window.showhideHeader = showhideHeader;

function update() {
  const showHeader = localStorage.getItem("show_header")
    ? JSON.parse(localStorage.getItem("show_header"))
    : true;

  const showCPU = localStorage.getItem("show_cpu")
    ? JSON.parse(localStorage.getItem("show_cpu"))
    : true;
  const showCPUClock = localStorage.getItem("show_cpu_clock")
    ? JSON.parse(localStorage.getItem("show_cpu_clock"))
    : true;
  const showRAM = localStorage.getItem("show_ram")
    ? JSON.parse(localStorage.getItem("show_ram"))
    : true;
  const showGPU = localStorage.getItem("show_gpu")
    ? JSON.parse(localStorage.getItem("show_gpu"))
    : true;
  const showGPUClock = localStorage.getItem("show_gpu_clock")
    ? JSON.parse(localStorage.getItem("show_gpu_clock"))
    : true;
  const showVRAM = localStorage.getItem("show_vram")
    ? JSON.parse(localStorage.getItem("show_vram"))
    : true;

  const cpu_color = localStorage.getItem("cpu_color");
  const cpu_clock_color = localStorage.getItem("cpu_clock_color");
  const ram_color = localStorage.getItem("ram_color");
  const gpu_color = localStorage.getItem("gpu_color");
  const gpu_clock_color = localStorage.getItem("gpu_clock_color");
  const vram_color = localStorage.getItem("vram_color");

  if (showHeader) {
    document.getElementById("header").classList.remove("hide");
  } else {
    document.getElementById("header").classList.add("hide");
  }
  document.getElementById("show_header").checked = showHeader;

  updateColor("cpu", cpu_color ? cpu_color : "blue");
  document.getElementById("show_cpu").checked = showCPU;
  if (showCPU) {
    const color = cpu_color ? cpu_color : "blue";
    document
      .getElementById("cpu_ico")
      .setAttribute("class", `ri-cpu-fill ${color}`);
    document
      .getElementById("cpu_temp")
      .setAttribute("class", `pill-txt ${color}`);
    document.getElementById("cpu_load").setAttribute("class", `load ${color}`);
    document
      .getElementById("cpu_fan")
      .setAttribute("class", `pillDown-txt ${color}`);

    document.getElementById("cpu").style["display"] = "flex";
  } else {
    document.getElementById("cpu").style["display"] = "none";
  }

  updateColor("cpu_clock", cpu_clock_color ? cpu_clock_color : "blue");
  document.getElementById("show_cpu_clock").checked = showCPUClock;
  if (showCPUClock) {
    const color = cpu_clock_color ? cpu_clock_color : "blue";
    document
      .getElementById("cpu_clock_speed_ico")
      .setAttribute("class", `ri-pulse-fill ${color}`);
    document
      .getElementById("cpu_clock_dummy1")
      .setAttribute("class", `pill-txt ${color}`);
    document
      .getElementById("cpu_curr_clock")
      .setAttribute("class", `load loadClock ${color}`);
    document
      .getElementById("cpu_clock_dummy2")
      .setAttribute("class", `pillDown-txt ${color}`);
    document.getElementById("cpu_clock").style["display"] = "flex";
  } else {
    document.getElementById("cpu_clock").style["display"] = "none";
  }

  updateColor("gpu", gpu_color ? gpu_color : "orange");
  document.getElementById("show_gpu").checked = showGPU;
  if (showGPU) {
    const color = gpu_color ? gpu_color : "orange";
    document
      .getElementById("gpu_ico")
      .setAttribute("class", `ri-gamepad-fill ${color}`);
    document
      .getElementById("gpu_temp")
      .setAttribute("class", `pill-txt ${color}`);
    document.getElementById("gpu_load").setAttribute("class", `load ${color}`);
    document
      .getElementById("gpu_fan")
      .setAttribute("class", `pillDown-txt ${color}`);
    document.getElementById("gpu").style["display"] = "flex";
  } else {
    document.getElementById("gpu").style["display"] = "none";
  }

  updateColor("gpu_clock", gpu_clock_color ? gpu_clock_color : "orange");
  document.getElementById("show_gpu_clock").checked = showGPUClock;
  if (showGPUClock) {
    const color = gpu_clock_color ? gpu_clock_color : "blue";
    document
      .getElementById("gpu_clock_speed_ico")
      .setAttribute("class", `ri-pulse-fill ${color}`);
    document
      .getElementById("gpu_clock_dummy1")
      .setAttribute("class", `pill-txt ${color}`);
    document
      .getElementById("gpu_curr_clock")
      .setAttribute("class", `load loadClock ${color}`);
    document
      .getElementById("gpu_clock_dummy2")
      .setAttribute("class", `pillDown-txt ${color}`);
    document.getElementById("gpu_clock").style["display"] = "flex";
  } else {
    document.getElementById("gpu_clock").style["display"] = "none";
  }

  updateColor("ram", ram_color ? ram_color : "lime");
  document.getElementById("show_ram").checked = showRAM;
  if (showRAM) {
    const color = ram_color ? ram_color : "lime";
    document
      .getElementById("mem_ico")
      .setAttribute("class", `ri-database-fill ${color}`);
    document.getElementById("mem_load").setAttribute("class", `load ${color}`);
    document
      .getElementById("mem_used")
      .setAttribute("class", `pillDown-txt ${color}`);
    document.getElementById("ram").style["display"] = "flex";
  } else {
    document.getElementById("ram").style["display"] = "none";
  }

  updateColor("vram", vram_color ? vram_color : "yellow");
  document.getElementById("show_vram").checked = showVRAM;
  if (showVRAM) {
    const color = vram_color ? vram_color : "yellow";
    document
      .getElementById("vram_ico")
      .setAttribute("class", `ri-sd-card-mini-fill ${color}`);
    document.getElementById("vram_load").setAttribute("class", `load ${color}`);
    document
      .getElementById("vram_used")
      .setAttribute("class", `pillDown-txt ${color}`);
    document.getElementById("vram").style["display"] = "flex";
  } else {
    document.getElementById("vram").style["display"] = "none";
  }
}
window.update = update;

// Setting Window Control
function showhideSettings() {
  const isHide = document
    .getElementById("settings")
    .classList.contains("hideSettings");

  if (isHide) {
    document.getElementById("settings").classList.remove("hideSettings");
    document.getElementById("open_settings").style["display"] = "none";
  } else {
    document.getElementById("settings").classList.add("hideSettings");
    document.getElementById("open_settings").style["display"] = "block";
  }
}
window.showhideSettings = showhideSettings;

// OnChange callbacks
function onCPU_Usage() {
  document.getElementById(
    "cpu_load"
  ).innerHTML = `${Hardware.CPU.usage.current.value}<span> ${Hardware.CPU.usage.unit.value}</span>`;
}
function onCPU_Temp() {
  document.getElementById(
    "cpu_temp"
  ).innerHTML = `${Hardware.CPU.temperature.current.value}<span> ${Hardware.CPU.temperature.unit.value}</span>`;
}
function onCPU_Fan() {
  const speed = 100 - (Hardware.CPU.fan.current.value / 3000) * 100;
  const ms = parseInt(speed >= 100 ? 0 : speed * 7);

  document.getElementById(
    "cpu_fan"
  ).innerHTML = `${Hardware.CPU.fan.current.value}<span>${Hardware.CPU.fan.unit.value}</span>`;

  document.getElementById(
    "cpu_fan_anima"
  ).style = `animation: spin ${ms}ms linear infinite;`;
}
function onCPU_Clock() {
  document.getElementById("cpu_curr_clock").innerHTML = `${
    Hardware.CPU.clock.current.value
  }<span> ${Hardware.CPU.clock.unit.value.toLocaleUpperCase()}</span>`;
}
function onGPU_Temp() {
  document.getElementById(
    "gpu_temp"
  ).innerHTML = `${Hardware.GPU.temperature.current.value}<span> ${Hardware.GPU.temperature.unit.value}</span>`;
}
function onGPU_Usage() {
  document.getElementById(
    "gpu_load"
  ).innerHTML = `${Hardware.GPU.usage.current.value}<span> ${Hardware.GPU.usage.unit.value}</span>`;
}
function onGPU_Fan() {
  const speed = 100 - (Hardware.GPU.fan.current.value / 4000) * 100;
  const ms = parseInt(speed >= 100 ? 0 : speed * 7);

  document.getElementById(
    "gpu_fan"
  ).innerHTML = `${Hardware.GPU.fan.current.value}<span>${Hardware.GPU.fan.unit.value}</span>`;

  document.getElementById(
    "gpu_fan_anima"
  ).style = `animation: spin ${ms}ms linear infinite;`;
}
function onGPU_Clock() {
  document.getElementById("gpu_curr_clock").innerHTML = `${
    Hardware.GPU.clock.current.value
  }<span> ${Hardware.GPU.clock.unit.value.toLocaleUpperCase()}</span>`;
}
function onMemory_Usage() {
  document.getElementById(
    "mem_load"
  ).innerHTML = `${Hardware.Memory.usage.current.value}<span> ${Hardware.Memory.usage.unit.value}</span>`;
}
function onMemory_Used() {
  document.getElementById(
    "mem_used"
  ).innerHTML = `${Hardware.Memory.used.current.value}<span> ${Hardware.Memory.used.unit.value}</span>`;
}
function onVRam_Usage() {
  document.getElementById(
    "vram_load"
  ).innerHTML = `${Hardware.GPU.vram.usage.current.value}<span> ${Hardware.GPU.vram.usage.unit.value}</span>`;
}
function onVRam_Used() {
  document.getElementById(
    "vram_used"
  ).innerHTML = `${Hardware.GPU.vram.used.current.value}<span> ${Hardware.GPU.vram.used.unit.value}</span>`;
}

// References
const Hardware = {
  CPU: {
    name: {
      value: "CPU",
      ref: document.getElementById("cpu_name"),
    },
    temperature: {
      unit: {
        value: "",
        ref: document.getElementById("cpu_temp_unit"),
      },
      min: {
        value: 0,
        ref: document.getElementById("cpu_temp_min"),
      },
      current: {
        value: 0,
        ref: document.getElementById("cpu_temp_curr"),
      },
      max: {
        value: 0,
        ref: document.getElementById("cpu_temp_max"),
      },
    },
    usage: {
      unit: {
        value: "",
        ref: document.getElementById("cpu_usage_unit"),
      },
      min: {
        value: 0,
        ref: document.getElementById("cpu_usage_min"),
      },
      current: {
        value: 0,
        ref: document.getElementById("cpu_usage_curr"),
      },
      max: {
        value: 0,
        ref: document.getElementById("cpu_usage_max"),
      },
    },
    fan: {
      unit: {
        value: "",
        ref: document.getElementById("cpu_fan_unit"),
      },
      min: {
        value: 0,
        ref: document.getElementById("cpu_fan_min"),
      },
      current: {
        value: 0,
        ref: document.getElementById("cpu_fan_curr"),
      },
      max: {
        value: 0,
        ref: document.getElementById("cpu_fan_max"),
      },
    },
    clock: {
      unit: {
        value: "",
        ref: document.getElementById("cpu_clock_unit"),
      },
      min: {
        value: 0,
        ref: document.getElementById("cpu_clock_min"),
      },
      current: {
        value: 0,
        ref: document.getElementById("cpu_clock_curr"),
      },
      max: {
        value: 0,
        ref: document.getElementById("cpu_clock_max"),
      },
    },
  },
  GPU: {
    name: {
      value: "GPU",
      ref: document.getElementById("gpu_name"),
    },
    temperature: {
      unit: {
        value: "",
        ref: document.getElementById("gpu_temp_unit"),
      },
      min: {
        value: 0,
        ref: document.getElementById("gpu_temp_min"),
      },
      current: {
        value: 0,
        ref: document.getElementById("gpu_temp_curr"),
      },
      max: {
        value: 0,
        ref: document.getElementById("gpu_temp_max"),
      },
    },
    usage: {
      unit: {
        value: "",
        ref: document.getElementById("gpu_usage_unit"),
      },
      min: {
        value: 0,
        ref: document.getElementById("gpu_usage_min"),
      },
      current: {
        value: 0,
        ref: document.getElementById("gpu_usage_curr"),
      },
      max: {
        value: 0,
        ref: document.getElementById("gpu_usage_max"),
      },
    },
    fan: {
      unit: {
        value: "",
        ref: document.getElementById("gpu_fan_unit"),
      },
      min: {
        value: 0,
        ref: document.getElementById("gpu_fan_min"),
      },
      current: {
        value: 0,
        ref: document.getElementById("gpu_fan_curr"),
      },
      max: {
        value: 0,
        ref: document.getElementById("gpu_fan_max"),
      },
    },
    clock: {
      unit: {
        value: "",
        ref: document.getElementById("gpu_clock_unit"),
      },
      min: {
        value: 0,
        ref: document.getElementById("gpu_clock_min"),
      },
      current: {
        value: 0,
        ref: document.getElementById("gpu_clock_curr"),
      },
      max: {
        value: 0,
        ref: document.getElementById("gpu_clock_max"),
      },
    },
    vram: {
      usage: {
        unit: {
          value: "",
          ref: document.getElementById("vram_usage_unit"),
        },
        min: {
          value: 0,
          ref: document.getElementById("vram_usage_min"),
        },
        current: {
          value: 0,
          ref: document.getElementById("vram_usage_curr"),
        },
        max: {
          value: 0,
          ref: document.getElementById("vram_usage_max"),
        },
      },
      used: {
        unit: {
          value: "",
          ref: document.getElementById("vram_used_unit"),
        },
        min: {
          value: 0,
          ref: document.getElementById("vram_used_min"),
        },
        current: {
          value: 0,
          ref: document.getElementById("vram_used_curr"),
        },
        max: {
          value: 0,
          ref: document.getElementById("vram_used_max"),
        },
      },
    },
  },
  Memory: {
    name: {
      value: "Memory",
      ref: document.getElementById("mem_name"),
    },
    usage: {
      unit: {
        value: "",
        ref: document.getElementById("mem_usage_unit"),
      },
      min: {
        value: 0,
        ref: document.getElementById("mem_usage_min"),
      },
      current: {
        value: 0,
        ref: document.getElementById("mem_usage_curr"),
      },
      max: {
        value: 0,
        ref: document.getElementById("mem_usage_max"),
      },
    },
    used: {
      unit: {
        value: "",
        ref: document.getElementById("mem_used_unit"),
      },
      min: {
        value: 0,
        ref: document.getElementById("mem_used_min"),
      },
      current: {
        value: 0,
        ref: document.getElementById("mem_used_curr"),
      },
      max: {
        value: 0,
        ref: document.getElementById("mem_used_max"),
      },
    },
  },
  update: (el, value) => {
    if (el.ref) {
      el.ref.innerText = value;
      el.value = value;
    }
  },
  set: (el, refVal, valueVal) => {
    if (el.ref) {
      el.ref.innerText = refVal;
      el.value = valueVal;
    }
  },
  get: (el) => {
    return el.value ? el.value : null;
  },
};

// SDK Stuff
MobroSDK.init().then(() => {
  update();
  MobroSDK.addChannelListener("general_processor_temperature", (data) => {
    if (data.payload) {
      const { sensortype, unit, value, min, max, _hardware } = data.payload;

      if (
        sensortype === "Temperature" &&
        _hardware.hardwaretype === "Processor"
      ) {
        Hardware.update(Hardware.CPU.temperature.unit, unit);
        Hardware.set(Hardware.CPU.temperature.min, min + unit, min);
        Hardware.set(Hardware.CPU.temperature.current, value + unit, value);
        Hardware.set(Hardware.CPU.temperature.max, max + unit, max);
        Hardware.update(Hardware.CPU.name, _hardware.title);
        onCPU_Temp();
      }
    }
  });
  MobroSDK.addChannelListener("general_processor_usage", (data) => {
    if (data.payload) {
      const { sensortype, unit, value, min, max, _hardware } = data.payload;

      if (sensortype === "Usage" && _hardware.hardwaretype === "Processor") {
        Hardware.update(Hardware.CPU.usage.unit, unit);
        Hardware.set(
          Hardware.CPU.usage.min,
          Math.round(min) + unit,
          Math.round(min)
        );
        Hardware.set(
          Hardware.CPU.usage.current,
          Math.round(value) + unit,
          Math.round(value)
        );
        Hardware.set(
          Hardware.CPU.usage.max,
          Math.round(max) + unit,
          Math.round(max)
        );
        onCPU_Usage();
      }
    }
  });
  MobroSDK.addChannelListener("general_graphics_temperature", (data) => {
    if (data.payload) {
      const { sensortype, unit, value, min, max, _hardware } = data.payload;

      if (
        sensortype === "Temperature" &&
        _hardware.hardwaretype === "Graphics"
      ) {
        Hardware.update(Hardware.GPU.temperature.unit, unit);
        Hardware.set(Hardware.GPU.temperature.min, min + unit, min);
        Hardware.set(Hardware.GPU.temperature.current, value + unit, value);
        Hardware.set(Hardware.GPU.temperature.max, max + unit, max);
        Hardware.update(Hardware.GPU.name, _hardware.title);
        onGPU_Temp();
      }
    }
  });
  MobroSDK.addChannelListener("general_graphics_usage", (data) => {
    if (data.payload) {
      const { sensortype, unit, value, min, max, _hardware } = data.payload;

      if (sensortype === "Usage" && _hardware.hardwaretype === "Graphics") {
        Hardware.update(Hardware.GPU.usage.unit, unit);
        Hardware.set(
          Hardware.GPU.usage.min,
          Math.round(min) + unit,
          Math.round(min)
        );
        Hardware.set(
          Hardware.GPU.usage.current,
          Math.round(value) + unit,
          Math.round(value)
        );
        Hardware.set(
          Hardware.GPU.usage.max,
          Math.round(max) + unit,
          Math.round(max)
        );
        onGPU_Usage();
      }
    }
  });
  MobroSDK.addChannelListener("general_memory_usage", (data) => {
    if (data.payload) {
      const { sensortype, unit, value, min, max, _hardware } = data.payload;

      if (sensortype === "Usage" && _hardware.hardwaretype === "Memory") {
        Hardware.update(Hardware.Memory.usage.unit, unit);
        Hardware.set(
          Hardware.Memory.usage.min,
          Math.round(min) + unit,
          Math.round(min)
        );
        Hardware.set(
          Hardware.Memory.usage.current,
          Math.round(value) + unit,
          Math.round(value)
        );
        Hardware.set(
          Hardware.Memory.usage.max,
          Math.round(max) + unit,
          Math.round(max)
        );
        Hardware.update(Hardware.Memory.name, _hardware.title);
        onMemory_Usage();
      }
    }
  });
  MobroSDK.addChannelListener("general_memory_used", (data) => {
    if (data.payload) {
      const { sensortype, unit, value, min, max, _hardware } = data.payload;

      if (sensortype === "Data" && _hardware.hardwaretype === "Memory") {
        const nMin = min.toPrecision(3);
        const nCurr = value.toPrecision(3);
        const nMax = max.toPrecision(3);
        Hardware.update(Hardware.Memory.used.unit, unit);
        Hardware.set(Hardware.Memory.used.min, nMin + unit, nMin);
        Hardware.set(Hardware.Memory.used.current, nCurr + unit, nCurr);
        Hardware.set(Hardware.Memory.used.max, nMax + unit, nMax);
        Hardware.update(Hardware.Memory.name, _hardware.title);
        onMemory_Used();
      }
    }
  });

  MobroSDK.addChannelListener("theme_fan_speed_cpu", (data) => {
    if (data.payload) {
      const { unit, value, min, max } = data.payload;
      const nMin = min ? min : 0;
      const nCurr = value ? value : 0;
      const nMax = max ? max : 0;
      const nUnit = unit ? unit : "RPM";
      Hardware.update(Hardware.CPU.fan.unit, nUnit);
      Hardware.set(Hardware.CPU.fan.min, nMin + nUnit, nMin);
      Hardware.set(Hardware.CPU.fan.current, nCurr + nUnit, nCurr);
      Hardware.set(Hardware.CPU.fan.max, nMax + nUnit, nMax);
      onCPU_Fan();
    }
  });
  MobroSDK.addChannelListener("theme_clock_speed_cpu", (data) => {
    if (data.payload) {
      const { unit, value, min, max } = data.payload;
      const nMin = min ? parseInt(min) : 0;
      const nCurr = value ? parseInt(value) : 0;
      const nMax = max ? parseInt(max) : 0;
      const nUnit = unit ? unit : "";
      Hardware.update(Hardware.CPU.clock.unit, nUnit);
      Hardware.set(Hardware.CPU.clock.min, nMin + nUnit, nMin);
      Hardware.set(Hardware.CPU.clock.current, nCurr + nUnit, nCurr);
      Hardware.set(Hardware.CPU.clock.max, nMax + nUnit, nMax);
      onCPU_Clock();
    }
  });
  MobroSDK.addChannelListener("theme_fan_speed_gpu", (data) => {
    if (data.payload) {
      const { unit, value, min, max } = data.payload;
      const nMin = min ? min : 0;
      const nCurr = value ? value : 0;
      const nMax = max ? max : 0;
      const nUnit = unit ? unit : "RPM";
      Hardware.update(Hardware.GPU.fan.unit, nUnit);
      Hardware.set(Hardware.GPU.fan.min, nMin + nUnit, nMin);
      Hardware.set(Hardware.GPU.fan.current, nCurr + nUnit, nCurr);
      Hardware.set(Hardware.GPU.fan.max, nMax + nUnit, nMax);
      onGPU_Fan();
    }
  });
  MobroSDK.addChannelListener("theme_clock_speed_gpu", (data) => {
    if (data.payload) {
      const { unit, value, min, max } = data.payload;
      const nMin = min ? parseInt(min) : 0;
      const nCurr = value ? parseInt(value) : 0;
      const nMax = max ? parseInt(max) : 0;
      const nUnit = unit ? unit : "";
      Hardware.update(Hardware.GPU.clock.unit, nUnit);
      Hardware.set(Hardware.GPU.clock.min, nMin + nUnit, nMin);
      Hardware.set(Hardware.GPU.clock.current, nCurr + nUnit, nCurr);
      Hardware.set(Hardware.GPU.clock.max, nMax + nUnit, nMax);
      onGPU_Clock();
    }
  });
  MobroSDK.addChannelListener("theme_vram", (data) => {
    if (data.payload) {
      const { sensortype, unit, value, min, max, _hardware } = data.payload;

      if (sensortype === "Data" && _hardware.hardwaretype === "Graphics") {
        const nMin = Math.round(min);
        const nCurr = Math.round(value);
        const nMax = Math.round(max);

        Hardware.update(Hardware.GPU.vram.used.unit, unit);
        Hardware.set(Hardware.GPU.vram.used.min, nMin + unit, nMin);
        Hardware.set(Hardware.GPU.vram.used.current, nCurr + unit, nCurr);
        Hardware.set(Hardware.GPU.vram.used.max, nMax + unit, nMax);
        onVRam_Used();
      }
    }
  });
  MobroSDK.addChannelListener("theme_vram_percentage", (data) => {
    if (data.payload) {
      const { sensortype, unit, value, min, max, _hardware } = data.payload;

      if (sensortype === "Usage" && _hardware.hardwaretype === "Graphics") {
        Hardware.update(Hardware.GPU.vram.usage.unit, unit);
        Hardware.set(
          Hardware.GPU.vram.usage.min,
          Math.round(min) + unit,
          Math.round(min)
        );
        Hardware.set(
          Hardware.GPU.vram.usage.current,
          Math.round(value) + unit,
          Math.round(value)
        );
        Hardware.set(
          Hardware.GPU.vram.usage.max,
          Math.round(max) + unit,
          Math.round(max)
        );
        onVRam_Usage();
      }
    }
  });
});
