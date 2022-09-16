// ::::::::::GLOBAL VARIABLES::::::::::::::::::
var Units;      //UNITS TO BE INVOLVED IN THE CONVERSION
var data;       //CONVERSION DATA

function DrawUI(navigation)
{
    nav = document.getElementsByClassName("click");
    for(i=0;i<nav.length;i++)
    {
        nav[i].style.backgroundColor = "red";
    }
    switch(navigation)  //SELECTION OF THE "UNITS" AND CORROSPONDING "CONVERSION DATA" ...
    {
        case 'AREA':
            Units = new Array("Acres (ac)", "Ares (a)", "Hactares (ha)", "Square centimetres (cm&sup2)", "Square feet (ft&sup2)","Square inches (in&sup2)","Square metres (m&sup2)");
            data = new Array(
                new Array(1,40.468564224, 0.4046856422, 40468564.224, 43560, 6272640, 4046.8564224),
                new Array(0.0247105381, 1, 0.01, 1000000, 1076.391041671, 155000.31000062, 100),
                new Array(2.4710538147, 100, 1, 100000000, 107639.1041671, 15500031.000062, 10000),
                new Array(2.4711e-8, 0.000001, 1.00000000e-8, 1, 0.001076391, 0.15500031, 0.0001),
                new Array(0.0000229568, 0.0009290304, 0.0000092903, 929.0304, 1, 144, 0.09290304),
                new Array(1.59422508e-7, 0.0000064516, 6.45160000e-8, 6.4516, 0.0069444444, 1, 0.00064516),
                new Array(0.0002471054, 0.01, 0.0001, 10000, 10.7639104167,1550.0031000062, 1)
            );
            break;
        case 'LENGTH':
            Units = new Array("Millimeteres (mm)", "Centimetres (cm)", "Metres (m)", "Kilometres (km)", "Inches (in)", "Feet (ft)", "Yards (yd)", "Miles (mi)", "Nautical miles (NM)", "Mils (mil)");
            data = new Array(
                new Array(1, 0.1, 0.001, 0.000001, 0.0393700787, 0.0032808399, 0.0010936133, 6.21371192e-7, 5.39956803e-7, 39.3700787402),
                new Array(10, 1, 0.01, 0.00001, 0.3937007874, 0.032808399, 0.010936133, 0.0000062137, 0.0000053996, 393.7007874016),
                new Array(1000, 100, 1, 0.001, 39.3700787402, 3.280839895, 1.0936132983, 0.0006213712, 0.0005399568, 39370.078740157),
                new Array(1000000, 100000, 1000, 1, 39370.078740157, 3280.8398950131, 1093.6132983377, 0.6213711922, 0.5399568035, 39370078.740157),
                new Array(25.4, 2.54, 0.0254, 0.0000254, 1, 0.0833333333, 0.0277777778, 0.0000157828, 0.0000137149, 1000),
                new Array(304.8, 30.48, 0.3048, 0.0003048, 12, 1, 0.3333333333, 0.0001893939, 0.0001645788, 12000),
                new Array(914.4, 91.44, 0.9144, 0.0009144, 36, 3, 1, 0.0005681818, 0.0004937365, 36000),
                new Array(1609344, 160934.4, 1609.344, 1.609344, 63360, 5280, 1760, 1, 0.8689762419, 63360000),
                new Array(1852000, 185200, 1852, 1.852, 72913.385826772, 6076.1154855643, 2025.3718285214, 1.150779448, 1, 72913385.826772),
                new Array(0.0254, 0.00254, 0.0000254, 2.54000000e-8, 0.001, 0.0000833333, 0.0000277778, 1.57828283e-8, 1.37149028e-8, 1)
            );
            break;
        case 'TEMPERATURE':
            Units = new Array("Celsius (&#8451;)", "Fahrenheit (&#8457;)", "Kelvin (K)");
            data = new Array(
                new Array(1, 33.8, 274.15),
                new Array(-17.2222222222, 1, 255.9277777778),
                new Array(-272.15, -457.87, 1)
            );
            break;
        case 'VOLUME':
            Units = new Array("UK gallons (gal)", "US gallons (gal)", "Litres (l)", "Millilitres (ml)", "Cubic centimetres (cc | cm&sup3)", "Cubic metres (m&sup3)", "Cubic inches (in&sup3)", "Cubic feet (ft&sup3)");
            data = new Array(
                new Array(1, 1.2009499255, 4.54609, 4546.09, 4546.09, 0.00454609, 277.4194327916, 0.1605436532),
                new Array(0.8326741846, 1, 3.785411784, 3785.411784, 3785.411784, 0.0037854118, 231, 0.1336805556),
                new Array(0.2199692483, 0.2641720524, 1, 1000, 1000, 0.001, 61.0237440947, 0.0353146667),
                new Array(0.0002199692, 0.0002641721, 0.001, 1, 1, 0.000001, 0.0610237441, 0.0000353147),
                new Array(0.0002199692, 0.0002641721, 0.001, 1, 1, 0.000001, 0.0610237441, 0.0000353147),
                new Array(219.9692482991, 264.1720523581, 1000, 1000000, 1000000, 1, 61023.744094732, 35.3146667215),
                new Array(0.0036046501, 0.0043290043, 0.016387064, 16.387064, 16.387064, 0.0000163871, 1, 0.0005787037),
                new Array(6.228835459, 7.4805194805, 28.316846592, 28316.846592, 28316.846592, 0.0283168466, 1728, 1)
            );
            break;
        case 'MASS':
            Units = new Array("Tons (t)", "UK tons (t)", "US tons (t)", "Pounds (lb)", "Ounces (oz)", "Kilogrammes (kg)", "Grams (g)");
            data = new Array(
                new Array(1, 0.9842065276, 1.1023113109, 2204.6226218488, 35273.96194958, 1000, 1000000),
                new Array(1.0160469088, 1, 1.12, 2240, 35840, 1016.0469088, 1016046.9088),
                new Array(0.90718474, 0.8928571429, 1, 2000, 32000, 907.18474, 907184.74),
                new Array(0.0004535924, 0.0004464286, 0.0005, 1, 16, 0.45359237, 453.59237),
                new Array(0.0000283495, 0.0000279018, 0.00003125, 0.0625, 1, 0.0283495231, 28.349523125),
                new Array(0.001, 0.0009842065, 0.0011023113, 2.2046226218, 35.2739619496, 1, 1000),
                new Array(0.000001, 9.84206528e-7, 0.0000011023, 0.0022046226, 0.0352739619, 0.001, 1)
            );
            break;
        case 'DATA':
            Units = new Array("Bits (bit)", "Bytes (B)", "Kilobytes (KB)", "Megabytes (MB)", "Gigabytes (GB)", "Terabytes (TB)");
            data = new Array(
                new Array(1, 0.125, 0.0001220703, 1.19209290e-7, 1.16415322e-10, 1.13686838e-13),
                new Array(8,1, 0.0009765625, 9.53674316e-7, 9.31322575e-10, 9.09494702e-13),
                new Array(8192, 1024, 1, 0.0009765625, 9.53674316e-7, 9.31322575e-10),
                new Array(8388608, 1048576, 1024, 1, 0.0009765625, 9.53674316e-7),
                new Array(8589934592, 1073741824, 1048576, 1024, 1, 0.0009765625),
                new Array(8796093022208, 1099511627776, 1073741824, 1048576, 1024, 1)
            );
            break;
        case 'SPEED':
            Units = new Array("Metres per second (m/s)", "Metres per hour (m/h)", "Kilometres per second (km/s)", "Kilometres per hour (km/h)", "Inches per second (in/s)", "Inches per hour (in/h)", "Feet per second (ft/s)", "Feet per hour (ft/h)", "Miles per second (mi/s)", "Miles per hour (mi/h)", "Knots (kn)");
            data = new Array(
                new Array(1, 3600, 0.001, 3.6, 39.3700787402, 141732.28346457, 3.280839895, 11811.023622047, 0.0006213712, 2.2369362921, 1.9438444924),
                new Array(0.0002777778, 1, 2.77777778e-7, 0.001, 0.010936133, 39.3700787402, 0.0009113444, 3.280839895, 1.72603109e-7, 0.0006213712, 0.0005399568),
                new Array(1000, 3600000, 1, 3600, 39370.078740157, 141732283.46457, 3280.8398950131, 11811023.622047, 0.6213711922, 2236.9362920544, 1943.8444924406),
                new Array(0.2777777778, 1000, 0.0002777778, 1, 10.9361329834, 39370.078740157, 0.9113444153, 3280.8398950131, 0.0001726031, 0.6213711922, 0.5399568035),
                new Array(0.0254, 91.44, 0.0000254, 0.09144, 1, 3600, 0.0833333333, 300, 0.0000157828, 0.0568181818, 0.0493736501),
                new Array(0.0000070556, 0.0254, 7.05555556e-9, 0.0000254, 0.0002777778, 1, 0.0000231481, 0.0833333333, 4.38411897e-9, 0.0000157828, 0.0000137149),
                new Array(0.3048, 1097.28, 0.0003048, 1.09728, 12, 43200, 1, 3600, 0.0001893939, 0.6818181818, 0.5924838013),
                new Array(0.0000846667, 0.3048, 8.46666667e-8, 0.0003048, 0.0033333333, 12, 0.0002777778, 1, 5.26094276e-8, 0.0001893939, 0.0001645788),
                new Array(1609.344, 5793638.4, 1.609344, 5793.6384, 63360, 228096000, 5280, 19008000, 1, 3600, 3128.3144708423),
                new Array(0.44704, 1609.344, 0.00044704, 1.609344, 17.6, 63360, 1.4666666667, 5280, 0.0002777778, 1, 0.8689762419),
                new Array(0.5144444444, 1852, 0.0005144444, 1.852, 20.2537182852, 72913.385826772, 1.6878098571, 6076.1154855643, 0.000319661, 1.150779448, 1)
            );
            break;
        case 'TIME':
            Units = new Array("Milliseconds (ms)", "Seconds (s)", "Minutes (min)", "Hours (h)", "Days (d)", "Weeks (wk)");
            data = new Array(
                new Array(1, 0.001, 0.0000166667, 2.77777778e-7, 1.15740741e-8, 1.65343915e-9),
                new Array(1000, 1, 0.0166666667, 0.0002777778, 0.0000115741, 0.0000016534),
                new Array(60000, 60, 1, 0.0166666667, 0.0006944444, 0.0000992063),
                new Array(3600000, 3600, 60, 1, 0.0416666667, 0.005952381),
                new Array(86400000, 86400, 1440, 24, 1, 0.1428571429),
                new Array(604800000, 604800, 10080, 168, 7, 1)
            );
            break;
    }
    
    
    var From_Unit = document.getElementById("From_Unit");   //[SELECT OPTION] TO BE TO BE CONVERTED
    var To_Unit = document.getElementById("To_Unit");       //[SELECT OPTION] TO WHICH VALUE IS CONVERTED

    From_Unit.innerHTML = "";       //CLEAR ALL THE PREVIOUS OPTIONS OF THE SELECT ELEMENT
    To_Unit.innerHTML = "";         //CLEAR ALL THE PREVIOUS OPTIONS OF THE SELECT ELEMENT

    for(let i=0;i<Units.length;i++)
    {
        let option = document.createElement("OPTION");
        option.value = Units[i];
        option.innerHTML = Units[i];

        From_Unit.appendChild(option);                 //SET NEW OPTION VALUES TO THE SELECT ELEMENT
        To_Unit.appendChild(option.cloneNode(true));                         //SET NEW OPTION VALUES TO THE SELECT ELEMENT
    }
}




function TranslateUnit(direction)
{
    switch (direction)
    {
        case 'FORWARD':
            var FromSelected = From_Unit.selectedIndex;
            var ToSelected = To_Unit.selectedIndex;
    
            var From_Input = document.getElementById("From_Input");
            var To_Input = document.getElementById("To_Input");
            break;
        case 'BACKWARD':
            var FromSelected = To_Unit.selectedIndex;
            var ToSelected = From_Unit.selectedIndex;
    
            var From_Input = document.getElementById("To_Input");
            var To_Input = document.getElementById("From_Input");
            break;
    }
    
    

    var input = From_Input.value;       //GET THE INPUT VALUE

    if (input == NaN)              //CHECK IF THE INPUT VALUE IS 'NAN' , IF YES, SET IT TO 0
    {
        input = 0;
    }    
    To_Input.value = input * data[FromSelected][ToSelected];        //CONVERT THE SPECIFIED VALUE AND SET IT TO OUTPUT TEXTBOX[INPUT]
    
   
}