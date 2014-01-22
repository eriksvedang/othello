if(!lt.util.load.provided_QMARK_('lt.plugins.othello.model')) {
goog.provide('lt.plugins.othello.model');
goog.require('cljs.core');

lt.plugins.othello.model.make_model = (function make_model(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-player","current-player",2351550759),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"moves","moves",1117991476),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,3], null),new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,4], null),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,3], null),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4,4], null),new cljs.core.Keyword(null,"w","w",1013904361)], true, false)], null);
});

lt.plugins.othello.model.get_board = (function get_board(model){return new cljs.core.Keyword(null,"moves","moves",1117991476).cljs$core$IFn$_invoke$arity$1(model);
});

lt.plugins.othello.model.other_player = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"w","w",1013904361)], null);

lt.plugins.othello.model.can_make_move_at_QMARK_ = (function can_make_move_at_QMARK_(model,pos){return cljs.core.not.call(null,cljs.core.get_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null)));
});

lt.plugins.othello.model.place_move = (function place_move(model,pos){var current_player = new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(model);return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",1117991476),pos], null),current_player),new cljs.core.Keyword(null,"current-player","current-player",2351550759),lt.plugins.othello.model.other_player.call(null,current_player));
});

lt.plugins.othello.model.move = (function move(model,p__12938){var vec__12940 = p__12938;var x = cljs.core.nth.call(null,vec__12940,0,null);var y = cljs.core.nth.call(null,vec__12940,1,null);var pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);if(lt.plugins.othello.model.can_make_move_at_QMARK_.call(null,model,pos))
{return lt.plugins.othello.model.place_move.call(null,model,pos);
} else
{return model;
}
});

lt.plugins.othello.model.get_board.call(null,lt.plugins.othello.model.move.call(null,lt.plugins.othello.model.move.call(null,lt.plugins.othello.model.make_model.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,4], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,4], null)));

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

lt.plugins.othello.coordinate__GT_id = (function coordinate__GT_id(p__14646){var vec__14648 = p__14646;var x = cljs.core.nth.call(null,vec__14648,0,null);var y = cljs.core.nth.call(null,vec__14648,1,null);return [cljs.core.str("coord_"),cljs.core.str(((10 * x) + y))].join('');
});

lt.plugins.othello.get_square = (function get_square(coordinate){return cljs.core.first.call(null,lt.util.dom.$$.call(null,[cljs.core.str("#"),cljs.core.str(lt.plugins.othello.coordinate__GT_id.call(null,coordinate))].join(''),document));
});

lt.plugins.othello.get_piece = (function get_piece(square){return cljs.core.first.call(null,lt.util.dom.$$.call(null,".piece",square));
});

lt.plugins.othello.square = (function square(this$,x,y){var e__8081__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.square","span.square",4765193139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),lt.plugins.othello.coordinate__GT_id.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.piece","div.piece",2038398659),""], null)], null));var seq__14655_14729 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"make-move","make-move",2233847746),x,y);
})], null)));var chunk__14656_14730 = null;var count__14657_14731 = 0;var i__14658_14732 = 0;while(true){
if((i__14658_14732 < count__14657_14731))
{var vec__14659_14733 = cljs.core._nth.call(null,chunk__14656_14730,i__14658_14732);var ev__8082__auto___14734 = cljs.core.nth.call(null,vec__14659_14733,0,null);var func__8083__auto___14735 = cljs.core.nth.call(null,vec__14659_14733,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___14734,func__8083__auto___14735);
{
var G__14736 = seq__14655_14729;
var G__14737 = chunk__14656_14730;
var G__14738 = count__14657_14731;
var G__14739 = (i__14658_14732 + 1);
seq__14655_14729 = G__14736;
chunk__14656_14730 = G__14737;
count__14657_14731 = G__14738;
i__14658_14732 = G__14739;
continue;
}
} else
{var temp__4092__auto___14740 = cljs.core.seq.call(null,seq__14655_14729);if(temp__4092__auto___14740)
{var seq__14655_14741__$1 = temp__4092__auto___14740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14655_14741__$1))
{var c__7470__auto___14742 = cljs.core.chunk_first.call(null,seq__14655_14741__$1);{
var G__14743 = cljs.core.chunk_rest.call(null,seq__14655_14741__$1);
var G__14744 = c__7470__auto___14742;
var G__14745 = cljs.core.count.call(null,c__7470__auto___14742);
var G__14746 = 0;
seq__14655_14729 = G__14743;
chunk__14656_14730 = G__14744;
count__14657_14731 = G__14745;
i__14658_14732 = G__14746;
continue;
}
} else
{var vec__14660_14747 = cljs.core.first.call(null,seq__14655_14741__$1);var ev__8082__auto___14748 = cljs.core.nth.call(null,vec__14660_14747,0,null);var func__8083__auto___14749 = cljs.core.nth.call(null,vec__14660_14747,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___14748,func__8083__auto___14749);
{
var G__14750 = cljs.core.next.call(null,seq__14655_14741__$1);
var G__14751 = null;
var G__14752 = 0;
var G__14753 = 0;
seq__14655_14729 = G__14750;
chunk__14656_14730 = G__14751;
count__14657_14731 = G__14752;
i__14658_14732 = G__14753;
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

lt.plugins.othello.game_panel = (function game_panel(this$){var e__8081__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),lt.plugins.othello.panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",2025644731),(function (){var iter__7439__auto__ = (function iter__14687(s__14688){return (new cljs.core.LazySeq(null,(function (){var s__14688__$1 = s__14688;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14688__$1);if(temp__4092__auto__)
{var s__14688__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14688__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__14688__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__14690 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__14689 = 0;while(true){
if((i__14689 < size__7438__auto__))
{var y = cljs.core._nth.call(null,c__7437__auto__,i__14689);cljs.core.chunk_append.call(null,b__14690,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7439__auto__ = ((function (i__14689,y,c__7437__auto__,size__7438__auto__,b__14690,s__14688__$2,temp__4092__auto__){
return (function iter__14699(s__14700){return (new cljs.core.LazySeq(null,((function (i__14689,y,c__7437__auto__,size__7438__auto__,b__14690,s__14688__$2,temp__4092__auto__){
return (function (){var s__14700__$1 = s__14700;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14700__$1);if(temp__4092__auto____$1)
{var s__14700__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14700__$2))
{var c__7437__auto____$1 = cljs.core.chunk_first.call(null,s__14700__$2);var size__7438__auto____$1 = cljs.core.count.call(null,c__7437__auto____$1);var b__14702 = cljs.core.chunk_buffer.call(null,size__7438__auto____$1);if((function (){var i__14701 = 0;while(true){
if((i__14701 < size__7438__auto____$1))
{var x = cljs.core._nth.call(null,c__7437__auto____$1,i__14701);cljs.core.chunk_append.call(null,b__14702,lt.plugins.othello.square.call(null,this$,x,y));
{
var G__14754 = (i__14701 + 1);
i__14701 = G__14754;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14702),iter__14699.call(null,cljs.core.chunk_rest.call(null,s__14700__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14702),null);
}
} else
{var x = cljs.core.first.call(null,s__14700__$2);return cljs.core.cons.call(null,lt.plugins.othello.square.call(null,this$,x,y),iter__14699.call(null,cljs.core.rest.call(null,s__14700__$2)));
}
} else
{return null;
}
break;
}
});})(i__14689,y,c__7437__auto__,size__7438__auto__,b__14690,s__14688__$2,temp__4092__auto__))
,null,null));
});})(i__14689,y,c__7437__auto__,size__7438__auto__,b__14690,s__14688__$2,temp__4092__auto__))
;return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null));
{
var G__14755 = (i__14689 + 1);
i__14689 = G__14755;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14690),iter__14687.call(null,cljs.core.chunk_rest.call(null,s__14688__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14690),null);
}
} else
{var y = cljs.core.first.call(null,s__14688__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var iter__7439__auto__ = ((function (y,s__14688__$2,temp__4092__auto__){
return (function iter__14703(s__14704){return (new cljs.core.LazySeq(null,((function (y,s__14688__$2,temp__4092__auto__){
return (function (){var s__14704__$1 = s__14704;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14704__$1);if(temp__4092__auto____$1)
{var s__14704__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14704__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__14704__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__14706 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__14705 = 0;while(true){
if((i__14705 < size__7438__auto__))
{var x = cljs.core._nth.call(null,c__7437__auto__,i__14705);cljs.core.chunk_append.call(null,b__14706,lt.plugins.othello.square.call(null,this$,x,y));
{
var G__14756 = (i__14705 + 1);
i__14705 = G__14756;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14706),iter__14703.call(null,cljs.core.chunk_rest.call(null,s__14704__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14706),null);
}
} else
{var x = cljs.core.first.call(null,s__14704__$2);return cljs.core.cons.call(null,lt.plugins.othello.square.call(null,this$,x,y),iter__14703.call(null,cljs.core.rest.call(null,s__14704__$2)));
}
} else
{return null;
}
break;
}
});})(y,s__14688__$2,temp__4092__auto__))
,null,null));
});})(y,s__14688__$2,temp__4092__auto__))
;return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null),iter__14687.call(null,cljs.core.rest.call(null,s__14688__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7439__auto__.call(null,cljs.core.range.call(null,8));
})()], null)], null));var seq__14707_14757 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__14708_14758 = null;var count__14709_14759 = 0;var i__14710_14760 = 0;while(true){
if((i__14710_14760 < count__14709_14759))
{var vec__14711_14761 = cljs.core._nth.call(null,chunk__14708_14758,i__14710_14760);var ev__8082__auto___14762 = cljs.core.nth.call(null,vec__14711_14761,0,null);var func__8083__auto___14763 = cljs.core.nth.call(null,vec__14711_14761,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___14762,func__8083__auto___14763);
{
var G__14764 = seq__14707_14757;
var G__14765 = chunk__14708_14758;
var G__14766 = count__14709_14759;
var G__14767 = (i__14710_14760 + 1);
seq__14707_14757 = G__14764;
chunk__14708_14758 = G__14765;
count__14709_14759 = G__14766;
i__14710_14760 = G__14767;
continue;
}
} else
{var temp__4092__auto___14768 = cljs.core.seq.call(null,seq__14707_14757);if(temp__4092__auto___14768)
{var seq__14707_14769__$1 = temp__4092__auto___14768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14707_14769__$1))
{var c__7470__auto___14770 = cljs.core.chunk_first.call(null,seq__14707_14769__$1);{
var G__14771 = cljs.core.chunk_rest.call(null,seq__14707_14769__$1);
var G__14772 = c__7470__auto___14770;
var G__14773 = cljs.core.count.call(null,c__7470__auto___14770);
var G__14774 = 0;
seq__14707_14757 = G__14771;
chunk__14708_14758 = G__14772;
count__14709_14759 = G__14773;
i__14710_14760 = G__14774;
continue;
}
} else
{var vec__14712_14775 = cljs.core.first.call(null,seq__14707_14769__$1);var ev__8082__auto___14776 = cljs.core.nth.call(null,vec__14712_14775,0,null);var func__8083__auto___14777 = cljs.core.nth.call(null,vec__14712_14775,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___14776,func__8083__auto___14777);
{
var G__14778 = cljs.core.next.call(null,seq__14707_14769__$1);
var G__14779 = null;
var G__14780 = 0;
var G__14781 = 0;
seq__14707_14757 = G__14778;
chunk__14708_14758 = G__14779;
count__14709_14759 = G__14780;
i__14710_14760 = G__14781;
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
return cljs.core.doall.call(null,(function (){var iter__7439__auto__ = (function iter__14721(s__14722){return (new cljs.core.LazySeq(null,(function (){var s__14722__$1 = s__14722;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14722__$1);if(temp__4092__auto__)
{var s__14722__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14722__$2))
{var c__7437__auto__ = cljs.core.chunk_first.call(null,s__14722__$2);var size__7438__auto__ = cljs.core.count.call(null,c__7437__auto__);var b__14724 = cljs.core.chunk_buffer.call(null,size__7438__auto__);if((function (){var i__14723 = 0;while(true){
if((i__14723 < size__7438__auto__))
{var vec__14727 = cljs.core._nth.call(null,c__7437__auto__,i__14723);var pos = cljs.core.nth.call(null,vec__14727,0,null);var color = cljs.core.nth.call(null,vec__14727,1,null);cljs.core.chunk_append.call(null,b__14724,lt.plugins.othello.set_piece.call(null,pos,color));
{
var G__14782 = (i__14723 + 1);
i__14723 = G__14782;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14724),iter__14721.call(null,cljs.core.chunk_rest.call(null,s__14722__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14724),null);
}
} else
{var vec__14728 = cljs.core.first.call(null,s__14722__$2);var pos = cljs.core.nth.call(null,vec__14728,0,null);var color = cljs.core.nth.call(null,vec__14728,1,null);return cljs.core.cons.call(null,lt.plugins.othello.set_piece.call(null,pos,color),iter__14721.call(null,cljs.core.rest.call(null,s__14722__$2)));
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

lt.plugins.othello.__BEH__on_make_move = (function __BEH__on_make_move(this$,x,y){cljs.core.swap_BANG_.call(null,lt.plugins.othello.m,lt.plugins.othello.model.move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
lt.plugins.othello.refresh_graphics.call(null);
return lt.objs.console.log.call(null,[cljs.core.str("move at ["),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y),cljs.core.str("]")].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.othello","on-make-move","lt.plugins.othello/on-make-move",803390497),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.othello.__BEH__on_make_move,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"make-move","make-move",2233847746),null], null), null));

lt.plugins.othello.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___14783 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___14783))
{var ts_14784 = temp__4092__auto___14783;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_14784))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_14784);
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