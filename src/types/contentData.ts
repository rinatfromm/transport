export interface Section {
    heading: string;
    items: string[];
}

export interface ContentData {
    leistungen: Section;
    transporter: Section;
    anhaenger: Section;
}