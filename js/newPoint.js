function newPoint(map,markerList,eMarkerList){
    naver.maps.Event.addListener(map, 'click', function(e) {
        var marker = new naver.maps.Marker({
            position: e.coord,
            map: map,
            clickable: true,
            name: markerList.length
        });

        naver.maps.Event.addListener(marker, "click", function(e) {
            delPointByMarker(marker,eMarkerList);
        });

        markerList.push(marker);
        eMarkerList.push(marker);
        appendBymarker(markerList,eMarkerList);
    });
}

function delPoint(markerList,eMarkerList){
    var i;
    $('.nav-item').click(function(){
        i=$(this).attr('name');
        markerList[i].setMap(null);
        delEmarker(markerList[i],eMarkerList);
        $(this).remove();
    });
}

function appendBymarker(markerList,eMarkerList){
    let text = `<li name ='${markerList.length-1}' class='nav-item'><a class='nav-link' onclick="delPoint(markerList,eMarkerList)"><span data-feather='file-text'></span>새 출발지</a></li>`;
    $('#addedPlace').append(text);
}
function delPointByMarker(marker,eMarkerList){
    marker.setMap(null);
    delEmarker(marker,eMarkerList);
    $(document.getElementsByName(marker.name)).remove();

}

function delEmarker(marker ,emarkerList){
    for(var i=0;i<eMarkerList.length;i++){
        if(eMarkerList[i] == marker){
            eMarkerList.splice(i,1);
            console.log(eMarkerList.length);
        }
    }
}