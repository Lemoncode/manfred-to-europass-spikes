export interface EuropassJsonModel {
  LearnerInfo: {
    Identification: {
      PersonName: {
        FirstName: string;
        Surname: string;
      };
      Demographics: {
        Birthdate: string;
      };
    };
  };
}
