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
};

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
};


const mainInputs = Array.from(document.querySelectorAll(".mainInput"));
const colorBtns = Array.from(document.querySelectorAll(".color"));
const tabs = ["input", "diaryEntries", "importExport"];

let themeColor = checkLocalStore("themeColor");
let activeSelector = checkLocalStore("activeSelector", "");

mainInputs.forEach(i => i.addEventListener("click", () => activateTab(i)));
colorBtns.forEach(i => i.addEventListener("click", () => changeColor(i)));

styleBody(themeColor);
styleMainButtons(themeColor);
styleActiveBtn(themeColor);
showCurrentTabElements(activeSelector);

function styleMainButtons(color) {
    mainInputs.forEach(i => {
        i.style.background = colorsConfig[color].btnBackground;
        i.style.border = `2px solid ${colorsConfig[color].activeBtn}`;
    });
    const importExportBtns = Array.from(document.querySelectorAll(".import"));
    importExportBtns.forEach(i => {
        i.style.background = colorsConfig[color].btnBackground;
        i.style.border = `2px solid ${colorsConfig[color].activeBtn}`;
    });
}

function styleActiveBtn(color) {
    if (activeSelector) {
        const btnToStyle = document.querySelector(`#${activeSelector}`);
        btnToStyle.style.background = colorsConfig[color].activeBtn;
        btnToStyle.style.border = `2 px solid ${colorsConfig[themeColor].activeBtn}`;
    }
}

function showCurrentTabElements(activeSelector) {
    if (activeSelector) {
        const toShow = document.querySelector(`${showHideConfig[activeSelector].show}`);
        toShow.style.display = "block";
    }
}

function hideObsoleteTabElements(tab) {
    const toHideArr = showHideConfig[tab].hide;
    toHideArr.forEach(i => {
        const el = document.querySelector(i);
        el.style.display = "none";
    });
}

function styleBody(themeColor) {
    document.querySelector("body").style.background = colorsConfig[themeColor].bgBackground;
}

function checkLocalStore(key, defaultVal = "blue") {
    const isValStored = localStorage.getItem(key);
    if (isValStored) {
        return JSON.parse(isValStored);
    } else {
        return defaultVal;
    }
}

function activateTab(tab) {
    styleMainButtons(themeColor);
    tab.style.background = colorsConfig[themeColor].activeBtn;;
    activeSelector = tab.id;
    localStorage.setItem("activeSelector", JSON.stringify(activeSelector));
    showCurrentTabElements(tab.id);
    hideObsoleteTabElements(tab.id);
}

function changeColor(color) {
    themeColor = color.id;
    localStorage.setItem("themeColor", JSON.stringify(themeColor));
    styleMainButtons(themeColor);
    styleBody(color.id);
    styleActiveBtn(themeColor);
}

const showAlert = (msg) => {
    const alert = document.querySelector(".alert");
    alert.style.display = "block";
    alert.className = "alert uiText";
    alert.innerHTML = msg;

    setTimeout(() => {
        alert.innerHTML = "";
        alert.style.display = "none";
    }, 2000);
};