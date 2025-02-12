"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[479],{7908:function(e,s,n){var i=n(5893),t=n(7294);let a=()=>{let[e,s]=(0,t.useState)({name:"",email:"",phone:"",subject:"",message:""}),[n,a]=(0,t.useState)(""),[o,r]=(0,t.useState)(!1),[l,c]=(0,t.useState)(!1),d=e=>{let{name:n,value:i}=e.target;s(e=>({...e,[n]:i}))},p=async n=>{n.preventDefault(),c(!0),a("");let i=new URLSearchParams(e);try{let e=await fetch("mail.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:i});if(!e.ok)throw Error("Failed to send to mail.php");let n=await e.text();a(n),r(!0),s({name:"",email:"",phone:"",subject:"",message:""})}catch(e){a("Oops! An error occurred and your message could not be sent."),r(!1)}finally{c(!1),setInterval(()=>{r(!1)},2e3)}};return(0,i.jsx)("form",{id:"contact-form",onSubmit:p,children:(0,i.jsxs)("div",{className:"row wow animate__animated animate__fadeIn",children:[(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)("div",{className:"form-group",children:(0,i.jsx)("input",{className:"form-control",type:"text",placeholder:"Your name *",name:"name",value:e.name,onChange:d})})}),(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)("div",{className:"form-group",children:(0,i.jsx)("input",{className:"form-control",type:"text",name:"email",placeholder:"Your email *",value:e.email,onChange:d})})}),(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)("div",{className:"form-group",children:(0,i.jsx)("input",{className:"form-control",type:"tel",name:"phone",placeholder:"Your phone number",value:e.phone,onChange:d})})}),(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)("div",{className:"form-group",children:(0,i.jsx)("input",{className:"form-control",type:"text",name:"subject",placeholder:"Subject",value:e.subject,onChange:d})})}),(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"form-group",children:(0,i.jsx)("textarea",{className:"form-control",placeholder:"Message / Note",rows:8,name:"message",defaultValue:"",value:e.message,onChange:d})})}),(0,i.jsxs)("div",{className:"col-md-12",children:[(0,i.jsx)("button",{className:"btn btn-brand-1-big",type:"submit",defaultValue:"Submit Now",children:l?"Sending...":o?"Sent":"Send Message"}),(0,i.jsx)("div",{className:"ajax-response ".concat(o?"success":"error"),children:n})]})]})})};s.Z=a},6037:function(e,s,n){n.d(s,{n:function(){return i}});let i=[{id:1,title:"Top Strategies for Cost-Effective Shipping in 2025",description:"Discover expert insights on optimizing your logistics strategy, reducing costs, and improving efficiency.",content:{para1:"\n          Cost-effective shipping is crucial for businesses looking to optimize their logistics while keeping expenses under control. \n          With rising transportation costs, fluctuating fuel prices, and increasing demand for fast deliveries, companies must implement \n          strategic shipping methods that balance affordability and efficiency. \n  \n          One of the first steps to achieving cost-effective shipping is choosing the right shipping method. Air freight may be \n          fast but expensive, while sea and rail freight are more economical for bulk shipments. Companies must assess their \n          logistics needs to determine the best method based on cost and speed. \n        ",para2:"\n          Another key strategy is leveraging technology for route optimization and automated shipment tracking. AI-powered \n          logistics tools help businesses reduce fuel costs by selecting the most efficient routes and improving delivery times. \n  \n          Additionally, freight consolidation is an effective method for cost reduction. Businesses that don’t ship full \n          container loads (FCL) can use Less than Container Load (LCL) shipping, where goods are combined with other shipments \n          to share container space, cutting costs. \n  \n          In conclusion, a combination of smart freight selection, technology integration, and shipment consolidation can help \n          businesses reduce costs without compromising delivery efficiency.\n        "},image:"/assets/imgs/page/homepage1/news1.png",category:"Shipping",date:"15 Jan 2025",link:"/blog/top-strategies-for-cost-effective-shipping"},{id:2,title:"How to Choose the Right Freight Service for Your Business",description:"A complete guide to selecting the best freight solution for your business, whether it's air, rail, or ocean freight.",content:{para1:"\n          Choosing the right freight service is essential for businesses that rely on shipping goods. The decision between \n          air, sea, rail, and road freight depends on multiple factors, including cost, speed, cargo type, and destination. \n  \n          For businesses dealing with urgent deliveries, air freight is the best option, despite its high cost. On the \n          other hand, sea freight is ideal for large shipments that aren’t time-sensitive, as it’s the most cost-effective \n          option for international trade. Rail and road freight provide flexibility and affordability for domestic shipping. \n        ",para2:"\n          Another important factor in selecting the right freight service is reliability. Businesses should look for \n          freight providers with advanced tracking systems that offer real-time shipment updates. \n  \n          Companies should also consider customs clearance and regulatory compliance when choosing a freight service. \n          International shipping requires compliance with various trade laws, and working with a freight provider that \n          offers customs brokerage services can simplify the process.\n  \n          By carefully evaluating cost, speed, tracking, and regulatory support, businesses can choose a freight \n          solution that best fits their needs while ensuring seamless operations.\n        "},image:"/assets/imgs/page/homepage1/news2.png",category:"Logistics",date:"04 Jan 2025",link:"/blog/how-to-choose-right-freight-service"},{id:3,title:"Key Trends Shaping Global Supply Chains in 2024",description:"Stay ahead in the logistics industry with these emerging trends that will impact supply chains worldwide.",content:{para1:"\n          The supply chain industry is undergoing rapid transformations due to technological advancements, global trade \n          shifts, and increasing sustainability demands. Businesses must stay updated on these trends to remain competitive \n          in an ever-changing market. \n  \n          One major trend shaping global supply chains is the rise of automation and AI-powered logistics. AI-driven \n          supply chain management tools enhance efficiency by optimizing inventory, demand forecasting, and predictive \n          analytics for better decision-making.\n        ",para2:"\n          Another key trend is sustainability in supply chains. Companies are under pressure to reduce their carbon \n          footprint by adopting eco-friendly transportation solutions, such as electric vehicles and green warehousing. \n  \n          Additionally, the expansion of e-commerce has led to an increased focus on last-mile delivery innovations, \n          with businesses investing in smart distribution networks to enhance delivery speed and efficiency. \n  \n          Keeping up with these trends—automation, sustainability, and digital transformation—will help businesses \n          strengthen their supply chain strategies and drive long-term success.\n        "},image:"/assets/imgs/page/homepage1/news3.png",category:"Supply Chain",date:"02 Jan 2025",link:"/blog/key-trends-global-supply-chain"},{id:4,title:"Essential Tips for Hassle-Free International Shipping",description:"Avoid common pitfalls and streamline your international shipments with these expert tips.",content:{para1:"\n          International shipping can be complex, with various regulations, customs requirements, and logistical challenges. \n          Businesses must follow best practices to ensure a smooth shipping process and avoid delays. \n  \n          One of the first steps to hassle-free shipping is understanding customs documentation. Ensuring all necessary \n          paperwork, including invoices, packing lists, and import/export permits, are correctly filled out can prevent \n          customs clearance delays.\n        ",para2:"\n          Another critical aspect of international shipping is choosing the right shipping partner. Working with \n          experienced freight forwarders helps businesses navigate trade laws, manage duties and taxes, and streamline \n          the logistics process. \n  \n          Additionally, businesses should consider cargo insurance to protect against potential losses during transit. \n          Shipping internationally involves risks such as theft, damage, and unforeseen delays, making insurance coverage \n          an essential investment.\n  \n          By focusing on customs compliance, freight partnerships, and risk management, businesses can ensure \n          hassle-free international shipping and enhance their global supply chain efficiency.\n        "},image:"/assets/imgs/page/blog/news1.png",category:"International Trade",date:"28 Dec 2024",link:"/blog/essential-tips-international-shipping"},{id:5,title:"The Role of AI in Revolutionizing Logistics & Transportation",description:"Explore how artificial intelligence is transforming logistics operations for better efficiency and automation.",content:{para1:"\n          AI is revolutionizing logistics by automating processes, improving accuracy, and optimizing supply chain \n          operations. From predictive analytics to real-time shipment tracking, AI enhances efficiency across all aspects \n          of logistics. \n  \n          One of the most impactful applications of AI in logistics is route optimization. AI-driven systems analyze \n          traffic patterns and weather conditions to determine the fastest and most cost-effective delivery routes.\n        ",para2:"\n          AI also plays a significant role in warehouse automation. Smart robots and AI-powered inventory management \n          systems reduce errors, improve order fulfillment speed, and enhance overall productivity. \n  \n          Furthermore, AI-driven demand forecasting helps businesses anticipate supply chain disruptions and make \n          data-driven decisions. \n  \n          By leveraging AI-powered logistics solutions, businesses can achieve greater efficiency, reduced costs, \n          and improved customer satisfaction.\n        "},image:"/assets/imgs/page/blog/news7.png",category:"Technology",date:"20 Dec 2024",link:"/blog/ai-in-logistics-transportation"},{id:6,title:"Understanding Customs Clearance: A Step-by-Step Guide",description:"A detailed guide on how customs clearance works and how businesses can simplify the process.",content:{para1:"\n          Customs clearance is an essential process for businesses involved in international trade. It involves submitting \n          the required documentation, paying duties and taxes, and complying with import/export regulations. \n  \n          The process begins with classifying goods under the correct tariff codes, which determines the applicable \n          duties and regulations.\n        ",para2:"\n          One of the biggest challenges in customs clearance is ensuring compliance with international trade laws. \n          Businesses must stay updated on regulations, as non-compliance can result in fines or shipment delays. \n  \n          Partnering with a customs broker can help streamline the process by ensuring all documentation is complete \n          and accurate.\n  \n          By following best practices in customs compliance, businesses can avoid costly delays and ensure smooth \n          cross-border trade.\n        "},image:"/assets/imgs/page/blog/news9.png",category:"Customs & Compliance",date:"15 Dec 2024",link:"/blog/customs-clearance-guide"}]},3889:function(e,s,n){n.d(s,{Z:function(){return o}});var i=n(5893),t=n(2546),a=n(6523);function o(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.tq,{modules:[a.pt,a.tl,a.W_],slidesPerView:6,spaceBetween:30,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0,el:".swiper-pagination-banner"},navigation:{prevEl:".swiper-button-prev-customers",nextEl:".swiper-button-next-customers"},breakpoints:{320:{slidesPerView:1,spaceBetween:30},575:{slidesPerView:2,spaceBetween:30},767:{slidesPerView:3,spaceBetween:30},991:{slidesPerView:4,spaceBetween:30},1199:{slidesPerView:6,spaceBetween:30},1350:{slidesPerView:6,spaceBetween:30}},className:"swiper-wrapper wow animate__animated animate__fadeIn",children:[(0,i.jsx)(t.o5,{children:(0,i.jsx)("img",{src:"/assets/imgs/slider/logo/alea.png",alt:"transp"})}),(0,i.jsx)(t.o5,{children:(0,i.jsx)("img",{src:"/assets/imgs/slider/logo/land.png",alt:"transp"})}),(0,i.jsx)(t.o5,{children:(0,i.jsx)("img",{src:"/assets/imgs/slider/logo/logis.png",alt:"transp"})}),(0,i.jsx)(t.o5,{children:(0,i.jsx)("img",{src:"/assets/imgs/slider/logo/truck.png",alt:"transp"})}),(0,i.jsx)(t.o5,{children:(0,i.jsx)("img",{src:"/assets/imgs/slider/logo/saltos.png",alt:"transp"})}),(0,i.jsx)(t.o5,{children:(0,i.jsx)("img",{src:"/assets/imgs/slider/logo/creati.png",alt:"transp"})}),(0,i.jsx)(t.o5,{children:(0,i.jsx)("img",{src:"/assets/imgs/slider/logo/logis.png",alt:"transp"})}),(0,i.jsx)(t.o5,{children:(0,i.jsx)("img",{src:"/assets/imgs/slider/logo/truck.png",alt:"transp"})})]})})}}}]);