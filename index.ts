import express from "express";
import {index} from "./page_data";
import {about_page, index_page, thanks_page, try_it_page} from "./pages";
const app = express();

// [Express Setup] ============================================= [Express Setup]
app.set('views', './views');
app.set('view engine', 'pug');

// [Directory Setup] ========================================== [Directory Setup]
app.use(express.static('wasm'));
app.use(express.static('wasm/helpers'))
app.use(express.static('Media'))

// [Page Routing] ================================================ [Page Routing]
app.get('/', index_page);
app.get('/index', index_page);
app.get('/try_it', try_it_page);
app.get('/about', about_page);
app.get('/thanks', thanks_page);

app.get('/exit', (req: any, res: any) => {
    res.redirect('http://example.com/');
});


// [File Routing] ================================================ [File Routing]

app.get('/core.css', (req, res) => {
    res.sendFile(__dirname + '/css/core.css');
});

app.get('/chess.wasm', (req, res) => {
    res.sendFile(__dirname + '/wasm/chess_wasm.wasm');
});

app.get('/chess', (req , res) => {
    res.render('sdl_render', new index());
});
app.get('/sdl', (req, res) => {
    res.render('sdl_render', new index());
});

// [App Run] ========================================================== [App Run]


function main(): number {
    const EXIT_SUCCESS = 0;
    const EXIT_FAILURE = -1;
    const port = 3000;
    try {
        app.listen(port, () => {
            console.log(`listening on port: ${port}`)
        })
    }
    catch (e) {
        console.log(e);
        return EXIT_FAILURE;
    }
    return EXIT_SUCCESS;
}

console.log(`Program exited with code: ${main()}`);