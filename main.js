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
    {X:30, Y:-20},
    {X:30, Y:-45}
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
