import app from '../../src/apprun';
//import * as $ from "jquery";
declare var $: any;

let $element;
app.on('#', () => $element.load('demo/router-components/home.html'));
export default (element) => $element = $(element);