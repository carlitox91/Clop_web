$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Crudo: 2666,
            Agua: null,
            Gasolina: 2647
        }, {
            period: '2010 Q2',
            Crudo: 2778,
            Agua: 2294,
            Gasolina: 2441
        }, {
            period: '2010 Q3',
            Crudo: 4912,
            Agua: 1969,
            Gasolina: 2501
        }, {
            period: '2010 Q4',
            Crudo: 3767,
            Agua: 3597,
            Gasolina: 5689
        }, {
            period: '2011 Q1',
            Crudo: 6810,
            Agua: 1914,
            Gasolina: 2293
        }, {
            period: '2011 Q2',
            Crudo: 5670,
            Agua: 4293,
            Gasolina: 1881
        }, {
            period: '2011 Q3',
            Crudo: 4820,
            Agua: 3795,
            Gasolina: 1588
        }, {
            period: '2011 Q4',
            Crudo: 15073,
            Agua: 5967,
            Gasolina: 5175
        }, {
            period: '2012 Q1',
            Crudo: 10687,
            Agua: 4460,
            Gasolina: 2028
        }, {
            period: '2012 Q2',
            Crudo: 8432,
            Agua: 5713,
            Gasolina: 1791
        }],
        xkey: 'period',
        ykeys: ['Crudo', 'Agua', 'Gasolina'],
        labels: ['Crudo', 'Agua', 'Gasolina'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Descargues",
            value: 12
        }, {
            label: "Cargues",
            value: 30
        }, {
            label: "Programaciones",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
