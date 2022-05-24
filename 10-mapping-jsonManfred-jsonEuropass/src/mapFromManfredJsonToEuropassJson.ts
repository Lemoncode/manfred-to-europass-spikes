import { EuropassJsonModel } from "./models/europas-json-model";
import { ManfredJsonModel } from "./models/manfred-json-model";

export const mapFromManfredJsonToEuropassJson = (
  manfredJson: ManfredJsonModel
): EuropassJsonModel => {
  return {
    LearnerInfo: {
      Identification: {
        PersonName: {
          FirstName: manfredJson.aboutMe.profile.name,
          Surname: manfredJson.aboutMe.profile.surnames,
        },
        Demographics: {
          Birthdate: manfredJson.aboutMe.profile.birthday,
        },
      },
    },
  };
};
