/* Home for Everyone - Boston | Bilingual layer (EN/ES).
   Static copy is tagged with data-i18n="key". The ES toggle swaps every
   tagged string, sets <html lang>, and persists the choice in localStorage.
   Admin-editable defaults (hero_title, hero_lede, notice, about_text) get
   Spanish defaults only while they still match the English default, so
   anything Salustia writes in the back office always shows as she wrote it.
   Listing-card labels come from T() inside admin-data.js cardHtml. */
(function(){
"use strict";
var KEY="hfe-lang";
var STRINGS={
en:{
nav_home:"Home",nav_listings:"Listings",nav_sell:"Sell",nav_mortgage:"Mortgage",nav_about:"About",nav_contact:"Contact",nav_os:"Our System",menu_btn:"\u2630 Menu",
foot_blurb:"HOME FOR ALL REALTY LLC \u2014 a boutique Boston brokerage for buyers, sellers, and investors. 38 Central Sq Suite 4, Boston, MA 02128.",
foot_brand_h:"Brand",foot_brand_guide:"Brand guidelines",foot_press:"Press inquiries",
foot_rights:"\u00a9 2026 HOME FOR ALL REALTY LLC. All rights reserved. \u00b7 MA Broker License 24011548-RE-LC",
foot_explore_h:"Explore",foot_explore_listings:"Listings",foot_explore_sell:"Sell with us",foot_explore_os:"Our System",foot_explore_mortgage:"Mortgage",foot_explore_about:"About",foot_explore_contact:"Contact",
hero_badge_sub:"Licensed Massachusetts Real Estate Broker",
cta_browse:"Browse listings",cta_worth:"What\u2019s my home worth?",
idx_eyebrow1:"What we do",idx_h2_1:"One brokerage. Every move covered.",
idx_sub1:"Whether it\u2019s your first condo, your forever home, or your next investment property, you get the same thing: a team that answers, a plan that works, and marketing that gets seen.",
idx_c1t:"Buy",idx_c1p:"First-time buyers, move-up buyers, and relocations. We tour with you, negotiate hard, and never rush you into the wrong home.",
idx_c2t:"Sell",idx_c2p:"Professional photography, video tours, and launch marketing for every listing. Your home presented the way it deserves.",
idx_c3t:"Invest",idx_c3p:"Multi-families, condos, and income properties. We speak investor: cap rates, rents, and realistic numbers.",
idx_c4t:"Manage",idx_c4p:"Property management for owners who want the income without the 2 AM phone calls.",
idx_eyebrow2:"Why Home for Everyone",idx_h2_2:"Big-brokerage marketing.<br>Boutique attention.",
idx_sub2:"Large firms give you a logo. We give you a launch plan. Every listing gets photography direction, a video tour, a flyer, and a social rollout \u2014 the full treatment, not an afterthought.",
idx_li1:"Every inquiry answered the same day \u2014 usually within the hour",
idx_li2:"Photography, video, and staging guidance on every listing",
idx_li3:"Investor-grade analysis for income properties",
idx_li4:"Multilingual team serving Boston\u2019s diverse neighborhoods",
cta_meet:"Meet the brokerage",
idx_eyebrow3:"Featured listings",idx_h2_3:"On the market now.",idx_sub3:"Current listings from our brokerage.",
cta_all:"View all listings",
idx_eyebrow4:"How it works",idx_h2_4:"Three steps to your keys.",
idx_s1t:"Talk",idx_s1p:"Tell us what you\u2019re after \u2014 or what you\u2019re selling. We listen first, then build the plan around your timeline.",
idx_s2t:"Tour / Launch",idx_s2p:"Buyers tour curated homes. Sellers get a full marketing launch: photos, video, listings live everywhere.",
idx_s3t:"Close",idx_s3p:"Negotiation, inspection, and paperwork handled start to finish. You sign; we sweat the details.",
cta_start:"Start the conversation",
idx_fin_eyebrow:"Financing",idx_fin_h:"Need a mortgage for your investment?",
idx_fin_p:"Through Timeless Network Services \u2014 in our building at 38 Central Square \u2014 our investor clients get commercial mortgage solutions with a free consultation.",
cta_mortgage:"Explore mortgage services",
lst_kicker:"Current listings",lst_h1:"Find your <em>everyone.</em>",
lst_lede:"Every listing below gets our full marketing treatment \u2014 professional photography, video tour, and launch promotion. New listings are added as they go live.",
lst_h2:"Looking for something specific?",
lst_sub:"Tell us your budget, neighborhoods, and must-haves. We\u2019ll send matching listings the moment they hit the market.",
cta_alerts:"Get listing alerts",
lbl_bd:"bd",lbl_ba:"ba",lbl_sqft:"sqft",lbl_sample:"Sample listing",lbl_sample_photo:"SAMPLE PHOTO",lbl_listing_photo:"LISTING PHOTO",
lst_empty:"No listings yet \u2014 check back soon, or <a href=\"contact.html\">contact us</a> for off-market opportunities.",
lst_empty_feat:"New listings coming soon \u2014 <a href=\"listings.html\">browse all listings</a>.",
sell_kicker:"Sell with us",sell_h1:"Your home, <em>launched</em> \u2014 not just listed.",
sell_lede:"Most brokerages put your home online and wait. We launch it: photography direction, video tour, flyer, and social rollout \u2014 then we work every showing like it matters. Because it does.",
sell_eyebrow:"The launch package",sell_h2:"Every listing gets the full treatment.",
sell_li1:"Professional photography direction &amp; staging guidance",
sell_li2:"Video tour for every listing",
sell_li3:"Printed flyer &amp; digital brochure",
sell_li4:"Social media launch across our channels",
sell_li5:"Open houses, broker opens &amp; private showings",
sell_li6:"Weekly seller reports \u2014 showings, feedback, next moves",
sell_form_h:"Free home valuation",
sell_form_p:"Tell us about your home. We\u2019ll prepare a market analysis and walk you through it \u2014 no obligation.",
fl_name:"Name",fl_phone:"Phone",fl_addr:"Property address",fl_type:"Property type",
opt_condo:"Condo",opt_single:"Single-family",opt_multi:"Multi-family",opt_town:"Townhouse",
fl_when:"When are you thinking of selling?",
opt_asap:"As soon as possible",opt_13:"1\u20133 months",opt_36:"3\u20136 months",opt_curious:"Just curious",
cta_valuation:"Get my valuation",
form_ok_sell:"Thank you \u2014 your request was received. We\u2019ll be in touch shortly with your valuation.",
form_note:"Demo form: connect the brokerage inbox to receive submissions.",
mor_kicker:"Mortgage services",mor_h1:"Financing for your <em>next investment.</em>",
mor_lede:"Buying an investment property? Through our partnership with Timeless Network Services, our clients get access to commercial mortgage solutions tailored to Boston real estate investors.",
cta_visit:"Visit Timeless Network Services",cta_talk:"Talk to us first",
mor_eyebrow:"Our lending partner",mor_h2:"Timeless Network Services.",
mor_sub:"Commercial mortgage solutions for your investment needs \u2014 right here at 38 Central Square, in the same building as our brokerage. One visit can cover both your purchase and your financing.",
mor_li1:"Commercial mortgage solutions for investment properties",
mor_li2:"Free consultation \u2014 text <strong>FREE</strong> to <strong>917-519-0221</strong>",
mor_li3:"Same address as our office: 38 Central Sq Suite 4, Boston, MA 02128",
mor_li4:"Open Monday\u2013Friday, 9:00 AM \u2013 5:00 PM",
cta_learn:"Learn more",
mor_card_eyebrow:"Get started",mor_card_h:"Free consultation",
mor_card_p:"Text <strong>FREE</strong> to<br><span style=\"font-family:var(--serif);font-size:24px;color:var(--green-deep)\">917-519-0221</span><br><br>Or reach them through us \u2014 tell us about the property you\u2019re buying and we\u2019ll connect you directly.<br><br><a href=\"https://timelessnetworkservices.com\" target=\"_blank\" rel=\"noopener\">timelessnetworkservices.com</a>",
cta_contact:"Contact us",
mor_eyebrow2:"How it works",mor_h2_2:"Property + financing, under one roof.",
mor_s1t:"Find the property",mor_s1p:"We help you identify the right investment \u2014 multi-family, mixed-use, or commercial.",
mor_s2t:"Talk financing",mor_s2p:"Timeless Network Services structures the commercial mortgage around your deal.",
mor_s3t:"Close together",mor_s3p:"Purchase and financing move in step, from offer to closing day."
},
es:{
nav_home:"Inicio",nav_listings:"Propiedades",nav_sell:"Vender",nav_mortgage:"Hipoteca",nav_about:"Nosotros",nav_contact:"Contacto",nav_os:"Nuestro Sistema",menu_btn:"\u2630 Men\u00fa",
foot_blurb:"HOME FOR ALL REALTY LLC \u2014 una agencia boutique de Boston para compradores, vendedores e inversionistas. 38 Central Sq Suite 4, Boston, MA 02128.",
foot_brand_h:"Marca",foot_brand_guide:"Gu\u00eda de marca",foot_press:"Prensa",
foot_rights:"\u00a9 2026 HOME FOR ALL REALTY LLC. Todos los derechos reservados. \u00b7 Licencia de corredor de MA 24011548-RE-LC",
foot_explore_h:"Explorar",foot_explore_listings:"Propiedades",foot_explore_sell:"Venda con nosotros",foot_explore_os:"Nuestro Sistema",foot_explore_mortgage:"Hipoteca",foot_explore_about:"Nosotros",foot_explore_contact:"Contacto",
hero_badge_sub:"Corredor de bienes ra\u00edces licenciado en Massachusetts",
cta_browse:"Ver propiedades",cta_worth:"\u00bfCu\u00e1nto vale mi casa?",
idx_eyebrow1:"Lo que hacemos",idx_h2_1:"Una agencia. Cada paso cubierto.",
idx_sub1:"Ya sea su primer condominio, su hogar definitivo o su pr\u00f3xima propiedad de inversi\u00f3n, recibe lo mismo: un equipo que responde, un plan que funciona y un marketing que se nota.",
idx_c1t:"Comprar",idx_c1p:"Compradores primerizos, quienes buscan una casa m\u00e1s grande y reubicaciones. Lo acompa\u00f1amos en las visitas, negociamos con firmeza y nunca lo apresuramos hacia la casa equivocada.",
idx_c2t:"Vender",idx_c2p:"Fotograf\u00eda profesional, recorridos en video y marketing de lanzamiento para cada propiedad. Su casa presentada como se merece.",
idx_c3t:"Invertir",idx_c3p:"Multifamiliares, condominios y propiedades de renta. Hablamos el idioma del inversionista: tasas de capitalizaci\u00f3n, rentas y n\u00fameros realistas.",
idx_c4t:"Administrar",idx_c4p:"Administraci\u00f3n de propiedades para due\u00f1os que quieren los ingresos sin las llamadas a las 2 de la madrugada.",
idx_eyebrow2:"Por qu\u00e9 Home for Everyone",idx_h2_2:"Marketing de gran agencia.<br>Atenci\u00f3n boutique.",
idx_sub2:"Las grandes firmas le dan un logotipo. Nosotros le damos un plan de lanzamiento. Cada propiedad recibe direcci\u00f3n fotogr\u00e1fica, un recorrido en video, un volante y una campa\u00f1a en redes \u2014 el tratamiento completo, no un detalle de \u00faltima hora.",
idx_li1:"Toda consulta respondida el mismo d\u00eda \u2014 normalmente en menos de una hora",
idx_li2:"Fotograf\u00eda, video y orientaci\u00f3n de ambientaci\u00f3n en cada propiedad",
idx_li3:"An\u00e1lisis de nivel inversionista para propiedades de renta",
idx_li4:"Equipo multiling\u00fce al servicio de los diversos vecindarios de Boston",
cta_meet:"Conozca la agencia",
idx_eyebrow3:"Propiedades destacadas",idx_h2_3:"Disponibles ahora.",idx_sub3:"Propiedades actuales de nuestra agencia.",
cta_all:"Ver todas las propiedades",
idx_eyebrow4:"C\u00f3mo funciona",idx_h2_4:"Tres pasos hacia sus llaves.",
idx_s1t:"Conversemos",idx_s1p:"Cu\u00e9ntenos qu\u00e9 busca \u2014 o qu\u00e9 vende. Primero escuchamos, luego armamos el plan seg\u00fan su cronograma.",
idx_s2t:"Visitas / Lanzamiento",idx_s2p:"Los compradores visitan casas seleccionadas. Los vendedores reciben un lanzamiento completo de marketing: fotos, video y publicaci\u00f3n en todos los portales.",
idx_s3t:"Cierre",idx_s3p:"Negociaci\u00f3n, inspecci\u00f3n y tr\u00e1mites de principio a fin. Usted firma; nosotros nos encargamos de los detalles.",
cta_start:"Inicie la conversaci\u00f3n",
idx_fin_eyebrow:"Financiamiento",idx_fin_h:"\u00bfNecesita una hipoteca para su inversi\u00f3n?",
idx_fin_p:"A trav\u00e9s de Timeless Network Services \u2014 en nuestro edificio en 38 Central Square \u2014 nuestros clientes inversionistas obtienen soluciones hipotecarias comerciales con una consulta gratuita.",
cta_mortgage:"Explorar servicios hipotecarios",
lst_kicker:"Propiedades actuales",lst_h1:"Encuentre su <em>hogar.</em>",
lst_lede:"Cada propiedad recibe nuestro tratamiento completo de marketing \u2014 fotograf\u00eda profesional, recorrido en video y promoci\u00f3n de lanzamiento. Las nuevas propiedades se agregan en cuanto salen al mercado.",
lst_h2:"\u00bfBusca algo espec\u00edfico?",
lst_sub:"D\u00edganos su presupuesto, vecindarios y requisitos. Le enviaremos las propiedades que coincidan en cuanto salgan al mercado.",
cta_alerts:"Recibir alertas",
lbl_bd:"hab",lbl_ba:"ba\u00f1os",lbl_sqft:"pies\u00b2",lbl_sample:"Propiedad de muestra",lbl_sample_photo:"FOTO DE MUESTRA",lbl_listing_photo:"FOTO",
lst_empty:"A\u00fan no hay propiedades \u2014 vuelva pronto, o <a href=\"contact.html\">cont\u00e1ctenos</a> para oportunidades fuera del mercado.",
lst_empty_feat:"Pr\u00f3ximamente nuevas propiedades \u2014 <a href=\"listings.html\">ver todas las propiedades</a>.",
sell_kicker:"Venda con nosotros",sell_h1:"Su casa, <em>lanzada</em> \u2014 no solo publicada.",
sell_lede:"La mayor\u00eda de las agencias publican su casa en internet y esperan. Nosotros la lanzamos: direcci\u00f3n fotogr\u00e1fica, recorrido en video, volante y campa\u00f1a en redes \u2014 y luego trabajamos cada visita como si importara. Porque importa.",
sell_eyebrow:"El paquete de lanzamiento",sell_h2:"Cada propiedad recibe el tratamiento completo.",
sell_li1:"Direcci\u00f3n de fotograf\u00eda profesional y orientaci\u00f3n de ambientaci\u00f3n",
sell_li2:"Recorrido en video para cada propiedad",
sell_li3:"Volante impreso y folleto digital",
sell_li4:"Lanzamiento en redes sociales en nuestros canales",
sell_li5:"Casas abiertas, eventos para corredores y visitas privadas",
sell_li6:"Informes semanales al vendedor \u2014 visitas, comentarios y pr\u00f3ximos pasos",
sell_form_h:"Tasaci\u00f3n gratuita",
sell_form_p:"Cu\u00e9ntenos sobre su casa. Prepararemos un an\u00e1lisis de mercado y se lo explicaremos \u2014 sin compromiso.",
fl_name:"Nombre",fl_phone:"Tel\u00e9fono",fl_addr:"Direcci\u00f3n de la propiedad",fl_type:"Tipo de propiedad",
opt_condo:"Condominio",opt_single:"Unifamiliar",opt_multi:"Multifamiliar",opt_town:"Casa adosada",
fl_when:"\u00bfCu\u00e1ndo piensa vender?",
opt_asap:"Lo antes posible",opt_13:"1\u20133 meses",opt_36:"3\u20136 meses",opt_curious:"Solo por curiosidad",
cta_valuation:"Obtener mi tasaci\u00f3n",
form_ok_sell:"Gracias \u2014 recibimos su solicitud. Nos comunicaremos pronto con su tasaci\u00f3n.",
form_note:"Formulario de demostraci\u00f3n: conecte el correo de la agencia para recibir los env\u00edos.",
mor_kicker:"Servicios hipotecarios",mor_h1:"Financiamiento para su <em>pr\u00f3xima inversi\u00f3n.</em>",
mor_lede:"\u00bfVa a comprar una propiedad de inversi\u00f3n? A trav\u00e9s de nuestra alianza con Timeless Network Services, nuestros clientes acceden a soluciones hipotecarias comerciales dise\u00f1adas para inversionistas de bienes ra\u00edces en Boston.",
cta_visit:"Visitar Timeless Network Services",cta_talk:"Hable con nosotros primero",
mor_eyebrow:"Nuestro socio crediticio",mor_h2:"Timeless Network Services.",
mor_sub:"Soluciones hipotecarias comerciales para sus necesidades de inversi\u00f3n \u2014 aqu\u00ed mismo en 38 Central Square, en el mismo edificio que nuestra agencia. Una sola visita puede cubrir su compra y su financiamiento.",
mor_li1:"Soluciones hipotecarias comerciales para propiedades de inversi\u00f3n",
mor_li2:"Consulta gratuita \u2014 env\u00ede <strong>FREE</strong> al <strong>917-519-0221</strong>",
mor_li3:"La misma direcci\u00f3n de nuestra oficina: 38 Central Sq Suite 4, Boston, MA 02128",
mor_li4:"Abierto de lunes a viernes, 9:00 AM \u2013 5:00 PM",
cta_learn:"M\u00e1s informaci\u00f3n",
mor_card_eyebrow:"Comience",mor_card_h:"Consulta gratuita",
mor_card_p:"Env\u00ede <strong>FREE</strong> al<br><span style=\"font-family:var(--serif);font-size:24px;color:var(--green-deep)\">917-519-0221</span><br><br>O comun\u00edquese a trav\u00e9s de nosotros \u2014 cu\u00e9ntenos sobre la propiedad que va a comprar y lo conectaremos directamente.<br><br><a href=\"https://timelessnetworkservices.com\" target=\"_blank\" rel=\"noopener\">timelessnetworkservices.com</a>",
cta_contact:"Cont\u00e1ctenos",
mor_eyebrow2:"C\u00f3mo funciona",mor_h2_2:"Propiedad + financiamiento, bajo un mismo techo.",
mor_s1t:"Encuentre la propiedad",mor_s1p:"Le ayudamos a identificar la inversi\u00f3n ideal \u2014 multifamiliar, uso mixto o comercial.",
mor_s2t:"Hablemos de financiamiento",mor_s2p:"Timeless Network Services estructura la hipoteca comercial seg\u00fan su operaci\u00f3n.",
mor_s3t:"Cierre conjunto",mor_s3p:"La compra y el financiamiento avanzan juntos, desde la oferta hasta el d\u00eda del cierre."
}
};
/* ---- About / Contact / Our System / Brand : English ---- */
STRINGS.en.ab_kicker="About the brokerage";
STRINGS.en.ab_h1="Built on a simple belief:<br><em>everyone deserves home.</em>";
STRINGS.en.ab_eyebrow="What we stand for";STRINGS.en.ab_h2="Boutique by design.";
STRINGS.en.ab_li1="<strong>Every client, every time</strong> \u2014 no junior handoffs, no disappearing acts";
STRINGS.en.ab_li2="<strong>Marketing that earns attention</strong> \u2014 photography, video, and staging on every listing";
STRINGS.en.ab_li3="<strong>Straight numbers</strong> \u2014 honest pricing guidance, investor-grade analysis";
STRINGS.en.ab_li4="<strong>Boston roots</strong> \u2014 based at 38 Central Square, serving Greater Boston\u2019s neighborhoods";
STRINGS.en.ab_card_eyebrow="The brokerage";STRINGS.en.ab_card_h="HOME FOR ALL REALTY LLC";
STRINGS.en.ab_card_p="Trading as <strong>Home for Everyone \u2014 Boston</strong>.<br><br>38 Central Sq Suite 4<br>Boston, MA 02128<br><br>Massachusetts Real Estate Broker<br>License 24011548-RE-LC<br><br>Residential sales \u00b7 Investment properties \u00b7 Property management";
STRINGS.en.ab_meet_eyebrow="Meet your agent";STRINGS.en.ab_meet_h="Salustia Ortiz.";
STRINGS.en.ab_role="Broker \u00b7 Dreamcatcher Investment Group, Inc.";
STRINGS.en.ab_licensed="Licensed:";STRINGS.en.ab_cert="Certified Loss Mitigation Specialist";
STRINGS.en.ab_wbenc="Proud member of the Women\u2019s Business Enterprise National Council &amp; the Greater New England Minority Supplier Development Council";
STRINGS.en.ab_bio="I\u2019m an expert real estate agent with Dreamcatcher Investment Group, Inc. in Boston, MA and the nearby area, providing home-buyers and sellers with professional, responsive and attentive real estate services. Want an agent who\u2019ll really listen to what you want in a home? Need an agent who knows how to effectively market your home so it sells? Give me a call! I\u2019m eager to help and would love to talk to you.";
STRINGS.en.ab_office="Office:";STRINGS.en.ab_mobile="Mobile:";STRINGS.en.ab_email="Email:";
STRINGS.en.cta_work="Work with Salustia";
STRINGS.en.ab_wu_eyebrow="Work with us";STRINGS.en.ab_wu_h="Agents: build your business here.";
STRINGS.en.ab_wu_p="We\u2019re growing. If you\u2019re a licensed agent who wants real marketing support, modern tools, and a brokerage that invests in your listings \u2014 let\u2019s talk.";
STRINGS.en.cta_join="Join the brokerage";
STRINGS.en.con_kicker="Contact";STRINGS.en.con_h1="Let\u2019s talk about <em>your move.</em>";
STRINGS.en.con_lede="Buying, selling, investing, or managing \u2014 reach out and we\u2019ll respond the same day.";
STRINGS.en.con_form_h="Send a message";STRINGS.en.fl_topic="I\u2019m interested in";
STRINGS.en.opt_buy="Buying a home";STRINGS.en.opt_sell="Selling a home";STRINGS.en.opt_invest="Investment property";
STRINGS.en.opt_manage="Property management";STRINGS.en.opt_agent="Joining as an agent";STRINGS.en.opt_other="Something else";
STRINGS.en.fl_msg="Message";STRINGS.en.cta_send="Send message";
STRINGS.en.con_ok="Thank you \u2014 your message was received. We\u2019ll be in touch the same day.";
STRINGS.en.con_visit="Visit us";STRINGS.en.con_h2="38 Central Square.";
STRINGS.en.con_sub1="<strong>HOME FOR ALL REALTY LLC</strong><br>38 Central Sq Suite 4<br>Boston, MA 02128";
STRINGS.en.fl_phone_colon="Phone:";STRINGS.en.fl_email_colon="Email:";
STRINGS.en.con_sub3="Massachusetts Real Estate Broker<br>License 24011548-RE-LC";
STRINGS.en.con_prefer_h="Prefer to talk first?";
STRINGS.en.con_prefer_p="Send the form and we\u2019ll call you back the same day \u2014 usually within the hour during business hours.";
STRINGS.en.os_kicker="Our system";STRINGS.en.os_h1="The brokerage, <em>run as a system.</em>";
STRINGS.en.os_lede="Most brokerages wing it. We run six modules \u2014 presence, leads, listing launches, outreach, niche expertise, and reputation \u2014 so every client gets the same standard of care, every time.";
STRINGS.en.os_c1t="Presence";STRINGS.en.os_c1p="This website, an optimized Google Business Profile, portal profiles, and LinkedIn \u2014 so clients can find us, check us, and trust us before the first call.";
STRINGS.en.os_c2t="Lead engine";STRINGS.en.os_c2p="Buyer consultation and seller home-valuation funnels, listing alerts for serious searchers, and a loss-mitigation funnel for distressed homeowners who need a specialist, not a sales pitch.";
STRINGS.en.os_c3t="Listing marketing OS";STRINGS.en.os_c3p="Every listing is <strong>launched, not listed</strong>: professional photography and video, a printed flyer, and a coordinated social rollout. The full treatment \u2014 not an afterthought.";
STRINGS.en.os_c4t="Outreach OS";STRINGS.en.os_c4p="A real cadence with our sphere and past clients, attention to expired and cancelled listings, FSBO conversations, and an investor buyer list for the Boston\u2013Worcester corridor.";
STRINGS.en.os_c5t="Niche OS";STRINGS.en.os_c5p="Salustia Ortiz is a <strong>Certified Loss Mitigation Specialist</strong> \u2014 running a pre-foreclosure and short-sale pipeline with attorney and CPA referral partners. Her membership in the Women\u2019s Business Enterprise National Council and the Greater New England Minority Supplier Development Council opens supplier-diversity and corporate-relocation doors.";
STRINGS.en.os_c6t="Review + content engine";STRINGS.en.os_c6p="A Google review requested after every closing, plus weekly market updates and just-sold content \u2014 so the track record builds itself in public.";
STRINGS.en.os_eyebrow="How it comes together";STRINGS.en.os_h2="One standard.<br>Every client.";
STRINGS.en.os_sub="The system is how a boutique brokerage delivers big-brokerage consistency: the same launch plan for a $300K condo and a $1.2M multi-family, the same follow-through for a first-time buyer and a seasoned investor.";
STRINGS.en.cta_sell_sys="Sell with the system";STRINGS.en.cta_see="See current listings";
STRINGS.en.os_talk="Talk to us";STRINGS.en.os_h2b="Buying, selling, or investing?";
STRINGS.en.os_pb="Tell us your timeline and your goals. We\u2019ll show you exactly which part of the system goes to work first.";
STRINGS.en.br_kicker="Brand guidelines";STRINGS.en.br_h1="The <em>Home for Everyone</em> brand.";
STRINGS.en.br_lede="Luxury boutique, warmly welcoming. Deep forest green for trust, brushed gold for aspiration \u2014 a brand that says premium without saying exclusive.";
STRINGS.en.br_logo_eyebrow="The logo";STRINGS.en.br_logo_h="The key to home.";
STRINGS.en.br_logo_p="A vintage key whose bow forms a house \u2014 the promise that this brokerage hands you the keys. Always reproduce the logo from the master artwork file. Never redraw, recolor, or rearrange it.";
STRINGS.en.br_clear_h="Clear space &amp; minimum size";
STRINGS.en.br_clear_p="Keep clear space around the logo equal to the height of the key on all sides. Minimum digital width: 120px. Minimum print width: 1 inch.";
STRINGS.en.br_do="\u2713 Do";
STRINGS.en.br_do_p="Use the full-color logo on white, ivory, or light backgrounds. Use the badge alone as a social avatar or favicon.";
STRINGS.en.br_dont="\u2715 Don\u2019t";
STRINGS.en.br_dont_p="Don\u2019t stretch, rotate, recolor, add shadows, or place the logo on busy photography without a scrim.";
STRINGS.en.br_col_eyebrow="Colors";STRINGS.en.br_col_h="Forest &amp; gold.";
STRINGS.en.br_type_eyebrow="Typography";STRINGS.en.br_type_h="Editorial serif, clean sans.";
STRINGS.en.br_disp="Display \u2014 headlines";
STRINGS.en.br_disp_p="Playfair Display (fallback: Didot, Georgia, serif) \u2014 headlines, prices, brand statements.";
STRINGS.en.br_text="Text \u2014 body &amp; UI";
STRINGS.en.br_text_p="Inter (fallback: system sans) \u2014 body copy, forms, navigation.";
STRINGS.en.br_voice_eyebrow="Voice";STRINGS.en.br_voice_h="Warm. Direct. Never stuffy.";
STRINGS.en.br_say="\u2713 We say";
STRINGS.en.br_say_p="\u201cYour home, launched \u2014 not just listed.\u201d<br>\u201cTell us what you\u2019re after. We listen first.\u201d<br>\u201cA home for everyone. Right here in Boston.\u201d";
STRINGS.en.br_never="\u2715 We never say";
STRINGS.en.br_never_p="Jargon without explanation. Guarantees about prices or timelines. Anything that makes a first-time buyer feel small.";
/* ---- About / Contact / Our System / Brand : Espa\u00f1ol ---- */
STRINGS.es.ab_kicker="Sobre la agencia";
STRINGS.es.ab_h1="Construido sobre una creencia simple:<br><em>todos merecen un hogar.</em>";
STRINGS.es.ab_eyebrow="Nuestros valores";STRINGS.es.ab_h2="Boutique por dise\u00f1o.";
STRINGS.es.ab_li1="<strong>Cada cliente, siempre</strong> \u2014 sin intermediarios inexpertos ni desapariciones";
STRINGS.es.ab_li2="<strong>Marketing que llama la atenci\u00f3n</strong> \u2014 fotograf\u00eda, video y ambientaci\u00f3n en cada propiedad";
STRINGS.es.ab_li3="<strong>N\u00fameros claros</strong> \u2014 orientaci\u00f3n honesta de precios y an\u00e1lisis de nivel inversionista";
STRINGS.es.ab_li4="<strong>Ra\u00edces en Boston</strong> \u2014 con sede en 38 Central Square, al servicio de los vecindarios del Gran Boston";
STRINGS.es.ab_card_eyebrow="La agencia";STRINGS.es.ab_card_h="HOME FOR ALL REALTY LLC";
STRINGS.es.ab_card_p="Operando como <strong>Home for Everyone \u2014 Boston</strong>.<br><br>38 Central Sq Suite 4<br>Boston, MA 02128<br><br>Corredor de bienes ra\u00edces de Massachusetts<br>Licencia 24011548-RE-LC<br><br>Ventas residenciales \u00b7 Propiedades de inversi\u00f3n \u00b7 Administraci\u00f3n de propiedades";
STRINGS.es.ab_meet_eyebrow="Conozca a su agente";STRINGS.es.ab_meet_h="Salustia Ortiz.";
STRINGS.es.ab_role="Corredora \u00b7 Dreamcatcher Investment Group, Inc.";
STRINGS.es.ab_licensed="Licencias:";STRINGS.es.ab_cert="Especialista certificada en mitigaci\u00f3n de p\u00e9rdidas";
STRINGS.es.ab_wbenc="Miembro orgullosa del Women\u2019s Business Enterprise National Council y del Greater New England Minority Supplier Development Council";
STRINGS.es.ab_bio="Soy una agente experta en bienes ra\u00edces con Dreamcatcher Investment Group, Inc. en Boston, MA y alrededores, brindando a compradores y vendedores servicios profesionales, atentos y diligentes. \u00bfBusca una agente que realmente escuche lo que desea en un hogar? \u00bfNecesita una agente que sepa c\u00f3mo promocionar su casa para venderla? \u00a1Ll\u00e1meme! Estoy dispuesta a ayudar y me encantar\u00eda conversar con usted.";
STRINGS.es.ab_office="Oficina:";STRINGS.es.ab_mobile="Celular:";STRINGS.es.ab_email="Correo:";
STRINGS.es.cta_work="Trabaje con Salustia";
STRINGS.es.ab_wu_eyebrow="Trabaje con nosotros";STRINGS.es.ab_wu_h="Agentes: impulse su negocio aqu\u00ed.";
STRINGS.es.ab_wu_p="Estamos creciendo. Si es un agente licenciado que busca apoyo real de marketing, herramientas modernas y una agencia que invierte en sus propiedades \u2014 conversemos.";
STRINGS.es.cta_join="\u00danase a la agencia";
STRINGS.es.con_kicker="Contacto";STRINGS.es.con_h1="Hablemos de <em>su mudanza.</em>";
STRINGS.es.con_lede="Compra, venta, inversi\u00f3n o administraci\u00f3n \u2014 escr\u00edbanos y le responderemos el mismo d\u00eda.";
STRINGS.es.con_form_h="Env\u00ede un mensaje";STRINGS.es.fl_topic="Me interesa";
STRINGS.es.opt_buy="Comprar una casa";STRINGS.es.opt_sell="Vender una casa";STRINGS.es.opt_invest="Propiedad de inversi\u00f3n";
STRINGS.es.opt_manage="Administraci\u00f3n de propiedades";STRINGS.es.opt_agent="Unirme como agente";STRINGS.es.opt_other="Otro tema";
STRINGS.es.fl_msg="Mensaje";STRINGS.es.cta_send="Enviar mensaje";
STRINGS.es.con_ok="Gracias \u2014 recibimos su mensaje. Nos comunicaremos el mismo d\u00eda.";
STRINGS.es.con_visit="Vis\u00edtenos";STRINGS.es.con_h2="38 Central Square.";
STRINGS.es.con_sub1="<strong>HOME FOR ALL REALTY LLC</strong><br>38 Central Sq Suite 4<br>Boston, MA 02128";
STRINGS.es.fl_phone_colon="Tel\u00e9fono:";STRINGS.es.fl_email_colon="Correo:";
STRINGS.es.con_sub3="Corredor de bienes ra\u00edces de Massachusetts<br>Licencia 24011548-RE-LC";
STRINGS.es.con_prefer_h="\u00bfPrefiere hablar primero?";
STRINGS.es.con_prefer_p="Env\u00ede el formulario y le devolveremos la llamada el mismo d\u00eda \u2014 normalmente en menos de una hora durante el horario de atenci\u00f3n.";
STRINGS.es.os_kicker="Nuestro sistema";STRINGS.es.os_h1="La agencia, <em>gestionada como un sistema.</em>";
STRINGS.es.os_lede="La mayor\u00eda de las agencias improvisa. Nosotros operamos seis m\u00f3dulos \u2014 presencia, clientes potenciales, lanzamientos, alcance, nichos y reputaci\u00f3n \u2014 para que cada cliente reciba el mismo est\u00e1ndar de atenci\u00f3n, siempre.";
STRINGS.es.os_c1t="Presencia";STRINGS.es.os_c1p="Este sitio web, un perfil optimizado de Google Business, perfiles en portales y LinkedIn \u2014 para que los clientes nos encuentren, nos verifiquen y conf\u00eden en nosotros antes de la primera llamada.";
STRINGS.es.os_c2t="Motor de clientes";STRINGS.es.os_c2p="Embudos de consulta para compradores y de tasaci\u00f3n para vendedores, alertas de propiedades para buscadores serios y un embudo de mitigaci\u00f3n de p\u00e9rdidas para propietarios en dificultades que necesitan una especialista, no un discurso de ventas.";
STRINGS.es.os_c3t="Marketing de propiedades";STRINGS.es.os_c3p="Cada propiedad se <strong>lanza, no se publica</strong>: fotograf\u00eda y video profesionales, volante impreso y campa\u00f1a coordinada en redes. El tratamiento completo \u2014 no un detalle de \u00faltima hora.";
STRINGS.es.os_c4t="Alcance";STRINGS.es.os_c4p="Un ritmo constante con nuestra red y clientes anteriores, atenci\u00f3n a propiedades vencidas y canceladas, conversaciones con propietarios que venden por su cuenta y una lista de inversionistas para el corredor Boston\u2013Worcester.";
STRINGS.es.os_c5t="Nicho";STRINGS.es.os_c5p="Salustia Ortiz es <strong>Especialista certificada en mitigaci\u00f3n de p\u00e9rdidas</strong> \u2014 gestionando una cartera de pre-ejecuciones hipotecarias y ventas cortas con abogados y contadores aliados. Su membres\u00eda en el Women\u2019s Business Enterprise National Council y el Greater New England Minority Supplier Development Council abre puertas en diversidad de proveedores y reubicaciones corporativas.";
STRINGS.es.os_c6t="Rese\u00f1as y contenido";STRINGS.es.os_c6p="Una rese\u00f1a de Google solicitada despu\u00e9s de cada cierre, adem\u00e1s de actualizaciones semanales del mercado y contenido de propiedades vendidas \u2014 para que el historial se construya solo, en p\u00fablico.";
STRINGS.es.os_eyebrow="C\u00f3mo se integra";STRINGS.es.os_h2="Un est\u00e1ndar.<br>Cada cliente.";
STRINGS.es.os_sub="El sistema es la forma en que una agencia boutique logra la consistencia de las grandes: el mismo plan de lanzamiento para un condominio de $300K y un multifamiliar de $1.2M, el mismo seguimiento para un comprador primerizo y un inversionista experimentado.";
STRINGS.es.cta_sell_sys="Venda con el sistema";STRINGS.es.cta_see="Ver propiedades actuales";
STRINGS.es.os_talk="Hable con nosotros";STRINGS.es.os_h2b="\u00bfCompra, vende o invierte?";
STRINGS.es.os_pb="Cu\u00e9ntenos su cronograma y sus metas. Le mostraremos exactamente qu\u00e9 parte del sistema empieza a trabajar primero.";
STRINGS.es.br_kicker="Gu\u00eda de marca";STRINGS.es.br_h1="La marca <em>Home for Everyone</em>.";
STRINGS.es.br_lede="Boutique de lujo, c\u00e1lidamente acogedora. Verde bosque profundo para la confianza, dorado cepillado para la aspiraci\u00f3n \u2014 una marca que dice premium sin decir exclusivo.";
STRINGS.es.br_logo_eyebrow="El logotipo";STRINGS.es.br_logo_h="La llave del hogar.";
STRINGS.es.br_logo_p="Una llave antigua cuyo arco forma una casa \u2014 la promesa de que esta agencia le entrega las llaves. Reproduzca siempre el logotipo desde el archivo maestro. Nunca lo redibuje, cambie de color ni reorganice.";
STRINGS.es.br_clear_h="Espacio libre y tama\u00f1o m\u00ednimo";
STRINGS.es.br_clear_p="Mantenga un espacio libre alrededor del logotipo equivalente a la altura de la llave en todos los lados. Ancho digital m\u00ednimo: 120px. Ancho impreso m\u00ednimo: 1 pulgada.";
STRINGS.es.br_do="\u2713 S\u00ed";
STRINGS.es.br_do_p="Use el logotipo a todo color sobre fondos blancos, marfil o claros. Use la insignia sola como avatar social o favicon.";
STRINGS.es.br_dont="\u2715 No";
STRINGS.es.br_dont_p="No estire, rote, cambie de color, agregue sombras ni coloque el logotipo sobre fotograf\u00edas recargadas sin un velo.";
STRINGS.es.br_col_eyebrow="Colores";STRINGS.es.br_col_h="Bosque y dorado.";
STRINGS.es.br_type_eyebrow="Tipograf\u00eda";STRINGS.es.br_type_h="Serif editorial, sans limpia.";
STRINGS.es.br_disp="Display \u2014 titulares";
STRINGS.es.br_disp_p="Playfair Display (alternativa: Didot, Georgia, serif) \u2014 titulares, precios, mensajes de marca.";
STRINGS.es.br_text="Texto \u2014 cuerpo e interfaz";
STRINGS.es.br_text_p="Inter (alternativa: sans del sistema) \u2014 cuerpo, formularios, navegaci\u00f3n.";
STRINGS.es.br_voice_eyebrow="Voz";STRINGS.es.br_voice_h="C\u00e1lida. Directa. Nunca acartonada.";
STRINGS.es.br_say="\u2713 Decimos";
STRINGS.es.br_say_p="\u201cSu casa, lanzada \u2014 no solo publicada.\u201d<br>\u201cCu\u00e9ntenos qu\u00e9 busca. Primero escuchamos.\u201d<br>\u201cUn hogar para todos. Aqu\u00ed mismo en Boston.\u201d";
STRINGS.es.br_never="\u2715 Nunca decimos";
STRINGS.es.br_never_p="Jerga sin explicaci\u00f3n. Garant\u00edas sobre precios o plazos. Nada que haga sentir peque\u00f1o a un comprador primerizo.";
/* Spanish defaults for admin-editable content: used only while the stored
   value still matches the English default. */
var HFE_ES_DEFAULTS={
hero_title:"Un hogar para todos.<br><em>Aqu\u00ed mismo en Boston.</em>",
hero_lede:"Compre, venda e invierta con una agencia boutique que trata su mudanza como propia. Marketing moderno, orientaci\u00f3n honesta y seguimiento incansable \u2014 desde la primera visita hasta la firma final.",
notice:"<strong>COMPRA \u00b7 VENTA \u00b7 INVERSI\u00d3N</strong> &nbsp;\u2014&nbsp; Ventas residenciales, propiedades de inversi\u00f3n y administraci\u00f3n de propiedades en el Gran Boston.",
about_text:"HOME FOR ALL REALTY LLC es una agencia de Boston fundada con la idea de que un gran servicio inmobiliario no deber\u00eda depender del tama\u00f1o de la operaci\u00f3n. Comprador primerizo o inversionista experimentado \u2014 recibe el mismo marketing de lanzamiento y la misma defensa incansable."
};
function getLang(){try{var l=localStorage.getItem(KEY);return l==="es"?"es":"en";}catch(e){return "en";}}
function setLang(l){try{localStorage.setItem(KEY,l==="es"?"es":"en");}catch(e){}if(window.HFE&&window.HFE.apply){window.HFE.apply();}else{apply();}}
function T(k){var l=getLang();if(STRINGS[l]&&STRINGS[l][k]!=null)return STRINGS[l][k];return STRINGS.en[k];}
window.HFE_I18N_T=T;
function swapEditableDefaults(){
  if(!(window.HFE&&window.HFE.DEFAULTS))return;
  var D=window.HFE.DEFAULTS,l=getLang();
  document.querySelectorAll("[data-hfe]").forEach(function(el){
    var k=el.getAttribute("data-hfe");
    if(!(k in HFE_ES_DEFAULTS))return;
    var isTitle=(k==="hero_title");
    var cur=isTitle?el.innerHTML:el.textContent;
    var esVal=HFE_ES_DEFAULTS[k];
    if(l==="es"&&cur===D[k]){if(isTitle)el.innerHTML=esVal;else el.textContent=esVal;}
    else if(l==="en"&&cur===esVal){if(isTitle)el.innerHTML=D[k];else el.textContent=D[k];}
  });
}
function apply(){
  var l=getLang();
  document.documentElement.setAttribute("lang",l);
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    var v=T(el.getAttribute("data-i18n"));
    if(v!=null)el.innerHTML=v;
  });
  document.querySelectorAll("[data-setlang]").forEach(function(b){
    b.classList.toggle("active",b.getAttribute("data-setlang")===l);
  });
  swapEditableDefaults();
}
window.HFE_I18N_apply=apply;
document.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll("[data-setlang]").forEach(function(b){
    b.addEventListener("click",function(){setLang(b.getAttribute("data-setlang"));});
  });
  apply();
});
})();
