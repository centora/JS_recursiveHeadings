(function(){
    function recursiveHeadings (data, weight) {
        var fragment = document.createDocumentFragment();

        var heading;

        for( var i = 0; i < data.length; i ++ ){
            
            heading = document.createElement("h" + weight);

            if( (data[i].constructor.toString().indexOf('Array') > -1) ){
                fragment.appendChild(recursiveHeadings (data[i], (weight+1)));
                continue;
            }else{
                heading.innerHTML = data[i];
            }
            fragment.appendChild(heading);
        }
        return fragment;
    }

    document.getElementById('headings').appendChild( recursiveHeadings ([1,2,[3,4,[6,7,8],9],10,11], 1) );

})();