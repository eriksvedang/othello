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
lt.plugins.othello.model.inside_board_QMARK_ = (function inside_board_QMARK_(p__7735){var vec__7737 = p__7735;var x = cljs.core.nth.call(null,vec__7737,0,null);var y = cljs.core.nth.call(null,vec__7737,1,null);return (((0 <= x)) && ((x <= 7))) && (((0 <= y)) && ((y <= 7)));
});
lt.plugins.othello.model.get_strip = (function get_strip(model,pos,dir){var start = lt.plugins.othello.model.add_pos.call(null,pos,dir);return cljs.core.take_while.call(null,((function (start){
return (function (p1__7738_SHARP_){var and__6352__auto__ = lt.plugins.othello.model.inside_board_QMARK_;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),p1__7738_SHARP_], null));
} else
{return and__6352__auto__;
}
});})(start))
,cljs.core.iterate.call(null,((function (start){
return (function (p1__7739_SHARP_){return lt.plugins.othello.model.add_pos.call(null,p1__7739_SHARP_,dir);
});})(start))
,start));
});
lt.plugins.othello.model.get_strips = (function get_strips(model,pos){return cljs.core.map.call(null,(function (p1__7740_SHARP_){return lt.plugins.othello.model.get_strip.call(null,model,pos,p1__7740_SHARP_);
}),lt.plugins.othello.model.dirs);
});
lt.plugins.othello.model.is_color_QMARK_ = (function is_color_QMARK_(model,color,pos){return cljs.core._EQ_.call(null,color,cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null)));
});
lt.plugins.othello.model.get_enemy_part_of_strip = (function get_enemy_part_of_strip(model,strip,enemy_color){if(cljs.core.every_QMARK_.call(null,(function (p1__7741_SHARP_){return lt.plugins.othello.model.is_color_QMARK_.call(null,model,enemy_color,p1__7741_SHARP_);
}),strip))
{return cljs.core.PersistentVector.EMPTY;
} else
{return cljs.core.take_while.call(null,(function (p1__7742_SHARP_){return lt.plugins.othello.model.is_color_QMARK_.call(null,model,enemy_color,p1__7742_SHARP_);
}),strip);
}
});
lt.plugins.othello.model.get_flipped_ones = (function get_flipped_ones(model,pos,player){var enemy = lt.plugins.othello.model.other_player.call(null,player);var strips = lt.plugins.othello.model.get_strips.call(null,model,pos);return cljs.core.mapcat.call(null,((function (enemy,strips){
return (function (p1__7743_SHARP_){return lt.plugins.othello.model.get_enemy_part_of_strip.call(null,model,p1__7743_SHARP_,enemy);
});})(enemy,strips))
,strips);
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
lt.plugins.othello.model.get_possible_moves = (function get_possible_moves(model){return cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__7081__auto__ = (function iter__7750(s__7751){return (new cljs.core.LazySeq(null,(function (){var s__7751__$1 = s__7751;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7751__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__7077__auto__ = ((function (s__7751__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__7752(s__7753){return (new cljs.core.LazySeq(null,((function (s__7751__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__7753__$1 = s__7753;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7753__$1);if(temp__4092__auto____$1)
{var s__7753__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7753__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7753__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7755 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7754 = 0;while(true){
if((i__7754 < size__7080__auto__))
{var y = cljs.core._nth.call(null,c__7079__auto__,i__7754);cljs.core.chunk_append.call(null,b__7755,((lt.plugins.othello.model.can_make_move_at_QMARK_.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null));
{
var G__7770 = (i__7754 + 1);
i__7754 = G__7770;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7755),iter__7752.call(null,cljs.core.chunk_rest.call(null,s__7753__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7755),null);
}
} else
{var y = cljs.core.first.call(null,s__7753__$2);return cljs.core.cons.call(null,((lt.plugins.othello.model.can_make_move_at_QMARK_.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null),iter__7752.call(null,cljs.core.rest.call(null,s__7753__$2)));
}
} else
{return null;
}
break;
}
});})(s__7751__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__7751__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__7078__auto__ = cljs.core.seq.call(null,iterys__7077__auto__.call(null,cljs.core.range.call(null,8)));if(fs__7078__auto__)
{return cljs.core.concat.call(null,fs__7078__auto__,iter__7750.call(null,cljs.core.rest.call(null,s__7751__$1)));
} else
{{
var G__7771 = cljs.core.rest.call(null,s__7751__$1);
s__7751__$1 = G__7771;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,cljs.core.range.call(null,8));
})());
});
lt.plugins.othello.model.pass_turn = (function pass_turn(model){var current_player = new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(model);return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"current-player","current-player",2351550759),lt.plugins.othello.model.other_player.call(null,current_player));
});
lt.plugins.othello.model.place_move = (function place_move(model,pos){var current_player = new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(model);return lt.plugins.othello.model.pass_turn.call(null,cljs.core.assoc_in.call(null,lt.plugins.othello.model.flips.call(null,cljs.core.assoc_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null),current_player),pos,current_player),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-move","last-move",2980834330)], null),pos));
});
lt.plugins.othello.model.try_move = (function try_move(model,p__7756){var vec__7758 = p__7756;var x = cljs.core.nth.call(null,vec__7758,0,null);var y = cljs.core.nth.call(null,vec__7758,1,null);if(cljs.core.empty_QMARK_.call(null,lt.plugins.othello.model.get_possible_moves.call(null,model)))
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
lt.plugins.othello.model.score = (function score(model,player){return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__7759_SHARP_){return cljs.core._EQ_.call(null,p1__7759_SHARP_,player);
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
lt.plugins.othello.coordinate__GT_id = (function coordinate__GT_id(p__7876){var vec__7878 = p__7876;var x = cljs.core.nth.call(null,vec__7878,0,null);var y = cljs.core.nth.call(null,vec__7878,1,null);return [cljs.core.str("coord_"),cljs.core.str(x),cljs.core.str("_"),cljs.core.str(y)].join('');
});
lt.plugins.othello.get_square = (function get_square(coordinate){return lt.util.dom.$.call(null,[cljs.core.str("#"),cljs.core.str(lt.plugins.othello.coordinate__GT_id.call(null,coordinate))].join(''),document);
});
lt.plugins.othello.get_piece = (function get_piece(square){return lt.util.dom.$.call(null,".piece",square);
});
lt.plugins.othello.square = (function square(this$,x,y){var e__7792__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.square","span.square",4765193139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.othello.coordinate__GT_id.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.piece","div.piece",2038398659),""], null)], null));var seq__7885_7979 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7792__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"make-move","make-move",2233847746),x,y);
});})(e__7792__auto__))
], null)));var chunk__7886_7980 = null;var count__7887_7981 = 0;var i__7888_7982 = 0;while(true){
if((i__7888_7982 < count__7887_7981))
{var vec__7889_7983 = cljs.core._nth.call(null,chunk__7886_7980,i__7888_7982);var ev__7793__auto___7984 = cljs.core.nth.call(null,vec__7889_7983,0,null);var func__7794__auto___7985 = cljs.core.nth.call(null,vec__7889_7983,1,null);lt.util.dom.on.call(null,e__7792__auto__,ev__7793__auto___7984,func__7794__auto___7985);
{
var G__7986 = seq__7885_7979;
var G__7987 = chunk__7886_7980;
var G__7988 = count__7887_7981;
var G__7989 = (i__7888_7982 + 1);
seq__7885_7979 = G__7986;
chunk__7886_7980 = G__7987;
count__7887_7981 = G__7988;
i__7888_7982 = G__7989;
continue;
}
} else
{var temp__4092__auto___7990 = cljs.core.seq.call(null,seq__7885_7979);if(temp__4092__auto___7990)
{var seq__7885_7991__$1 = temp__4092__auto___7990;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7885_7991__$1))
{var c__7112__auto___7992 = cljs.core.chunk_first.call(null,seq__7885_7991__$1);{
var G__7993 = cljs.core.chunk_rest.call(null,seq__7885_7991__$1);
var G__7994 = c__7112__auto___7992;
var G__7995 = cljs.core.count.call(null,c__7112__auto___7992);
var G__7996 = 0;
seq__7885_7979 = G__7993;
chunk__7886_7980 = G__7994;
count__7887_7981 = G__7995;
i__7888_7982 = G__7996;
continue;
}
} else
{var vec__7890_7997 = cljs.core.first.call(null,seq__7885_7991__$1);var ev__7793__auto___7998 = cljs.core.nth.call(null,vec__7890_7997,0,null);var func__7794__auto___7999 = cljs.core.nth.call(null,vec__7890_7997,1,null);lt.util.dom.on.call(null,e__7792__auto__,ev__7793__auto___7998,func__7794__auto___7999);
{
var G__8000 = cljs.core.next.call(null,seq__7885_7991__$1);
var G__8001 = null;
var G__8002 = 0;
var G__8003 = 0;
seq__7885_7979 = G__8000;
chunk__7886_7980 = G__8001;
count__7887_7981 = G__8002;
i__7888_7982 = G__8003;
continue;
}
}
} else
{}
}
break;
}
return e__7792__auto__;
});
lt.plugins.othello.game_panel = (function game_panel(this$){var e__7792__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",2038169049),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",2025644731),(function (){var iter__7081__auto__ = (function iter__7917(s__7918){return (new cljs.core.LazySeq(null,(function (){var s__7918__$1 = s__7918;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7918__$1);if(temp__4092__auto__)
{var s__7918__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7918__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7918__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7920 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7919 = 0;while(true){
if((i__7919 < size__7080__auto__))
{var y = cljs.core._nth.call(null,c__7079__auto__,i__7919);cljs.core.chunk_append.call(null,b__7920,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7081__auto__ = ((function (i__7919,y,c__7079__auto__,size__7080__auto__,b__7920,s__7918__$2,temp__4092__auto__){
return (function iter__7929(s__7930){return (new cljs.core.LazySeq(null,((function (i__7919,y,c__7079__auto__,size__7080__auto__,b__7920,s__7918__$2,temp__4092__auto__){
return (function (){var s__7930__$1 = s__7930;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7930__$1);if(temp__4092__auto____$1)
{var s__7930__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7930__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__7930__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__7932 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__7931 = 0;while(true){
if((i__7931 < size__7080__auto____$1))
{var x = cljs.core._nth.call(null,c__7079__auto____$1,i__7931);cljs.core.chunk_append.call(null,b__7932,lt.plugins.othello.square.call(null,this$,x,y));
{
var G__8004 = (i__7931 + 1);
i__7931 = G__8004;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7932),iter__7929.call(null,cljs.core.chunk_rest.call(null,s__7930__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7932),null);
}
} else
{var x = cljs.core.first.call(null,s__7930__$2);return cljs.core.cons.call(null,lt.plugins.othello.square.call(null,this$,x,y),iter__7929.call(null,cljs.core.rest.call(null,s__7930__$2)));
}
} else
{return null;
}
break;
}
});})(i__7919,y,c__7079__auto__,size__7080__auto__,b__7920,s__7918__$2,temp__4092__auto__))
,null,null));
});})(i__7919,y,c__7079__auto__,size__7080__auto__,b__7920,s__7918__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,cljs.core.range.call(null,8));
})()], null));
{
var G__8005 = (i__7919 + 1);
i__7919 = G__8005;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7920),iter__7917.call(null,cljs.core.chunk_rest.call(null,s__7918__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7920),null);
}
} else
{var y = cljs.core.first.call(null,s__7918__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7081__auto__ = ((function (y,s__7918__$2,temp__4092__auto__){
return (function iter__7933(s__7934){return (new cljs.core.LazySeq(null,((function (y,s__7918__$2,temp__4092__auto__){
return (function (){var s__7934__$1 = s__7934;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7934__$1);if(temp__4092__auto____$1)
{var s__7934__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7934__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7934__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7936 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7935 = 0;while(true){
if((i__7935 < size__7080__auto__))
{var x = cljs.core._nth.call(null,c__7079__auto__,i__7935);cljs.core.chunk_append.call(null,b__7936,lt.plugins.othello.square.call(null,this$,x,y));
{
var G__8006 = (i__7935 + 1);
i__7935 = G__8006;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7936),iter__7933.call(null,cljs.core.chunk_rest.call(null,s__7934__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7936),null);
}
} else
{var x = cljs.core.first.call(null,s__7934__$2);return cljs.core.cons.call(null,lt.plugins.othello.square.call(null,this$,x,y),iter__7933.call(null,cljs.core.rest.call(null,s__7934__$2)));
}
} else
{return null;
}
break;
}
});})(y,s__7918__$2,temp__4092__auto__))
,null,null));
});})(y,s__7918__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,cljs.core.range.call(null,8));
})()], null),iter__7917.call(null,cljs.core.rest.call(null,s__7918__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,cljs.core.range.call(null,8));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#msg","p#msg",1118489696),""], null)], null));var seq__7937_8007 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7938_8008 = null;var count__7939_8009 = 0;var i__7940_8010 = 0;while(true){
if((i__7940_8010 < count__7939_8009))
{var vec__7941_8011 = cljs.core._nth.call(null,chunk__7938_8008,i__7940_8010);var ev__7793__auto___8012 = cljs.core.nth.call(null,vec__7941_8011,0,null);var func__7794__auto___8013 = cljs.core.nth.call(null,vec__7941_8011,1,null);lt.util.dom.on.call(null,e__7792__auto__,ev__7793__auto___8012,func__7794__auto___8013);
{
var G__8014 = seq__7937_8007;
var G__8015 = chunk__7938_8008;
var G__8016 = count__7939_8009;
var G__8017 = (i__7940_8010 + 1);
seq__7937_8007 = G__8014;
chunk__7938_8008 = G__8015;
count__7939_8009 = G__8016;
i__7940_8010 = G__8017;
continue;
}
} else
{var temp__4092__auto___8018 = cljs.core.seq.call(null,seq__7937_8007);if(temp__4092__auto___8018)
{var seq__7937_8019__$1 = temp__4092__auto___8018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7937_8019__$1))
{var c__7112__auto___8020 = cljs.core.chunk_first.call(null,seq__7937_8019__$1);{
var G__8021 = cljs.core.chunk_rest.call(null,seq__7937_8019__$1);
var G__8022 = c__7112__auto___8020;
var G__8023 = cljs.core.count.call(null,c__7112__auto___8020);
var G__8024 = 0;
seq__7937_8007 = G__8021;
chunk__7938_8008 = G__8022;
count__7939_8009 = G__8023;
i__7940_8010 = G__8024;
continue;
}
} else
{var vec__7942_8025 = cljs.core.first.call(null,seq__7937_8019__$1);var ev__7793__auto___8026 = cljs.core.nth.call(null,vec__7942_8025,0,null);var func__7794__auto___8027 = cljs.core.nth.call(null,vec__7942_8025,1,null);lt.util.dom.on.call(null,e__7792__auto__,ev__7793__auto___8026,func__7794__auto___8027);
{
var G__8028 = cljs.core.next.call(null,seq__7937_8019__$1);
var G__8029 = null;
var G__8030 = 0;
var G__8031 = 0;
seq__7937_8007 = G__8028;
chunk__7938_8008 = G__8029;
count__7939_8009 = G__8030;
i__7940_8010 = G__8031;
continue;
}
}
} else
{}
}
break;
}
return e__7792__auto__;
});
lt.plugins.othello.get_piece_at_pos = (function get_piece_at_pos(pos){return lt.plugins.othello.get_piece.call(null,lt.plugins.othello.get_square.call(null,pos));
});
lt.plugins.othello.color_with_anim = (function color_with_anim(color){return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,color)),cljs.core.str(((true)?"-anim":null))].join(''));
});
lt.plugins.othello.right_color_QMARK_ = (function right_color_QMARK_(piece,color){var or__6364__auto__ = lt.util.dom.has_class_QMARK_.call(null,piece,color);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return lt.util.dom.has_class_QMARK_.call(null,piece,lt.plugins.othello.color_with_anim.call(null,color));
}
});
lt.plugins.othello.nothing_there_QMARK_ = (function nothing_there_QMARK_(piece){var or__6364__auto__ = lt.util.dom.has_class_QMARK_.call(null,piece,new cljs.core.Keyword(null,"option","option",4298734567));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return cljs.core.empty_QMARK_.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,((function (or__6364__auto__){
return (function (p1__7943_SHARP_){return lt.util.dom.has_class_QMARK_.call(null,piece,p1__7943_SHARP_);
});})(or__6364__auto__))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w","w-anim","b","b-anim"], null))));
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
if(cljs.core.truth_((function (){var or__6364__auto__ = nothing_there;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return already_right_color;
}
})()))
{return lt.util.dom.add_class.call(null,piece,color);
} else
{return lt.util.dom.add_class.call(null,piece,lt.plugins.othello.color_with_anim.call(null,color));
}
});
lt.plugins.othello.reset_pieces = (function reset_pieces(){return cljs.core.doall.call(null,cljs.core.map.call(null,lt.plugins.othello.reset_piece,lt.util.dom.$$.call(null,".piece",document)));
});
lt.plugins.othello.remove_option_class_on_all = (function remove_option_class_on_all(){return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__7944_SHARP_){return lt.util.dom.remove_class.call(null,p1__7944_SHARP_,new cljs.core.Keyword(null,"option","option",4298734567));
}),lt.util.dom.$$.call(null,".piece",document)));
});
lt.plugins.othello.set_message = (function set_message(text){return lt.util.dom.$.call(null,"#msg").innerHTML = text;
});
lt.plugins.othello.refresh_graphics = (function refresh_graphics(){cljs.core.doall.call(null,(function (){var iter__7081__auto__ = (function iter__7957(s__7958){return (new cljs.core.LazySeq(null,(function (){var s__7958__$1 = s__7958;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7958__$1);if(temp__4092__auto__)
{var s__7958__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7958__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7958__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7960 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7959 = 0;while(true){
if((i__7959 < size__7080__auto__))
{var vec__7963 = cljs.core._nth.call(null,c__7079__auto__,i__7959);var pos = cljs.core.nth.call(null,vec__7963,0,null);var color = cljs.core.nth.call(null,vec__7963,1,null);cljs.core.chunk_append.call(null,b__7960,lt.plugins.othello.set_piece.call(null,pos,color));
{
var G__8032 = (i__7959 + 1);
i__7959 = G__8032;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7960),iter__7957.call(null,cljs.core.chunk_rest.call(null,s__7958__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7960),null);
}
} else
{var vec__7964 = cljs.core.first.call(null,s__7958__$2);var pos = cljs.core.nth.call(null,vec__7964,0,null);var color = cljs.core.nth.call(null,vec__7964,1,null);return cljs.core.cons.call(null,lt.plugins.othello.set_piece.call(null,pos,color),iter__7957.call(null,cljs.core.rest.call(null,s__7958__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,lt.plugins.othello.model.get_board.call(null,cljs.core.deref.call(null,lt.plugins.othello.m)));
})());
lt.plugins.othello.remove_option_class_on_all.call(null);
if(lt.plugins.othello.model.humans_turn_QMARK_.call(null,cljs.core.deref.call(null,lt.plugins.othello.m)))
{cljs.core.doall.call(null,(function (){var iter__7081__auto__ = (function iter__7965(s__7966){return (new cljs.core.LazySeq(null,(function (){var s__7966__$1 = s__7966;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7966__$1);if(temp__4092__auto__)
{var s__7966__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7966__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7966__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7968 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7967 = 0;while(true){
if((i__7967 < size__7080__auto__))
{var pos = cljs.core._nth.call(null,c__7079__auto__,i__7967);cljs.core.chunk_append.call(null,b__7968,lt.plugins.othello.set_piece.call(null,pos,new cljs.core.Keyword(null,"option","option",4298734567)));
{
var G__8033 = (i__7967 + 1);
i__7967 = G__8033;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7968),iter__7965.call(null,cljs.core.chunk_rest.call(null,s__7966__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7968),null);
}
} else
{var pos = cljs.core.first.call(null,s__7966__$2);return cljs.core.cons.call(null,lt.plugins.othello.set_piece.call(null,pos,new cljs.core.Keyword(null,"option","option",4298734567)),iter__7965.call(null,cljs.core.rest.call(null,s__7966__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,lt.plugins.othello.model.get_possible_moves.call(null,cljs.core.deref.call(null,lt.plugins.othello.m)));
})());
} else
{}
var temp__4090__auto___8034 = lt.plugins.othello.model.get_last_move.call(null,cljs.core.deref.call(null,lt.plugins.othello.m));if(cljs.core.truth_(temp__4090__auto___8034))
{var pos_8035 = temp__4090__auto___8034;var last_piece_8036 = lt.plugins.othello.get_piece_at_pos.call(null,pos_8035);lt.util.dom.add_class.call(null,last_piece_8036,new cljs.core.Keyword(null,"last-move","last-move",2980834330));
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.othello","let-ai-move","lt.plugins.othello/let-ai-move",2308607587),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.othello.__BEH__let_ai_move,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ai-move","ai-move",4253392328),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),1500);
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
lt.plugins.othello.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8037 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8037))
{var ts_8038 = temp__4092__auto___8037;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8038))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8038);
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

//# sourceMappingURL=othello_compiled.js.map