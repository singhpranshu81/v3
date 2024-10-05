export interface Employee{
    eid:Number,
    ename:string,
    email:string,
    password:string,
    gender:string,
    dob: Date[],
    role:string,
    department:{
        deptId: number,
        name: string
    }
}
