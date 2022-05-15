import 'regenerator-runtime'; /* for async await transpile */
import ('../styles/main.css');
import ('../scripts/request.js');
import $ from 'jquery';


$(document).ready(function() {
    var $menu = $("#menu"),
        $menulink = $(".menu-link");
    
        $menulink.click(function() {
        $menulink.toggleClass("open");
        $menu.toggleClass("open");
    return false;
    });
});