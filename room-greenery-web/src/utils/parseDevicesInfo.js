const parseTakenDevices = (takenDevices) => {
  const result = [];
  takenDevices.forEach((element, index) => {
    result[index] = {
      id: element.id,
      plant: element.Plant.Species.name,
      target: {
        co2_level: element.Plant.Parameter.co2_level,
        ground_humidity: element.Plant.Parameter.ground_humidity,
        air_humidity: element.Plant.Parameter.air_humidity,
        air_temperature: element.Plant.Parameter.air_temperature,
        light_level: element.Plant.Parameter.light_level,
      },
      current: {
        co2_level: element.Parameter.co2_level,
        ground_humidity: element.Parameter.ground_humidity,
        air_humidity: element.Parameter.air_humidity,
        air_temperature: element.Parameter.air_temperature,
        light_level: element.Parameter.light_level,
      },
      is_working: element.is_working,
    };
  });

  return result;
};

const parseAvailable = (availableDevices) => {
  const result = [];
  availableDevices.forEach((element, index) => {
    result[index] = {
      id: element.id,
      current: {
        co2_level: element.Parameter.co2_level,
        ground_humidity: element.Parameter.ground_humidity,
        air_humidity: element.Parameter.air_humidity,
        air_temperature: element.Parameter.air_temperature,
        light_level: element.Parameter.light_level,
      },

      is_working: element.is_working,
    };
  });

  return result;
};

export { parseTakenDevices, parseAvailable };
