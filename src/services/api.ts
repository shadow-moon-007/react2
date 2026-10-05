import * as data from '../data/mockData'
const delay=<T,>(value:T):Promise<T>=>new Promise(resolve=>setTimeout(()=>resolve(value),180))
export const departmentService={get:()=>delay(data.department)}
export const subDepartmentService={list:()=>delay(data.subDepartments),get:(id:string)=>delay(data.subDepartments.find(x=>x.id===id))}
export const teamService={list:()=>delay(data.teams),get:(id:string)=>delay(data.teams.find(x=>x.id===id))}
export const employeeService={list:()=>delay(data.people),get:(id:string)=>delay(data.people.find(x=>x.id===id))}
export const announcementService={list:()=>delay(data.announcements)}
export const resourceService={list:()=>delay(data.resources)}
export const quickLinkService={list:()=>delay(data.quickLinks)}
export const documentService={list:()=>delay(data.documents)}
export const eventService={list:()=>delay(data.events)}
