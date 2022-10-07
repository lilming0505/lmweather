"use strict";var t=require("../../../../common/vendor.js");const e=t=>"number"==typeof t?t+"px":t,i={name:"UniNavBar",components:{statusBar:()=>"./uni-status-bar.js"},emits:["clickLeft","clickRight","clickTitle"],props:{dark:{type:Boolean,default:!1},title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:""},backgroundColor:{type:String,default:""},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0},height:{type:[Number,String],default:44},leftWidth:{type:[Number,String],default:60},rightWidth:{type:[Number,String],default:60},stat:{type:[Boolean,String],default:""}},computed:{themeBgColor(){return this.dark?this.backgroundColor?this.backgroundColor:this.dark?"#333":"#FFF":this.backgroundColor||"#FFF"},themeColor(){return this.dark?this.color?this.color:this.dark?"#fff":"#333":this.color||"#333"},navbarHeight(){return e(this.height)},leftIconWidth(){return e(this.leftWidth)},rightIconWidth(){return e(this.rightWidth)}},mounted(){t.index.report&&this.stat&&""!==this.title&&t.index.report("title",this.title)},methods:{onClickLeft(){this.$emit("clickLeft")},onClickRight(){this.$emit("clickRight")},onClickTitle(){this.$emit("clickTitle")}}};if(!Array){(t.resolveComponent("status-bar")+t.resolveComponent("uni-icons"))()}Math;var o=t._export_sfc(i,[["render",function(e,i,o,r,l,n){return t.e({a:o.statusBar},(o.statusBar,{}),{b:o.leftIcon.length>0},o.leftIcon.length>0?{c:t.p({color:n.themeColor,type:o.leftIcon,size:"20"})}:{},{d:o.leftText.length},o.leftText.length?{e:t.t(o.leftText),f:n.themeColor,g:!o.leftIcon.length>0?1:""}:{},{h:t.o(((...t)=>n.onClickLeft&&n.onClickLeft(...t))),i:n.leftIconWidth,j:o.title.length>0},o.title.length>0?{k:t.t(o.title),l:n.themeColor}:{},{m:t.o(((...t)=>n.onClickTitle&&n.onClickTitle(...t))),n:o.rightIcon.length},o.rightIcon.length?{o:t.p({color:n.themeColor,type:o.rightIcon,size:"22"})}:{},{p:o.rightText.length&&!o.rightIcon.length},o.rightText.length&&!o.rightIcon.length?{q:t.t(o.rightText),r:n.themeColor}:{},{s:t.o(((...t)=>n.onClickRight&&n.onClickRight(...t))),t:n.rightIconWidth,v:n.themeColor,w:n.themeBgColor,x:n.navbarHeight,y:o.fixed?1:"",z:o.shadow?1:"",A:o.border?1:"",B:n.themeBgColor,C:o.fixed},o.fixed?t.e({D:o.statusBar},(o.statusBar,{}),{E:n.navbarHeight}):{},{F:o.dark?1:""})}],["__scopeId","data-v-6d944b0a"]]);wx.createComponent(o);
