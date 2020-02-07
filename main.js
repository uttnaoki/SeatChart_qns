const image = {
    url:    'images/席画像.png',
    width:  4307,
    height: 2820
};
const minZoom = 1;
const maxNativeZoom = 4;
const maxZoom = 2;

const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: minZoom,
    maxZoom: maxZoom
});

const imageBounds = L.latLngBounds([
    map.unproject([-100, image.height + 100], maxNativeZoom),
    map.unproject([image.width, 0], maxNativeZoom)
]);


map.fitBounds(imageBounds);
// map.setMaxBounds(imageBounds.pad(0.5));

L.imageOverlay(image.url, imageBounds).addTo(map);

const seatPosition = [
    {X:40, Y:-30},
    {X:40, Y:-55},
    {X:40, Y:-80},
    {X:40, Y:-105},
    {X:40, Y:-130},
    {X:40, Y:-155},
    {X:75, Y:-30},
    {X:75, Y:-55},
    {X:75, Y:-80},
    {X:75, Y:-105},
    {X:75, Y:-130},
    {X:75, Y:-155},
    {X:190, Y:-30},
    {X:190, Y:-55},
    {X:190, Y:-80},
    {X:190, Y:-105},
    {X:190, Y:-130},
    {X:190, Y:-155},
    {X:225, Y:-30},
    {X:225, Y:-55},
    {X:225, Y:-80},
    {X:225, Y:-105},
    {X:225, Y:-130},
    {X:225, Y:-155},
];

const iconParam = (name) => {
    return {
        html: `<div 
            style="
                font-size:14px;
                margin-top:10px;
                margin-left:10px;
                ">${name}
            </div>`,
        className: 'seatIcon',
        iconSize: [name.length*14+20,40],
        popupAnchor: [0, -20]
    };
}

const addPerson = (status, seatId) => {
    const divIcon = L.divIcon(iconParam(new String(status.name), 0));
    const pos = [seatPosition[seatId].Y, seatPosition[seatId].X];
    L.marker(pos, {icon: divIcon}).addTo(map).bindPopup(`
        <div>
            <img src="images/${status.name}.png" style="border: solid 1px #000000;">
            <div class="statusName">${status.name}</div>
            <div class="statusKana">${status.kana}</div>
            <div class="space"></div>
            <div class="statusItemTitle">◆所属◆</div>
            <div class="statusItemContent">${status.department}</div>
            <div class="statusItemTitle">◆Tel◆</div>
            <div class="statusItemContent">${status.tel}</div>
        </div>
    `, {
        maxWidth: "auto"
    }); 
};

let personStatus;
personStatus = {
    name: 'モクロー',
    kana: 'もくろー',
    department: 'くさ・ひこう',
    tel: 'しんりょく'
}
addPerson(personStatus, 0);
personStatus = {
    name: 'ニャビー',
    kana: 'にゃびー',
    department: 'ほのお',
    tel: 'もうか'
}
addPerson(personStatus, 1);
// addPerson(personStatus, 2);
// addPerson(personStatus, 3);
addPerson(personStatus, 4);
// addPerson(personStatus, 5);

// addPerson(personStatus, 6);
// addPerson(personStatus, 7);
addPerson(personStatus, 8);
addPerson(personStatus, 9);
// addPerson(personStatus, 10);
addPerson(personStatus, 11);

addPerson(personStatus, 12);
// addPerson(personStatus, 13);
// addPerson(personStatus, 14);
// addPerson(personStatus, 15);
addPerson(personStatus, 16);
// addPerson(personStatus, 17);

// addPerson(personStatus, 18);
addPerson(personStatus, 19);
// addPerson(personStatus, 20);
// addPerson(personStatus, 21);
addPerson(personStatus, 22);
addPerson(personStatus, 23);
