/* skardela — daily colour grids, crossed words, and laser mirrors.
   idea after @utk09-ncl (utk09-ncl/skardela); clean-room implementation, no code copied.
   LICENSE.txt MIT, copyright ypaaaaaaaaaaaaa. */
(function () {
  "use strict";
  var DATA = {"latics":{"e":[{"n":5,"laser":{"r":0,"c":1,"dir":2},"monsters":[{"r":2,"c":2,"color":"any"}],"walls":[[3,1],[0,2]],"water":[],"prisms":[],"filters":[],"tray":0,"spin":false,"hide":false,"mirrors":[{"r":1,"c":1,"ori":3,"tray":false},{"r":1,"c":0,"ori":3,"tray":false},{"r":2,"c":0,"ori":0,"tray":false}]},{"n":5,"laser":{"r":0,"c":3,"dir":2},"monsters":[{"r":2,"c":2,"color":"any"}],"walls":[[4,0],[0,0]],"water":[],"prisms":[],"filters":[],"tray":0,"spin":false,"hide":false,"mirrors":[{"r":1,"c":3,"ori":1,"tray":false},{"r":1,"c":4,"ori":1,"tray":false},{"r":2,"c":4,"ori":0,"tray":false}]},{"n":5,"laser":{"r":3,"c":0,"dir":0},"monsters":[{"r":0,"c":3,"color":"any"}],"walls":[[2,3],[3,2]],"water":[],"prisms":[],"filters":[],"tray":0,"spin":false,"hide":false,"mirrors":[{"r":3,"c":1,"ori":3,"tray":false},{"r":1,"c":1,"ori":3,"tray":false},{"r":1,"c":3,"ori":2,"tray":false}]},{"n":5,"laser":{"r":1,"c":4,"dir":4},"monsters":[{"r":0,"c":1,"color":"any"}],"walls":[[4,4],[3,4]],"water":[],"prisms":[],"filters":[],"tray":0,"spin":false,"hide":false,"mirrors":[{"r":1,"c":3,"ori":3,"tray":false},{"r":2,"c":3,"ori":3,"tray":false},{"r":2,"c":1,"ori":2,"tray":false}]},{"n":5,"laser":{"r":0,"c":4,"dir":4},"monsters":[{"r":3,"c":4,"color":"any"}],"walls":[[2,2],[2,3]],"water":[],"prisms":[],"filters":[],"tray":0,"spin":false,"hide":false,"mirrors":[{"r":0,"c":3,"ori":3,"tray":false},{"r":1,"c":3,"ori":3,"tray":false},{"r":1,"c":4,"ori":1,"tray":false}]},{"n":5,"laser":{"r":4,"c":0,"dir":0},"monsters":[{"r":2,"c":0,"color":"any"}],"walls":[[2,2],[0,1]],"water":[],"prisms":[],"filters":[],"tray":0,"spin":false,"hide":false,"mirrors":[{"r":4,"c":1,"ori":3,"tray":false},{"r":2,"c":1,"ori":0,"tray":false}]},{"n":5,"laser":{"r":4,"c":3,"dir":6},"monsters":[{"r":4,"c":0,"color":"any"}],"walls":[[1,0],[2,1]],"water":[],"prisms":[],"filters":[],"tray":0,"spin":false,"hide":false,"mirrors":[{"r":2,"c":3,"ori":1,"tray":false},{"r":2,"c":2,"ori":3,"tray":false},{"r":4,"c":2,"ori":0,"tray":false}]},{"n":5,"laser":{"r":0,"c":4,"dir":4},"monsters":[{"r":3,"c":1,"color":"any"}],"walls":[[2,3],[3,0]],"water":[],"prisms":[],"filters":[],"tray":0,"spin":false,"hide":false,"mirrors":[{"r":0,"c":2,"ori":3,"tray":false},{"r":1,"c":2,"ori":3,"tray":false},{"r":1,"c":1,"ori":2,"tray":false}]}],"m":[{"n":7,"laser":{"r":5,"c":0,"dir":0},"monsters":[{"r":2,"c":5,"color":"any"}],"walls":[[6,6]],"water":[],"prisms":[],"filters":[],"tray":2,"spin":false,"hide":true,"solution":[{"r":5,"c":3,"ori":3},{"r":2,"c":3,"ori":3}],"mirrors":[]},{"n":7,"laser":{"r":2,"c":0,"dir":0},"monsters":[{"r":0,"c":4,"color":"any"}],"walls":[[1,6]],"water":[],"prisms":[],"filters":[],"tray":2,"spin":false,"hide":true,"solution":[{"r":2,"c":2,"ori":3},{"r":0,"c":2,"ori":3}],"mirrors":[]},{"n":7,"laser":{"r":1,"c":0,"dir":0},"monsters":[{"r":4,"c":0,"color":"any"}],"walls":[[3,4],[3,6],[5,6]],"water":[],"prisms":[],"filters":[],"tray":2,"spin":false,"hide":true,"solution":[{"r":1,"c":2,"ori":1},{"r":4,"c":2,"ori":3}],"mirrors":[]},{"n":7,"laser":{"r":0,"c":0,"dir":0},"monsters":[{"r":2,"c":5,"color":"any"}],"walls":[[0,6],[1,4],[1,6]],"water":[],"prisms":[],"filters":[],"tray":2,"spin":false,"hide":true,"solution":[{"r":0,"c":3,"ori":1},{"r":2,"c":3,"ori":1}],"mirrors":[]},{"n":7,"laser":{"r":6,"c":0,"dir":0},"monsters":[{"r":3,"c":5,"color":"any"}],"walls":[[0,3],[0,6],[1,6]],"water":[],"prisms":[],"filters":[],"tray":2,"spin":false,"hide":true,"solution":[{"r":6,"c":3,"ori":3},{"r":3,"c":3,"ori":3}],"mirrors":[]},{"n":7,"laser":{"r":6,"c":0,"dir":0},"monsters":[{"r":3,"c":1,"color":"any"}],"walls":[[0,6],[1,1],[1,3]],"water":[],"prisms":[],"filters":[],"tray":2,"spin":false,"hide":true,"solution":[{"r":6,"c":3,"ori":3},{"r":3,"c":3,"ori":1}],"mirrors":[]}],"h":[{"n":7,"laser":{"r":0,"c":2,"dir":0},"monsters":[{"r":2,"c":6,"color":"any"}],"walls":[[6,2],[4,3]],"water":[[1,3],[2,3],[3,3]],"prisms":[],"filters":[],"tray":0,"spin":true,"hide":true,"mirrors":[{"r":4,"c":4,"ori":1,"tray":false}],"_sol":{"dir":1,"mirrors":[{"r":4,"c":4,"ori":0}]}},{"n":7,"laser":{"r":3,"c":0,"dir":6},"monsters":[{"r":0,"c":4,"color":"blue"},{"r":6,"c":4,"color":"red"}],"walls":[[2,0],[4,0],[3,6]],"water":[],"prisms":[[3,3]],"filters":[],"tray":0,"spin":true,"hide":true,"mirrors":[{"r":1,"c":5,"ori":0,"tray":false},{"r":5,"c":5,"ori":0,"tray":false}],"_sol":{"dir":0,"mirrors":[{"r":1,"c":5,"ori":2},{"r":5,"c":5,"ori":2}]}},{"n":6,"laser":{"r":1,"c":0,"dir":6},"monsters":[{"r":4,"c":5,"color":"red"}],"walls":[[1,4]],"water":[],"prisms":[],"filters":[{"r":4,"c":3,"color":"red"}],"tray":0,"spin":true,"hide":true,"mirrors":[{"r":1,"c":1,"ori":0,"tray":false},{"r":4,"c":1,"ori":0,"tray":false}],"_sol":{"dir":0,"mirrors":[{"r":1,"c":1,"ori":1},{"r":4,"c":1,"ori":1}]}}]},"colour":{"e":[{"n":4,"sol":"1001001101101100","mask":"1011000000110011","givens":7},{"n":4,"sol":"0101010110101010","mask":"0010100001011110","givens":7},{"n":4,"sol":"1010010100111100","mask":"1100101100110000","givens":7},{"n":4,"sol":"0101011010011010","mask":"0001011001010110","givens":7},{"n":4,"sol":"0011011011001001","mask":"0010100100010111","givens":7},{"n":4,"sol":"0110110010010011","mask":"0001101010110100","givens":7},{"n":4,"sol":"1010011001011001","mask":"1110100001010001","givens":7},{"n":4,"sol":"1001101001100101","mask":"1000111001101000","givens":7}],"m":[{"n":6,"sol":"100110101010010101100110011001011001","mask":"001010001010010011000110101000010101","givens":14},{"n":6,"sol":"100101101010010101101010011010010101","mask":"100110100000100010010101000011101100","givens":14},{"n":6,"sol":"010110110100001011010101101010101001","mask":"000100100001010101000010110110010110","givens":14},{"n":6,"sol":"011010010101101100101010010011100101","mask":"011000000101011000010100011101100010","givens":14},{"n":6,"sol":"110010010101001011110100101010001101","mask":"000101010100000010001011101000110101","givens":14},{"n":6,"sol":"011001101100100110010011101100010011","mask":"011001011010000010000001111001000101","givens":14}],"h":[{"n":8,"sol":"1011010010010011011010011001011001101001010010111001011001101100","mask":"0011100010011101000010111001100100101001111001000110010100000000","givens":26},{"n":8,"sol":"0101011011001010001011010101001110110100011011001001001110101001","mask":"0000001001010100100110011000101011111100000001001101000111000110","givens":26},{"n":8,"sol":"0110010110101001010110101101010000101011100101010110101010010110","mask":"1010000011111011000110001000000001110001101010000100001011011010","givens":26},{"n":8,"sol":"1011001010011001011011000011001111001100011001101001001101001101","mask":"1010001001100001000011001110011100001001011011010100100001001100","givens":26},{"n":8,"sol":"0110100100110011110101000010101111010100001011011100101010010110","mask":"1000101000100010001001011010101001001010100110101111100001000100","givens":26},{"n":8,"sol":"1101001010010110011010010101010110101010101010100101010100101101","mask":"1000100001011100001000010011010001000001101000001100101111110011","givens":26}]},"guzzle":{"e":[[["CAT","A pet that meows"],["MAP","A drawing of roads and places"],["JAR","A glass pot for jam or coins"],["HAT","You wear it on your head"]],[["BOX","A container with straight sides"],["DOG","A pet that barks"],["TOP","The highest part"],["LOG","A thick cut of a tree"]],[["BED","You sleep in it"],["PEN","You write with it"],["WEB","A spider's net"],["KEY","It opens a lock"]],[["PIN","A thin pointed fastener"],["DIP","To lower something into a liquid"],["RIB","A curved bone in the chest"],["LID","The cover of a pot"]],[["SUN","The star we see by day"],["CUP","You drink from it"],["BUS","A big vehicle full of seats"],["MUD","Wet, soft earth"]],[["BAG","You carry things in it"],["TAP","A light touch, or a water faucet"],["FAN","It blows cool air"],["JAM","A sweet spread made from fruit"]],[["POT","You cook soup in it"],["FOX","A wild animal with a bushy tail"],["JOY","A feeling of great happiness"],["COW","A farm animal that gives milk"]],[["NET","Mesh that catches fish"],["LEG","You stand on it"],["HEN","A bird that lays eggs"],["RED","The colour of a ripe tomato"]]],"m":[[["PLATE","A flat dish you eat from"],["GRAPE","A small fruit that grows in bunches"],["FLAME","The bright part of a fire"],["CRANE","A tall machine that lifts"]],[["STONE","A small piece of rock"],["CLOWN","A comic performer in a circus"],["GLOBE","A round map of the world"],["FROST","Ice crystals on a cold morning"]],[["QUEEN","A woman who rules a country"],["WHEEL","A round part that turns on an axle"],["CHEEK","The side of a face"],["SWEET","The taste of sugar"]],[["PRIZE","Something you win"],["DRIFT","To float along without steering"],["CLICK","A short sharp sound"],["SKIRT","Clothing that hangs from the waist"]],[["TRUCK","A big vehicle that hauls loads"],["CRUSH","To press until it breaks"],["BLUSH","A warm red in the cheeks"],["FRUIT","A sweet food that grows on plants"]],[["CHART","A sheet of facts or a simple map"],["GLASS","A window, or a cup you can see through"],["STAMP","You stick it on a letter"],["WHALE","A huge animal that lives in the sea"]],[["BROOM","You sweep the floor with it"],["PROOF","Evidence that something is true"],["SPOOL","Thread wound into a roll"],["BLOOM","A flower opening"]],[["FRESH","Just made, or cool and clean"],["DRESS","A piece of clothing, or to put clothes on"],["CREST","The top of a wave or a hill"],["SHELF","A flat board that holds books"]]],"h":[[["HISTORY","The study of what already happened"],["VICTORY","A win"],["STATION","A place where trains stop"],["CAPTAIN","The person in charge of a ship"]],[["BALANCE","To stay steady"],["CARAVAN","A home that can be pulled along"],["PARADES","Walks held for a celebration"],["BANANAS","Curved yellow fruit"]],[["FORESTS","Large areas full of trees"],["SEVERAL","More than two, but not a crowd"],["SWEETER","More like sugar"],["CHEESES","Foods made from milk"]],[["CABINET","A cupboard with doors"],["HOLIDAY","A day off, or a trip away"],["RADIANT","Shining brightly"],["CAPITAL","The main city of a country"]],[["DEVOTED","Loyal and loving"],["REVOLVE","To turn in a circle"],["ALCOVES","Small recessed spaces in a wall"],["OCTOPUS","A sea animal with eight arms"]],[["LIBRARY","A building full of books"],["BARRIER","Something that blocks the way"],["CORRECT","Right, with no mistake"],["CARRIER","A person or firm that delivers"]],[["OUTSIDE","Not indoors"],["CONSOLE","A panel of controls"],["MISSING","Lost, not here"],["PASSAGE","A narrow way through"]],[["PATTERN","A design that repeats"],["WRITTEN","Put down in letters"],["SETTING","The place where a story happens"],["BATTLES","Fights between groups"]]]}};
  var DR = [0, 1, 1, 1, 0, -1, -1, -1];
  var DC = [1, 1, 0, -1, -1, -1, 0, 1];
  var normals = [[0, 1], [-1, 1], [1, 0], [1, 1]];
  var NAMES = { colour: "Colour Binary", guzzle: "Guzzle", latics: "Latics" };
  var DIFFS = { e: "Easy", m: "Medium", h: "Hard" };
  var STORE = "skardela-clean-1";
  var state = { type: "latics", diff: "e", practice: 0 };
  var live = null;
  var metrics = { cs: 48, gap: 5 };
  var actx = null;
  var tOrigin = 0;
  var tRunning = false;
  var tSec = 0;
  var clearArm = false;
  var readySent = false;

  function reflect(dir, ori) {
    var dc = DC[dir], dr = DR[dir];
    var nc = normals[ori][0], nr = normals[ori][1];
    var denom = nc * nc + nr * nr;
    var dot = dc * nc + dr * nr;
    var sc = Math.round(dc - (2 * dot / denom) * nc);
    var sr = Math.round(dr - (2 * dot / denom) * nr);
    var i;
    for (i = 0; i < 8; i++) if (DC[i] === sc && DR[i] === sr) return i;
    return dir;
  }
  function isDiag(dir) { return (dir & 1) === 1; }
  function verticalOnly(dir) {
    if (dir === 1 || dir === 3) return 2;
    if (dir === 5 || dir === 7) return 6;
    return dir;
  }
  function trace(level, mirrors, laserDir) {
    var n = level.n;
    var laser = level.laser;
    var dir0 = laserDir == null ? laser.dir : laserDir;
    var water = {};
    var walls = {};
    var i;
    for (i = 0; i < (level.water || []).length; i++) water[level.water[i][0] + "," + level.water[i][1]] = 1;
    for (i = 0; i < (level.walls || []).length; i++) walls[level.walls[i][0] + "," + level.walls[i][1]] = 1;
    var mirMap = {};
    for (i = 0; i < mirrors.length; i++) mirMap[mirrors[i].r + "," + mirrors[i].c] = mirrors[i].ori;
    var pris = {};
    for (i = 0; i < (level.prisms || []).length; i++) pris[level.prisms[i][0] + "," + level.prisms[i][1]] = 1;
    var filt = {};
    for (i = 0; i < (level.filters || []).length; i++) filt[level.filters[i].r + "," + level.filters[i].c] = level.filters[i].color;
    var mons = level.monsters || [];
    function monAt(r, c) {
      var k;
      for (k = 0; k < mons.length; k++) if (mons[k].r === r && mons[k].c === c) return mons[k];
      return null;
    }
    var polys = [];
    var hit = [];
    var reasons = [];
    var queue = [{ r: laser.r, c: laser.c, dir: dir0, color: "white", bend: null }];
    var guard = 0;
    while (queue.length && guard++ < 12) {
      var b0 = queue.shift();
      var r = b0.r, c = b0.c, dir = b0.dir, color = b0.color, bend = b0.bend;
      var path = [{ r: r, c: c }];
      var seen = {};
      var reason = "loop";
      var step;
      for (step = 0; step < 80; step++) {
        var key = r + "," + c + "," + dir + "," + color + "," + (bend == null ? "-" : bend);
        if (seen[key]) { reason = "loop"; break; }
        seen[key] = 1;
        var nr = r + DR[dir], nc = c + DC[dir];
        var inW = !!water[r + "," + c];
        if (inW && bend != null && isDiag(bend)) {
          var straightNextW = nr >= 0 && nc >= 0 && nr < n && nc < n && water[nr + "," + nc];
          if (!straightNextW) {
            dir = bend;
            bend = null;
            nr = r + DR[dir];
            nc = c + DC[dir];
          }
        } else if (inW && bend == null && isDiag(dir) && water[laser.r + "," + laser.c]) {
          var nextDry = !(nr >= 0 && nc >= 0 && nr < n && nc < n && water[nr + "," + nc]);
          if (nextDry) {
            dir = (dir + 4) & 7;
            continue;
          }
        }
        if (nr < 0 || nc < 0 || nr >= n || nc >= n) { reason = "edge"; break; }
        if (nr === laser.r && nc === laser.c) { reason = "laser"; break; }
        if (walls[nr + "," + nc]) { reason = "wall"; break; }
        var wasW = inW;
        r = nr;
        c = nc;
        path.push({ r: r, c: c });
        var nowW = !!water[r + "," + c];
        if (!wasW && nowW && isDiag(dir)) {
          bend = dir;
          dir = verticalOnly(dir);
        }
        var mon = monAt(r, c);
        if (mon) {
          var ok = mon.color === "any" || mon.color === color;
          if (ok && hit.indexOf(mon) < 0) hit.push(mon);
          reason = ok ? "monster" : "wrong";
          break;
        }
        if (mirMap[r + "," + c] != null) {
          dir = reflect(dir, mirMap[r + "," + c]);
          continue;
        }
        if (pris[r + "," + c]) {
          if (color === "white") {
            queue.push({ r: r, c: c, dir: (dir + 1) & 7, color: "red", bend: null });
            queue.push({ r: r, c: c, dir: (dir + 7) & 7, color: "blue", bend: null });
          } else if (color === "red") {
            queue.push({ r: r, c: c, dir: (dir + 1) & 7, color: "red", bend: null });
          } else {
            queue.push({ r: r, c: c, dir: (dir + 7) & 7, color: "blue", bend: null });
          }
          reason = "prism";
          break;
        }
        var f = filt[r + "," + c];
        if (f) {
          if (color === "white" || color === f) color = f;
          else { reason = "filter"; break; }
        }
      }
      polys.push({ color: color, path: path, reason: reason });
      reasons.push(reason);
    }
    var hitAll = mons.length > 0 && hit.length === mons.length;
    return { polys: polys, hitAll: hitAll, reasons: reasons };
  }

  function readStore() {
    try { return JSON.parse(localStorage.getItem(STORE)) || {}; }
    catch (e) { return {}; }
  }
  function writeStore(s) {
    try { localStorage.setItem(STORE, JSON.stringify(s)); } catch (e) {}
  }
  function dateKey(d) {
    var y = d.getFullYear(), m = d.getMonth() + 1, da = d.getDate();
    return y + "-" + (m < 10 ? "0" : "") + m + "-" + (da < 10 ? "0" : "") + da;
  }
  function dayOfYear(d) {
    var md = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var y = d.getFullYear();
    if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) md[2] = 29;
    var n = d.getDate(), i;
    for (i = 1; i <= d.getMonth(); i++) n += md[i];
    return n;
  }
  function fmt(s) {
    s = s | 0;
    var m = (s / 60) | 0;
    var ss = s % 60;
    return m + ":" + (ss < 10 ? "0" : "") + ss;
  }
  function elapsed() {
    if (!tRunning) return tSec;
    return tSec + (((Date.now() - tOrigin) / 1000) | 0);
  }
  function beginTimer() {
    tSec = 0;
    tOrigin = Date.now();
    tRunning = true;
    tick();
  }
  function stopTimer() {
    if (tRunning) tSec = elapsed();
    tRunning = false;
    tick();
  }
  function tick() {
    var el = document.getElementById("time");
    if (el) el.textContent = fmt(elapsed());
  }
  function pool() { return DATA[state.type][state.diff]; }
  function specIndex() {
    var list = pool();
    var base = (dayOfYear(new Date()) - 1) % list.length;
    return (base + (state.practice || 0)) % list.length;
  }
  function pid() {
    var kind = state.practice ? "p" + state.practice : "d";
    return state.type + "-" + state.diff + "-" + dateKey(new Date()) + "-" + kind;
  }
  function todaySolved(store) {
    var dk = dateKey(new Date());
    var n = 0;
    var types = ["colour", "guzzle", "latics"];
    var diffs = ["e", "m", "h"];
    var a, b;
    for (a = 0; a < types.length; a++) for (b = 0; b < diffs.length; b++) {
      var id = types[a] + "-" + diffs[b] + "-" + dk + "-d";
      if (store.solves && store.solves[id]) n++;
    }
    return n;
  }
  function streak(store) {
    var days = {};
    var i;
    var list = store.days || [];
    for (i = 0; i < list.length; i++) days[list[i]] = 1;
    var d = new Date();
    d = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    var key = dateKey(d);
    if (!days[key]) {
      d.setDate(d.getDate() - 1);
      if (!days[dateKey(d)]) return 0;
    }
    var n = 0;
    while (days[dateKey(d)]) {
      n++;
      d.setDate(d.getDate() - 1);
    }
    return n;
  }
  function noteSolve() {
    if (state.practice) return;
    var store = readStore();
    store.solves = store.solves || {};
    var id = pid();
    var sec = elapsed();
    if (!store.solves[id] || sec < store.solves[id].sec) store.solves[id] = { sec: sec };
    var dk = dateKey(new Date());
    store.days = store.days || [];
    if (store.days.indexOf(dk) < 0) store.days.push(dk);
    writeStore(store);
    fillPanel();
  }
  function ac() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!actx) actx = new AC();
    if (actx.state === "suspended") actx.resume();
    return actx;
  }
  function blip(freq, dur) {
    try {
      var ctx = ac();
      if (!ctx) return;
      var o = ctx.createOscillator();
      var g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.045, ctx.currentTime + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + dur + 0.02);
    } catch (e) {}
  }
  function chime() {
    blip(523, 0.12);
    setTimeout(function () { blip(659, 0.14); }, 100);
    setTimeout(function () { blip(784, 0.2); }, 200);
  }
  function setStatus(text) {
    var el = document.getElementById("status");
    if (el) el.textContent = text;
  }
  function stopEv(el) {
    var evs = ["pointerdown", "pointerup", "mousedown", "mouseup", "touchstart", "touchend", "touchmove", "click", "wheel"];
    var i;
    for (i = 0; i < evs.length; i++) el.addEventListener(evs[i], function (e) { e.stopPropagation(); });
  }

  function gridOk(g) {
    var n = g.length, half = n / 2, r, c, a, b;
    for (r = 0; r < n; r++) {
      a = 0; b = 0;
      for (c = 0; c < n; c++) {
        if (g[r][c] !== 0 && g[r][c] !== 1) return false;
        if (g[r][c] === 1) a++; else b++;
        if (c >= 2 && g[r][c] === g[r][c - 1] && g[r][c] === g[r][c - 2]) return false;
      }
      if (a !== half || b !== half) return false;
    }
    for (c = 0; c < n; c++) {
      a = 0; b = 0;
      for (r = 0; r < n; r++) {
        if (g[r][c] === 1) a++; else b++;
        if (r >= 2 && g[r][c] === g[r - 1][c] && g[r][c] === g[r - 2][c]) return false;
      }
      if (a !== half || b !== half) return false;
    }
    return true;
  }
  function canPlace(g, r, c, v) {
    var n = g.length, half = n / 2, i, a = 0;
    for (i = 0; i < n; i++) if (i !== c && g[r][i] === v) a++;
    if (a + 1 > half) return false;
    a = 0;
    for (i = 0; i < n; i++) if (i !== r && g[i][c] === v) a++;
    if (a + 1 > half) return false;
    var seq = [];
    for (i = 0; i < n; i++) seq.push(i === c ? v : g[r][i]);
    for (i = 0; i < n - 2; i++) if (seq[i] === v && seq[i + 1] === v && seq[i + 2] === v) return false;
    seq = [];
    for (i = 0; i < n; i++) seq.push(i === r ? v : g[i][c]);
    for (i = 0; i < n - 2; i++) if (seq[i] === v && seq[i + 1] === v && seq[i + 2] === v) return false;
    return true;
  }
  function violation(g) {
    var n = g.length, half = n / 2, r, c, red, blue;
    for (r = 0; r < n; r++) {
      red = 0; blue = 0;
      for (c = 0; c < n; c++) {
        if (g[r][c] === 1) red++;
        else if (g[r][c] === 0) blue++;
        if (c >= 2 && g[r][c] != null && g[r][c] === g[r][c - 1] && g[r][c] === g[r][c - 2]) return "Three in a row. Undo that run.";
      }
      if (red > half) return "Too much red in a row.";
      if (blue > half) return "Too much blue in a row.";
    }
    for (c = 0; c < n; c++) {
      red = 0; blue = 0;
      for (r = 0; r < n; r++) {
        if (g[r][c] === 1) red++;
        else if (g[r][c] === 0) blue++;
        if (r >= 2 && g[r][c] != null && g[r][c] === g[r - 1][c] && g[r][c] === g[r - 2][c]) return "Three in a column. Undo that run.";
      }
      if (red > half) return "Too much red in a column.";
      if (blue > half) return "Too much blue in a column.";
    }
    return "";
  }
  function newColour(spec) {
    var n = spec.n, g = [], given = [], r, c, k = 0;
    for (r = 0; r < n; r++) {
      g[r] = [];
      given[r] = [];
      for (c = 0; c < n; c++) {
        given[r][c] = spec.mask[k] === "1";
        g[r][c] = given[r][c] ? +spec.sol[k] : null;
        k++;
      }
    }
    return { kind: "colour", n: n, g: g, given: given, undo: [], hints: 0, won: false };
  }
  function colourStatus(rt) {
    if (rt.won) return "Solved in " + fmt(elapsed()) + ".";
    var bad = violation(rt.g);
    if (bad) return bad;
    return "Tap: red, blue, empty. A pearl dot is given.";
  }
  function paintColour(rt) {
    var board = document.getElementById("board");
    board.className = rt.won ? "won" : "";
    board.innerHTML = "";
    var cells = document.createElement("div");
    cells.id = "cells";
    var r, c;
    for (r = 0; r < rt.n; r++) for (c = 0; c < rt.n; c++) {
      var b = document.createElement("button");
      b.type = "button";
      var v = rt.g[r][c];
      b.className = "ccell" + (v === 1 ? " red" : v === 0 ? " blue" : "") + (rt.given[r][c] ? " given" : v != null ? " mine" : "");
      b.setAttribute("aria-label", "Row " + (r + 1) + " column " + (c + 1) + (v === 1 ? " red" : v === 0 ? " blue" : " empty"));
      b.dataset.r = String(r);
      b.dataset.c = String(c);
      cells.appendChild(b);
    }
    board.appendChild(cells);
    setStatus(colourStatus(rt));
    var tools = document.getElementById("tools");
    tools.innerHTML = "";
    tools.style.display = "flex";
    var undo = document.createElement("button");
    undo.type = "button";
    undo.id = "undo";
    undo.textContent = "Undo";
    var hint = document.createElement("button");
    hint.type = "button";
    hint.id = "hint";
    hint.textContent = "Hint" + (rt.hints ? " " + rt.hints : "");
    tools.appendChild(undo);
    tools.appendChild(hint);
    undo.addEventListener("click", function () {
      if (!rt.undo.length || rt.won) return;
      var u = rt.undo.pop();
      rt.g[u.r][u.c] = u.prev;
      blip(300, 0.05);
      paintColour(rt);
    });
    hint.addEventListener("click", function () {
      if (rt.won) return;
      var r, c, found = null, why = "";
      for (r = 0; r < rt.n && !found; r++) for (c = 0; c < rt.n; c++) {
        if (rt.g[r][c] != null) continue;
        var a0 = canPlace(rt.g, r, c, 0);
        var a1 = canPlace(rt.g, r, c, 1);
        if (a0 && !a1) { found = { r: r, c: c, v: 0 }; why = "Blue is the only colour the rules allow here."; break; }
        if (a1 && !a0) { found = { r: r, c: c, v: 1 }; why = "Red is the only colour the rules allow here."; break; }
        if (!a0 && !a1) { setStatus("This grid breaks a rule. Undo."); return; }
      }
      if (!found) { setStatus("Nothing is forced yet."); return; }
      rt.undo.push({ r: found.r, c: found.c, prev: null });
      rt.g[found.r][found.c] = found.v;
      rt.hints++;
      if (gridOk(rt.g)) {
        rt.won = true;
        stopTimer();
        noteSolve();
        chime();
      }
      blip(480, 0.07);
      paintColour(rt);
      if (!rt.won) setStatus(why + " Hint " + rt.hints + ".");
    });
    cells.addEventListener("click", function (e) {
      var t = e.target.closest("button");
      if (!t || rt.won) return;
      var r = +t.dataset.r, c = +t.dataset.c;
      if (rt.given[r][c]) { blip(140, 0.04); return; }
      var prev = rt.g[r][c];
      var next = prev == null ? 1 : prev === 1 ? 0 : null;
      rt.undo.push({ r: r, c: c, prev: prev });
      rt.g[r][c] = next;
      blip(next == null ? 220 : 420, 0.05);
      if (gridOk(rt.g)) {
        rt.won = true;
        stopTimer();
        noteSolve();
        chime();
      }
      paintColour(rt);
    });
    document.getElementById("extra").innerHTML = "";
    document.getElementById("extra").style.display = "none";
    document.getElementById("keys").innerHTML = "";
    document.getElementById("keys").style.display = "none";
    layout(rt.n);
  }

  function newGuzzle(spec) {
    var words = [], i;
    for (i = 0; i < spec.length; i++) words.push({ w: spec[i][0], clue: spec[i][1] });
    var L = words[0].w.length;
    var mid = (L - 1) >> 1;
    var map = {};
    function add(r, c, wi, li) {
      var k = r + "," + c;
      if (!map[k]) map[k] = { r: r, c: c, ch: words[wi].w[li], wis: [], start: null, val: "", state: "", bad: {}, inn: {}, fixed: false };
      var cell = map[k];
      cell.wis.push(wi);
      cell.ch = words[wi].w[li];
      if (li === 0) cell.start = wi;
      return cell;
    }
    for (i = 0; i < L; i++) {
      add(mid, i, 0, i);
      add(i, mid, 1, i);
      add(i, i, 2, i);
      add(L - 1 - i, i, 3, i);
    }
    var center = map[mid + "," + mid];
    center.fixed = true;
    center.val = center.ch;
    center.state = "ok";
    var cells = [];
    for (var k in map) cells.push(map[k]);
    return { kind: "guzzle", L: L, mid: mid, words: words, map: map, cells: cells, mode: null, mistakes: 0, sel: null, won: false, fired: {} };
  }
  var ARROWS = ["→", "↓", "↘", "↗"];
  var DIRNAME = ["Across", "Down", "From the top left", "From the bottom left"];
  function paintGuzzle(rt) {
    var board = document.getElementById("board");
    board.className = rt.won ? "won" : "";
    board.innerHTML = "";
    var cells = document.createElement("div");
    cells.id = "cells";
    var i;
    for (i = 0; i < rt.cells.length; i++) {
      var cell = rt.cells[i];
      var b = document.createElement("button");
      b.type = "button";
      b.className = "gcell " + (cell.state || "") + (rt.sel === cell ? " sel" : "");
      b.style.gridRow = String(cell.r + 1);
      b.style.gridColumn = String(cell.c + 1);
      b.dataset.k = cell.r + "," + cell.c;
      b.textContent = cell.val || "";
      if (cell.start != null) {
        var ar = document.createElement("span");
        ar.className = "arrow";
        ar.textContent = ARROWS[cell.start];
        b.appendChild(ar);
      }
      b.setAttribute("aria-label", "Row " + (cell.r + 1) + " column " + (cell.c + 1) + (cell.val ? " " + cell.val : " empty"));
      cells.appendChild(b);
    }
    board.appendChild(cells);
    var extra = document.getElementById("extra");
    extra.innerHTML = "";
    extra.style.display = "block";
    for (i = 0; i < 4; i++) {
      var p = document.createElement("p");
      p.className = "clue";
      if (rt.sel && rt.sel.wis.indexOf(i) >= 0) p.className = "clue on";
      p.textContent = ARROWS[i] + " " + DIRNAME[i] + ": " + rt.words[i].clue;
      extra.appendChild(p);
    }
    var tools = document.getElementById("tools");
    tools.innerHTML = "";
    tools.style.display = "none";
    var keys = document.getElementById("keys");
    keys.innerHTML = "";
    keys.style.display = "flex";
    if (!rt.mode) {
      setStatus(rt.mistakes + " mistakes. Select a mode to start.");
      var modes = document.createElement("div");
      modes.className = "modes";
      var withB = document.createElement("button");
      withB.type = "button";
      withB.textContent = "With bank";
      var noB = document.createElement("button");
      noB.type = "button";
      noB.textContent = "Without bank";
      modes.appendChild(withB);
      modes.appendChild(noB);
      keys.appendChild(modes);
      withB.addEventListener("click", function () { rt.mode = "bank"; beginTimer(); blip(500, 0.06); paintGuzzle(rt); });
      noB.addEventListener("click", function () { rt.mode = "alpha"; beginTimer(); blip(500, 0.06); paintGuzzle(rt); });
    } else {
      setStatus(rt.won ? "Solved in " + fmt(elapsed()) + " · " + rt.mistakes + " mistakes." : rt.mistakes + " mistakes.");
      var rows = rt.mode === "alpha" ? ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"] : [bankRow(rt)];
      for (i = 0; i < rows.length; i++) {
        var row = document.createElement("div");
        row.className = "keyrow";
        var letters = rows[i];
        var j;
        for (j = 0; j < letters.length; j++) {
          var ch = letters[j];
          if (ch === " ") continue;
          var kb = document.createElement("button");
          kb.type = "button";
          kb.dataset.ch = ch;
          kb.textContent = ch;
          if (rt.sel && !rt.sel.fixed && rt.sel.state !== "ok") {
            if (rt.sel.bad[ch]) kb.className = "mark-out";
            else if (rt.sel.inn[ch]) kb.className = "mark-in";
          }
          if (rt.mode === "bank" && rt.need && rt.need[ch] > 1) {
            var sup = document.createElement("span");
            sup.className = "count";
            sup.textContent = String(rt.need[ch]);
            kb.appendChild(sup);
          }
          row.appendChild(kb);
        }
        if (i === rows.length - 1) {
          var ub = document.createElement("button");
          ub.type = "button";
          ub.className = "wide";
          ub.textContent = "Undo";
          ub.addEventListener("click", function () { undoGuzzle(rt); });
          row.appendChild(ub);
        }
        keys.appendChild(row);
      }
      keys.onclick = function (e) {
        var t = e.target.closest("button");
        if (!t || !t.dataset.ch || rt.won) return;
        tryLetter(rt, t.dataset.ch);
      };
    }
    layout(rt.L);
    cells.onclick = function (e) {
      var t = e.target.closest("button");
      if (!t) return;
      rt.sel = rt.map[t.dataset.k];
      paintGuzzle(rt);
    };
  }
  function bankRow(rt) {
    var need = {}, i;
    for (i = 0; i < rt.cells.length; i++) {
      var cell = rt.cells[i];
      if (cell.state === "ok") continue;
      need[cell.ch] = (need[cell.ch] || 0) + 1;
    }
    rt.need = need;
    return Object.keys(need).sort().join("");
  }
  function tryLetter(rt, ch) {
    var cell = rt.sel;
    if (!cell || cell.fixed || cell.state === "ok") {
      if (!cell) setStatus("Tap a square first.");
      return;
    }
    var wi = cell.wis[0];
    var word = rt.words[wi].w;
    if (cell.bad[ch] || (cell.inn[ch] && ch !== cell.ch)) {
      cell.val = ch;
      cell.state = cell.inn[ch] ? "in" : "out";
      paintGuzzle(rt);
      return;
    }
    rt.undo = rt.undo || [];
    rt.undo.push({ k: cell.r + "," + cell.c, tried: ch, val: cell.val, state: cell.state, mistakes: rt.mistakes, bad: cell.bad[ch] ? 1 : 0, inn: cell.inn[ch] ? 1 : 0 });
    if (ch === cell.ch) {
      cell.val = ch;
      cell.state = "ok";
      blip(640, 0.07);
      var nxt = nextOpen(rt, cell, wi);
      if (nxt) rt.sel = nxt;
    } else if (word.indexOf(ch) >= 0) {
      cell.inn[ch] = 1;
      cell.val = ch;
      cell.state = "in";
      rt.mistakes++;
      blip(200, 0.08);
    } else {
      cell.bad[ch] = 1;
      cell.val = ch;
      cell.state = "out";
      rt.mistakes++;
      blip(160, 0.08);
    }
    if (guzzleWon(rt)) {
      rt.won = true;
      stopTimer();
      noteSolve();
      chime();
    }
    paintGuzzle(rt);
  }
  function nextOpen(rt, cell, wi) {
    var L = rt.L, mid = rt.mid, i, r, c;
    var seq = [];
    for (i = 0; i < L; i++) {
      if (wi === 0) { r = mid; c = i; }
      else if (wi === 1) { r = i; c = mid; }
      else if (wi === 2) { r = i; c = i; }
      else { r = L - 1 - i; c = i; }
      seq.push(rt.map[r + "," + c]);
    }
    var at = seq.indexOf(cell);
    for (i = at + 1; i < seq.length; i++) if (seq[i] && seq[i].state !== "ok") return seq[i];
    for (i = 0; i < seq.length; i++) if (seq[i] && seq[i].state !== "ok") return seq[i];
    return cell;
  }
  function guzzleWon(rt) {
    var i;
    for (i = 0; i < rt.cells.length; i++) if (rt.cells[i].state !== "ok") return false;
    return true;
  }
  function undoGuzzle(rt) {
    if (!rt.undo || !rt.undo.length || rt.won) return;
    var u = rt.undo.pop();
    var cell = rt.map[u.k];
    if (u.tried) {
      if (!u.bad) delete cell.bad[u.tried];
      if (!u.inn) delete cell.inn[u.tried];
    }
    cell.val = u.val;
    cell.state = u.state;
    rt.mistakes = u.mistakes;
    rt.sel = cell;
    paintGuzzle(rt);
  }

  function newLatics(spec) {
    var mirrors = [], i;
    for (i = 0; i < (spec.mirrors || []).length; i++) {
      var m = spec.mirrors[i];
      mirrors.push({ r: m.r, c: m.c, ori: m.ori, fromTray: false, turns: 0 });
    }
    return {
      kind: "latics", spec: spec, n: spec.n, mirrors: mirrors, tray: spec.tray || 0,
      dir: spec.laser.dir, misses: 0, showBeam: !spec.hide, won: false, undo: [], seen: {}
    };
  }
  function mirrorAt(rt, r, c) {
    var i;
    for (i = 0; i < rt.mirrors.length; i++) if (rt.mirrors[i].r === r && rt.mirrors[i].c === c) return rt.mirrors[i];
    return null;
  }
  function occupied(rt, r, c) {
    var s = rt.spec;
    if (s.laser.r === r && s.laser.c === c) return true;
    if (mirrorAt(rt, r, c)) return true;
    var i;
    for (i = 0; i < s.monsters.length; i++) if (s.monsters[i].r === r && s.monsters[i].c === c) return true;
    for (i = 0; i < (s.walls || []).length; i++) if (s.walls[i][0] === r && s.walls[i][1] === c) return true;
    for (i = 0; i < (s.prisms || []).length; i++) if (s.prisms[i][0] === r && s.prisms[i][1] === c) return true;
    for (i = 0; i < (s.filters || []).length; i++) if (s.filters[i].r === r && s.filters[i].c === c) return true;
    return false;
  }
  function beamSentence(result, nMon) {
    if (result.hitAll) return nMon > 1 ? "Every monster is hit." : "The beam hits the monster.";
    var rs = result.reasons.join(" ");
    if (rs.indexOf("wrong") >= 0) return "The colour does not match that monster.";
    if (rs.indexOf("laser") >= 0) return "The beam comes back to the laser.";
    if (rs.indexOf("wall") >= 0) return "The beam hits a wall.";
    if (rs.indexOf("filter") >= 0) return "The filter stops this colour.";
    if (rs.indexOf("edge") >= 0) return "The beam leaves the board.";
    if (rs.indexOf("loop") >= 0) return "The beam runs in a loop.";
    return "The beam stops.";
  }
  function runTrace(rt) {
    return trace(rt.spec, rt.mirrors, rt.dir);
  }
  function paintLatics(rt) {
    var board = document.getElementById("board");
    board.className = rt.won ? "won" : "";
    board.innerHTML = "";
    var cells = document.createElement("div");
    cells.id = "cells";
    var s = rt.spec, r, c;
    var water = {}, walls = {}, pris = {}, filt = {}, mons = {};
    for (var i = 0; i < (s.water || []).length; i++) water[s.water[i][0] + "," + s.water[i][1]] = 1;
    for (i = 0; i < (s.walls || []).length; i++) walls[s.walls[i][0] + "," + s.walls[i][1]] = 1;
    for (i = 0; i < (s.prisms || []).length; i++) pris[s.prisms[i][0] + "," + s.prisms[i][1]] = 1;
    for (i = 0; i < (s.filters || []).length; i++) filt[s.filters[i].r + "," + s.filters[i].c] = s.filters[i].color;
    for (i = 0; i < s.monsters.length; i++) mons[s.monsters[i].r + "," + s.monsters[i].c] = s.monsters[i];
    for (r = 0; r < rt.n; r++) for (c = 0; c < rt.n; c++) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "cell";
      b.dataset.r = String(r);
      b.dataset.c = String(c);
      var key = r + "," + c;
      var mir = mirrorAt(rt, r, c);
      var label = "Row " + (r + 1) + " column " + (c + 1);
      if (s.laser.r === r && s.laser.c === c) {
        var laser = document.createElement("div");
        laser.className = "laser";
        laser.style.transform = "rotate(" + (rt.dir * 45) + "deg)";
        var nose = document.createElement("i");
        laser.appendChild(nose);
        b.appendChild(laser);
        label += ", laser";
      } else if (mir) {
        var bar = document.createElement("div");
        bar.className = "mirror o" + mir.ori;
        b.appendChild(bar);
        label += ", mirror";
      } else if (mons[key]) {
        b.appendChild(monsterNode(mons[key].color));
        label += ", monster";
      } else if (walls[key]) {
        var w = document.createElement("div");
        w.className = "wall";
        b.appendChild(w);
        label += ", wall";
      } else if (pris[key]) {
        var pr = document.createElement("div");
        pr.className = "prism";
        b.appendChild(pr);
        label += ", prism";
      } else if (filt[key]) {
        var fl = document.createElement("div");
        fl.className = "filter " + filt[key];
        b.appendChild(fl);
        label += ", " + filt[key] + " filter";
      } else if (water[key]) {
        var wa = document.createElement("div");
        wa.className = "water";
        b.appendChild(wa);
        label += ", water";
      } else label += ", empty";
      b.setAttribute("aria-label", label);
      cells.appendChild(b);
    }
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = "beam";
    cells.appendChild(svg);
    board.appendChild(cells);
    var tools = document.getElementById("tools");
    tools.innerHTML = "";
    if (s.hide) {
      tools.style.display = "flex";
      var fire = document.createElement("button");
      fire.type = "button";
      fire.id = "fire";
      fire.textContent = "Fire";
      tools.appendChild(fire);
      fire.addEventListener("click", function () { doFire(rt); });
    } else tools.style.display = "none";
    document.getElementById("extra").innerHTML = "";
    document.getElementById("extra").style.display = "none";
    document.getElementById("keys").innerHTML = "";
    document.getElementById("keys").style.display = "none";
    layout(rt.n);
    paintBeam(rt, svg);
    cells.addEventListener("click", function (e) {
      var t = e.target.closest("button");
      if (!t || rt.won) return;
      tapLatics(rt, +t.dataset.r, +t.dataset.c);
    });
  }
  function monsterNode(color) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 32 32");
    svg.setAttribute("class", "mon");
    var body = color === "red" ? "#ff6b5a" : color === "blue" ? "#6aa2ff" : "#3ddea0";
    function sh(name, attrs) {
      var n = document.createElementNS("http://www.w3.org/2000/svg", name);
      var k;
      for (k in attrs) n.setAttribute(k, attrs[k]);
      svg.appendChild(n);
    }
    sh("ellipse", { cx: "16", cy: "18", rx: "9", ry: "8", fill: body });
    sh("circle", { cx: "12.5", cy: "17", r: "1.6", fill: "#142018" });
    sh("circle", { cx: "19.5", cy: "17", r: "1.6", fill: "#142018" });
    sh("path", { d: "M12 21.2 Q16 23.5 20 21.2", fill: "none", stroke: "#142018", "stroke-width": "1.2", "stroke-linecap": "round" });
    sh("path", { d: "M10 11 Q11.2 16 13.5 12.5", fill: "none", stroke: body, "stroke-width": "2", "stroke-linecap": "round" });
    sh("path", { d: "M22 11 Q20.8 16 18.5 12.5", fill: "none", stroke: body, "stroke-width": "2", "stroke-linecap": "round" });
    return svg;
  }
  function paintBeam(rt, svg) {
    if (!svg) svg = document.getElementById("beam");
    if (!svg) return;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var size = rt.n * metrics.cs + (rt.n - 1) * metrics.gap;
    svg.setAttribute("width", String(size));
    svg.setAttribute("height", String(size));
    var result = null;
    if (!rt.spec.hide || rt.showBeam) {
      result = runTrace(rt);
      var pi;
      for (pi = 0; pi < result.polys.length; pi++) {
        var poly = result.polys[pi];
        var pts = [];
        var k;
        for (k = 0; k < poly.path.length; k++) {
          var p = poly.path[k];
          var x = p.c * (metrics.cs + metrics.gap) + metrics.cs / 2;
          var y = p.r * (metrics.cs + metrics.gap) + metrics.cs / 2;
          pts.push(x + "," + y);
        }
        var stroke = poly.color === "red" ? "#ff5a45" : poly.color === "blue" ? "#5aa2ff" : "#ffc56d";
        var a, b;
        for (a = 0; a < 2; a++) {
          var pl = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
          pl.setAttribute("points", pts.join(" "));
          pl.setAttribute("fill", "none");
          pl.setAttribute("stroke", stroke);
          pl.setAttribute("stroke-width", a === 0 ? String(Math.max(6, metrics.cs * 0.16)) : String(Math.max(2.5, metrics.cs * 0.07)));
          pl.setAttribute("stroke-linecap", "round");
          pl.setAttribute("stroke-linejoin", "round");
          pl.setAttribute("stroke-opacity", a === 0 ? "0.35" : "1");
          svg.appendChild(pl);
        }
      }
    }
    var msg;
    if (rt.won) msg = "Solved in " + fmt(elapsed()) + (rt.spec.hide ? " · " + rt.misses + " misses." : ".");
    else if (result) msg = beamSentence(result, rt.spec.monsters.length);
    else msg = (rt.tray ? "Tray " + rt.tray + ". " : "") + "Place mirrors, then fire.";
    if (rt.spec.hide && !rt.won) msg = rt.misses + " misses · " + msg;
    if (!rt.spec.hide && rt.tray) msg = "Tray " + rt.tray + ". " + msg;
    setStatus(msg);
    return result;
  }
  function snap(rt) {
    return JSON.stringify({ mirrors: rt.mirrors, tray: rt.tray, dir: rt.dir, misses: rt.misses, showBeam: rt.showBeam });
  }
  function pushUndo(rt) { rt.undo.push(snap(rt)); if (rt.undo.length > 40) rt.undo.shift(); }
  function tapLatics(rt, r, c) {
    var s = rt.spec;
    var mir = mirrorAt(rt, r, c);
    if (mir) {
      pushUndo(rt);
      mir.ori = (mir.ori + 1) % 4;
      mir.turns = (mir.turns || 0) + 1;
      if (mir.fromTray && mir.turns >= 4) {
        rt.mirrors.splice(rt.mirrors.indexOf(mir), 1);
        rt.tray++;
      }
      blip(380, 0.05);
      afterEdit(rt);
      return;
    }
    if (s.spin && s.laser.r === r && s.laser.c === c) {
      pushUndo(rt);
      rt.dir = (rt.dir + 1) & 7;
      blip(440, 0.05);
      afterEdit(rt);
      return;
    }
    if (!occupied(rt, r, c) && rt.tray > 0) {
      pushUndo(rt);
      rt.mirrors.push({ r: r, c: c, ori: 0, fromTray: true, turns: 0 });
      rt.tray--;
      blip(460, 0.05);
      afterEdit(rt);
    }
  }
  function afterEdit(rt) {
    if (rt.spec.hide) rt.showBeam = false;
    paintLatics(rt);
    if (!rt.spec.hide) {
      var result = runTrace(rt);
      if (result.hitAll) winLatics(rt);
    }
  }
  function stateKey(rt) {
    var bits = [rt.dir, rt.tray];
    var ms = rt.mirrors.slice().sort(function (a, b) { return a.r - b.r || a.c - b.c || a.ori - b.ori; });
    var i;
    for (i = 0; i < ms.length; i++) bits.push(ms[i].r, ms[i].c, ms[i].ori);
    return bits.join(".");
  }
  function doFire(rt) {
    if (rt.won) return;
    rt.showBeam = true;
    var result = runTrace(rt);
    paintLatics(rt);
    if (result.hitAll) { winLatics(rt); return; }
    var key = stateKey(rt);
    if (!rt.seen[key]) {
      rt.seen[key] = 1;
      rt.misses++;
      blip(150, 0.09);
      paintLatics(rt);
    }
  }
  function winLatics(rt) {
    if (rt.won) return;
    rt.won = true;
    rt.showBeam = true;
    stopTimer();
    noteSolve();
    chime();
    paintLatics(rt);
  }
  function undoLive() {
    if (!live || live.won) return;
    if (live.kind === "latics" && live.undo.length) {
      var raw = JSON.parse(live.undo.pop());
      live.mirrors = raw.mirrors;
      live.tray = raw.tray;
      live.dir = raw.dir;
      live.misses = raw.misses;
      live.showBeam = raw.showBeam;
      paintLatics(live);
    } else if (live.kind === "guzzle") undoGuzzle(live);
    else if (live.kind === "colour" && live.undo.length) {
      var u = live.undo.pop();
      live.g[u.r][u.c] = u.prev;
      paintColour(live);
    }
  }

  function layout(n) {
    var play = document.getElementById("play");
    var used = 0;
    var ids = ["status", "tools", "extra", "keys"];
    var i;
    for (i = 0; i < ids.length; i++) {
      var node = document.getElementById(ids[i]);
      if (node && node.style.display !== "none") used += node.offsetHeight;
    }
    var w = play.clientWidth || 360;
    var h = (play.clientHeight || 420) - used - 8;
    if (h < 64) h = 64;
    var gap = n >= 7 ? 3 : 5;
    var cs = Math.floor(Math.min((w - 24 - gap * (n - 1)) / n, (h - gap * (n - 1)) / n));
    if (cs > 78) cs = 78;
    if (cs < 16) cs = 16;
    metrics.cs = cs;
    metrics.gap = gap;
    var root = document.documentElement;
    root.style.setProperty("--cell", cs + "px");
    root.style.setProperty("--gap", gap + "px");
    root.style.setProperty("--n", String(n));
  }
  function header() {
    document.getElementById("pname").textContent = NAMES[state.type];
    var num = dayOfYear(new Date());
    document.getElementById("pmeta").textContent = DIFFS[state.diff] + (state.practice ? " · practice" : " · #" + num);
  }
  function renderAll() {
    header();
    var spec = pool()[specIndex()];
    if (state.type === "colour") {
      live = newColour(spec);
      beginTimer();
      paintColour(live);
    } else if (state.type === "guzzle") {
      live = newGuzzle(spec);
      tRunning = false;
      tSec = 0;
      tick();
      paintGuzzle(live);
    } else {
      live = newLatics(spec);
      beginTimer();
      paintLatics(live);
    }
  }
  function rulesText() {
    if (state.type === "colour") {
      return [
        "Make every square red or blue.",
        "Each row and each column has the same number of red squares and blue squares.",
        "Three squares of the same colour never sit next to each other.",
        "A pearl dot is given. You cannot change it. A small square marks a colour you placed.",
        "Tap cycles red, blue, then empty. Hint fills one square the rules already decide."
      ];
    }
    if (state.type === "guzzle") {
      return [
        "Four words of the same length cross at the centre letter. The centre is given.",
        "Arrows mark the start of each word: across, down, and both diagonals.",
        "With bank, the keys are only letters still needed. A count means more than one square needs that letter.",
        "Without bank, the keys are A to Z.",
        "Green is correct. Gold means the word has that letter in another square. A dim key is not in this word.",
        "A wrong letter adds a mistake the first time you try it in that square."
      ];
    }
    return [
      "Turn the mirrors so the laser hits every monster.",
      "Tap a mirror to turn it 45°. The angle in matches the angle out. A beam that runs along a mirror keeps going.",
      "Walls stop the beam. It also stops if it leaves the board or comes back to the laser.",
      "Easy shows the beam the whole time.",
      "Medium and hard: tap an empty square to place a mirror from the tray, then Fire. A new plan that misses adds one miss. A tray mirror returns to the tray on the fourth turn.",
      "Hard: tap the laser to turn it. Water straightens a diagonal beam, then restores that diagonal when the beam leaves. A prism splits white light — red bends 45° clockwise, blue the other way. A red filter lets only red through, and white becomes red. A plain monster takes any colour; a red or blue monster needs that colour."
    ];
  }
  function fillPanel() {
    var store = readStore();
    document.getElementById("todayline").textContent = "Today " + todaySolved(store) + " of 9 · streak " + streak(store);
    var when = new Date();
    var label = when.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
    document.getElementById("dateline").textContent = label + " · same puzzles all day.";
    var rules = document.getElementById("rules");
    rules.innerHTML = "";
    var lines = rulesText();
    var i;
    for (i = 0; i < lines.length; i++) {
      var p = document.createElement("p");
      p.textContent = lines[i];
      rules.appendChild(p);
    }
    var types = document.querySelectorAll("#types button");
    for (i = 0; i < types.length; i++) types[i].className = types[i].dataset.type === state.type ? "on" : "";
    var diffs = document.querySelectorAll("#diffs button");
    for (i = 0; i < diffs.length; i++) diffs[i].className = diffs[i].dataset.diff === state.diff ? "on" : "";
    var themes = document.querySelectorAll("#themes button");
    var cur = document.documentElement.getAttribute("data-theme") || "dark";
    for (i = 0; i < themes.length; i++) themes[i].className = themes[i].dataset.theme === cur ? "on" : "";
  }
  function setTheme(name) {
    document.documentElement.setAttribute("data-theme", name);
    var store = readStore();
    store.theme = name;
    writeStore(store);
    fillPanel();
  }
  function bind() {
    var corner = document.getElementById("corner");
    var panel = document.getElementById("panel");
    stopEv(corner);
    stopEv(panel);
    corner.addEventListener("click", function () {
      var on = document.documentElement.classList.toggle("gb-ui-open");
      corner.setAttribute("aria-expanded", on ? "true" : "false");
      corner.setAttribute("aria-label", on ? "Hide controls" : "Show controls");
    });
    document.getElementById("restart").addEventListener("click", function (e) {
      e.stopPropagation();
      renderAll();
      blip(280, 0.05);
    });
    document.getElementById("types").addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      state.type = b.dataset.type;
      state.practice = 0;
      renderAll();
    });
    document.getElementById("diffs").addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      state.diff = b.dataset.diff;
      state.practice = 0;
      renderAll();
    });
    document.getElementById("another").addEventListener("click", function () {
      state.practice = (state.practice || 0) + 1;
      renderAll();
    });
    document.getElementById("themes").addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      setTheme(b.dataset.theme);
    });
    document.getElementById("clear").addEventListener("click", function () {
      if (!clearArm) {
        clearArm = true;
        this.textContent = "Tap again to clear";
        return;
      }
      clearArm = false;
      this.textContent = "Clear stats";
      var theme = document.documentElement.getAttribute("data-theme");
      writeStore({ theme: theme });
      fillPanel();
    });
    document.getElementById("undoall").addEventListener("click", function () { undoLive(); });
    window.addEventListener("resize", function () {
      if (!live) return;
      var n = live.n || live.L;
      layout(n);
      if (live.kind === "latics") paintBeam(live);
    });
    document.addEventListener("keydown", function (e) {
      if (!live || live.kind !== "guzzle" || !live.mode || live.won) return;
      var k = (e.key || "").toUpperCase();
      if (k.length === 1 && k >= "A" && k <= "Z") tryLetter(live, k);
    });
  }
  function sendReady(n) {
    if (readySent) return;
    if (window.__gbSandbox && window.__gbSandbox.ready) {
      readySent = true;
      try { window.__gbSandbox.ready(); } catch (e) {}
      return;
    }
    if (n < 40) requestAnimationFrame(function () { sendReady(n + 1); });
  }
  function boot() {
    var store = readStore();
    if (store.theme === "light" || store.theme === "dark") {
      document.documentElement.setAttribute("data-theme", store.theme);
    }
    bind();
    renderAll();
    fillPanel();
    requestAnimationFrame(function () { sendReady(0); });
    setInterval(tick, 400);
  }
  if (typeof document === "undefined") {
    globalThis.__SK = { trace: trace, reflect: reflect, data: DATA, gridOk: gridOk };
  } else {
    boot();
  }
})();
