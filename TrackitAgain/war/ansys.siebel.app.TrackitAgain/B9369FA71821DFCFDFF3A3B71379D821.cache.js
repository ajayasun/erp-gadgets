(function(){
var $gwt_version = "2.1.1";
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var $strongName = 'B9369FA71821DFCFDFF3A3B71379D821';
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
$stats && $stats({moduleName:'ansys.siebel.app.TrackitAgain',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});
var _;
function nullMethod(){
}

function Object_0(){
}

_ = Object_0.prototype = {};
_.equals$ = function equals(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_0(){
  return this.$H || (this.$H = ++sNextHashId);
}
;
_.typeMarker$ = nullMethod;
_.castableTypeMap$ = {};
function Gadget(){
}

_ = Gadget.prototype = new Object_0;
_.castableTypeMap$ = {};
function TrackitAgain(){
}

_ = TrackitAgain.prototype = new Gadget;
_.castableTypeMap$ = {};
function TrackitAgain$1_0(){
}

function TrackitAgain$1(){
}

_ = TrackitAgain$1_0.prototype = TrackitAgain$1.prototype = new Object_0;
_.castableTypeMap$ = {3:1, 6:1};
function TrackitAgainGadgetImpl_0(){
  var btnTrackit, lblContent, lblDescription, lblTitle, richTextArea, rootPanel, textBox, textBox_1, beforeIndex, beforeIndex_0, beforeIndex_1, beforeIndex_2, beforeIndex_3, beforeIndex_4, beforeIndex_5;
  rootPanel = ($clinit_144() , get_0());
  btnTrackit = new Button_1;
  $addDomHandler(btnTrackit, new TrackitAgain$1_0, ($clinit_31() , $clinit_31() , TYPE));
  $removeFromParent(btnTrackit);
  beforeIndex = rootPanel.children_0.size;
  rootPanel.setWidgetPositionImpl(btnTrackit, 46, 251);
  $insert(rootPanel, btnTrackit, rootPanel.element, beforeIndex);
  textBox = new TextBox_0;
  $removeFromParent(textBox);
  beforeIndex_0 = rootPanel.children_0.size;
  rootPanel.setWidgetPositionImpl(textBox, 159, 49);
  $insert(rootPanel, textBox, rootPanel.element, beforeIndex_0);
  textBox_1 = new TextBox_0;
  $removeFromParent(textBox_1);
  beforeIndex_1 = rootPanel.children_0.size;
  rootPanel.setWidgetPositionImpl(textBox_1, 159, 92);
  $insert(rootPanel, textBox_1, rootPanel.element, beforeIndex_1);
  textBox_1.element.style['width'] = '243px';
  textBox_1.element.style['height'] = '13px';
  richTextArea = new RichTextArea_0;
  $removeFromParent(richTextArea);
  beforeIndex_2 = rootPanel.children_0.size;
  rootPanel.setWidgetPositionImpl(richTextArea, 159, 123);
  $insert(rootPanel, richTextArea, rootPanel.element, beforeIndex_2);
  lblTitle = new Label_1('Title');
  $removeFromParent(lblTitle);
  beforeIndex_3 = rootPanel.children_0.size;
  rootPanel.setWidgetPositionImpl(lblTitle, 50, 59);
  $insert(rootPanel, lblTitle, rootPanel.element, beforeIndex_3);
  lblDescription = new Label_1('Description');
  $removeFromParent(lblDescription);
  beforeIndex_4 = rootPanel.children_0.size;
  rootPanel.setWidgetPositionImpl(lblDescription, 50, 102);
  $insert(rootPanel, lblDescription, rootPanel.element, beforeIndex_4);
  lblContent = new Label_1('Content');
  $removeFromParent(lblContent);
  beforeIndex_5 = rootPanel.children_0.size;
  rootPanel.setWidgetPositionImpl(lblContent, 46, 191);
  $insert(rootPanel, lblContent, rootPanel.element, beforeIndex_5);
}

function TrackitAgainGadgetImpl(){
}

_ = TrackitAgainGadgetImpl_0.prototype = TrackitAgainGadgetImpl.prototype = new TrackitAgain;
_.castableTypeMap$ = {};
function $setStackTrace(stackTrace){
  var c, copy, i;
  copy = initDim(_3Ljava_lang_StackTraceElement_2_classLit, {22:1}, 25, stackTrace.length, 0);
  for (i = 0 , c = stackTrace.length; i < c; ++i) {
    if (!stackTrace[i]) {
      throw new NullPointerException_0;
    }
    copy[i] = stackTrace[i];
  }
}

function Throwable(){
}

_ = Throwable.prototype = new Object_0;
_.castableTypeMap$ = {7:1, 22:1};
function Exception(){
}

_ = Exception.prototype = new Throwable;
_.castableTypeMap$ = {7:1, 22:1};
function RuntimeException_2(){
  $fillInStackTrace();
}

function RuntimeException(){
}

_ = RuntimeException.prototype = new Exception;
_.castableTypeMap$ = {2:1, 7:1, 22:1};
function JavaScriptException_0(e){
  $fillInStackTrace();
  this.e = e;
  $createStackTrace(this);
}

function JavaScriptException(){
}

_ = JavaScriptException_0.prototype = JavaScriptException.prototype = new RuntimeException;
_.castableTypeMap$ = {2:1, 7:1, 22:1};
_.e = null;
function equals__devirtual$(this$static, other){
  return this$static.typeMarker$ == nullMethod || this$static.castableTypeMap$ && !!this$static.castableTypeMap$[1]?this$static.equals$(other):this$static === other;
}

function hashCode__devirtual$(this$static){
  return this$static.typeMarker$ == nullMethod || this$static.castableTypeMap$ && !!this$static.castableTypeMap$[1]?this$static.hashCode$():this$static.$H || (this$static.$H = ++sNextHashId);
}

function Scheduler(){
}

_ = Scheduler.prototype = new Object_0;
_.castableTypeMap$ = {};
function enter(){
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_16() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    try {
      return entry0(jsFunction, this, arguments);
    }
     catch (e) {
      throw e;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, arguments_0){
  var initialEntry;
  initialEntry = enter();
  try {
    return jsFunction.apply(thisObj, arguments_0);
  }
   finally {
    initialEntry && $flushFinallyCommands(($clinit_16() , INSTANCE));
    --entryDepth;
  }
}

var entryDepth = 0, sNextHashId = 0;
function $clinit_16(){
  $clinit_16 = nullMethod;
  INSTANCE = new SchedulerImpl_0;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl_0(){
}

function push(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var $e0, i, j, t;
  for (i = 0 , j = tasks.length; i < j; ++i) {
    t = tasks[i];
    try {
      t[1]?t[0].nullMethod() && (rescheduled = push(rescheduled, t)):($doAddNow(t[0].this$0, t[0].val$type, t[0].val$handler) , undefined);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, 2))
        throw $e0;
    }
  }
  return rescheduled;
}

function SchedulerImpl(){
}

_ = SchedulerImpl_0.prototype = SchedulerImpl.prototype = new Scheduler;
_.castableTypeMap$ = {};
_.entryCommands = null;
_.finallyCommands = null;
var INSTANCE;
function extractNameFromToString(fnToString){
  var index, start, toReturn;
  toReturn = '';
  fnToString = $trim(fnToString);
  index = fnToString.indexOf('(');
  if (index != -1) {
    start = fnToString.indexOf('function') == 0?8:0;
    toReturn = $trim(fnToString.substr(start, index - start));
  }
  return toReturn.length > 0?toReturn:'anonymous';
}

function $collect(this$static){
  var seen = {};
  var toReturn = [];
  var callee = arguments.callee.caller.caller;
  while (callee) {
    var name_0 = this$static.extractName(callee.toString());
    toReturn.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return toReturn;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
  return toReturn;
}

function $createStackTrace(e){
  var i, j, stack, stackTrace;
  stack = (instanceOfJso(e.e)?dynamicCastJso(e.e):null , []);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, {22:1}, 25, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = new StackTraceElement_0(stack[i]);
  }
  $setStackTrace(stackTrace);
}

function $fillInStackTrace(){
  var i, j, stack, stackTrace;
  stack = $collect(new StackTraceCreator$Collector_0);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, {22:1}, 25, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = new StackTraceElement_0(stack[i]);
  }
  $setStackTrace(stackTrace);
}

function StackTraceCreator$Collector_0(){
}

function StackTraceCreator$Collector(){
}

_ = StackTraceCreator$Collector_0.prototype = StackTraceCreator$Collector.prototype = new Object_0;
_.extractName = function extractName(fnToString){
  return extractNameFromToString(fnToString);
}
;
_.castableTypeMap$ = {};
function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $createElement(doc, tagName){
  var container, elem;
  if (tagName.indexOf(':') != -1) {
    container = (!doc.__gwt_container && (doc.__gwt_container = doc.createElement('div')) , doc.__gwt_container);
    container.innerHTML = '<' + tagName + '/>' || '';
    elem = $getFirstChildElement(container);
    container.removeChild(elem);
    return elem;
  }
  return doc.createElement(tagName);
}

function $isOrHasChild(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  return parent_0 === child || parent_0.contains(child);
}

var currentEventTarget = null;
function $getBodyOffsetLeft(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientLeft;
}

function $getBodyOffsetTop(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientTop;
}

function GwtEvent(){
}

_ = GwtEvent.prototype = new Object_0;
_.castableTypeMap$ = {};
_.dead = false;
_.source = null;
function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, typeKey;
  if (registered) {
    typeKey = dynamicCast(registered.map[nativeEvent.type], 4);
    if (typeKey) {
      currentNative = typeKey.flyweight.nativeEvent;
      currentRelativeElem = typeKey.flyweight.relativeElem;
      typeKey.flyweight.nativeEvent = nativeEvent;
      typeKey.flyweight.relativeElem = relativeElem;
      $fireEvent_1(handlerSource, typeKey.flyweight);
      typeKey.flyweight.nativeEvent = currentNative;
      typeKey.flyweight.relativeElem = currentRelativeElem;
    }
  }
}

function DomEvent(){
}

_ = DomEvent.prototype = new GwtEvent;
_.getAssociatedType = function getAssociatedType(){
  return $clinit_31() , TYPE;
}
;
_.castableTypeMap$ = {};
_.nativeEvent = null;
_.relativeElem = null;
var registered = null;
function MouseEvent_0(){
}

_ = MouseEvent_0.prototype = new DomEvent;
_.castableTypeMap$ = {};
function $clinit_31(){
  $clinit_31 = nullMethod;
  TYPE = new DomEvent$Type_0(new ClickEvent_0);
}

function ClickEvent_0(){
}

function ClickEvent(){
}

_ = ClickEvent_0.prototype = ClickEvent.prototype = new MouseEvent_0;
_.dispatch = function dispatch(handler){
  dynamicCast(handler, 3);
  $wnd.alert('Posted to Siebel');
}
;
_.castableTypeMap$ = {};
var TYPE;
function GwtEvent$Type_0(){
  this.index = ++nextHashCode;
}

function GwtEvent$Type(){
}

_ = GwtEvent$Type_0.prototype = GwtEvent$Type.prototype = new Object_0;
_.hashCode$ = function hashCode_2(){
  return this.index;
}
;
_.castableTypeMap$ = {};
_.index = 0;
var nextHashCode = 0;
function DomEvent$Type_0(flyweight){
  this.index = ++nextHashCode;
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap_0);
  registered.map['click'] = this;
  this.name_0 = 'click';
}

function DomEvent$Type(){
}

_ = DomEvent$Type_0.prototype = DomEvent$Type.prototype = new GwtEvent$Type;
_.castableTypeMap$ = {4:1};
_.flyweight = null;
_.name_0 = null;
function PrivateMap_0(){
  this.map = {};
}

function PrivateMap(){
}

_ = PrivateMap_0.prototype = PrivateMap.prototype = new Object_0;
_.castableTypeMap$ = {};
_.map = null;
function CloseEvent_0(){
}

function fire(source){
  var event_0;
  if (TYPE_0) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

function CloseEvent(){
}

_ = CloseEvent_0.prototype = CloseEvent.prototype = new GwtEvent;
_.dispatch = function dispatch_0(handler){
  dynamicCast(handler, 5);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_0(){
  return TYPE_0;
}
;
_.castableTypeMap$ = {};
var TYPE_0 = null;
function EventBus(){
}

_ = EventBus.prototype = new Object_0;
_.castableTypeMap$ = {16:1};
function $fireEvent(this$static, event_0){
  var oldSource;
  !event_0.dead || (event_0.dead = false , event_0.source = null);
  oldSource = event_0.source;
  event_0.source = this$static.source;
  try {
    $fireEvent_0(this$static.eventBus, event_0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function HandlerManager_0(source){
  this.eventBus = new SimpleEventBus_0;
  this.source = source;
}

function HandlerManager(){
}

_ = HandlerManager_0.prototype = HandlerManager.prototype = new Object_0;
_.castableTypeMap$ = {16:1};
_.eventBus = null;
_.source = null;
function $addHandler_0(this$static, type, handler){
  var l;
  if (!type) {
    throw new NullPointerException_1('Cannot add a handler with a null type');
  }
  if (!handler) {
    throw new NullPointerException_1('Cannot add a null handler');
  }
  return this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2_0(this$static, type, handler)):(l = $ensureHandlerList(this$static, type) , l.add(handler) , undefined) , new SimpleEventBus$1_0;
}

function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList_0);
  $add_0(this$static.deferredDeltas, command);
}

function $doAddNow(this$static, type, handler){
  var l;
  l = $ensureHandlerList(this$static, type);
  l.add(handler);
}

function $doFire(this$static, event_0){
  var $e0, causes, e, handler, handlers, it, old;
  try {
    ++this$static.firingDepth;
    handlers = $getHandlerList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_0()):handlers.listIterator();
    while (this$static.isReverseOrder?it.i > 0:it.i < it.this$0_0.size_0()) {
      handler = this$static.isReverseOrder?dynamicCast($previous(it), 6):dynamicCast($next_1(it), 6);
      try {
        event_0.dispatch(handler);
      }
       catch ($e0) {
        $e0 = caught_0($e0);
        if (instanceOf($e0, 7)) {
          e = $e0;
          !causes && (causes = new HashSet_0);
          old = $put(causes.map, e, causes);
        }
         else 
          throw $e0;
      }
    }
    if (causes) {
      throw new UmbrellaException_0(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $ensureHandlerList(this$static, type){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_1(this$static.map, type), 8);
  if (!sourceMap) {
    sourceMap = new HashMap_0;
    $put(this$static.map, type, sourceMap);
  }
  handlers = dynamicCast(sourceMap.nullSlot, 9);
  if (!handlers) {
    handlers = new ArrayList_0;
    $putNullSlot(sourceMap, handlers);
  }
  return handlers;
}

function $fireEvent_0(this$static, event_0){
  if (!event_0) {
    throw new NullPointerException_1('Cannot fire null event');
  }
  $doFire(this$static, event_0);
}

function $getHandlerList(this$static, type){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_1(this$static.map, type), 8);
  if (!sourceMap) {
    return $clinit_197() , $clinit_197() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.nullSlot, 9);
  if (!handlers) {
    return $clinit_197() , $clinit_197() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl_0(this$static.deferredDeltas); c$iterator.i < c$iterator.this$0_0.size_0();) {
        c = dynamicCast($next_1(c$iterator), 10);
        $doAddNow(c.this$0, c.val$type, c.val$handler);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function SimpleEventBus_0(){
  this.map = new HashMap_0;
  this.isReverseOrder = false;
}

function SimpleEventBus(){
}

_ = SimpleEventBus_0.prototype = SimpleEventBus.prototype = new EventBus;
_.castableTypeMap$ = {16:1};
_.deferredDeltas = null;
_.firingDepth = 0;
_.isReverseOrder = false;
function SimpleEventBus$1_0(){
}

function SimpleEventBus$1(){
}

_ = SimpleEventBus$1_0.prototype = SimpleEventBus$1.prototype = new Object_0;
_.castableTypeMap$ = {};
function SimpleEventBus$2_0(this$0, val$type, val$handler){
  this.this$0 = this$0;
  this.val$type = val$type;
  this.val$handler = val$handler;
}

function SimpleEventBus$2(){
}

_ = SimpleEventBus$2_0.prototype = SimpleEventBus$2.prototype = new Object_0;
_.castableTypeMap$ = {10:1};
_.this$0 = null;
_.val$handler = null;
_.val$type = null;
function UmbrellaException_0(causes){
  RuntimeException_2.call(this, causes.map.size == 0?null:dynamicCast(causes.toArray(initDim(_3Ljava_lang_Throwable_2_classLit, {11:1, 22:1}, 7, 0, 0)), 11)[0]);
}

function UmbrellaException(){
}

_ = UmbrellaException_0.prototype = UmbrellaException.prototype = new RuntimeException;
_.castableTypeMap$ = {2:1, 7:1, 22:1};
function AutoDirectionHandler_0(){
}

function AutoDirectionHandler(){
}

_ = AutoDirectionHandler_0.prototype = AutoDirectionHandler.prototype = new Object_0;
_.castableTypeMap$ = {6:1};
function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = elem['dir'] == null?null:String(elem['dir']);
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_81() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_81() , LTR;
  }
  return $clinit_81() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        elem['dir'] = 'rtl';
        break;
      }

    case 1:
      {
        elem['dir'] = 'ltr';
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_81() , DEFAULT) && (elem['dir'] = '' , undefined);
        break;
      }

  }
}

function Enum(){
}

_ = Enum.prototype = new Object_0;
_.equals$ = function equals_1(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_3(){
  return this.$H || (this.$H = ++sNextHashId);
}
;
_.castableTypeMap$ = {22:1, 23:1, 24:1};
_.ordinal = 0;
function $clinit_81(){
  $clinit_81 = nullMethod;
  RTL = new HasDirection$Direction_0('RTL', 0);
  LTR = new HasDirection$Direction_0('LTR', 1);
  DEFAULT = new HasDirection$Direction_0('DEFAULT', 2);
  initValues(_3Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, {22:1}, 17, [RTL, LTR, DEFAULT]);
}

function HasDirection$Direction_0(enum$name, enum$ordinal){
  this.ordinal = enum$ordinal;
}

function HasDirection$Direction(){
}

_ = HasDirection$Direction_0.prototype = HasDirection$Direction.prototype = new Enum;
_.castableTypeMap$ = {17:1, 22:1, 23:1, 24:1};
var DEFAULT, LTR, RTL;
function Array_1(){
}

function createFrom(array, length_0){
  var a, result;
  a = array;
  result = createFromSeed(0, length_0);
  initValues(a.arrayClass$, a.castableTypeMap$, a.queryId$, result);
  return result;
}

function createFromSeed(seedType, length_0){
  var array = new Array(length_0);
  if (seedType == 3) {
    for (var i = 0; i < length_0; ++i) {
      var value = new Object;
      value.l = value.m = value.h = 0;
      array[i] = value;
    }
  }
   else if (seedType > 0) {
    var value = [null, 0, false][seedType];
    for (var i = 0; i < length_0; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function initDim(arrayClass, castableTypeMap, queryId, length_0, seedType){
  var result;
  result = createFromSeed(seedType, length_0);
  $clinit_84();
  wrapArray(result, expandoNames_0, expandoValues_0);
  result.arrayClass$ = arrayClass;
  result.castableTypeMap$ = castableTypeMap;
  result.queryId$ = queryId;
  return result;
}

function initValues(arrayClass, castableTypeMap, queryId, array){
  $clinit_84();
  wrapArray(array, expandoNames_0, expandoValues_0);
  array.arrayClass$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.queryId$ = queryId;
  return array;
}

function setCheck(array, index, value){
  if (value != null) {
    if (array.queryId$ > 0 && !canCastUnsafe(value, array.queryId$)) {
      throw new ArrayStoreException_0;
    }
    if (array.queryId$ < 0 && (value.typeMarker$ == nullMethod || value.castableTypeMap$ && !!value.castableTypeMap$[1])) {
      throw new ArrayStoreException_0;
    }
  }
  return array[index] = value;
}

function Array_0(){
}

_ = Array_1.prototype = Array_0.prototype = new Object_0;
_.castableTypeMap$ = {};
_.arrayClass$ = null;
_.queryId$ = 0;
function $clinit_84(){
  $clinit_84 = nullMethod;
  expandoNames_0 = [];
  expandoValues_0 = [];
  initExpandos(new Array_1, expandoNames_0, expandoValues_0);
}

function initExpandos(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name_0 in protoType) {
    if (value = protoType[name_0]) {
      expandoNames[i] = name_0;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function wrapArray(array, expandoNames, expandoValues){
  $clinit_84();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var expandoNames_0, expandoValues_0;
function canCastUnsafe(src, dstId){
  return src.castableTypeMap$ && src.castableTypeMap$[dstId];
}

function dynamicCast(src, dstId){
  if (src != null && !(src.castableTypeMap$ && src.castableTypeMap$[dstId])) {
    throw new ClassCastException_0;
  }
  return src;
}

function dynamicCastJso(src){
  if (src != null && (src.typeMarker$ == nullMethod || src.castableTypeMap$ && !!src.castableTypeMap$[1])) {
    throw new ClassCastException_0;
  }
  return src;
}

function instanceOf(src, dstId){
  return src != null && src.castableTypeMap$ && !!src.castableTypeMap$[dstId];
}

function instanceOfJso(src){
  return src != null && src.typeMarker$ != nullMethod && !(src.castableTypeMap$ && !!src.castableTypeMap$[1]);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException_0;
  }
  return null;
}

function init(){
  !!$stats && $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:'ansys.siebel.app.client.TrackitAgain'});
  new TrackitAgainGadgetImpl_0;
}

function caught_0(e){
  if (e != null && e.castableTypeMap$ && !!e.castableTypeMap$[7]) {
    return e;
  }
  return new JavaScriptException_0(e);
}

function AbstractRenderer(){
}

_ = AbstractRenderer.prototype = new Object_0;
_.castableTypeMap$ = {};
function PassthroughParser_0(){
}

function PassthroughParser(){
}

_ = PassthroughParser_0.prototype = PassthroughParser.prototype = new Object_0;
_.castableTypeMap$ = {};
var INSTANCE_0 = null;
function PassthroughRenderer_0(){
}

function PassthroughRenderer(){
}

_ = PassthroughRenderer_0.prototype = PassthroughRenderer.prototype = new AbstractRenderer;
_.castableTypeMap$ = {};
var INSTANCE_1 = null;
function dispatchEvent_1(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function previewEvent(evt){
  return true;
}

function sinkEvents(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem = null;
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_0?TYPE_0:(TYPE_0 = new GwtEvent$Type_0), handler);
}

function addHandler(type, handler){
  return $addHandler_0((!handlers_0 && (handlers_0 = new Window$WindowHandlers_0) , handlers_0).eventBus, type, handler);
}

function maybeInitializeCloseHandlers(){
  var scriptElem, elem;
  if (!closeHandlersInitialized) {
    scriptElem = (elem = $createElement($doc, 'script') , elem.text = 'function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n' , elem);
    $doc.body.appendChild(scriptElem);
    $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
    $doc.body.removeChild(scriptElem);
    closeHandlersInitialized = true;
  }
}

function onClosed(){
  closeHandlersInitialized && fire((!handlers_0 && (handlers_0 = new Window$WindowHandlers_0) , handlers_0));
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent_0;
    !!handlers_0 && $fireEvent(handlers_0, event_0);
    return null;
  }
  return null;
}

var closeHandlersInitialized = false, handlers_0 = null;
function $clinit_101(){
  $clinit_101 = nullMethod;
  TYPE_1 = new GwtEvent$Type_0;
}

function Window$ClosingEvent_0(){
  $clinit_101();
}

function Window$ClosingEvent(){
}

_ = Window$ClosingEvent_0.prototype = Window$ClosingEvent.prototype = new GwtEvent;
_.dispatch = function dispatch_1(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_1(){
  return TYPE_1;
}
;
_.castableTypeMap$ = {};
var TYPE_1;
function Window$WindowHandlers_0(){
  this.eventBus = new SimpleEventBus_0;
  this.source = null;
}

function Window$WindowHandlers(){
}

_ = Window$WindowHandlers_0.prototype = Window$WindowHandlers.prototype = new HandlerManager;
_.castableTypeMap$ = {16:1};
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'mousewheel':
      return 131072;
    case 'DOMMouseScroll':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return 524288;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function isMyListener(object){
  return !instanceOfJso(object) && object != null && object.castableTypeMap$ && !!object.castableTypeMap$[12];
}

var eventSystemIsInitialized = false;
function $initEventSystem(){
  $wnd.__gwt_globalEventArray == null && ($wnd.__gwt_globalEventArray = new Array);
  $wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length] = $entry(function(){
    return previewEvent($wnd.event);
  }
  );
  var dispatchEvent_0 = $entry(function(){
    var oldEventTarget = currentEventTarget;
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEventImpl()) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentElement;
    }
    listener && isMyListener(listener) && dispatchEvent_1($wnd.event, curElem, listener);
    currentEventTarget = oldEventTarget;
  }
  );
  var dispatchDblClickEvent = $entry(function(){
    var newEvent = $doc.createEventObject();
    $wnd.event.returnValue == null && $wnd.event.srcElement.fireEvent && $wnd.event.srcElement.fireEvent('onclick', newEvent);
    if (this.__eventBits & 2) {
      dispatchEvent_0.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      previewEventImpl();
    }
  }
  );
  var dispatchUnhandledEvent = $entry(function(){
    this.__gwtLastUnhandledEvent = $wnd.event.type;
    dispatchEvent_0.call(this);
  }
  );
  var moduleName = $moduleName.replace(/\./g, '_');
  $wnd['__gwt_dispatchEvent_' + moduleName] = dispatchEvent_0;
  callDispatchEvent = (new Function('w', 'return function() { w.__gwt_dispatchEvent_' + moduleName + '.call(this) }'))($wnd);
  $wnd['__gwt_dispatchDblClickEvent_' + moduleName] = dispatchDblClickEvent;
  callDispatchDblClickEvent = (new Function('w', 'return function() { w.__gwt_dispatchDblClickEvent_' + moduleName + '.call(this)}'))($wnd);
  $wnd['__gwt_dispatchUnhandledEvent_' + moduleName] = dispatchUnhandledEvent;
  callDispatchUnhandledEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(this)}'))($wnd);
  var bodyDispatcher = $entry(function(){
    dispatchEvent_0.call($doc.body);
  }
  );
  var bodyDblClickDispatcher = $entry(function(){
    dispatchDblClickEvent.call($doc.body);
  }
  );
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}

function $insertChild(parent_0, child, index){
  index >= parent_0.children.length?parent_0.appendChild(child):parent_0.insertBefore(child, parent_0.children[index]);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?callDispatchEvent:null);
  chMask & 3 && (elem.ondblclick = bits & 3?callDispatchDblClickEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?callDispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?callDispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?callDispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?callDispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?callDispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?callDispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?callDispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?callDispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?callDispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?callDispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?callDispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?callDispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?callDispatchEvent:null);
  chMask & 32768 && (elem.onload = bits & 32768?callDispatchUnhandledEvent:null);
  chMask & 65536 && (elem.onerror = bits & 65536?callDispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?callDispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?callDispatchEvent:null);
  chMask & 524288 && (elem.onpaste = bits & 524288?callDispatchEvent:null);
}

function previewEventImpl(){
  var isCancelled = false;
  for (var i = 0; i < $wnd.__gwt_globalEventArray.length; i++) {
    !$wnd.__gwt_globalEventArray[i]() && (isCancelled = true);
  }
  return !isCancelled;
}

var callDispatchDblClickEvent = null, callDispatchEvent = null, callDispatchUnhandledEvent = null;
function UIObject(){
}

_ = UIObject.prototype = new Object_0;
_.castableTypeMap$ = {20:1};
_.element = null;
function $addDomHandler(this$static, handler, type){
  $sinkEvents(this$static, $eventGetTypeInt(type.name_0));
  return $addHandler_0((!this$static.handlerManager?(this$static.handlerManager = new HandlerManager_0(this$static)):this$static.handlerManager).eventBus, type, handler);
}

function $fireEvent_1(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  this$static.element.__listener = this$static;
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget || (event_0.type == 'mouseout'?event_0.toElement:event_0.fromElement);
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.doDetachChildren();
  }
   finally {
    this$static.element.__listener = null;
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    ($clinit_144() , $containsKey(widgetsToDetach.map, this$static)) && detachNow(this$static);
  }
   else if (this$static.parent_0) {
    $remove_0(this$static.parent_0, this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_0("This widget's parent does not implement HasWidgets");
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_0('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && this$static.onAttach();
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?sinkEvents(this$static.element, eventBitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= eventBitsToAdd);
}

function Widget(){
}

_ = Widget.prototype = new UIObject;
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.castableTypeMap$ = {12:1, 13:1, 15:1, 16:1, 19:1, 20:1};
_.attached = false;
_.eventsToSink = 0;
_.handlerManager = null;
_.parent_0 = null;
function Panel(){
}

_ = Panel.prototype = new Widget;
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_112() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_112() , detachCommand));
}
;
_.castableTypeMap$ = {12:1, 13:1, 15:1, 16:1, 19:1, 20:1};
function $adjustIndex(this$static, child, beforeIndex){
  var idx;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  if (child.parent_0 == this$static) {
    idx = $indexOf(this$static.children_0, child);
    idx < beforeIndex && --beforeIndex;
  }
  return beforeIndex;
}

function $checkIndexBoundsForInsertion(this$static, index){
  if (index < 0 || index > this$static.children_0.size) {
    throw new IndexOutOfBoundsException_0;
  }
}

function $insert(this$static, child, container, beforeIndex){
  beforeIndex = $adjustIndex(this$static, child, beforeIndex);
  $removeFromParent(child);
  $insert_0(this$static.children_0, child, beforeIndex);
  $insertChild(container, child.element, beforeIndex);
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem, parent_0;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = w.element;
    (parent_0 = elem.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).removeChild(elem);
    $remove_2(this$static.children_0, w);
  }
  return true;
}

function ComplexPanel(){
}

_ = ComplexPanel.prototype = new Panel;
_.iterator = function iterator(){
  return new WidgetCollection$WidgetIterator_0(this.children_0);
}
;
_.castableTypeMap$ = {12:1, 13:1, 15:1, 16:1, 19:1, 20:1};
function $remove_0(this$static, w){
  var removed;
  removed = $remove(this$static, w);
  removed && changeToStaticPositioning(w.element);
  return removed;
}

function $setWidgetPositionImpl(w, left, top_0){
  var h;
  h = w.element;
  if (left == -1 && top_0 == -1) {
    changeToStaticPositioning(h);
  }
   else {
    h.style['position'] = 'absolute';
    h.style['left'] = left + 'px';
    h.style['top'] = top_0 + 'px';
  }
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

function AbsolutePanel(){
}

_ = AbsolutePanel.prototype = new ComplexPanel;
_.setWidgetPositionImpl = function setWidgetPositionImpl(w, left, top_0){
  $setWidgetPositionImpl(w, left, top_0);
}
;
_.castableTypeMap$ = {12:1, 13:1, 15:1, 16:1, 19:1, 20:1};
function $clinit_112(){
  $clinit_112 = nullMethod;
  attachCommand = new AttachDetachException$1_0;
  detachCommand = new AttachDetachException$2_0;
}

function AttachDetachException_0(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  var old;
  $clinit_112();
  var $e0, caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next(), 13);
    try {
      c.execute(w);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 7)) {
        e = $e0;
        !caught && (caught = new HashSet_0);
        old = $put(caught.map, e, caught);
      }
       else 
        throw $e0;
    }
  }
  if (caught) {
    throw new AttachDetachException_0(caught);
  }
}

function AttachDetachException(){
}

_ = AttachDetachException_0.prototype = AttachDetachException.prototype = new UmbrellaException;
_.castableTypeMap$ = {2:1, 7:1, 22:1};
var attachCommand, detachCommand;
function AttachDetachException$1_0(){
}

function AttachDetachException$1(){
}

_ = AttachDetachException$1_0.prototype = AttachDetachException$1.prototype = new Object_0;
_.execute = function execute(w){
  w.onAttach();
}
;
_.castableTypeMap$ = {};
function AttachDetachException$2_0(){
}

function AttachDetachException$2(){
}

_ = AttachDetachException$2_0.prototype = AttachDetachException$2.prototype = new Object_0;
_.execute = function execute_0(w){
  w.onDetach();
}
;
_.castableTypeMap$ = {};
function $onAttach_0(this$static){
  var tabIndex;
  $onAttach(this$static);
  tabIndex = this$static.element.tabIndex;
  -1 == tabIndex && (this$static.element.tabIndex = 0 , undefined);
}

function FocusWidget(){
}

_ = FocusWidget.prototype = new Widget;
_.onAttach = function onAttach_0(){
  $onAttach_0(this);
}
;
_.castableTypeMap$ = {12:1, 13:1, 15:1, 16:1, 19:1, 20:1};
function ButtonBase(){
}

_ = ButtonBase.prototype = new FocusWidget;
_.castableTypeMap$ = {12:1, 13:1, 15:1, 16:1, 19:1, 20:1};
function Button_1(){
  this.element = $doc.createElement("<BUTTON type='button'><\/BUTTON>");
  this.element['className'] = 'gwt-Button';
  this.element.innerHTML = 'TrackIt!';
}

function Button(){
}

_ = Button_1.prototype = Button.prototype = new ButtonBase;
_.castableTypeMap$ = {12:1, 13:1, 15:1, 16:1, 19:1, 20:1};
function $setTextOrHtml(this$static, content_0){
  this$static.element.innerText = content_0 || '';
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper_0(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

function DirectionalTextHelper(){
}

_ = DirectionalTextHelper_0.prototype = DirectionalTextHelper.prototype = new Object_0;
_.castableTypeMap$ = {};
_.element = null;
_.initialElementDir = null;
_.textDir = null;
function LabelBase(){
}

_ = LabelBase.prototype = new Widget;
_.castableTypeMap$ = {12:1, 13:1, 15:1, 16:1, 19:1, 20:1};
_.directionalTextHelper = null;
function Label_1(text){
  this.element = $createElement($doc, 'div');
  this.directionalTextHelper = new DirectionalTextHelper_0(this.element);
  this.element['className'] = 'gwt-Label';
  $setTextOrHtml(this.directionalTextHelper, text);
}

function Label(){
}

_ = Label_1.prototype = Label.prototype = new LabelBase;
_.castableTypeMap$ = {12:1, 13:1, 15:1, 16:1, 19:1, 20:1};
function RichTextArea_0(){
  this.impl = new RichTextAreaImplIE6_0;
  this.element = this.impl.elem;
  this.element['className'] = 'gwt-RichTextArea';
}

function RichTextArea(){
}

_ = RichTextArea_0.prototype = RichTextArea.prototype = new FocusWidget;
_.onAttach = function onAttach_1(){
  $onAttach_0(this);
  $initElement(this.impl);
}
;
_.onDetach = function onDetach_0(){
  $onDetach(this);
  $uninitElement(this.impl);
}
;
_.castableTypeMap$ = {12:1, 13:1, 15:1, 16:1, 19:1, 20:1};
function $clinit_144(){
  $clinit_144 = nullMethod;
  maybeDetachCommand = new RootPanel$1_0;
  rootPanels = new HashMap_0;
  widgetsToDetach = new HashSet_0;
}

function RootPanel_0(elem){
  this.children_0 = new WidgetCollection_0;
  this.element = elem;
  $onAttach(this);
}

function detachNow(widget){
  $clinit_144();
  try {
    widget.onDetach();
  }
   finally {
    $remove_3(widgetsToDetach.map, widget) != null;
  }
}

function detachWidgets(){
  $clinit_144();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $clearImpl(widgetsToDetach.map);
    $clearImpl(rootPanels);
  }
}

function get_0(){
  $clinit_144();
  var rp;
  rp = dynamicCast($get_1(rootPanels, null), 14);
  if (rp) {
    return rp;
  }
  rootPanels.size == 0 && addCloseHandler(new RootPanel$2_0);
  rp = new RootPanel$DefaultRootPanel_0;
  $put(rootPanels, null, rp);
  $add_1(widgetsToDetach, rp);
  return rp;
}

function RootPanel(){
}

_ = RootPanel.prototype = new AbsolutePanel;
_.castableTypeMap$ = {12:1, 13:1, 14:1, 15:1, 16:1, 19:1, 20:1};
var maybeDetachCommand, rootPanels, widgetsToDetach;
function RootPanel$1_0(){
}

function RootPanel$1(){
}

_ = RootPanel$1_0.prototype = RootPanel$1.prototype = new Object_0;
_.execute = function execute_1(w){
  w.attached && w.onDetach();
}
;
_.castableTypeMap$ = {};
function RootPanel$2_0(){
}

function RootPanel$2(){
}

_ = RootPanel$2_0.prototype = RootPanel$2.prototype = new Object_0;
_.castableTypeMap$ = {5:1, 6:1};
function RootPanel$DefaultRootPanel_0(){
  RootPanel_0.call(this, $doc.body);
}

function RootPanel$DefaultRootPanel(){
}

_ = RootPanel$DefaultRootPanel_0.prototype = RootPanel$DefaultRootPanel.prototype = new RootPanel;
_.setWidgetPositionImpl = function setWidgetPositionImpl_0(w, left, top_0){
  left -= $getBodyOffsetLeft($doc);
  top_0 -= $getBodyOffsetTop($doc);
  $setWidgetPositionImpl(w, left, top_0);
}
;
_.castableTypeMap$ = {12:1, 13:1, 14:1, 15:1, 16:1, 19:1, 20:1};
function ValueBoxBase_0(elem){
  this.element = elem;
  new AutoDirectionHandler_0;
}

function ValueBoxBase(){
}

_ = ValueBoxBase.prototype = new FocusWidget;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  var type;
  type = $eventGetTypeInt(event_0.type);
  (type & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_0(){
}
;
_.castableTypeMap$ = {12:1, 13:1, 15:1, 16:1, 19:1, 20:1};
function $clinit_154(){
  $clinit_154 = nullMethod;
  $clinit_156();
}

function TextBoxBase(){
}

_ = TextBoxBase.prototype = new ValueBoxBase;
_.castableTypeMap$ = {12:1, 13:1, 15:1, 16:1, 19:1, 20:1};
function TextBox_0(){
  var e;
  $clinit_154();
  ValueBoxBase_0.call(this, (e = $doc.createElement('INPUT') , e.type = 'text' , e), (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer_0) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser_0)));
  this.element['className'] = 'gwt-TextBox';
}

function TextBox(){
}

_ = TextBox_0.prototype = TextBox.prototype = new TextBoxBase;
_.castableTypeMap$ = {12:1, 13:1, 15:1, 16:1, 19:1, 20:1};
function $clinit_156(){
  $clinit_156 = nullMethod;
  CENTER = new ValueBoxBase$TextAlignment$1_0;
  JUSTIFY = new ValueBoxBase$TextAlignment$2_0;
  LEFT = new ValueBoxBase$TextAlignment$3_0;
  RIGHT = new ValueBoxBase$TextAlignment$4_0;
  initValues(_3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, {22:1}, 21, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

function ValueBoxBase$TextAlignment(){
}

_ = ValueBoxBase$TextAlignment.prototype = new Enum;
_.castableTypeMap$ = {21:1, 22:1, 23:1, 24:1};
var CENTER, JUSTIFY, LEFT, RIGHT;
function ValueBoxBase$TextAlignment$1_0(){
  this.ordinal = 0;
}

function ValueBoxBase$TextAlignment$1(){
}

_ = ValueBoxBase$TextAlignment$1_0.prototype = ValueBoxBase$TextAlignment$1.prototype = new ValueBoxBase$TextAlignment;
_.castableTypeMap$ = {21:1, 22:1, 23:1, 24:1};
function ValueBoxBase$TextAlignment$2_0(){
  this.ordinal = 1;
}

function ValueBoxBase$TextAlignment$2(){
}

_ = ValueBoxBase$TextAlignment$2_0.prototype = ValueBoxBase$TextAlignment$2.prototype = new ValueBoxBase$TextAlignment;
_.castableTypeMap$ = {21:1, 22:1, 23:1, 24:1};
function ValueBoxBase$TextAlignment$3_0(){
  this.ordinal = 2;
}

function ValueBoxBase$TextAlignment$3(){
}

_ = ValueBoxBase$TextAlignment$3_0.prototype = ValueBoxBase$TextAlignment$3.prototype = new ValueBoxBase$TextAlignment;
_.castableTypeMap$ = {21:1, 22:1, 23:1, 24:1};
function ValueBoxBase$TextAlignment$4_0(){
  this.ordinal = 3;
}

function ValueBoxBase$TextAlignment$4(){
}

_ = ValueBoxBase$TextAlignment$4_0.prototype = ValueBoxBase$TextAlignment$4.prototype = new ValueBoxBase$TextAlignment;
_.castableTypeMap$ = {21:1, 22:1, 23:1, 24:1};
function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_0(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size) {
    throw new IndexOutOfBoundsException_0;
  }
  if (this$static.size == this$static.array.length) {
    newArray = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, {22:1}, 13, this$static.array.length * 2, 0);
    for (i = 0; i < this$static.array.length; ++i) {
      setCheck(newArray, i, this$static.array[i]);
    }
    this$static.array = newArray;
  }
  ++this$static.size;
  for (i = this$static.size - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_1(this$static, index){
  var i;
  if (index < 0 || index >= this$static.size) {
    throw new IndexOutOfBoundsException_0;
  }
  --this$static.size;
  for (i = index; i < this$static.size; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size, null);
}

function $remove_2(this$static, w){
  var index;
  index = $indexOf(this$static, w);
  if (index == -1) {
    throw new NoSuchElementException_0;
  }
  $remove_1(this$static, index);
}

function WidgetCollection_0(){
  this.array = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, {22:1}, 13, 4, 0);
}

function WidgetCollection(){
}

_ = WidgetCollection_0.prototype = WidgetCollection.prototype = new Object_0;
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator_0(this);
}
;
_.castableTypeMap$ = {};
_.array = null;
_.size = 0;
function $next(this$static){
  if (this$static.index >= this$static.this$0.size) {
    throw new NoSuchElementException_0;
  }
  return this$static.this$0.array[++this$static.index];
}

function WidgetCollection$WidgetIterator_0(this$0){
  this.this$0 = this$0;
}

function WidgetCollection$WidgetIterator(){
}

_ = WidgetCollection$WidgetIterator_0.prototype = WidgetCollection$WidgetIterator.prototype = new Object_0;
_.hasNext = function hasNext(){
  return this.index < this.this$0.size - 1;
}
;
_.next = function next_0(){
  return $next(this);
}
;
_.castableTypeMap$ = {};
_.index = -1;
_.this$0 = null;
function RichTextAreaImpl(){
}

_ = RichTextAreaImpl.prototype = new Object_0;
_.createElement_0 = function createElement(){
  return $createElement($doc, 'textarea');
}
;
_.castableTypeMap$ = {};
_.elem = null;
function $setHTMLImpl(this$static, html){
  this$static.elem.contentWindow.document.body.innerHTML = html;
}

function $uninitElement(this$static){
  var enabled, html, elem, elem_0;
  if (this$static.initializing) {
    this$static.initializing = false;
    return;
  }
  $unhookEvents(this$static);
  html = !this$static.beforeInitPlaceholder?this$static.elem.contentWindow.document.body.innerHTML:this$static.beforeInitPlaceholder.innerHTML;
  enabled = !this$static.beforeInitPlaceholder?(elem = this$static.elem , elem.contentWindow.document.body.contentEditable.toLowerCase() == 'true'):!this$static.beforeInitPlaceholder['disabled'];
  this$static.beforeInitPlaceholder = $createElement($doc, 'div');
  this$static.beforeInitPlaceholder.innerHTML = html || '';
  !this$static.beforeInitPlaceholder?(elem_0 = this$static.elem , elem_0.contentWindow.document.body.contentEditable = enabled , undefined):(this$static.beforeInitPlaceholder['disabled'] = !enabled , undefined);
}

function RichTextAreaImplStandard(){
}

_ = RichTextAreaImplStandard.prototype = new RichTextAreaImpl;
_.createElement_0 = function createElement_0(){
  return $doc.createElement('iframe');
}
;
_.onElementInitialized = function onElementInitialized(){
  var elem;
  if (!this.initializing) {
    return;
  }
  this.initializing = false;
  if (this.beforeInitPlaceholder) {
    $setHTMLImpl(this, this.beforeInitPlaceholder.innerHTML);
    $setEnabledImpl(this, !this.beforeInitPlaceholder?(elem = this.elem , elem.contentWindow.document.body.contentEditable.toLowerCase() == 'true'):!this.beforeInitPlaceholder['disabled']);
    this.beforeInitPlaceholder = null;
  }
  $hookEvents(this);
  if (this.isPendingFocus) {
    this.isPendingFocus = false;
    this.initializing?(this.isPendingFocus = true):(this.elem.contentWindow.focus() , undefined);
  }
}
;
_.onElementInitializing = function onElementInitializing(){
  this.initializing = true;
  this.isPendingFocus = false;
}
;
_.castableTypeMap$ = {};
_.initializing = false;
_.isPendingFocus = false;
function $hookEvents(this$static){
  var elem = this$static.elem;
  var body = elem.contentWindow.document.body;
  var handler = $entry(function(){
    if (elem.__listener) {
      if (isMyListener(elem.__listener)) {
        var evt = elem.contentWindow.event;
        dispatchEvent_1(evt, elem, elem.__listener);
      }
    }
  }
  );
  body.onkeydown = body.onkeyup = body.onkeypress = body.onmousedown = body.onmouseup = body.onmousemove = body.onmouseover = body.onmouseout = body.onclick = handler;
  elem.contentWindow.onfocus = elem.contentWindow.onblur = handler;
}

function $initElement(this$static){
  var _this = this$static;
  _this.onElementInitializing();
  setTimeout($entry(function(){
    if (_this.initializing == false) {
      return;
    }
    var elem = _this.elem;
    var doc = elem.contentWindow.document;
    if (!doc.body) {
      setTimeout(arguments.callee, 50);
      return;
    }
    doc.body.contentEditable = true;
    _this.onElementInitialized();
  }
  , 1));
}

function $setEnabledImpl(this$static, enabled){
  var elem = this$static.elem;
  elem.contentWindow.document.body.contentEditable = enabled;
}

function $unhookEvents(this$static){
  var elem = this$static.elem;
  var body = elem.contentWindow.document.body;
  if (body) {
    body.onkeydown = body.onkeyup = body.onkeypress = body.onmousedown = body.onmouseup = body.onmousemove = body.onmouseover = body.onmouseout = body.onclick = null;
    elem.contentWindow.onfocus = elem.contentWindow.onblur = null;
  }
}

function RichTextAreaImplIE6_0(){
  this.elem = this.createElement_0();
  this.beforeInitPlaceholder = $createElement($doc, 'div');
}

function RichTextAreaImplIE6(){
}

_ = RichTextAreaImplIE6_0.prototype = RichTextAreaImplIE6.prototype = new RichTextAreaImplStandard;
_.createElement_0 = function createElement_1(){
  var elem;
  elem = $doc.createElement('iframe');
  elem['src'] = "javascript:''";
  return elem;
}
;
_.castableTypeMap$ = {};
function ArrayStoreException_0(){
  $fillInStackTrace();
}

function ArrayStoreException(){
}

_ = ArrayStoreException_0.prototype = ArrayStoreException.prototype = new RuntimeException;
_.castableTypeMap$ = {2:1, 7:1, 22:1};
function Class_0(){
}

function Class(){
}

_ = Class_0.prototype = Class.prototype = new Object_0;
_.castableTypeMap$ = {};
function ClassCastException_0(){
  $fillInStackTrace();
}

function ClassCastException(){
}

_ = ClassCastException_0.prototype = ClassCastException.prototype = new RuntimeException;
_.castableTypeMap$ = {2:1, 7:1, 22:1};
function IllegalStateException_0(s){
  $fillInStackTrace();
}

function IllegalStateException(){
}

_ = IllegalStateException_0.prototype = IllegalStateException.prototype = new RuntimeException;
_.castableTypeMap$ = {2:1, 7:1, 22:1};
function IndexOutOfBoundsException_0(){
  $fillInStackTrace();
}

function IndexOutOfBoundsException_1(message){
  $fillInStackTrace();
}

function IndexOutOfBoundsException(){
}

_ = IndexOutOfBoundsException_1.prototype = IndexOutOfBoundsException_0.prototype = IndexOutOfBoundsException.prototype = new RuntimeException;
_.castableTypeMap$ = {2:1, 7:1, 22:1};
function NullPointerException_0(){
  $fillInStackTrace();
}

function NullPointerException_1(message){
  $fillInStackTrace();
}

function NullPointerException(){
}

_ = NullPointerException_1.prototype = NullPointerException_0.prototype = NullPointerException.prototype = new RuntimeException;
_.castableTypeMap$ = {2:1, 7:1, 22:1};
function StackTraceElement_0(methodName){
}

function StackTraceElement(){
}

_ = StackTraceElement_0.prototype = StackTraceElement.prototype = new Object_0;
_.castableTypeMap$ = {22:1, 25:1};
function $equals_1(this$static, other){
  if (!(other != null && other.castableTypeMap$ && !!other.castableTypeMap$[1])) {
    return false;
  }
  return String(this$static) == other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null)
    return false;
  return this$static == other || this$static.toLowerCase() == other.toLowerCase();
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

_ = String.prototype;
_.equals$ = function equals_2(other){
  return $equals_1(this, other);
}
;
_.hashCode$ = function hashCode_4(){
  return getHashCode_0(this);
}
;
_.castableTypeMap$ = {1:1, 22:1, 23:1};
function $clinit_179(){
  $clinit_179 = nullMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode))) | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + str.charCodeAt(i++);
  }
  return hashCode | 0;
}

function getHashCode_0(str){
  $clinit_179();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function UnsupportedOperationException_0(message){
  $fillInStackTrace();
}

function UnsupportedOperationException(){
}

_ = UnsupportedOperationException_0.prototype = UnsupportedOperationException.prototype = new RuntimeException;
_.castableTypeMap$ = {2:1, 7:1, 22:1};
function $advanceToFind(iter, o){
  var t;
  while (iter.hasNext()) {
    t = iter.next();
    if (o == null?t == null:equals__devirtual$(o, t)) {
      return iter;
    }
  }
  return null;
}

function AbstractCollection(){
}

_ = AbstractCollection.prototype = new Object_0;
_.add = function add(o){
  throw new UnsupportedOperationException_0('Add not supported on this collection');
}
;
_.contains_0 = function contains(o){
  var iter;
  iter = $advanceToFind(this.iterator(), o);
  return !!iter;
}
;
_.toArray = function toArray(a){
  var i, it, size;
  size = this.size_0();
  a.length < size && (a = createFrom(a, size));
  it = this.iterator();
  for (i = 0; i < size; ++i) {
    setCheck(a, i, it.next());
  }
  a.length > size && setCheck(a, size, null);
  return a;
}
;
_.castableTypeMap$ = {};
function $keySet(this$static){
  var entrySet;
  entrySet = new AbstractHashMap$EntrySet_0(this$static);
  return new AbstractMap$1_0(this$static, entrySet);
}

function AbstractMap(){
}

_ = AbstractMap.prototype = new Object_0;
_.equals$ = function equals_3(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!(obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[8])) {
    return false;
  }
  otherMap = dynamicCast(obj, 8);
  if (this.size != otherMap.size) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator_0((new AbstractHashMap$EntrySet_0(otherMap)).this$0); $hasNext_0(entry$iterator.iter);) {
    entry = dynamicCast($next_1(entry$iterator.iter), 26);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(otherKey == null?this.nullSlotLive:otherKey != null && otherKey.castableTypeMap$ && !!otherKey.castableTypeMap$[1]?':' + dynamicCast(otherKey, 1) in this.stringMap:$hasHashValue(this, otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
    if (!equalsWithNullCheck(otherValue, otherKey == null?this.nullSlot:otherKey != null && otherKey.castableTypeMap$ && !!otherKey.castableTypeMap$[1]?this.stringMap[':' + dynamicCast(otherKey, 1)]:$getHashValue(this, otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_5(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator_0((new AbstractHashMap$EntrySet_0(this)).this$0); $hasNext_0(entry$iterator.iter);) {
    entry = dynamicCast($next_1(entry$iterator.iter), 26);
    hashCode += entry.hashCode$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}
;
_.castableTypeMap$ = {8:1};
function $addAllHashEntries(this$static, dest){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    var hashCodeInt = parseInt(hashCode, 10);
    if (hashCode == hashCodeInt) {
      var array = hashCodeMap[hashCodeInt];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add(array[i]);
      }
    }
  }
}

function $addAllStringEntries(this$static, dest){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = new AbstractHashMap$MapEntryString_0(this$static, key.substring(1));
      dest.add(entry);
    }
  }
}

function $clearImpl(this$static){
  this$static.hashCodeMap = [];
  this$static.stringMap = {};
  this$static.nullSlotLive = false;
  this$static.nullSlot = null;
  this$static.size = 0;
}

function $containsKey(this$static, key){
  return key == null?this$static.nullSlotLive:key != null && key.castableTypeMap$ && !!key.castableTypeMap$[1]?$hasStringValue(this$static, dynamicCast(key, 1)):$hasHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $get_1(this$static, key){
  return key == null?this$static.nullSlot:key != null && key.castableTypeMap$ && !!key.castableTypeMap$[1]?this$static.stringMap[':' + dynamicCast(key, 1)]:$getHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $getHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return entry.getValue();
      }
    }
  }
  return null;
}

function $hasHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function $hasStringValue(this$static, key){
  return ':' + key in this$static.stringMap;
}

function $put(this$static, key, value){
  return key == null?$putNullSlot(this$static, value):key != null && key.castableTypeMap$ && !!key.castableTypeMap$[1]?$putStringValue(this$static, dynamicCast(key, 1), value):$putHashValue(this$static, key, value, ~~hashCode__devirtual$(key));
}

function $putHashValue(this$static, key, value, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        var previous = entry.getValue();
        entry.setValue(value);
        return previous;
      }
    }
  }
   else {
    array = this$static.hashCodeMap[hashCode] = [];
  }
  var entry = new MapEntryImpl_0(key, value);
  array.push(entry);
  ++this$static.size;
  return null;
}

function $putNullSlot(this$static, value){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = value;
  if (!this$static.nullSlotLive) {
    this$static.nullSlotLive = true;
    ++this$static.size;
  }
  return result;
}

function $putStringValue(this$static, key, value){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  key in stringMap?(result = stringMap[key]):++this$static.size;
  stringMap[key] = value;
  return result;
}

function $remove_3(this$static, key){
  return !key?$removeNullSlot(this$static):$removeHashValue(this$static, key, ~~(key.$H || (key.$H = ++sNextHashId)));
}

function $removeHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        array.length == 1?delete this$static.hashCodeMap[hashCode]:array.splice(i, 1);
        --this$static.size;
        return entry.getValue();
      }
    }
  }
  return null;
}

function $removeNullSlot(this$static){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = null;
  if (this$static.nullSlotLive) {
    this$static.nullSlotLive = false;
    --this$static.size;
  }
  return result;
}

function AbstractHashMap(){
}

_ = AbstractHashMap.prototype = new AbstractMap;
_.equalsBridge = function equalsBridge(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}
;
_.castableTypeMap$ = {8:1};
_.hashCodeMap = null;
_.nullSlot = null;
_.nullSlotLive = false;
_.size = 0;
_.stringMap = null;
function AbstractSet(){
}

_ = AbstractSet.prototype = new AbstractCollection;
_.equals$ = function equals_4(o){
  var iter, other, otherItem;
  if (o === this) {
    return true;
  }
  if (!(o != null && o.castableTypeMap$ && !!o.castableTypeMap$[27])) {
    return false;
  }
  other = dynamicCast(o, 27);
  if (other.size_0() != this.size_0()) {
    return false;
  }
  for (iter = other.iterator(); iter.hasNext();) {
    otherItem = iter.next();
    if (!this.contains_0(otherItem)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_6(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator(); iter.hasNext();) {
    next = iter.next();
    if (next != null) {
      hashCode += hashCode__devirtual$(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}
;
_.castableTypeMap$ = {27:1};
function $contains(this$static, o){
  var entry, key, value;
  if (o != null && o.castableTypeMap$ && !!o.castableTypeMap$[26]) {
    entry = dynamicCast(o, 26);
    key = entry.getKey();
    if ($containsKey(this$static.this$0, key)) {
      value = $get_1(this$static.this$0, key);
      return $equals_2(entry.getValue(), value);
    }
  }
  return false;
}

function AbstractHashMap$EntrySet_0(this$0){
  this.this$0 = this$0;
}

function AbstractHashMap$EntrySet(){
}

_ = AbstractHashMap$EntrySet_0.prototype = AbstractHashMap$EntrySet.prototype = new AbstractSet;
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_1(){
  return new AbstractHashMap$EntrySetIterator_0(this.this$0);
}
;
_.size_0 = function size_0(){
  return this.this$0.size;
}
;
_.castableTypeMap$ = {27:1};
_.this$0 = null;
function AbstractHashMap$EntrySetIterator_0(this$0){
  var list;
  list = new ArrayList_0;
  this$0.nullSlotLive && $add_0(list, new AbstractHashMap$MapEntryNull_0(this$0));
  $addAllStringEntries(this$0, list);
  $addAllHashEntries(this$0, list);
  this.iter = new AbstractList$IteratorImpl_0(list);
}

function AbstractHashMap$EntrySetIterator(){
}

_ = AbstractHashMap$EntrySetIterator_0.prototype = AbstractHashMap$EntrySetIterator.prototype = new Object_0;
_.hasNext = function hasNext_0(){
  return $hasNext_0(this.iter);
}
;
_.next = function next_1(){
  return dynamicCast($next_1(this.iter), 26);
}
;
_.castableTypeMap$ = {};
_.iter = null;
function AbstractMapEntry(){
}

_ = AbstractMapEntry.prototype = new Object_0;
_.equals$ = function equals_5(other){
  var entry;
  if (other != null && other.castableTypeMap$ && !!other.castableTypeMap$[26]) {
    entry = dynamicCast(other, 26);
    if (equalsWithNullCheck(this.getKey(), entry.getKey()) && equalsWithNullCheck(this.getValue(), entry.getValue())) {
      return true;
    }
  }
  return false;
}
;
_.hashCode$ = function hashCode_7(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  this.getKey() != null && (keyHash = hashCode__devirtual$(this.getKey()));
  this.getValue() != null && (valueHash = hashCode__devirtual$(this.getValue()));
  return keyHash ^ valueHash;
}
;
_.castableTypeMap$ = {26:1};
function AbstractHashMap$MapEntryNull_0(this$0){
  this.this$0 = this$0;
}

function AbstractHashMap$MapEntryNull(){
}

_ = AbstractHashMap$MapEntryNull_0.prototype = AbstractHashMap$MapEntryNull.prototype = new AbstractMapEntry;
_.getKey = function getKey(){
  return null;
}
;
_.getValue = function getValue(){
  return this.this$0.nullSlot;
}
;
_.setValue = function setValue(object){
  return $putNullSlot(this.this$0, object);
}
;
_.castableTypeMap$ = {26:1};
_.this$0 = null;
function AbstractHashMap$MapEntryString_0(this$0, key){
  this.this$0 = this$0;
  this.key = key;
}

function AbstractHashMap$MapEntryString(){
}

_ = AbstractHashMap$MapEntryString_0.prototype = AbstractHashMap$MapEntryString.prototype = new AbstractMapEntry;
_.getKey = function getKey_0(){
  return this.key;
}
;
_.getValue = function getValue_0(){
  return this.this$0.stringMap[':' + this.key];
}
;
_.setValue = function setValue_0(object){
  return $putStringValue(this.this$0, this.key, object);
}
;
_.castableTypeMap$ = {26:1};
_.key = null;
_.this$0 = null;
function checkIndex(index, size){
  (index < 0 || index >= size) && indexOutOfBounds(index, size);
}

function indexOutOfBounds(index, size){
  throw new IndexOutOfBoundsException_1('Index: ' + index + ', Size: ' + size);
}

function AbstractList(){
}

_ = AbstractList.prototype = new AbstractCollection;
_.add = function add_0(obj){
  this.add_0(this.size_0(), obj);
  return true;
}
;
_.add_0 = function add_1(index, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.equals$ = function equals_6(o){
  var elem, elemOther, iter, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!(o != null && o.castableTypeMap$ && !!o.castableTypeMap$[9])) {
    return false;
  }
  other = dynamicCast(o, 9);
  if (this.size_0() != other.size_0()) {
    return false;
  }
  iter = new AbstractList$IteratorImpl_0(this);
  iterOther = other.iterator();
  while (iter.i < iter.this$0_0.size_0()) {
    elem = $next_1(iter);
    elemOther = $next_1(iterOther);
    if (!(elem == null?elemOther == null:equals__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_8(){
  var iter, k, obj;
  k = 1;
  iter = new AbstractList$IteratorImpl_0(this);
  while (iter.i < iter.this$0_0.size_0()) {
    obj = $next_1(iter);
    k = 31 * k + (obj == null?0:hashCode__devirtual$(obj));
    k = ~~k;
  }
  return k;
}
;
_.iterator = function iterator_2(){
  return new AbstractList$IteratorImpl_0(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl_0(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl_0(this, from);
}
;
_.castableTypeMap$ = {9:1};
function $hasNext_0(this$static){
  return this$static.i < this$static.this$0_0.size_0();
}

function $next_1(this$static){
  if (this$static.i >= this$static.this$0_0.size_0()) {
    throw new NoSuchElementException_0;
  }
  return this$static.this$0_0.get(this$static.i++);
}

function AbstractList$IteratorImpl_0(this$0){
  this.this$0_0 = this$0;
}

function AbstractList$IteratorImpl(){
}

_ = AbstractList$IteratorImpl_0.prototype = AbstractList$IteratorImpl.prototype = new Object_0;
_.hasNext = function hasNext_1(){
  return this.i < this.this$0_0.size_0();
}
;
_.next = function next_2(){
  return $next_1(this);
}
;
_.castableTypeMap$ = {};
_.i = 0;
_.this$0_0 = null;
function $previous(this$static){
  if (this$static.i <= 0) {
    throw new NoSuchElementException_0;
  }
  return this$static.this$0.get(--this$static.i);
}

function AbstractList$ListIteratorImpl_0(this$0, start){
  var size;
  this.this$0 = this$0;
  this.this$0_0 = this$0;
  size = this$0.size_0();
  (start < 0 || start > size) && indexOutOfBounds(start, size);
  this.i = start;
}

function AbstractList$ListIteratorImpl(){
}

_ = AbstractList$ListIteratorImpl_0.prototype = AbstractList$ListIteratorImpl.prototype = new AbstractList$IteratorImpl;
_.castableTypeMap$ = {};
_.this$0 = null;
function AbstractMap$1_0(this$0, val$entrySet){
  this.this$0 = this$0;
  this.val$entrySet = val$entrySet;
}

function AbstractMap$1(){
}

_ = AbstractMap$1_0.prototype = AbstractMap$1.prototype = new AbstractSet;
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$0, key);
}
;
_.iterator = function iterator_3(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator_0(this.val$entrySet.this$0) , new AbstractMap$1$1_0(outerIter);
}
;
_.size_0 = function size_1(){
  return this.val$entrySet.this$0.size;
}
;
_.castableTypeMap$ = {27:1};
_.this$0 = null;
_.val$entrySet = null;
function AbstractMap$1$1_0(val$outerIter){
  this.val$outerIter = val$outerIter;
}

function AbstractMap$1$1(){
}

_ = AbstractMap$1$1_0.prototype = AbstractMap$1$1.prototype = new Object_0;
_.hasNext = function hasNext_2(){
  return $hasNext_0(this.val$outerIter.iter);
}
;
_.next = function next_3(){
  var entry;
  entry = dynamicCast($next_1(this.val$outerIter.iter), 26);
  return entry.getKey();
}
;
_.castableTypeMap$ = {};
_.val$outerIter = null;
function $add_0(this$static, o){
  setCheck(this$static.array, this$static.size++, o);
  return true;
}

function $indexOf_1(this$static, o, index){
  for (; index < this$static.size; ++index) {
    if (equalsWithNullCheck(o, this$static.array[index])) {
      return index;
    }
  }
  return -1;
}

function ArrayList_0(){
  this.array = initDim(_3Ljava_lang_Object_2_classLit, {22:1}, 0, 0, 0);
}

function ArrayList(){
}

_ = ArrayList_0.prototype = ArrayList.prototype = new AbstractList;
_.add = function add_2(o){
  return setCheck(this.array, this.size++, o) , true;
}
;
_.add_0 = function add_3(index, o){
  (index < 0 || index > this.size) && indexOutOfBounds(index, this.size);
  this.array.splice(index, 0, o);
  ++this.size;
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get = function get_1(index){
  return checkIndex(index, this.size) , this.array[index];
}
;
_.size_0 = function size_2(){
  return this.size;
}
;
_.toArray = function toArray_0(out){
  var i, a, result;
  out.length < this.size && (out = (a = out , result = createFromSeed(0, this.size) , initValues(a.arrayClass$, a.castableTypeMap$, a.queryId$, result) , result));
  for (i = 0; i < this.size; ++i) {
    setCheck(out, i, this.array[i]);
  }
  out.length > this.size && setCheck(out, this.size, null);
  return out;
}
;
_.castableTypeMap$ = {9:1, 22:1};
_.size = 0;
function $clinit_197(){
  $clinit_197 = nullMethod;
  EMPTY_LIST = new Collections$EmptyList_0;
}

var EMPTY_LIST;
function Collections$EmptyList_0(){
}

function Collections$EmptyList(){
}

_ = Collections$EmptyList_0.prototype = Collections$EmptyList.prototype = new AbstractList;
_.contains_0 = function contains_3(object){
  return false;
}
;
_.get = function get_2(location_0){
  throw new IndexOutOfBoundsException_0;
}
;
_.size_0 = function size_3(){
  return 0;
}
;
_.castableTypeMap$ = {9:1, 22:1};
function $equals_2(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function HashMap_0(){
  $clearImpl(this);
}

function HashMap(){
}

_ = HashMap_0.prototype = HashMap.prototype = new AbstractHashMap;
_.castableTypeMap$ = {8:1, 22:1};
function $add_1(this$static, o){
  var old;
  old = $put(this$static.map, o, this$static);
  return old == null;
}

function HashSet_0(){
  this.map = new HashMap_0;
}

function HashSet(){
}

_ = HashSet_0.prototype = HashSet.prototype = new AbstractSet;
_.add = function add_4(o){
  var old;
  return old = $put(this.map, o, this) , old == null;
}
;
_.contains_0 = function contains_4(o){
  return $containsKey(this.map, o);
}
;
_.iterator = function iterator_4(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator_0($keySet(this.map).val$entrySet.this$0) , new AbstractMap$1$1_0(outerIter);
}
;
_.size_0 = function size_4(){
  return this.map.size;
}
;
_.castableTypeMap$ = {22:1, 27:1};
_.map = null;
function MapEntryImpl_0(key, value){
  this.key = key;
  this.value = value;
}

function MapEntryImpl(){
}

_ = MapEntryImpl_0.prototype = MapEntryImpl.prototype = new AbstractMapEntry;
_.getKey = function getKey_1(){
  return this.key;
}
;
_.getValue = function getValue_1(){
  return this.value;
}
;
_.setValue = function setValue_1(value){
  var old;
  old = this.value;
  this.value = value;
  return old;
}
;
_.castableTypeMap$ = {26:1};
_.key = null;
_.value = null;
function NoSuchElementException_0(){
  $fillInStackTrace();
}

function NoSuchElementException(){
}

_ = NoSuchElementException_0.prototype = NoSuchElementException.prototype = new RuntimeException;
_.castableTypeMap$ = {2:1, 7:1, 22:1};
function equalsWithNullCheck(a, b){
  return (a == null?null:a) === (b == null?null:b) || a != null && equals__devirtual$(a, b);
}

var $entry = entry_0;
function gwtOnLoad(errFn, modName, modBase, softPermutationId){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      $entry(init)();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    $entry(init)();
  }
}

var _3Ljava_lang_StackTraceElement_2_classLit = new Class_0, _3Ljava_lang_Throwable_2_classLit = new Class_0, _3Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = new Class_0, _3Lcom_google_gwt_user_client_ui_Widget_2_classLit = new Class_0, _3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = new Class_0, _3Ljava_lang_Object_2_classLit = new Class_0;
$stats && $stats({moduleName:'ansys.siebel.app.TrackitAgain',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
if (ansys_siebel_app_TrackitAgain && ansys_siebel_app_TrackitAgain.onScriptLoad)ansys_siebel_app_TrackitAgain.onScriptLoad(gwtOnLoad);
})();