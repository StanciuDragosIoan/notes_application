// //buttons and inputs
// const inputBtn = document.querySelector("#inputBtn");
// const listBtn = document.querySelector("#recordsBtn");
// const importExportBtn = document.querySelector("#importExportBtn");
// const inputDiv = document.querySelector("#input");
// const entriesDiv = document.querySelector(".diaryEntries");

// const uiText = document.querySelector(".uiText");
// const importExportDiv = document.querySelector(".importExport");
// //colors for UI customisation
// const c1 = document.getElementById("c1");
// const c2 = document.getElementById("c2");
// const c3 = document.getElementById("c3");
// const bodyBackground = document.querySelector("body");

// //grab theme and active btn from localStorage
// let theme = localStorage.getItem("theme");
// let activeBtn = localStorage.getItem("activeBtn");

// let activeColor = "#050D31";
// let inactiveColor = "#2600FF";

// //change pannel/element function
// const toggleElement = (toShow, toHide, activeC, inactiveC) => {
//     toShow.map((i) => (i.style.display = "block"));
//     toHide.map((i) => (i.style.display = "none"));
//     activeC.map((i) => (i.style.backgroundColor = activeColor));
//     inactiveC.map((i) => (i.style.backgroundColor = inactiveColor));
// };

// //change color theme function
// const changeTheme = (c1, c2, c3, c4) => {
//     bodyBackground.style.backgroundColor = c1;
//     activeColor = c2;
//     inactiveColor = c3;
//     inputBtn.style.backgroundColor = inactiveColor;
//     recordsBtn.style.backgroundColor = inactiveColor;
//     importExportBtn.style.backgroundColor = inactiveColor;
//     importBtn.style.backgroundColor = inactiveColor;
//     exportBtn.style.backgroundColor = inactiveColor;
//     listBtn.style.border = `2px solid ${activeColor}`;
//     inputBtn.style.border = `2px solid ${activeColor}`;
//     importBtn.style.border = `2px solid ${activeColor}`;
//     exportBtn.style.border = `2px solid ${activeColor}`;
//     importExportBtn.style.border = `2px solid ${activeColor}`;
//     uiText.style.border = `2px solid ${activeColor}`;

//     let activeBtn = localStorage.getItem("activeBtn");
//     //apply active class on button while changing color
//     switch (activeBtn) {
//         case "entries":
//             listBtn.style.backgroundColor = activeColor;
//             break;
//         case "importExport":
//             importExportBtn.style.backgroundColor = activeColor;
//             break;
//         case "input":
//             inputBtn.style.backgroundColor = activeColor;
//             break;
//     }
// };

// //keep track of UI theme and update
// if (theme === "blue") {
//     changeTheme("#6C8CE2", "#050D31", "#2600FF", "blue");
// } else if (theme === "yellow") {
//     changeTheme("#fcce03", "#ad871d", "#ebb852", "yellow");
// } else if (theme === "pink") {
//     changeTheme("pink", "#97089e", "#f003fc", "pink");
// }

// //event listener for toggling pannels
// inputBtn.addEventListener("click", () => {
//     toggleElement(
//         [inputDiv],
//         [entriesDiv, importExportDiv],
//         [inputBtn],
//         [listBtn, importExportBtn]
//     );
//     //set active btn to localStorage so app remembers it
//     localStorage.setItem("activeBtn", "input");
// });

// listBtn.addEventListener("click", () => {
//     toggleElement(
//         [entriesDiv],
//         [inputDiv, importExportDiv],
//         [listBtn],
//         [inputBtn, importExportBtn]
//     );
//     //set active btn to localStorage so app remembers it
//     localStorage.setItem("activeBtn", "entries");
// });

// importExportBtn.addEventListener("click", () => {
//     toggleElement(
//         [importExportDiv],
//         [inputDiv, entriesDiv],
//         [importExportBtn],
//         [listBtn, inputBtn]
//     );
//     //set active btn to localStorage so app remembers it
//     localStorage.setItem("activeBtn", "importExport");
// });

// //event listeners for changing theme
// c1.addEventListener("click", () => {
//     changeTheme("#6C8CE2", "#050D31", "#2600FF", "blue");
//     //set theme to localStorage so app remembers it
//     localStorage.setItem("theme", "blue");
// });
// c2.addEventListener("click", () => {
//     changeTheme("#fcce03", "#ad871d", "#ebb852", "yellow");
//     //set theme to localStorage so app remembers it
//     localStorage.setItem("theme", "yellow");
// });
// c3.addEventListener("click", () => {
//     changeTheme("pink", "#97089e", "#f003fc", "pink");
//     //set theme to localStorage so app remembers it
//     localStorage.setItem("theme", "pink");
// });

// //keep track of active tab and show the one last clicked
// if (activeBtn === "input") {
//     toggleElement(
//         [inputDiv],
//         [entriesDiv, importExportDiv],
//         [inputBtn],
//         [listBtn, importExportBtn]
//     );
// } else if (activeBtn === "entries") {
//     toggleElement(
//         [entriesDiv],
//         [inputDiv, importExportDiv],
//         [listBtn],
//         [inputBtn, importExportBtn]
//     );
// } else if (activeBtn === "importExport") {
//     toggleElement(
//         [importExportDiv],
//         [inputDiv, entriesDiv],
//         [importExportBtn],
//         [listBtn, inputBtn]
//     );
// }

// /*
//  * Alert Functionality
//  */
// const showAlert = (msg) => {
//     const alert = document.querySelector(".alert");
//     alert.style.display = "block";
//     alert.className = "alert uiText";
//     alert.innerHTML = msg;

//     setTimeout(() => {
//         alert.innerHTML = "";
//         alert.style.display = "none";
//     }, 2000);
// };


// //keep track of UI theme and update
// if (theme === "blue") {
//     changeTheme("#6C8CE2", "#050D31", "#2600FF", "blue");
// } else if (theme === "yellow") {
//     changeTheme("#fcce03", "#ad871d", "#ebb852", "yellow");
// } else if (theme === "pink") {
//     changeTheme("pink", "#97089e", "#f003fc", "pink");
// }



const mainInputs = Array.from(document.querySelectorAll(".mainInput"));
const colorBtns = Array.from(document.querySelectorAll(".color"));

const tabs = ["input", "diaryEntries", "importExport"];


const isThemeStore = localStorage.getItem("themeColor");
if (isThemeStore) {
    themeColor = JSON.parse(isThemeStore);
} else {
    themeColor = "blue";
}

let activeSelector
const isSelectorStore = localStorage.getItem("activeSelector");
if (isSelectorStore) {
    activeSelector = JSON.parse(isSelectorStore);
} else {
    activeSelector = "";
}





mainInputs.forEach(i => i.addEventListener("click", () => activateTab(i)));
colorBtns.forEach(i => i.addEventListener("click", () => changeColor(i)));


const colorsConfig = {
    blue: {
        bgBackground: "#6C8CE2",
        btnBackground: "#2600FF",
        activeBtn: "#050D31",
        btnBorder: "#2600FF",
    },
    yellow: {
        bgBackground: "#fcce03",
        btnBackground: "#ebb852",
        activeBtn: "#ad871d",
        btnBorder: "#ebb852",
    },
    pink: {
        bgBackground: "pink",
        btnBackground: "#f003fc",
        activeBtn: "#97089e",
        btnBorder: "#f003fc",
    }
}



const showHideConfig = {
    inputBtn: {
        show: "#input",
        hide: [".diaryEntries", ".importExport"]
    },
    recordsBtn: {
        show: ".diaryEntries",
        hide: ["#input", ".importExport"]
    },
    importExportBtn: {
        show: ".importExport",
        hide: ["#input", ".diaryEntries"]
    },
}


const styleMainButtons = (color) => {
    mainInputs.forEach(i => {
        i.style.background = colorsConfig[color].btnBackground;
        i.style.border = `2px solid ${colorsConfig[color].activeBtn}`;
    });
}

document.querySelector("body").style.background = colorsConfig[themeColor].bgBackground;

styleMainButtons(themeColor);
document.querySelector(`#${activeSelector}`).style.background = colorsConfig[themeColor].activeBtn;
const toShow = document.querySelector(`${showHideConfig[activeSelector].show}`);
toShow.style.display = "block";


const activateTab = (arg) => {
    console.log('active tab here..');
    //deactivate other buttons


    styleMainButtons(themeColor);
    //style active button
    arg.style.background = colorsConfig[themeColor].activeBtn;;
    activeSelector = arg.id;
    localStorage.setItem("activeSelector", JSON.stringify(activeSelector));

    //display hidden
    const toShow = document.querySelector(`${showHideConfig[arg.id].show}`);
    toShow.style.display = "block";


    //hide to hide
    const toHideArr = showHideConfig[arg.id].hide;
    console.log(toHideArr)
    toHideArr.forEach(i => {
        const el = document.querySelector(i);
        el.style.display = "none";
    });

}


const changeColor = (arg) => {
    console.log('change color..');

    themeColor = arg.id;
    localStorage.setItem("themeColor", JSON.stringify(themeColor));

    styleMainButtons(themeColor);

    const body = document.querySelector("body");
    body.style.background = colorsConfig[arg.id].bgBackground;



    const btnToStyle = document.querySelector(`#${activeSelector}`);

    btnToStyle.style.background = colorsConfig[arg.id].activeBtn;
    btnToStyle.style.border = `2 px solid ${colorsConfig[themeColor].activeBtn}`;
}