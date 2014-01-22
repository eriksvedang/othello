if(!lt.util.load.provided_QMARK_('lt.plugins.othello.model')) {
goog.provide('lt.plugins.othello.model');
goog.require('cljs.core');

lt.plugins.othello.model.starting_moves = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,3], null),new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,4], null),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,3], null),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,4], null),new cljs.core.Keyword(null,"w","w",1013904361)], true, false);

lt.plugins.othello.model.make_model = (function make_model(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-player","current-player",2351550759),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"moves","moves",1117991476),lt.plugins.othello.model.starting_moves], null);
});

lt.plugins.othello.model.get_board = (function get_board(model){return new cljs.core.Keyword(null,"moves","moves",1117991476).cljs$core$IFn$_invoke$arity$1(model);
});

lt.plugins.othello.model.other_player = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"w","w",1013904361)], null);

lt.plugins.othello.model.dirs = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null)], null);

lt.plugins.othello.model.add_pos = (function add_pos(a,b){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,a,b));
});

lt.plugins.othello.model.inside_board_QMARK_ = (function inside_board_QMARK_(p__9810){var vec__9812 = p__9810;var x = cljs.core.nth.call(null,vec__9812,0,null);var y = cljs.core.nth.call(null,vec__9812,1,null);return (((0 <= x)) && ((x <= 7))) && (((0 <= y)) && ((y <= 7)));
});

lt.plugins.othello.model.get_strip = (function get_strip(model,pos,dir){var start = lt.plugins.othello.model.add_pos.call(null,pos,dir);return cljs.core.take_while.call(null,(function (p1__9813_SHARP_){var and__6729__auto__ = lt.plugins.othello.model.inside_board_QMARK_;if(cljs.core.truth_(and__6729__auto__))
{return cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),p1__9813_SHARP_], null));
} else
{return and__6729__auto__;
}
}),cljs.core.iterate.call(null,(function (p1__9814_SHARP_){return lt.plugins.othello.model.add_pos.call(null,p1__9814_SHARP_,dir);
}),start));
});

lt.plugins.othello.model.get_strips = (function get_strips(model,pos){return cljs.core.map.call(null,(function (p1__9815_SHARP_){return lt.plugins.othello.model.get_strip.call(null,model,pos,p1__9815_SHARP_);
}),lt.plugins.othello.model.dirs);
});

lt.plugins.othello.model.is_color_QMARK_ = (function is_color_QMARK_(model,color,pos){return cljs.core._EQ_.call(null,color,cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null)));
});

lt.plugins.othello.model.get_enemy_part_of_strip = (function get_enemy_part_of_strip(model,strip,enemy_color){if(cljs.core.every_QMARK_.call(null,(function (p1__9816_SHARP_){return lt.plugins.othello.model.is_color_QMARK_.call(null,model,enemy_color,p1__9816_SHARP_);
}),strip))
{return cljs.core.PersistentVector.EMPTY;
} else
{return cljs.core.take_while.call(null,(function (p1__9817_SHARP_){return lt.plugins.othello.model.is_color_QMARK_.call(null,model,enemy_color,p1__9817_SHARP_);
}),strip);
}
});

lt.plugins.othello.model.get_flipped_ones = (function get_flipped_ones(model,pos,player){var enemy = lt.plugins.othello.model.other_player.call(null,player);var strips = lt.plugins.othello.model.get_strips.call(null,model,pos);return cljs.core.mapcat.call(null,(function (p1__9818_SHARP_){return lt.plugins.othello.model.get_enemy_part_of_strip.call(null,model,p1__9818_SHARP_,enemy);
}),strips);
});

lt.plugins.othello.model.flip = (function flip(model,pos){return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null),lt.plugins.othello.model.other_player);
});

lt.plugins.othello.model.flips = (function flips(model,move_pos,player){return cljs.core.reduce.call(null,lt.plugins.othello.model.flip,model,lt.plugins.othello.model.get_flipped_ones.call(null,model,move_pos,player));
});

lt.plugins.othello.model.can_make_move_at_QMARK_ = (function can_make_move_at_QMARK_(model,pos){return cljs.core.not.call(null,cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null)));
});

lt.plugins.othello.model.place_move = (function place_move(model,pos){var current_player = new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(model);return cljs.core.assoc.call(null,lt.plugins.othello.model.flips.call(null,cljs.core.assoc_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null),current_player),pos,current_player),new cljs.core.Keyword(null,"current-player","current-player",2351550759),lt.plugins.othello.model.other_player.call(null,current_player));
});

lt.plugins.othello.model.try_move = (function try_move(model,p__9819){var vec__9821 = p__9819;var x = cljs.core.nth.call(null,vec__9821,0,null);var y = cljs.core.nth.call(null,vec__9821,1,null);var pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);if(lt.plugins.othello.model.can_make_move_at_QMARK_.call(null,model,pos))
{return lt.plugins.othello.model.place_move.call(null,model,pos);
} else
{return model;
}
});

lt.plugins.othello.model.get_board.call(null,lt.plugins.othello.model.try_move.call(null,lt.plugins.othello.model.make_model.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,3], null)));

}
if(!lt.util.load.provided_QMARK_('lt.plugins.othello')) {
goog.provide('lt.plugins.othello');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.othello.model');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.console');
goog.require('lt.plugins.othello.model');
goog.require('lt.objs.command');

lt.plugins.othello.m = cljs.core.atom.call(null,lt.plugins.othello.model.make_model.call(null));

cljs.core.deref.call(null,lt.plugins.othello.m);

lt.plugins.othello.coordinate__GT_id = (function coordinate__GT_id(p__9129){var vec__9131 = p__9129;var x = cljs.core.nth.call(null,vec__9131,0,null);var y = cljs.core.nth.call(null,vec__9131,1,null);return [cljs.core.str("coord_"),cljs.core.str(((10 * x) + y))].join('');
});

lt.plugins.othello.get_square = (function get_square(coordinate){return cljs.core.first.call(null,lt.util.dom.$$.call(null,[cljs.core.str("#"),cljs.core.str(lt.plugins.othello.coordinate__GT_id.call(null,coordinate))].join(''),document));
});

lt.plugins.othello.get_piece = (function get_piece(square){return cljs.core.first.call(null,lt.util.dom.$$.call(null,".piece",square));
});

lt.plugins.othello.square = (function square(this$,x,y){var e__8094__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.square","span.square",4765193139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.othello.coordinate__GT_id.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.piece","div.piece",2038398659),""], null)], null));var seq__9138_9212 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"make-move","make-move",2233847746),x,y);
})], null)));var chunk__9139_9213 = null;var count__9140_9214 = 0;var i__9141_9215 = 0;while(true){
if((i__9141_9215 < count__9140_9214))
{var vec__9142_9216 = cljs.core._nth.call(null,chunk__9139_9213,i__9141_9215);var ev__8095__auto___9217 = cljs.core.nth.call(null,vec__9142_9216,0,null);var func__8096__auto___9218 = cljs.core.nth.call(null,vec__9142_9216,1,null);lt.util.dom.on.call(null,e__8094__auto__,ev__8095__auto___9217,func__8096__auto___9218);
{
var G__9219 = seq__9138_9212;
var G__9220 = chunk__9139_9213;
var G__9221 = count__9140_9214;
var G__9222 = (i__9141_9215 + 1);
seq__9138_9212 = G__9219;
chunk__9139_9213 = G__9220;
count__9140_9214 = G__9221;
i__9141_9215 = G__9222;
continue;
}
} else
{var temp__4092__auto___9223 = cljs.core.seq.call(null,seq__9138_9212);if(temp__4092__auto___9223)
{var seq__9138_9224__$1 = temp__4092__auto___9223;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9138_9224__$1))
{var c__7470__auto___9225 = cljs.core.chunk_first.call(null,seq__9138_9224__$1);{
var G__9226 = cljs.core.chunk_rest.call(null,seq__9138_9224__$1);
var G__9227 = c__7470__auto___9225;
var G__9228 = cljs.core.count.call(null,c__7470__auto___9225);
var G__9229 = 0;
seq__9138_9212 = G__9226;
chunk__9139_9213 = G__9227;
count__9140_9214 = G__9228;
i__9141_9215 = G__9229;
continue;
}
} else
{var vec__9143_9230 = cljs.core.first.call(null,seq__9138_9224__$1);var ev__8095__auto___9231 = cljs.core.nth.call(null,vec__9143_9230,0,null);var func__8096__auto___9232 = cljs.core.nth.call(null,vec__9143_9230,1,null);lt.util.dom.on.call(null,e__8094__auto__,ev__8095__auto___9231,func__8096__auto___9232);
{
var G__9233 = cljs.core.next.call(null,seq__9138_9224__$1);
var G__9234 = null;
var G__9235 = 0;
var G__9236 = 0;
seq__9138_9212 = G__9233;
chunk__9139_9213 = G__9234;
count__9140_9214 = G__9235;
i__9141_9215 = G__9236;
continue;
}
}
} else
{}
}
break;
}
return e__8094__auto__;
});

lt.plugins.othello.game_panel = (function game_panel(this$){var e__8094__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",2038169049),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",2025644731),(function (){var iter__7439__auto__ = (function iter__9170(s__9171){return (new cljs.core.LazySeq(null,(function (){var s__9171__$1 = s__9171;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9171__$1);if(temp__4092__auto__)
{var s__9171__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9171__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__9171__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__9173 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__9172 = 0;while(true){
if((i__9172 < size__7438__auto__))
{var y = cljs.core._nth.call(null,c__7437__auto__,i__9172);cljs.core.chunk_append.call(null,b__9173,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7439__auto__ = ((function (i__9172,y,c__7437__auto__,size__7438__auto__,b__9173,s__9171__$2,temp__4092__auto__){
return (function iter__9182(s__9183){return (new cljs.core.LazySeq(null,((function (i__9172,y,c__7437__auto__,size__7438__auto__,b__9173,s__9171__$2,temp__4092__auto__){
return (function (){var s__9183__$1 = s__9183;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9183__$1);if(temp__4092__auto____$1)
{var s__9183__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9183__$2))
{var c__7437__auto____$1 = cljs.core.chunk_first.call(null,s__9183__$2);var size__7438__auto____$1 = cljs.core.count.call(null,c__7437__auto____$1);var b__9185 = cljs.core.chunk_buffer.call(null,size__7438__auto____$1);if((function (){var i__9184 = 0;while(true){
if((i__9184 < size__7438__auto____$1))
{var x = cljs.core._nth.call(null,c__7437__auto____$1,i__9184);cljs.core.chunk_append.call(null,b__9185,lt.plugins.othello.square.call(null,this$,x,y));
{
var G__9237 = (i__9184 + 1);
i__9184 = G__9237;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9185),iter__9182.call(null,cljs.core.chunk_rest.call(null,s__9183__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9185),null);
}
} else
{var x = cljs.core.first.call(null,s__9183__$2);return cljs.core.cons.call(null,lt.plugins.othello.square.call(null,this$,x,y),iter__9182.call(null,cljs.core.rest.call(null,s__9183__$2)));
}
} else
{return null;
}
break;
}
});})(i__9172,y,c__7437__auto__,size__7438__auto__,b__9173,s__9171__$2,temp__4092__auto__))
,null,null));
});})(i__9172,y,c__7437__auto__,size__7438__auto__,b__9173,s__9171__$2,temp__4092__auto__))
;return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null));
{
var G__9238 = (i__9172 + 1);
i__9172 = G__9238;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9173),iter__9170.call(null,cljs.core.chunk_rest.call(null,s__9171__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9173),null);
}
} else
{var y = cljs.core.first.call(null,s__9171__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7439__auto__ = ((function (y,s__9171__$2,temp__4092__auto__){
return (function iter__9186(s__9187){return (new cljs.core.LazySeq(null,((function (y,s__9171__$2,temp__4092__auto__){
return (function (){var s__9187__$1 = s__9187;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__9187__$1);if(temp__4092__auto____$1)
{var s__9187__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9187__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__9187__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__9189 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__9188 = 0;while(true){
if((i__9188 < size__7438__auto__))
{var x = cljs.core._nth.call(null,c__7437__auto__,i__9188);cljs.core.chunk_append.call(null,b__9189,lt.plugins.othello.square.call(null,this$,x,y));
{
var G__9239 = (i__9188 + 1);
i__9188 = G__9239;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9189),iter__9186.call(null,cljs.core.chunk_rest.call(null,s__9187__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9189),null);
}
} else
{var x = cljs.core.first.call(null,s__9187__$2);return cljs.core.cons.call(null,lt.plugins.othello.square.call(null,this$,x,y),iter__9186.call(null,cljs.core.rest.call(null,s__9187__$2)));
}
} else
{return null;
}
break;
}
});})(y,s__9171__$2,temp__4092__auto__))
,null,null));
});})(y,s__9171__$2,temp__4092__auto__))
;return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null),iter__9170.call(null,cljs.core.rest.call(null,s__9171__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null)], null));var seq__9190_9240 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9191_9241 = null;var count__9192_9242 = 0;var i__9193_9243 = 0;while(true){
if((i__9193_9243 < count__9192_9242))
{var vec__9194_9244 = cljs.core._nth.call(null,chunk__9191_9241,i__9193_9243);var ev__8095__auto___9245 = cljs.core.nth.call(null,vec__9194_9244,0,null);var func__8096__auto___9246 = cljs.core.nth.call(null,vec__9194_9244,1,null);lt.util.dom.on.call(null,e__8094__auto__,ev__8095__auto___9245,func__8096__auto___9246);
{
var G__9247 = seq__9190_9240;
var G__9248 = chunk__9191_9241;
var G__9249 = count__9192_9242;
var G__9250 = (i__9193_9243 + 1);
seq__9190_9240 = G__9247;
chunk__9191_9241 = G__9248;
count__9192_9242 = G__9249;
i__9193_9243 = G__9250;
continue;
}
} else
{var temp__4092__auto___9251 = cljs.core.seq.call(null,seq__9190_9240);if(temp__4092__auto___9251)
{var seq__9190_9252__$1 = temp__4092__auto___9251;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9190_9252__$1))
{var c__7470__auto___9253 = cljs.core.chunk_first.call(null,seq__9190_9252__$1);{
var G__9254 = cljs.core.chunk_rest.call(null,seq__9190_9252__$1);
var G__9255 = c__7470__auto___9253;
var G__9256 = cljs.core.count.call(null,c__7470__auto___9253);
var G__9257 = 0;
seq__9190_9240 = G__9254;
chunk__9191_9241 = G__9255;
count__9192_9242 = G__9256;
i__9193_9243 = G__9257;
continue;
}
} else
{var vec__9195_9258 = cljs.core.first.call(null,seq__9190_9252__$1);var ev__8095__auto___9259 = cljs.core.nth.call(null,vec__9195_9258,0,null);var func__8096__auto___9260 = cljs.core.nth.call(null,vec__9195_9258,1,null);lt.util.dom.on.call(null,e__8094__auto__,ev__8095__auto___9259,func__8096__auto___9260);
{
var G__9261 = cljs.core.next.call(null,seq__9190_9252__$1);
var G__9262 = null;
var G__9263 = 0;
var G__9264 = 0;
seq__9190_9240 = G__9261;
chunk__9191_9241 = G__9262;
count__9192_9242 = G__9263;
i__9193_9243 = G__9264;
continue;
}
}
} else
{}
}
break;
}
return e__8094__auto__;
});

lt.plugins.othello.move_type__GT_class = (function move_type__GT_class(piece){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.Keyword(null,"white","white",1127006107),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"black","black",1107723121)], null).call(null,piece,new cljs.core.Keyword(null,"none","none",1017291434));
});

lt.plugins.othello.set_piece = (function set_piece(coord,move_type){var square = lt.plugins.othello.get_square.call(null,coord);var piece = lt.plugins.othello.get_piece.call(null,square);var css_class = lt.plugins.othello.move_type__GT_class.call(null,move_type);return lt.util.dom.add_class.call(null,piece,css_class);
});

lt.plugins.othello.reset_piece = (function reset_piece(piece){lt.util.dom.remove_class.call(null,piece,new cljs.core.Keyword(null,"white","white",1127006107));
return lt.util.dom.remove_class.call(null,piece,new cljs.core.Keyword(null,"black","black",1107723121));
});

lt.plugins.othello.reset_pieces = (function reset_pieces(){return cljs.core.doall.call(null,cljs.core.map.call(null,lt.plugins.othello.reset_piece,lt.util.dom.$$.call(null,".piece",document)));
});

lt.plugins.othello.refresh_graphics = (function refresh_graphics(){lt.plugins.othello.reset_pieces.call(null);
return cljs.core.doall.call(null,(function (){var iter__7439__auto__ = (function iter__9204(s__9205){return (new cljs.core.LazySeq(null,(function (){var s__9205__$1 = s__9205;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9205__$1);if(temp__4092__auto__)
{var s__9205__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9205__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__9205__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__9207 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__9206 = 0;while(true){
if((i__9206 < size__7438__auto__))
{var vec__9210 = cljs.core._nth.call(null,c__7437__auto__,i__9206);var pos = cljs.core.nth.call(null,vec__9210,0,null);var color = cljs.core.nth.call(null,vec__9210,1,null);cljs.core.chunk_append.call(null,b__9207,lt.plugins.othello.set_piece.call(null,pos,color));
{
var G__9265 = (i__9206 + 1);
i__9206 = G__9265;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9207),iter__9204.call(null,cljs.core.chunk_rest.call(null,s__9205__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9207),null);
}
} else
{var vec__9211 = cljs.core.first.call(null,s__9205__$2);var pos = cljs.core.nth.call(null,vec__9211,0,null);var color = cljs.core.nth.call(null,vec__9211,1,null);return cljs.core.cons.call(null,lt.plugins.othello.set_piece.call(null,pos,color),iter__9204.call(null,cljs.core.rest.call(null,s__9205__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7439__auto__.call(null,lt.plugins.othello.model.get_board.call(null,cljs.core.deref.call(null,lt.plugins.othello.m)));
})());
});

lt.plugins.othello.__BEH__on_make_move = (function __BEH__on_make_move(this$,x,y){cljs.core.swap_BANG_.call(null,lt.plugins.othello.m,lt.plugins.othello.model.try_move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
lt.plugins.othello.refresh_graphics.call(null);
return lt.objs.console.log.call(null,[cljs.core.str("move at ["),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y),cljs.core.str("]")].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.othello","on-make-move","lt.plugins.othello/on-make-move",803390497),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.othello.__BEH__on_make_move,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"make-move","make-move",2233847746),null], null), null));

lt.plugins.othello.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___9266 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9266))
{var ts_9267 = temp__4092__auto___9266;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_9267))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_9267);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.othello","on-close-destroy","lt.plugins.othello/on-close-destroy",2871377944),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.othello.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.othello","othello.game","lt.plugins.othello/othello.game",2503319444),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"othello.game","othello.game",2871969445)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.othello","on-make-move","lt.plugins.othello/on-make-move",803390497),new cljs.core.Keyword("lt.plugins.othello","on-close-destroy","lt.plugins.othello/on-close-destroy",2871377944)], null),new cljs.core.Keyword(null,"name","name",1017277949),"othello",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.othello.game_panel.call(null,this$);
}));

lt.plugins.othello.game = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.othello","othello.game","lt.plugins.othello/othello.game",2503319444));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.othello","play-othello","lt.plugins.othello/play-othello",4145649235),new cljs.core.Keyword(null,"desc","desc",1016984067),"othello: New Game",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.othello.game);
cljs.core.reset_BANG_.call(null,lt.plugins.othello.m,lt.plugins.othello.model.make_model.call(null));
return lt.plugins.othello.refresh_graphics.call(null);
})], null));

}

//# sourceMappingURL=