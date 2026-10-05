import type { Announcement, Department, Document, Employee, Event, QuickLink, Resource, SubDepartment, Team } from '../types'
export const department:Department={id:'gbs',name:'Global Business Services',description:'One connected GBS community, bringing together the people, technology and operations that help our business move forward.'}
export const people:Employee[]=[
 {id:'alex',name:'Alex Morgan',title:'Department Administrator',teamId:'leadership',subDepartmentId:'gbs-bts',email:'alex.morgan@example.com',location:'London',initials:'AM',role:'Lead',color:'plum'},
 {id:'david',name:'David Wilson',title:'Engineering Manager',teamId:'platform',subDepartmentId:'gbs-bts',email:'david.wilson@example.com',location:'London',initials:'DW',role:'Manager',color:'blue'},
 {id:'priya',name:'Priya Shah',title:'Platform Engineer',teamId:'platform',subDepartmentId:'gbs-bts',email:'priya.shah@example.com',location:'Bengaluru',initials:'PS',role:'Employee',color:'rose'},
 {id:'marcus',name:'Marcus Chen',title:'Cloud Infrastructure Lead',teamId:'infrastructure',subDepartmentId:'gbs-bts',email:'marcus.chen@example.com',location:'Singapore',initials:'MC',role:'Lead',color:'green'},
 {id:'elena',name:'Elena Rossi',title:'Automation Manager',teamId:'automation',subDepartmentId:'gbs-bts',email:'elena.rossi@example.com',location:'Milan',initials:'ER',role:'Manager',color:'gold'},
 {id:'james',name:'James Okafor',title:'Service Operations Manager',teamId:'service-ops',subDepartmentId:'gbs-bts',email:'james.okafor@example.com',location:'Dublin',initials:'JO',role:'Manager',color:'teal'},
 {id:'sarah',name:'Sarah Thompson',title:'Business Operations Manager',teamId:'business-ops',subDepartmentId:'gps-bo',email:'sarah.thompson@example.com',location:'London',initials:'ST',role:'Manager',color:'rose'},
 {id:'luis',name:'Luis Fernandez',title:'Finance Operations Lead',teamId:'finance-ops',subDepartmentId:'gps-bo',email:'luis.fernandez@example.com',location:'Madrid',initials:'LF',role:'Lead',color:'blue'},
 {id:'amina',name:'Amina Yusuf',title:'People Services Manager',teamId:'people-services',subDepartmentId:'gps-bo',email:'amina.yusuf@example.com',location:'Nairobi',initials:'AY',role:'Manager',color:'gold'},
 {id:'noah',name:'Noah Williams',title:'Procurement Manager',teamId:'procurement',subDepartmentId:'gps-bo',email:'noah.williams@example.com',location:'Toronto',initials:'NW',role:'Manager',color:'green'},
 {id:'mei',name:'Mei Tanaka',title:'Senior Platform Engineer',teamId:'platform',subDepartmentId:'gbs-bts',email:'mei.tanaka@example.com',location:'Tokyo',initials:'MT',role:'Employee',color:'teal'},
 {id:'oliver',name:'Oliver Brown',title:'Service Analyst',teamId:'service-ops',subDepartmentId:'gbs-bts',email:'oliver.brown@example.com',location:'Dublin',initials:'OB',role:'Employee',color:'plum'},
]
export const teams:Team[]=[
 {id:'platform',name:'Platform Engineering',subDepartmentId:'gbs-bts',description:'Build and evolve the reliable, secure platforms our teams use to deliver great work.',responsibilities:['Cloud platform engineering','Developer experience','Platform reliability'],managerId:'david',memberIds:['david','priya','mei'],resourceIds:['cloud-guide','engineering-handbook'],email:'platform.gbs@example.com',location:'Global'},
 {id:'infrastructure',name:'Infrastructure',subDepartmentId:'gbs-bts',description:'Keep our core infrastructure resilient, connected and ready for what is next.',responsibilities:['Cloud and network services','Infrastructure operations','Security foundations'],managerId:'marcus',memberIds:['marcus'],resourceIds:['cloud-guide'],email:'infrastructure.gbs@example.com',location:'Global'},
 {id:'automation',name:'Automation',subDepartmentId:'gbs-bts',description:'Make everyday work simpler through thoughtful automation and reusable solutions.',responsibilities:['Process automation','Workflow design','Automation standards'],managerId:'elena',memberIds:['elena'],resourceIds:['automation-playbook'],email:'automation.gbs@example.com',location:'Global'},
 {id:'service-ops',name:'Service Operations',subDepartmentId:'gbs-bts',description:'Deliver a dependable, human-centered support experience across GBS technology.',responsibilities:['Service desk','Incident and request management','Knowledge operations'],managerId:'james',memberIds:['james','oliver'],resourceIds:['service-catalog'],email:'serviceops.gbs@example.com',location:'Global'},
 {id:'business-ops',name:'Business Operations',subDepartmentId:'gps-bo',description:'Connect the operational services and insights that keep our business running smoothly.',responsibilities:['Business process excellence','Operational insights','Service coordination'],managerId:'sarah',memberIds:['sarah'],resourceIds:['process-library'],email:'businessops.gbs@example.com',location:'Global'},
 {id:'finance-ops',name:'Finance Operations',subDepartmentId:'gps-bo',description:'Support accurate, efficient financial operations for our colleagues and partners.',responsibilities:['Accounts payable','Expense support','Financial controls'],managerId:'luis',memberIds:['luis'],resourceIds:['finance-guide'],email:'financeops.gbs@example.com',location:'Global'},
 {id:'people-services',name:'People Services',subDepartmentId:'gps-bo',description:'Help colleagues find clear answers and support throughout their employee journey.',responsibilities:['Employee help services','People operations','Policy guidance'],managerId:'amina',memberIds:['amina'],resourceIds:['people-handbook'],email:'peopleservices.gbs@example.com',location:'Global'},
 {id:'procurement',name:'Procurement',subDepartmentId:'gps-bo',description:'Enable responsible, straightforward purchasing and supplier partnerships.',responsibilities:['Supplier enablement','Purchase operations','Sourcing support'],managerId:'noah',memberIds:['noah'],resourceIds:['procurement-guide'],email:'procurement.gbs@example.com',location:'Global'},
]
export const subDepartments:SubDepartment[]=[
 {id:'gbs-bts',name:'GBS-BTS',fullName:'Business Technology Services',description:'Technology, platforms and services that enable our people to do their best work.',leadId:'david',teamIds:['platform','infrastructure','automation','service-ops'],resourceIds:['cloud-guide','engineering-handbook','service-catalog']},
 {id:'gps-bo',name:'GPS-BO',fullName:'Business Operations',description:'Connected operational services that make everyday business simpler and more effective.',leadId:'sarah',teamIds:['business-ops','finance-ops','people-services','procurement'],resourceIds:['process-library','finance-guide','people-handbook']},
]
export const announcements:Announcement[]=[
 {id:'a1',category:'People',title:'Meet the teams behind GBS',summary:'Get to know the colleagues and capabilities that make up our global services community.',date:'2025-03-18',audience:'GBS',featured:true},
 {id:'a2',category:'Technology',title:'Platform engineering: Q2 roadmap',summary:'A look at the improvements planned for our developer platform this quarter.',date:'2025-03-14',audience:'GBS-BTS'},
 {id:'a3',category:'Event',title:'GBS all-hands — save the date',summary:'Join colleagues across GBS for our next community update and conversation.',date:'2025-03-11',audience:'GBS'},
 {id:'a4',category:'Operations',title:'Updated expense guidance is now available',summary:'The latest guidance makes it easier to find answers to common expense questions.',date:'2025-03-06',audience:'GPS-BO'},
]
export const resources:Resource[]=[
 {id:'cloud-guide',title:'Cloud platform guide',category:'IT',description:'Standards, access and getting started with our cloud platforms.',updated:'Mar 12, 2025',owner:'Platform Engineering',type:'Guide'},
 {id:'engineering-handbook',title:'Engineering handbook',category:'Processes',description:'How we build, review and operate software across GBS-BTS.',updated:'Mar 10, 2025',owner:'Platform Engineering',type:'Handbook'},
 {id:'automation-playbook',title:'Automation playbook',category:'Training',description:'Patterns and practical guidance for workflow automation.',updated:'Mar 4, 2025',owner:'Automation',type:'Playbook'},
 {id:'service-catalog',title:'Technology service catalog',category:'IT',description:'Find a service, understand what it offers and request support.',updated:'Feb 28, 2025',owner:'Service Operations',type:'Catalog'},
 {id:'process-library',title:'Business process library',category:'Processes',description:'A shared home for operating procedures and process maps.',updated:'Mar 8, 2025',owner:'Business Operations',type:'Library'},
 {id:'finance-guide',title:'Finance services guide',category:'Forms',description:'Quick answers for invoices, expenses and finance requests.',updated:'Feb 26, 2025',owner:'Finance Operations',type:'Guide'},
 {id:'people-handbook',title:'People services handbook',category:'HR',description:'Employee guidance, policies and routes to people support.',updated:'Feb 20, 2025',owner:'People Services',type:'Handbook'},
 {id:'procurement-guide',title:'Buying and procurement guide',category:'Policies',description:'How to raise a request and work with approved suppliers.',updated:'Feb 18, 2025',owner:'Procurement',type:'Guide'},
]
export const quickLinks:QuickLink[]=[
 {id:'teams',title:'Microsoft Teams',description:'Chat and collaborate with colleagues.',href:'https://teams.microsoft.com',icon:'MessageCircle'},
 {id:'outlook',title:'Outlook',description:'Email, calendar and meetings.',href:'https://outlook.office.com',icon:'Mail'},
 {id:'sharepoint',title:'SharePoint',description:'Your GBS files and shared spaces.',href:'https://sharepoint.com',icon:'Files'},
 {id:'hr',title:'HR Portal',description:'People support and employee services.',href:'#',icon:'HeartHandshake'},
 {id:'service-desk',title:'IT Service Desk',description:'Get help with technology and access.',href:'#',icon:'Headset'},
 {id:'learning',title:'Learning Portal',description:'Explore learning and development.',href:'#',icon:'GraduationCap'},
]
export const documents:Document[]=[
 {id:'d1',name:'GBS team directory',type:'XLSX',category:'People',owner:'GBS Operations',updated:'Mar 18, 2025',area:'GBS'},
 {id:'d2',name:'Cloud platform standards',type:'PDF',category:'Technology',owner:'Platform Engineering',updated:'Mar 12, 2025',area:'GBS-BTS'},
 {id:'d3',name:'GBS operating model',type:'PDF',category:'Organization',owner:'Business Operations',updated:'Mar 8, 2025',area:'GBS'},
 {id:'d4',name:'New starter checklist',type:'DOCX',category:'People',owner:'People Services',updated:'Feb 20, 2025',area:'GPS-BO'},
]
export const events:Event[]=[
 {id:'e1',title:'GBS all-hands',date:'Mar 26',time:'10:00 AM GMT',location:'Teams · Global',type:'Community'},
 {id:'e2',title:'Platform engineering office hours',date:'Mar 28',time:'2:00 PM GMT',location:'Teams · Global',type:'Learning'},
 {id:'e3',title:'Operations community drop-in',date:'Apr 02',time:'11:30 AM GMT',location:'Teams · Global',type:'Community'},
]
// Complete the directory to match the stakeholder-facing GBS snapshot while
// keeping each sample employee attached to a real team in the hierarchy.
const givenNames=['Aarav','Amelia','Arjun','Ava','Ben','Camila','Chloe','Daniel','Fatima','Grace','Haruto','Isabella','Ivan','Jade','Kavya','Leo','Maya','Nikhil','Olivia','Ravi','Sofia','Theo','Uma','Victor','Yara','Zoe','Adam','Beatriz','Caleb','Divya','Ethan','Farah','Gabriel','Hana','Isaac','Julia','Kiran','Lena','Mateo','Nora','Omar','Paula','Quinn','Rina','Sam','Talia','Umar','Valentina','Wei','Xavier','Yusuf','Zara','Anika']
const familyNames=['Anderson','Bennett','Costa','Desai','Evans','Fischer','Gupta','Hughes','Ito','Johnson','Khan','Lee','Martin','Nair','Olsen','Patel','Reed','Singh','Taylor','Usman','Vega','Wong','Young','Zhang','Ahmed','Brooks','Clarke','Das','Edwards','Flores','Ghosh','Hall','Ivanov','Jones','Kim','Lopez','Miller','Nguyen','Owens','Parker','Rao','Sharma','Turner','Wilson','Xu','Yamada','Zimmerman','Ali','Baker','Chen','Doyle','Fernandez','Green']
const locations=['Bengaluru','London','Singapore','Dublin','Toronto','Manila','Warsaw','New York','Sydney','Madrid','Cape Town','Tokyo']
const generatedByDepartment:Record<string,number>={'gbs-bts':26,'gps-bo':27}
let generatedIndex=0
for (const subDepartmentId of ['gbs-bts','gps-bo']) {
 const departmentTeams=teams.filter(team=>team.subDepartmentId===subDepartmentId)
 for (let i=0;i<generatedByDepartment[subDepartmentId];i++) {
  const team=departmentTeams[i%departmentTeams.length]
  const first=givenNames[generatedIndex%givenNames.length]
  const last=familyNames[(generatedIndex*7+3)%familyNames.length]
  const employee:Employee={id:`gbs-${generatedIndex+1}`,name:`${first} ${last}`,title:i%6===0?'Senior Specialist':i%4===0?'Operations Analyst':'Specialist',teamId:team.id,subDepartmentId,email:`${first.toLowerCase()}.${last.toLowerCase()}@example.com`,location:locations[generatedIndex%locations.length],initials:`${first[0]}${last[0]}`,role:'Employee',color:['blue','rose','green','gold','teal','plum'][generatedIndex%6]}
  people.push(employee)
  team.memberIds.push(employee.id)
  generatedIndex++
 }
}
