/* Home for Everyone — content store.
   Public pages READ from localStorage (with baked-in defaults).
   admin.html WRITES. Logo, colors, fonts and layout are NOT editable here. */
(function(){
"use strict";
var KEY="hfe-content-v1";
var published=null; /* assets/content.json deployed with the site: visible to ALL visitors */
var DEFAULTS={
  notice:"BUY · SELL · INVEST — Residential sales, investment properties, and property management across Greater Boston.",
  phone:"",
  email:"",
  hero_title:"A home for everyone.<br><em>Right here in Boston.</em>",
  hero_lede:"Buy, sell, and invest with a boutique brokerage that treats your move like its own. Modern marketing, honest guidance, and relentless follow-through — from first tour to final signature.",
  theme_green:"#0c3b2e",
  theme_gold:"#c6a15b",
  theme_bg:"#faf7f0",
  about_text:"HOME FOR ALL REALTY LLC is a Boston brokerage founded on the idea that great real estate service shouldn't depend on the size of the deal. First-time buyer or seasoned investor — you get the same launch-grade marketing and the same relentless advocacy.",
  listings:[
    {price:"$485,000",addr:"56 Orange St, Fitchburg, MA 01420",beds:"4",baths:"2",sqft:"2,540",desc:"Renovated 4-bedroom Colonial with finished basement and paved drive.",status:"New",mls:"73589000",lot:"0.1-acre lot",year:"Built 1910",agent:"Listed by Salustia Ortiz, Dreamcatcher Investment Group, Inc.",sample:false},
    {price:"$495,000",addr:"76 Fremont St, Lowell, MA 01850",beds:"5",baths:"1.5",sqft:"1,788",desc:"Single-family Colonial in a quiet neighborhood with backyard and driveway parking.",status:"New",mls:"73588992",lot:"0.05-acre lot",year:"Built 1900",agent:"Listed by Salustia Ortiz, Dreamcatcher Investment Group, Inc.",sample:false},
    {price:"$1,998,999",addr:"8 Porter St, Boston, MA 02130",beds:"\u2014",baths:"3",sqft:"2,997",desc:"3-family residence with full basement and off-street paved-drive parking.",status:"For Sale",mls:"73539797",lot:"0.06-acre lot",year:"Built 1905",agent:"Listed by Salustia Ortiz, Dreamcatcher Investment Group, Inc.",sample:false},
    {price:"$1,249,000",addr:"15 Forestdale Rd, Worcester, MA 01604",beds:"11",baths:"7",sqft:"4,338",desc:"3-family multi-family home \u2014 3 units up/down. Strong investment opportunity in Worcester.",status:"For Sale",mls:"73518697",lot:"0.4-acre lot",year:"Built 1913",agent:"Listed by Salustia Ortiz, Dreamcatcher Investment Group, Inc.",sample:false}
  ]
};
function clone(o){return JSON.parse(JSON.stringify(o));}
function load(){
  /* priority: published file < this browser's drafts < defaults */
  var out=clone(DEFAULTS), k, d, raw;
  if(published){ for(k in published){ if(k in out) out[k]=published[k]; } }
  try{
    raw=localStorage.getItem(KEY);
    if(raw){ d=JSON.parse(raw); for(k in d){ if(k in out) out[k]=d[k]; } }
  }catch(e){}
  return out;
}
function save(d){ localStorage.setItem(KEY, JSON.stringify(d)); }
function esc(s){
  return String(s==null?"":s).replace(/[&<>"']/g,function(c){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
  });
}
/* lighten (amt>0) or darken (amt<0) a hex color by percent */
function shade(hex,amt){
  var n=String(hex||"").replace("#","");
  if(n.length===3)n=n.split("").map(function(c){return c+c;}).join("");
  if(!/^[0-9a-fA-F]{6}$/.test(n))return hex;
  var num=parseInt(n,16),r=(num>>16)&255,g=(num>>8)&255,b=num&255;
  if(amt>=0){r=Math.round(r+(255-r)*amt/100);g=Math.round(g+(255-g)*amt/100);b=Math.round(b+(255-b)*amt/100);}
  else{r=Math.round(r*(1+amt/100));g=Math.round(g*(1+amt/100));b=Math.round(b*(1+amt/100));}
  return "#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}
function applyTheme(d){
  var root=document.documentElement.style;
  var green=d.theme_green||"#0c3b2e",gold=d.theme_gold||"#c6a15b",bg=d.theme_bg||"#faf7f0";
  root.setProperty("--green",green);
  root.setProperty("--green-deep",shade(green,-28));
  root.setProperty("--gold",gold);
  root.setProperty("--gold-soft",shade(gold,28));
  root.setProperty("--ivory",bg);
  root.setProperty("--line",shade(gold,62));
}
function apply(){
  var d=load();
  applyTheme(d);
  document.querySelectorAll("[data-hfe]").forEach(function(el){
    var k=el.getAttribute("data-hfe");
    if(!(k in d))return;
    if(k==="hero_title"){ el.innerHTML=d.hero_title; }
    else if(k==="phone"||k==="email"){
      var p=el.closest("p");
      if(d[k]){ el.textContent=d[k]; el.style.display=""; if(p)p.style.display=""; }
      else { if(p)p.style.display="none"; }
    }
    else { el.textContent=d[k]; }
  });
  var grid=document.getElementById("listing-grid");
  function Tx(k){
    if(window.HFE_I18N_T){var v=window.HFE_I18N_T(k);if(v!=null)return v;}
    return {lbl_bd:"bd",lbl_ba:"ba",lbl_sqft:"sqft",lbl_sample:"Sample listing",lbl_sample_photo:"SAMPLE PHOTO",lbl_listing_photo:"LISTING PHOTO",lst_empty:"No listings yet \u2014 check back soon, or <a href=\"contact.html\">contact us</a> for off-market opportunities.",lst_empty_feat:"New listings coming soon \u2014 <a href=\"listings.html\">browse all listings</a>."}[k]||k;
  }
  function cardHtml(l){
    var tags=(l.sample?'<span class="tag">'+esc(Tx("lbl_sample"))+'</span>':'')+(l.status&&!l.sample?'<span class="tag green">'+esc(l.status)+'</span>':'');
    var specs=[l.mls?("MLS #"+l.mls):null,l.lot||null,l.year||null].filter(Boolean).join(" · ");
    return '<div class="listing"><div class="ph">'+(l.sample?esc(Tx("lbl_sample_photo")):esc(Tx("lbl_listing_photo")))+'</div>'+
    '<div class="body">'+tags+
    '<div class="price">'+esc(l.price)+'</div>'+
    '<div class="addr">'+esc(l.addr)+'</div>'+
    '<div class="facts"><span>'+esc(l.beds)+' '+esc(Tx("lbl_bd"))+'</span><span>'+esc(l.baths)+' '+esc(Tx("lbl_ba"))+'</span><span>'+esc(l.sqft)+' '+esc(Tx("lbl_sqft"))+'</span></div>'+
    '<p style="font-size:14px;color:var(--muted)">'+esc(l.desc)+'</p>'+
    (specs?'<p style="font-size:12.5px;color:var(--muted);margin-top:8px">'+esc(specs)+'</p>':'')+
    (l.agent&&!l.sample?'<p style="font-size:12.5px;color:var(--muted);margin-top:4px;font-style:italic">'+esc(l.agent)+'</p>':'')+
    '</div></div>';
  }
  if(grid){
    if(!d.listings.length){
      grid.innerHTML='<p style="color:var(--muted)">'+Tx("lst_empty")+'</p>';
    }else{
      grid.innerHTML=d.listings.map(cardHtml).join("");
    }
  }
  var feat=document.getElementById("featured-grid");
  if(feat){
    var real=d.listings.filter(function(l){return !l.sample;});
    feat.innerHTML=real.length?real.map(cardHtml).join(""):'<p style="color:var(--muted)">'+Tx("lst_empty_feat")+'</p>';
  }
  if(window.HFE_I18N_apply){window.HFE_I18N_apply();}
}
document.addEventListener("DOMContentLoaded",function(){
  apply(); /* drafts + defaults immediately */
  fetch("assets/content.json").then(function(r){ return r.ok?r.json():null; })
    .then(function(j){ if(j){ published=j; apply(); } })
    .catch(function(){});
});
window.HFE={load:load,save:save,esc:esc,shade:shade,applyTheme:applyTheme,apply:apply,KEY:KEY,DEFAULTS:DEFAULTS};
})();
