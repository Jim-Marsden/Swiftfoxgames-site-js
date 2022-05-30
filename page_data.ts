/*
* This file contains the classes for the extensibility
* of templates without the need of much refactoring,
* just extension the composition.
* */


export class main_template{
    css_data: string;
    page: string;
    title: string;
    body_content: string;
    footer: string;

    constructor(title: string = 'Hello!', body_content: string = 'Thanks for coming!') {
        this.css_data = '/core.css';
        this.page = 'index';
        this.title = title
        this.body_content = body_content;
        let year = new Date().getFullYear();
        this.footer = 'Copyright ' + year.toString() + ' :D';
    }
}

export class index extends main_template{
    constructor() {
        super('Index', "Welcome, we are a small team of developers. Our games are passion projects. While our games are a way from public viewing, we hope you'll like our many offerings. We're currently building this place, so please don't' mind the dust.");
    }
}

export class list_page_data{
    point_name: string;
    seperator: string;
    point_message: string;
    data: Array<{name: string, status:string}>;

    constructor(point_name: string, point_message: string, data:Array<{name:string, status:string}>, seperator :string = ' - ') {
        this.point_name = point_name;
        this.point_message = point_message;
        this.seperator = seperator;
        this.data = data;
    }
}

export class list_page extends main_template{
    list_data: Array<list_page_data>;
    list_page_header: string
    constructor(list_data: Array<list_page_data>, list_page_header: string = '') {
        super();
        this.page = 'list_page'
        this.list_data = list_data;
        this.list_page_header = list_page_header;
    }
}