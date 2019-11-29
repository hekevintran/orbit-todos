import { Schema } from "@orbit/data";


export const schema = new Schema({
  models: {
    planet: {
      attributes: {
        uuid: { type: "string" },
        name: { type: "string" },
        classification: { type: "string" },
        atmosphere: { type: "boolean" }
      },
      relationships: {
        moons: { type: "hasMany", model: "moon", inverse: "planet" }
      },
      keys: {
        remoteId: { type: "string" }
      }
    },
    moon: {
      attributes: {
        name: { type: "string" }
      },
      relationships: {
        planet: { type: "hasOne", model: "planet", inverse: "moons" }
      },
      keys: {
        remoteId: { type: "string" }
      }
    }
  }
});