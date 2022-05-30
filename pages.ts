/*
* This file contains the rendering for webpages.
* It's mostly a wrapper for the pages classes.
* */

import {index, list_page, list_page_data, main_template} from "./page_data";
import * as express from "express";

export function index_page(req: express.request, res: express.response) {
    const to_render = new index();
    res.render(to_render.page, to_render);
}

export function try_it_page(req: express.request, res: express.response) {
    const to_render =  new main_template('Try it!',
        `We're actively working on something neato!
        We'll hopefully let you play our games online in your browser soon!`);
    res.render(to_render.page, to_render);
}

export function about_page(req: express.request, res: express.response) {
    const list_page_content = new list_page([
        new list_page_data('Our team:',
            '', [
                {name: "Jim", status: "Programming, Engine design"},
                {name: "Insula", status: "Art, game design, writing."},
            ]),

        new list_page_data('Our products', '',
            [{name: "Bunny Hope Engine", status: "It's our engine that's under active development"},
                {name: "Moon Light Trails", status: "Our game that's under under wraps."},
                {
                    name: "'RTS'",
                    status: "A project that we're going to be putting together soon mostly to test features and the ablility to host our games online"
                }])
    ]);
    res.render(list_page_content.page, list_page_content);
}

export function thanks_page(req: express.request, res: express.response) {

    const list_page_content = new list_page([
        new list_page_data('Jim',
            'for', [
                {name: "Keeva", status: "Putting up with me"},
                {name: "Insula", status: "All of the art, and helping me focus"},
                {name: "Nyletak", status: "Getting the art started"}]),

        new list_page_data('Insula', 'for',
            [{name: "Valsharen", status: "being a supportive spouse"},
                {name: "Browncoat", status: "giving the best worst ideas"}])
    ]);

    res.render(list_page_content.page, list_page_content);
}
