export default function anonymous(rawInput
) {

  var input = lookupInput(rawInput);
  var json = {"type":"LSTMTimeStep","options":{"inputSize":4,"hiddenLayers":[5,5,5],"outputSize":4,"decayRate":0.999,"smoothEps":1e-8,"regc":0.000001,"clipval":5},"hiddenLayers":[{"inputMatrix":{"rows":5,"columns":4,"weights":{"0":-0.1016082614660263,"1":-0.16760757565498352,"2":-0.1911724954843521,"3":-0.14504161477088928,"4":0.2011888027191162,"5":0.11215903609991074,"6":0.13223505020141602,"7":0.10165251046419144,"8":0.6418585181236267,"9":0.6634829640388489,"10":0.793236494064331,"11":0.7742767930030823,"12":0.7120928764343262,"13":0.7032805681228638,"14":0.7270352244377136,"15":0.7910053133964539,"16":-0.1391584873199463,"17":-0.1765241175889969,"18":-0.24546277523040771,"19":-0.26331594586372375}},"inputHidden":{"rows":5,"columns":5,"weights":{"0":0.07056120783090591,"1":-0.1000792384147644,"2":0.04039578512310982,"3":-0.21295875310897827,"4":0.10163246095180511,"5":0.1527632176876068,"6":0.09121627360582352,"7":0.13946262001991272,"8":0.18052561581134796,"9":0.21152213215827942,"10":0.19381584227085114,"11":-0.13037553429603577,"12":-0.03944418206810951,"13":0.555052638053894,"14":0.16312091052532196,"15":0.20991787314414978,"16":-0.23228819668293,"17":0.3262357711791992,"18":-0.4370724558830261,"19":0.22486872971057892,"20":0.046561483293771744,"21":-0.10093694180250168,"22":0.0809633731842041,"23":-0.15257449448108673,"24":0.16096222400665283}},"inputBias":{"rows":5,"columns":1,"weights":{"0":-0.32505759596824646,"1":0.12234915792942047,"2":-0.5461753606796265,"3":1.4920005798339844,"4":-0.300627201795578}},"forgetMatrix":{"rows":5,"columns":4,"weights":{"0":-0.21841485798358917,"1":-0.2955337166786194,"2":-0.27083930373191833,"3":-0.24635717272758484,"4":-0.2804834246635437,"5":-0.31648099422454834,"6":-0.21846254169940948,"7":-0.2182745337486267,"8":0.00009293988114222884,"9":-0.1032484695315361,"10":0.04430985450744629,"11":0.10043696314096451,"12":0.4171866178512573,"13":0.42586490511894226,"14":0.6026864647865295,"15":0.5587213635444641,"16":-0.24830767512321472,"17":-0.30848968029022217,"18":-0.2668364644050598,"19":-0.2934999167919159}},"forgetHidden":{"rows":5,"columns":5,"weights":{"0":0.1771567016839981,"1":-0.13452419638633728,"2":0.11985607445240021,"3":-0.16893813014030457,"4":0.15545937418937683,"5":0.05284111946821213,"6":-0.00881093367934227,"7":0.10936855524778366,"8":0.2411673218011856,"9":0.06560911238193512,"10":0.24103030562400818,"11":-0.08336709439754486,"12":0.09533131122589111,"13":1.5460326671600342,"14":0.12488150596618652,"15":-0.29946139454841614,"16":0.9613786935806274,"17":-0.2448425441980362,"18":0.10090868920087814,"19":-0.33870744705200195,"20":0.15200862288475037,"21":-0.051502443850040436,"22":0.12400516867637634,"23":0.019249705597758293,"24":0.05472525209188461}},"forgetBias":{"rows":5,"columns":1,"weights":{"0":0,"1":0,"2":0,"3":0,"4":0}},"outputMatrix":{"rows":5,"columns":4,"weights":{"0":-0.07940021902322769,"1":-0.19757471978664398,"2":-0.07309756428003311,"3":-0.16646471619606018,"4":0.09476915746927261,"5":0.01025615818798542,"6":0.015454962849617004,"7":-0.04883507639169693,"8":0.4222070276737213,"9":0.3677549362182617,"10":0.48000994324684143,"11":0.5052068829536438,"12":0.6312738656997681,"13":0.6610516905784607,"14":0.6208099126815796,"15":0.7203012704849243,"16":-0.15874521434307098,"17":-0.23841260373592377,"18":-0.24625281989574432,"19":-0.11974535137414932}},"outputHidden":{"rows":5,"columns":5,"weights":{"0":0.07392223179340363,"1":-0.11938675493001938,"2":0.1280990093946457,"3":-0.20165471732616425,"4":0.1477927416563034,"5":0.08691700547933578,"6":0.09532944113016129,"7":0.1969822347164154,"8":0.2936551868915558,"9":0.1357438713312149,"10":0.07458370178937912,"11":-0.0826508179306984,"12":0.013597213663160801,"13":1.2622723579406738,"14":0.14794863760471344,"15":0.14949367940425873,"16":-0.008916690945625305,"17":-0.25303542613983154,"18":-0.23268182575702667,"19":0.22556142508983612,"20":0.04656468331813812,"21":-0.07789558917284012,"22":0.041191466152668,"23":-0.020305568352341652,"24":0.11463239043951035}},"outputBias":{"rows":5,"columns":1,"weights":{"0":-0.3146058917045593,"1":0.11692503839731216,"2":-0.6291900277137756,"3":1.6634637117385864,"4":-0.2975687086582184}},"cellActivationMatrix":{"rows":5,"columns":4,"weights":{"0":0.018324142321944237,"1":-0.030104922130703926,"2":-0.24925558269023895,"3":-0.3283122181892395,"4":-0.3431456685066223,"5":-0.2500820755958557,"6":0.07018076628446579,"7":0.5840569138526917,"8":-0.7168036103248596,"9":-0.7512988448143005,"10":-0.9851267337799072,"11":-1.081930160522461,"12":-0.2702637016773224,"13":-0.3255329132080078,"14":-0.4269191324710846,"15":-0.5180953741073608,"16":0.035170432180166245,"17":0.07688318192958832,"18":-0.221058651804924,"19":-0.20985651016235352}},"cellActivationHidden":{"rows":5,"columns":5,"weights":{"0":-0.12022318691015244,"1":-0.12077612429857254,"2":0.40123268961906433,"3":-0.37221020460128784,"4":-0.18591313064098358,"5":0.24728240072727203,"6":-0.31114357709884644,"7":0.10021518915891647,"8":0.8962330222129822,"9":0.2357884794473648,"10":-0.6506431102752686,"11":0.5153536200523376,"12":0.2916823923587799,"13":-1.0934134721755981,"14":-0.4739460349082947,"15":-0.027975020930171013,"16":0.19693341851234436,"17":-0.14247699081897736,"18":0.09007492661476135,"19":-0.04194086045026779,"20":-0.21086783707141876,"21":-0.003967687021940947,"22":0.24151726067066193,"23":-0.37058117985725403,"24":-0.23808276653289795}},"cellActivationBias":{"rows":5,"columns":1,"weights":{"0":0.3352142572402954,"1":0.056707534939050674,"2":2.119013786315918,"3":0.9565111398696899,"4":0.16362954676151276}}},{"inputMatrix":{"rows":5,"columns":5,"weights":{"0":0.11050783842802048,"1":-0.29796046018600464,"2":0.4682542681694031,"3":-0.5756924748420715,"4":0.13080784678459167,"5":0.178119957447052,"6":-0.2994885742664337,"7":0.8227183222770691,"8":-0.17128825187683105,"9":0.17011581361293793,"10":0.17474476993083954,"11":-0.09487967938184738,"12":0.09346344321966171,"13":0.7080973386764526,"14":0.10801233351230621,"15":0.06479164958000183,"16":-0.063318632543087,"17":-0.2784298360347748,"18":-0.2644268572330475,"19":0.11215244978666306,"20":0.14638955891132355,"21":-0.083405040204525,"22":-0.06711295992136002,"23":0.6802582144737244,"24":0.18385906517505646}},"inputHidden":{"rows":5,"columns":5,"weights":{"0":-0.2158925086259842,"1":-0.5322228670120239,"2":-0.09516593813896179,"3":-0.3270624876022339,"4":0.06837014108896255,"5":0.010164481587707996,"6":-0.0931498184800148,"7":-0.025148455053567886,"8":-0.24303145706653595,"9":0.01975063420832157,"10":0.12167812883853912,"11":0.051559511572122574,"12":0.29574644565582275,"13":-0.031754009425640106,"14":-0.18281295895576477,"15":-0.11936371773481369,"16":-0.15387392044067383,"17":0.15071475505828857,"18":-0.05300921946763992,"19":-0.1321888566017151,"20":0.08294679969549179,"21":0.07546060532331467,"22":0.36653533577919006,"23":-0.06692919880151749,"24":-0.3483008146286011}},"inputBias":{"rows":5,"columns":1,"weights":{"0":-0.07213672250509262,"1":0.43641361594200134,"2":-1.8953163623809814,"3":-0.8426555395126343,"4":-1.7365658283233643}},"forgetMatrix":{"rows":5,"columns":5,"weights":{"0":-0.014361176639795303,"1":-0.007831895723938942,"2":0.18899329006671906,"3":0.115433469414711,"4":0.10607550293207169,"5":0.14461246132850647,"6":-0.19201260805130005,"7":0.7063621282577515,"8":0.5504567623138428,"9":0.18269798159599304,"10":0.12105707079172134,"11":-0.17385129630565643,"12":0.05993248149752617,"13":0.27916425466537476,"14":0.10043779760599136,"15":-0.013771886005997658,"16":-0.11635713279247284,"17":-0.1523614525794983,"18":-0.09903474152088165,"19":0.13102173805236816,"20":0.13069511950016022,"21":-0.2607733905315399,"22":0.051535990089178085,"23":0.3362395167350769,"24":0.15653768181800842}},"forgetHidden":{"rows":5,"columns":5,"weights":{"0":-0.044174034148454666,"1":0.24320271611213684,"2":-0.011531430296599865,"3":-0.15075482428073883,"4":-0.03828851133584976,"5":0.2670665979385376,"6":0.418035089969635,"7":-0.02389500103890896,"8":-0.3059135973453522,"9":-0.07460297644138336,"10":0.0819801613688469,"11":0.1811128407716751,"12":0.2528918981552124,"13":-0.15294373035430908,"14":-0.27265018224716187,"15":0.1447007805109024,"16":0.2026355117559433,"17":0.07720629870891571,"18":-0.13096722960472107,"19":-0.12457001209259033,"20":0.2046867311000824,"21":0.15771551430225372,"22":0.25330448150634766,"23":-0.097516268491745,"24":-0.3064952790737152}},"forgetBias":{"rows":5,"columns":1,"weights":{"0":0,"1":0,"2":0,"3":0,"4":0}},"outputMatrix":{"rows":5,"columns":5,"weights":{"0":0.013529157266020775,"1":-0.17625689506530762,"2":0.19533006846904755,"3":-0.3697720170021057,"4":0.10274598747491837,"5":0.05176292732357979,"6":-0.2578212022781372,"7":0.5833380818367004,"8":0.051657114177942276,"9":0.11473480612039566,"10":0.13538265228271484,"11":-0.11893071234226227,"12":0.02465352788567543,"13":0.6727157831192017,"14":0.11108075082302094,"15":0.029882537201046944,"16":0.018825391307473183,"17":-0.2621123194694519,"18":-0.22333049774169922,"19":0.12009797990322113,"20":0.08849439024925232,"21":-0.1865846812725067,"22":0.029508370906114578,"23":0.700139582157135,"24":0.08229199051856995}},"outputHidden":{"rows":5,"columns":5,"weights":{"0":-0.13131089508533478,"1":-0.39529019594192505,"2":0.04762335121631622,"3":-0.11231660842895508,"4":-0.004428895190358162,"5":-0.02987690642476082,"6":-0.04114333540201187,"7":0.046954259276390076,"8":-0.2577703893184662,"9":-0.013486048206686974,"10":0.03979136794805527,"11":-0.009742259979248047,"12":0.2644577622413635,"13":-0.15772764384746552,"14":-0.21551676094532013,"15":-0.04355783388018608,"16":-0.026570331305265427,"17":0.07468464225530624,"18":-0.0406973659992218,"19":-0.11961393058300018,"20":0.10602344572544098,"21":0.16010795533657074,"22":0.34362393617630005,"23":-0.054290611296892166,"24":-0.3142704665660858}},"outputBias":{"rows":5,"columns":1,"weights":{"0":-0.007658106740564108,"1":0.4791489243507385,"2":-1.8971675634384155,"3":-0.8551511168479919,"4":-1.7800805568695068}},"cellActivationMatrix":{"rows":5,"columns":5,"weights":{"0":-0.388465940952301,"1":0.6455036997795105,"2":-1.0635381937026978,"3":-1.3076199293136597,"4":-0.33676233887672424,"5":-0.3602852523326874,"6":0.5844077467918396,"7":-0.9785429239273071,"8":-1.0178513526916504,"9":-0.2860260009765625,"10":0.054277800023555756,"11":-0.014313269406557083,"12":0.2212635576725006,"13":1.364655613899231,"14":0.03071807324886322,"15":0.18032000958919525,"16":-0.29917123913764954,"17":0.367217481136322,"18":1.0272955894470215,"19":0.1402987688779831,"20":-0.023106301203370094,"21":0.11802303045988083,"22":0.12175357341766357,"23":-1.3553452491760254,"24":-0.04100809991359711}},"cellActivationHidden":{"rows":5,"columns":5,"weights":{"0":-0.7352709770202637,"1":-0.44005241990089417,"2":0.7820593118667603,"3":0.6473534107208252,"4":-0.819012463092804,"5":-0.6331315040588379,"6":-0.48357850313186646,"7":0.3849034905433655,"8":0.5098893046379089,"9":-0.49633654952049255,"10":-0.32981905341148376,"11":-0.4553833603858948,"12":-0.05067022144794464,"13":0.11805625259876251,"14":0.08720193058252335,"15":0.20996971428394318,"16":-0.011140764690935612,"17":-0.5829010009765625,"18":-0.45471665263175964,"19":0.634315013885498,"20":0.46359366178512573,"21":0.41958609223365784,"22":0.006196105852723122,"23":-0.10857085138559341,"24":-0.053887903690338135}},"cellActivationBias":{"rows":5,"columns":1,"weights":{"0":-0.16322550177574158,"1":-0.23890940845012665,"2":-0.603935956954956,"3":-0.12155084311962128,"4":0.6591870784759521}}},{"inputMatrix":{"rows":5,"columns":5,"weights":{"0":-1.3257567882537842,"1":-1.8653419017791748,"2":0.43181538581848145,"3":-0.1852826327085495,"4":-0.6596338748931885,"5":-0.2519877254962921,"6":-0.08337313681840897,"7":0.2374611496925354,"8":0.007886610925197601,"9":-0.24343110620975494,"10":0.02709100767970085,"11":0.049007486552000046,"12":0.06903225928544998,"13":0.007046888116747141,"14":-0.06534615904092789,"15":-0.12748132646083832,"16":-0.010023056529462337,"17":0.046888891607522964,"18":0.12523280084133148,"19":0.030146243050694466,"20":-0.04787305369973183,"21":-0.09152098745107651,"22":0.05934291332960129,"23":0.1041402742266655,"24":0.035952743142843246}},"inputHidden":{"rows":5,"columns":5,"weights":{"0":-0.63198322057724,"1":-2.077787399291992,"2":-1.6010833978652954,"3":0.20662708580493927,"4":-0.05027060955762863,"5":-0.6726165413856506,"6":-0.27828213572502136,"7":0.3093688189983368,"8":0.31287333369255066,"9":0.2492581158876419,"10":-0.37166929244995117,"11":0.0062423390336334705,"12":0.14282219111919403,"13":-0.06048470363020897,"14":-0.013945736922323704,"15":0.01869361661374569,"16":-0.07462610304355621,"17":0.023928314447402954,"18":-0.10633646696805954,"19":-0.10759489238262177,"20":0.08189075440168381,"21":-0.09017839282751083,"22":-0.039916202425956726,"23":-0.08488563448190689,"24":-0.07698166370391846}},"inputBias":{"rows":5,"columns":1,"weights":{"0":0.09813406318426132,"1":-0.5890294313430786,"2":0.07205808162689209,"3":0.14954857528209686,"4":-0.2797069549560547}},"forgetMatrix":{"rows":5,"columns":5,"weights":{"0":-0.5635668039321899,"1":0.369487464427948,"2":0.11570800095796585,"3":0.2991093099117279,"4":-0.7792742252349854,"5":-0.09868170320987701,"6":0.07628008723258972,"7":0.25822070240974426,"8":-0.010851753875613213,"9":-0.21389466524124146,"10":0.08297394216060638,"11":0.05750180035829544,"12":0.17010177671909332,"13":-0.009221302345395088,"14":-0.13253173232078552,"15":-0.02685648575425148,"16":0.0532817542552948,"17":0.08533335477113724,"18":-0.001610085484571755,"19":-0.12460090965032578,"20":0.07392650842666626,"21":0.08940781652927399,"22":0.054486874490976334,"23":0.028816906735301018,"24":-0.0606938973069191}},"forgetHidden":{"rows":5,"columns":5,"weights":{"0":1.0602104663848877,"1":0.29593339562416077,"2":-0.38881823420524597,"3":-0.7109113335609436,"4":-0.8452079892158508,"5":-0.23094265162944794,"6":-0.1584412306547165,"7":0.16642023622989655,"8":0.2555604577064514,"9":0.2549270987510681,"10":-0.1946290284395218,"11":0.027043798938393593,"12":0.13767912983894348,"13":0.04110686108469963,"14":0.05288432165980339,"15":0.08476091176271439,"16":-0.11402373015880585,"17":0.10161515325307846,"18":0.03954918682575226,"19":0.04663615673780441,"20":0.07715702056884766,"21":-0.12411955744028091,"22":0.05664420127868652,"23":-0.07327096909284592,"24":0.03350363299250603}},"forgetBias":{"rows":5,"columns":1,"weights":{"0":0,"1":0,"2":0,"3":0,"4":0}},"outputMatrix":{"rows":5,"columns":5,"weights":{"0":-1.260212779045105,"1":-1.4315181970596313,"2":0.5625247955322266,"3":-0.07467422634363174,"4":-0.941767156124115,"5":-0.14750444889068604,"6":-0.06543054431676865,"7":0.22795069217681885,"8":0.08260243386030197,"9":-0.3159123957157135,"10":-0.050872087478637695,"11":-0.0552365779876709,"12":0.012420197017490864,"13":0.08713237196207047,"14":0.009160010144114494,"15":-0.06709092855453491,"16":0.004587981384247541,"17":-0.037325792014598846,"18":0.010199359618127346,"19":0.0017832312732934952,"20":-0.10797332972288132,"21":-0.08493019640445709,"22":-0.05352073162794113,"23":0.03081621788442135,"24":0.039663322269916534}},"outputHidden":{"rows":5,"columns":5,"weights":{"0":-0.2802940011024475,"1":-1.678251028060913,"2":-1.3095262050628662,"3":0.004313464276492596,"4":-0.12220167368650436,"5":-0.8169826865196228,"6":-0.3622780740261078,"7":0.25724950432777405,"8":0.361924409866333,"9":0.279344379901886,"10":-0.43224045634269714,"11":-0.0033314006868749857,"12":0.043366797268390656,"13":0.01294949371367693,"14":0.0021123767364770174,"15":0.1172691285610199,"16":-0.05789913609623909,"17":-0.01784151792526245,"18":-0.03874655440449715,"19":-0.002387391868978739,"20":0.14237245917320251,"21":-0.0038349612150341272,"22":-0.14713576436042786,"23":-0.05245167389512062,"24":-0.028007717803120613}},"outputBias":{"rows":5,"columns":1,"weights":{"0":0.1987009197473526,"1":-0.6046660542488098,"2":0.06082621589303017,"3":0.1611146330833435,"4":-0.2637881636619568}},"cellActivationMatrix":{"rows":5,"columns":5,"weights":{"0":1.9920161962509155,"1":1.3673784732818604,"2":-0.29960566759109497,"3":-1.1828721761703491,"4":0.2784433662891388,"5":0.7769746780395508,"6":0.4856377840042114,"7":-0.008753309957683086,"8":-0.43230319023132324,"9":-0.04057559370994568,"10":-0.5425856113433838,"11":-0.6702843904495239,"12":0.2703610360622406,"13":0.07205604761838913,"14":-0.21064676344394684,"15":-0.6524194478988647,"16":-0.39787375926971436,"17":0.36371883749961853,"18":0.39249974489212036,"19":-0.3364331126213074,"20":-0.41319581866264343,"21":-0.5620818138122559,"22":0.2734276056289673,"23":0.09086515009403229,"24":-0.014064507558941841}},"cellActivationHidden":{"rows":5,"columns":5,"weights":{"0":-1.479234218597412,"1":-0.39870184659957886,"2":0.6523284912109375,"3":0.5935243964195251,"4":0.7645403742790222,"5":-0.6024628281593323,"6":-0.3221447765827179,"7":0.19611942768096924,"8":0.179423525929451,"9":0.12892620265483856,"10":-0.24305668473243713,"11":-0.3900843560695648,"12":-0.08287228643894196,"13":0.10674166679382324,"14":0.14389149844646454,"15":0.5244368314743042,"16":0.14018991589546204,"17":0.08078643679618835,"18":0.11567091196775436,"19":0.10999256372451782,"20":-0.2880796492099762,"21":-0.46875396370887756,"22":-0.15951894223690033,"23":0.20421676337718964,"24":0.26102203130722046}},"cellActivationBias":{"rows":5,"columns":1,"weights":{"0":-0.035799600183963776,"1":-0.17549924552440643,"2":-0.16980791091918945,"3":0.05147710070014,"4":-0.1508856564760208}}}],"outputConnector":{"rows":4,"columns":5,"weights":{"0":0.856377363204956,"1":0.406745970249176,"2":0.04152028635144234,"3":-0.17819735407829285,"4":-0.15269158780574799,"5":0.5985034108161926,"6":-0.08613458275794983,"7":-0.3753237724304199,"8":-0.2592691481113434,"9":-0.23039722442626953,"10":0.7962775230407715,"11":0.49192482233047485,"12":-0.010930315591394901,"13":-0.14194710552692413,"14":-0.22052931785583496,"15":0.8665503859519958,"16":-0.029886772856116295,"17":-0.14372774958610535,"18":-0.15367169678211212,"19":0.07971251010894775}},"output":{"rows":4,"columns":1,"weights":{"0":0.6811118721961975,"1":0.6518363356590271,"2":0.6709391474723816,"3":0.6680666208267212}}};
  var output = [];
  var states = [];
  var prevStates;
  var state;
  var max = input.length;
  for (var _i = 0; _i < max; _i++) {
    prevStates = states;
    states = [];
    states[0] = {
      name: 'forwardFn',
      left: null,
      right: null,
      product: new Matrix(4, 1)
    };
    states[1] = {
      name: 'multiply',
      left: json.hiddenLayers[0].inputMatrix,
      right: states[0].product,
      product: new Matrix(5, 1)
    };
    states[2] = {
      name: 'multiply',
      left: json.hiddenLayers[0].inputHidden,
      right: typeof prevStates[25] === 'object' ? prevStates[25].product : new Matrix(5, 1),
      product: new Matrix(5, 1)
    };
    states[3] = {
      name: 'add',
      left: states[1].product,
      right: states[2].product,
      product: new Matrix(5, 1)
    };
    states[4] = {
      name: 'add',
      left: states[3].product,
      right: json.hiddenLayers[0].inputBias,
      product: new Matrix(5, 1)
    };
    states[5] = {
      name: 'sigmoid',
      left: states[4].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[6] = {
      name: 'multiply',
      left: json.hiddenLayers[0].forgetMatrix,
      right: states[0].product,
      product: new Matrix(5, 1)
    };
    states[7] = {
      name: 'multiply',
      left: json.hiddenLayers[0].forgetHidden,
      right: states[2].right,
      product: new Matrix(5, 1)
    };
    states[8] = {
      name: 'add',
      left: states[6].product,
      right: states[7].product,
      product: new Matrix(5, 1)
    };
    states[9] = {
      name: 'add',
      left: states[8].product,
      right: json.hiddenLayers[0].forgetBias,
      product: new Matrix(5, 1)
    };
    states[10] = {
      name: 'sigmoid',
      left: states[9].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[11] = {
      name: 'multiply',
      left: json.hiddenLayers[0].outputMatrix,
      right: states[0].product,
      product: new Matrix(5, 1)
    };
    states[12] = {
      name: 'multiply',
      left: json.hiddenLayers[0].outputHidden,
      right: states[2].right,
      product: new Matrix(5, 1)
    };
    states[13] = {
      name: 'add',
      left: states[11].product,
      right: states[12].product,
      product: new Matrix(5, 1)
    };
    states[14] = {
      name: 'add',
      left: states[13].product,
      right: json.hiddenLayers[0].outputBias,
      product: new Matrix(5, 1)
    };
    states[15] = {
      name: 'sigmoid',
      left: states[14].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[16] = {
      name: 'multiply',
      left: json.hiddenLayers[0].cellActivationMatrix,
      right: states[0].product,
      product: new Matrix(5, 1)
    };
    states[17] = {
      name: 'multiply',
      left: json.hiddenLayers[0].cellActivationHidden,
      right: states[2].right,
      product: new Matrix(5, 1)
    };
    states[18] = {
      name: 'add',
      left: states[16].product,
      right: states[17].product,
      product: new Matrix(5, 1)
    };
    states[19] = {
      name: 'add',
      left: states[18].product,
      right: json.hiddenLayers[0].cellActivationBias,
      product: new Matrix(5, 1)
    };
    states[20] = {
      name: 'tanh',
      left: states[19].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[21] = {
      name: 'multiplyElement',
      left: states[10].product,
      right: states[2].right,
      product: new Matrix(5, 1)
    };
    states[22] = {
      name: 'multiplyElement',
      left: states[5].product,
      right: states[20].product,
      product: new Matrix(5, 1)
    };
    states[23] = {
      name: 'add',
      left: states[21].product,
      right: states[22].product,
      product: new Matrix(5, 1)
    };
    states[24] = {
      name: 'tanh',
      left: states[23].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[25] = {
      name: 'multiplyElement',
      left: states[15].product,
      right: states[24].product,
      product: new Matrix(5, 1)
    };
    states[26] = {
      name: 'multiply',
      left: json.hiddenLayers[1].inputMatrix,
      right: states[25].product,
      product: new Matrix(5, 1)
    };
    states[27] = {
      name: 'multiply',
      left: json.hiddenLayers[1].inputHidden,
      right: typeof prevStates[50] === 'object' ? prevStates[50].product : new Matrix(5, 1),
      product: new Matrix(5, 1)
    };
    states[28] = {
      name: 'add',
      left: states[26].product,
      right: states[27].product,
      product: new Matrix(5, 1)
    };
    states[29] = {
      name: 'add',
      left: states[28].product,
      right: json.hiddenLayers[1].inputBias,
      product: new Matrix(5, 1)
    };
    states[30] = {
      name: 'sigmoid',
      left: states[29].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[31] = {
      name: 'multiply',
      left: json.hiddenLayers[1].forgetMatrix,
      right: states[25].product,
      product: new Matrix(5, 1)
    };
    states[32] = {
      name: 'multiply',
      left: json.hiddenLayers[1].forgetHidden,
      right: states[27].right,
      product: new Matrix(5, 1)
    };
    states[33] = {
      name: 'add',
      left: states[31].product,
      right: states[32].product,
      product: new Matrix(5, 1)
    };
    states[34] = {
      name: 'add',
      left: states[33].product,
      right: json.hiddenLayers[1].forgetBias,
      product: new Matrix(5, 1)
    };
    states[35] = {
      name: 'sigmoid',
      left: states[34].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[36] = {
      name: 'multiply',
      left: json.hiddenLayers[1].outputMatrix,
      right: states[25].product,
      product: new Matrix(5, 1)
    };
    states[37] = {
      name: 'multiply',
      left: json.hiddenLayers[1].outputHidden,
      right: states[27].right,
      product: new Matrix(5, 1)
    };
    states[38] = {
      name: 'add',
      left: states[36].product,
      right: states[37].product,
      product: new Matrix(5, 1)
    };
    states[39] = {
      name: 'add',
      left: states[38].product,
      right: json.hiddenLayers[1].outputBias,
      product: new Matrix(5, 1)
    };
    states[40] = {
      name: 'sigmoid',
      left: states[39].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[41] = {
      name: 'multiply',
      left: json.hiddenLayers[1].cellActivationMatrix,
      right: states[25].product,
      product: new Matrix(5, 1)
    };
    states[42] = {
      name: 'multiply',
      left: json.hiddenLayers[1].cellActivationHidden,
      right: states[27].right,
      product: new Matrix(5, 1)
    };
    states[43] = {
      name: 'add',
      left: states[41].product,
      right: states[42].product,
      product: new Matrix(5, 1)
    };
    states[44] = {
      name: 'add',
      left: states[43].product,
      right: json.hiddenLayers[1].cellActivationBias,
      product: new Matrix(5, 1)
    };
    states[45] = {
      name: 'tanh',
      left: states[44].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[46] = {
      name: 'multiplyElement',
      left: states[35].product,
      right: states[27].right,
      product: new Matrix(5, 1)
    };
    states[47] = {
      name: 'multiplyElement',
      left: states[30].product,
      right: states[45].product,
      product: new Matrix(5, 1)
    };
    states[48] = {
      name: 'add',
      left: states[46].product,
      right: states[47].product,
      product: new Matrix(5, 1)
    };
    states[49] = {
      name: 'tanh',
      left: states[48].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[50] = {
      name: 'multiplyElement',
      left: states[40].product,
      right: states[49].product,
      product: new Matrix(5, 1)
    };
    states[51] = {
      name: 'multiply',
      left: json.hiddenLayers[2].inputMatrix,
      right: states[50].product,
      product: new Matrix(5, 1)
    };
    states[52] = {
      name: 'multiply',
      left: json.hiddenLayers[2].inputHidden,
      right: typeof prevStates[75] === 'object' ? prevStates[75].product : new Matrix(5, 1),
      product: new Matrix(5, 1)
    };
    states[53] = {
      name: 'add',
      left: states[51].product,
      right: states[52].product,
      product: new Matrix(5, 1)
    };
    states[54] = {
      name: 'add',
      left: states[53].product,
      right: json.hiddenLayers[2].inputBias,
      product: new Matrix(5, 1)
    };
    states[55] = {
      name: 'sigmoid',
      left: states[54].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[56] = {
      name: 'multiply',
      left: json.hiddenLayers[2].forgetMatrix,
      right: states[50].product,
      product: new Matrix(5, 1)
    };
    states[57] = {
      name: 'multiply',
      left: json.hiddenLayers[2].forgetHidden,
      right: states[52].right,
      product: new Matrix(5, 1)
    };
    states[58] = {
      name: 'add',
      left: states[56].product,
      right: states[57].product,
      product: new Matrix(5, 1)
    };
    states[59] = {
      name: 'add',
      left: states[58].product,
      right: json.hiddenLayers[2].forgetBias,
      product: new Matrix(5, 1)
    };
    states[60] = {
      name: 'sigmoid',
      left: states[59].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[61] = {
      name: 'multiply',
      left: json.hiddenLayers[2].outputMatrix,
      right: states[50].product,
      product: new Matrix(5, 1)
    };
    states[62] = {
      name: 'multiply',
      left: json.hiddenLayers[2].outputHidden,
      right: states[52].right,
      product: new Matrix(5, 1)
    };
    states[63] = {
      name: 'add',
      left: states[61].product,
      right: states[62].product,
      product: new Matrix(5, 1)
    };
    states[64] = {
      name: 'add',
      left: states[63].product,
      right: json.hiddenLayers[2].outputBias,
      product: new Matrix(5, 1)
    };
    states[65] = {
      name: 'sigmoid',
      left: states[64].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[66] = {
      name: 'multiply',
      left: json.hiddenLayers[2].cellActivationMatrix,
      right: states[50].product,
      product: new Matrix(5, 1)
    };
    states[67] = {
      name: 'multiply',
      left: json.hiddenLayers[2].cellActivationHidden,
      right: states[52].right,
      product: new Matrix(5, 1)
    };
    states[68] = {
      name: 'add',
      left: states[66].product,
      right: states[67].product,
      product: new Matrix(5, 1)
    };
    states[69] = {
      name: 'add',
      left: states[68].product,
      right: json.hiddenLayers[2].cellActivationBias,
      product: new Matrix(5, 1)
    };
    states[70] = {
      name: 'tanh',
      left: states[69].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[71] = {
      name: 'multiplyElement',
      left: states[60].product,
      right: states[52].right,
      product: new Matrix(5, 1)
    };
    states[72] = {
      name: 'multiplyElement',
      left: states[55].product,
      right: states[70].product,
      product: new Matrix(5, 1)
    };
    states[73] = {
      name: 'add',
      left: states[71].product,
      right: states[72].product,
      product: new Matrix(5, 1)
    };
    states[74] = {
      name: 'tanh',
      left: states[73].product,
      right: null,
      product: new Matrix(5, 1)
    };
    states[75] = {
      name: 'multiplyElement',
      left: states[65].product,
      right: states[74].product,
      product: new Matrix(5, 1)
    };
    states[76] = {
      name: 'multiply',
      left: json.outputConnector,
      right: states[75].product,
      product: new Matrix(4, 1)
    };
    states[77] = {
      name: 'add',
      left: states[76].product,
      right: json.output,
      product: new Matrix(4, 1)
    };
    for (var stateIndex = 0, stateMax = 78; stateIndex < stateMax; stateIndex++) {
      state = states[stateIndex];
      var product = state.product;
      var left = state.left;
      var right = state.right;
      
      switch (state.name) {
        case 'forwardFn':
          
                  product.weights = input[_i];
                
          break;
        case 'multiply': //compiled from src/recurrent/matrix/multiply.js
          
          var leftRows = left.rows;
          var leftColumns = left.columns;
          var rightColumns = right.columns;
        
          // loop over rows of left
          for (var leftRow = 0; leftRow < leftRows; leftRow++) {
            var leftRowBase = leftColumns * leftRow;
            var rightRowBase = rightColumns * leftRow;
            // loop over cols of right
            for (var rightColumn = 0; rightColumn < rightColumns; rightColumn++) {
        
              // dot product loop
              var dot = 0;
              //loop over columns of left
              for (var leftColumn = 0; leftColumn < leftColumns; leftColumn++) {
                var rightColumnBase = rightColumns * leftColumn;
                var leftIndex = leftRowBase + leftColumn;
                var rightIndex = rightColumnBase + rightColumn;
                dot += left.weights[leftIndex] * right.weights[rightIndex];
                
                
              }
              product.weights[rightRowBase + rightColumn] = dot;
            }
          }
        
          break;
        case 'add': //compiled from src/recurrent/matrix/add.js
          
          for (var i = 0; i < left.weights.length; i++) {
            product.weights[i] = left.weights[i] + right.weights[i];
            
          }
        
          break;
        case 'sigmoid': //compiled from src/recurrent/matrix/sigmoid.js
          
          // sigmoid nonlinearity
          for (var i = 0; i < left.weights.length; i++) {
            product.weights[i] = 1 / (1 + Math.exp(-left.weights[i]));
            
          }
        
          break;
        case 'tanh': //compiled from src/recurrent/matrix/tanh.js
          
          // tanh nonlinearity
          for (var i = 0; i < left.weights.length; i++) {
            product.weights[i] = Math.tanh(left.weights[i]);
            
          }
        
          break;
        case 'multiplyElement': //compiled from src/recurrent/matrix/multiply-element.js
          
          var weights = left.weights;
        
          for (var i = 0; i < weights.length; i++) {
            product.weights[i] = left.weights[i] * right.weights[i];
            
          }
        
          break;
      }
    }
    output = state.product.weights;
  }
  return lookupOutputPartial(output, input);
  function lookupInput(rawInputs) {
        var table = {"open":0,"high":1,"low":2,"close":3};
        var result = [];
        for (var i = 0; i < rawInputs.length; i++) {
          var rawInput = rawInputs[i];
          var input = new Float32Array(4);
          for (var p in table) {
            input[table[p]] = rawInput.hasOwnProperty(p) ? rawInput[p] : 0;
          }
          result.push(input);
        }
        return result;
      }
  function lookupOutput(output) {
        var table = {"open":0,"high":1,"low":2,"close":3};
        var result = {};
        for (var p in table) {
          result[p] = output[table[p]];
        }
        return result;
      }
  
  function Matrix(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.weights = zeros(rows * columns);
  }
  function zeros(size) {
  return new Float32Array(size);
}
  function softmax(m) {
  var result = new Matrix(m.rows, m.columns); // probability volume
  var maxVal = -999999;
  for (var i = 0; i < m.weights.length; i++) {
    if (m.weights[i] > maxVal) {
      maxVal = m.weights[i];
    }
  }

  var s = 0;
  for (var _i = 0; _i < m.weights.length; _i++) {
    result.weights[_i] = Math.exp(m.weights[_i] - maxVal);
    s += result.weights[_i];
  }

  for (var _i2 = 0; _i2 < m.weights.length; _i2++) {
    result.weights[_i2] /= s;
  }

  // no backward pass here needed
  // since we will use the computed probabilities outside
  // to set gradients directly on m
  return result;
}
  function randomF(a, b) {
  return Math.random() * (b - a) + a;
}
  function sampleI(m) {
  // sample argmax from w, assuming w are
  // probabilities that sum to one
  var r = randomF(0, 1);
  var x = 0;
  var i = 0;
  var w = m.weights;

  while (true) {
    x += w[i];
    if (x > r) {
      return i;
    }
    i++;
  }
}
  function maxI(m) {
  // argmax of array w
  var weights = m.weights;

  var maxv = weights[0];
  var maxix = 0;
  for (var i = 1; i < weights.length; i++) {
    var v = weights[i];
    if (v < maxv) continue;

    maxix = i;
    maxv = v;
  }
  return maxix;
}
};