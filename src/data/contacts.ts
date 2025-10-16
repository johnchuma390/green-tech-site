export interface KeyContact {
  id: string;
  name: string;
  role: string;
  organization: string;
  photo: string;
  email: string;
  phone: string;
}

export const keyContacts: KeyContact[] = [
  {
    id: "1",
    name: "Onkoba Matoke",
    role: "ESA Chairperson",
    organization: "Engineering Students' Association",
    photo: "https://i.postimg.cc/L8bFfcfw/image.png",
    email: "esa@students.uonbi.ac.ke",
    phone: "+254 759 408081"
  },
  {
    id: "2",
    name: "Andrian Kahuthu (Andy)",
    role: "ESA Secretary General",
    organization: "Engineering Students' Association",
    photo: "https://i.postimg.cc/wvFtQxV5/image.png",
    email: "esa@students.uonbi.ac.ke",
    phone: "+254 713 903039"
  },
  {
    id: "3",
    name: "Sandra Barasa",
    role: "Green Tech Chairperson",
    organization: "Green Tech Conference 2025",
    photo: "https://i.postimg.cc/DzvndrYp/image.png",
    email: "esa@students.uonbi.ac.ke",
    phone: "+254 718 470425"
  },
  {
    id: "4",
    name: "Cherryl Osewe",
    role: "Green Tech Vice Chairperson",
    organization: "Green Tech Conference 2025",
    photo: "https://i.postimg.cc/150zG33X/Whats-App-Image-2025-10-04-at-15-28-21-159ac24e.jpg",
    email: "esa@students.uonbi.ac.ke",
    phone: "+254 724 533978"
  }
];
