(self.webpackChunkspectacle_boilerplate=self.webpackChunkspectacle_boilerplate||[]).push([[76],{3771:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>B});var r=i(96540);const n=JSON.parse('[{"instructions":"**Get inside** the `thecmdchallenge/` directory"},{"instructions":"Who won the previous challenge? Each winner should explain what he/she did to the entire class each time"},{"instructions":"**Print** current directory path"},{"instructions":"**List all** the files from the **current directory** including the hidden ones"},{"instructions":"Now **list all** the files inside the project, recursively (all files in the hierarchy)"},{"instructions":"**Clear** all the clutter from the command line"},{"instructions":"**Go** to the last level below the **small-name** folder and **show** on the console the content of the `trophy.txt` file"},{"instructions":"**Move** one level up and get to the **funcode** directory and **list all** files with the JavaScript typical extension"},{"instructions":"**Create** a new directory inside `funcode/the-most-funny/` called \\"**not-that-funny**\\""},{"instructions":"**Create a copy** of **the-mostboring-text.txt** (you can find it within `/boringfolder/`\'s children) and **name** it **lol.txt**"},{"instructions":"**Move** `funcode/kids.jpg` inside `funcode/images/hello/`"},{"instructions":"**Remove** the \\"**small-name**\\" directory "},{"instructions":"**Print** in the command line the content of `the-ultimate-joke.txt`"},{"instructions":"**Remove** all the contents from the **boringfolder**, they are extremely boring..."},{"instructions":"**Open** the file `kamehameha/dragon-ball-jokes.md` using the **VI command line text editor**"},{"instructions":"**Update** the file `kamehameha/dragon-ball-jokes.md` by removing the first joke you read on the file, finally **save and close** the text editor"}]');var s=i(97285),a=i(35313),o=i(84561),c=i(77678),p=i(61105),_=i(97036),j=i(36807),l=i(72751),S=i(53407),y=i(24899),u=i(49392),h=i(15510);const E=i.p+"images/icon.53618022dee3e54f61a31b76fbdd1e14.png";function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function m(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function d(t){var e=function(t,e){if("object"!=x(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!=x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==x(e)?e:e+""}function g(t,e,i){return e=f(e),function(t,e){if(e&&("object"==x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,C()?Reflect.construct(e,i||[],f(t).constructor):e.apply(t,i))}function C(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(C=function(){return!!t})()}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}i(1130);var b=(0,h.A)({primary:"white",secondary:"#1F2022",tertiary:"#03A9FC",quaternary:"#CECECE"},{primary:"Montserrat",secondary:"Helvetica"}),B=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(e,t),i=e,(h=[{key:"render",value:function(){var t=n.map((function(t,e){return r.createElement(s.A,{key:e,transition:["fade"],bgColor:"primary"},r.createElement(a.A,null,t.instructions))}));return r.createElement(o.A,{transition:["zoom","slide"],transitionDuration:500,theme:b},r.createElement(s.A,{transition:["zoom"],bgColor:"primary"},r.createElement(c.A,{margin:"0 auto 100px auto",src:E}),r.createElement(p.A,{size:1,fit:!0,caps:!0,lineHeight:1,textColor:"secondary"},"The Command Line Challenge"),r.createElement(_.A,{margin:"10px 0 0",textColor:"tertiary",size:1,fit:!0,bold:!0},"Get to know the coder's best friend")),r.createElement(s.A,{transition:["fade"],bgColor:"tertiary"},r.createElement(p.A,{size:6,textColor:"primary",caps:!0},"How does it work?"),r.createElement(p.A,{size:1,textColor:"secondary"},"16 challenges"),r.createElement(p.A,{size:2,textColor:"secondary"},"12 commands"),r.createElement(p.A,{size:3,textColor:"secondary"},"1 winner")),r.createElement(s.A,{transition:["fade"],bgColor:"primary",textColor:"tertiary"},r.createElement(p.A,{size:2,textColor:"secondary",caps:!0},"Rules"),r.createElement(j.A,null,r.createElement(l.A,null,"Each challenge can only have 1 winner."),r.createElement(l.A,null,"Whoever wins the most, wins the prize!"),r.createElement(l.A,null,"Only for amateurs (experienced can participate but not win)"),r.createElement(l.A,null,"Follow the exact instructions, it can be tricky"),r.createElement(l.A,null,"Use the tab shortcut for auto-complete!"))),r.createElement(s.A,{transition:["fade"],bgColor:"primary",textColor:"tertiary"},r.createElement(p.A,{size:2,textColor:"secondary",caps:!0},"Before we start"),r.createElement(_.A,{margin:"10px 0 0",textColor:"tertiary",size:1,fit:!0},"Each student must clone the following repository:"),r.createElement(_.A,{margin:"10px 0 0",textColor:"secondary",size:1,fit:!0,bold:!0},"https://github.com/breatheco-de/exercise-terminal-challenge.git")),r.createElement(s.A,{transition:["fade"],bgColor:"primary",textColor:"tertiary"},r.createElement(p.A,{size:2,textColor:"secondary",caps:!0},"Are u ready?")),t,r.createElement(s.A,{transition:["fade"],bgColor:"secondary",textColor:"tertiary"},r.createElement(S.A,null,r.createElement(y.A,null,"VIM is my favorite text editor. I've been using it for years... I can't figure out how to exit."),r.createElement(u.A,null,"Albert Einstein and Pitagoras"))),r.createElement(s.A,{transition:["fade"],bgColor:"primary",textColor:"tertiary"},r.createElement(p.A,{size:2,textColor:"tertiary",caps:!0},"THE END")))}}])&&m(i.prototype,h),x&&m(i,x),Object.defineProperty(i,"prototype",{writable:!1}),i;var i,h,x}(r.Component);"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"theme","C:\\Users\\fasan\\Documents\\GitHub\\4geeks\\exercise-terminal-challenge\\slides\\index.js"),__REACT_HOT_LOADER__.register(B,"Presentation","C:\\Users\\fasan\\Documents\\GitHub\\4geeks\\exercise-terminal-challenge\\slides\\index.js"))},82102:(t,e,i)=>{var r={"./Binary_Property/ASCII.js":49014,"./Binary_Property/ASCII_Hex_Digit.js":37662,"./Binary_Property/Alphabetic.js":32678,"./Binary_Property/Any.js":99247,"./Binary_Property/Assigned.js":19489,"./Binary_Property/Bidi_Control.js":91833,"./Binary_Property/Bidi_Mirrored.js":75e3,"./Binary_Property/Case_Ignorable.js":14817,"./Binary_Property/Cased.js":87053,"./Binary_Property/Changes_When_Casefolded.js":85928,"./Binary_Property/Changes_When_Casemapped.js":16773,"./Binary_Property/Changes_When_Lowercased.js":52277,"./Binary_Property/Changes_When_NFKC_Casefolded.js":71517,"./Binary_Property/Changes_When_Titlecased.js":69796,"./Binary_Property/Changes_When_Uppercased.js":514,"./Binary_Property/Dash.js":38105,"./Binary_Property/Default_Ignorable_Code_Point.js":72995,"./Binary_Property/Deprecated.js":54068,"./Binary_Property/Diacritic.js":23207,"./Binary_Property/Emoji.js":39767,"./Binary_Property/Emoji_Component.js":40751,"./Binary_Property/Emoji_Modifier.js":58167,"./Binary_Property/Emoji_Modifier_Base.js":38751,"./Binary_Property/Emoji_Presentation.js":85098,"./Binary_Property/Extended_Pictographic.js":55304,"./Binary_Property/Extender.js":1926,"./Binary_Property/Grapheme_Base.js":6906,"./Binary_Property/Grapheme_Extend.js":12435,"./Binary_Property/Hex_Digit.js":89310,"./Binary_Property/IDS_Binary_Operator.js":94634,"./Binary_Property/IDS_Trinary_Operator.js":22072,"./Binary_Property/ID_Continue.js":80382,"./Binary_Property/ID_Start.js":74279,"./Binary_Property/Ideographic.js":4366,"./Binary_Property/Join_Control.js":92207,"./Binary_Property/Logical_Order_Exception.js":84583,"./Binary_Property/Lowercase.js":52396,"./Binary_Property/Math.js":14715,"./Binary_Property/Noncharacter_Code_Point.js":60242,"./Binary_Property/Pattern_Syntax.js":70345,"./Binary_Property/Pattern_White_Space.js":54808,"./Binary_Property/Quotation_Mark.js":96687,"./Binary_Property/Radical.js":9107,"./Binary_Property/Regional_Indicator.js":74562,"./Binary_Property/Sentence_Terminal.js":11467,"./Binary_Property/Soft_Dotted.js":5480,"./Binary_Property/Terminal_Punctuation.js":59394,"./Binary_Property/Unified_Ideograph.js":63127,"./Binary_Property/Uppercase.js":48537,"./Binary_Property/Variation_Selector.js":97710,"./Binary_Property/White_Space.js":29317,"./Binary_Property/XID_Continue.js":30538,"./Binary_Property/XID_Start.js":97739,"./General_Category/Cased_Letter.js":86330,"./General_Category/Close_Punctuation.js":65764,"./General_Category/Connector_Punctuation.js":70751,"./General_Category/Control.js":24418,"./General_Category/Currency_Symbol.js":82787,"./General_Category/Dash_Punctuation.js":5788,"./General_Category/Decimal_Number.js":51182,"./General_Category/Enclosing_Mark.js":985,"./General_Category/Final_Punctuation.js":31328,"./General_Category/Format.js":56020,"./General_Category/Initial_Punctuation.js":7124,"./General_Category/Letter.js":14955,"./General_Category/Letter_Number.js":30867,"./General_Category/Line_Separator.js":68249,"./General_Category/Lowercase_Letter.js":46077,"./General_Category/Mark.js":13334,"./General_Category/Math_Symbol.js":2996,"./General_Category/Modifier_Letter.js":89893,"./General_Category/Modifier_Symbol.js":70449,"./General_Category/Nonspacing_Mark.js":43083,"./General_Category/Number.js":96934,"./General_Category/Open_Punctuation.js":29024,"./General_Category/Other.js":50673,"./General_Category/Other_Letter.js":29972,"./General_Category/Other_Number.js":69757,"./General_Category/Other_Punctuation.js":29570,"./General_Category/Other_Symbol.js":73736,"./General_Category/Paragraph_Separator.js":74293,"./General_Category/Private_Use.js":45808,"./General_Category/Punctuation.js":10795,"./General_Category/Separator.js":16832,"./General_Category/Space_Separator.js":54781,"./General_Category/Spacing_Mark.js":1540,"./General_Category/Surrogate.js":3401,"./General_Category/Symbol.js":11415,"./General_Category/Titlecase_Letter.js":52588,"./General_Category/Unassigned.js":90268,"./General_Category/Uppercase_Letter.js":33346,"./Script/Adlam.js":29500,"./Script/Ahom.js":89048,"./Script/Anatolian_Hieroglyphs.js":75287,"./Script/Arabic.js":92933,"./Script/Armenian.js":14998,"./Script/Avestan.js":94579,"./Script/Balinese.js":39522,"./Script/Bamum.js":69927,"./Script/Bassa_Vah.js":51551,"./Script/Batak.js":34862,"./Script/Bengali.js":2567,"./Script/Bhaiksuki.js":7944,"./Script/Bopomofo.js":26508,"./Script/Brahmi.js":87254,"./Script/Braille.js":41160,"./Script/Buginese.js":90169,"./Script/Buhid.js":7663,"./Script/Canadian_Aboriginal.js":89771,"./Script/Carian.js":59235,"./Script/Caucasian_Albanian.js":91118,"./Script/Chakma.js":65724,"./Script/Cham.js":23988,"./Script/Cherokee.js":57877,"./Script/Chorasmian.js":10774,"./Script/Common.js":44528,"./Script/Coptic.js":46183,"./Script/Cuneiform.js":20487,"./Script/Cypriot.js":99135,"./Script/Cypro_Minoan.js":76395,"./Script/Cyrillic.js":17144,"./Script/Deseret.js":43419,"./Script/Devanagari.js":59391,"./Script/Dives_Akuru.js":24563,"./Script/Dogra.js":88302,"./Script/Duployan.js":31997,"./Script/Egyptian_Hieroglyphs.js":35493,"./Script/Elbasan.js":55331,"./Script/Elymaic.js":20591,"./Script/Ethiopic.js":55096,"./Script/Georgian.js":90163,"./Script/Glagolitic.js":83308,"./Script/Gothic.js":23883,"./Script/Grantha.js":3176,"./Script/Greek.js":41449,"./Script/Gujarati.js":78402,"./Script/Gunjala_Gondi.js":50297,"./Script/Gurmukhi.js":1967,"./Script/Han.js":31050,"./Script/Hangul.js":82944,"./Script/Hanifi_Rohingya.js":34032,"./Script/Hanunoo.js":80963,"./Script/Hatran.js":91591,"./Script/Hebrew.js":32538,"./Script/Hiragana.js":39666,"./Script/Imperial_Aramaic.js":13963,"./Script/Inherited.js":60711,"./Script/Inscriptional_Pahlavi.js":74754,"./Script/Inscriptional_Parthian.js":75580,"./Script/Javanese.js":53524,"./Script/Kaithi.js":18679,"./Script/Kannada.js":70821,"./Script/Katakana.js":67115,"./Script/Kayah_Li.js":44109,"./Script/Kharoshthi.js":82044,"./Script/Khitan_Small_Script.js":95708,"./Script/Khmer.js":78576,"./Script/Khojki.js":959,"./Script/Khudawadi.js":48015,"./Script/Lao.js":71853,"./Script/Latin.js":56051,"./Script/Lepcha.js":53516,"./Script/Limbu.js":66566,"./Script/Linear_A.js":70308,"./Script/Linear_B.js":52365,"./Script/Lisu.js":43778,"./Script/Lycian.js":21257,"./Script/Lydian.js":9470,"./Script/Mahajani.js":35780,"./Script/Makasar.js":76741,"./Script/Malayalam.js":55170,"./Script/Mandaic.js":77654,"./Script/Manichaean.js":76932,"./Script/Marchen.js":99545,"./Script/Masaram_Gondi.js":45403,"./Script/Medefaidrin.js":38147,"./Script/Meetei_Mayek.js":35654,"./Script/Mende_Kikakui.js":48542,"./Script/Meroitic_Cursive.js":60577,"./Script/Meroitic_Hieroglyphs.js":70024,"./Script/Miao.js":27887,"./Script/Modi.js":84862,"./Script/Mongolian.js":22345,"./Script/Mro.js":74113,"./Script/Multani.js":19757,"./Script/Myanmar.js":32722,"./Script/Nabataean.js":44632,"./Script/Nandinagari.js":2651,"./Script/New_Tai_Lue.js":11351,"./Script/Newa.js":71508,"./Script/Nko.js":67185,"./Script/Nushu.js":62412,"./Script/Nyiakeng_Puachue_Hmong.js":40381,"./Script/Ogham.js":52861,"./Script/Ol_Chiki.js":52327,"./Script/Old_Hungarian.js":62446,"./Script/Old_Italic.js":12887,"./Script/Old_North_Arabian.js":96231,"./Script/Old_Permic.js":27981,"./Script/Old_Persian.js":97427,"./Script/Old_Sogdian.js":50396,"./Script/Old_South_Arabian.js":18137,"./Script/Old_Turkic.js":74767,"./Script/Old_Uyghur.js":52993,"./Script/Oriya.js":41271,"./Script/Osage.js":1444,"./Script/Osmanya.js":37881,"./Script/Pahawh_Hmong.js":92438,"./Script/Palmyrene.js":78658,"./Script/Pau_Cin_Hau.js":11251,"./Script/Phags_Pa.js":3404,"./Script/Phoenician.js":48223,"./Script/Psalter_Pahlavi.js":54806,"./Script/Rejang.js":74538,"./Script/Runic.js":47172,"./Script/Samaritan.js":27383,"./Script/Saurashtra.js":1003,"./Script/Sharada.js":19385,"./Script/Shavian.js":83533,"./Script/Siddham.js":92251,"./Script/SignWriting.js":31654,"./Script/Sinhala.js":47507,"./Script/Sogdian.js":68958,"./Script/Sora_Sompeng.js":62536,"./Script/Soyombo.js":29623,"./Script/Sundanese.js":49673,"./Script/Syloti_Nagri.js":55063,"./Script/Syriac.js":37136,"./Script/Tagalog.js":29078,"./Script/Tagbanwa.js":3784,"./Script/Tai_Le.js":49229,"./Script/Tai_Tham.js":91444,"./Script/Tai_Viet.js":29282,"./Script/Takri.js":85236,"./Script/Tamil.js":66346,"./Script/Tangsa.js":58493,"./Script/Tangut.js":54964,"./Script/Telugu.js":85321,"./Script/Thaana.js":13094,"./Script/Thai.js":29987,"./Script/Tibetan.js":60964,"./Script/Tifinagh.js":84173,"./Script/Tirhuta.js":98794,"./Script/Toto.js":4829,"./Script/Ugaritic.js":69495,"./Script/Vai.js":74949,"./Script/Vithkuqi.js":46386,"./Script/Wancho.js":24111,"./Script/Warang_Citi.js":61773,"./Script/Yezidi.js":37853,"./Script/Yi.js":30351,"./Script/Zanabazar_Square.js":22581,"./Script_Extensions/Adlam.js":66665,"./Script_Extensions/Ahom.js":70435,"./Script_Extensions/Anatolian_Hieroglyphs.js":48526,"./Script_Extensions/Arabic.js":49058,"./Script_Extensions/Armenian.js":76069,"./Script_Extensions/Avestan.js":95682,"./Script_Extensions/Balinese.js":33585,"./Script_Extensions/Bamum.js":20974,"./Script_Extensions/Bassa_Vah.js":75886,"./Script_Extensions/Batak.js":55455,"./Script_Extensions/Bengali.js":94426,"./Script_Extensions/Bhaiksuki.js":91965,"./Script_Extensions/Bopomofo.js":14487,"./Script_Extensions/Brahmi.js":30929,"./Script_Extensions/Braille.js":29577,"./Script_Extensions/Buginese.js":42970,"./Script_Extensions/Buhid.js":79470,"./Script_Extensions/Canadian_Aboriginal.js":35074,"./Script_Extensions/Carian.js":56308,"./Script_Extensions/Caucasian_Albanian.js":35549,"./Script_Extensions/Chakma.js":64003,"./Script_Extensions/Cham.js":97287,"./Script_Extensions/Cherokee.js":4606,"./Script_Extensions/Chorasmian.js":23201,"./Script_Extensions/Common.js":5107,"./Script_Extensions/Coptic.js":50148,"./Script_Extensions/Cuneiform.js":8990,"./Script_Extensions/Cypriot.js":15246,"./Script_Extensions/Cypro_Minoan.js":12736,"./Script_Extensions/Cyrillic.js":39695,"./Script_Extensions/Deseret.js":73002,"./Script_Extensions/Devanagari.js":54732,"./Script_Extensions/Dives_Akuru.js":77358,"./Script_Extensions/Dogra.js":96095,"./Script_Extensions/Duployan.js":73642,"./Script_Extensions/Egyptian_Hieroglyphs.js":2206,"./Script_Extensions/Elbasan.js":88354,"./Script_Extensions/Elymaic.js":22446,"./Script_Extensions/Ethiopic.js":23839,"./Script_Extensions/Georgian.js":58320,"./Script_Extensions/Glagolitic.js":36799,"./Script_Extensions/Gothic.js":68384,"./Script_Extensions/Grantha.js":44685,"./Script_Extensions/Greek.js":35272,"./Script_Extensions/Gujarati.js":77721,"./Script_Extensions/Gunjala_Gondi.js":88472,"./Script_Extensions/Gurmukhi.js":62080,"./Script_Extensions/Han.js":9867,"./Script_Extensions/Hangul.js":30359,"./Script_Extensions/Hanifi_Rohingya.js":2733,"./Script_Extensions/Hanunoo.js":27350,"./Script_Extensions/Hatran.js":57508,"./Script_Extensions/Hebrew.js":61521,"./Script_Extensions/Hiragana.js":2465,"./Script_Extensions/Imperial_Aramaic.js":69052,"./Script_Extensions/Inherited.js":40410,"./Script_Extensions/Inscriptional_Pahlavi.js":63479,"./Script_Extensions/Inscriptional_Parthian.js":13219,"./Script_Extensions/Javanese.js":66903,"./Script_Extensions/Kaithi.js":90956,"./Script_Extensions/Kannada.js":39276,"./Script_Extensions/Katakana.js":89232,"./Script_Extensions/Kayah_Li.js":74722,"./Script_Extensions/Kharoshthi.js":31615,"./Script_Extensions/Khitan_Small_Script.js":86465,"./Script_Extensions/Khmer.js":78981,"./Script_Extensions/Khojki.js":16352,"./Script_Extensions/Khudawadi.js":40906,"./Script_Extensions/Lao.js":16480,"./Script_Extensions/Latin.js":39866,"./Script_Extensions/Lepcha.js":75179,"./Script_Extensions/Limbu.js":89563,"./Script_Extensions/Linear_A.js":13355,"./Script_Extensions/Linear_B.js":12142,"./Script_Extensions/Lisu.js":43529,"./Script_Extensions/Lycian.js":37462,"./Script_Extensions/Lydian.js":93825,"./Script_Extensions/Mahajani.js":85351,"./Script_Extensions/Makasar.js":4056,"./Script_Extensions/Malayalam.js":67947,"./Script_Extensions/Mandaic.js":36071,"./Script_Extensions/Manichaean.js":42419,"./Script_Extensions/Marchen.js":43128,"./Script_Extensions/Masaram_Gondi.js":77506,"./Script_Extensions/Medefaidrin.js":60674,"./Script_Extensions/Meetei_Mayek.js":37065,"./Script_Extensions/Mende_Kikakui.js":8435,"./Script_Extensions/Meroitic_Cursive.js":92834,"./Script_Extensions/Meroitic_Hieroglyphs.js":47835,"./Script_Extensions/Miao.js":90848,"./Script_Extensions/Modi.js":77953,"./Script_Extensions/Mongolian.js":716,"./Script_Extensions/Mro.js":68896,"./Script_Extensions/Multani.js":43196,"./Script_Extensions/Myanmar.js":53447,"./Script_Extensions/Nabataean.js":46301,"./Script_Extensions/Nandinagari.js":78830,"./Script_Extensions/New_Tai_Lue.js":64766,"./Script_Extensions/Newa.js":65879,"./Script_Extensions/Nko.js":17568,"./Script_Extensions/Nushu.js":50073,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":17122,"./Script_Extensions/Ogham.js":45292,"./Script_Extensions/Ol_Chiki.js":60296,"./Script_Extensions/Old_Hungarian.js":17171,"./Script_Extensions/Old_Italic.js":50972,"./Script_Extensions/Old_North_Arabian.js":8010,"./Script_Extensions/Old_Permic.js":3894,"./Script_Extensions/Old_Persian.js":49490,"./Script_Extensions/Old_Sogdian.js":92033,"./Script_Extensions/Old_South_Arabian.js":39168,"./Script_Extensions/Old_Turkic.js":9419,"./Script_Extensions/Old_Uyghur.js":96066,"./Script_Extensions/Oriya.js":33658,"./Script_Extensions/Osage.js":79193,"./Script_Extensions/Osmanya.js":85064,"./Script_Extensions/Pahawh_Hmong.js":93701,"./Script_Extensions/Palmyrene.js":68235,"./Script_Extensions/Pau_Cin_Hau.js":45866,"./Script_Extensions/Phags_Pa.js":40447,"./Script_Extensions/Phoenician.js":96848,"./Script_Extensions/Psalter_Pahlavi.js":70147,"./Script_Extensions/Rejang.js":90165,"./Script_Extensions/Runic.js":17953,"./Script_Extensions/Samaritan.js":43926,"./Script_Extensions/Saurashtra.js":1624,"./Script_Extensions/Sharada.js":4888,"./Script_Extensions/Shavian.js":96404,"./Script_Extensions/Siddham.js":6546,"./Script_Extensions/SignWriting.js":99747,"./Script_Extensions/Sinhala.js":41818,"./Script_Extensions/Sogdian.js":22619,"./Script_Extensions/Sora_Sompeng.js":97375,"./Script_Extensions/Soyombo.js":11386,"./Script_Extensions/Sundanese.js":57308,"./Script_Extensions/Syloti_Nagri.js":51032,"./Script_Extensions/Syriac.js":67007,"./Script_Extensions/Tagalog.js":82147,"./Script_Extensions/Tagbanwa.js":1755,"./Script_Extensions/Tai_Le.js":54266,"./Script_Extensions/Tai_Tham.js":28491,"./Script_Extensions/Tai_Viet.js":40261,"./Script_Extensions/Takri.js":35429,"./Script_Extensions/Tamil.js":30259,"./Script_Extensions/Tangsa.js":95218,"./Script_Extensions/Tangut.js":23875,"./Script_Extensions/Telugu.js":22730,"./Script_Extensions/Thaana.js":36389,"./Script_Extensions/Thai.js":49096,"./Script_Extensions/Tibetan.js":27545,"./Script_Extensions/Tifinagh.js":42806,"./Script_Extensions/Tirhuta.js":15683,"./Script_Extensions/Toto.js":31278,"./Script_Extensions/Ugaritic.js":61144,"./Script_Extensions/Vai.js":96152,"./Script_Extensions/Vithkuqi.js":16689,"./Script_Extensions/Wancho.js":19428,"./Script_Extensions/Warang_Citi.js":51792,"./Script_Extensions/Yezidi.js":42990,"./Script_Extensions/Yi.js":89492,"./Script_Extensions/Zanabazar_Square.js":93786,"./index.js":49473,"./unicode-version.js":13899};function n(t){var e=s(t);return i(e)}function s(t){if(!i.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id=82102}}]);