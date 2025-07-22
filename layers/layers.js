var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Route_Overview_1 = new ol.format.GeoJSON();
var features_Route_Overview_1 = format_Route_Overview_1.readFeatures(json_Route_Overview_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_Overview_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_Overview_1.addFeatures(features_Route_Overview_1);
var lyr_Route_Overview_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_Overview_1, 
                style: style_Route_Overview_1,
                popuplayertitle: 'Route_Overview',
                interactive: false,
                title: '<img src="styles/legend/Route_Overview_1.png" /> Route_Overview'
            });
var format_Stage5TallaghtStadiumOToolePark_2 = new ol.format.GeoJSON();
var features_Stage5TallaghtStadiumOToolePark_2 = format_Stage5TallaghtStadiumOToolePark_2.readFeatures(json_Stage5TallaghtStadiumOToolePark_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stage5TallaghtStadiumOToolePark_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stage5TallaghtStadiumOToolePark_2.addFeatures(features_Stage5TallaghtStadiumOToolePark_2);
var lyr_Stage5TallaghtStadiumOToolePark_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stage5TallaghtStadiumOToolePark_2, 
                style: style_Stage5TallaghtStadiumOToolePark_2,
                popuplayertitle: 'Stage 5: Tallaght Stadium - O\'Toole Park',
                interactive: false,
                title: '<img src="styles/legend/Stage5TallaghtStadiumOToolePark_2.png" /> Stage 5: Tallaght Stadium - O\'Toole Park'
            });
var format_Stage4BlessingtonGAAClubTallaght_Stadium_3 = new ol.format.GeoJSON();
var features_Stage4BlessingtonGAAClubTallaght_Stadium_3 = format_Stage4BlessingtonGAAClubTallaght_Stadium_3.readFeatures(json_Stage4BlessingtonGAAClubTallaght_Stadium_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stage4BlessingtonGAAClubTallaght_Stadium_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stage4BlessingtonGAAClubTallaght_Stadium_3.addFeatures(features_Stage4BlessingtonGAAClubTallaght_Stadium_3);
var lyr_Stage4BlessingtonGAAClubTallaght_Stadium_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stage4BlessingtonGAAClubTallaght_Stadium_3, 
                style: style_Stage4BlessingtonGAAClubTallaght_Stadium_3,
                popuplayertitle: 'Stage 4: Blessington GAA Club - Tallaght_Stadium',
                interactive: false,
                title: '<img src="styles/legend/Stage4BlessingtonGAAClubTallaght_Stadium_3.png" /> Stage 4: Blessington GAA Club - Tallaght_Stadium'
            });
var format_Stage3RathvillyGAAClubBlessingtonGAAClub_4 = new ol.format.GeoJSON();
var features_Stage3RathvillyGAAClubBlessingtonGAAClub_4 = format_Stage3RathvillyGAAClubBlessingtonGAAClub_4.readFeatures(json_Stage3RathvillyGAAClubBlessingtonGAAClub_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stage3RathvillyGAAClubBlessingtonGAAClub_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stage3RathvillyGAAClubBlessingtonGAAClub_4.addFeatures(features_Stage3RathvillyGAAClubBlessingtonGAAClub_4);
var lyr_Stage3RathvillyGAAClubBlessingtonGAAClub_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stage3RathvillyGAAClubBlessingtonGAAClub_4, 
                style: style_Stage3RathvillyGAAClubBlessingtonGAAClub_4,
                popuplayertitle: 'Stage 3: Rathvilly GAA Club - Blessington GAA Club',
                interactive: false,
                title: '<img src="styles/legend/Stage3RathvillyGAAClubBlessingtonGAAClub_4.png" /> Stage 3: Rathvilly GAA Club - Blessington GAA Club'
            });
var format_Stage2MarshalstownGAAClubRathvillyGAAClub_5 = new ol.format.GeoJSON();
var features_Stage2MarshalstownGAAClubRathvillyGAAClub_5 = format_Stage2MarshalstownGAAClubRathvillyGAAClub_5.readFeatures(json_Stage2MarshalstownGAAClubRathvillyGAAClub_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stage2MarshalstownGAAClubRathvillyGAAClub_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stage2MarshalstownGAAClubRathvillyGAAClub_5.addFeatures(features_Stage2MarshalstownGAAClubRathvillyGAAClub_5);
var lyr_Stage2MarshalstownGAAClubRathvillyGAAClub_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stage2MarshalstownGAAClubRathvillyGAAClub_5, 
                style: style_Stage2MarshalstownGAAClubRathvillyGAAClub_5,
                popuplayertitle: 'Stage 2: Marshalstown GAA Club - Rathvilly GAA Club',
                interactive: false,
                title: '<img src="styles/legend/Stage2MarshalstownGAAClubRathvillyGAAClub_5.png" /> Stage 2: Marshalstown GAA Club - Rathvilly GAA Club'
            });
var format_Stage1StFintansMarshalstownGAAClub_6 = new ol.format.GeoJSON();
var features_Stage1StFintansMarshalstownGAAClub_6 = format_Stage1StFintansMarshalstownGAAClub_6.readFeatures(json_Stage1StFintansMarshalstownGAAClub_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stage1StFintansMarshalstownGAAClub_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stage1StFintansMarshalstownGAAClub_6.addFeatures(features_Stage1StFintansMarshalstownGAAClub_6);
var lyr_Stage1StFintansMarshalstownGAAClub_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stage1StFintansMarshalstownGAAClub_6, 
                style: style_Stage1StFintansMarshalstownGAAClub_6,
                popuplayertitle: 'Stage 1: St.Fintans - Marshalstown GAA Club',
                interactive: false,
                title: '<img src="styles/legend/Stage1StFintansMarshalstownGAAClub_6.png" /> Stage 1: St.Fintans - Marshalstown GAA Club'
            });
var format_Stewards_7 = new ol.format.GeoJSON();
var features_Stewards_7 = format_Stewards_7.readFeatures(json_Stewards_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stewards_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stewards_7.addFeatures(features_Stewards_7);
var lyr_Stewards_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stewards_7, 
                style: style_Stewards_7,
                popuplayertitle: 'Stewards',
                interactive: true,
                title: '<img src="styles/legend/Stewards_7.png" /> Stewards'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Route_Overview_1.setVisible(true);lyr_Stage5TallaghtStadiumOToolePark_2.setVisible(true);lyr_Stage4BlessingtonGAAClubTallaght_Stadium_3.setVisible(true);lyr_Stage3RathvillyGAAClubBlessingtonGAAClub_4.setVisible(true);lyr_Stage2MarshalstownGAAClubRathvillyGAAClub_5.setVisible(true);lyr_Stage1StFintansMarshalstownGAAClub_6.setVisible(true);lyr_Stewards_7.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Route_Overview_1,lyr_Stage5TallaghtStadiumOToolePark_2,lyr_Stage4BlessingtonGAAClubTallaght_Stadium_3,lyr_Stage3RathvillyGAAClubBlessingtonGAAClub_4,lyr_Stage2MarshalstownGAAClubRathvillyGAAClub_5,lyr_Stage1StFintansMarshalstownGAAClub_6,lyr_Stewards_7];
lyr_Route_Overview_1.set('fieldAliases', {'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Stage5TallaghtStadiumOToolePark_2.set('fieldAliases', {'id': 'id', });
lyr_Stage4BlessingtonGAAClubTallaght_Stadium_3.set('fieldAliases', {'id': 'id', });
lyr_Stage3RathvillyGAAClubBlessingtonGAAClub_4.set('fieldAliases', {'id': 'id', });
lyr_Stage2MarshalstownGAAClubRathvillyGAAClub_5.set('fieldAliases', {'id': 'id', });
lyr_Stage1StFintansMarshalstownGAAClub_6.set('fieldAliases', {'id': 'id', });
lyr_Stewards_7.set('fieldAliases', {'id': 'id', 'Location': 'Location', });
lyr_Route_Overview_1.set('fieldImages', {'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Stage5TallaghtStadiumOToolePark_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Stage4BlessingtonGAAClubTallaght_Stadium_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Stage3RathvillyGAAClubBlessingtonGAAClub_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Stage2MarshalstownGAAClubRathvillyGAAClub_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Stage1StFintansMarshalstownGAAClub_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Stewards_7.set('fieldImages', {'id': 'TextEdit', 'Location': 'TextEdit', });
lyr_Route_Overview_1.set('fieldLabels', {'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Stage5TallaghtStadiumOToolePark_2.set('fieldLabels', {'id': 'no label', });
lyr_Stage4BlessingtonGAAClubTallaght_Stadium_3.set('fieldLabels', {'id': 'no label', });
lyr_Stage3RathvillyGAAClubBlessingtonGAAClub_4.set('fieldLabels', {'id': 'no label', });
lyr_Stage2MarshalstownGAAClubRathvillyGAAClub_5.set('fieldLabels', {'id': 'no label', });
lyr_Stage1StFintansMarshalstownGAAClub_6.set('fieldLabels', {'id': 'no label', });
lyr_Stewards_7.set('fieldLabels', {'id': 'no label', 'Location': 'no label', });
lyr_Stewards_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});