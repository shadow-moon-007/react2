export interface Department { id:string; name:string; description:string }
export interface SubDepartment { id:string; name:string; fullName:string; description:string; leadId:string; teamIds:string[]; resourceIds:string[] }
export interface Team { id:string; name:string; subDepartmentId:string; description:string; responsibilities:string[]; managerId:string; memberIds:string[]; resourceIds:string[]; email:string; location:string }
export interface Employee { id:string; name:string; title:string; teamId:string; subDepartmentId:string; email:string; location:string; initials:string; role:'Manager'|'Lead'|'Employee'; color:string }
export interface Announcement { id:string; category:string; title:string; summary:string; date:string; audience:string; featured?:boolean }
export interface Resource { id:string; title:string; category:string; description:string; updated:string; owner:string; type:string }
export interface QuickLink { id:string; title:string; description:string; href:string; icon:string }
export interface Document { id:string; name:string; type:string; category:string; owner:string; updated:string; area:string }
export interface Event { id:string; title:string; date:string; time:string; location:string; type:string }
