/*

STRINGS
tekstine reiksme gali buti inicijuota:
- vienguba (') kabute
- dvyguba (") kabute
- backtick (`) kabute

Multi-line tekstas kiekvienoje teksto neuzbaigiacioje eiluteje turi \

*/

const text1 = 'Labas rytas';
const text2 = "Labas rytas";

const kabutes21 = "Viengubos kabutes (').";
const kabutes12 = 'Dvygubos kabutes (").';
const kabutes1 = 'Viengubos kabutes (\') ir dvygubos kabutes (").';
const kabutes2 = "Viengubos kabutes (') ir dvygubos kabutes (\").";
const kabutes1u = 'Viengubos kabutes (\') ir dvygubos kabutes (\").';
const kabutes2u = "Viengubos kabutes (\') ir dvygubos kabutes (\").";

console.log(kabutes1u);
console.log(kabutes2u);

const imgSrc = './img/logo.png';

const HTML = '<header>\
                <img src="' + imgSrc + '" alt="Logo" class="logo">\
                <nav>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                </nav>\
            </header>';
console.log(HTML);

const home = ['./home', 'Home page'];

const HTMLback = `<header>
                    <img src="${imgSrc}" alt="Logo" class="logo">
                    <nav>
                        <a href="${home[0]}">${home[1]}</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </nav>
                </header>`;
console.log(HTMLback);