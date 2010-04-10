(function(context){
 
context.Sets = {
 
'master': [

    'Control/BaseButton/initialize',
    
    'Control/FastMove/initialize',
    'Control/FastMove/beginMove',
    'Control/FastMove/stopMove',
    'Control/FastMove/tick',
    
    'Control/LoadProgress/initialize', //todo
    'Control/LoadProgress/tick', //todo
    
    'Control/PlayPause/initialize',
    'Control/PlayPause/toggleState',

    'Control/PlayProgress/initialize',
    'Control/PlayProgress/tick',
    'Control/PlayProgress/change',
    
    'Subtitle/Item/initialize',
    
    'Subtitle/Loader/initialize', // todo
    'Subtitle/Loader/load', // todo
    'Subtitle/Loader/run', // todo
    
    'Subtitle/Parser/Base/initialize',
    'Subtitle/Parser/Base/hash',
    'Subtitle/Parser/SubRip/parse',
    'Subtitle/Parser/SubViewer/parse', // todo
    
    'Subtitle/Player/initialize',
    'Subtitle/Player/tick',
    
    'Subtitle/Tree/initialize',
    'Subtitle/Tree/buildChildren',
    'Subtitle/Tree/getChildren',
    'Subtitle/Tree/doesSubtitleFit',
    'Subtitle/Tree/addSub',
    'Subtitle/Tree/getSubs'

],

 
};
 
})(this.exports || this);