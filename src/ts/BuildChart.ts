import * as chartJs from 'chart.js'

/**
 * Builds a basic chart
 */
export class BuildChart {
    /**
     * Takes the data and returns the built chart
     * @param chartCanvas
     * @param type
     * @param labels
     * @param dataSets
     */
    constructor(chartCanvas: any, type: string, labels: string [], dataSets: ChartDataset []) {
        return new chartJs.Chart( chartCanvas.getContext('2d'), {
            type: type,
            data: {
                labels: labels,
                datasets: dataSets
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}

export class ChartDataset {
    public label: string;
    public data: any [];
    public backgroundColor: any [];
    public borderColor: any[];
    public borderWidth: number;

    /**
     * Builds the chart dataset object
     * @param label
     * @param data
     * @param backgroundColor
     * @param borderColor
     * @param borderWidth
     */
    constructor(label: string,
                data: any [],
                backgroundColor: any [],
                borderColor: any[],
                borderWidth: number) {
        this.label = label;
        this.data = data;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
        this.borderWidth = borderWidth;
    }
}