import bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./src/services/services";
import "./src/components/createBigPhoto/createBigPhoto";
import "./src/components/createListItems/createListItems";
import "./src/components/loadMoreButton/loadMoreButton";
import "./src/components/serchForm/serchForm";
import { createLogo } from "./src/components/createLogo/createLogo";
import { createListItems } from "./src/components/createListItems/createListItems";

console.log("hhhh");

const logo = new createLogo();
logo.render();

const listItems = new createListItems();
// listItems.render();
