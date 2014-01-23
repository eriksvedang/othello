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

lt.plugins.othello.model.inside_board_QMARK_ = (function inside_board_QMARK_(p__19550){var vec__19552 = p__19550;var x = cljs.core.nth.call(null,vec__19552,0,null);var y = cljs.core.nth.call(null,vec__19552,1,null);return (((0 <= x)) && ((x <= 7))) && (((0 <= y)) && ((y <= 7)));
});

lt.plugins.othello.model.get_strip = (function get_strip(model,pos,dir){var start = lt.plugins.othello.model.add_pos.call(null,pos,dir);return cljs.core.take_while.call(null,(function (p1__19553_SHARP_){var and__6729__auto__ = lt.plugins.othello.model.inside_board_QMARK_;if(cljs.core.truth_(and__6729__auto__))
{return cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),p1__19553_SHARP_], null));
} else
{return and__6729__auto__;
}
}),cljs.core.iterate.call(null,(function (p1__19554_SHARP_){return lt.plugins.othello.model.add_pos.call(null,p1__19554_SHARP_,dir);
}),start));
});

lt.plugins.othello.model.get_strips = (function get_strips(model,pos){return cljs.core.map.call(null,(function (p1__19555_SHARP_){return lt.plugins.othello.model.get_strip.call(null,model,pos,p1__19555_SHARP_);
}),lt.plugins.othello.model.dirs);
});

lt.plugins.othello.model.is_color_QMARK_ = (function is_color_QMARK_(model,color,pos){return cljs.core._EQ_.call(null,color,cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null)));
});

lt.plugins.othello.model.get_enemy_part_of_strip = (function get_enemy_part_of_strip(model,strip,enemy_color){if(cljs.core.every_QMARK_.call(null,(function (p1__19556_SHARP_){return lt.plugins.othello.model.is_color_QMARK_.call(null,model,enemy_color,p1__19556_SHARP_);
}),strip))
{return cljs.core.PersistentVector.EMPTY;
} else
{return cljs.core.take_while.call(null,(function (p1__19557_SHARP_){return lt.plugins.othello.model.is_color_QMARK_.call(null,model,enemy_color,p1__19557_SHARP_);
}),strip);
}
});

lt.plugins.othello.model.get_flipped_ones = (function get_flipped_ones(model,pos,player){var enemy = lt.plugins.othello.model.other_player.call(null,player);var strips = lt.plugins.othello.model.get_strips.call(null,model,pos);return cljs.core.mapcat.call(null,(function (p1__19558_SHARP_){return lt.plugins.othello.model.get_enemy_part_of_strip.call(null,model,p1__19558_SHARP_,enemy);
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

lt.plugins.othello.model.get_possible_moves = (function get_possible_moves(model){return cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__7439__auto__ = (function iter__19565(s__19566){return (new cljs.core.LazySeq(null,(function (){var s__19566__$1 = s__19566;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19566__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__7435__auto__ = ((function (s__19566__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__19567(s__19568){return (new cljs.core.LazySeq(null,((function (s__19566__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__19568__$1 = s__19568;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__19568__$1);if(temp__4092__auto____$1)
{var s__19568__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19568__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__19568__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__19570 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__19569 = 0;while(true){
if((i__19569 < size__7438__auto__))
{var y = cljs.core._nth.call(null,c__7437__auto__,i__19569);cljs.core.chunk_append.call(null,b__19570,((lt.plugins.othello.model.can_make_move_at_QMARK_.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null));
{
var G__19575 = (i__19569 + 1);
i__19569 = G__19575;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19570),iter__19567.call(null,cljs.core.chunk_rest.call(null,s__19568__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19570),null);
}
} else
{var y = cljs.core.first.call(null,s__19568__$2);return cljs.core.cons.call(null,((lt.plugins.othello.model.can_make_move_at_QMARK_.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):null),iter__19567.call(null,cljs.core.rest.call(null,s__19568__$2)));
}
} else
{return null;
}
break;
}
});})(s__19566__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__19566__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__7436__auto__ = cljs.core.seq.call(null,iterys__7435__auto__.call(null,cljs.core.range.call(null,8)));if(fs__7436__auto__)
{return cljs.core.concat.call(null,fs__7436__auto__,iter__19565.call(null,cljs.core.rest.call(null,s__19566__$1)));
} else
{{
var G__19576 = cljs.core.rest.call(null,s__19566__$1);
s__19566__$1 = G__19576;
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

lt.plugins.othello.model.place_move = (function place_move(model,pos){var current_player = new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(model);return lt.plugins.othello.model.pass_turn.call(null,lt.plugins.othello.model.flips.call(null,cljs.core.assoc_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null),current_player),pos,current_player));
});

lt.plugins.othello.model.try_move = (function try_move(model,p__19571){var vec__19573 = p__19571;var x = cljs.core.nth.call(null,vec__19573,0,null);var y = cljs.core.nth.call(null,vec__19573,1,null);if(cljs.core.empty_QMARK_.call(null,lt.plugins.othello.model.get_possible_moves.call(null,model)))
{return lt.plugins.othello.model.pass_turn.call(null,model);
} else
{var pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);if(lt.plugins.othello.model.can_make_move_at_QMARK_.call(null,model,pos))
{return lt.plugins.othello.model.place_move.call(null,model,pos);
} else
{return model;
}
}
});

lt.plugins.othello.model.make_model_with_ai = (function make_model_with_ai(black_ai,white_ai){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-player","current-player",2351550759),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"moves","moves",1117991476),lt.plugins.othello.model.starting_moves,new cljs.core.Keyword(null,"ai","ai",1013907354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",1013904361),white_ai,new cljs.core.Keyword(null,"b","b",1013904340),black_ai], null)], null);
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

lt.plugins.othello.model.score = (function score(model,player){return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__19574_SHARP_){return cljs.core._EQ_.call(null,p1__19574_SHARP_,player);
}),cljs.core.vals.call(null,cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476)], null)))));
});

lt.plugins.othello.model.winner_text = (function winner_text(model){return "";
});

lt.plugins.othello.model.ai_turn.call(null,lt.plugins.othello.model.try_move.call(null,lt.plugins.othello.model.make_model.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0], null)));

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

lt.plugins.othello.coordinate__GT_id = (function coordinate__GT_id(p__19577){var vec__19579 = p__19577;var x = cljs.core.nth.call(null,vec__19579,0,null);var y = cljs.core.nth.call(null,vec__19579,1,null);return [cljs.core.str("coord_"),cljs.core.str(x),cljs.core.str("_"),cljs.core.str(y)].join('');
});

lt.plugins.othello.get_square = (function get_square(coordinate){return lt.util.dom.$.call(null,[cljs.core.str("#"),cljs.core.str(lt.plugins.othello.coordinate__GT_id.call(null,coordinate))].join(''),document);
});

lt.plugins.othello.get_piece = (function get_piece(square){return lt.util.dom.$.call(null,".piece",square);
});

lt.plugins.othello.square = (function square(this$,x,y){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.square","span.square",4765193139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.othello.coordinate__GT_id.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.piece","div.piece",2038398659),""], null)], null));var seq__19586_19668 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"make-move","make-move",2233847746),x,y);
})], null)));var chunk__19587_19669 = null;var count__19588_19670 = 0;var i__19589_19671 = 0;while(true){
if((i__19589_19671 < count__19588_19670))
{var vec__19590_19672 = cljs.core._nth.call(null,chunk__19587_19669,i__19589_19671);var ev__8118__auto___19673 = cljs.core.nth.call(null,vec__19590_19672,0,null);var func__8119__auto___19674 = cljs.core.nth.call(null,vec__19590_19672,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___19673,func__8119__auto___19674);
{
var G__19675 = seq__19586_19668;
var G__19676 = chunk__19587_19669;
var G__19677 = count__19588_19670;
var G__19678 = (i__19589_19671 + 1);
seq__19586_19668 = G__19675;
chunk__19587_19669 = G__19676;
count__19588_19670 = G__19677;
i__19589_19671 = G__19678;
continue;
}
} else
{var temp__4092__auto___19679 = cljs.core.seq.call(null,seq__19586_19668);if(temp__4092__auto___19679)
{var seq__19586_19680__$1 = temp__4092__auto___19679;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19586_19680__$1))
{var c__7470__auto___19681 = cljs.core.chunk_first.call(null,seq__19586_19680__$1);{
var G__19682 = cljs.core.chunk_rest.call(null,seq__19586_19680__$1);
var G__19683 = c__7470__auto___19681;
var G__19684 = cljs.core.count.call(null,c__7470__auto___19681);
var G__19685 = 0;
seq__19586_19668 = G__19682;
chunk__19587_19669 = G__19683;
count__19588_19670 = G__19684;
i__19589_19671 = G__19685;
continue;
}
} else
{var vec__19591_19686 = cljs.core.first.call(null,seq__19586_19680__$1);var ev__8118__auto___19687 = cljs.core.nth.call(null,vec__19591_19686,0,null);var func__8119__auto___19688 = cljs.core.nth.call(null,vec__19591_19686,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___19687,func__8119__auto___19688);
{
var G__19689 = cljs.core.next.call(null,seq__19586_19680__$1);
var G__19690 = null;
var G__19691 = 0;
var G__19692 = 0;
seq__19586_19668 = G__19689;
chunk__19587_19669 = G__19690;
count__19588_19670 = G__19691;
i__19589_19671 = G__19692;
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

lt.plugins.othello.game_panel = (function game_panel(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",2038169049),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",2025644731),(function (){var iter__7439__auto__ = (function iter__19618(s__19619){return (new cljs.core.LazySeq(null,(function (){var s__19619__$1 = s__19619;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19619__$1);if(temp__4092__auto__)
{var s__19619__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19619__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__19619__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__19621 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__19620 = 0;while(true){
if((i__19620 < size__7438__auto__))
{var y = cljs.core._nth.call(null,c__7437__auto__,i__19620);cljs.core.chunk_append.call(null,b__19621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7439__auto__ = ((function (i__19620,y,c__7437__auto__,size__7438__auto__,b__19621,s__19619__$2,temp__4092__auto__){
return (function iter__19630(s__19631){return (new cljs.core.LazySeq(null,((function (i__19620,y,c__7437__auto__,size__7438__auto__,b__19621,s__19619__$2,temp__4092__auto__){
return (function (){var s__19631__$1 = s__19631;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__19631__$1);if(temp__4092__auto____$1)
{var s__19631__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19631__$2))
{var c__7437__auto____$1 = cljs.core.chunk_first.call(null,s__19631__$2);var size__7438__auto____$1 = cljs.core.count.call(null,c__7437__auto____$1);var b__19633 = cljs.core.chunk_buffer.call(null,size__7438__auto____$1);if((function (){var i__19632 = 0;while(true){
if((i__19632 < size__7438__auto____$1))
{var x = cljs.core._nth.call(null,c__7437__auto____$1,i__19632);cljs.core.chunk_append.call(null,b__19633,lt.plugins.othello.square.call(null,this$,x,y));
{
var G__19693 = (i__19632 + 1);
i__19632 = G__19693;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19633),iter__19630.call(null,cljs.core.chunk_rest.call(null,s__19631__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19633),null);
}
} else
{var x = cljs.core.first.call(null,s__19631__$2);return cljs.core.cons.call(null,lt.plugins.othello.square.call(null,this$,x,y),iter__19630.call(null,cljs.core.rest.call(null,s__19631__$2)));
}
} else
{return null;
}
break;
}
});})(i__19620,y,c__7437__auto__,size__7438__auto__,b__19621,s__19619__$2,temp__4092__auto__))
,null,null));
});})(i__19620,y,c__7437__auto__,size__7438__auto__,b__19621,s__19619__$2,temp__4092__auto__))
;return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null));
{
var G__19694 = (i__19620 + 1);
i__19620 = G__19694;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19621),iter__19618.call(null,cljs.core.chunk_rest.call(null,s__19619__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19621),null);
}
} else
{var y = cljs.core.first.call(null,s__19619__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7439__auto__ = ((function (y,s__19619__$2,temp__4092__auto__){
return (function iter__19634(s__19635){return (new cljs.core.LazySeq(null,((function (y,s__19619__$2,temp__4092__auto__){
return (function (){var s__19635__$1 = s__19635;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__19635__$1);if(temp__4092__auto____$1)
{var s__19635__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19635__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__19635__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__19637 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__19636 = 0;while(true){
if((i__19636 < size__7438__auto__))
{var x = cljs.core._nth.call(null,c__7437__auto__,i__19636);cljs.core.chunk_append.call(null,b__19637,lt.plugins.othello.square.call(null,this$,x,y));
{
var G__19695 = (i__19636 + 1);
i__19636 = G__19695;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19637),iter__19634.call(null,cljs.core.chunk_rest.call(null,s__19635__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19637),null);
}
} else
{var x = cljs.core.first.call(null,s__19635__$2);return cljs.core.cons.call(null,lt.plugins.othello.square.call(null,this$,x,y),iter__19634.call(null,cljs.core.rest.call(null,s__19635__$2)));
}
} else
{return null;
}
break;
}
});})(y,s__19619__$2,temp__4092__auto__))
,null,null));
});})(y,s__19619__$2,temp__4092__auto__))
;return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null),iter__19618.call(null,cljs.core.rest.call(null,s__19619__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#msg","p#msg",1118489696),""], null)], null));var seq__19638_19696 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__19639_19697 = null;var count__19640_19698 = 0;var i__19641_19699 = 0;while(true){
if((i__19641_19699 < count__19640_19698))
{var vec__19642_19700 = cljs.core._nth.call(null,chunk__19639_19697,i__19641_19699);var ev__8118__auto___19701 = cljs.core.nth.call(null,vec__19642_19700,0,null);var func__8119__auto___19702 = cljs.core.nth.call(null,vec__19642_19700,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___19701,func__8119__auto___19702);
{
var G__19703 = seq__19638_19696;
var G__19704 = chunk__19639_19697;
var G__19705 = count__19640_19698;
var G__19706 = (i__19641_19699 + 1);
seq__19638_19696 = G__19703;
chunk__19639_19697 = G__19704;
count__19640_19698 = G__19705;
i__19641_19699 = G__19706;
continue;
}
} else
{var temp__4092__auto___19707 = cljs.core.seq.call(null,seq__19638_19696);if(temp__4092__auto___19707)
{var seq__19638_19708__$1 = temp__4092__auto___19707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19638_19708__$1))
{var c__7470__auto___19709 = cljs.core.chunk_first.call(null,seq__19638_19708__$1);{
var G__19710 = cljs.core.chunk_rest.call(null,seq__19638_19708__$1);
var G__19711 = c__7470__auto___19709;
var G__19712 = cljs.core.count.call(null,c__7470__auto___19709);
var G__19713 = 0;
seq__19638_19696 = G__19710;
chunk__19639_19697 = G__19711;
count__19640_19698 = G__19712;
i__19641_19699 = G__19713;
continue;
}
} else
{var vec__19643_19714 = cljs.core.first.call(null,seq__19638_19708__$1);var ev__8118__auto___19715 = cljs.core.nth.call(null,vec__19643_19714,0,null);var func__8119__auto___19716 = cljs.core.nth.call(null,vec__19643_19714,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___19715,func__8119__auto___19716);
{
var G__19717 = cljs.core.next.call(null,seq__19638_19708__$1);
var G__19718 = null;
var G__19719 = 0;
var G__19720 = 0;
seq__19638_19696 = G__19717;
chunk__19639_19697 = G__19718;
count__19640_19698 = G__19719;
i__19641_19699 = G__19720;
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

lt.plugins.othello.set_piece = (function set_piece(pos,color){return lt.util.dom.add_class.call(null,lt.plugins.othello.get_piece_at_pos.call(null,pos),color);
});

lt.plugins.othello.reset_piece = (function reset_piece(piece){lt.util.dom.remove_class.call(null,piece,new cljs.core.Keyword(null,"w","w",1013904361));
lt.util.dom.remove_class.call(null,piece,new cljs.core.Keyword(null,"b","b",1013904340));
return lt.util.dom.remove_class.call(null,piece,new cljs.core.Keyword(null,"option","option",4298734567));
});

lt.plugins.othello.reset_pieces = (function reset_pieces(){return cljs.core.doall.call(null,cljs.core.map.call(null,lt.plugins.othello.reset_piece,lt.util.dom.$$.call(null,".piece",document)));
});

lt.plugins.othello.set_message = (function set_message(text){return lt.util.dom.$.call(null,"#msg").innerHTML = text;
});

lt.plugins.othello.refresh_graphics = (function refresh_graphics(){lt.plugins.othello.reset_pieces.call(null);
cljs.core.doall.call(null,(function (){var iter__7439__auto__ = (function iter__19656(s__19657){return (new cljs.core.LazySeq(null,(function (){var s__19657__$1 = s__19657;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19657__$1);if(temp__4092__auto__)
{var s__19657__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19657__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__19657__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__19659 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__19658 = 0;while(true){
if((i__19658 < size__7438__auto__))
{var vec__19662 = cljs.core._nth.call(null,c__7437__auto__,i__19658);var pos = cljs.core.nth.call(null,vec__19662,0,null);var color = cljs.core.nth.call(null,vec__19662,1,null);cljs.core.chunk_append.call(null,b__19659,lt.plugins.othello.set_piece.call(null,pos,color));
{
var G__19721 = (i__19658 + 1);
i__19658 = G__19721;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19659),iter__19656.call(null,cljs.core.chunk_rest.call(null,s__19657__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19659),null);
}
} else
{var vec__19663 = cljs.core.first.call(null,s__19657__$2);var pos = cljs.core.nth.call(null,vec__19663,0,null);var color = cljs.core.nth.call(null,vec__19663,1,null);return cljs.core.cons.call(null,lt.plugins.othello.set_piece.call(null,pos,color),iter__19656.call(null,cljs.core.rest.call(null,s__19657__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7439__auto__.call(null,lt.plugins.othello.model.get_board.call(null,cljs.core.deref.call(null,lt.plugins.othello.m)));
})());
if(lt.plugins.othello.model.humans_turn_QMARK_.call(null,cljs.core.deref.call(null,lt.plugins.othello.m)))
{cljs.core.doall.call(null,(function (){var iter__7439__auto__ = (function iter__19664(s__19665){return (new cljs.core.LazySeq(null,(function (){var s__19665__$1 = s__19665;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19665__$1);if(temp__4092__auto__)
{var s__19665__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19665__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__19665__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__19667 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__19666 = 0;while(true){
if((i__19666 < size__7438__auto__))
{var pos = cljs.core._nth.call(null,c__7437__auto__,i__19666);cljs.core.chunk_append.call(null,b__19667,lt.plugins.othello.set_piece.call(null,pos,new cljs.core.Keyword(null,"option","option",4298734567)));
{
var G__19722 = (i__19666 + 1);
i__19666 = G__19722;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19667),iter__19664.call(null,cljs.core.chunk_rest.call(null,s__19665__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19667),null);
}
} else
{var pos = cljs.core.first.call(null,s__19665__$2);return cljs.core.cons.call(null,lt.plugins.othello.set_piece.call(null,pos,new cljs.core.Keyword(null,"option","option",4298734567)),iter__19664.call(null,cljs.core.rest.call(null,s__19665__$2)));
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.othello","let-ai-move","lt.plugins.othello/let-ai-move",2308607587),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.othello.__BEH__let_ai_move,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ai-move","ai-move",4253392328),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),1000);

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

lt.plugins.othello.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___19723 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___19723))
{var ts_19724 = temp__4092__auto___19723;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_19724))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_19724);
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
lt.plugins.othello.refresh_graphics.call(null);
return lt.object.raise.call(null,lt.plugins.othello.game,new cljs.core.Keyword(null,"ai-move","ai-move",4253392328));
})], null));

}

//# sourceMappingURL=