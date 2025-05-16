export interface Section {
  heading: string;
  items: (string | { text: string; subItems: string[] })[]; 
}

export interface ContentData {
  transporter: Section;
  anhaenger: Section;
}



