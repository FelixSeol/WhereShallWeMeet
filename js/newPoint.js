function newPoint(map,markerList){
    naver.maps.Event.addListener(map, 'click', function(e) {
        var marker = new naver.maps.Marker({
            position: e.coord,
            map: map,
            clickable: true,
            name: markerList.length,
            visible : true
        });
        naver.maps.Event.addListener(marker, "click", function(e) {
            delPointByMarker(marker);
        });
        markerList.push(marker);
        appendBymarker(markerList);
        
    });
}
function delPoint(markerList){
    var i;
    $('.nav-item').click(function(){
        i=$(this).attr('name');
        markerList[i].setMap(null);
        markerList[i].visible=false;
        $(this).remove();
        console.log(eMarkerList(markerList));
    });
}
function appendBymarker(markerList){
    let text = `<li name ='${markerList.length-1}' class='nav-item'><a class='nav-link' onclick="delPoint(markerList)"><span data-feather='file-text'></span>새 출발지</a></li>`;
    $('#addedPlace').append(text);
}
function delPointByMarker(marker){
    marker.visible=false;
    $(document.getElementsByName(marker.name)).remove();
    console.log(eMarkerList(markerList));
}

function eMarkerList(markerList){
    var new_list=[];
    for(var i=0;i<markerList.length;i++){
        if(markerList[i].visible){
            new_list.push(markerList[i]);
        }
    }
   return new_list;
}