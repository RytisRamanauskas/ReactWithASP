import { useEffect, useState } from "react"
import { IStudent } from "../../interface/IStudent";
import { getApi } from "../../api";


export default function Students() {
    const [students, setStudent] = useState<IStudent[]>([])


    useEffect(() => {
        getApi<IStudent[]>('students').then(s => s && setStudent(s))
    }, []);

    return <div>
        <div className="text-3xl">Students</div>
        <div>{
            students.map(students => <div key={students.id}>{students.fullName} {students.email}</div>)
        }</div>


    </div>
}