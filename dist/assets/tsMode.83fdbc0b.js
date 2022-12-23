var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,i,s)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,a=(e,t,i)=>(o(e,"symbol"!=typeof t?t+"":t,i),i),l=(e,t,i)=>new Promise(((s,r)=>{var n=e=>{try{a(i.next(e))}catch(t){r(t)}},o=e=>{try{a(i.throw(e))}catch(t){r(t)}},a=e=>e.done?s(e.value):Promise.resolve(e.value).then(n,o);a((i=i.apply(e,t)).next())}));import{t as c,m as u}from"./monaco-editor.5df43bca.js";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var d=Object.defineProperty,g=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,h=(e,t,i)=>(((e,t,i)=>{t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),f={};((e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of p(t))m.call(e,r)||!i&&"default"===r||d(e,r,{get:()=>t[r],enumerable:!(s=g(t,r))||s.enumerable})})(f,u);var b=class{constructor(e,t){a(this,"_modeId"),a(this,"_defaults"),a(this,"_configChangeListener"),a(this,"_updateExtraLibsToken"),a(this,"_extraLibsChangeListener"),a(this,"_worker"),a(this,"_client"),this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_updateExtraLibs(){return l(this,null,(function*(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=yield this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}))}_getClient(){if(!this._client){this._worker=f.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});let e=this._worker.getProxy();this._defaults.getEagerModelSync()&&(e=e.then((e=>this._worker?this._worker.withSyncedResources(f.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):e))),this._client=e}return this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}},y={};function _(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(const r of e.next)s+=_(r,t,i);return s}function S(e){return e?e.map((e=>e.text)).join(""):""}y["lib.d.ts"]=!0,y["lib.dom.d.ts"]=!0,y["lib.dom.iterable.d.ts"]=!0,y["lib.es2015.collection.d.ts"]=!0,y["lib.es2015.core.d.ts"]=!0,y["lib.es2015.d.ts"]=!0,y["lib.es2015.generator.d.ts"]=!0,y["lib.es2015.iterable.d.ts"]=!0,y["lib.es2015.promise.d.ts"]=!0,y["lib.es2015.proxy.d.ts"]=!0,y["lib.es2015.reflect.d.ts"]=!0,y["lib.es2015.symbol.d.ts"]=!0,y["lib.es2015.symbol.wellknown.d.ts"]=!0,y["lib.es2016.array.include.d.ts"]=!0,y["lib.es2016.d.ts"]=!0,y["lib.es2016.full.d.ts"]=!0,y["lib.es2017.d.ts"]=!0,y["lib.es2017.full.d.ts"]=!0,y["lib.es2017.intl.d.ts"]=!0,y["lib.es2017.object.d.ts"]=!0,y["lib.es2017.sharedmemory.d.ts"]=!0,y["lib.es2017.string.d.ts"]=!0,y["lib.es2017.typedarrays.d.ts"]=!0,y["lib.es2018.asyncgenerator.d.ts"]=!0,y["lib.es2018.asynciterable.d.ts"]=!0,y["lib.es2018.d.ts"]=!0,y["lib.es2018.full.d.ts"]=!0,y["lib.es2018.intl.d.ts"]=!0,y["lib.es2018.promise.d.ts"]=!0,y["lib.es2018.regexp.d.ts"]=!0,y["lib.es2019.array.d.ts"]=!0,y["lib.es2019.d.ts"]=!0,y["lib.es2019.full.d.ts"]=!0,y["lib.es2019.object.d.ts"]=!0,y["lib.es2019.string.d.ts"]=!0,y["lib.es2019.symbol.d.ts"]=!0,y["lib.es2020.bigint.d.ts"]=!0,y["lib.es2020.d.ts"]=!0,y["lib.es2020.full.d.ts"]=!0,y["lib.es2020.intl.d.ts"]=!0,y["lib.es2020.promise.d.ts"]=!0,y["lib.es2020.sharedmemory.d.ts"]=!0,y["lib.es2020.string.d.ts"]=!0,y["lib.es2020.symbol.wellknown.d.ts"]=!0,y["lib.es2021.d.ts"]=!0,y["lib.es2021.full.d.ts"]=!0,y["lib.es2021.intl.d.ts"]=!0,y["lib.es2021.promise.d.ts"]=!0,y["lib.es2021.string.d.ts"]=!0,y["lib.es2021.weakref.d.ts"]=!0,y["lib.es5.d.ts"]=!0,y["lib.es6.d.ts"]=!0,y["lib.esnext.d.ts"]=!0,y["lib.esnext.full.d.ts"]=!0,y["lib.esnext.intl.d.ts"]=!0,y["lib.esnext.promise.d.ts"]=!0,y["lib.esnext.string.d.ts"]=!0,y["lib.esnext.weakref.d.ts"]=!0,y["lib.scripthost.d.ts"]=!0,y["lib.webworker.d.ts"]=!0,y["lib.webworker.importscripts.d.ts"]=!0,y["lib.webworker.iterable.d.ts"]=!0;var v=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:r,column:n}=i,{lineNumber:o,column:a}=s;return{startLineNumber:r,startColumn:n,endLineNumber:o,endColumn:a}}},x=class{constructor(e){a(this,"_libFiles"),a(this,"_hasFetchedLibFiles"),a(this,"_fetchLibFilesPromise"),this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!y[e.path.slice(1)])}getOrCreateModel(e){const t=f.Uri.parse(e),i=f.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return f.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const s=c.getExtraLibs()[e];return s?f.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}fetchLibFilesIfNecessary(e){return l(this,null,(function*(){this._containsLibFile(e)&&(yield this._fetchLibFiles())}))}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}},w=class extends v{constructor(e,t,i,s){super(s),a(this,"_disposables",[]),a(this,"_listener",Object.create(null)),this._libFiles=e,this._defaults=t,this._selector=i;const r=e=>{if(e.getLanguageId()!==i)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let s;const r=e.onDidChangeContent((()=>{clearTimeout(s),s=window.setTimeout(t,500)})),n=e.onDidChangeAttached((()=>{const{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():f.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){r.dispose(),n.dispose(),clearTimeout(s)}},t()},n=e=>{f.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(f.editor.onDidCreateModel((e=>r(e)))),this._disposables.push(f.editor.onWillDisposeModel(n)),this._disposables.push(f.editor.onDidChangeModelLanguage((e=>{n(e.model),r(e.model)}))),this._disposables.push({dispose(){for(const e of f.editor.getModels())n(e)}});const o=()=>{for(const e of f.editor.getModels())n(e),r(e)};this._disposables.push(this._defaults.onDidChange(o)),this._disposables.push(this._defaults.onDidExtraLibsChange(o)),f.editor.getModels().forEach((e=>r(e)))}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}_doValidate(e){return l(this,null,(function*(){const t=yield this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:r,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),r||i.push(t.getSemanticDiagnostics(e.uri.toString())),n||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const o=yield Promise.all(i);if(!o||e.isDisposed())return;const a=o.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),l=a.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?f.Uri.parse(e.file.fileName):null));yield this._libFiles.fetchLibFilesIfNecessary(l),e.isDisposed()||f.editor.setModelMarkers(e,this._selector,a.map((t=>this._convertDiagnostics(e,t))))}))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:r,column:n}=e.getPositionAt(i),{lineNumber:o,column:a}=e.getPositionAt(i+s),l=[];return t.reportsUnnecessary&&l.push(f.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(f.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:r,startColumn:n,endLineNumber:o,endColumn:a,message:_(t.messageText,"\n"),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach((t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;const r=t.start||0,n=t.length||1,{lineNumber:o,column:a}=s.getPositionAt(r),{lineNumber:l,column:c}=s.getPositionAt(r+n);i.push({resource:s.uri,startLineNumber:o,startColumn:a,endLineNumber:l,endColumn:c,message:_(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return f.MarkerSeverity.Error;case 3:return f.MarkerSeverity.Info;case 0:return f.MarkerSeverity.Warning;case 2:return f.MarkerSeverity.Hint}return f.MarkerSeverity.Info}},k=class extends v{get triggerCharacters(){return["."]}provideCompletionItems(e,t,i,s){return l(this,null,(function*(){const i=e.getWordUntilPosition(t),s=new f.Range(t.lineNumber,i.startColumn,t.lineNumber,i.endColumn),r=e.uri,n=e.getOffsetAt(t),o=yield this._worker(r);if(e.isDisposed())return;const a=yield o.getCompletionsAtPosition(r.toString(),n);if(!a||e.isDisposed())return;return{suggestions:a.entries.map((i=>{var o;let a=s;if(i.replacementSpan){const t=e.getPositionAt(i.replacementSpan.start),s=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);a=new f.Range(t.lineNumber,t.column,s.lineNumber,s.column)}const l=[];return-1!==(null==(o=i.kindModifiers)?void 0:o.indexOf("deprecated"))&&l.push(f.languages.CompletionItemTag.Deprecated),{uri:r,position:t,offset:n,range:a,label:i.name,insertText:i.name,sortText:i.sortText,kind:k.convertKind(i.kind),tags:l}}))}}))}resolveCompletionItem(e,t){return l(this,null,(function*(){const t=e,i=t.uri,s=t.position,r=t.offset,n=yield this._worker(i),o=yield n.getCompletionEntryDetails(i.toString(),r,t.label);return o?{uri:i,position:s,label:o.name,kind:k.convertKind(o.kind),detail:S(o.displayParts),documentation:{value:k.createDocumentationString(o)}}:t}))}static convertKind(e){switch(e){case A.primitiveType:case A.keyword:return f.languages.CompletionItemKind.Keyword;case A.variable:case A.localVariable:return f.languages.CompletionItemKind.Variable;case A.memberVariable:case A.memberGetAccessor:case A.memberSetAccessor:return f.languages.CompletionItemKind.Field;case A.function:case A.memberFunction:case A.constructSignature:case A.callSignature:case A.indexSignature:return f.languages.CompletionItemKind.Function;case A.enum:return f.languages.CompletionItemKind.Enum;case A.module:return f.languages.CompletionItemKind.Module;case A.class:return f.languages.CompletionItemKind.Class;case A.interface:return f.languages.CompletionItemKind.Interface;case A.warning:return f.languages.CompletionItemKind.File}return f.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=S(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${C(i)}`;return t}};function C(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` — ${s.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var D=class extends v{constructor(){super(...arguments),a(this,"signatureHelpTriggerCharacters",["(",","])}static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case f.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case f.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case f.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}provideSignatureHelp(e,t,i,s){return l(this,null,(function*(){const i=e.uri,r=e.getOffsetAt(t),n=yield this._worker(i);if(e.isDisposed())return;const o=yield n.getSignatureHelpItems(i.toString(),r,{triggerReason:D._toSignatureHelpTriggerReason(s)});if(!o||e.isDisposed())return;const a={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]};return o.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:S(e.documentation)},t.label+=S(e.prefixDisplayParts),e.parameters.forEach(((i,s,r)=>{const n=S(i.displayParts),o={label:n,documentation:{value:S(i.documentation)}};t.label+=n,t.parameters.push(o),s<r.length-1&&(t.label+=S(e.separatorDisplayParts))})),t.label+=S(e.suffixDisplayParts),a.signatures.push(t)})),{value:a,dispose(){}}}))}},F=class extends v{provideHover(e,t,i){return l(this,null,(function*(){const i=e.uri,s=e.getOffsetAt(t),r=yield this._worker(i);if(e.isDisposed())return;const n=yield r.getQuickInfoAtPosition(i.toString(),s);if(!n||e.isDisposed())return;const o=S(n.documentation),a=n.tags?n.tags.map((e=>C(e))).join("  \n\n"):"",l=S(n.displayParts);return{range:this._textSpanToRange(e,n.textSpan),contents:[{value:"```typescript\n"+l+"\n```\n"},{value:o+(a?"\n\n"+a:"")}]}}))}},P=class extends v{provideDocumentHighlights(e,t,i){return l(this,null,(function*(){const i=e.uri,s=e.getOffsetAt(t),r=yield this._worker(i);if(e.isDisposed())return;const n=yield r.getOccurrencesAtPosition(i.toString(),s);return n&&!e.isDisposed()?n.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?f.languages.DocumentHighlightKind.Write:f.languages.DocumentHighlightKind.Text}))):void 0}))}},I=class extends v{constructor(e,t){super(t),this._libFiles=e}provideDefinition(e,t,i){return l(this,null,(function*(){const i=e.uri,s=e.getOffsetAt(t),r=yield this._worker(i);if(e.isDisposed())return;const n=yield r.getDefinitionAtPosition(i.toString(),s);if(!n||e.isDisposed())return;if(yield this._libFiles.fetchLibFilesIfNecessary(n.map((e=>f.Uri.parse(e.fileName)))),e.isDisposed())return;const o=[];for(let e of n){const t=this._libFiles.getOrCreateModel(e.fileName);t&&o.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return o}))}},O=class extends v{constructor(e,t){super(t),this._libFiles=e}provideReferences(e,t,i,s){return l(this,null,(function*(){const i=e.uri,s=e.getOffsetAt(t),r=yield this._worker(i);if(e.isDisposed())return;const n=yield r.getReferencesAtPosition(i.toString(),s);if(!n||e.isDisposed())return;if(yield this._libFiles.fetchLibFilesIfNecessary(n.map((e=>f.Uri.parse(e.fileName)))),e.isDisposed())return;const o=[];for(let e of n){const t=this._libFiles.getOrCreateModel(e.fileName);t&&o.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return o}))}},L=class extends v{provideDocumentSymbols(e,t){return l(this,null,(function*(){const t=e.uri,i=yield this._worker(t);if(e.isDisposed())return;const s=yield i.getNavigationBarItems(t.toString());if(!s||e.isDisposed())return;const r=(t,i,s)=>{let n={name:i.text,detail:"",kind:T[i.kind]||f.languages.SymbolKind.Variable,range:this._textSpanToRange(e,i.spans[0]),selectionRange:this._textSpanToRange(e,i.spans[0]),tags:[]};if(s&&(n.containerName=s),i.childItems&&i.childItems.length>0)for(let e of i.childItems)r(t,e,n.name);t.push(n)};let n=[];return s.forEach((e=>r(n,e))),n}))}},A=class{};h(A,"unknown",""),h(A,"keyword","keyword"),h(A,"script","script"),h(A,"module","module"),h(A,"class","class"),h(A,"interface","interface"),h(A,"type","type"),h(A,"enum","enum"),h(A,"variable","var"),h(A,"localVariable","local var"),h(A,"function","function"),h(A,"localFunction","local function"),h(A,"memberFunction","method"),h(A,"memberGetAccessor","getter"),h(A,"memberSetAccessor","setter"),h(A,"memberVariable","property"),h(A,"constructorImplementation","constructor"),h(A,"callSignature","call"),h(A,"indexSignature","index"),h(A,"constructSignature","construct"),h(A,"parameter","parameter"),h(A,"typeParameter","type parameter"),h(A,"primitiveType","primitive type"),h(A,"label","label"),h(A,"alias","alias"),h(A,"const","const"),h(A,"let","let"),h(A,"warning","warning");var T=Object.create(null);T[A.module]=f.languages.SymbolKind.Module,T[A.class]=f.languages.SymbolKind.Class,T[A.enum]=f.languages.SymbolKind.Enum,T[A.interface]=f.languages.SymbolKind.Interface,T[A.memberFunction]=f.languages.SymbolKind.Method,T[A.memberVariable]=f.languages.SymbolKind.Property,T[A.memberGetAccessor]=f.languages.SymbolKind.Property,T[A.memberSetAccessor]=f.languages.SymbolKind.Property,T[A.variable]=f.languages.SymbolKind.Variable,T[A.const]=f.languages.SymbolKind.Variable,T[A.localVariable]=f.languages.SymbolKind.Variable,T[A.variable]=f.languages.SymbolKind.Variable,T[A.function]=f.languages.SymbolKind.Function,T[A.localFunction]=f.languages.SymbolKind.Function;var N,K,M=class extends v{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},R=class extends M{provideDocumentRangeFormattingEdits(e,t,i,s){return l(this,null,(function*(){const s=e.uri,r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),n=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=yield this._worker(s);if(e.isDisposed())return;const a=yield o.getFormattingEditsForRange(s.toString(),r,n,M._convertOptions(i));return a&&!e.isDisposed()?a.map((t=>this._convertTextChanges(e,t))):void 0}))}},E=class extends M{get autoFormatTriggerCharacters(){return[";","}","\n"]}provideOnTypeFormattingEdits(e,t,i,s,r){return l(this,null,(function*(){const r=e.uri,n=e.getOffsetAt(t),o=yield this._worker(r);if(e.isDisposed())return;const a=yield o.getFormattingEditsAfterKeystroke(r.toString(),n,i,M._convertOptions(s));return a&&!e.isDisposed()?a.map((t=>this._convertTextChanges(e,t))):void 0}))}},H=class extends M{provideCodeActions(e,t,i,s){return l(this,null,(function*(){const s=e.uri,r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),n=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=M._convertOptions(e.getOptions()),a=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),l=yield this._worker(s);if(e.isDisposed())return;const c=yield l.getCodeFixesAtPosition(s.toString(),r,n,a,o);if(!c||e.isDisposed())return{actions:[],dispose:()=>{}};return{actions:c.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t))),dispose:()=>{}}}))}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const r of i.changes)for(const t of r.textChanges)s.push({resource:e.uri,edit:{range:this._textSpanToRange(e,t.span),text:t.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},j=class extends v{constructor(e,t){super(t),this._libFiles=e}provideRenameEdits(e,t,i,s){return l(this,null,(function*(){const s=e.uri,r=s.toString(),n=e.getOffsetAt(t),o=yield this._worker(s);if(e.isDisposed())return;const a=yield o.getRenameInfo(r,n,{allowRenameOfImportPath:!1});if(!1===a.canRename)return{edits:[],rejectReason:a.localizedErrorMessage};if(void 0!==a.fileToRename)throw new Error("Renaming files is not supported.");const l=yield o.findRenameLocations(r,n,!1,!1,!1);if(!l||e.isDisposed())return;const c=[];for(const e of l){const t=this._libFiles.getOrCreateModel(e.fileName);if(!t)throw new Error(`Unknown file ${e.fileName}.`);c.push({resource:t.uri,edit:{range:this._textSpanToRange(t,e.textSpan),text:i}})}return{edits:c}}))}},V=class extends v{provideInlayHints(e,a,c){return l(this,null,(function*(){const l=e.uri,c=l.toString(),u=e.getOffsetAt({lineNumber:a.startLineNumber,column:a.startColumn}),d=e.getOffsetAt({lineNumber:a.endLineNumber,column:a.endColumn}),g=yield this._worker(l);if(e.isDisposed())return null;return{hints:(yield g.provideInlayHints(c,u,d)).map((a=>{return l=((e,t)=>{for(var i in t||(t={}))r.call(t,i)&&o(e,i,t[i]);if(s)for(var i of s(t))n.call(t,i)&&o(e,i,t[i]);return e})({},a),c={label:a.text,position:e.getPositionAt(a.position),kind:this._convertHintKind(a.kind)},t(l,i(c));var l,c})),dispose:()=>{}}}))}_convertHintKind(e){return"Parameter"===e?f.languages.InlayHintKind.Parameter:f.languages.InlayHintKind.Type}};function W(e){K=z(e,"typescript")}function B(e){N=z(e,"javascript")}function U(){return new Promise(((e,t)=>{if(!N)return t("JavaScript not registered!");e(N)}))}function $(){return new Promise(((e,t)=>{if(!K)return t("TypeScript not registered!");e(K)}))}function z(e,t){const i=new b(t,e),s=(...e)=>i.getLanguageServiceWorker(...e),r=new x(s);return f.languages.registerCompletionItemProvider(t,new k(s)),f.languages.registerSignatureHelpProvider(t,new D(s)),f.languages.registerHoverProvider(t,new F(s)),f.languages.registerDocumentHighlightProvider(t,new P(s)),f.languages.registerDefinitionProvider(t,new I(r,s)),f.languages.registerReferenceProvider(t,new O(r,s)),f.languages.registerDocumentSymbolProvider(t,new L(s)),f.languages.registerDocumentRangeFormattingEditProvider(t,new R(s)),f.languages.registerOnTypeFormattingEditProvider(t,new E(s)),f.languages.registerCodeActionProvider(t,new H(s)),f.languages.registerRenameProvider(t,new j(r,s)),f.languages.registerInlayHintsProvider(t,new V(s)),new w(r,e,t,s),s}export{v as Adapter,H as CodeActionAdaptor,I as DefinitionAdapter,w as DiagnosticsAdapter,R as FormatAdapter,M as FormatHelper,E as FormatOnTypeAdapter,V as InlayHintsAdapter,A as Kind,x as LibFiles,P as OccurrencesAdapter,L as OutlineAdapter,F as QuickInfoAdapter,O as ReferenceAdapter,j as RenameAdapter,D as SignatureHelpAdapter,k as SuggestAdapter,b as WorkerManager,_ as flattenDiagnosticMessageText,U as getJavaScriptWorker,$ as getTypeScriptWorker,B as setupJavaScript,W as setupTypeScript};
