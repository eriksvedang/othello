if(!lt.util.load.provided_QMARK_('lt.plugins.othello.model')) {
goog.provide('lt.plugins.othello.model');
goog.require('cljs.core');

lt.plugins.othello.model.starting_moves = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,3], null),new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,4], null),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,3], null),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,4], null),new cljs.core.Keyword(null,"w","w",1013904361)], true, false);

lt.plugins.othello.model.black_wins = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null),new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.Keyword(null,"w","w",1013904361)], true, false);

lt.plugins.othello.model.get_board = (function get_board(model){return new cljs.core.Keyword(null,"moves","moves",1117991476).cljs$core$IFn$_invoke$arity$1(model);
});

lt.plugins.othello.model.other_player = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"w","w",1013904361)], null);

lt.plugins.othello.model.dirs = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null)], null);

lt.plugins.othello.model.add_pos = (function add_pos(a,b){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,a,b));
});

lt.plugins.othello.model.inside_board_QMARK_ = (function inside_board_QMARK_(p__22907){var vec__22909 = p__22907;var x = cljs.core.nth.call(null,vec__22909,0,null);var y = cljs.core.nth.call(null,vec__22909,1,null);return (((0 <= x)) && ((x <= 7))) && (((0 <= y)) && ((y <= 7)));
});

lt.plugins.othello.model.get_strip = (function get_strip(model,pos,dir){var start = lt.plugins.othello.model.add_pos.call(null,pos,dir);return cljs.core.take_while.call(null,(function (p1__22910_SHARP_){var and__6729__auto__ = lt.plugins.othello.model.inside_board_QMARK_;if(cljs.core.truth_(and__6729__auto__))
{return cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),p1__22910_SHARP_], null));
} else
{return and__6729__auto__;
}
}),cljs.core.iterate.call(null,(function (p1__22911_SHARP_){return lt.plugins.othello.model.add_pos.call(null,p1__22911_SHARP_,dir);
}),start));
});

lt.plugins.othello.model.get_strips = (function get_strips(model,pos){return cljs.core.map.call(null,(function (p1__22912_SHARP_){return lt.plugins.othello.model.get_strip.call(null,model,pos,p1__22912_SHARP_);
}),lt.plugins.othello.model.dirs);
});

lt.plugins.othello.model.is_color_QMARK_ = (function is_color_QMARK_(model,color,pos){return cljs.core._EQ_.call(null,color,cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null)));
});

lt.plugins.othello.model.get_enemy_part_of_strip = (function get_enemy_part_of_strip(model,strip,enemy_color){if(cljs.core.every_QMARK_.call(null,(function (p1__22913_SHARP_){return lt.plugins.othello.model.is_color_QMARK_.call(null,model,enemy_color,p1__22913_SHARP_);
}),strip))
{return cljs.core.PersistentVector.EMPTY;
} else
{return cljs.core.take_while.call(null,(function (p1__22914_SHARP_){return lt.plugins.othello.model.is_color_QMARK_.call(null,model,enemy_color,p1__22914_SHARP_);
}),strip);
}
});

lt.plugins.othello.model.get_flipped_ones = (function get_flipped_ones(model,pos,player){var enemy = lt.plugins.othello.model.other_player.call(null,player);var strips = lt.plugins.othello.model.get_strips.call(null,model,pos);return cljs.core.mapcat.call(null,(function (p1__22915_SHARP_){return lt.plugins.othello.model.get_enemy_part_of_strip.call(null,model,p1__22915_SHARP_,enemy);
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

lt.plugins.othello.model.get_possible_moves = (function get_possible_moves(model){return cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__7439__auto__ = (function iter__22922(s__22923){return (new cljs.core.LazySeq(null,(function (){var s__22923__$1 = s__22923;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22923__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__7435__auto__ = ((function (s__22923__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__22924(s__22925){return (new cljs.core.LazySeq(null,((function (s__22923__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__22925__$1 = s__22925;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__22925__$1);if(temp__4092__auto____$1)
{var s__22925__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22925__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__22925__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__22927 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__22926 = 0;while(true){
if((i__22926 < size__7438__auto__))
{var y = cljs.core._nth.call(null,c__7437__auto__,i__22926);cljs.core.chunk_append.call(null,b__22927,((lt.plugins.othello.model.can_make_move_at_QMARK_.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null));
{
var G__22932 = (i__22926 + 1);
i__22926 = G__22932;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22927),iter__22924.call(null,cljs.core.chunk_rest.call(null,s__22925__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22927),null);
}
} else
{var y = cljs.core.first.call(null,s__22925__$2);return cljs.core.cons.call(null,((lt.plugins.othello.model.can_make_move_at_QMARK_.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null),iter__22924.call(null,cljs.core.rest.call(null,s__22925__$2)));
}
} else
{return null;
}
break;
}
});})(s__22923__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__22923__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__7436__auto__ = cljs.core.seq.call(null,iterys__7435__auto__.call(null,cljs.core.range.call(null,8)));if(fs__7436__auto__)
{return cljs.core.concat.call(null,fs__7436__auto__,iter__22922.call(null,cljs.core.rest.call(null,s__22923__$1)));
} else
{{
var G__22933 = cljs.core.rest.call(null,s__22923__$1);
s__22923__$1 = G__22933;
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

lt.plugins.othello.model.pass_turn = (function pass_turn(model){var current_player = new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(model);return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"current-player","current-player",2351550759),lt.plugins.othello.model.other_player.call(null,current_player));
});

lt.plugins.othello.model.place_move = (function place_move(model,pos){var current_player = new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(model);return lt.plugins.othello.model.pass_turn.call(null,cljs.core.assoc_in.call(null,lt.plugins.othello.model.flips.call(null,cljs.core.assoc_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null),current_player),pos,current_player),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-move","last-move",2980834330)], null),pos));
});

lt.plugins.othello.model.try_move = (function try_move(model,p__22928){var vec__22930 = p__22928;var x = cljs.core.nth.call(null,vec__22930,0,null);var y = cljs.core.nth.call(null,vec__22930,1,null);if(cljs.core.empty_QMARK_.call(null,lt.plugins.othello.model.get_possible_moves.call(null,model)))
{return lt.plugins.othello.model.pass_turn.call(null,model);
} else
{var pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);if(lt.plugins.othello.model.can_make_move_at_QMARK_.call(null,model,pos))
{return lt.plugins.othello.model.place_move.call(null,model,pos);
} else
{return model;
}
}
});

lt.plugins.othello.model.make_model_with_ai = (function make_model_with_ai(black_ai,white_ai){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-player","current-player",2351550759),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"moves","moves",1117991476),lt.plugins.othello.model.starting_moves,new cljs.core.Keyword(null,"last-move","last-move",2980834330),null,new cljs.core.Keyword(null,"ai","ai",1013907354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",1013904361),white_ai,new cljs.core.Keyword(null,"b","b",1013904340),black_ai], null)], null);
});

lt.plugins.othello.model.simple_ai = (function simple_ai(model){var moves = lt.plugins.othello.model.get_possible_moves.call(null,model);if(cljs.core.seq.call(null,moves))
{return cljs.core.rand_nth.call(null,moves);
} else
{return null;
}
});

lt.plugins.othello.model.make_model = (function make_model(){return lt.plugins.othello.model.make_model_with_ai.call(null,null,lt.plugins.othello.model.simple_ai);
});

lt.plugins.othello.model.ai_turn = (function ai_turn(model){var player = new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(model);var ai = cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",1013907354),player], null));if(cljs.core.truth_(ai))
{var temp__4090__auto__ = ai.call(null,model);if(cljs.core.truth_(temp__4090__auto__))
{var move = temp__4090__auto__;return lt.plugins.othello.model.place_move.call(null,model,move);
} else
{return lt.plugins.othello.model.pass_turn.call(null,model);
}
} else
{return model;
}
});

lt.plugins.othello.model.humans_turn_QMARK_ = (function humans_turn_QMARK_(model){return (cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",1013907354),new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(model)], null)) == null);
});

lt.plugins.othello.model.score = (function score(model,player){return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__22931_SHARP_){return cljs.core._EQ_.call(null,p1__22931_SHARP_,player);
}),cljs.core.vals.call(null,cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476)], null)))));
});

lt.plugins.othello.model.winner_text = (function winner_text(model){return "";
});

lt.plugins.othello.model.get_last_move = (function get_last_move(model){return new cljs.core.Keyword(null,"last-move","last-move",2980834330).cljs$core$IFn$_invoke$arity$1(model);
});

lt.plugins.othello.model.get_last_move.call(null,lt.plugins.othello.model.ai_turn.call(null,lt.plugins.othello.model.try_move.call(null,lt.plugins.othello.model.make_model.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,3], null))));

}
if(!lt.util.load.provided_QMARK_('lt.plugins.othello')) {
goog.provide('lt.plugins.othello');
goog.require('cljs.core');
goog.require('lt.util.js');
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
goog.require('lt.util.js');
goog.require('lt.objs.command');

lt.plugins.othello.m = cljs.core.atom.call(null,lt.plugins.othello.model.make_model.call(null));

cljs.core.deref.call(null,lt.plugins.othello.m);

lt.plugins.othello.coordinate__GT_id = (function coordinate__GT_id(p__25857){var vec__25859 = p__25857;var x = cljs.core.nth.call(null,vec__25859,0,null);var y = cljs.core.nth.call(null,vec__25859,1,null);return [cljs.core.str("coord_"),cljs.core.str(x),cljs.core.str("_"),cljs.core.str(y)].join('');
});

lt.plugins.othello.get_square = (function get_square(coordinate){return lt.util.dom.$.call(null,[cljs.core.str("#"),cljs.core.str(lt.plugins.othello.coordinate__GT_id.call(null,coordinate))].join(''),document);
});

lt.plugins.othello.get_piece = (function get_piece(square){return lt.util.dom.$.call(null,".piece",square);
});

lt.plugins.othello.square = (function square(this$,x,y){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.square","span.square",4765193139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.othello.coordinate__GT_id.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.piece","div.piece",2038398659),""], null)], null));var seq__25866_25950 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"make-move","make-move",2233847746),x,y);
})], null)));var chunk__25867_25951 = null;var count__25868_25952 = 0;var i__25869_25953 = 0;while(true){
if((i__25869_25953 < count__25868_25952))
{var vec__25870_25954 = cljs.core._nth.call(null,chunk__25867_25951,i__25869_25953);var ev__8118__auto___25955 = cljs.core.nth.call(null,vec__25870_25954,0,null);var func__8119__auto___25956 = cljs.core.nth.call(null,vec__25870_25954,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___25955,func__8119__auto___25956);
{
var G__25957 = seq__25866_25950;
var G__25958 = chunk__25867_25951;
var G__25959 = count__25868_25952;
var G__25960 = (i__25869_25953 + 1);
seq__25866_25950 = G__25957;
chunk__25867_25951 = G__25958;
count__25868_25952 = G__25959;
i__25869_25953 = G__25960;
continue;
}
} else
{var temp__4092__auto___25961 = cljs.core.seq.call(null,seq__25866_25950);if(temp__4092__auto___25961)
{var seq__25866_25962__$1 = temp__4092__auto___25961;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25866_25962__$1))
{var c__7470__auto___25963 = cljs.core.chunk_first.call(null,seq__25866_25962__$1);{
var G__25964 = cljs.core.chunk_rest.call(null,seq__25866_25962__$1);
var G__25965 = c__7470__auto___25963;
var G__25966 = cljs.core.count.call(null,c__7470__auto___25963);
var G__25967 = 0;
seq__25866_25950 = G__25964;
chunk__25867_25951 = G__25965;
count__25868_25952 = G__25966;
i__25869_25953 = G__25967;
continue;
}
} else
{var vec__25871_25968 = cljs.core.first.call(null,seq__25866_25962__$1);var ev__8118__auto___25969 = cljs.core.nth.call(null,vec__25871_25968,0,null);var func__8119__auto___25970 = cljs.core.nth.call(null,vec__25871_25968,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___25969,func__8119__auto___25970);
{
var G__25971 = cljs.core.next.call(null,seq__25866_25962__$1);
var G__25972 = null;
var G__25973 = 0;
var G__25974 = 0;
seq__25866_25950 = G__25971;
chunk__25867_25951 = G__25972;
count__25868_25952 = G__25973;
i__25869_25953 = G__25974;
continue;
}
}
} else
{}
}
break;
}
return e__8117__auto__;
});

lt.plugins.othello.game_panel = (function game_panel(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",2038169049),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",2025644731),(function (){var iter__7439__auto__ = (function iter__25898(s__25899){return (new cljs.core.LazySeq(null,(function (){var s__25899__$1 = s__25899;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25899__$1);if(temp__4092__auto__)
{var s__25899__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25899__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__25899__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__25901 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__25900 = 0;while(true){
if((i__25900 < size__7438__auto__))
{var y = cljs.core._nth.call(null,c__7437__auto__,i__25900);cljs.core.chunk_append.call(null,b__25901,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7439__auto__ = ((function (i__25900,y,c__7437__auto__,size__7438__auto__,b__25901,s__25899__$2,temp__4092__auto__){
return (function iter__25910(s__25911){return (new cljs.core.LazySeq(null,((function (i__25900,y,c__7437__auto__,size__7438__auto__,b__25901,s__25899__$2,temp__4092__auto__){
return (function (){var s__25911__$1 = s__25911;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__25911__$1);if(temp__4092__auto____$1)
{var s__25911__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25911__$2))
{var c__7437__auto____$1 = cljs.core.chunk_first.call(null,s__25911__$2);var size__7438__auto____$1 = cljs.core.count.call(null,c__7437__auto____$1);var b__25913 = cljs.core.chunk_buffer.call(null,size__7438__auto____$1);if((function (){var i__25912 = 0;while(true){
if((i__25912 < size__7438__auto____$1))
{var x = cljs.core._nth.call(null,c__7437__auto____$1,i__25912);cljs.core.chunk_append.call(null,b__25913,lt.plugins.othello.square.call(null,this$,x,y));
{
var G__25975 = (i__25912 + 1);
i__25912 = G__25975;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25913),iter__25910.call(null,cljs.core.chunk_rest.call(null,s__25911__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25913),null);
}
} else
{var x = cljs.core.first.call(null,s__25911__$2);return cljs.core.cons.call(null,lt.plugins.othello.square.call(null,this$,x,y),iter__25910.call(null,cljs.core.rest.call(null,s__25911__$2)));
}
} else
{return null;
}
break;
}
});})(i__25900,y,c__7437__auto__,size__7438__auto__,b__25901,s__25899__$2,temp__4092__auto__))
,null,null));
});})(i__25900,y,c__7437__auto__,size__7438__auto__,b__25901,s__25899__$2,temp__4092__auto__))
;return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null));
{
var G__25976 = (i__25900 + 1);
i__25900 = G__25976;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25901),iter__25898.call(null,cljs.core.chunk_rest.call(null,s__25899__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25901),null);
}
} else
{var y = cljs.core.first.call(null,s__25899__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7439__auto__ = ((function (y,s__25899__$2,temp__4092__auto__){
return (function iter__25914(s__25915){return (new cljs.core.LazySeq(null,((function (y,s__25899__$2,temp__4092__auto__){
return (function (){var s__25915__$1 = s__25915;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__25915__$1);if(temp__4092__auto____$1)
{var s__25915__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25915__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__25915__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__25917 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__25916 = 0;while(true){
if((i__25916 < size__7438__auto__))
{var x = cljs.core._nth.call(null,c__7437__auto__,i__25916);cljs.core.chunk_append.call(null,b__25917,lt.plugins.othello.square.call(null,this$,x,y));
{
var G__25977 = (i__25916 + 1);
i__25916 = G__25977;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25917),iter__25914.call(null,cljs.core.chunk_rest.call(null,s__25915__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25917),null);
}
} else
{var x = cljs.core.first.call(null,s__25915__$2);return cljs.core.cons.call(null,lt.plugins.othello.square.call(null,this$,x,y),iter__25914.call(null,cljs.core.rest.call(null,s__25915__$2)));
}
} else
{return null;
}
break;
}
});})(y,s__25899__$2,temp__4092__auto__))
,null,null));
});})(y,s__25899__$2,temp__4092__auto__))
;return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null),iter__25898.call(null,cljs.core.rest.call(null,s__25899__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#msg","p#msg",1118489696),""], null)], null));var seq__25918_25978 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__25919_25979 = null;var count__25920_25980 = 0;var i__25921_25981 = 0;while(true){
if((i__25921_25981 < count__25920_25980))
{var vec__25922_25982 = cljs.core._nth.call(null,chunk__25919_25979,i__25921_25981);var ev__8118__auto___25983 = cljs.core.nth.call(null,vec__25922_25982,0,null);var func__8119__auto___25984 = cljs.core.nth.call(null,vec__25922_25982,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___25983,func__8119__auto___25984);
{
var G__25985 = seq__25918_25978;
var G__25986 = chunk__25919_25979;
var G__25987 = count__25920_25980;
var G__25988 = (i__25921_25981 + 1);
seq__25918_25978 = G__25985;
chunk__25919_25979 = G__25986;
count__25920_25980 = G__25987;
i__25921_25981 = G__25988;
continue;
}
} else
{var temp__4092__auto___25989 = cljs.core.seq.call(null,seq__25918_25978);if(temp__4092__auto___25989)
{var seq__25918_25990__$1 = temp__4092__auto___25989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25918_25990__$1))
{var c__7470__auto___25991 = cljs.core.chunk_first.call(null,seq__25918_25990__$1);{
var G__25992 = cljs.core.chunk_rest.call(null,seq__25918_25990__$1);
var G__25993 = c__7470__auto___25991;
var G__25994 = cljs.core.count.call(null,c__7470__auto___25991);
var G__25995 = 0;
seq__25918_25978 = G__25992;
chunk__25919_25979 = G__25993;
count__25920_25980 = G__25994;
i__25921_25981 = G__25995;
continue;
}
} else
{var vec__25923_25996 = cljs.core.first.call(null,seq__25918_25990__$1);var ev__8118__auto___25997 = cljs.core.nth.call(null,vec__25923_25996,0,null);var func__8119__auto___25998 = cljs.core.nth.call(null,vec__25923_25996,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___25997,func__8119__auto___25998);
{
var G__25999 = cljs.core.next.call(null,seq__25918_25990__$1);
var G__26000 = null;
var G__26001 = 0;
var G__26002 = 0;
seq__25918_25978 = G__25999;
chunk__25919_25979 = G__26000;
count__25920_25980 = G__26001;
i__25921_25981 = G__26002;
continue;
}
}
} else
{}
}
break;
}
return e__8117__auto__;
});

lt.plugins.othello.get_piece_at_pos = (function get_piece_at_pos(pos){return lt.plugins.othello.get_piece.call(null,lt.plugins.othello.get_square.call(null,pos));
});

lt.plugins.othello.color_with_anim = (function color_with_anim(color){return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,color)),cljs.core.str(((true)?"-anim":null))].join(''));
});

lt.plugins.othello.right_color_QMARK_ = (function right_color_QMARK_(piece,color){var or__6741__auto__ = lt.util.dom.has_class_QMARK_.call(null,piece,color);if(cljs.core.truth_(or__6741__auto__))
{return or__6741__auto__;
} else
{return lt.util.dom.has_class_QMARK_.call(null,piece,lt.plugins.othello.color_with_anim.call(null,color));
}
});

lt.plugins.othello.nothing_there_QMARK_ = (function nothing_there_QMARK_(piece){var or__6741__auto__ = lt.util.dom.has_class_QMARK_.call(null,piece,new cljs.core.Keyword(null,"option","option",4298734567));if(cljs.core.truth_(or__6741__auto__))
{return or__6741__auto__;
} else
{return cljs.core.empty_QMARK_.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,(function (p1__25924_SHARP_){return lt.util.dom.has_class_QMARK_.call(null,piece,p1__25924_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w","w-anim","b","b-anim"], null))));
}
});

lt.plugins.othello.reset_piece = (function reset_piece(piece){lt.util.dom.remove_class.call(null,piece,new cljs.core.Keyword(null,"w","w",1013904361));
lt.util.dom.remove_class.call(null,piece,new cljs.core.Keyword(null,"w-anim","w-anim",4465330457));
lt.util.dom.remove_class.call(null,piece,new cljs.core.Keyword(null,"b","b",1013904340));
lt.util.dom.remove_class.call(null,piece,new cljs.core.Keyword(null,"b-anim","b-anim",3864118286));
lt.util.dom.remove_class.call(null,piece,new cljs.core.Keyword(null,"option","option",4298734567));
return lt.util.dom.remove_class.call(null,piece,new cljs.core.Keyword(null,"last-move","last-move",2980834330));
});

lt.plugins.othello.set_piece = (function set_piece(pos,color){var piece = lt.plugins.othello.get_piece_at_pos.call(null,pos);var nothing_there = lt.plugins.othello.nothing_there_QMARK_.call(null,piece);var already_right_color = lt.plugins.othello.right_color_QMARK_.call(null,piece,color);lt.plugins.othello.reset_piece.call(null,piece);
if(cljs.core.truth_((function (){var or__6741__auto__ = nothing_there;if(cljs.core.truth_(or__6741__auto__))
{return or__6741__auto__;
} else
{return already_right_color;
}
})()))
{return lt.util.dom.add_class.call(null,piece,color);
} else
{return lt.util.dom.add_class.call(null,piece,lt.plugins.othello.mod_color.call(null,color));
}
});

lt.plugins.othello.reset_pieces = (function reset_pieces(){return cljs.core.doall.call(null,cljs.core.map.call(null,lt.plugins.othello.reset_piece,lt.util.dom.$$.call(null,".piece",document)));
});

lt.plugins.othello.remove_option_class_on_all = (function remove_option_class_on_all(){return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__25925_SHARP_){return lt.util.dom.remove_class.call(null,p1__25925_SHARP_,new cljs.core.Keyword(null,"option","option",4298734567));
}),lt.util.dom.$$.call(null,".piece",document)));
});

lt.plugins.othello.set_message = (function set_message(text){return lt.util.dom.$.call(null,"#msg").innerHTML = text;
});

lt.plugins.othello.refresh_graphics = (function refresh_graphics(){cljs.core.doall.call(null,(function (){var iter__7439__auto__ = (function iter__25938(s__25939){return (new cljs.core.LazySeq(null,(function (){var s__25939__$1 = s__25939;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25939__$1);if(temp__4092__auto__)
{var s__25939__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25939__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__25939__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__25941 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__25940 = 0;while(true){
if((i__25940 < size__7438__auto__))
{var vec__25944 = cljs.core._nth.call(null,c__7437__auto__,i__25940);var pos = cljs.core.nth.call(null,vec__25944,0,null);var color = cljs.core.nth.call(null,vec__25944,1,null);cljs.core.chunk_append.call(null,b__25941,lt.plugins.othello.set_piece.call(null,pos,color));
{
var G__26003 = (i__25940 + 1);
i__25940 = G__26003;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25941),iter__25938.call(null,cljs.core.chunk_rest.call(null,s__25939__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25941),null);
}
} else
{var vec__25945 = cljs.core.first.call(null,s__25939__$2);var pos = cljs.core.nth.call(null,vec__25945,0,null);var color = cljs.core.nth.call(null,vec__25945,1,null);return cljs.core.cons.call(null,lt.plugins.othello.set_piece.call(null,pos,color),iter__25938.call(null,cljs.core.rest.call(null,s__25939__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7439__auto__.call(null,lt.plugins.othello.model.get_board.call(null,cljs.core.deref.call(null,lt.plugins.othello.m)));
})());
lt.plugins.othello.remove_option_class_on_all.call(null);
if(lt.plugins.othello.model.humans_turn_QMARK_.call(null,cljs.core.deref.call(null,lt.plugins.othello.m)))
{cljs.core.doall.call(null,(function (){var iter__7439__auto__ = (function iter__25946(s__25947){return (new cljs.core.LazySeq(null,(function (){var s__25947__$1 = s__25947;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25947__$1);if(temp__4092__auto__)
{var s__25947__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25947__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__25947__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__25949 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__25948 = 0;while(true){
if((i__25948 < size__7438__auto__))
{var pos = cljs.core._nth.call(null,c__7437__auto__,i__25948);cljs.core.chunk_append.call(null,b__25949,lt.plugins.othello.set_piece.call(null,pos,new cljs.core.Keyword(null,"option","option",4298734567)));
{
var G__26004 = (i__25948 + 1);
i__25948 = G__26004;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25949),iter__25946.call(null,cljs.core.chunk_rest.call(null,s__25947__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25949),null);
}
} else
{var pos = cljs.core.first.call(null,s__25947__$2);return cljs.core.cons.call(null,lt.plugins.othello.set_piece.call(null,pos,new cljs.core.Keyword(null,"option","option",4298734567)),iter__25946.call(null,cljs.core.rest.call(null,s__25947__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7439__auto__.call(null,lt.plugins.othello.model.get_possible_moves.call(null,cljs.core.deref.call(null,lt.plugins.othello.m)));
})());
} else
{}
var temp__4090__auto___26005 = lt.plugins.othello.model.get_last_move.call(null,cljs.core.deref.call(null,lt.plugins.othello.m));if(cljs.core.truth_(temp__4090__auto___26005))
{var pos_26006 = temp__4090__auto___26005;var last_piece_26007 = lt.plugins.othello.get_piece_at_pos.call(null,pos_26006);lt.util.dom.add_class.call(null,last_piece_26007,new cljs.core.Keyword(null,"last-move","last-move",2980834330));
} else
{}
return lt.plugins.othello.set_message.call(null,[cljs.core.str(" Black "),cljs.core.str(lt.plugins.othello.model.score.call(null,cljs.core.deref.call(null,lt.plugins.othello.m),new cljs.core.Keyword(null,"b","b",1013904340))),cljs.core.str(" &mdash; "),cljs.core.str(" White "),cljs.core.str(lt.plugins.othello.model.score.call(null,cljs.core.deref.call(null,lt.plugins.othello.m),new cljs.core.Keyword(null,"w","w",1013904361))),cljs.core.str(lt.plugins.othello.model.winner_text.call(null,cljs.core.deref.call(null,lt.plugins.othello.m)))].join(''));
});

lt.plugins.othello.__BEH__refresh_gfx = (function __BEH__refresh_gfx(this$){return lt.plugins.othello.refresh_graphics.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.othello","refresh-gfx","lt.plugins.othello/refresh-gfx",1387287880),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.othello.__BEH__refresh_gfx,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null], null), null));

lt.plugins.othello.__BEH__let_ai_move = (function __BEH__let_ai_move(this$){cljs.core.swap_BANG_.call(null,lt.plugins.othello.m,lt.plugins.othello.model.ai_turn);
lt.plugins.othello.refresh_graphics.call(null);
if(!(lt.plugins.othello.model.humans_turn_QMARK_.call(null,cljs.core.deref.call(null,lt.plugins.othello.m))))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"ai-move","ai-move",4253392328));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.othello","let-ai-move","lt.plugins.othello/let-ai-move",2308607587),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.othello.__BEH__let_ai_move,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ai-move","ai-move",4253392328),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),2000);

lt.plugins.othello.__BEH__on_make_move = (function __BEH__on_make_move(this$,x,y){if(lt.plugins.othello.model.humans_turn_QMARK_.call(null,cljs.core.deref.call(null,lt.plugins.othello.m)))
{cljs.core.swap_BANG_.call(null,lt.plugins.othello.m,lt.plugins.othello.model.try_move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
if(!(lt.plugins.othello.model.humans_turn_QMARK_.call(null,cljs.core.deref.call(null,lt.plugins.othello.m))))
{lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"ai-move","ai-move",4253392328));
return lt.plugins.othello.refresh_graphics.call(null);
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.othello","on-make-move","lt.plugins.othello/on-make-move",803390497),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.othello.__BEH__on_make_move,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"make-move","make-move",2233847746),null], null), null));

lt.plugins.othello.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___26008 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___26008))
{var ts_26009 = temp__4092__auto___26008;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_26009))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_26009);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.othello","on-close-destroy","lt.plugins.othello/on-close-destroy",2871377944),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.othello.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.othello","othello.game","lt.plugins.othello/othello.game",2503319444),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"othello.game","othello.game",2871969445)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.othello","on-make-move","lt.plugins.othello/on-make-move",803390497),new cljs.core.Keyword("lt.plugins.othello","let-ai-move","lt.plugins.othello/let-ai-move",2308607587),new cljs.core.Keyword("lt.plugins.othello","refresh-gfx","lt.plugins.othello/refresh-gfx",1387287880)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Othello",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.othello.game_panel.call(null,this$);
}));

lt.plugins.othello.game = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.othello","othello.game","lt.plugins.othello/othello.game",2503319444));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.othello","play-othello","lt.plugins.othello/play-othello",4145649235),new cljs.core.Keyword(null,"desc","desc",1016984067),"Othello: Start New Game",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.othello.game);
cljs.core.reset_BANG_.call(null,lt.plugins.othello.m,lt.plugins.othello.model.make_model.call(null));
lt.plugins.othello.reset_pieces.call(null);
lt.plugins.othello.refresh_graphics.call(null);
return lt.object.raise.call(null,lt.plugins.othello.game,new cljs.core.Keyword(null,"ai-move","ai-move",4253392328));
})], null));

}

//# sourceMappingURL=