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
  onClose: ()=>void;
  data?: SeminarType;
};

export type SeminarCreateType = {
  id?: string;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
};