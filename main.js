/*
                  Written by ghgltggamer
                  at : india , new delhi
                  timing : 15:56pm(noon 3:56pm)
                  date : 18/10/2023
*/


// source format

// api

const FOZ_DTX_CREATE_FORMAT = {
  
  format_to_text(text){
    var txt = text;
    
    var a = txt.replaceAll("~^$", "a");
    var b = a.replaceAll("~*&@#", "b");
    var c = b.replaceAll("~|$|", "c");
    var d = c.replaceAll("~?|>", "d");
    var e = d.replaceAll("~?|?", "e");
    var f = e.replaceAll("~($:/", "f");
    var g = f.replaceAll("~[{}]", "g");
    var h = g.replaceAll("~?:*/", "h");
    var i = h.replaceAll("~?-/", "i");
    var j = i.replaceAll("~>>//", "j");
    var k = j.replaceAll("~/[&^", "k");
    var l = k.replaceAll("~[[}", "l");
    var m = l.replaceAll("~[=}", "m");
    var n = m.replaceAll("~[#%}", "n");
    var o = n.replaceAll("~#%-", "o");
    var p = o.replaceAll("~%-[", "p");
    var q = p.replaceAll("~%$;[", "q");
    var r = q.replaceAll("~[{,/?", "r");
    var s = r.replaceAll("~#{=$>?-?-?", "s");
    var t = s.replaceAll("~#-$=?+?", "t");
    var u = t.replaceAll("~#+$=?+?", "u");
    var v = u.replaceAll("~#@;&", "v");
    var w = v.replaceAll("~@#&", "w");
    var x = w.replaceAll("~[%==?+$", "x");
    var y = x.replaceAll("~(+$", "y");
    var z = y.replaceAll("~=(+$", "z");
    var space = z.replaceAll("~|$%", " ");
    var A = space.replaceAll("~+(^$)", "A");
    var B = A.replaceAll("~+(*&@#", "B");
    var C = B.replaceAll("~+(|$|)", "C");
    var D = C.replaceAll("~+(?|>)", "D");
    var E = D.replaceAll("~+(?|?)", "E");
    var F = E.replaceAll("~+(($:/)", "F");
    var G = F.replaceAll("~+([{}])", "G");
    var H = G.replaceAll("~+(?:*/)", "H");
    var I = H.replaceAll("~+(?-/)", "I");
    var J = I.replaceAll("~+(>>//)", "J");
    var K = J.replaceAll("~+(/[&^)", "K");
    var L = K.replaceAll("~+([[})", "L");
    var M = L.replaceAll("~+([=})", "M");
    var N = M.replaceAll("~+([#%})", "N");
    var O = N.replaceAll("~+(#%-)", "O");
    var P = O.replaceAll("~+(%-)", "P");
    var Q = P.replaceAll("~+(%$;[)", "Q");
    var R = Q.replaceAll("~+([{,/?)", "R");
    var S = R.replaceAll("~+(#{=$>?-?-?)", "S");
    var T = S.replaceAll("~+(#-$=?+?)", "T");
    var U = T.replaceAll("~+(#+$=?+?)", "U");
    var V = U.replaceAll("~+(#@;&)", "V");
    var W = V.replaceAll("~+(@#&)", "W");
    var X = W.replaceAll("~+([%==?+$)", "X");
    var Y = X.replaceAll("~+((+$)", "Y");
    var Z = Y.replaceAll("~+(=(+$)", "Z");
    var _1 = Z.replaceAll("{&&!!", "1");
    var _2 = _1.replaceAll("{&&!+", "2");
    var _3 = _2.replaceAll("{&&!-++", "3");
    var _4 = _3.replaceAll("{&&!--++)*!+", "4");
    var _5 = _4.replaceAll("{&&()", "5");
    var _6 = _5.replaceAll("{&&(]*", "6");
    var _7 = _6.replaceAll("&&[]", "7");
    var _8 = _7.replaceAll("{&++", "8");
    var _9 = _8.replaceAll("{&&]]", "9");
    var _0 = _9.replaceAll("{&-*/+)", "0");
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return _0;
  },
  text_to_format(text){
    var txt = text;
    var a = txt.replaceAll("a", "~^$");
    var b = a.replaceAll("b", "~*&@#");
    var c = b.replaceAll("c", "~|$|");
    var d = c.replaceAll("d", "~?|>");
    var e = d.replaceAll("e", "~?|?");
    var f = e.replaceAll("f", "~($$:/");
    var g = f.replaceAll("g", "~[{}]");
    var h = g.replaceAll("h", "~?:*/");
    var i = h.replaceAll("i", "~?-/");
    var j = i.replaceAll("j", "~>>//");
    var k = j.replaceAll("k", "~/[&^");
    var l = k.replaceAll("l", "~[[}");
    var m = l.replaceAll("m", "~[=}");
    var n = m.replaceAll("n", "~[#%}");
    var o = n.replaceAll("o", "~#%-");
    var p = o.replaceAll("p", "~%-[");
    var q = p.replaceAll("q", "~%$;[");
    var r = q.replaceAll("r", "~[{,/?");
    var s = r.replaceAll("s", "~#{=$>?-?-?");
    var t = s.replaceAll("5", "~#-$=?+?");
    var u = t.replaceAll("u", "~#+$=?+?");
    var v = u.replaceAll("v", "~#@;&");
    var w = v.replaceAll("w", "~@#&");
    var x = w.replaceAll("x", "~[%==?+$");
    var y = x.replaceAll("y", "~(+$");
    var z = y.replaceAll("z", "~=(+$");
    var space = z.replaceAll(" ", "~|$%");
    var A = space.replaceAll("A", "~+(^$)");
    var B= A.replaceAll("B", "~+(*&@#");
    var C = B.replaceAll("C", "~+(|$|)");
    var D = C.replaceAll("D", "~+(?|>)");
    var E = D.replaceAll("E", "~+(?|?)");
    var F = E.replaceAll("F", "~+(($$:/)");
    var G = F.replaceAll("G", "~+([{}])");
    var H = G.replaceAll("H", "~+(?:*/)");
    var I = H.replaceAll("I", "~+(?-/)");
    var J = I.replaceAll("J", "~+(>>//)");
    var K = J.replaceAll("K", "~+(/[&^)");
    var L = K.replaceAll("L", "~+([[})");
    var M = L.replaceAll("M", "~+([=})");
    var N = M.replaceAll("N", "~+([#%})");
    var O = N.replaceAll("O", "~+(#%-)");
    var P = O.replaceAll("P", "~+(%-)");
    var Q = P.replaceAll("Q", "~+(%$;[)");
    var R = Q.replaceAll("R", "~+([{,/?)");
    var S = R.replaceAll("S", "~+(#{=$>?-?-?)");
    var T = S.replaceAll("T", "~+(#-$=?+?)");
    var U = T.replaceAll("U", "~+(#+$=?+?)");
    var V = U.replaceAll("V", "~+(#@;&)");
    var W = V.replaceAll("W", "~+(@#&)");
    var X = W.replaceAll("X", "~+([%==?+$)");
    var Y = X.replaceAll("Y", "~+((+$)");
    var Z = Y.replaceAll("Z", "~+(=(+$)");
    var _1 = Z.replaceAll("1", "{&&!!");
    var _2 = _1.replaceAll("2", "{&&!+");
    var _3 = _2.replaceAll("3", "{&&!-++");
    var _4 = _3.replaceAll("4", "{&&!--++)*!+");
    var _5 = _4.replaceAll("5", "{&&()");
    var _6 = _5.replaceAll("6", "{&&(]*");
    var _7 = _6.replaceAll("7", "&&[]");
    var _8 = _7.replaceAll("8", "{&++");
    var _9 = _8.replaceAll("9", "{&&]]");
    var _0 = _9.replaceAll("0", "{&-*/+)");
    
    
    
    return _0;
    
  }
  
}


/*



// EXAMPLE CODE : 20:10pm 18/10/2023 new delhi 



function con(){
  var text = document.getElementById("txt").value;
  
  var gets = FOZ_DTX_CREATE_FORMAT.format_to_text(text);
  
  document.getElementById("t").innerHTML = gets;
}


function con2() {
  var text = document.getElementById("txt").value;

  var gets = FOZ_DTX_CREATE_FORMAT.text_to_format(text);

  document.getElementById("t").innerHTML = gets;
} z
*/