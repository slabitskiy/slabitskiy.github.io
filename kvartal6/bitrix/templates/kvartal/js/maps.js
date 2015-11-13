var marker; var marker2; var marker3;
var myLatLng;  var myLatLng2;  var myLatLng3;
var map;

                function initialize() {
            var mapCanvas = document.getElementById('map');
             myLatLng = {
                lat: 59.902256,
                lng: 30.337591
            };
  myLatLng2 = {
                lat: 59.89407,
                lng: 30.438112
            };
  myLatLng3 = {
                lat: 59.969025,
                lng: 30.363726
            };
            var mapOptions = {
                center: new google.maps.LatLng(59.934763, 30.372469),
                zoom: 11, mapTypeControl:true,  zoomControl: true,
               mapTypeId: google.maps.MapTypeId.ROADMAP,
 scrollwheel: false

            }
            map = new google.maps.Map(mapCanvas, mapOptions);

             marker = new google.maps.Marker({
                position: myLatLng,
                map: map, visible:true,
                title: ' Московский район ул. Новорыбинская д.19-12',
	 link:'/',
                icon: '/bitrix/templates/kvartal/images/on_map_big.png'
            });
  marker2 = new google.maps.Marker({
                position: myLatLng2,
                map: map, visible:true,
                title: ' Невский р-н, пр. Обуховской Обороны д. 86',
	 link:'/',
                icon: '/bitrix/templates/kvartal/images/on_map_big.png'
            });
  marker3 = new google.maps.Marker({
                position: myLatLng3,
                 visible:true,
                title: 'Калининский р-н, ул. Арсенальная, д.78',
	 link:'/',
                icon: '/bitrix/templates/kvartal/images/on_map_big.png'
            });
marker3.setMap(map);



marker.addListener('click', function() { location="/object/osk_kvartal/";  });
marker2.addListener('click', function() {location="/object/dc_kvartal/"  });
marker3.addListener('click', function() { location="/object/cbit_kvartal/" });



        }




      initialize();