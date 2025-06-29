type EducationType = {
  en: string;
  pt: string;
};

type EducationItem = {
  title: {
    en: string;
    pt: string;
  };
  institution: {
    en: string;
    pt: string;
  };
  period: {
    en: string;
    pt: string;
  };
  type: EducationType;
};

const educationData: EducationItem[] = [
  {
    title: {
      en: "Systems Analysis and Development",
      pt: "Análise e Desenvolvimento de Sistemas",
    },
    institution: {
      en: "Unicesumar University",
      pt: "Universidade Unicesumar",
    },
    period: {
      en: "MAY/22 - SEP/24",
      pt: "MAI/22 - SET/24",
    },
    type: {
      en: "Technology Degree",
      pt: "Graduação Tecnólogo",
    },
  },
  {
    title: {
      en: "Software Architecture and Solutions",
      pt: "Arquitetura de Software e Soluções",
    },
    institution: {
      en: "XP Educação",
      pt: "XP Educação",
    },
    period: {
      en: "FEB/25 - FEB/26",
      pt: "FEV/25 - FEV/26",
    },
    type: {
      en: "Postgraduate",
      pt: "Pós-graduação",
    },
  },
];

export default educationData;
