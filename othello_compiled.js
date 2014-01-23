if(!lt.util.load.provided_QMARK_('lt.plugins.othello.model')) {
goog.provide('lt.plugins.othello.model');
goog.require('cljs.core');

lt.plugins.othello.model.starting_moves = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,3], null),new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,4], null),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,3], null),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,4], null),new cljs.core.Keyword(null,"w","w",1013904361)], true, false);

lt.plugins.othello.model.get_board = (function get_board(model){return new cljs.core.Keyword(null,"moves","moves",1117991476).cljs$core$IFn$_invoke$arity$1(model);
});

lt.plugins.othello.model.other_player = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"w","w",1013904361)], null);

lt.plugins.othello.model.dirs = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null)], null);

lt.plugins.othello.model.add_pos = (function add_pos(a,b){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,a,b));
});

lt.plugins.othello.model.inside_board_QMARK_ = (function inside_board_QMARK_(p__11831){var vec__11833 = p__11831;var x = cljs.core.nth.call(null,vec__11833,0,null);var y = cljs.core.nth.call(null,vec__11833,1,null);return (((0 <= x)) && ((x <= 7))) && (((0 <= y)) && ((y <= 7)));
});

lt.plugins.othello.model.get_strip = (function get_strip(model,pos,dir){var start = lt.plugins.othello.model.add_pos.call(null,pos,dir);return cljs.core.take_while.call(null,(function (p1__11834_SHARP_){var and__6729__auto__ = lt.plugins.othello.model.inside_board_QMARK_;if(cljs.core.truth_(and__6729__auto__))
{return cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),p1__11834_SHARP_], null));
} else
{return and__6729__auto__;
}
}),cljs.core.iterate.call(null,(function (p1__11835_SHARP_){return lt.plugins.othello.model.add_pos.call(null,p1__11835_SHARP_,dir);
}),start));
});

lt.plugins.othello.model.get_strips = (function get_strips(model,pos){return cljs.core.map.call(null,(function (p1__11836_SHARP_){return lt.plugins.othello.model.get_strip.call(null,model,pos,p1__11836_SHARP_);
}),lt.plugins.othello.model.dirs);
});

lt.plugins.othello.model.is_color_QMARK_ = (function is_color_QMARK_(model,color,pos){return cljs.core._EQ_.call(null,color,cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null)));
});

lt.plugins.othello.model.get_enemy_part_of_strip = (function get_enemy_part_of_strip(model,strip,enemy_color){if(cljs.core.every_QMARK_.call(null,(function (p1__11837_SHARP_){return lt.plugins.othello.model.is_color_QMARK_.call(null,model,enemy_color,p1__11837_SHARP_);
}),strip))
{return cljs.core.PersistentVector.EMPTY;
} else
{return cljs.core.take_while.call(null,(function (p1__11838_SHARP_){return lt.plugins.othello.model.is_color_QMARK_.call(null,model,enemy_color,p1__11838_SHARP_);
}),strip);
}
});

lt.plugins.othello.model.get_flipped_ones = (function get_flipped_ones(model,pos,player){var enemy = lt.plugins.othello.model.other_player.call(null,player);var strips = lt.plugins.othello.model.get_strips.call(null,model,pos);return cljs.core.mapcat.call(null,(function (p1__11839_SHARP_){return lt.plugins.othello.model.get_enemy_part_of_strip.call(null,model,p1__11839_SHARP_,enemy);
}),strips);
});

lt.plugins.othello.model.flip = (function flip(model,pos){return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null),lt.plugins.othello.model.other_player);
});

lt.plugins.othello.model.flips = (function flips(model,move_pos,player){return cljs.core.reduce.call(null,lt.plugins.othello.model.flip,model,lt.plugins.othello.model.get_flipped_ones.call(null,model,move_pos,player));
});

lt.plugins.othello.model.pos_empty_QMARK_ = (function pos_empty_QMARK_(model,pos){return cljs.core.not.call(null,cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null)));
});

lt.plugins.othello.model.will_flip_something_QMARK_ = (function will_flip_something_QMARK_(model,pos,player){return !(cljs.core.empty_QMARK_.call(null,lt.plugins.othello.model.get_flipped_ones.call(null,model,pos,player)));
});

lt.plugins.othello.model.can_make_move_at_QMARK_ = (function can_make_move_at_QMARK_(model,pos){return (lt.plugins.othello.model.pos_empty_QMARK_.call(null,model,pos)) && (lt.plugins.othello.model.will_flip_something_QMARK_.call(null,model,pos,new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(model)));
});

lt.plugins.othello.model.get_possible_moves = (function get_possible_moves(model){return cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__7439__auto__ = (function iter__11846(s__11847){return (new cljs.core.LazySeq(null,(function (){var s__11847__$1 = s__11847;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11847__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__7435__auto__ = ((function (s__11847__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__11848(s__11849){return (new cljs.core.LazySeq(null,((function (s__11847__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__11849__$1 = s__11849;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__11849__$1);if(temp__4092__auto____$1)
{var s__11849__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11849__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__11849__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__11851 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__11850 = 0;while(true){
if((i__11850 < size__7438__auto__))
{var y = cljs.core._nth.call(null,c__7437__auto__,i__11850);cljs.core.chunk_append.call(null,b__11851,((lt.plugins.othello.model.can_make_move_at_QMARK_.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null));
{
var G__11855 = (i__11850 + 1);
i__11850 = G__11855;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11851),iter__11848.call(null,cljs.core.chunk_rest.call(null,s__11849__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11851),null);
}
} else
{var y = cljs.core.first.call(null,s__11849__$2);return cljs.core.cons.call(null,((lt.plugins.othello.model.can_make_move_at_QMARK_.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null),iter__11848.call(null,cljs.core.rest.call(null,s__11849__$2)));
}
} else
{return null;
}
break;
}
});})(s__11847__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__11847__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__7436__auto__ = cljs.core.seq.call(null,iterys__7435__auto__.call(null,cljs.core.range.call(null,8)));if(fs__7436__auto__)
{return cljs.core.concat.call(null,fs__7436__auto__,iter__11846.call(null,cljs.core.rest.call(null,s__11847__$1)));
} else
{{
var G__11856 = cljs.core.rest.call(null,s__11847__$1);
s__11847__$1 = G__11856;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})());
});

lt.plugins.othello.model.place_move = (function place_move(model,pos){var current_player = new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(model);return cljs.core.assoc.call(null,lt.plugins.othello.model.flips.call(null,cljs.core.assoc_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null),current_player),pos,current_player),new cljs.core.Keyword(null,"current-player","current-player",2351550759),lt.plugins.othello.model.other_player.call(null,current_player));
});

lt.plugins.othello.model.try_move = (function try_move(model,p__11852){var vec__11854 = p__11852;var x = cljs.core.nth.call(null,vec__11854,0,null);var y = cljs.core.nth.call(null,vec__11854,1,null);var pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);if(lt.plugins.othello.model.can_make_move_at_QMARK_.call(null,model,pos))
{return lt.plugins.othello.model.place_move.call(null,model,pos);
} else
{return model;
}
});

lt.plugins.othello.model.make_model_with_ai = (function make_model_with_ai(ai){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-player","current-player",2351550759),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"moves","moves",1117991476),lt.plugins.othello.model.starting_moves,new cljs.core.Keyword(null,"ai","ai",1013907354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",1013904361),ai,new cljs.core.Keyword(null,"b","b",1013904340),null], null)], null);
});

lt.plugins.othello.model.simple_ai = (function simple_ai(model){var moves = lt.plugins.othello.model.get_possible_moves.call(null,model);if(cljs.core.seq.call(null,moves))
{return cljs.core.rand_nth.call(null,moves);
} else
{return null;
}
});

lt.plugins.othello.model.make_model = (function make_model(){return lt.plugins.othello.model.make_model_with_ai.call(null,lt.plugins.othello.model.simple_ai);
});

lt.plugins.othello.model.ai_turn = (function ai_turn(model){var player = new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(model);var ai = cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",1013907354),player], null));if(cljs.core.truth_(ai))
{var temp__4090__auto__ = ai.call(null,model);if(cljs.core.truth_(temp__4090__auto__))
{var move = temp__4090__auto__;return lt.plugins.othello.model.place_move.call(null,model,move);
} else
{return model;
}
} else
{return model;
}
});

lt.plugins.othello.model.get_board.call(null,lt.plugins.othello.model.ai_turn.call(null,lt.plugins.othello.model.try_move.call(null,lt.plugins.othello.model.make_model.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,3], null))));

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

lt.plugins.othello.coordinate__GT_id = (function coordinate__GT_id(p__11509){var vec__11511 = p__11509;var x = cljs.core.nth.call(null,vec__11511,0,null);var y = cljs.core.nth.call(null,vec__11511,1,null);return [cljs.core.str("coord_"),cljs.core.str(((10 * x) + y))].join('');
});

lt.plugins.othello.get_square = (function get_square(coordinate){return cljs.core.first.call(null,lt.util.dom.$$.call(null,[cljs.core.str("#"),cljs.core.str(lt.plugins.othello.coordinate__GT_id.call(null,coordinate))].join(''),document));
});

lt.plugins.othello.get_piece = (function get_piece(square){return cljs.core.first.call(null,lt.util.dom.$$.call(null,".piece",square));
});

lt.plugins.othello.square = (function square(this$,x,y){var e__8081__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.square","span.square",4765193139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.othello.coordinate__GT_id.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.piece","div.piece",2038398659),""], null)], null));var seq__11518_11600 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"make-move","make-move",2233847746),x,y);
})], null)));var chunk__11519_11601 = null;var count__11520_11602 = 0;var i__11521_11603 = 0;while(true){
if((i__11521_11603 < count__11520_11602))
{var vec__11522_11604 = cljs.core._nth.call(null,chunk__11519_11601,i__11521_11603);var ev__8082__auto___11605 = cljs.core.nth.call(null,vec__11522_11604,0,null);var func__8083__auto___11606 = cljs.core.nth.call(null,vec__11522_11604,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___11605,func__8083__auto___11606);
{
var G__11607 = seq__11518_11600;
var G__11608 = chunk__11519_11601;
var G__11609 = count__11520_11602;
var G__11610 = (i__11521_11603 + 1);
seq__11518_11600 = G__11607;
chunk__11519_11601 = G__11608;
count__11520_11602 = G__11609;
i__11521_11603 = G__11610;
continue;
}
} else
{var temp__4092__auto___11611 = cljs.core.seq.call(null,seq__11518_11600);if(temp__4092__auto___11611)
{var seq__11518_11612__$1 = temp__4092__auto___11611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11518_11612__$1))
{var c__7470__auto___11613 = cljs.core.chunk_first.call(null,seq__11518_11612__$1);{
var G__11614 = cljs.core.chunk_rest.call(null,seq__11518_11612__$1);
var G__11615 = c__7470__auto___11613;
var G__11616 = cljs.core.count.call(null,c__7470__auto___11613);
var G__11617 = 0;
seq__11518_11600 = G__11614;
chunk__11519_11601 = G__11615;
count__11520_11602 = G__11616;
i__11521_11603 = G__11617;
continue;
}
} else
{var vec__11523_11618 = cljs.core.first.call(null,seq__11518_11612__$1);var ev__8082__auto___11619 = cljs.core.nth.call(null,vec__11523_11618,0,null);var func__8083__auto___11620 = cljs.core.nth.call(null,vec__11523_11618,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___11619,func__8083__auto___11620);
{
var G__11621 = cljs.core.next.call(null,seq__11518_11612__$1);
var G__11622 = null;
var G__11623 = 0;
var G__11624 = 0;
seq__11518_11600 = G__11621;
chunk__11519_11601 = G__11622;
count__11520_11602 = G__11623;
i__11521_11603 = G__11624;
continue;
}
}
} else
{}
}
break;
}
return e__8081__auto__;
});

lt.plugins.othello.game_panel = (function game_panel(this$){var e__8081__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",2038169049),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",2025644731),(function (){var iter__7439__auto__ = (function iter__11550(s__11551){return (new cljs.core.LazySeq(null,(function (){var s__11551__$1 = s__11551;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11551__$1);if(temp__4092__auto__)
{var s__11551__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11551__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__11551__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__11553 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__11552 = 0;while(true){
if((i__11552 < size__7438__auto__))
{var y = cljs.core._nth.call(null,c__7437__auto__,i__11552);cljs.core.chunk_append.call(null,b__11553,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7439__auto__ = ((function (i__11552,y,c__7437__auto__,size__7438__auto__,b__11553,s__11551__$2,temp__4092__auto__){
return (function iter__11562(s__11563){return (new cljs.core.LazySeq(null,((function (i__11552,y,c__7437__auto__,size__7438__auto__,b__11553,s__11551__$2,temp__4092__auto__){
return (function (){var s__11563__$1 = s__11563;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__11563__$1);if(temp__4092__auto____$1)
{var s__11563__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11563__$2))
{var c__7437__auto____$1 = cljs.core.chunk_first.call(null,s__11563__$2);var size__7438__auto____$1 = cljs.core.count.call(null,c__7437__auto____$1);var b__11565 = cljs.core.chunk_buffer.call(null,size__7438__auto____$1);if((function (){var i__11564 = 0;while(true){
if((i__11564 < size__7438__auto____$1))
{var x = cljs.core._nth.call(null,c__7437__auto____$1,i__11564);cljs.core.chunk_append.call(null,b__11565,lt.plugins.othello.square.call(null,this$,x,y));
{
var G__11625 = (i__11564 + 1);
i__11564 = G__11625;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11565),iter__11562.call(null,cljs.core.chunk_rest.call(null,s__11563__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11565),null);
}
} else
{var x = cljs.core.first.call(null,s__11563__$2);return cljs.core.cons.call(null,lt.plugins.othello.square.call(null,this$,x,y),iter__11562.call(null,cljs.core.rest.call(null,s__11563__$2)));
}
} else
{return null;
}
break;
}
});})(i__11552,y,c__7437__auto__,size__7438__auto__,b__11553,s__11551__$2,temp__4092__auto__))
,null,null));
});})(i__11552,y,c__7437__auto__,size__7438__auto__,b__11553,s__11551__$2,temp__4092__auto__))
;return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null));
{
var G__11626 = (i__11552 + 1);
i__11552 = G__11626;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11553),iter__11550.call(null,cljs.core.chunk_rest.call(null,s__11551__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11553),null);
}
} else
{var y = cljs.core.first.call(null,s__11551__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7439__auto__ = ((function (y,s__11551__$2,temp__4092__auto__){
return (function iter__11566(s__11567){return (new cljs.core.LazySeq(null,((function (y,s__11551__$2,temp__4092__auto__){
return (function (){var s__11567__$1 = s__11567;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__11567__$1);if(temp__4092__auto____$1)
{var s__11567__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11567__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__11567__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__11569 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__11568 = 0;while(true){
if((i__11568 < size__7438__auto__))
{var x = cljs.core._nth.call(null,c__7437__auto__,i__11568);cljs.core.chunk_append.call(null,b__11569,lt.plugins.othello.square.call(null,this$,x,y));
{
var G__11627 = (i__11568 + 1);
i__11568 = G__11627;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11569),iter__11566.call(null,cljs.core.chunk_rest.call(null,s__11567__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11569),null);
}
} else
{var x = cljs.core.first.call(null,s__11567__$2);return cljs.core.cons.call(null,lt.plugins.othello.square.call(null,this$,x,y),iter__11566.call(null,cljs.core.rest.call(null,s__11567__$2)));
}
} else
{return null;
}
break;
}
});})(y,s__11551__$2,temp__4092__auto__))
,null,null));
});})(y,s__11551__$2,temp__4092__auto__))
;return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null),iter__11550.call(null,cljs.core.rest.call(null,s__11551__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null)], null));var seq__11570_11628 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11571_11629 = null;var count__11572_11630 = 0;var i__11573_11631 = 0;while(true){
if((i__11573_11631 < count__11572_11630))
{var vec__11574_11632 = cljs.core._nth.call(null,chunk__11571_11629,i__11573_11631);var ev__8082__auto___11633 = cljs.core.nth.call(null,vec__11574_11632,0,null);var func__8083__auto___11634 = cljs.core.nth.call(null,vec__11574_11632,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___11633,func__8083__auto___11634);
{
var G__11635 = seq__11570_11628;
var G__11636 = chunk__11571_11629;
var G__11637 = count__11572_11630;
var G__11638 = (i__11573_11631 + 1);
seq__11570_11628 = G__11635;
chunk__11571_11629 = G__11636;
count__11572_11630 = G__11637;
i__11573_11631 = G__11638;
continue;
}
} else
{var temp__4092__auto___11639 = cljs.core.seq.call(null,seq__11570_11628);if(temp__4092__auto___11639)
{var seq__11570_11640__$1 = temp__4092__auto___11639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11570_11640__$1))
{var c__7470__auto___11641 = cljs.core.chunk_first.call(null,seq__11570_11640__$1);{
var G__11642 = cljs.core.chunk_rest.call(null,seq__11570_11640__$1);
var G__11643 = c__7470__auto___11641;
var G__11644 = cljs.core.count.call(null,c__7470__auto___11641);
var G__11645 = 0;
seq__11570_11628 = G__11642;
chunk__11571_11629 = G__11643;
count__11572_11630 = G__11644;
i__11573_11631 = G__11645;
continue;
}
} else
{var vec__11575_11646 = cljs.core.first.call(null,seq__11570_11640__$1);var ev__8082__auto___11647 = cljs.core.nth.call(null,vec__11575_11646,0,null);var func__8083__auto___11648 = cljs.core.nth.call(null,vec__11575_11646,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___11647,func__8083__auto___11648);
{
var G__11649 = cljs.core.next.call(null,seq__11570_11640__$1);
var G__11650 = null;
var G__11651 = 0;
var G__11652 = 0;
seq__11570_11628 = G__11649;
chunk__11571_11629 = G__11650;
count__11572_11630 = G__11651;
i__11573_11631 = G__11652;
continue;
}
}
} else
{}
}
break;
}
return e__8081__auto__;
});

lt.plugins.othello.move_type__GT_class = (function move_type__GT_class(piece){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.Keyword(null,"white","white",1127006107),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"black","black",1107723121),new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.Keyword(null,"option","option",4298734567)], null).call(null,piece,new cljs.core.Keyword(null,"none","none",1017291434));
});

lt.plugins.othello.set_piece = (function set_piece(coord,move_type){var square = lt.plugins.othello.get_square.call(null,coord);var piece = lt.plugins.othello.get_piece.call(null,square);var css_class = lt.plugins.othello.move_type__GT_class.call(null,move_type);return lt.util.dom.add_class.call(null,piece,css_class);
});

lt.plugins.othello.reset_piece = (function reset_piece(piece){lt.util.dom.remove_class.call(null,piece,new cljs.core.Keyword(null,"white","white",1127006107));
lt.util.dom.remove_class.call(null,piece,new cljs.core.Keyword(null,"black","black",1107723121));
return lt.util.dom.remove_class.call(null,piece,new cljs.core.Keyword(null,"option","option",4298734567));
});

lt.plugins.othello.reset_pieces = (function reset_pieces(){return cljs.core.doall.call(null,cljs.core.map.call(null,lt.plugins.othello.reset_piece,lt.util.dom.$$.call(null,".piece",document)));
});

lt.plugins.othello.refresh_graphics = (function refresh_graphics(){lt.plugins.othello.reset_pieces.call(null);
cljs.core.doall.call(null,(function (){var iter__7439__auto__ = (function iter__11588(s__11589){return (new cljs.core.LazySeq(null,(function (){var s__11589__$1 = s__11589;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11589__$1);if(temp__4092__auto__)
{var s__11589__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11589__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__11589__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__11591 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__11590 = 0;while(true){
if((i__11590 < size__7438__auto__))
{var vec__11594 = cljs.core._nth.call(null,c__7437__auto__,i__11590);var pos = cljs.core.nth.call(null,vec__11594,0,null);var color = cljs.core.nth.call(null,vec__11594,1,null);cljs.core.chunk_append.call(null,b__11591,lt.plugins.othello.set_piece.call(null,pos,color));
{
var G__11653 = (i__11590 + 1);
i__11590 = G__11653;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11591),iter__11588.call(null,cljs.core.chunk_rest.call(null,s__11589__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11591),null);
}
} else
{var vec__11595 = cljs.core.first.call(null,s__11589__$2);var pos = cljs.core.nth.call(null,vec__11595,0,null);var color = cljs.core.nth.call(null,vec__11595,1,null);return cljs.core.cons.call(null,lt.plugins.othello.set_piece.call(null,pos,color),iter__11588.call(null,cljs.core.rest.call(null,s__11589__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7439__auto__.call(null,lt.plugins.othello.model.get_board.call(null,cljs.core.deref.call(null,lt.plugins.othello.m)));
})());
return cljs.core.doall.call(null,(function (){var iter__7439__auto__ = (function iter__11596(s__11597){return (new cljs.core.LazySeq(null,(function (){var s__11597__$1 = s__11597;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11597__$1);if(temp__4092__auto__)
{var s__11597__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11597__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__11597__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__11599 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__11598 = 0;while(true){
if((i__11598 < size__7438__auto__))
{var pos = cljs.core._nth.call(null,c__7437__auto__,i__11598);cljs.core.chunk_append.call(null,b__11599,lt.plugins.othello.set_piece.call(null,pos,new cljs.core.Keyword(null,"option","option",4298734567)));
{
var G__11654 = (i__11598 + 1);
i__11598 = G__11654;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11599),iter__11596.call(null,cljs.core.chunk_rest.call(null,s__11597__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11599),null);
}
} else
{var pos = cljs.core.first.call(null,s__11597__$2);return cljs.core.cons.call(null,lt.plugins.othello.set_piece.call(null,pos,new cljs.core.Keyword(null,"option","option",4298734567)),iter__11596.call(null,cljs.core.rest.call(null,s__11597__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7439__auto__.call(null,lt.plugins.othello.model.get_possible_moves.call(null,cljs.core.deref.call(null,lt.plugins.othello.m)));
})());
});

lt.plugins.othello.__BEH__on_make_move = (function __BEH__on_make_move(this$,x,y){cljs.core.swap_BANG_.call(null,lt.plugins.othello.m,lt.plugins.othello.model.try_move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
cljs.core.swap_BANG_.call(null,lt.plugins.othello.m,lt.plugins.othello.model.ai_turn);
lt.plugins.othello.refresh_graphics.call(null);
return lt.objs.console.log.call(null,[cljs.core.str("move at ["),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y),cljs.core.str("]")].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.othello","on-make-move","lt.plugins.othello/on-make-move",803390497),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.othello.__BEH__on_make_move,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"make-move","make-move",2233847746),null], null), null));

lt.plugins.othello.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11655 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11655))
{var ts_11656 = temp__4092__auto___11655;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11656))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11656);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.othello","on-close-destroy","lt.plugins.othello/on-close-destroy",2871377944),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.othello.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.othello","othello.game","lt.plugins.othello/othello.game",2503319444),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"othello.game","othello.game",2871969445)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.othello","on-make-move","lt.plugins.othello/on-make-move",803390497)], null),new cljs.core.Keyword(null,"name","name",1017277949),"othello",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.othello.game_panel.call(null,this$);
}));

lt.plugins.othello.game = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.othello","othello.game","lt.plugins.othello/othello.game",2503319444));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.othello","play-othello","lt.plugins.othello/play-othello",4145649235),new cljs.core.Keyword(null,"desc","desc",1016984067),"othello: New Game",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.othello.game);
cljs.core.reset_BANG_.call(null,lt.plugins.othello.m,lt.plugins.othello.model.make_model.call(null));
return lt.plugins.othello.refresh_graphics.call(null);
})], null));

}

//# sourceMappingURL=