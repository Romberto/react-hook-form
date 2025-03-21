export type SeminarType = {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    photo: string;
}

export type SeminarFormType = {
  title: string;
  data?: SeminarType[];
};

export type SeminarCreateType = {
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
};