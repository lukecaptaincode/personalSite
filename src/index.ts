//Assets
import './sass/style.scss';
//Chart builder
import {BuildChart, ChartDataset} from './ts/BuildChart';
const heroImage = require('./images/michael-baccin-1310579-unsplash.jpg');
let heroImageElement = document.getElementById("heroImage") as HTMLImageElement;
heroImageElement.src = heroImage;
let chartDataSets = [new ChartDataset("Test",
    [1, 2, 3, 4, 5,6],
    [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ], 2)
];

new BuildChart(document.getElementById('mainChart'),
    'bar',
    ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    chartDataSets);