var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_KlasifikasiDASSMR_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Klasifikasi DAS SMR<br />\
    <img src="styles/legend/KlasifikasiDASSMR_1_0.png" /> Badan Air<br />\
    <img src="styles/legend/KlasifikasiDASSMR_1_1.png" /> Bangunan<br />\
    <img src="styles/legend/KlasifikasiDASSMR_1_2.png" /> Hutan<br />\
    <img src="styles/legend/KlasifikasiDASSMR_1_3.png" /> Perkebunan<br />\
    <img src="styles/legend/KlasifikasiDASSMR_1_4.png" /> Lahan Terbuka<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KlasifikasiDASSMR_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12959539.048372, -144688.089140, 13018177.345377, -88818.078281]
        })
    });
var format_DAS_SMR_2 = new ol.format.GeoJSON();
var features_DAS_SMR_2 = format_DAS_SMR_2.readFeatures(json_DAS_SMR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAS_SMR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAS_SMR_2.addFeatures(features_DAS_SMR_2);
var lyr_DAS_SMR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DAS_SMR_2, 
                style: style_DAS_SMR_2,
                popuplayertitle: 'DAS_SMR',
                interactive: true,
                title: '<img src="styles/legend/DAS_SMR_2.png" /> DAS_SMR'
            });
var format_Delineasi_BWP_IKN_50K_3 = new ol.format.GeoJSON();
var features_Delineasi_BWP_IKN_50K_3 = format_Delineasi_BWP_IKN_50K_3.readFeatures(json_Delineasi_BWP_IKN_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delineasi_BWP_IKN_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delineasi_BWP_IKN_50K_3.addFeatures(features_Delineasi_BWP_IKN_50K_3);
var lyr_Delineasi_BWP_IKN_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Delineasi_BWP_IKN_50K_3, 
                style: style_Delineasi_BWP_IKN_50K_3,
                popuplayertitle: 'Delineasi_BWP_IKN_50K',
                interactive: true,
    title: 'Delineasi_BWP_IKN_50K<br />\
    <img src="styles/legend/Delineasi_BWP_IKN_50K_3_0.png" /> Pusat Ekonomi<br />\
    <img src="styles/legend/Delineasi_BWP_IKN_50K_3_1.png" /> Pusat Hiburan<br />\
    <img src="styles/legend/Delineasi_BWP_IKN_50K_3_2.png" /> Pusat Inovasi dan Riset<br />\
    <img src="styles/legend/Delineasi_BWP_IKN_50K_3_3.png" /> Pusat Kesehatan<br />\
    <img src="styles/legend/Delineasi_BWP_IKN_50K_3_4.png" /> Pusat Pemerintahan<br />\
    <img src="styles/legend/Delineasi_BWP_IKN_50K_3_5.png" /> Pusat Pendidikan<br />' });

lyr_ESRITopo_0.setVisible(true);lyr_KlasifikasiDASSMR_1.setVisible(true);lyr_DAS_SMR_2.setVisible(true);lyr_Delineasi_BWP_IKN_50K_3.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_KlasifikasiDASSMR_1,lyr_DAS_SMR_2,lyr_Delineasi_BWP_IKN_50K_3];
lyr_DAS_SMR_2.set('fieldAliases', {'Id': 'Id', 'kode': 'kode', 'Nama_DAS': 'Nama_DAS', 'Luas_Area': 'Luas_Area', });
lyr_Delineasi_BWP_IKN_50K_3.set('fieldAliases', {'BWP': 'BWP', 'ROMAWI': 'ROMAWI', 'KETERANGAN': 'KETERANGAN', 'KETERANG_1': 'KETERANG_1', 'LUAS_HA': 'LUAS_HA', });
lyr_DAS_SMR_2.set('fieldImages', {'Id': 'Range', 'kode': 'TextEdit', 'Nama_DAS': 'TextEdit', 'Luas_Area': 'TextEdit', });
lyr_Delineasi_BWP_IKN_50K_3.set('fieldImages', {'BWP': 'TextEdit', 'ROMAWI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'KETERANG_1': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_DAS_SMR_2.set('fieldLabels', {'Id': 'no label', 'kode': 'no label', 'Nama_DAS': 'no label', 'Luas_Area': 'no label', });
lyr_Delineasi_BWP_IKN_50K_3.set('fieldLabels', {'BWP': 'no label', 'ROMAWI': 'no label', 'KETERANGAN': 'no label', 'KETERANG_1': 'no label', 'LUAS_HA': 'no label', });
lyr_Delineasi_BWP_IKN_50K_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});