interface RelevantLinks {
  type: string;
  URL: string;
  description: string;
}

interface Image {
  alt: string;
  link: string;
}

interface PublicProfiles {
  type: string;
  URL: string;
}

interface SignificativeRelationships {
  name: string;
  surnames: string;
  title: string;
  description: string;
  contact: {
    publicProfiles: PublicProfiles[];
  };
}
interface InterestingFacts {
  topic?: string;
  fact: string;
}

interface Authors {
  name: string;
  surnames: string;
  title: string;
}
interface Recommendations {
  title: string;
  type: string;
  authors: Authors[];
  summary: string;
}

interface Challenges {
  description: string;
  actions: string[];
}

interface Competence {
  name: string;
  type: string;
  description?: string;
}

interface Referral {
  name: string;
  surnames: string;
  title: string;
  contact: {
    publicProfiles: [
      {
        type: string;
        URL: string;
      }
    ];
    contactMails?: string[];
  };
}

interface Roles {
  name: string;
  startDate: string;
  finishDate?: string;
  challenges?: Challenges[];
  competences?: Competence[];
  referrals?: Referral[];
}

interface Jobs {
  organization: {
    name: string;
    description?: string;
    URL?: string;
    image?: Image;
    location?: {
      country: string;
      region: string;
      municipality: string;
      postalCode?: string;
      address?: string;
    };
  };
  type: string;
  roles: Roles[];
}

interface PublicArtifact {
  details: {
    name: string;
    description?: string;
    URL: string;
    image?: Image;
  };
  type: string;
  publishingDate?: string;
  relatedCompetences?: Competence[];
  tags?: string[];
}

interface Language {
  name: string;
  level: string;
}

interface Skill {
  skill: Competence;
  level: string;
}

interface Studie {
  studyType: string;
  degreeAchieved: boolean;
  name: string;
  description: string;
  startDate: string;
  finishDate: string;
  institution: {
    name: string;
    description: string;
    URL?: string;
    image?: Image;
    location: {
      country: string;
      region: string;
      notes: string;
    };
  };
}

interface WorkingAreas {
  location: {
    country: string;
    region: string;
    municipality?: string;
  };
  distanceFromMunicipality?: {
    unit: string;
    amount: number;
  };
}

interface Goals {
  title: string;
  description: string;
}

export interface ManfredJsonModel {
  settings: {
    language: string;
    lastUpdate: string;
    MACVersion: string;
  };
  aboutMe: {
    profile: {
      name: string;
      surnames: string;
      title: string;
      description: string;
      avatar: {
        alt: string;
        link: string;
      };
      birthday: string;
    };
    relevantYearsOfExperience: number;
    relevantLinks: RelevantLinks[];
    significativeRelationships: SignificativeRelationships[];

    interestingFacts: InterestingFacts[];

    recommendations: Recommendations[];
  };
  experience: {
    jobs: Jobs[];
    publicArtifacts: PublicArtifact[];
  };
  knowledge: {
    languages: Language[];
    hardSkills: Skill[];
    softSkills: Skill[];
    studies: Studie[];
  };
  careerPreferences: {
    contact: {
      publicProfiles: PublicProfiles[];
    };
    status: string;
    requirements: {
      compensation: {
        salary: {
          currency: string;
          from: number;
        };
        equity: {
          mustHave: boolean;
          from: number;
        };
        perks: {
          mustHave: string[];
          niceToHave: string[];
        };
      };
      contractTypes: string[];
      location: {
        remoteOnly: boolean;
        openToRelocate: boolean;
        openToRemote: boolean;
        workingAreas: WorkingAreas[];
        comments: string;
      };
    };
    preferences: {
      preferredCompetences: Competence[];
      discardedCompetences: Competence[];
      preferredOrganizations: string[];
      preferredRoles: string[];
    };
    goals: Goals[];
  };
}
